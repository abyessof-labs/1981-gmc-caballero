# 1981 GMC Caballero

Purchase, repair, and restoration tracking for a 1981 GMC Caballero bought in Oakville, Ontario and registered in Montréal, Quebec.

## Car

| | |
|---|---|
| Year / Make / Model | 1981 GMC Caballero |
| Colour | Black |
| Odometer at purchase | 207,000 km |
| VIN (as photographed) | `1GTCW80H5BD502462` — **check digit does not validate; confirm against the permit, dash plate, and door jamb before treating this as final.** See [`docs/purchase-summary.md`](docs/purchase-summary.md). |
| Engine | LG4 5.0L / 305 cu in four-barrel V8 — confirmed via VIN 8th character (`H`) |
| Trim | Base Caballero (Z88) — confirmed by absence of Diablo/Amarillo markers; **pending final confirmation from the glove-box SPID sticker** |
| Transmission | Automatic, THM250C or THM200C — undetermined, settle by pan bolt count (11 = 200C, 13 = 250C) or SPID `M` code |
| Purchase price | _fill in_ |
| Purchase date | _fill in_ |
| Seller | Alexandra, on behalf of her father (registered owner), Oakville ON — ex Kijiji ad 1740457976, plate DFLT 504 |

## Repo layout

```
index.html               Cost & mileage logger (GitHub Pages app) — see below
assets/                  Stylesheet and script for that app
costs.csv                Running spend, direct and indirect
mileage.csv              Odometer readings
docs/
  purchase-summary.md    VIN, trim, and engine identification reasoning
  known-issues.md         Every defect found so far, with severity and status
  reference-links.md      SAAQ / Ontario process links, shops, appraisers
  parts-sourcing.md       Where to buy in Canada, and the El Camino/Caballero part-number traps
  power-window-motor.md   Manuals, the spring-tension warning, and door-job sequencing
  door-job-plan.md        Combined both-door teardown: motors, seals, vapour barrier, drains
  cluster-bezel.md        Loose dash bezel: why it is screws not clips, and the 1981 year trap
  shift-indicator-cable.md  Reattaching the PRNDL cable at the column, and the variants to match
  logger-app.md           How the logger app works and how to host it
log/
  README.md               How to add a work-log entry
photos/
  evidence/                Annotated photos referenced from known-issues.md
```

## Cost & mileage logger

`index.html` is a small phone-friendly web app for logging spend and odometer readings from the
driveway. Three buttons on the home screen — **direct cost**, **indirect cost**, **mileage** — each
open a short form; totals sit underneath.

`costs.csv` and `mileage.csv` in this repo are the source of truth. The app reads them on open, so
any device that loads the URL sees the whole log — no token and no account needed while the repo is
public. Saving an entry queues it on that device; a fine-grained GitHub token pasted into Settings
lets the app commit the queue onto the end of those files, which is the closest thing to a database
a static site gets and keeps the full history in git. Entries carry an `entry_id` so an interrupted
push is never logged twice, and the last-loaded copy stays readable with no connection.

To publish it: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**, which
serves it at `https://abyessof-labs.github.io/1981-gmc-caballero/`. Full details, including the cost
classification and the token's security trade-off, are in [`docs/logger-app.md`](docs/logger-app.md).

## Status

**Purchased.** Repairs not yet started. See [Issues](../../issues) for the tracked work backlog — each defect or task from `docs/known-issues.md` has a corresponding issue with labels for area (`rust`, `brakes`, `mechanical`, `interior`, `paperwork`) and severity.

## Source material

The original purchase-evaluation research (market comps, financial scenarios, full transcript, reference photos, brochures) lives outside this repo at:

```
C:\Users\Antho\OneDrive\00 - Working\1981 GMC Caballero — handoff package\caballero_handoff\
```

This repo picks up from the point of purchase onward — condition tracking, repair log, and paperwork — rather than duplicating that evaluation package.
