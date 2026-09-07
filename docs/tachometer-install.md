# Adding a tachometer

The base Caballero cluster (Z88) has no tach — speedometer, fuel, and idiot lights only. This is
the plan for adding a self-contained aftermarket tach to the right of the steering column, what it
gets wired to, and why it works.

Nothing here has been done yet. Treat every "verify" line as a real open item.

## Why it's worth doing on this car

Beyond wanting one:

- **Carb work needs it.** Idle speed on the LG4 Quadrajet is a spec in RPM, not a feel. Setting
  curb idle, fast idle, and base timing all assume you can read engine speed.
- **Timing needs it.** Base timing is set at a specified idle RPM with the vacuum advance
  disconnected. Without a tach you are guessing at half the procedure.
- **It diagnoses.** Idle hunt, a lazy return-to-idle, a converter that isn't unlocking — all read
  off a needle before they read anywhere else.

## First: which distributor is actually in the car

**This determines the whole signal side and has not been checked yet.** For 1981 GM went to
Computer Command Control (CCC) across most of the US line — an ECM, an E4ME feedback Quadrajet, an
oxygen sensor, and an HEI distributor running EST (Electronic Spark Timing) with a four-wire
connector to the ECM. Canadian-market 1981s frequently shipped with the simpler non-feedback
setup. This car was built in Doraville, GA and sold in Ontario, and its air cleaner has already
been swapped for an aftermarket open element, which raises the odds that emissions hardware was
altered or removed by a previous owner.

Check, in this order:

| Check | Non-CCC (plain HEI) | CCC / EST |
|---|---|---|
| Distributor body | Two-terminal connector on the cap only | Cap connector **plus** a separate 4-wire connector to the harness |
| Underhood emissions label | No "Computer Command Control" wording | Names CCC |
| Under the dash / passenger kick panel | No ECM | ECM box present |
| Instrument cluster | No `CHECK ENGINE` lamp | `CHECK ENGINE` lamp |

**Either way there is a usable tach signal**, and in both cases it comes off the same place. The
difference only matters if the signal turns out to be noisy — see [Troubleshooting](#troubleshooting).

## How the signal works

The HEI distributor carries the coil inside the cap. The two-terminal connector on the cap is
marked **`BAT`** (12 V feed in) and **`TACH`** (marked `TAC` or `C-` on some caps). The `TACH`
terminal is the coil's switched side: every time the module collapses the coil field to fire a
plug, that terminal snaps from roughly battery voltage toward ground. The tach counts those
pulses.

On a four-stroke V8 the distributor fires **8 plugs per two crankshaft revolutions = 4 pulses per
crank revolution**. That is the only calibration fact the gauge needs, and it is why every
aftermarket tach has a 4/6/8-cylinder selector — a switch, a jumper, or a dip switch on the back
of the housing. **Set it to 8.** At a 700 RPM idle the tach is counting about 47 pulses a second.

Two hard rules on that terminal:

- **Never let the `TACH` wire touch ground with the key on.** Grounding the coil's switched side
  can take out the ignition module. Fuse and insulate accordingly, and disconnect the battery
  before you touch it.
- **Never use it as a power source.** It is a signal only.

## Parts

| Item | Notes | Rough CAD |
|---|---|---|
| Tach, 3-3/8" (85 mm) | Full-size, classic look, easy to read. Autometer Sport-Comp / Pro-Comp, or an Equus/Sunpro for a fraction of the price | $80–260 |
| Tach, 2-5/8" (66 mm) mini | If a 3-3/8" pod looks like a gun turret on the pad — measure first | $90–140 |
| Single-gauge dash pod or chrome cup + bracket | Pod for pad-top, cup for under-dash | $25–70 |
| Inline fuse holder + 3 A fuse, or a glass-fuse tap adapter | **This block takes SFE glass cartridge fuses, not blade** — an ordinary ATO add-a-circuit will not fit. See [Power](#power-which-fuse) | $10–25 |
| 18 AWG stranded primary wire, three colours | Red power, black ground, a third for signal | $15 |
| Crimp terminals, heat-shrink, split loom, zip ties, rubber grommet | | $20 |
| Ring terminal + star washer for the ground | | — |

Range: **a 0–6000 face is right; 0–8000 wastes half the sweep** on RPM this engine will never see.
See [What counts as redline](#what-counts-as-redline-on-this-engine) — set any shift light around
4,500.

Tools: test light or multimeter, wire strippers/crimper, socket set (already logged in `costs.csv`),
drill and step bit only if you commit to a drilled mount, a grommet for any firewall hole.

## What counts as redline on this engine

**GM never printed one for this car.** The base Z88 cluster has no tach, so there is no factory red
band to read off. The nearest documented figure for the same engine is the **5,200 RPM redline on
the factory tachometer of the 1980 Corvette's LG4 305** — same engine family, different car, and
the only GM-printed number that applies to an LG4 at all.

That is a ceiling, not a target. What actually matters:

| | |
|---|---|
| Peak power (1981 LG4) | ~150 hp at roughly 4,000 RPM |
| Peak torque | Low — around 2,400 RPM |
| Useful range | **Everything happens below 4,000.** Past that the engine is making noise, not power |
| Documented factory redline (Corvette LG4) | 5,200 RPM |
| Stock valvetrain limit | Hydraulic flat tappets on stock springs start floating somewhere around 5,000–5,500 |
| Rev limiter | **None.** Neither the HEI nor a 1981 CCC ECM has one. Nothing will stop you |
| Practical shift point | 4,000–4,500. The automatic upshifts well before that on its own anyway |

**Set a shift light, if the gauge has one, at 4,500** — comfortably below float, well above anything
useful.

The more honest answer for *this* car: the spec-sheet redline is not the binding constraint. On a
207,000 km engine of unknown service history, the limit is set by a 45-year-old timing chain (GM's
nylon-toothed cam gears of this era shed teeth as they age), valve springs that have lost tension,
and an oil pump and bearings nobody has inspected. Treat 4,500 as the ceiling until the engine's
condition is actually known, and treat the tach's real job as watching idle quality and setting the
carb — not as permission to explore the top of the tachometer.

## Mounting — to the right of the column

The 1981 G-body dash is a padded pad over a steel structure, with the **defroster duct running the
full width directly beneath the pad's top surface**, and the HVAC box and radio behind the centre
bezel. That constrains where a screw can go.

Options, best-first for this car:

1. **Dash-pad pod, no drilling.** A single-gauge pod on the pad top just right of the cluster,
   held with heavy-duty hook-and-loop or 3M VHB tape. Reversible, leaves no hole in a 45-year-old
   pad that is not being reproduced cheaply, and puts the gauge in the natural line of sight. Run
   the wires down the right side of the cluster bezel.
2. **Under-dash cup, hung below the dash lip.** Period-correct look, screws into the underside
   lip rather than the pad, easy to reach. Sits lower in the sight line.
3. **Steering column mount.** Clamps to the column drop or shroud. Closest to the driver's eye,
   but it moves with the tilt column (if fitted) and can foul the turn-signal stalk.
4. **Cluster swap.** A period GM cluster with a factory tach in the same bezel. Cleanest result
   by a distance, most expensive and most fiddly — a different project, not this one.

If you drill: **probe behind the pad first**, confirm you clear the defroster duct and the steel
structure, and never drill blind into the pad top. And keep the gauge low and outboard — Quebec
restricts anything obstructing the driver's forward view, and a tall pod planted high on the pad is
the wrong hill to argue on at a roadside stop.

## Wiring — four wires

Battery negative disconnected before any of this.

| Wire | Goes to | Why |
|---|---|---|
| **Signal** (often white/green) | `TACH` terminal on the HEI cap connector | The pulse source, above |
| **Power** (red) | Ignition-switched 12 V at the fuse block — `ACC` or `GAUGES`, through a 3 A inline fuse. See [Power](#power-which-fuse) | Must die with the key or the gauge drains the battery |
| **Ground** (black) | Clean bare chassis metal under the dash, ring terminal + star washer | Shared reference with the signal |
| **Illumination** (usually white) | A **grey** dimmer-fed wire — easiest at the radio's illumination lead behind the centre bezel. See [Illumination](#illumination-where-to-pick-up-the-dash-lights) | Dims with the factory rheostat instead of glowing full-bright at night |

Notes that matter more than the table:

- **Power source.** Ignition-switched only, and never the `BAT` terminal at the distributor. The
  fuse block deserves its own section — see below.
- **Firewall crossing.** Use the existing main harness grommet on the driver's side, or an unused
  blanking grommet. If you must drill, deburr it and fit a rubber grommet. A signal wire chafing
  through on a raw steel edge is how a tach install becomes an electrical fire.
- **Route the signal wire away from the spark plug wires.** This is the single most common cause
  of a jumpy aftermarket tach. Keep several inches of separation, run it along a different path
  from the plug wires, and cross at 90° if it has to cross at all.
- **Grounds on a 45-year-old car.** Before blaming the gauge for a wandering needle, confirm the
  engine-to-body ground strap is intact and clean. A corroded strap upsets far more than the tach.
- Loom and zip-tie everything away from the exhaust manifolds — which this car's known-issues list
  already flags as heavily corroded — and away from the throttle linkage.

## Power — which fuse

The fuse block sits **under the dash on the driver's side, left of the steering column**, worked on
from the footwell looking up.

**It takes SFE glass cartridge fuses, not blade fuses.** This corrects an earlier assumption in
this document: an off-the-shelf ATO add-a-circuit will not clip into it. Glass-to-blade adapters
exist (FlexFuse and similar) if you want a modern tap, but for a single gauge an inline fuse holder
on a spade terminal is simpler and reversible. **Confirm by looking** — a previous owner may have
converted the block.

Positions reported for the 78–81 El Camino/Caballero block: `C/H HAZARD`, `INST LPS`, `WDO`, `IGN`,
`A/C`, `ECM`, `LPS`, `WIPER`, `ACC`, `STOP-HAZ`, `GAUGES`, `TAIL LPS`, `RADIO`, `TURN B/U`,
`CTSY-CLK`, `PWR ACCY`, `VAC PUMP`, `BAT`. `GAUGES` is a 10 A position.

**Note the `ECM` position.** Whether it is populated is a second, easier read on the open CCC/EST
question at the top of this document — no ECM fuse, probably no computer.

| Candidate | Verdict |
|---|---|
| **`ACC`** | **First choice.** Ignition-switched, no safety-critical or computer load sharing the circuit. Drops out while cranking, which for a tach is harmless |
| **`GAUGES`** (10 A) | Electrically the tidiest home — same circuit as the factory gauges. **But** on this platform that circuit is reported to also carry cruise, warning lamps, buzzers and, on CCC cars, the ECM. Only use it if you have confirmed the ECM is not on it |
| `RADIO` | Convenient — it is right behind where the gauge is going. Verify it is actually key-switched before trusting it |
| `BAT`, `CTSY-CLK`, `LPS`, `TAIL LPS` | **No.** Always hot. The gauge would stay live with the key out and flatten the battery |
| `WIPER`, `STOP-HAZ` | **No.** Do not hang anything off wiper or brake-lamp circuits |
| `ECM` | **Never.** |

**Do not trust the label — measure.** Probe each candidate with a test light: key off (want dead),
key in RUN (want live), key in ACC. Labels on a 45-year-old block are worn, and previous owners
rearrange things.

**Which side of the fuse clip.** Pull the fuse and probe both clips with the key on: the live one
is the feed side. Land your tap on the **feed** side with the 3 A inline fuse mounted within a few
inches of the tap, so your branch has its own protection and a fault in your wiring does not blow
the factory fuse and take the gauges (or the ECM) down with it.

If this car ends up with more added electrics — and given the work backlog it probably will — a
small auxiliary fuse block fed through a relay from a switched source is the better long-term
answer than repeatedly tapping the factory block.

## Illumination — where to pick up the dash lights

**The target is a grey wire.** In GM harnesses of this era **grey is the instrument-panel lamp
feed**, downstream of the rheostat built into the headlight switch, so it dims with the dash lights.
**Brown is park/tail lamps** — full brightness whenever the lights are on, no dimming. Do not
confuse the two.

Tap points, best first:

| Where | Notes |
|---|---|
| **Radio illumination lead, behind the centre bezel** | **Best for this install.** The `INST LPS` circuit feeds the factory radio light on a grey wire that dims with the headlight switch — and the bezel is inches from where the gauge is going |
| Headlight switch connector, left of the column | The grey wire leaving the switch. Also fine, longer run |
| `INST LPS` fuse | Convenient, but **check whether it sits upstream or downstream of the rheostat** — tap the wrong side and the gauge lamp glows full-bright regardless of the dimmer |
| Cluster printed-circuit connector | Last resort. Do not pierce the printed circuit |

**The test that settles it:** probe your chosen point with a meter while rotating the dimmer thumb
wheel. If the voltage swings, you are downstream of the rheostat and the gauge will dim with
everything else. If it sits fixed at battery voltage, you are upstream — move.

Three cautions:

- **The lamp needs a ground**, not just a feed. Take it to the same chassis point as the gauge.
- **The rheostat is a known weak point at this age** — a wire-wound resistor in the headlight
  switch that runs hot and fails. One gauge lamp is a negligible load, but if the dash lights are
  *already* dim, flickering, or dead, fix that before adding to it.
- **LED-lit gauges do not always dim gracefully** on an old resistive rheostat — flicker, or an
  abrupt cut to off near the bottom of the sweep. That is the rheostat's characteristic meeting a
  load it was never designed for, not a faulty gauge.

**Splice method matters here.** No scotch-locks or vampire taps: they sever strands and invite
corrosion, and the insulation on a 45-year-old harness is brittle enough already. Solder and
adhesive-lined heat shrink, or a quality T-tap.

## Procedure

1. Disconnect the battery negative.
2. Identify the distributor (CCC or not) and locate the `TACH` terminal on the cap connector.
3. Set the gauge's cylinder selector to **8**.
4. Mount the pod and gauge; confirm the driver's view is clear and the gauge is readable from the
   normal seating position **before** committing any adhesive or fastener.
5. Run the signal wire from the cap, through the firewall grommet, to the gauge. Loom it, secure
   it, keep it off the plug wires.
6. Land the ground on clean bare metal.
7. Tap ignition-switched 12 V at the fuse block through a 3 A inline fuse — see [Power](#power-which-fuse).
8. Tap a grey dimmer-fed wire for illumination and ground the lamp — see [Illumination](#illumination-where-to-pick-up-the-dash-lights).
9. Reconnect the battery. Key on, engine off: needle should sit at zero and the lamp should light
   with the headlights and dim with the rheostat.
10. Start it. Idle should read in the ballpark of 600–750 RPM in gear for a stock LG4 — **verify
    the actual spec on the underhood emissions label**, which is the authority for this car.
11. Cross-check against a timing light with a tach function, or a second gauge, before you trust
    it enough to set idle or timing by it.
12. Log the parts in `costs.csv` as a direct cost and write the session up in `log/`.

## Troubleshooting

| Symptom | Most likely cause |
|---|---|
| Needle jumps or reads high erratically | Signal wire routed near the plug wires. Re-route first, everything else second |
| Needle wanders at idle, steady at speed | Bad ground — gauge ground, or the engine-to-body strap |
| Reads exactly half or double | Cylinder selector set to 4 or 16 instead of 8 |
| Dead needle, gauge lights work | No signal — wrong cap terminal, or a broken signal wire |
| Nothing at all | Fuse tap on a circuit that isn't live, or a dead ground |
| Erratic on an EST/CCC distributor after all the above | The EST signal can be dirtier than a plain HEI's. A tach signal adapter/filter (MSD 8913 or equivalent) conditions it. Try this **last**, not first |

## Inspection and paperwork

The SAAQ mechanical inspection covers the 11 systems listed in `docs/reference-links.md`; an added
gauge is not one of them. What can hurt is *how* it's installed — unfused taps, unloomed wire near
the exhaust, or a hole hacked through the firewall without a grommet all read as sloppy work to an
inspector looking at an already-rusty 1981 car. Fuse it, loom it, grommet it.

Also: this is an additive, reversible modification if you take the no-drill pad-pod route. Given
this car's condition file, keeping the dash pad unperforated is worth more than the tidier look of
a flush mount.

## Video references

Found by search; **titles and channels only — none of these has been watched end to end**, so treat
them as leads rather than vetted instructions. Where a video contradicts this document, check the
factory manual before believing either.

### The signal side, on an HEI specifically

| Video | Why |
|---|---|
| [Simple Tach Install (HEI Distributor)](https://www.youtube.com/watch?v=4-MKsGInKIQ) — Vehicular Education | Closest match to this job: the cap terminal, the four wires |
| [How to install / wire up a tach the right way, GM, for beginners](https://www.youtube.com/watch?v=DjpV2xvA-b4) | Same ground, beginner pace |
| [How to install a tach on a 70s GM V8](https://www.youtube.com/watch?v=q0mfQ49YReY) | Same era and engine family |
| [Tachometer Install on HEI Distributor](https://www.youtube.com/shorts/HcE9b1Q6uCg) | Short — quick look at the cap connector |
| [How to wire up HEI modules — all five explained, 3/4/5/7 pin](https://www.youtube.com/watch?v=ploJQvvfmik) | **Use this for the open question above** — module pin counts are how you tell a plain HEI from a CCC/EST unit |

### Generic gauge wiring and calibration

| Video | Why |
|---|---|
| [Auto Meter — Basic Tach Installation](https://www.youtube.com/watch?v=FlweceqJ538) | Manufacturer's own walkthrough |
| [Basic Tach Installation](https://www.youtube.com/watch?v=omxgOH-JngI) | Second pass at the same material |
| [How to wire a swap-meet tachometer and set the number of cylinders](https://www.youtube.com/watch?v=HIm42pKi8Ew) | Covers the 4/6/8 selector directly — the one calibration step that matters here |
| [How to Install a Tach (AnthonyJ350)](https://www.youtube.com/watch?v=PeMkO1XXIX0) | General install technique, crimps and routing |

### This dash

| Video | Why |
|---|---|
| [Monte Carlo / Malibu / El Camino gauge cluster removal](https://www.youtube.com/watch?v=c9sc4PYIHiM) | 78–88 bezel and cluster — how the trim comes off before you fish wires behind it |
| [G-body dashboard removal](https://www.youtube.com/watch?v=pRs9bL6DP_0) | What is behind the pad, including the duct run |
| ['78–'87 El Camino — install stock gauges, dash lights & fix tach](https://www.youtube.com/watch?v=_4hCp1wFdGk) | Same platform, includes the instrument-lamp circuit |
| [1978 El Camino — install in-dash tachometer](https://www.youtube.com/watch?v=qK7QFeFN8c8) | The cluster-swap route, if the pod idea gets abandoned |
| [G-body playlist — Cutlass, Monte Carlo, Regal, El Camino, Malibu](https://www.youtube.com/playlist?list=PL8_mSFjTzD2Jg4Bds0fwgZQxMYVuYPvye) | General platform reference |

### If the needle misbehaves

| Video | Why |
|---|---|
| [How to fix a bouncy tach needle](https://www.youtube.com/watch?v=-6j3glUtecY) | The common failure after a fresh install |
| [Tachometer needle drifting — let's fix it](https://www.youtube.com/watch?v=P95k8u3p_Gg) | Grounding and signal quality |
| [Electric tachometer needle bouncing fix](https://www.youtube.com/watch?v=Yl2_rv2YSjs) | Third angle on the same fault |

**A warning about the written results on this topic.** Search turns up a lot of SEO content-farm
pages on tach wiring, and at least two of them are wrong in ways that would cost money: one
instructs you to land the signal wire's far end on chassis ground (that grounds the coil's switched
side — the exact thing this document says never to do), and another claims HEI voltage requires a
filter to protect the gauge (a filter fixes a *noisy* reading; it is not a damage-prevention part).
Prefer the videos, the gauge manufacturer's own instruction sheet, and the factory manual.

## Open items

- [ ] Determine CCC/EST vs plain HEI (see the table above)
- [ ] Read the underhood emissions label for the actual idle speed spec
- [ ] Eyeball the fuse block to confirm it is still original SFE glass and has not been converted
- [ ] Check whether the `ECM` fuse position is populated — a second read on the CCC question
- [ ] Measure the pad space right of the cluster to choose 3-3/8" vs 2-5/8"
- [ ] Confirm the engine-to-body ground strap is sound before wiring anything
