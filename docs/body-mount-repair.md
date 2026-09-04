# Middle driver's side body mount — identification and repair

**Status: open, priority. This is the one defect that will not pass the SAAQ mechanical inspection.**

Found during post-purchase inspection. The rubber body mount is still sitting on the frame rail, but the sheet metal above it — the piece the mount bolts *up* into — has rotted away. The mount is attached at the bottom only and is no longer attached to the body.

## What the part is called

| Layer | Name |
|---|---|
| The rubber puck | **Body mount** (also body bushing / cushion / biscuit) |
| The rotted metal above it | **Body mount reinforcement** — also called the *outer floor pan body mount and seat belt reinforcement*, or body mount brace |
| The threaded fastener inside it | **Caged nut** (captured nut) |

The reinforcement is a separate stamped piece that:

- sits under the driver's door, outboard by the rocker, directly above the frame rail
- carries a **caged nut** that the body mount bolt threads into
- has the floor pan spot-welded down onto it, with the inner rocker welded to both
- **continues rearward and carries the lower driver's seat belt anchor bolt**

Source: [GBodyForum — Outer floor pan body mount and seat belt reinforcement](https://gbodyforum.com/threads/outer-floor-pan-body-mount-and-seat-belt-reinforcement.61485/)

This is almost certainly **body mount #3** — the middle mount, under the door. El Camino/Caballero has 6 mounts per side: two on the back rail, two ahead of the rear wheels, one behind the front wheel, one by the radiator.

## ⚠ The seat belt link — check before driving

**The same piece of metal carries the middle body mount and the driver's lower seat belt anchor.**

`known-issues.md` already records a separate observation from the purchase photos: *"Seat belt anchor bolt (driver side) — bright/recently-worked bolt, not fully seated, belt anchor loose."* **These are very likely the same root cause.** If the reinforcement is rotted, the seat belt's bottom anchor may be bolted to nothing.

### How to verify the anchor

1. Pull the sill trim and carpet edge back; look at the anchor bolt from inside.
2. Look at the same spot from underneath.
3. **Torque test.** Wrench on the anchor bolt — it should feel solid. If the caged nut spins, or the surrounding metal flexes and oil-cans under load, the anchor is compromised.
4. Grab the belt right at the anchor and pull hard; watch for movement of the anchor plate relative to the floor.
5. Any doubt — pull the bolt out and inspect the metal behind it directly.

Until verified: no passenger in that seat, minimal driving.

## Reading the current state

The body currently sits **~½" above** the mount — not resting on it, not slumping.

That is not evidence the problem is contained. A body mount's job is to carry the body's weight at that point under clamp load from the bolt. If the body is floating above the cushion, **that mount is carrying zero load**, and the weight is being taken by the adjacent mounts and by the rocker and floor spanning between them.

Two readings:

- **Better:** clamp load is simply gone, so the body relaxed upward to its unloaded position. Nothing has moved structurally.
- **Worse:** the body has lifted or deflected because load redistributed to neighbouring structure.

**Free diagnostic:** compare driver's door gaps to the passenger side, and check whether the door closes and latches cleanly or binds/drops. An unsupported body at that mount shows up as door gap change first. (Also SAAQ 11.4 — doors must open, close and engage properly.)

## SAAQ consequences

This is **two** separate defects, not one:

| Clause | Wording |
|---|---|
| **3.1(c)** | Parts of the frame used to fix the body — a component is *"missing, inoperative, not securely mounted, damaged, cracked, broken or bent"* |
| **11.8** | *"A seat belt anchorage is not securely mounted"* |

See [`saaq-inspection-criteria.md`](saaq-inspection-criteria.md).

## Repair

### Method (consolidated from the G-body forums)

1. Cut along the sill **~1/8" inboard of the rocker, roughly 6" fore and aft** of the mount.
2. Cut along the floor pan just outboard of the outer seat mounts.
3. Remove rot back to clean metal.
4. Fabricate — or graft in a donor — reinforcement carrying the mount provision and caged nut.
5. Weld the patch back in. **Tack first, then weld 100% around all edges** — no skip-welding on a structural mount.

### Material spec

Commercial weld-in mounts are **11 gauge** (~⅛"); DIY fabricators use **3/16" plate**. This is structural and carries a seat belt anchor — **do not let anyone patch it with 18-gauge body sheet.**

### Cost estimate

Canadian shop rates run [$95–135/hr](https://trustedlocalauto.com/blog/shop-labor-rates-province-by-province-guide); Montreal at or above the top of that, classic/resto specialists $120–175/hr.

| Step | Hours |
|---|---|
| Access & prep — seat, carpet, belt anchor, move lines/exhaust, clean to bare metal | 1.5–3 |
| Cut out rot, drill spot welds | 1.5–3 |
| Fabricate reinforcement with caged nut (or fit donor) | 2–4 |
| Weld in, seam seal, prime, paint, undercoat | 2–3 |
| Reassemble, new mount bushing and hardware | 1–2 |
| **Total** | **~8–15 hrs** |

**Realistic all-in: $1,000–2,500 CAD.** Central estimate **$1,200–1,800** if access is good and rot is localized. Materials are minor ($75–200). **DIY: $100–250 in materials.**

A cheap "make it pass" plate-over-the-hole patch might be $400–800 — but SAAQ 3.1 explicitly fails a structural member that *"shows a sign of repair that weakens the structure,"* so a sloppy plate can fail on its own merits, and it traps moisture.

**Budget for the upper end.** Visible rust is almost always smaller than actual rust — these typically open up to 1.5–2× once cut, because the rot lives inside the enclosed structure between floor, reinforcement and inner rocker.

### Getting quotes

Describe it precisely: *"middle body mount reinforcement rotted through, mount no longer attached to the body, driver's seat belt anchor is on the same piece."* That gets a real quote instead of a guess, and quickly sorts which shops want the job. A collision shop may pass; a classic/restoration shop is the target. See the shops table in [`reference-links.md`](reference-links.md) — **ATS Auto Body** (Coteau-du-Lac) and **CCR Technologie** (Delson) are the fits.

Per [Raybuck](https://raybuck.com/a-beginners-guide-to-rust-repair-body-panels-for-your-vehicle/): *structural areas like rockers and cab mounts deserve welds, not adhesive-bonded panels.* **If any shop proposes panel bond for this, walk.**

## Parts

**There is no OEM or NOS part for this reinforcement.** GM discontinued these structural panels decades ago. Forum consensus: donor piece from a parts car, or fabricate.

### Reproduction — adjacent pieces, right concept

| Part | Source |
|---|---|
| Trunk Floor Pan Body Mount Brace, driver side — **includes caged threaded nuts** | [GBodyParts](https://gbodyparts.com/product_info.php?products_id=3011) |
| LH 78-88 G-Body Trunk Floor Panel Extension w/ Body Mount Brace | [Body Shop Price](https://bodyshopprice.com/lh-1978-1988-g-body-trunk-floor-panel-extension-with-body-mount-brace/) |
| 78-88 Frame Mount Repair Washers (2.75" OD × 1.5" ID × ⅛", set of 8) | [Dixie Restoration Depot](https://www.dixierestorationdepot.com/Product/Detail.aspx?s=DM94214+++8) |
| 78-88 Rear Body Mount Bolt Pocket Kit | [Dixie Restoration Depot](https://www.dixierestorationdepot.com/Product/Detail.aspx?s=DM94212) |
| Body mount repair washers, 3" OD | [Trick Chassis](https://trickchassis.com/product/body-mount-repair-washers/) |
| GM A-Body Chevelle/El Camino frame hole body bushing mount repair set | [eBay](https://www.ebay.com/itm/262669823715) |
| Replacement GM floor pans | [Sherman Parts via JEGS](https://www.jegs.com/p/Sherman-Parts/Sherman-Parts-Replacement-GM-Floor-Pans/3629161/10002/-1) |

**Best lead — phone them:** C2C Fabrication lists a [frame mount kit](https://www.c2cfabrication.com/collections/chevrolet-el-camino-parts/frame-mount-kit) and a [body mount rust-repair combo kit](https://www.c2cfabrication.com/collections/combo-kits-1/product_body-mount) for El Camino. Year fitment and contents unconfirmed, but they stamp El Camino panels 1959–87 and are the most likely source of an actual pressed piece for this area. Call before committing to fabrication.

### Bushings and hardware (replace while it's apart)

| Part | Source |
|---|---|
| Body mount bushing + hardware kit, 78-87 | [Ecklers](https://www.ecklers.com/body-mount-bushing-hardware-kit-bm1031kit-ek-55-900091.html) |
| Urethane bushings, **explicitly listed 78-87 Caballero** | [Ecklers](https://www.ecklers.com/el-camino-body-mount-bushings-urethane-1978-1987-55-195308-1.html) |
| Same urethane set — **Canadian, no brokerage** | [Muscle Cars & Classics](https://www.musclecarsandclassics.ca/suspension/body-mounts-related/polyurethane-body-mounts/el-camino-body-mount-bushings-urethane-1978-1987) |
| Bushing hardware kit — **Canadian** | [Chevelle Depot](https://www.chevelledepot.ca/suspension/body-mounts-related/body-mount-hardware/body-mount-bushing-hardware-kit-g-body-cars-1978-1987) |
| Energy Suspension kits | [energysuspensionparts.com](https://www.energysuspensionparts.com/category/chevrolet_el_camino/body-mount-bushings-kit) |
| OER body mounts | [OER Parts](https://www.oerparts.com/shop/all-years/chevrolet/elcamino/parts/body-components/body-mounts/) |

**Stay with OEM-style rubber, not urethane.** Urethane transmits noticeably more noise and vibration into the cab. On a summer cruiser the durability gain is irrelevant and the ride penalty is real.

## Gotchas before you start

- **Body mount #3 installs the opposite way round to all the others.** Factory did it that way — swap upper and lower. Don't "correct" it.
- **Near-certainty the bolts and caged nuts are badly rusted and bolts will snap.** Penetrating oil days ahead, heat, replacements on hand.
- Loosen **all** body bolts one or two turns first, *then* work one side front-to-rear.
- All bolt heads are accessible from below through the frame (except the radiator support).
- **Loosen the rear bumper-to-frame bolt before jacking the body** — the tailgate hinge (body) fouls the bumper (frame) otherwise.
- You only need a little clearance to swap a bushing — no full lift required.
- Support the body properly before pulling the mount; do one side at a time.
- **Weld-through primer** on surfaces that become inaccessible after welding — critical here, since the reinforcement sits sandwiched where you'll never reach it again. Seam sealer, then coating.

## Sequencing

Do this repair **before** the underbody degreasing and cavity wax — don't burn through fresh coating, and get the repair sealed under it. See [`rust-repair-and-protection.md`](rust-repair-and-protection.md).

## Reading and video list

**G-body / El Camino specific**
- [Outer floor pan body mount and seat belt reinforcement](https://gbodyforum.com/threads/outer-floor-pan-body-mount-and-seat-belt-reinforcement.61485/) — *the* thread for this part
- [El Camino body Mount #3](https://gbodyforum.com/threads/el-camino-body-mount-3.62217/)
- [Need tips on fixing body to frame mounts](https://gbodyforum.com/threads/need-tips-on-fixing-body-to-frame-mounts.50488/)
- [Body mount bushing replacement](https://www.elcaminocentral.com/threads/body-mount-bushing-replacement.257105/) · [G body body mount question](https://www.elcaminocentral.com/threads/g-body-body-mount-question.252714/) · [Body mount locations](https://www.elcaminocentral.com/threads/body-mount-locations.242576/)
- [Floor pan DIY or not?](https://gbodyforum.com/threads/floor-pan-diy-or-not.65052/)
- [How to lift an El Camino body for frame-off](https://www.chevelles.com/threads/how-lift-an-el-camino-body-for-frame-off.346963/)

**Closest video matches — body-side structure and caged nuts**
- [Spinning Body Mount Bolt? The Fix Nobody Shows — RUSTORATIONS EP39, '72 Nova](https://www.youtube.com/watch?v=ybERYYaSjAE) — the caged nut spinning; likely your exact failure
- [Replacing Rotted Jeep Wrangler Body Mounts / Torque Box / Floor Support](https://www.youtube.com/watch?v=Ie16GgrFlFk) — closest structural analogue
- [Jeep JL Broken Body Mount Bolt Repair](https://www.youtube.com/watch?v=p4LK3EbpxZk) — snapped bolt extraction
- [How to Change Out Body Mount Bolts / Inspect for Corrosion](https://www.youtube.com/watch?v=bIVJBluVUmc)

**Cab mount videos (frame-side, same techniques)**
- [How to Repair Rusted Out Cab Mount](https://www.youtube.com/watch?v=wGa_u511AR8)
- [Risky Job! Rotted Out Cab Mounts — Ford F-350](https://www.youtube.com/watch?v=dXcyWzlldAY)
- [DIY – Repairing Body Mount Frame Bracket on Truck/SUV](https://www.youtube.com/watch?v=3QU48w0DQK4)
- [Chevy Truck Cab Body Mount Repair](https://www.youtube.com/watch?v=7PxvSOI9rks)
- [Body Mount Repair – The Build](https://www.youtube.com/watch?v=Ntc6k4Xzkao)

**Forum threads with build photos** — GMT400 has the deepest cluster anywhere:
[Cab mount bracket destroyed by rust](https://www.gmt400.com/threads/cab-mount-bracket-destroyed-by-rust.37720/) · [Cab mounts rotted thru](https://www.gmt400.com/threads/cab-mounts-rotted-thur.23575/) · [Repair/replace cab mount supports](https://www.gmt400.com/threads/repair-replace-cab-mount-supports.77983/) · [Cab Mount Replacement Procedure](https://www.gmt400.com/threads/cab-mount-replacement-procedure.66490/) · [Rotted body mount repair question](https://www.gmt400.com/threads/rotted-body-mount-repair-question.61906/)

Also: [Jeep Wrangler TJ body mount rust](https://wranglertjforum.com/threads/suggestions-on-dealing-with-body-mount-rust.19753/) · [1st Gen Dodge Ram cab mount repair](https://www.dieseltruckresource.com/forums/1st-gen-ram-all-topics-93/cab-mount-repair-289753/) · [Silverado/Sierra rotted cab mounts](https://www.silveradosierra.com/threads/rotted-cab-mounts.756009/)

**Reference — what a properly engineered weld-in mount looks like.** Neither makes a G-body part, but both are useful benchmarks for judging fabrication or a shop's work:
[AutoRust](https://www.autorust.com/) (11-gauge, CNC cut, AWS-certified welders — [front](https://www.autorust.com/product/front-cab-mount-set-art-178-1-s/) / [rear](https://www.autorust.com/product/rear-cab-mount-art-222-s-set-of-two/) cab mounts) · [Rust Buster](https://www.rustbuster.com/) ([bed & cab mount bracket](https://www.rustbuster.com/products/bed-and-cab-mount-left), [mid cab mount](https://www.rustbuster.com/products/rear-cab-mount-small))

## Platform naming note

**1978–81 was GM's A-body; the identical platform was renamed G-body for 1982–88.** This car is technically a late A-body, but structurally identical and virtually all parts are cross-listed as **"78-88 G-body."** Search that term. Searching "A-body" alone mostly returns 1964–72 Chevelle content.
