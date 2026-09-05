# Shift indicator cable — reattaching it at the column

The thin cable that drags the **PRNDL pointer** across the gauge face as the column shifter moves.
Seller disclosed it as unhooked at the column. Relates to
[`known-issues.md`](known-issues.md) → Mechanical.

## First: it is not the neutral safety interlock

The indicator cable is **display only**. It moves the needle and nothing else — it is a separate
component from the neutral safety switch, which is what actually prevents cranking in gear. An
unhooked indicator cable cannot stop the car starting, and cannot cause it to start in gear.

So the known-issues concern is resolved on the documentation side. **Still do the physical test**
though, because it costs nothing and tests a different component: foot on the brake, try to crank in
Drive and in Reverse. It must not crank in either.

## The search trap

Searching "shift cable" for this car returns **transmission shift linkage** — Lokar, ididit and
similar cable-shift kits that replace the mechanical rod linkage between the column and the
transmission. Those installation PDFs are for a completely different part, and their adjustment
procedure (swivels, jam nuts, 5/16-24 nylock into the trans lever) does not apply here.

The part wanted is the **shift indicator cable**, sometimes catalogued as the shift indicator
*assembly*. GM stock replacement number **`3174654`**.

## How it attaches

Two ends:

- **Dash end** — anchors to the pointer mechanism behind the instrument cluster.
- **Column end** — a clip that engages the **moving collar / shift bowl** at the top of the steering
  column, so that rotating the shift lever drags the cable.

The column clip design **changed several times through this era** — some versions screw on, others
simply clip over the moving collar. Look at what is on the car before ordering; a photo of the
column end is worth more than any catalogue description.

**Adjustment is done by moving the clip's position on the column.** That is the whole adjustment:
set the transmission in a known gear, then slide the clip until the needle reads that gear
correctly, and check the extremes (Park and Low) still line up before tightening.

**Access:** the job needs the lower dash trim and the instrument cluster bezel off. That is the same
teardown as the loose bezel in [`cluster-bezel.md`](cluster-bezel.md) — **do the two together**, and
diagnose the bezel's broken screw bosses while it is off anyway.

## Getting the right variant

More year- and option-sensitive than it looks. Three things must match:

1. **Round speedometer vs strip speedometer.** 1981 is the year GM switched to the **round dial**, so
   this car takes the round-speedometer variant, not the 78–80 strip one.
2. **Gauge cars vs non-gauge.** Catalogues split "for gauge cars" from the base warning-light
   cluster. Confirm which cluster is actually in the car before ordering.
3. **Tilt vs non-tilt column.** At least one NOS cable is listed specifically for 78–87 **tilt**
   columns.

⚠ One shift indicator *assembly* on the market is listed as fitting 1978–79 and 1986–88 but
**explicitly not 1980–85**. A 1981 falls in that excluded window. Read the fitment line on every
listing rather than trusting the "1978–1987" in the title.

## Sources

| Source | Notes |
|---|---|
| **[Chevelle Depot](https://www.chevelledepot.ca/driveline/shifters/shifter-hardware/el-camino-shift-indicator-cable-column-shift-automatic-gauge-cars-1978)** — shift indicator cable, column shift automatic, gauge cars, 1978–87 | Canada, no brokerage. First call, as with everything else on this car |
| **[Muscle Cars & Classics](https://www.musclecarsandclassics.ca/driveline/shifters/column-shift-indicator)** — shift indicator assembly, auto with gauges | Canada. Whole assembly rather than just the cable |
| [Ecklers — round speedometer, automatic, 1978–87](https://www.ecklers.com/el-camino-shift-indicator-cable-round-speedometer-automatic-transmission-1978-1987-55-350767-1.html) | US. The **round speedometer** wording is the one that matches a 1981 |
| [gmtiltcolumns.com — NOS AC `25016406`, 1978–87 GM tilt columns](https://gmtiltcolumns.com/product/ac-25016406-nos-shift-indicator-cable-1978-1987/) | NOS, tilt columns |

## Note before buying

The cable is disclosed as *unhooked*, not broken. **Look before ordering** — if the cable is intact
and simply popped off its clip, this is a free fix. These do commonly fail, though: the slider saws
against the plastic housing over decades, which puts slack in the cable or cuts through the housing
entirely. Inspect for that while the bezel is off.

Step-by-step with the correct clip detail for this column is in the **1981 Chevrolet Factory Service
Manual** — see [`power-window-motor.md`](power-window-motor.md) for sourcing that book, which is now
earning its keep across several jobs.
