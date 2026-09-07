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
| Add-a-circuit fuse tap (ATO or the correct blade type for this fuse block — **verify**) + 3 A fuse | Powers the gauge without cutting a factory wire | $10 |
| 18 AWG stranded primary wire, three colours | Red power, black ground, a third for signal | $15 |
| Crimp terminals, heat-shrink, split loom, zip ties, rubber grommet | | $20 |
| Ring terminal + star washer for the ground | | — |

Range: a 0–6000 or 0–8000 RPM face is plenty. **A stock LG4 305 makes its power well under
4500 RPM** — the tach is there to keep you honest about that, not to invite you past it.

Tools: test light or multimeter, wire strippers/crimper, socket set (already logged in `costs.csv`),
drill and step bit only if you commit to a drilled mount, a grommet for any firewall hole.

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
| **Power** (red) | Ignition-switched 12 V, via a fuse tap at the fuse block, 3 A fuse | Must die with the key or the gauge drains the battery |
| **Ground** (black) | Clean bare chassis metal under the dash, ring terminal + star washer | Shared reference with the signal |
| **Illumination** (usually white) | Instrument-panel lamp feed — the **grey** wire in GM harnesses of this era | Dims with the factory rheostat instead of glowing full-bright at night |

Notes that matter more than the table:

- **Power source.** Use an add-a-circuit at the fuse block on an ignition-switched circuit —
  gauges or accessory. Do not splice into the wiper or any brake-related circuit, and do not feed
  the tach from the `BAT` terminal at the distributor.
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

## Procedure

1. Disconnect the battery negative.
2. Identify the distributor (CCC or not) and locate the `TACH` terminal on the cap connector.
3. Set the gauge's cylinder selector to **8**.
4. Mount the pod and gauge; confirm the driver's view is clear and the gauge is readable from the
   normal seating position **before** committing any adhesive or fastener.
5. Run the signal wire from the cap, through the firewall grommet, to the gauge. Loom it, secure
   it, keep it off the plug wires.
6. Land the ground on clean bare metal.
7. Tap ignition-switched 12 V at the fuse block through the add-a-circuit with a 3 A fuse.
8. Tap the grey instrument-lamp wire for illumination; ground the lamp.
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

## Open items

- [ ] Determine CCC/EST vs plain HEI (see the table above)
- [ ] Read the underhood emissions label for the actual idle speed spec
- [ ] Confirm the fuse block's blade type before buying an add-a-circuit
- [ ] Measure the pad space right of the cluster to choose 3-3/8" vs 2-5/8"
- [ ] Confirm the engine-to-body ground strap is sound before wiring anything
