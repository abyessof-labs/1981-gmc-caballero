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
| **Vapour barrier sheeting + butyl tape** | **Not yet sourced** | See below — easy to forget, and it matters on this car |
| Regulator rebuild kit ×2 | Optional | Recommended; re-greasing a 45-year-old regulator does more for window speed than the new motor |
| Rivets or bolts to remount the regulator | If using the drill-the-rivets method | 1/4" bolts and nyloc nuts are the common substitute |
| Door panel clips | Cheap, buy spares | The old ones break on removal, guaranteed |

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
