/* 1981 GMC Caballero — cost & mileage log.
 *
 * Static single-page app for GitHub Pages. Entries are written to localStorage
 * immediately (so the app works offline and with no account), and can then be
 * committed to this repo's CSV files through the GitHub contents API.
 */

'use strict';

const STORE_KEY = 'caballero.entries.v1';
const CFG_KEY = 'caballero.config.v1';

const COST_HEADER = ['date', 'cost_type', 'category', 'item', 'vendor', 'part_number', 'amount_cad', 'status', 'issue', 'notes'];
const MILEAGE_HEADER = ['date', 'odometer_km', 'trip_km', 'purpose', 'driver', 'notes'];

const DIRECT_CATEGORIES = ['parts', 'labour', 'fluids', 'tires', 'bodywork', 'paint', 'rust repair', 'brakes', 'electrical', 'interior', 'paperwork', 'purchase', 'transport', 'other'];
const INDIRECT_CATEGORIES = ['tools', 'shop supplies', 'consumables', 'storage', 'insurance', 'fuel', 'travel', 'manuals & software', 'shipping', 'other'];

const DEFAULT_CFG = {
  owner: 'abyessof-labs',
  repo: '1981-gmc-caballero',
  branch: 'main',
  costsPath: 'costs.csv',
  mileagePath: 'mileage.csv',
  token: '',
  baseOdometer: 106000
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

let entries = readJSON(STORE_KEY, []);
let config = Object.assign({}, DEFAULT_CFG, readJSON(CFG_KEY, {}));

const saveEntries = () => writeJSON(STORE_KEY, entries);
const saveConfig = () => writeJSON(CFG_KEY, config);

const pending = () => entries.filter(e => !e.synced);

function addEntry(entry) {
  entry.id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  entry.created_at = new Date().toISOString();
  entry.synced = false;
  entries.push(entry);
  saveEntries();
}

/* ------------------------------------------------------------- formatting */

const cad = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' });
const money = n => cad.format(Number(n) || 0);
const km = n => `${Math.round(Number(n) || 0).toLocaleString('en-CA')} km`;
const today = () => new Date().toLocaleDateString('en-CA');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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

/** Split one CSV line, honouring quoted fields. */
function csvSplit(line) {
  const out = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { out.push(cell); cell = ''; }
    else cell += ch;
  }
  out.push(cell);
  return out;
}

function costRow(e) {
  return csvRow([e.date, e.kind, e.category, e.item, e.vendor, e.part_number, e.amount, e.status, e.issue, e.notes]);
}

function mileageRow(e) {
  return csvRow([e.date, e.odometer, e.trip, e.purpose, e.driver, e.notes]);
}

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

function totals() {
  const sum = kind => entries
    .filter(e => e.kind === kind)
    .reduce((acc, e) => acc + (Number(e.amount) || 0), 0);

  const readings = entries
    .filter(e => e.kind === 'mileage' && e.odometer !== '' && e.odometer != null)
    .map(e => Number(e.odometer))
    .filter(n => Number.isFinite(n));

  const latest = readings.length ? Math.max(...readings) : null;
  const base = Number(config.baseOdometer) || 0;

  return {
    direct: sum('direct'),
    indirect: sum('indirect'),
    odometer: latest,
    driven: latest == null ? null : Math.max(0, latest - base)
  };
}

/** Most recent odometer reading, used to pre-compute trip distance. */
function lastOdometer() {
  const logs = entries
    .filter(e => e.kind === 'mileage' && Number.isFinite(Number(e.odometer)))
    .sort((a, b) => (a.date === b.date ? a.created_at.localeCompare(b.created_at) : a.date.localeCompare(b.date)));
  return logs.length ? Number(logs[logs.length - 1].odometer) : Number(config.baseOdometer) || null;
}

/* ------------------------------------------------------------------ views */

function homeView() {
  const t = totals();
  return `
    <h1>What are you logging?</h1>
    <p class="lede">Saved on this device right away. Push to the repo whenever you like.</p>

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
    <p class="hint">${t.odometer == null
      ? `No odometer reading logged yet. Baseline is ${km(config.baseOdometer)}.`
      : `Last odometer reading ${km(t.odometer)}, baseline ${km(config.baseOdometer)}.`}</p>
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
                 placeholder="${last ?? 106000}" required>
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
  const shown = entries
    .filter(e => entryFilter === 'all' || e.kind === entryFilter)
    .sort((a, b) => (a.date === b.date ? b.created_at.localeCompare(a.created_at) : b.date.localeCompare(a.date)));

  const filters = [['all', 'All'], ['direct', 'Direct'], ['indirect', 'Indirect'], ['mileage', 'Mileage']]
    .map(([key, label]) => `<button type="button" data-filter="${key}" aria-pressed="${entryFilter === key}">${label}</button>`)
    .join('');

  const list = shown.length ? shown.map(entryRow).join('') : `
    <div class="empty">Nothing logged${entryFilter === 'all' ? ' yet' : ` under “${entryFilter}”`}.</div>`;

  return `
    <h1>Entries</h1>
    <p class="lede">${entries.length} logged on this device, ${pending().length} not yet in the repo.</p>
    <div class="filters">${filters}</div>
    ${list}
    <h2>Export</h2>
    <div class="btn-row" style="margin-top:0">
      <button class="btn ghost" type="button" data-export="costs">Costs CSV</button>
      <button class="btn ghost" type="button" data-export="mileage">Mileage CSV</button>
    </div>
    <p class="hint">Downloads only the rows held on this device, ready to paste into the repo by hand.</p>
  `;
}

function entryRow(e) {
  const flag = e.synced ? '' : '<span class="dot" title="not yet synced"></span>';
  if (e.kind === 'mileage') {
    const meta = [e.trip ? `${km(e.trip)} this trip` : null, e.purpose, e.driver, e.notes].filter(Boolean).join(' · ');
    return `
      <div class="entry" data-kind="mileage">
        <div class="body">
          <div class="title">${km(e.odometer)}${flag}</div>
          <div class="meta">${esc(e.date)}${meta ? ` · ${esc(meta)}` : ''}</div>
        </div>
        <button class="del" type="button" data-del="${e.id}" aria-label="Delete entry">&times;</button>
      </div>`;
  }
  const meta = [e.category, e.vendor, e.status, e.part_number, e.issue ? `#${e.issue}` : null, e.notes].filter(Boolean).join(' · ');
  return `
    <div class="entry" data-kind="${esc(e.kind)}">
      <div class="body">
        <div class="title">${esc(e.item)}${flag}</div>
        <div class="meta">${esc(e.date)}${meta ? ` · ${esc(meta)}` : ''}</div>
      </div>
      <div class="amt">${money(e.amount)}</div>
      <button class="del" type="button" data-del="${e.id}" aria-label="Delete entry">&times;</button>
    </div>`;
}

function settingsView() {
  return `
    <h1>Settings</h1>
    <p class="lede">Where entries get committed, and what the odometer counts from.</p>

    <form class="card" id="cfgForm">
      <div class="row">
        <div class="field">
          <label for="owner">Repo owner</label>
          <input type="text" id="owner" name="owner" value="${esc(config.owner)}" autocapitalize="none" spellcheck="false">
        </div>
        <div class="field">
          <label for="repo">Repo name</label>
          <input type="text" id="repo" name="repo" value="${esc(config.repo)}" autocapitalize="none" spellcheck="false">
        </div>
      </div>

      <div class="row">
        <div class="field">
          <label for="branch">Branch</label>
          <input type="text" id="branch" name="branch" value="${esc(config.branch)}" autocapitalize="none" spellcheck="false">
        </div>
        <div class="field">
          <label for="baseOdometer">Baseline odometer (km)</label>
          <input type="number" id="baseOdometer" name="baseOdometer" step="1" min="0" value="${esc(config.baseOdometer)}">
        </div>
      </div>

      <div class="row">
        <div class="field">
          <label for="costsPath">Costs file</label>
          <input type="text" id="costsPath" name="costsPath" value="${esc(config.costsPath)}" autocapitalize="none" spellcheck="false">
        </div>
        <div class="field">
          <label for="mileagePath">Mileage file</label>
          <input type="text" id="mileagePath" name="mileagePath" value="${esc(config.mileagePath)}" autocapitalize="none" spellcheck="false">
        </div>
      </div>

      <div class="field">
        <label for="token">GitHub token <span class="opt">— leave blank to stay device-only</span></label>
        <input type="password" id="token" name="token" value="${esc(config.token)}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="github_pat_…">
      </div>

      <div class="btn-row">
        <button class="btn" type="submit">Save settings</button>
      </div>
    </form>

    <div class="note">
      <b>About the token.</b> A GitHub repo is not a database — it is a filesystem with history — so “sync” means
      committing rows onto the end of <code>${esc(config.costsPath)}</code> and <code>${esc(config.mileagePath)}</code>.
      That needs a <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">fine-grained
      personal access token</a> scoped to this one repository with <b>Contents: read and write</b>, and nothing else.
      Give it a short expiry.
    </div>

    <div class="note">
      <b>Where the token lives.</b> In this browser's <code>localStorage</code>, in plain text, and it is sent only to
      <code>api.github.com</code>. Anything else served from the same <code>github.io</code> subdomain can read it, so
      don't use an account-wide or classic token here. Revoke it in GitHub settings if the device is lost.
    </div>

    <h2>Danger zone</h2>
    <div class="btn-row" style="margin-top:0">
      <button class="btn danger wide" type="button" id="wipeBtn">Delete all local entries</button>
    </div>
    <p class="hint">Only clears this device. Anything already committed stays in the repo.</p>
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
    const active = a.dataset.tab === path || (path === '/direct' || path === '/indirect' || path === '/mileage') && a.dataset.tab === '/';
    a.toggleAttribute('aria-current', Boolean(active));
    if (active) a.setAttribute('aria-current', 'page');
  });

  wireView();
  refreshSyncChip();
}

function refreshSyncChip() {
  const n = pending().length;
  const btn = document.getElementById('syncBtn');
  document.getElementById('syncCount').textContent = n;
  btn.dataset.state = n ? 'dirty' : 'clean';
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
    const warning = n
      ? `Delete all ${entries.length} local entries? ${n} of them have never been committed and will be lost for good.`
      : `Delete all ${entries.length} local entries?`;
    if (!confirm(warning)) return;
    entries = [];
    saveEntries();
    toast('Local entries cleared.');
    route();
  });

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => { entryFilter = btn.dataset.filter; route(); });
  });

  document.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const entry = entries.find(e => e.id === btn.dataset.del);
      if (!entry) return;
      const note = entry.synced ? ' It stays in the repo — remove it there separately.' : '';
      if (!confirm(`Delete this entry?${note}`)) return;
      entries = entries.filter(e => e.id !== entry.id);
      saveEntries();
      route();
    });
  });

  document.querySelectorAll('[data-export]').forEach(btn => {
    btn.addEventListener('click', () => {
      const costs = btn.dataset.export === 'costs';
      const rows = entries.filter(e => (costs ? e.kind !== 'mileage' : e.kind === 'mileage'));
      if (!rows.length) return toast('Nothing to export yet.');
      const header = costs ? COST_HEADER : MILEAGE_HEADER;
      const body = rows.map(costs ? costRow : mileageRow);
      download(costs ? 'costs-export.csv' : 'mileage-export.csv', appendRows('', header, body));
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

  toast('Saved.', 'good');
  if (location.hash === '#/') route(); // no hashchange to wait for
  else location.hash = '#/';
}

function onConfigSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  config = Object.assign(config, {
    owner: data.owner.trim(),
    repo: data.repo.trim(),
    branch: data.branch.trim() || 'main',
    costsPath: data.costsPath.trim() || DEFAULT_CFG.costsPath,
    mileagePath: data.mileagePath.trim() || DEFAULT_CFG.mileagePath,
    token: data.token.trim(),
    baseOdometer: Number(data.baseOdometer) || 0
  });
  saveConfig();
  toast('Settings saved.', 'good');
  route();
}

/* -------------------------------------------------------- github syncing */

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
  const response = await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`, Object.assign({
    headers: {
      Authorization: `Bearer ${config.token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }, init));
  return response;
}

/** Current content and blob sha of a repo file, or null if it does not exist. */
async function fetchFile(path) {
  const response = await gh(`${path}?ref=${encodeURIComponent(config.branch)}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(await describeError(response));
  const json = await response.json();
  return { sha: json.sha, text: b64decode(json.content || '') };
}

async function describeError(response) {
  let detail = '';
  try {
    const json = await response.json();
    detail = json.message || '';
  } catch (err) { /* non-JSON error body */ }
  if (response.status === 401) return 'GitHub rejected the token (401). Check it has not expired.';
  if (response.status === 403) return `GitHub refused the request (403). The token likely lacks "Contents: read and write" on this repo. ${detail}`;
  if (response.status === 404) return `Repo, branch, or path not found (404) — also what GitHub returns when the token cannot see the repo. ${detail}`;
  return `GitHub error ${response.status}. ${detail}`;
}

/** Append the given entries to one CSV file and commit it. */
async function commitRows(path, header, rows, message) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const file = await fetchFile(path);
    const body = {
      message,
      content: b64encode(appendRows(file ? file.text : '', header, rows)),
      branch: config.branch
    };
    if (file) body.sha = file.sha;

    const response = await gh(path, { method: 'PUT', body: JSON.stringify(body) });
    if (response.ok) return;
    if (response.status === 409 && attempt === 0) continue; // someone else committed; re-read and retry
    throw new Error(await describeError(response));
  }
}

async function sync() {
  const btn = document.getElementById('syncBtn');
  if (btn.dataset.state === 'busy') return;

  if (!config.token) {
    toast('Add a GitHub token in Settings to commit to the repo.', 'bad');
    location.hash = '#/settings';
    return;
  }

  const queued = pending();
  if (!queued.length) return toast('Nothing pending — the repo is up to date.');

  const costs = queued.filter(e => e.kind !== 'mileage');
  const miles = queued.filter(e => e.kind === 'mileage');

  btn.dataset.state = 'busy';
  document.getElementById('syncCount').textContent = '…';

  const committed = [];
  try {
    if (costs.length) {
      await commitRows(config.costsPath, COST_HEADER, costs.map(costRow),
        `Log ${costs.length} cost ${costs.length === 1 ? 'entry' : 'entries'}`);
      committed.push(...costs);
    }
    if (miles.length) {
      await commitRows(config.mileagePath, MILEAGE_HEADER, miles.map(mileageRow),
        `Log ${miles.length} mileage ${miles.length === 1 ? 'reading' : 'readings'}`);
      committed.push(...miles);
    }
    toast(`Committed ${committed.length} ${committed.length === 1 ? 'entry' : 'entries'} to ${config.owner}/${config.repo}.`, 'good');
  } catch (err) {
    toast(err.message || 'Sync failed.', 'bad');
  } finally {
    // Mark whatever made it in, so a partial failure never double-commits rows.
    const done = new Set(committed.map(e => e.id));
    entries.forEach(e => { if (done.has(e.id)) e.synced = true; });
    saveEntries();
    route();
  }
}

/* ------------------------------------------------------------------ boot */

document.getElementById('syncBtn').addEventListener('click', sync);
window.addEventListener('hashchange', route);
route();
