# Dash clock — how it works, why it doesn't, and how it's adjusted

Research roundup, September 2026. Applies to the 78–87 El Camino / Caballero and G-body generally.

## There are no settings

This is the thing that isn't obvious. The factory clock is an **electro-mechanical points clock** —
a wind-up movement rewound periodically by a solenoid, switched by contact points much like a
distributor. No menu, no trim pot, no adjustment screw.

**The clock regulates itself through the act of setting the time:**

- Running **fast** → turning the hands **back** to correct it makes it run **slightly slower**
- Running **slow** → turning the hands **forward** to correct it makes it run **slightly faster**

A **lock-out prevents the regulator being reset more than once per wind cycle**, so this cannot be
rushed. Correcting a badly-out clock is an iterative process over days: set it, leave it, set it
again tomorrow. It converges.

So "how do I adjust the clock" and "how do I set the clock" are the same operation. Nothing is
broken about a clock that needs several days of nudging.

## Where it is

On the **basic cluster**, the clock is a **2.5" square gauge on the right side of the cluster**.
Removal is unbolting the clock and its bracket. Disconnect the battery before pulling the cluster.

On 78–85 cars fitted with the **optional tach**, the clock lives with the tach and its workings
stick out the back of the bracket — a different arrangement, worth knowing before ordering anything.

Base **Z88** cars did not all get a clock; if there is one, this is it.

## Why it stops

| Cause | Notes |
|---|---|
| **Burned points** | The classic. Same failure as distributor points — arcing eats the contacts |
| **Worn or weak winding spring** | Second most common |
| **Dried, hardened lubricant** | 45 years old, same story as the window regulators |
| **Blown fuse** | The clock is on a **constant-hot** circuit (orange wire on GM) so it runs key-off — check its fuse before pulling anything apart |

The traditional roadside fix — filing the points and tweaking the winding spring — works, but is
reported to leave the clock running **10–20 minutes fast per day**. The self-regulation above will
claw some of that back, but it is not a proper repair.

## ⚠ Two reasons not to just ignore a dead clock

**Battery drain.** The clock is permanently live so it can keep time with the key off, and the
original electro-mechanical movement draws real current. On a car that will sit — a project, and a
seasonal one in Quebec — that is a flat battery over the winter.

**Overheating risk.** The nastier failure mode: when voltage is not quite enough to kick the winding
solenoid but current still flows, **the points stay closed and the feed wire overheats**. A stalled
points clock is not an inert dead accessory. On a car being recommissioned, either fix it, convert
it, or disconnect its feed — do not leave a stalled one wired up and forgotten.

## Options

1. **Repair the original** — points and spring. Correct, and keeps the car original.
2. **Quartz conversion.** The popular route. **±2 seconds/day**, maintenance free, and draws about
   **1/300th** the power of the original — which kills the battery-drain and overheating problems
   at once. Keeps the original face and hands, so it still looks stock.
3. **Send it out.** Instrument Services Inc. and D&M Restoration both service car clocks.
4. **Swap it for a tachometer.** A well-trodden G-body move, and this car has no tach — see the
   threads below.

### Before ordering a conversion kit — check the maker

Quartz conversion kits cover **Borg** clocks from 1963–87, which is most GM of this era. They
**cannot** be used on **Westclox ("W")** or **General Time ("GT")** clocks. **Read the maker's mark
on the clock body first.**

- [Instrument Services Inc — quartz conversion](https://www.clocksandgauges.com/quartz-conversion.html) · [clock repair service](https://www.clocksandgauges.com/clock-service.html)
- [Classic Industries `T3025` quartz clock conversion kit](https://www.classicindustries.com/product/t3025.html)
- [OPGI — quartz movement clock conversion, Borg](https://www.opgi.com/gauges-accessories/individual-gauges/clock-conversion-quartz1/clock-conversion-1959-77-gm-quartz-movement-s003015.html)
- [D&M Restoration — clock repair](https://dandmrestoration.com/services/clocks/)

## Sources

**Articles**
- [Old Cars Weekly — "Putting the Ticktock Back in Your Old Car Clock"](https://www.oldcarsweekly.com/features/putting-the-ticktock-back-in-your-old-car-clock-rehab)

**Forum threads**
- [El Camino Central — 5th Generation Clock Repair](https://www.elcaminocentral.com/threads/5th-generation-clock-repair.28479/) — the points-type mechanism explained
- [El Camino Central — 82 dash clock removal](https://www.elcaminocentral.com/threads/82-dash-clock-removal.46295/)
- [El Camino Central — Instrument Cluster Upgrade for 1980 El Camino](https://www.elcaminocentral.com/threads/instrument-cluster-upgrade-for-1980-el-camino.15015/) — where the clock sits in the basic cluster
- [El Camino Central — Tachometer to replace dead clock](https://www.elcaminocentral.com/threads/tachometer-to-replace-dead-clock.138290/)
- [El Camino Central — 1985 switch from dash clock to tach](https://www.elcaminocentral.com/threads/1985-switch-from-dash-clock-to-tach.49317/)
- [GBodyForum — odometer and clock](https://gbodyforum.com/threads/odometer-and-clock.71437/) — knob removal before the lens and surround
- [Turbo Buick — clock draining battery](https://turbobuick.com/threads/clock-draining-battery.69277/)
- [ClassicOldsmobile — quartz conversion tip](https://classicoldsmobile.com/forums/electrical-5/restore-65-66-big-olds-clock-quartz-conversion-tip-146371/)

**Video**
- [Monte Carlo / Malibu / El Camino gauge cluster removal](https://www.youtube.com/watch?v=c9sc4PYIHiM)

None of these could be opened during research — egress-blocked — so they are unverified links
gathered from search results, with the substance drawn from search extracts.

## Do it with the bezel job

The clock comes out with the cluster, which means the same teardown as the loose bezel in
[`cluster-bezel.md`](cluster-bezel.md) and the shift indicator cable in
[`shift-indicator-cable.md`](shift-indicator-cable.md). Three jobs, one dash disassembly.
