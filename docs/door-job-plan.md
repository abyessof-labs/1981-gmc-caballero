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
| Butyl tape | **Sourced — [NAPA Canada](https://www.napacanada.com/en/search/paint-body/shop-supplies/glues-adhesives-sealants/butyl-tape/201806640)** | See the sourcing note below — Canadian Tire generally does *not* stock it |
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
