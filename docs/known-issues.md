# Known issues

Originally compiled from photo review at purchase time. **Updated 2026-09-10** with the results of
the SAAQ mechanical inspection (report #1002981283 — see
[`../log/2026-09-10-saaq-mechanical-inspection.md`](../log/2026-09-10-saaq-mechanical-inspection.md)).

Severity reflects the SAAQ mechanical inspection's treatment, not a repair-cost ranking. Rows marked
**SAAQ major** or **SAAQ minor** were formally recorded on the certificate and must be repaired and
attested before the car can be registered. Everything else is our own finding.

Location codes (`09`, `07`, …) are SAAQ's, read off the diagram on the inspection worksheet:
**1** front centre · **2/3** front left/right · **6/16** left/right middle side · **7** underbody ·
**9** rear underbody · **11** rear left · **15** interior · **23/33** left/right rear wheel.

## Blocking — vehicle is prohibited from the road

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Brake fluid leak at the rear axle flexible hose** (rear centre). SAAQ `09 / 133`, code `T` — *"fuite de liquide à frein près de la canalisation flexible de l'essieu"* | **SAAQ major — INTERDICTION DE CIRCULER** | Open — blocks everything | Inspection report #1002981283 |

This is the sole major defect and the only reason for the red stamp. The car cannot legally be
driven until it is repaired and a SAAQ-mandated mechanic signs the *Conformité — Défectuosités
majeures* box in section H. This is the same defect the seller disclosed as "at least one brake line
needs replacement."

## Structural / rust

Equipment, process and safety research for repairing these in-house is in [`docs/welding/`](welding/README.md).

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Rear frame rail (`longeron`), right rear corner, at the body mount — completely rotted through.** SAAQ `09 / 196`, code `NN` — *"côté arrière droit (coin) où est située l'attache de carrosserie complètement pourri"* | **SAAQ minor** — but this is frame, not sheet metal | Open — priority | Inspection report #1002981283 |
| **Rear body mount cushions.** SAAQ `09 / 198`, code `N` — *"coussinets d'attache de la carrosserie complètement à l'arrière"* | **SAAQ minor** | Open | Inspection report #1002981283 |
| **Driver-side middle body mount — completely separated.** Owner-observed. **Not recorded on the inspection report** — the only structural entries are the two `09` (rear underbody) rows above, and there is no `06`/`08` (left side) entry | Unknown — a fully separated mount may be graded **major** by a second inspector | Open — raise proactively at re-inspection | Owner observation, not yet photographed |
| Rear quarter panel — through-hole with corroded, curled edge and surrounding blistering | **Confirmed perforated** | Open | [`rust-rear-quarter-hole.jpg`](../photos/evidence/rust-rear-quarter-hole.jpg) |
| Rocker panel seam (driver side) — flange delaminating along a run, material gone in one section | **Structural — the inspection-critical rust item.** Rockers are on the SAAQ structural list; filler is not an accepted repair there | Open — screwdriver test needed, and it gates the whole repair scope. See [`rust-repair-inspection.md`](rust-repair-inspection.md) | [`rust-rocker-seam.jpg`](../photos/evidence/rust-rocker-seam.jpg) |
| Bottom edge of outer body panel, ragged/eaten | Cosmetic, edge-only | Open | [`rust-lower-panel-edge.jpg`](../photos/evidence/rust-lower-panel-edge.jpg) |
| Front frame, driver side (initially misread as perforated) | **Sound — factory formed holes, not rust-through** | Closed, no action | [`frame-front-sound-corrected.jpg`](../photos/evidence/frame-front-sound-corrected.jpg) |
| Rear underbody frame (initially misread as perforated) | **Sound — factory formed holes** | Closed, no action | [`frame-rear-sound-corrected.jpg`](../photos/evidence/frame-rear-sound-corrected.jpg) |
| Smuggler's box floor (behind seats, inside cab) | **Not yet photographed** — cab back panel was open/trim removed in one photo, revealing water-trail rust staining down the panel | Open — priority | — |
| Standing water in bed floor, front corner, in listing photos | Suggests bed drains not draining | Open — check | — |

**Note on the two `09` rows:** `longeron` is the frame side rail, not floor pan — on the worksheet
it sits in the *Cadre / dessous de caisse* group alongside `traverse` (crossmember) and `membrure`.
Rust-through here is frame repair, not a floor patch. See the log entry for what that implies.

## Water intrusion

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Rear window seal — visibly aged; this platform's rear windows are a known leak point that drains directly into the smuggler's box | Root cause of above rust risk | Open — full seal kit and install method in [`weatherstrip.md`](weatherstrip.md) | — |
| Door beltline weatherstrip (outer window felt) — cracked through, segments missing | Lets water into door interior, contributes to rocker/lower-door rot | Open — scheduled into the combined door job, [`door-job-plan.md`](door-job-plan.md) | — |

## Brakes

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| Rear axle flexible hose leaking — see blocking section above | **SAAQ major** | Open | Inspection report |
| **Parking brake ineffective, both rear wheels.** SAAQ `23 / 135` and `33 / 135`, code `V` | **SAAQ minor** | Open | Inspection report |
| **Parking brake cable.** SAAQ `07 / 158`, code `F` | **SAAQ minor** | Open | Inspection report |
| Master cylinder — active corrosion at brake line outlet fittings | Brakes — inspection-critical | Open — **not** flagged by the inspector; `116 maître-cylindre` passed | — |

## Mechanical

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Exhaust system leaking.** SAAQ `07 / 306`, code `T` | **SAAQ minor** | Open | Inspection report |
| **Exhaust pipe held on with wire.** SAAQ `07 / 308`, code `CC` — *"tuyau attaché avec de la broche"* | **SAAQ minor** | Open | Inspection report |
| Exhaust — manifolds and crossover heavily corroded in photos | Confirmed by the two rows above | Open | — |
| **Battery not properly secured.** SAAQ `01 / 024`, code `CC` | **SAAQ minor** | Open — cheap fix, do it first | Inspection report |
| Transmission identity unknown (THM250C vs THM200C) | Informational, affects value | Open — count pan bolts or read SPID `M` code | — |
| Factory air cleaner assembly missing, replaced with aftermarket open element | Cosmetic + likely emissions-system deletion; did not fail the inspection | Open | — |
| Shift indicator cable unhooked at column (per seller) | Cosmetic — **the cable is display-only, not the neutral-safety interlock**, and the interlock is now independently confirmed sound | Open — `330 neutralisation du démarreur` **passed inspection**, which settles the safety question; access and adjustment procedure in [`shift-indicator-cable.md`](shift-indicator-cable.md) | Inspection report |
| Dash clock | Cosmetic, but a stalled points clock drains the battery and can overheat its feed wire — relevant to the low-charging-voltage row below | Open — see [`dash-clock.md`](dash-clock.md). Comes out with the cluster, so pair it with the bezel and shift-cable work | — |

## Lighting / electrical

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Rear turn signals stop working when the headlights are on.** SAAQ `11 / 007`, code `HH` | **SAAQ minor** | Open | Inspection report |
| **Brake lights stop working when the headlights are on.** SAAQ `11 / 011`, code `HH` | **SAAQ minor** | Open | Inspection report |
| **Windshield washers inoperative, both sides.** SAAQ `02 / 332` and `03 / 332`, code `GG` | **SAAQ minor** | Open | Inspection report |
| Reverse lights — untested at purchase | **Passed** — `14 feu de recul` checked sound | Closed | Inspection report |
| Charging voltage low — dash gauge reads ~12 V running (just under the 13 V mark), should be 13.8–14.8 V, despite new alternator and recent battery | Electrical — strands the car if real | Open — confirm at the battery posts with a meter before chasing; see [`charging-system-check.md`](charging-system-check.md) | — |

The two `HH` rows are almost certainly one fault, not two: rear lighting dropping out only with the
headlights energised is the classic shared-ground failure on this platform. Chase the rear harness
ground before replacing bulbs or sockets.

Worth testing together: the loose battery (`01 / 024`, in Mechanical above) and the low charging
voltage are both connections-at-the-battery problems until proven otherwise. A hold-down that lets
the battery move works the cable ends, and a poor ground there can read as low charging voltage *and*
produce exactly the headlights-on dropout above. Check the terminals and the engine-to-body ground
strap before condemning the alternator.

## Glazing

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Windshield — intersecting cracks inside the wiper sweep.** SAAQ `01 / 256`, code `Q` — *"intersection de fissures dans la zone couverte par les essuie-glaces"* | **SAAQ minor** | Open | Inspection report |
| **Driver's window does not work.** SAAQ `06 / 259`, code `GG` — *"vitre chauffeur ne fonctionne pas"* | **SAAQ minor** | Open — motors bought, diagnosis and teardown plan in [`door-job-plan.md`](door-job-plan.md) and [`power-window-circuit.md`](power-window-circuit.md) | Inspection report |

## HVAC / air system

**Car is heater/vent/defrost only — no air conditioning** (confirmed at the car). No evaporator, no
condensate, no refrigerant. See [`air-system.md`](air-system.md) for the full research notes.

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Rotting / faecal / dead-animal smell from the vents when the blower runs** — decomposition, not mould | **Health — rodent-contaminated air path, see the PPE warning in `air-system.md` before opening anything** | Open — priority | — |
| Rodent nest and/or carcass in the blower squirrel cage, cowl plenum, or heater case — the working diagnosis for the smell | Must be physically removed; no spray or ozone fixes a body in a duct | Open — pull the blower motor from the engine bay first, no dash removal needed | — |
| Wiring chew damage — a nest in the HVAC case usually comes with it; may explain other electrical gremlins | Electrical, possibly inspection-relevant | Open — inspect the firewall harness while the blower is out. **Note:** the `HH` rear-lighting fault below is a live candidate; reverse lights are no longer, they passed inspection | — |
| Other likely nesting sites on this car: aftermarket open-element air cleaner, smuggler's box, under carpet/seats, bed corners | — | Open — check the same afternoon | — |
| Cowl plenum debris and drains — never inspected; the air path has **no cabin filter** on this platform, so anything in the plenum blows straight into the cabin | Entry route for the rodents, and a smell source in its own right | Open — wet-clean only, **do not vacuum dry** | — |
| Wet carpet / jute padding — three documented water paths into this cab (rear window seal, cab back panel staining, beltline weatherstrip) | Contributory: damp interiors attract nesting | Open — lift a carpet corner and feel the padding | — |
| Heater core seepage | **Ruled out by smell** — would be sweet/syrupy with a film on the windshield, not rotting | Closed unless symptoms change | — |
| Cabin air filter | **Does not exist on this car** — no factory provision, no aftermarket retrofit worth fitting | Closed, no action | — |
| Mode lever (air direction) seized — mode doors are **vacuum**-operated on this platform | Open question resolved as **not currently a barrier** — see note below | Open as a repair, closed as an inspection risk | Inspection report |
| Vacuum lines — prime suspect, and rubber vacuum hose is favourite rodent chewing material | Likely shared root cause with the smell | Open — inspect all lines while the blower motor is out | — |
| Control head vacuum selector — plastic rivet crumbles with age, a documented G-body failure | Cheap: the known fix is a small screw in place of the rivet | Open | — |
| Two "vent" levers under the column — loose, broken, doing nothing | Unidentified | Open — **photograph before buying parts**; check first whether the control head is still anchored, since the broken bezel may be making everything feel loose | — |
| A/C — whether the car was built without it (`C60` absent) or had it stripped | Informational; decides which control head and dash bezel to shop for | Open — check glove box size, compressor bracket, SPID sticker | — |

**On the seized mode lever:** the open question was whether SAAQ treats a lever that can't select
defrost as a fail. The 2026-09-10 inspection answers it in practice — `323 dégivrage/chauffage` is a
listed check item on the worksheet under *Accessoires*, and it **passed**, unflagged. So it is not
blocking registration as the car currently sits. That is a data point from one inspection on one
day, not a reading of the guide: if the lever seizes further, or a future inspector exercises it
differently, the answer could change. Still worth fixing on its own merits.

## Interior

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| **Both front seats are not properly fastened.** SAAQ `15 / 333`, code `CC` — *"les 2 sièges avant ne sont fixés correctement"* | **SAAQ minor** | Open — check whether the mounting floor is sound, not just the bolts | Inspection report |
| Instrument panel centre bezel (radio + heater controls) — broken, and cut/modified for a non-factory radio | Cosmetic | Open — used/NOS hunt, no reproduction exists; buy a non-A/C bezel or verify the control opening. See [`air-system.md`](air-system.md) | — |
| Front seats reported as **1982 Ford Thunderbird buckets** (Fox platform), not GM | Informational, but decides which guide loop fits and whether the GM buckle anchors reach — **and is the likely reason the `15 / 333` seat mounting failed** | Open — confirm seat identity before ordering guides | — |
| Front seat belt buckle halves (the short stalk beside the seat, GM-stamped push-button release) — webbing worn, **both driver and passenger** | **Safety — inspection-critical** | Open — replace the buckle end, both sides; rewebbing costs more than the part. Sources in [`reference-links.md`](reference-links.md#seat-belt-hardware) | — |
| Shoulder belt guide loops missing/broken on both front seat backs | **Safety-adjacent** — belt does not route over the shoulder correctly | Open — sources in [`reference-links.md`](reference-links.md#seat-belt-hardware) | — |
| Seat belt anchor bolt (rear, driver side) — bright/recently-worked bolt, not fully seated, belt anchor loose | **Safety** | Open — **not** flagged; `324 ceinture de sécurité` passed | — |
| Driver door armrest pad and base both missing; panel board torn around the footprint | Cosmetic | Open — sourcing in [`parts-sourcing.md`](parts-sourcing.md). Next step: photograph the trim in place and confirm which board carries the torn footprint, and whether the lower has a speaker opening | — |
| Rear cab trim/kick panel — appears removed or missing behind the seats | Cosmetic | Open — ask seller if panel exists | — |
| Passenger seat belt presence — unconfirmed from photos | Open — ask seller | — |
| Power windows — **confirmed present** (`A31`), by the presence of a driver's door switch | Informational | Resolved | — |
| Driver's power window switch — loose, not installed in the door card | Cosmetic / function | Open — held by sprung steel, **not** screws, but frame-vs-clips is disputed between [`parts-door-panel-window-switch.md`](parts-door-panel-window-switch.md) and [`door-job-plan.md`](door-job-plan.md). Settle it by pulling the intact passenger switch and looking. Also check the cutout is in sound board, not in the armrest tear | — |
| Window motors, both doors | Planned work | **Parts bought — ~$70 CAD the pair.** Both doors in one teardown with the weatherstrip and seals; see [`door-job-plan.md`](door-job-plan.md). Addresses the `06 / 259` glazing defect above | — |
| Instrument cluster bezel — in place but loose | Cosmetic | Open — **screwed** on (~8 screws), not clipped. Check whether screws are missing or the plastic bosses have snapped; 1981 is close to a one-year part, so repair beats replacement: [`cluster-bezel.md`](cluster-bezel.md) | — |
| Radio inoperative; loose unidentified wiring hanging behind the dash, likely a previous aftermarket install cut out | Cosmetic — but the constant-hot feed is a fire risk while it hangs loose | Open — deleting the radio, see [`radio-delete.md`](radio-delete.md) | — |

**The Thunderbird seats and the `15 / 333` failure are almost certainly the same problem.** The
inspector recorded *"les 2 sièges avant ne sont fixés correctement"* — **both** front seats, which is
a strange coincidence for worn-out hardware but exactly what you would expect from Fox-platform
buckets sitting on GM floor pan mounting points. Establish the seat identity before buying anything:
it decides whether this is a bracket-fabrication job or a bolt-tightening job, and a seat that isn't
properly anchored will fail the re-inspection again no matter how good the belts are.

Worth noting that `324 ceinture de sécurité` **passed** the 2026-09-10 inspection, despite the worn
buckle webbing and the missing guide loops recorded above. Treat that as one inspector's call on one
day rather than a verdict — the belts are still worth replacing, and a different inspector may well
flag them.

The loose seats and the loose rear belt anchor are worth investigating together. Both are fasteners
into the cab floor, and a floor that won't hold one may not hold the other.

## Trim / identification

| Issue | Severity | Status | Evidence |
|---|---|---|---|
| VIN check digit did not validate | **Resolved** — correct VIN is `1GTCW80H5BD502482`, confirmed by the inspection report | Closed | [`purchase-summary.md`](purchase-summary.md) |
| Odometer discrepancy — inspection reads 7 060 km vs 207,000 km at purchase | **Not a discrepancy** — 5-digit mechanical odometer, rolled over twice; 207,060 displays as `07060` | Closed | Inspection report |
| Trim level — confirmed base Caballero (Z88) by absence of all Diablo/Amarillo markers | Informational | Resolved pending SPID confirmation | [`trim-identification-base-not-diablo.jpg`](../photos/evidence/trim-identification-base-not-diablo.jpg) |
| Glove box SPID sticker — not yet located/read | Would settle trim, transmission, and axle ratio in one look | Open | — |
