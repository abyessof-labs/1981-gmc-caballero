# Clock → tachometer swap

Researched September 2026. Follow-on from [`dash-clock.md`](dash-clock.md).

## For a 1981, it isn't clock *or* tach — the tach has the clock in it

The single most useful finding, and it changes the premise:

> There are two tach mounting brackets: one for **78–85** and one for **86–87**. **The 78–85
> tachometer had a clock in it** and the 86–87 did not — which is why there is a hole in the 78–85
> bracket.

So on a 1981 the factory tach is a **combined tach + clock unit**. Fitting one does not cost you the
clock; you gain a tach and keep a clock, in one part. Most of the write-ups below are 86/87 cars,
where it genuinely is a swap of one for the other — **do not read those threads as describing what
happens on this car.**

## The mechanical part is easy

Unbolt the clock and its bracket, bolt in the tach and its bracket. **The tach's mounting bolts are
what connect it to the gauge circuit board**, which supplies its power and ground — so there is no
power or ground wiring to run.

## The wiring is one wire — which may already be there

- Signal wire is **white**, landing at **pin 17** of the cluster connector.
- From there it runs to the **TACH terminal on the HEI distributor**, right next to BAT+.
- Factory tach cars also use a **resistor** that mounts to the firewall between the distributor and
  the brake booster.

**Check before buying anything:** on cars built with the rest of the gauge package, the white wire
is frequently **already in the dash harness, coiled up under the dash**, unused. If it is there,
this becomes close to plug-and-play.

## Two buying traps

**1. Six-cylinder and eight-cylinder tachs are different.** The 6-cyl redlines at 4500, the 8-cyl at
5000. This car is the **LG4 305 V8 — needs the 8-cylinder tach.** A 6-cyl unit will read wrong.

**2. The printed circuit board may need changing.** This is the likely hidden cost. For 78–81 there
are two boards:

| GM part | Fits |
|---|---|
| `25016403` | 78–81, **warning lights** cluster (idiot lights) |
| `25016702` | 78–88, **factory gauges** cluster |

A base **Z88** most likely has the warning-light board, and the tach needs the gauge circuit. So
budget for the gauge PCB as well. **Unconfirmed** — verify against the actual cluster and the FSM
before ordering, since this is inference from the two part listings rather than a stated rule.

Reproduction boards: [Dixie 78–81](https://www.dixierestorationdepot.com/Product/Detail.aspx?s=DM00043+++25016403) ·
[Dixie 81–88](https://www.dixierestorationdepot.com/product/Detail.aspx?s=DM00043+++25016702) ·
[OER `25016403`](https://www.oerparts.com/product/25016403.html) ·
[OER `25016702`](https://www.oerparts.com/product/25016702.html) ·
[SS396 rally-gauge PCB](https://www.ss396.com/el-camino/GPC-788G.html) ·
[Intellitronix flexible PCB](https://www.intellitronix.com/product-page/1978-88-el-camino-monte-carlo-malibu-printed-flexible-circuit-board)

## Donor parts

A whole dash pod with tach/clock and gauges can be substituted from another **78–85 El Camino,
78–83 Malibu / Wagon, or 78–85 Monte Carlo**, with minor wiring modifications. That is a wide donor
pool — worth a saved eBay search and a look at the same used channels as the bezel in
[`cluster-bezel.md`](cluster-bezel.md).

Buying a complete tach-equipped pod may well be cheaper and less fiddly than assembling tach +
bracket + PCB separately, and it sidesteps the question of which board is in the car.

## Sources

**Article**
- [Curbside Classic — Curbside Tech: Improving My El Camino Gauge Assembly](https://www.curbsideclassic.com/blog/tech/curbside-tech-improving-my-el-camino-gauge-assembly/)

**Forum threads**
- [GBodyForum — 1986 El Camino, adding tachometer](https://gbodyforum.com/threads/1986-el-camino-adding-tachometer.59184/) — the pin 17 / distributor wiring detail
- [El Camino Central — 1986 El Camino tachometer swap](https://www.elcaminocentral.com/threads/1986-el-camino-tachometer-swap.49202/)
- [El Camino Central — installing a tachometer, 1986 El Camino](https://www.elcaminocentral.com/threads/installing-a-tachometer-1986-el-camino.13248/)
- [El Camino Central — factory tach?](https://www.elcaminocentral.com/threads/factory-tach.15675/) — the 78–85 vs 86–87 bracket and clock difference
- [GBodyForum — 1985 gauge cluster swap](https://gbodyforum.com/threads/1985-gauge-cluster-swap.67517/) — closest year to this car
- [GBodyForum — tachometer upgrade](https://gbodyforum.com/threads/tachometer-upgrade.23011/)
- [GBodyForum — how to install tach?](https://gbodyforum.com/threads/how-to-install-tach.38840/)
- [GBodyForum — factory tach wire?](https://gbodyforum.com/threads/factory-tach-wire.66313/) and [can't find tach wire](https://gbodyforum.com/threads/cant-find-tac-wire.43797/) — both on locating the coiled white wire
- [GBodyForum — Monte Carlo tach question](https://gbodyforum.com/threads/monte-carlo-tach-question.63017/)

**Video**
- [Monte Carlo / Malibu / El Camino gauge cluster removal](https://www.youtube.com/watch?v=c9sc4PYIHiM)

**No dedicated clock-to-tach video was found.** Repeated searches returned forum threads and the
cluster-removal video above, nothing walking through the swap itself. The written threads are
detailed enough to work from; the video covers the teardown half.

All links are unverified — every one was egress-blocked during research, and the substance here
comes from search extracts.

## Sequencing

Same dash teardown as the loose bezel ([`cluster-bezel.md`](cluster-bezel.md)) and the shift
indicator cable ([`shift-indicator-cable.md`](shift-indicator-cable.md)). If a tach is wanted, decide
before that teardown rather than after — and check for the coiled white wire while the dash is
already open, since that answers most of the cost question.
