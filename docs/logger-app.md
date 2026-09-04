# Cost & mileage logger

A dependency-free static app (`index.html` + `assets/`) for logging project spend and odometer
readings from a phone. No build step, no framework, no server.

## Hosting it on GitHub Pages

**Settings → Pages → Source: Deploy from a branch → Branch `main`, folder `/ (root)`.**

It then lives at `https://abyessof-labs.github.io/1981-gmc-caballero/`. Nothing needs building or
deploying — Pages serves the files as they sit in the repo, so a push is a release.

On iOS, *Share → Add to Home Screen* gives it an icon and a full-screen window. There is no service
worker, so a first load needs a connection; after that the browser cache usually carries it, and
saving an entry never needs one.

## Where the data actually lives

A GitHub repo is not a database — it is a versioned filesystem, and Pages serves it as static files
with no server-side code. So the app uses two layers:

1. **The browser.** Every entry is written to `localStorage` the moment you save it. This is the
   real working store: instant, offline, no account. It is also per-device — entries logged on your
   phone do not appear on your laptop until they reach the repo.
2. **The repo.** With a token configured, the **pending** chip in the top-right appends the
   unsynced rows to `costs.csv` and `mileage.csv` through the GitHub contents API and commits them.
   That gives one shared, versioned, greppable copy that survives a lost phone or a cleared cache.

The sync only ever appends and it only marks an entry as synced after GitHub confirms the commit,
so a failed or half-finished sync re-sends the missing rows rather than duplicating the sent ones.
If someone else commits to the same file mid-sync, the app re-reads the file and retries once.

Deleting an entry in the app removes it from the device only. Rows already committed have to be
removed from the CSV in the repo — that is the point of keeping the history in git.

## The token

Committing requires a [fine-grained personal access
token](https://github.com/settings/personal-access-tokens):

- **Repository access:** only `abyessof-labs/1981-gmc-caballero`
- **Permissions:** `Contents: Read and write` — nothing else
- **Expiry:** short; regenerate when it lapses

Paste it into Settings in the app. It is stored in `localStorage` in plain text and sent only to
`api.github.com`.

Understand the trade-off before using it: `localStorage` is scoped to the origin, and every Pages
site under `abyessof-labs.github.io` shares that one origin. Any other page published under that
subdomain can read the token. That is acceptable for a repo-scoped, contents-only, short-lived
token on a personal phone; it is not acceptable for a classic token or anything account-wide. If a
device goes missing, revoke the token in GitHub settings.

Leave the token blank to keep the app entirely device-only, and use the CSV export buttons on the
Entries screen to move rows into the repo by hand.

## Direct vs indirect

The split is a judgment call, so the app just offers categories under each and leaves the call to
you. The working definition:

- **Direct** — spend attributable to this car: parts, labour, fluids, tires, bodywork, paint, rust
  repair, the purchase itself, registration and inspection fees, transport to bring it home.
- **Indirect** — overhead that supports the project but is not the car: tools, shop supplies and
  consumables, storage, insurance, fuel and travel, manuals, shipping.

The existing rows in `costs.csv` were all classified `direct` when the column was added, including
the U-Haul trailer rental (one-time acquisition transport). Recategorize any of them by editing the
CSV — the `cost_type` column is the only thing that changed.

## File formats

`costs.csv`

```
date,cost_type,category,item,vendor,part_number,amount_cad,status,issue,notes
```

`cost_type` is `direct` or `indirect`; `status` is `paid`, `pending`, `quoted`, or `refunded`;
`issue` is the tracking issue number, without the `#`.

`mileage.csv`

```
date,odometer_km,trip_km,purpose,driver,notes
```

`trip_km` is computed from the previous reading when you save, and left blank if the new reading is
lower than the last one (rolled-over five-digit odometer, a correction, or a typo — worth eyeballing
rather than guessing at).

## Changing it

`assets/app.js` is one plain file, roughly in three parts: state and CSV helpers at the top, view
functions in the middle (each returns an HTML string), GitHub sync at the bottom. Routing is on
the URL hash. To add a field to a form, add the input in the relevant view function, read it in
`onEntrySubmit`, and add the column to the matching `*_HEADER` and row builder — noting that adding
a column mid-file means the older rows need backfilling.
