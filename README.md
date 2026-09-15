# 1981 GMC Caballero

Purchase, repair, and restoration tracking for a 1981 GMC Caballero bought in Oakville, Ontario and registered in Montréal, Quebec.

## Car

| | |
|---|---|
| Year / Make / Model | 1981 GMC Caballero |
| Colour | Black |
| Odometer at purchase | 207,000 km |
| VIN | `1GTCW80H5BD502482` — **check digit validates.** Corrected 2026-09-10 from the SAAQ inspection report; the earlier photo read (`…02462`) had position 16 wrong. See [`docs/purchase-summary.md`](docs/purchase-summary.md). |
| Engine | LG4 5.0L / 305 cu in four-barrel V8 — confirmed via VIN 8th character (`H`) |
| Trim | Base Caballero (Z88) — confirmed by absence of Diablo/Amarillo markers; **pending final confirmation from the glove-box SPID sticker** |
| Transmission | Automatic, THM250C or THM200C — undetermined, settle by pan bolt count (11 = 200C, 13 = 250C) or SPID `M` code |
| Purchase price | _fill in_ |
| Purchase date | _fill in_ |
| Seller | Alexandra, on behalf of her father (registered owner), Oakville ON — ex Kijiji ad 1740457976, plate DFLT 504 |

## Repo layout

```
CLAUDE.md                Standing rules for AI threads working in this repo
.claude/skills/
  research-writeup/      How research findings get written up, cross-linked, and landed on main
index.html               Cost & mileage logger (GitHub Pages app) — see below
assets/                  Stylesheet and script for that app
costs.csv                Running spend, direct and indirect
mileage.csv              Odometer readings
docs/
  purchase-summary.md    VIN, trim, and engine identification reasoning
  known-issues.md         Every defect found so far, with severity and status
  air-system.md           Cabin filter, vent odour, HVAC controls, dash bezel
  radio-delete.md         Radio harness wire map, cut/cap procedure, dash blanking
  oil-and-filter.md       Oil grade, change interval, filter number, and where the oil goes in
  fuel-and-tuning.md      Pump grade, octane requirement, and ignition timing
  charging-system-check.md  Diagnosing a low charging-voltage reading (10SI/12SI)
  reference-links.md      SAAQ / Ontario process links, shops, appraisers
  bulb-reference.md       Every lamp on the car and the bulb number to buy
  parts-sourcing.md       Where to buy in Canada, and the El Camino/Caballero part-number traps
  parts-door-panel-window-switch.md
                          Clips, retainers, and part numbers for the door panels and window switches
  door-job-plan.md        Combined both-door teardown: motors, seals, vapour barrier, drains
  power-window-motor.md   Manuals, the spring-tension warning, and door-job sequencing
  power-window-circuit.md    Position 4 / 30 A breaker, and the free door-lock test
  weatherstrip.md         Door and frame seal kit, pin-then-glue install, and the adhesive to use
  cluster-bezel.md        Loose dash bezel: why it is screws not clips, and the 1981 year trap
  shift-indicator-cable.md  Reattaching the PRNDL cable at the column, and the variants to match
  dash-clock.md           Points clock: self-regulating, why it stops, quartz conversion
  tachometer-install.md   Adding a dash tach: HEI signal source, wiring, mounting
  tach-swap.md            Fitting a factory tach — on a 78-85 it comes with the clock built in
  aftermarket-tach.md     Standalone tach: pillar/column mounts, HEI wiring, EST noise
  rust-repair-inspection.md  SAAQ rejection criteria, structural vs cosmetic, and weld method
  underbody-coating.md    Rust converter: what to mask, and why it comes after the welding
  community-and-inspiration.md  Forums to join, Caballero build threads, photo galleries
  logger-app.md           How the logger app works and how to host it
  tools-angle-grinder.md  Angle grinder selection for the sheet-metal work, Canadian sources
  tools-abrasives.md      Which discs and wheels to fit: cutting, weld dressing, rust, cleaning
  welding/                Doing the rust repair in-house — equipment, process, safety
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

## Tools

Tool research for the repair work, with Canadian purchase links, lives in `docs/`. So far:

- [`docs/tools-angle-grinder.md`](docs/tools-angle-grinder.md) — DEWALT angle grinder lineup compared
  for cutting out the perforated rear quarter and rocker seam and dressing the patch welds. Short
  version: **DCG410VSB** (20V MAX XR, variable speed, both anti-kickback systems, full power on
  standard 20V packs), or the **DCG408B** as the cheaper option that is still enough for sheet metal.
- [`docs/tools-abrasives.md`](docs/tools-abrasives.md) — the discs and wheels that go on that grinder,
  job by job. Short version: **0.045" Type 1 cut-off wheels** to cut the rot out, **60- then 80-grit
  flap discs** to dress and blend the patch welds, a **purple nylon-web Clean & Strip disc** to take
  paint and surface rust off without thinning the panel, and a **knotted wire cup** for underbody
  scale only. No hard Type 27 grinding wheel anywhere near a body panel.
- [`docs/welding/`](docs/welding/README.md) — welding the perforated quarter, rocker seam and
  smuggler's box floor in-house: machine selection, gasless vs gas, fume and ventilation safety,
  and a glossary. Nothing purchased yet; open decisions are tracked in that section's README.

## Status

**Purchased.** Repairs not yet started. See [Issues](../../issues) for the tracked work backlog — each defect or task from `docs/known-issues.md` has a corresponding issue with labels for area (`rust`, `brakes`, `mechanical`, `interior`, `paperwork`) and severity.

## Source material

The original purchase-evaluation research (market comps, financial scenarios, full transcript, reference photos, brochures) lives outside this repo at:

```
C:\Users\Antho\OneDrive\00 - Working\1981 GMC Caballero — handoff package\caballero_handoff\
```

This repo picks up from the point of purchase onward — condition tracking, repair log, and paperwork — rather than duplicating that evaluation package.
