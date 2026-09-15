/* 1981 GMC Caballero — cost & mileage log.
 *
 * Static single-page app for GitHub Pages.
 *
 * The repo's CSV files are the source of truth: the app reads them on open, so
 * every device sees the same log. localStorage holds two things only — an
 * outbox of entries not yet committed, and a cached copy of the CSVs so the app
 * still shows the log with no connection. An entry leaves the outbox once its
 * commit is confirmed, which is why nothing can end up logged twice.
 */

'use strict';

const OUTBOX_KEY = 'caballero.entries.v1';
const CACHE_KEY = 'caballero.cache.v1';
const CFG_KEY = 'caballero.config.v1';

// entry_id is last so the human-readable columns stay first, and rows written by
// hand (with no id) remain valid. It is what stops an interrupted push — a
// reload or a backgrounded tab mid-commit — from logging the same entry twice.
const COST_HEADER = ['date', 'cost_type', 'category', 'item', 'vendor', 'part_number', 'amount_cad', 'status', 'issue', 'notes', 'entry_id'];
const MILEAGE_HEADER = ['date', 'odometer_km', 'trip_km', 'purpose', 'driver', 'notes', 'entry_id'];

const DIRECT_CATEGORIES = ['parts', 'labour', 'fluids', 'tires', 'bodywork', 'paint', 'rust repair', 'brakes', 'electrical', 'interior', 'paperwork', 'purchase', 'transport', 'other'];
const INDIRECT_CATEGORIES = ['tools', 'shop supplies', 'consumables', 'storage', 'insurance', 'fuel', 'travel', 'manuals & software', 'shipping', 'other'];

const DEFAULT_CFG = {
  owner: 'abyessof-labs',
  repo: '1981-gmc-caballero',
  branch: 'main',
  costsPath: 'costs.csv',
  mileagePath: 'mileage.csv',
  token: '',
  baseOdometer: 207000
};

/* ------------------------------------------------------------------ state */

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn('could not read', key, err);
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    toast('Could not save — browser storage is full or blocked.', 'bad');
    return false;
  }
}

let outbox = readJSON(OUTBOX_KEY, []);
let cache = Object.assign({ costs: '', mileage: '', fetchedAt: null }, readJSON(CACHE_KEY, {}));
let config = Object.assign({}, DEFAULT_CFG, readJSON(CFG_KEY, {}));

let repoEntries = [];   // parsed out of the cached CSVs
let repoIds = new Set(); // entry_id values already in the repo
let loadState = cache.fetchedAt ? 'stale' : 'empty';  // empty | stale | loading | ok | error
let loadError = '';
let busy = false;

const saveOutbox = () => writeJSON(OUTBOX_KEY, outbox);
const saveCache = () => writeJSON(CACHE_KEY, cache);
const saveConfig = () => writeJSON(CFG_KEY, config);

// The push-only version of this app kept committed entries in local storage
// behind a `synced` flag. The repo is the source of truth now, and those rows
// are already in it, so drop them rather than showing or pushing them twice.
if (outbox.some(e => e.synced)) {
  outbox = outbox.filter(e => !e.synced);
  writeJSON(OUTBOX_KEY, outbox);
}

/** Everything to display: what the repo holds, plus what is still queued. */
const allEntries = () => repoEntries.concat(outbox);
const pending = () => outbox;

function addEntry(entry) {
  entry.id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  entry.created_at = new Date().toISOString();
  entry.local = true;
  outbox.push(entry);
  saveOutbox();
}

/* ------------------------------------------------------------- formatting */

const cad = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' });
const money = n => cad.format(Number(n) || 0);
const km = n => `${Math.round(Number(n) || 0).toLocaleString('en-CA')} km`;
const today = () => new Date().toLocaleDateString('en-CA');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** Notes come from a textarea; keep every entry on one CSV line. */
const oneLine = s => String(s ?? '').replace(/\s*[\r\n]+\s*/g, ' / ').trim();

function ago(iso) {
  if (!iso) return 'never';
  const seconds = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.round(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} h ago`;
  return new Date(iso).toLocaleDateString('en-CA');
}

function toast(message, tone = '') {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.dataset.tone = tone;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.hidden = true; }, tone === 'bad' ? 6000 : 3200);
}

/* -------------------------------------------------------------------- csv */

function csvCell(value) {
  const s = String(value ?? '');
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const csvRow = cells => cells.map(csvCell).join(',');

/** Parse a whole CSV, honouring quoted fields (including embedded newlines). */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (ch !== '\r') cell += ch;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }

  return rows.filter(r => r.some(c => c.trim() !== ''));
}

/** Drop the header row, if the file has one. */
const dataRows = rows => (rows.length && rows[0][0].trim().toLowerCase() === 'date' ? rows.slice(1) : rows);

function parseCosts(text) {
  return dataRows(parseCSV(text)).map((r, i) => ({
    id: `repo-cost-${i}`,
    eid: (r[10] || '').trim(),
    kind: (r[1] || '').trim().toLowerCase() === 'indirect' ? 'indirect' : 'direct',
    date: (r[0] || '').trim(),
    category: (r[2] || '').trim(),
    item: (r[3] || '').trim(),
    vendor: (r[4] || '').trim(),
    part_number: (r[5] || '').trim(),
    amount: (r[6] || '').trim(),
    status: (r[7] || '').trim(),
    issue: (r[8] || '').trim(),
    notes: (r[9] || '').trim(),
    created_at: '',
    local: false
  }));
}

function parseMileage(text) {
  return dataRows(parseCSV(text)).map((r, i) => ({
    id: `repo-mileage-${i}`,
    eid: (r[6] || '').trim(),
    kind: 'mileage',
    date: (r[0] || '').trim(),
    odometer: (r[1] || '').trim(),
    trip: (r[2] || '').trim(),
    purpose: (r[3] || '').trim(),
    driver: (r[4] || '').trim(),
    notes: (r[5] || '').trim(),
    created_at: '',
    local: false
  }));
}

function reparse() {
  repoEntries = parseCosts(cache.costs).concat(parseMileage(cache.mileage));
  repoIds = new Set(repoEntries.map(e => e.eid).filter(Boolean));
}

const costRow = e => csvRow([e.date, e.kind, e.category, e.item, e.vendor, e.part_number, e.amount, e.status, e.issue, oneLine(e.notes), e.id]);
const mileageRow = e => csvRow([e.date, e.odometer, e.trip, e.purpose, e.driver, oneLine(e.notes), e.id]);

/** Append rows to an existing CSV body, adding the header if the file is new. */
function appendRows(existing, header, rows) {
  const base = (existing || '').replace(/\s*$/, '');
  const head = base ? base : csvRow(header);
  return `${head}\n${rows.join('\n')}\n`;
}

function download(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ----------------------------------------------------------------- totals */

/**
 * The odometer the car came with. It lives in the first row of mileage.csv, so
 * every device agrees on it — a per-browser setting would drift between them.
 * The setting is only the fallback for a mileage file with nothing in it yet.
 */
function baselineOdometer() {
  const first = repoEntries.find(e => e.kind === 'mileage' && Number(e.odometer) > 0);
  return first ? Number(first.odometer) : (Number(config.baseOdometer) || 0);
}

function totals() {
  const rows = allEntries();
  const sum = kind => rows
    .filter(e => e.kind === kind)
    .reduce((acc, e) => acc + (Number(e.amount) || 0), 0);

  const readings = rows
    .filter(e => e.kind === 'mileage')
    .map(e => Number(e.odometer))
    .filter(n => Number.isFinite(n) && n > 0);

  const latest = readings.length ? Math.max(...readings) : null;
  const base = baselineOdometer();

  return {
    direct: sum('direct'),
    indirect: sum('indirect'),
    odometer: latest,
    driven: latest == null ? null : Math.max(0, latest - base)
  };
}

/** Highest odometer reading on record, used to pre-compute trip distance. */
function lastOdometer() {
  const readings = allEntries()
    .filter(e => e.kind === 'mileage')
    .map(e => Number(e.odometer))
    .filter(n => Number.isFinite(n) && n > 0);
  return readings.length ? Math.max(...readings) : baselineOdometer() || null;
}

/* ------------------------------------------------------------------ views */

function repoStatusLine() {
  if (loadState === 'loading') return 'Loading from the repo…';
  if (loadState === 'ok') return `Up to date with the repo, checked ${ago(cache.fetchedAt)}.`;
  if (loadState === 'error') return `${loadError} Showing the copy saved ${ago(cache.fetchedAt)}.`;
  if (loadState === 'stale') return `Showing the copy saved ${ago(cache.fetchedAt)}.`;
  return 'Nothing loaded from the repo yet — tap the button up top to fetch it.';
}

function homeView() {
  const t = totals();
  return `
    <h1>What are you logging?</h1>
    <p class="lede">Saved on this device right away, then committed to the repo so every device sees it.</p>

    <div class="actions">
      <a class="action" href="#/direct" data-tone="direct">
        <span class="glyph">&#128295;</span>
        <span><b>Log direct cost</b><span class="sub">Parts, labour, fluids — spend on the car itself</span></span>
      </a>
      <a class="action" href="#/indirect" data-tone="indirect">
        <span class="glyph">&#127981;</span>
        <span><b>Log indirect cost</b><span class="sub">Tools, storage, insurance, shop supplies</span></span>
      </a>
      <a class="action" href="#/mileage" data-tone="mileage">
        <span class="glyph">&#128663;</span>
        <span><b>Log mileage</b><span class="sub">Odometer reading after a drive</span></span>
      </a>
    </div>

    <h2>Running totals</h2>
    <div class="tiles">
      <div class="tile" data-tone="direct"><div class="k">Direct</div><div class="v">${money(t.direct)}</div></div>
      <div class="tile" data-tone="indirect"><div class="k">Indirect</div><div class="v">${money(t.indirect)}</div></div>
      <div class="tile"><div class="k">All in</div><div class="v">${money(t.direct + t.indirect)}</div></div>
      <div class="tile" data-tone="mileage">
        <div class="k">Driven since purchase</div>
        <div class="v">${t.driven == null ? '—' : km(t.driven)}</div>
      </div>
    </div>
    <p class="hint" data-state="${loadState}">${esc(repoStatusLine())}</p>
    ${t.odometer == null ? '' : `<p class="hint">Last odometer reading ${km(t.odometer)}, baseline ${km(baselineOdometer())}.</p>`}
  `;
}

function options(list, selected) {
  return list.map(v => `<option value="${esc(v)}"${v === selected ? ' selected' : ''}>${esc(v)}</option>`).join('');
}

function costForm(kind) {
  const isDirect = kind === 'direct';
  const cats = isDirect ? DIRECT_CATEGORIES : INDIRECT_CATEGORIES;
  return `
    <h1>${isDirect ? 'Direct cost' : 'Indirect cost'}</h1>
    <p class="lede">${isDirect
      ? 'Money spent on the Caballero itself — parts, labour, materials, registration.'
      : 'Overhead that supports the project but is not part of the car — tools, storage, insurance, running around.'}</p>

    <form class="card" id="entryForm" data-kind="${kind}">
      <div class="row">
        <div class="field">
          <label for="date">Date</label>
          <input type="date" id="date" name="date" value="${today()}" required>
        </div>
        <div class="field">
          <label for="amount">Amount (CAD)</label>
          <input type="number" id="amount" name="amount" inputmode="decimal" step="0.01" min="0" placeholder="0.00" required>
        </div>
      </div>

      <div class="field">
        <label for="item">Item</label>
        <input type="text" id="item" name="item" placeholder="${isDirect ? 'Front brake pads' : 'Floor jack'}" required>
      </div>

      <div class="row">
        <div class="field">
          <label for="category">Category</label>
          <select id="category" name="category">${options(cats, isDirect ? 'parts' : 'tools')}</select>
        </div>
        <div class="field">
          <label for="status">Status</label>
          <select id="status" name="status">${options(['paid', 'pending', 'quoted', 'refunded'], 'paid')}</select>
        </div>
      </div>

      <div class="field">
        <label for="vendor">Vendor <span class="opt">— optional</span></label>
        <input type="text" id="vendor" name="vendor" placeholder="Rock Auto, NAPA, local shop…">
      </div>

      ${isDirect ? `
      <div class="row">
        <div class="field">
          <label for="part_number">Part number <span class="opt">— optional</span></label>
          <input type="text" id="part_number" name="part_number" placeholder="e.g. D52">
        </div>
        <div class="field">
          <label for="issue">Issue # <span class="opt">— optional</span></label>
          <input type="text" id="issue" name="issue" inputmode="numeric" placeholder="12">
        </div>
      </div>` : ''}

      <div class="field">
        <label for="notes">Notes <span class="opt">— optional</span></label>
        <textarea id="notes" name="notes" placeholder="Anything worth remembering later"></textarea>
      </div>

      <div class="btn-row">
        <a class="btn ghost" href="#/">Cancel</a>
        <button class="btn" type="submit">Save entry</button>
      </div>
    </form>
  `;
}

function mileageForm() {
  const last = lastOdometer();
  return `
    <h1>Mileage</h1>
    <p class="lede">Log the odometer after a drive. Trip distance is worked out from your previous reading.</p>

    <form class="card" id="entryForm" data-kind="mileage">
      <div class="row">
        <div class="field">
          <label for="date">Date</label>
          <input type="date" id="date" name="date" value="${today()}" required>
        </div>
        <div class="field">
          <label for="odometer">Odometer (km)</label>
          <input type="number" id="odometer" name="odometer" inputmode="numeric" step="1" min="0"
                 placeholder="${last ?? DEFAULT_CFG.baseOdometer}" required>
        </div>
      </div>
      <p class="hint" id="tripHint">${last ? `Previous reading: ${km(last)}.` : 'No previous reading — this one sets the baseline.'}</p>

      <div class="field">
        <label for="purpose">Purpose <span class="opt">— optional</span></label>
        <input type="text" id="purpose" name="purpose" placeholder="Shakedown run, trip to the shop…">
      </div>

      <div class="field">
        <label for="driver">Driver <span class="opt">— optional</span></label>
        <input type="text" id="driver" name="driver" placeholder="Who was behind the wheel">
      </div>

      <div class="field">
        <label for="notes">Notes <span class="opt">— optional</span></label>
        <textarea id="notes" name="notes" placeholder="How did it drive? Anything new or worse?"></textarea>
      </div>

      <div class="btn-row">
        <a class="btn ghost" href="#/">Cancel</a>
        <button class="btn" type="submit">Save entry</button>
      </div>
    </form>
  `;
}

let entryFilter = 'all';

function entriesView() {
  const shown = allEntries()
    .filter(e => entryFilter === 'all' || e.kind === entryFilter)
    .sort((a, b) => ((b.date || '').localeCompare(a.date || '') || (b.created_at || '').localeCompare(a.created_at || '')));

  const filters = [['all', 'All'], ['direct', 'Direct'], ['indirect', 'Indirect'], ['mileage', 'Mileage']]
    .map(([key, label]) => `<button type="button" data-filter="${key}" aria-pressed="${entryFilter === key}">${label}</button>`)
    .join('');

  const list = shown.length ? shown.map(entryRow).join('') : `
    <div class="empty">Nothing logged${entryFilter === 'all' ? ' yet' : ` under “${entryFilter}”`}.</div>`;

  const queued = pending().length;
  return `
    <h1>Entries</h1>
    <p class="lede">${repoEntries.length} in the repo${queued ? `, ${queued} waiting to be pushed` : ''}.</p>
    <p class="hint" data-state="${loadState}">${esc(repoStatusLine())}</p>
    <div class="filters">${filters}</div>
    ${list}
    <h2>Export</h2>
    <div class="btn-row" style="margin-top:0">
      <button class="btn ghost" type="button" data-export="costs">Costs CSV</button>
      <button class="btn ghost" type="button" data-export="mileage">Mileage CSV</button>
    </div>
    <p class="hint">Downloads everything shown above, repo rows included.</p>
  `;
}

function entryRow(e) {
  const flag = e.local ? '<span class="dot" title="on this device, not yet pushed"></span>' : '';
  const del = e.local
    ? `<button class="del" type="button" data-del="${e.id}" aria-label="Delete entry">&times;</button>`
    : '';

  if (e.kind === 'mileage') {
    const meta = [e.trip ? `${km(e.trip)} this trip` : null, e.purpose, e.driver, e.notes].filter(Boolean).join(' · ');
    return `
      <div class="entry" data-kind="mileage">
        <div class="body">
          <div class="title">${e.odometer ? km(e.odometer) : '—'}${flag}</div>
          <div class="meta">${esc(e.date || 'no date')}${meta ? ` · ${esc(meta)}` : ''}</div>
        </div>
        ${del}
      </div>`;
  }

  const meta = [e.category, e.vendor, e.status, e.part_number, e.issue ? `#${e.issue}` : null, e.notes].filter(Boolean).join(' · ');
  return `
    <div class="entry" data-kind="${esc(e.kind)}">
      <div class="body">
        <div class="title">${esc(e.item)}${flag}</div>
        <div class="meta">${esc(e.date || 'no date')}${meta ? ` · ${esc(meta)}` : ''}</div>
      </div>
      <div class="amt">${e.amount === '' ? '—' : money(e.amount)}</div>
      ${del}
    </div>`;
}

/**
 * Deliberately does not show the repo coordinates — owner, repo name, branch,
 * file paths. They are fixed in DEFAULT_CFG and never rendered, so a screenshot
 * of this screen, or someone glancing at the phone, gives away no account. The
 * app still reads and writes exactly as before; only the display is gone.
 */
function settingsView() {
  return `
    <h1>Settings</h1>
    <p class="lede">Your token, and what the odometer counts from.</p>

    <form class="card" id="cfgForm">
      <div class="field">
        <label for="baseOdometer">Baseline odometer (km)</label>
        <input type="number" id="baseOdometer" name="baseOdometer" step="1" min="0" value="${esc(config.baseOdometer)}">
      </div>
      <p class="hint">The baseline in use is ${km(baselineOdometer())}, taken from the first row of the
        mileage file so every device agrees on it. Edit that row to change it —
        the box above is only used while the mileage file is empty.</p>

      <div class="field">
        <label for="token">GitHub token <span class="opt">— only needed to log new entries</span></label>
        <input type="password" id="token" name="token" value="${esc(config.token)}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="github_pat_…">
      </div>

      <div class="btn-row">
        <button class="btn" type="submit">Save settings</button>
      </div>
    </form>

    <div class="note">
      <b>Reading needs no token</b> while the repo is public — any device can open this and see the whole log.
      A token is only needed to <em>write</em>: it commits your queued entries onto the end of the
      cost and mileage files. Use a
      <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">fine-grained
      personal access token</a> scoped to this one repository with <b>Contents: read and write</b>, nothing else,
      and a short expiry.
    </div>

    <div class="note">
      <b>Where the token lives.</b> In this browser's <code>localStorage</code>, in plain text, and it is sent only to
      <code>api.github.com</code>. Anything else served from the same <code>github.io</code> subdomain can read it, so
      don't use an account-wide or classic token here. Revoke it in GitHub settings if the device is lost.
    </div>

    <h2>Danger zone</h2>
    <div class="btn-row" style="margin-top:0">
      <button class="btn danger wide" type="button" id="wipeBtn">Discard queued entries</button>
    </div>
    <p class="hint">Only clears what this device has not pushed yet. Anything already in the repo is untouched.</p>
  `;
}

/* --------------------------------------------------------------- routing */

const ROUTES = {
  '/': homeView,
  '/direct': () => costForm('direct'),
  '/indirect': () => costForm('indirect'),
  '/mileage': mileageForm,
  '/entries': entriesView,
  '/settings': settingsView
};

function route() {
  const path = (location.hash.replace(/^#/, '') || '/');
  const view = ROUTES[path] || ROUTES['/'];
  document.getElementById('app').innerHTML = view();
  window.scrollTo(0, 0);

  document.querySelectorAll('.tabbar a').forEach(a => {
    const onForm = path === '/direct' || path === '/indirect' || path === '/mileage';
    if (a.dataset.tab === path || (onForm && a.dataset.tab === '/')) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  wireView();
  refreshSyncChip();
}

function refreshSyncChip() {
  const n = pending().length;
  const btn = document.getElementById('syncBtn');
  const label = document.getElementById('syncLabel');
  if (busy) {
    btn.dataset.state = 'busy';
    label.textContent = 'Syncing…';
    return;
  }
  btn.dataset.state = n ? 'dirty' : (loadState === 'error' ? 'error' : 'clean');
  label.textContent = n ? `${n} to push` : (loadState === 'error' ? 'Retry' : 'Refresh');
}

/* --------------------------------------------------------------- wiring */

function wireView() {
  const form = document.getElementById('entryForm');
  if (form) {
    form.addEventListener('submit', onEntrySubmit);
    const odo = form.querySelector('#odometer');
    if (odo) odo.addEventListener('input', onOdometerInput);
  }

  const cfgForm = document.getElementById('cfgForm');
  if (cfgForm) cfgForm.addEventListener('submit', onConfigSubmit);

  const wipe = document.getElementById('wipeBtn');
  if (wipe) wipe.addEventListener('click', () => {
    const n = pending().length;
    if (!n) return toast('Nothing queued on this device.');
    if (!confirm(`Discard ${n} queued ${n === 1 ? 'entry' : 'entries'}? ${n === 1 ? 'It has' : 'They have'} never been pushed, so ${n === 1 ? 'it is' : 'they are'} lost for good.`)) return;
    outbox = [];
    saveOutbox();
    toast('Queued entries discarded.');
    route();
  });

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => { entryFilter = btn.dataset.filter; route(); });
  });

  document.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!confirm('Delete this queued entry? It has not been pushed yet.')) return;
      outbox = outbox.filter(e => e.id !== btn.dataset.del);
      saveOutbox();
      route();
    });
  });

  document.querySelectorAll('[data-export]').forEach(btn => {
    btn.addEventListener('click', () => {
      const costs = btn.dataset.export === 'costs';
      const rows = allEntries().filter(e => (costs ? e.kind !== 'mileage' : e.kind === 'mileage'));
      if (!rows.length) return toast('Nothing to export yet.');
      const header = costs ? COST_HEADER : MILEAGE_HEADER;
      download(costs ? 'costs-export.csv' : 'mileage-export.csv',
        appendRows('', header, rows.map(costs ? costRow : mileageRow)));
    });
  });
}

function onOdometerInput(event) {
  const hint = document.getElementById('tripHint');
  const last = lastOdometer();
  const value = Number(event.target.value);
  if (!hint || !last) return;
  if (!Number.isFinite(value) || !event.target.value) {
    hint.className = 'hint';
    hint.textContent = `Previous reading: ${km(last)}.`;
  } else if (value < last) {
    hint.className = 'hint';
    hint.textContent = `That is below the previous reading of ${km(last)} — trip distance will be left blank.`;
  } else {
    hint.className = 'hint calc';
    hint.textContent = `${km(value - last)} since the last reading of ${km(last)}.`;
  }
}

function onEntrySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const kind = form.dataset.kind;
  const data = Object.fromEntries(new FormData(form).entries());
  const trimmed = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v).trim()]));

  if (kind === 'mileage') {
    const odometer = Number(trimmed.odometer);
    if (!Number.isFinite(odometer) || odometer < 0) return toast('Enter a valid odometer reading.', 'bad');
    const last = lastOdometer();
    addEntry({
      kind,
      date: trimmed.date,
      odometer: Math.round(odometer),
      trip: last != null && odometer >= last ? Math.round(odometer - last) : '',
      purpose: trimmed.purpose || '',
      driver: trimmed.driver || '',
      notes: trimmed.notes || ''
    });
  } else {
    const amount = Number(trimmed.amount);
    if (!Number.isFinite(amount) || amount < 0) return toast('Enter a valid amount.', 'bad');
    addEntry({
      kind,
      date: trimmed.date,
      category: trimmed.category || '',
      item: trimmed.item,
      vendor: trimmed.vendor || '',
      part_number: trimmed.part_number || '',
      amount: amount.toFixed(2),
      status: trimmed.status || '',
      issue: (trimmed.issue || '').replace(/^#/, ''),
      notes: trimmed.notes || ''
    });
  }

  if (location.hash === '#/') route(); // no hashchange to wait for
  else location.hash = '#/';

  if (config.token) syncNow(false);
  else toast('Saved on this device. Add a token in Settings to push it.', 'good');
}

// Only the two fields Settings still shows. The repo coordinates are not on the
// form, so they keep whatever DEFAULT_CFG (or a previously saved config) holds.
function onConfigSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  config = Object.assign(config, {
    token: data.token.trim(),
    baseOdometer: Number(data.baseOdometer) || 0
  });
  saveConfig();
  toast('Settings saved.', 'good');
  route();
  syncNow(false);
}

/* -------------------------------------------------------- github traffic */

const b64encode = text => {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary);
};

const b64decode = text => {
  const binary = atob(String(text).replace(/\s/g, ''));
  return new TextDecoder().decode(Uint8Array.from(binary, c => c.charCodeAt(0)));
};

async function gh(path, init = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
  if (config.token) headers.Authorization = `Bearer ${config.token}`;
  return fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`,
    Object.assign({ headers, cache: 'no-store' }, init));
}

/** Current content and blob sha of a repo file, or null if it does not exist. */
async function fetchFile(path) {
  const response = await gh(`${path}?ref=${encodeURIComponent(config.branch)}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(await describeError(response));
  const json = await response.json();
  return { sha: json.sha, text: b64decode(json.content || '') };
}

/** fetch() rejects with an opaque TypeError when the network is simply gone. */
const offlineError = err => err instanceof TypeError || /failed to fetch|networkerror|load failed/i.test(err.message || '');

const friendly = (err, queued) => (offlineError(err)
  ? (queued ? 'No connection — your entry is queued and goes up next time you sync.' : 'No connection.')
  : (err.message || 'Something went wrong talking to GitHub.'));

async function describeError(response) {
  let detail = '';
  try {
    const json = await response.json();
    detail = json.message || '';
  } catch (err) { /* non-JSON error body */ }
  if (response.status === 401) return 'GitHub rejected the token (401). Check it has not expired.';
  if (response.status === 403 && /rate limit/i.test(detail)) return 'GitHub rate limit reached. Wait a few minutes, or add a token in Settings to raise the limit.';
  if (response.status === 403) return `GitHub refused the request (403). The token likely lacks "Contents: read and write" on this repo. ${detail}`;
  if (response.status === 404) return `Repo, branch, or path not found (404) — also what GitHub returns when a token cannot see the repo. ${detail}`;
  return `GitHub error ${response.status}. ${detail}`;
}

/** Append rows to one CSV file and commit it. Returns the new file contents. */
async function commitRows(path, header, rows, message) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const file = await fetchFile(path);
    const text = appendRows(file ? file.text : '', header, rows);
    const body = { message, content: b64encode(text), branch: config.branch };
    if (file) body.sha = file.sha;

    const response = await gh(path, { method: 'PUT', body: JSON.stringify(body) });
    if (response.ok) return text;
    if (response.status === 409 && attempt === 0) continue; // someone else committed; re-read and retry
    throw new Error(await describeError(response));
  }
}

/** Read both CSVs into the cache. */
async function loadRepo() {
  const [costs, mileage] = await Promise.all([fetchFile(config.costsPath), fetchFile(config.mileagePath)]);
  cache = {
    costs: costs ? costs.text : '',
    mileage: mileage ? mileage.text : '',
    fetchedAt: new Date().toISOString()
  };
  saveCache();
  reparse();
  dropCommitted();
}

/** An entry the repo already carries no longer belongs in the outbox. */
function dropCommitted() {
  const done = outbox.filter(e => repoIds.has(e.id));
  if (!done.length) return;
  outbox = outbox.filter(e => !repoIds.has(e.id));
  saveOutbox();
}

/**
 * Read the repo, then push whatever it is still missing.
 *
 * Reading first is what makes this safe to interrupt: an entry committed by a
 * page load that was reloaded or backgrounded mid-push comes back with its
 * entry_id, so it is recognised and dropped instead of committed a second time.
 */
async function syncNow(userInitiated) {
  if (busy) return;
  busy = true;
  loadState = 'loading';
  refreshSyncChip();

  let pushed = 0;
  let failure = '';

  try {
    await loadRepo();
    loadState = 'ok';
    loadError = '';
  } catch (err) {
    loadState = 'error';
    loadError = friendly(err, false);
    busy = false;
    route();
    // Reading failed, so writing almost certainly would too — keep the queue and stop.
    if (userInitiated || pending().length) toast(friendly(err, Boolean(pending().length)), 'bad');
    return;
  }

  const queued = pending();
  try {
    if (queued.length && !config.token) {
      failure = 'Add a GitHub token in Settings to push these entries.';
      if (userInitiated) location.hash = '#/settings';
    } else if (queued.length) {
      const costs = queued.filter(e => e.kind !== 'mileage');
      const miles = queued.filter(e => e.kind === 'mileage');
      if (costs.length) {
        cache.costs = await commitRows(config.costsPath, COST_HEADER, costs.map(costRow),
          `Log ${costs.length} cost ${costs.length === 1 ? 'entry' : 'entries'}`);
        pushed += costs.length;
      }
      if (miles.length) {
        cache.mileage = await commitRows(config.mileagePath, MILEAGE_HEADER, miles.map(mileageRow),
          `Log ${miles.length} mileage ${miles.length === 1 ? 'reading' : 'readings'}`);
        pushed += miles.length;
      }
    }
  } catch (err) {
    failure = friendly(err, true);
  } finally {
    // Rows that made it are in the committed text, so reparsing clears them from the queue.
    cache.fetchedAt = new Date().toISOString();
    saveCache();
    reparse();
    dropCommitted();
  }

  busy = false;
  route();

  if (failure) toast(failure, 'bad');
  else if (pushed) toast(`Pushed ${pushed} ${pushed === 1 ? 'entry' : 'entries'} to the repo.`, 'good');
  else if (userInitiated) toast(`Up to date — ${repoEntries.length} ${repoEntries.length === 1 ? 'entry' : 'entries'} in the repo.`, 'good');
}

/* ------------------------------------------------------------------ boot */

reparse();
document.getElementById('syncBtn').addEventListener('click', () => syncNow(true));
window.addEventListener('hashchange', route);

// Come back to a foregrounded tab with fresh data — this is what makes a second
// device pick up entries logged on the first.
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && loadState !== 'loading') syncNow(false);
});

route();
syncNow(false);
