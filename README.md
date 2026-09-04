# 1981 GMC Caballero

Purchase, repair, and restoration tracking for a 1981 GMC Caballero bought in Oakville, Ontario and registered in Montréal, Quebec.

## Car

| | |
|---|---|
| Year / Make / Model | 1981 GMC Caballero |
| Colour | Black |
| Odometer at purchase | 106,000 km |
| VIN (as photographed) | `1GTCW80H5BD502462` — **check digit does not validate; confirm against the permit, dash plate, and door jamb before treating this as final.** See [`docs/purchase-summary.md`](docs/purchase-summary.md). |
| Engine | LG4 5.0L / 305 cu in four-barrel V8 — confirmed via VIN 8th character (`H`) |
| Trim | Base Caballero (Z88) — confirmed by absence of Diablo/Amarillo markers; **pending final confirmation from the glove-box SPID sticker** |
| Transmission | Automatic, THM250C or THM200C — undetermined, settle by pan bolt count (11 = 200C, 13 = 250C) or SPID `M` code |
| Purchase price | _fill in_ |
| Purchase date | _fill in_ |
| Seller | Alexandra, on behalf of her father (registered owner), Oakville ON — ex Kijiji ad 1740457976, plate DFLT 504 |

## Repo layout

```
docs/
  purchase-summary.md          VIN, trim, and engine identification reasoning
  known-issues.md               Every defect found so far, with severity and status
  saaq-inspection-criteria.md   Inspection clauses mapped to this car + pre-inspection checklist
  body-mount-repair.md          The priority defect — identification, method, cost, parts
  emissions-and-exhaust.md      The catalytic converter question, resolved
  rust-repair-and-protection.md Bed and underbody plan, rust technique, cleaning products
  parts-sources.md              Full sourcing map, Canada-first
  reference-links.md            SAAQ / Ontario process, shops, appraisers, technical reference
log/
  README.md               How to add a work-log entry
photos/
  evidence/                Annotated photos referenced from known-issues.md
```

## Status

**Purchased.** Repairs not yet started. See [Issues](../../issues) for the tracked work backlog — each defect or task from `docs/known-issues.md` has a corresponding issue with labels for area (`rust`, `brakes`, `mechanical`, `interior`, `paperwork`) and severity.

### Post-purchase condition

**Mechanically sound and runs very well**, with almost no rust. Two things stand out:

- ⚠ **The middle driver's side body mount is the one defect that will not pass the SAAQ inspection.** The reinforcement above it has rotted away — the mount is attached at the bottom only, not to the body. **The driver's lower seat belt anchor sits on the same piece of metal.** Verify that anchor before driving. See [`docs/body-mount-repair.md`](docs/body-mount-repair.md).
- The **emergency/parking brake** is the remaining mechanical item.

**The entire passenger floor is new** (replaced by a previous owner) — confirm how it was welded in, since SAAQ fails a repair that weakens the structure.

### Canadian-market car — confirmed

Bought new in 1981 and registered in Ontario, one owner until 2025. **Canada had no catalytic converter requirement until the 1988 model year**, so this car's missing cat is almost certainly factory configuration, not a deletion — nothing to add, nothing for SAAQ to flag. This also explains the engine bay reading as "emissions deleted": a Canadian 1981 never had CCC, an ECM, an O2 sensor, or a feedback carburetor. Look for RPO **`NM8`** on the SPID sticker to close it out. See [`docs/emissions-and-exhaust.md`](docs/emissions-and-exhaust.md).

## Source material

The original purchase-evaluation research (market comps, financial scenarios, full transcript, reference photos, brochures) lives outside this repo at:

```
C:\Users\Antho\OneDrive\00 - Working\1981 GMC Caballero — handoff package\caballero_handoff\
```

This repo picks up from the point of purchase onward — condition tracking, repair log, and paperwork — rather than duplicating that evaluation package.
