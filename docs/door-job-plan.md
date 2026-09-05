# Driver + passenger door job — combined plan

**Decision:** do both doors in one teardown — window motors, beltline weatherstrip and seals
together. Two replacement motors budgeted at **~$70 CAD the pair**.

This consolidates four open items from [`known-issues.md`](known-issues.md) into a single job.
Related: [`power-window-motor.md`](power-window-motor.md), [`parts-sourcing.md`](parts-sourcing.md).

## Before ordering

- **Confirm the car actually has power windows** (RPO `A31`, optional on a base Z88). Switch plate
  vs. crank handle, or `A31` on the SPID sticker. Still unconfirmed in this repo.
- **Test before you blame the motor.** On these, a dead window is often the switch, a bad ground, or
  the circuit breaker — not the motor. At ~$35 each it's fine to buy them regardless and keep the
  spare, but do the electrical check so you don't fit two new motors and still have a dead window.
  Easiest test is at the connector with the panel off, which you'll have anyway.

## Parts to have on hand before starting

Do not start the teardown until all of this is in the garage. A door stripped to bare metal waiting
three weeks on a back-ordered seal is how water gets in and rockers rot.

| Item | Status | Note |
|---|---|---|
| Window motors ×2 | **Ordered — ~$70 CAD** | 1979–87 G-body, 12-tooth. **Not** the 1978 part. |
| Window felt set, inners + outers, both doors | Priced — Chevelle Depot WFK 1411 78, $332.99 CAD | Already covers both doors |
| [Door panel water shields, Mylar, 1978–87](https://www.chevelledepot.ca/interior/door-window/door-insulators/el-camino-door-panel-water-shields-mylar-1978-1987) | **Sourced — Chevelle Depot** | Die-cut to shape. Mylar upgrade over the original paper-with-jute shields |
| **Butyl — 3M Strip-Calk `08578`** | **Sourced — [NAPA Canada `MMM08578`](https://www.napacanada.com/en/p/MMM08578)** | Same counter as the `08008`. Permanently pliable butyl ribbon. **Standard box is 60 × 1-ft strips**; two doors needs ~12–16 ft, so ask about a partial. Alternates: [Amazon.ca](https://www.amazon.ca/3M-8578-Strip-Caulk-3M-SCB/dp/B000PEZ1L4), [3M Canada](https://www.3mcanada.ca/3M/en_CA/p/d/v000074302/), [Ellsworth Canada](https://www.ellsworthadhesives.ca/products/by-manufacturer/3m/sealants/3m-strip-calk-08578-black-1-ft-strip/). Or glass butyl ribbon 3M `08620`/`08622` — same material |
| [Lower door panel clips, 1978–87](https://www.chevelledepot.ca/interior/door-window/door-hardware/el-camino-lower-door-panel-clip-1978-1987) | **Sourced — Chevelle Depot** | "Christmas tree" style, 3/4" stem, 5/16" diameter. **8 per door → 16 for the pair, plus spares** |
| Regulator rebuild kit ×2 | Optional | Recommended; re-greasing a 45-year-old regulator does more for window speed than the new motor |
| Rivets or bolts to remount the regulator | If using the drill-the-rivets method | 1/4" bolts and nyloc nuts are the common substitute |

### Alternates

- Water shields — [Muscle Cars & Classics](https://www.musclecarsandclassics.ca/interior/door-window/door-insulators/door-panel-water-shield-vapor-barrier-3083005) (Canada) sells a **universal 12-ft roll**, black plasticized film, if the die-cut set is out of stock. US: [Collectors Auto Supply](https://collectorsautosupply.com/water-shield-vapor-barrier-for-1978-87-chevrolet-malibu-el-camino-2dr-mylar/) — already the supplier for the window sweeps — plus [Ecklers](https://www.ecklers.com/el-camino-door-panel-water-shields-mylar-1978-1987-55-198929-1.html) and the [El Camino Store](https://www.elcaminostore.com/door-panel-water-shield-vapor-barrier-24003.html).
- Clips — [Classic Headquarters 12-piece set H-119](https://www.chevelledepot.ca/interior/door-window/door-hardware/classic-headquarters-door-panel-installation-clip-set-12-pieces-h-119) at Chevelle Depot. [Ecklers lists the same clip explicitly for the Caballero](https://www.ecklers.com/el-camino-lower-door-panel-clip-1978-1987-55-195390-1.html).
- Jute backing, if matching the original paper-and-jute construction rather than the Mylar upgrade: [Ecklers water shield jute insulation](https://www.ecklers.com/el-camino-door-panel-water-shield-jute-insulation-1978-1987-55-198931-1.html).

**Clip caution:** two different GM clip styles get listed for this era. OER catalogues a generic
1958–81 interior panel clip that is *not* the right one. Buy the clip whose listing explicitly says
**78–87 El Camino / Caballero**, "Christmas tree" style.

**Butyl tape in Canada:** Canadian Tire, Princess Auto and Rona are unreliable for it, and where
Home Depot and Rona do stock it, it sits in the **siding** section, not with the tapes. NAPA Canada
carries it as an automotive shop supply. An RV dealer or a windshield shop is the reliable
walk-in fallback — roughly $15 a roll.

### The vapour barrier is not optional on this car

Behind each door panel is a plastic water shield sealed with butyl. It will tear coming off, and it
is almost always thrown away and not replaced.

That matters here more than on most cars. This Caballero's two worst rust problems — the
**delaminating driver's rocker seam** and the lower panel edges — are downstream of water getting
into the doors, which is the same reason the beltline weatherstrip is being replaced. Reinstalling
the panel without an intact vapour barrier routes door water onto the inner rocker instead of out
the drains.

Budget plastic sheeting and a roll of butyl tape. It is a ~$30 item that protects the most expensive
problem on the car.

**Adhesive: butyl tape, not weatherstrip adhesive.** The factory bedded the original shield in a
sticky black butyl mastic, and butyl is right because it never fully cures — it seals against the
door skin and still peels off for the next service. Do **not** use 3M `08008` here; that is a
contact cement for bonding rubber to metal, and it does not bond well to polyethylene. Duct tape and
packing tape dry out and let go.

**Material:** door vapour barriers run **4–6 mil**. A trash bag is around 1 mil, contractor grade
about 3, which tears on panel hardware and can sag into the regulator. A roll of **6-mil poly
vapour barrier sheeting** from Rona or Home Depot costs a few dollars and is the same material the
parts vendors sell as a "universal water shield" — worth picking up on the same trip as the butyl.

**Gunnable alternative to the strips.** The door perimeter is an awkward shape and a caulking bead
is easier to run than ribbon. **[LePage PL Acousti-Seal, 295 mL, black](https://www.homedepot.ca/product/lepage-pl-acousti-seal-sound-absorbing-vapor-barrier-adhesive-black-flexible-295ml/1000409509)**
(Home Depot Canada; [825 mL size](https://www.homedepot.ca/product/lepage-pl-acousti-seal-sound-absorbing-vapor-barrier-adhesive-black-flexible-825ml/1000409510))
is formulated to **bond polyethylene vapour barrier film to metal** — the exact application. It never
dries, so the barrier stays peelable; it resists water under immersion; and it stays flexible at
very low temperatures, which matters here. 295 mL covers both doors.

Trade-off: never curing means permanently tacky, so it collects dirt — normal per the manufacturer,
and the same bargain butyl tape makes. Keep it off the regulator and motor.

### Why non-curing, and not something that dries

Non-drying is the right choice here, not a compromise — the factory made the same call:

- **The door moves.** Slamming and flex crack a rigid cured bond line at the stressed edges. A
  non-curing sealant deforms and stays sealed.
- **This door will be opened again** — motor, regulator, lock rods, switch. Non-curing peels and
  re-seats; a dried adhesive means cutting the barrier out and scraping the flange every time.
- **Cold.** −30 to +35 with solar gain on black paint. Cured adhesives embrittle; butyl and
  acoustical sealant stay pliable, and the LePage is rated for it explicitly.
- **The substrate is polyethylene** — low surface energy, so adhesives do not chemically bond to it.
  Drying adhesives depend on that bond and are the *more* likely failure on poly sheet. Butyl and
  acoustical work by permanent tack and mechanical grip instead.

⚠ **Do not substitute silicone RTV or a urethane** (Sikaflex, Window-Weld) as a "stronger because it
dries" option. Both cure permanently and neither bonds well to PE — and **silicone contamination
causes fisheyes in fresh paint.** With rocker and quarter-panel bodywork still ahead on this car,
silicone anywhere near those panels is a problem that surfaces months later at the body shop.

Automotive equivalents in a tube: **Dicor gunnable butyl** (RV dealers) and **Tremco Acoustical
Sealant** ([Crown Building Supplies](https://www.crownbuildingsupplies.ca/products/acoustical-sealant-850-ml-tremco),
[IHL Canada](https://ihlcanada.com/products/tremco-93170x-850-ml-dark-grey-acoustical-sealant)).

**Technique:** one continuous unbroken bead of butyl around the entire perimeter, then press the
plastic in working from the centre outward so no air pockets are trapped. Cut generously around the
handle rods, lock rod and window switch opening, and seal every slit with butyl. A gap anywhere is
where water gets past onto the inner rocker, which is the whole reason for doing this.

### While the door is open, clear the drain holes

Bottom of each door. Poke them clear and flush with water. Blocked drains are the single most likely
reason the rockers are going, and this is the one time they are easy to reach. Costs nothing.

## Order of operations, per door

1. Panel off — uppers and lowers, keeping the clips and screws sorted by side.
2. Peel the vapour barrier carefully; keep it as a template for cutting the new one.
3. **Lock the regulator sector gear before touching the motor** — bolt through the sector gear and
   regulator frame. The lift arm is under heavy counterbalance spring tension and will hurt you.
   Support the glass so it cannot drop.
4. Motor and regulator out. Clean and re-grease the regulator on the bench.
5. Beltline weatherstrip / outer felt, and the inner felts. Glass down or out as the seal requires.
6. Clear the door drains, flush, and check for standing water and interior surface rust while it is
   open.
7. **Reconnect and test the window through its full travel before closing anything up.** Both
   directions, both switches.
8. New vapour barrier, butyl-sealed all the way round.
9. Panel on.

## Driver's power window switch — not installed

**This confirms the car has power windows (`A31`).** The presence question in
[`power-window-motor.md`](power-window-motor.md) is settled; the SPID sticker is still worth finding
for the transmission and axle ratio.

The switch does not screw to the door panel. It is **retained by spring-steel clips — GM
`3040658`, two per switch** — which grip the switch and lock it into the panel opening from behind.
A switch sitting loose in the hole means those clips are missing, which is exactly what they are
prone to.

| Part | Source |
|---|---|
| **Power window switch clip, 1974–87, GM `3040658`** — 2 per switch | **[Chevelle Depot](https://www.chevelledepot.ca/electrical/switches/window-switch/el-camino-power-window-switch-clip-1974-1987)** (Canada) · [Ecklers, NOS GM](https://www.ecklers.com/1974-1987-el-camino-power-window-switch-clip-nos-original-gm-55-195029-1.html) · [OPGI, 78–88 G-body](https://www.opgi.com/window/window-hardware/power-window-switch-retainer-clip/retainer-clip-power-window-switch-1978-88-malibuel-caminomonte-carlo-l240078.html) · [GBodyParts](https://gbodyparts.com/product_info.php?products_id=4692) |
| Switch + door panel retainer kit, 81–87 El Camino / Caballero | [eBay](https://www.ebay.com/itm/126320093194) — names the Caballero and the year range directly |

**Check first — this may not be a clip problem.** The clips need sound panel board to bite against,
and the driver's panel is already **torn around the missing armrest footprint**. If the switch
opening sits in or near that tear, new clips will not hold and the real fix is the panel. Confirm
whether the switch cutout is in intact board before ordering.

Also confirm which piece is actually absent: the assembly is switch → two clips → retainer → panel
opening. "Not installed" could be any of the three.

Do this at the same teardown — the switch has to come out for the panel to come off anyway.

## Door panels are a separate, later step

The driver's panel board is torn around the missing armrest and will be replaced or recovered — but
**not during this job.** Fit the old panels back on after the internals are done, then deal with the
trim once the door is known-good.

Reason: fitting a fresh $500 panel and then pulling it back off to chase a window fault damages the
part that was just paid for. This teardown is also the opportunity to confirm which board — upper or
lower — actually carries the torn armrest footprint, and whether the lower has a speaker opening.
Both answers are needed before ordering trim anyway.

## Log it

One entry in `log/` when done, per the template there. Keep the motor receipt — the SAAQ
re-inspection wants invoices, and a documented door rebuild helps at resale.
