# Shift indicator cable — access and reattachment

The seller described the "shift indicator cable unhooked at the column." This is the procedure to
get at it and hook it back up. Read the first section before touching anything — there are two
different parts on that column that a seller might call "the wire," and only one of them is
harmless.

## First: confirm which part is actually loose

| | Shift indicator cable | Neutral-safety / backup-lamp switch |
|---|---|---|
| What it does | Moves the PRNDL needle in the dash | Stops the starter cranking in gear, feeds the reverse lights |
| If disconnected | Needle sits wrong or flops. Cosmetic. | Car can crank in Drive. Reverse lights dead. |
| SAAQ inspection | Not an item | **Both are items** — see [`reference-links.md`](reference-links.md) |
| Where | Thin wire, clipped to the column jacket, runs up behind the dash bezel | Black plastic switch with a wiring connector, screwed to the lower column jacket |

Do the test in [#8](../../issues/8) before you decide this is a five-minute job:

1. Foot **firmly** on the brake, handbrake set, nothing in front of the car. Turn the key to start
   with the lever in Drive, then Reverse. **It must refuse to crank in both.** If it cranks, the
   interlock is the problem, not the indicator, and that is a safety fault — stop and fix that.
2. Engine off, key on, lever in Reverse — reverse lights should light.
3. Key should only come out in Park.

If it refuses to crank in gear and the reverse lights work, the loose part is the indicator cable
and everything below applies.

## How the mechanism works

There is no motor or electrical anything in it. The PRNDL card and needle sit **behind the
instrument bezel, above the steering column** — not inside the column shroud. A thin stranded wire
runs down from the needle, through a spring-loaded clip that snaps onto the steering column jacket
under the dash, and its end engages the **shift bowl** — the plastic collar inside the column that
rotates when you move the shift lever. Move the lever, the bowl turns, the wire pulls, the needle
slides.

So there are three places it can come apart, and they need different amounts of dash removed:

| Failure | What you have to remove |
|---|---|
| Wire popped off the clip on the column, or the clip fell off the jacket | **Knee bolster only** — the panel under the column |
| Wire came off the needle end | Instrument bezel |
| Wire snapped, or the needle is broken where the wire attaches | Both, plus a new cable |

Start by pulling the knee bolster and looking. Most of the time that is the whole job and the bezel
never has to come off.

## Access

**Tools:** 7 mm and 5.5 mm nut drivers (GM used hex-head sheet-metal screws through most of this
dash), a #2 Phillips, needle-nose pliers, a flashlight. No specialty tools.

**Battery:** disconnect the negative terminal if you are going anywhere near the bezel — the
cluster, the wiper and headlight switches, and the ignition switch feed are all live back there.
For the knee bolster alone it is optional but cheap insurance.

1. **Front seat all the way back**, and drop the tilt column to its lowest position if it tilts.
   You are going to be on your back in the footwell.
2. **Remove the knee bolster / lower dash panel under the column.** Typically four screws along its
   lower edge, sometimes two more up under the lip. It drops straight down and out. On some cars
   there is a separate steering column collar/trim ring at the dash face held by two more screws —
   take that too if it blocks the view.
3. **Look up along the top of the column jacket, just forward of the shroud.** You are looking for
   a small spring clip on the jacket with a thin wire running through it, up and rearward into the
   dash. That clip is the whole attachment. If the wire is dangling, it will be lying loose on top
   of the column or hanging down.
4. If the wire end is off the bowl, the shift bowl is reached by removing the **two-piece plastic
   column shroud** around the column between the wheel and the dash — screws come in from the
   underside of the lower half.

**If you need the needle end (bezel off):**

5. Remove the screws around the perimeter of the **cluster bezel** — the trim panel surrounding the
   gauges. This is *not* the centre bezel that carries the radio and heater controls; see
   [`air-system.md`](air-system.md) §4, which covers that one and the difference between them. Pull
   the bezel toward you a few inches and **unplug what is behind it before you yank**: rear defogger
   switch and remote mirror switch, if fitted.
6. The indicator assembly hangs at the bottom of the cluster opening on **two screws**. Back those
   off and lower the assembly to get at the wire attachment on the needle.

## Reattaching and adjusting

The attachment is deliberately crude — it is a wire looped or clipped onto a stud, not a precision
fit, and adjustment is done by *where* you clip it, not by a screw.

1. Put the transmission in **Park** with the lever, and leave it there for the whole adjustment.
2. Hook the wire back into the clip on the column jacket and reseat the clip on the jacket if it
   came off. Needle-nose pliers; it is spring-loaded, so keep a thumb on it — they fly.
3. Look at where the needle sits. Slide the wire through the clip to shift the needle until it sits
   dead on **P**.
4. Run the lever through the whole gate — P R N D 2 1 — and confirm the needle tracks and lands on
   each letter. Adjust and recheck. It will never be perfect at both ends of the gate; get P and D
   right, since those are the ones you read.
5. If the needle drags, catches, or moves in steps: rub a bar of soap on the wire and on the back
   of the needle. This is the actual factory-era fix and it works.
6. If the clip will not stay put on the jacket, a dab of epoxy on the clip is the accepted repair.

**Then reconnect the battery and re-run the three tests at the top of this document before the
panels go back on.** Reverse lights especially — it is easy to knock the backup-lamp connector loose
while working in there, and you do not want to find out at the inspection.

## If the cable is broken

It is a cheap part, roughly **$15–20 USD**, but there are **two versions and they are not
interchangeable** — the difference is the cluster:

- **78–81 long rectangular speedometer** — base Z88 trim, and 1981 is inside the 78–81 range.
  Dixie `DM00033 RECTANGLE`, SS396 `ISC-0754`, Eckler's `50-306941`.
- **78–88 round gauges** — the gauge-package cluster. Dixie `DM00033 ROUND`, Chevelle Depot's
  "for gauge cars" listing.

⚠ **Unresolved disagreement on which of these a 1981 takes — look at the car, do not reason it
out.** Separate research for [`cluster-bezel.md`](cluster-bezel.md) found that **1981 is the year
the cluster changed from the horizontal strip speedometer to a round dial**, which would put this
car on the round cable. The catalogue split above points the other way for a base car.

The two are probably reconcilable — the split may be **base warning-light cluster (rectangular) vs
gauge-package cluster (round)** rather than a year break, with the round cable spanning 78–88
because the gauge cluster did. That would make the deciding factor the *option*, not the year, and
this car is a base Z88. But that is inference stacked on inference.

**Confirm by looking at your own cluster before ordering.** Wide horizontal ribbon speedometer →
rectangular cable. Round dial → round cable. Thirty seconds with the door open settles what no
amount of catalogue reading will.

The same question decides the [`cluster-bezel.md`](cluster-bezel.md) sourcing and the tach variant
in [`tach-swap.md`](tach-swap.md), so **answer it once and write it down** — it is the single most
load-bearing unknown left in the dash work.

## Buying notes

GM stock replacement number for the cable is **`3174654`**.

**Tilt columns may differ** — at least one NOS cable is catalogued specifically for 78–87 GM *tilt*
columns (AC `25016406`). Check whether this column tilts before ordering.

⚠ **Search trap.** Searching "shift cable" for this car returns **transmission shift linkage** —
Lokar, ididit and similar cable-shift kits that replace the mechanical rod linkage between column
and transmission. Completely different part, and their install instructions (swivels, jam nuts,
5/16-24 nylock into the trans lever) do not apply here. Search **"shift indicator cable"** or
"shift indicator assembly".

Canadian sources, no brokerage — consistent with the sourcing in
[`reference-links.md`](reference-links.md):

- [Chevelle Depot](https://www.chevelledepot.ca/driveline/shifters/shifter-hardware/el-camino-shift-indicator-cable-column-shift-automatic-gauge-cars-1978)
- [Muscle Cars & Classics](https://www.musclecarsandclassics.ca/driveline/shifters/column-shift-indicator)

US: [SS396](https://www.ss396.com/category/elcamino-shiftindicator.html), Dixie Restoration Depot,
Eckler's. The needle/indicator assembly itself is also available separately if the needle is broken
where the wire attaches.

## Gotchas

- **Never let the column drop with the cable still clipped on.** If you ever unbolt the column for
  other work, unclip the indicator cable *first* — the cable will not hold the column's weight and
  this is the single most common way these get broken.
- The wire is thin and kinks permanently. Do not bend it to route it; feed it.
- Reverse-light and neutral-safety wiring lives in the same space. Note where every connector sits
  before you disturb it.

## Related

Issue [#8](../../issues/8) — confirm reverse lights and no-crank-in-gear.
Entry in [`known-issues.md`](known-issues.md) under Mechanical.
Log the work in `log/` per [`log/README.md`](../log/README.md), and the part cost in `costs.csv`.
