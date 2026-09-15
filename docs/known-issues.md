# Known issues at purchase

Compiled from photo review at purchase time. Severity reflects the SAAQ mechanical inspection's likely treatment, not a repair-cost ranking.

## Structural / rust

Equipment, process and safety research for repairing these in-house is in [`docs/welding/`](welding/README.md).

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Rear quarter panel — through-hole with corroded, curled edge and surrounding blistering | **Confirmed perforated** | Open | [`rust-rear-quarter-hole.jpg`](../photos/evidence/rust-rear-quarter-hole.jpg) |
| Rocker panel seam (driver side) — flange delaminating along a run, material gone in one section | **Structural — the inspection-critical rust item.** Rockers are on the SAAQ structural list; filler is not an accepted repair there | Open — screwdriver test needed, and it gates the whole repair scope. See [`rust-repair-inspection.md`](rust-repair-inspection.md) | [`rust-rocker-seam.jpg`](../photos/evidence/rust-rocker-seam.jpg) |
| Bottom edge of outer body panel, ragged/eaten | Cosmetic, edge-only | Open | [`rust-lower-panel-edge.jpg`](../photos/evidence/rust-lower-panel-edge.jpg) |
| Front frame, driver side (initially misread as perforated) | **Sound — factory formed holes, not rust-through** | Closed, no action | [`frame-front-sound-corrected.jpg`](../photos/evidence/frame-front-sound-corrected.jpg) |
| Rear underbody frame (initially misread as perforated) | **Sound — factory formed holes** | Closed, no action | [`frame-rear-sound-corrected.jpg`](../photos/evidence/frame-rear-sound-corrected.jpg) |
| Rear frame rails aft of the axle | **Not yet photographed** | Open — priority | — |
| Smuggler's box floor (behind seats, inside cab) | **Not yet photographed** — cab back panel was open/trim removed in one photo, revealing water-trail rust staining down the panel | Open — priority | — |
| Standing water in bed floor, front corner, in listing photos | Suggests bed drains not draining | Open — check | — |

## Water intrusion

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Rear window seal — visibly aged; this platform's rear windows are a known leak point that drains directly into the smuggler's box | Root cause of above rust risk | Open — full seal kit and install method in [`weatherstrip.md`](weatherstrip.md) | — |
| Door beltline weatherstrip (outer window felt) — cracked through, segments missing | Lets water into door interior, contributes to rocker/lower-door rot | Open — scheduled into the combined door job, [`door-job-plan.md`](door-job-plan.md) | — |

## Mechanical

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Master cylinder — active corrosion at brake line outlet fittings | Brakes — inspection-critical | Open | — |
| Brake line(s) — seller disclosed at least one needs replacement | Brakes — inspection-critical | Open | — |
| Transmission identity unknown (THM250C vs THM200C) | Informational, affects value | Open — count pan bolts or read SPID `M` code |
| Factory air cleaner assembly missing, replaced with aftermarket open element | Cosmetic + likely emissions-system deletion; will not fail SAAQ inspection | Open |
| Windshield — crack in driver's sweep | Glazing — inspection-critical | Open |
| Shift indicator cable unhooked at column (per seller) | Cosmetic — **the cable itself is display-only, not the neutral-safety interlock**. Still run the "foot on brake, try to crank in Drive/Reverse" test, which checks a different component on the same column | Open — access and adjustment procedure in [`shift-indicator-cable.md`](shift-indicator-cable.md) |
| Reverse lights — untested | Lighting — inspection item | Open |
| Dash clock | Cosmetic, but a stalled points clock drains the battery and can overheat its feed wire | Open — see [`dash-clock.md`](dash-clock.md). Comes out with the cluster, so pair it with the bezel and shift-cable work |
| Exhaust — manifolds and crossover heavily corroded in photos | Exhaust integrity — inspection item | Open |
| Charging voltage low — dash gauge reads ~12 V running (just under the 13 V mark), should be 13.8–14.8 V, despite new alternator and recent battery | Electrical — strands the car if real | Open — confirm at the battery posts with a meter before chasing; see [`charging-system-check.md`](charging-system-check.md) |

## HVAC / air system

**Car is heater/vent/defrost only — no air conditioning** (confirmed at the car). No evaporator, no
condensate, no refrigerant. See [`air-system.md`](air-system.md) for the full research notes.

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Rotting / faecal / dead-animal smell from the vents when the blower runs** — decomposition, not mould | **Health — rodent-contaminated air path, see the PPE warning in `air-system.md` before opening anything** | Open — priority | — |
| Rodent nest and/or carcass in the blower squirrel cage, cowl plenum, or heater case — the working diagnosis for the smell | Must be physically removed; no spray or ozone fixes a body in a duct | Open — pull the blower motor from the engine bay first, no dash removal needed | — |
| Wiring chew damage — a nest in the HVAC case usually comes with it; may explain the untested reverse lights or other gremlins | Electrical, possibly inspection-relevant | Open — inspect the firewall harness while the blower is out | — |
| Other likely nesting sites on this car: aftermarket open-element air cleaner, smuggler's box, under carpet/seats, bed corners | — | Open — check the same afternoon | — |
| Cowl plenum debris and drains — never inspected; the air path has **no cabin filter** on this platform, so anything in the plenum blows straight into the cabin | Entry route for the rodents, and a smell source in its own right | Open — wet-clean only, **do not vacuum dry** | — |
| Wet carpet / jute padding — three documented water paths into this cab (rear window seal, cab back panel staining, beltline weatherstrip) | Contributory: damp interiors attract nesting | Open — lift a carpet corner and feel the padding | — |
| Heater core seepage | **Ruled out by smell** — would be sweet/syrupy with a film on the windshield, not rotting | Closed unless symptoms change | — |
| Cabin air filter | **Does not exist on this car** — no factory provision, no aftermarket retrofit worth fitting | Closed, no action | — |
| Mode lever (air direction) seized — mode doors are **vacuum**-operated on this platform | **Possibly inspection-relevant, not cosmetic** — SAAQ treats heating/defrosting as a defect category; a lever that cannot select defrost is a plausible fail | Open — confirm the criteria in the SAAQ guide, then test | — |
| Vacuum lines — prime suspect, and rubber vacuum hose is favourite rodent chewing material | Likely shared root cause with the smell | Open — inspect all lines while the blower motor is out | — |
| Control head vacuum selector — plastic rivet crumbles with age, a documented G-body failure | Cheap: the known fix is a small screw in place of the rivet | Open | — |
| Two "vent" levers under the column — loose, broken, doing nothing | Unidentified | Open — **photograph before buying parts**; check first whether the control head is still anchored, since the broken bezel may be making everything feel loose | — |
| A/C — whether the car was built without it (`C60` absent) or had it stripped | Informational; decides which control head and dash bezel to shop for | Open — check glove box size, compressor bracket, SPID sticker | — |

## Interior

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Instrument panel centre bezel (radio + heater controls) — broken, and cut/modified for a non-factory radio | Cosmetic | Open — used/NOS hunt, no reproduction exists; buy a non-A/C bezel or verify the control opening. See [`air-system.md`](air-system.md) | — |
| Driver door armrest pad and base both missing; panel board torn around the footprint | Cosmetic | Open — sourcing researched, see [`parts-sourcing.md`](parts-sourcing.md). Next step: photograph the door trim in place and confirm which board (upper or lower) carries the torn armrest footprint, and whether the lower has a speaker opening |
| Seat belt anchor bolt (rear, driver side) — bright/recently-worked bolt, not fully seated, belt anchor loose | **Safety — inspection-critical** | Open |
| Rear cab trim/kick panel — appears removed or missing behind the seats | Cosmetic | Open — ask seller if panel exists |
| Instrument cluster bezel — in place but loose | Cosmetic | Open — bezel is **screwed** on (~8 screws), not clipped. Pull it and check whether screws are missing or the plastic screw bosses have snapped. 1981 is close to a one-year part, so repair is preferred: [`cluster-bezel.md`](cluster-bezel.md) |
| Passenger seat belt presence — unconfirmed from photos | Open — ask seller |
| Power windows — **confirmed present** (`A31`), by the presence of a driver's door switch | Informational | Resolved |
| Driver's power window switch — loose, not installed in the door card | Cosmetic / function | Open — retained by spring-steel clips, GM `3040658`, 2 per switch, **not** screws. Check the switch cutout is in sound board and not in the armrest tear first. See [`door-job-plan.md`](door-job-plan.md) |
| Window motors, both doors | Planned work | **Parts ordered — ~$70 CAD the pair.** Both doors done in one teardown with the weatherstrip and seals; see [`door-job-plan.md`](door-job-plan.md) |
| Front seat belt buckle halves (the short stalk beside the seat, GM-stamped push-button release) — webbing worn, **both driver and passenger** | **Safety — inspection-critical** | Open — replace the buckle end, both sides; rewebbing costs more than the part. Sources in [`reference-links.md`](reference-links.md#seat-belt-hardware) |
| Shoulder belt guide loops missing/broken on both front seat backs | **Safety-adjacent** — belt does not route over the shoulder correctly | Open — sources in [`reference-links.md`](reference-links.md#seat-belt-hardware) |
| Front seats reported as **1982 Ford Thunderbird buckets** (Fox platform), not GM | Informational, but decides which guide loop fits and whether the GM buckle anchors reach | Open — confirm seat identity before ordering guides |
| Radio inoperative; loose unidentified wiring hanging behind the dash, likely a previous aftermarket install cut out | Cosmetic — but the constant-hot feed is a fire risk while it hangs loose | Open — deleting the radio, see [`radio-delete.md`](radio-delete.md) |

## Trim / identification

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Trim level — confirmed base Caballero (Z88) by absence of all Diablo/Amarillo markers | Informational | Resolved pending SPID confirmation | [`trim-identification-base-not-diablo.jpg`](../photos/evidence/trim-identification-base-not-diablo.jpg) |
| Glove box SPID sticker — not yet located/read | Would settle trim, transmission, and axle ratio in one look | Open |
