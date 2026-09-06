# Adding a standalone tachometer (not in the dash)

Alternative to the factory cluster route in [`tach-swap.md`](tach-swap.md). Avoids the printed
circuit board question, the cluster teardown, and hunting a one-year part — and it is reversible,
which matters on a car whose value case includes originality.

## Mount options

| Mount | Gauge size | Notes |
|---|---|---|
| **A-pillar pod** | **2-1/16" (52 mm)** | Moulded specifically for the 78–87 G-body. Neat and factory-looking. **But 52 mm is small for a tach** — see below |
| **Steering column clamp** | 3-3/8" or 5" | The period-correct early-80s look. Big, dead in the line of sight, clamps on, no holes drilled |
| **Dash-top pod** | 3-3/8" or 5" | Sits on the pad. Easy, very visible, least subtle |
| **Under-dash bracket** | any | Cheapest, worst to read while driving |

### The A-pillar size trap

Pillar pods take **2-1/16" gauges**. Tachs exist in that size but are small and hard to read at a
glance — a tach is a peripheral-vision instrument, which is the whole point of it.

The common arrangement, and the one that suits this car: **big tach on the column or dash top, and
use the pillar pod for oil pressure, volts and temperature.** That is worth real money here because
a base **Z88** has **warning lights, not gauges** — idiot lights tell you after the damage. A pillar
pod full of actual readings fixes a genuine deficiency rather than just adding a tach.

Pods for this body:

- [GlowShift triple pillar pod, 78–87 El Camino](https://www.glowshiftdirect.com/black-triple-pillar-gauge-pod-for-1978-1987-chevrolet-el-camino/) — ABS, paintable, screws and caps included, 3 × 52 mm. Also on [Amazon](https://www.amazon.com/GlowShift-1978-1987-Chevrolet-G-Body-Plastic/dp/B076ZM92LC) and in a [Malibu version](https://www.glowshiftdirect.com/chevrolet-malibu-gauge-pods/)
- [El Camino Store — dual-opening pillar pod, 78–87](https://www.elcaminostore.com/el-camino-aftermarket-pillar-mounted-gauge-pod-dual-opening-1978-1987.html)

## Wiring — four wires

| Wire | Goes to |
|---|---|
| **Signal** | The **TACH terminal on the HEI distributor** — a spade on the cap connector, right next to the red BAT power wire. Female spade end |
| **12 V** (usually red) | An **ignition-switched** source in the fuse box — live with the key on only |
| **Ground** (black) | A good clean chassis or body ground |
| **Illumination** | Splice into the **radio or A/C illumination** wire, so the tach dims with the dash instead of glaring at night |

**Run a dedicated signal wire straight from the HEI to the tach.** Do not go hunting the factory
tach wire in the harness — the forum consensus is that it is far easier to run new wire than to find
and verify the buried original.

**Set the tach to 8 cylinder.** This is the LG4 305 V8.

## The 1981-specific caveat

1981 is the **EST / Computer Command Control** era — large-cap, ECU-timing-controlled HEI. The TACH
terminal still gives a signal, but **erratic or jumpy readings are a known issue** with HEI noise.

If it reads unstable:

1. **Check the ground first.** A poor ground causes most of these, and it is free to fix.
2. **Route the signal wire away from the plug wires** — it picks up ignition noise readily.
3. Only then reach for a **tach signal filter / RPM adapter** — WestCoast AutoParts makes a
   [GM 1967–89 tach signal filter](https://www.wc-autoparts.com/tachometer-signal-filter-gm-hei-msd-holley-speedmaster/),
   and AutoMeter sells [RPM signal adapters](https://www.autometer.com/tach-adapter.html).

## Firewall pass-through — do not drill a bare hole

The signal wire has to cross the firewall. **Use an existing grommet**; there are several with spare
room. If a new hole is genuinely unavoidable, deburr it and fit a proper grommet.

This matters more on this car than most: water intrusion is already the root cause of the rocker and
lower-panel rust (see [`known-issues.md`](known-issues.md) and
[`rust-repair-inspection.md`](rust-repair-inspection.md)). An unsealed hole in the firewall is a new
water path into the cabin, and this car does not need another one.

## Why this route rather than the factory cluster

- **No PCB swap**, no gauge-circuit question, no cluster disassembly.
- **No rare parts** — everything above is current production.
- **Reversible.** A column clamp leaves nothing behind; a pillar pod is four screws. The original
  dash stays original, which the factory-tach route cannot claim once the circuit board is changed.
- **It can fix the warning-light problem at the same time**, which the factory tach does not.

Against it: it is visibly aftermarket. If the goal is a stock-appearing dash, the combined tach/clock
unit in [`tach-swap.md`](tach-swap.md) is the correct answer instead.

## Sources

- [JEGS — how to install a tachometer, basic wiring diagram](https://www.jegs.com/tech-articles/step-by-step-instructions-for-how-to-install-a-tachometer/)
- [OnAllCylinders — how to install a tachometer](https://www.onallcylinders.com/2017/08/03/how-to-install-a-tachometer/)
- [GBodyForum — installing a tach when there wasn't one](https://gbodyforum.com/threads/installing-tach-when-there-wasnt-one.3213/)
- [GBodyForum — tachometer wiring](https://gbodyforum.com/threads/tachometer-wiring.73452/)
- [GBodyForum — A-pillar gauge pods](https://gbodyforum.com/threads/a-pillar-gauge-pods.69947/) and [gauge pods](https://gbodyforum.com/threads/gauge-pods.85029/)
- [El Camino Central — what do I do after finding the TACH label on the distributor](https://www.elcaminocentral.com/threads/what-do-i-do-after-finding-the-tach-label-on-distributor.49847/)
- [El Camino Central — tach connection for a stock 305](https://www.elcaminocentral.com/threads/tach-connection-for-stock-1987-305-motor-in-designer-series-%E2%80%9Cchoo-choo%E2%80%9D-el-camino.85249/)
- [El Camino Central — adding a tach](https://www.elcaminocentral.com/threads/adding-a-tach.22892/)

Links unverified — egress-blocked during research; substance from search extracts.
