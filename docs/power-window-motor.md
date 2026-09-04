# Power window motor — documentation and procedure

Researched September 2026. Not yet performed on this car.

## First: confirm this car has power windows

Power windows were **RPO `A31`**, an option, and this is a base **Z88**. Nothing in
[`known-issues.md`](known-issues.md) records power windows either way.

Two checks:

- Look at the door — switch plate, or a crank handle.
- `A31` on the glove-box SPID sticker, which is still unlocated (see known-issues → Trim /
  identification). Same sticker settles the transmission and axle ratio.

If the windows are manual, the failure is in the regulator and its counterbalance spring, not a
motor, and the parts below do not apply. The safety warning still does.

## ⚠ The counterbalance spring

**The regulator lift arm is under heavy spring tension. Removing the motor without locking the
sector gear can release it suddenly and cause serious injury.** This is a factory service warning,
not forum folklore, and it is the reason to read a procedure before starting rather than during.

Before unbolting the motor:

1. **Lock the sector gear to the regulator frame.** Put a bolt through a hole in the regulator frame
   and the sector gear and nut it. If the holes don't line up, drill through both and bolt it.
2. **Support the glass** independently so it cannot drop when the regulator is freed — tape,
   a wedge, or a helper.

## The part

- **1979–1987 G-body power window motor, 12-tooth.** The **1978 motor is different and does not
  interchange** — another 78-vs-79+ split on this body, distinct from the 78/81 door panel split in
  [`parts-sourcing.md`](parts-sourcing.md).
- Regulator rebuild kits are sold for 78–87 (standard, and a deluxe version with the glass guide).
  Worth buying alongside the motor — see below.

## Two accepted methods

**A — hole saw, regulator stays in the door.** Locate the three dimples in the inner door skin near
the motor; drill them out with a 3/4"–1" hole saw to reach the motor bolts. Faster, no rivets
drilled. The cost is three permanent holes in the inner door skin.

**B — drill the rivets, remove regulator and motor together**, then separate on the bench. No holes
cut in the door. Strongly preferred when replacing an original motor, because it lets you clean and
re-grease the regulator — owners consistently report the degreased-and-regreased regulator does more
for window speed than the new motor does. Hardened 45-year-old grease is often the actual fault.

Given this car's age and unknown history, **B is the better default**: budget for the rebuild kit
and assume the regulator needs servicing, not just the motor.

## Where the instructions are

| Source | Notes |
|---|---|
| **1981 Chevrolet Factory Service Manual** | The authoritative one. Covers Malibu / El Camino, ~3,145 pages, body + chassis + electrical with wiring diagrams. GMC did not publish a separate Caballero body manual — the Chevy A-body manual is the manual for this car. Reprints from Faxon Auto Literature, TMB Books, OPGI, Amazon. Buy the **1981** book specifically; the wiring differs year to year. |
| **AutoZone Repair Guides** (autozone.com) | Free online. Carries the GM window regulator motor procedure including the sector-gear warning. |
| **Chilton / Haynes** | General El Camino 1978–87 coverage. Thinner than the FSM but cheap. |
| **El Camino Central** — "Easy Power Window Motor Replacement" | The hole-saw method written up by an owner. |
| **GBodyForum** — "replacing power window motor", "Spring Loaded Power Window Regulator Refit" | Both methods, plus the spring-tension discussion. |
| **Video** | "GM G-Body Window Motor Replacement"; "El Camino Power Window Replacement" (1985); "1981 Monte Carlo Window Motor Replacement" — the Monte Carlo is the same year and the same door hardware family. |

Note on platform naming when searching: 1981 is technically the last **A-body** year, with the
**G-body** designation starting in 1982. The 1978–87 cars are one family for parts and procedures,
but this is why some catalogues and threads split them.

## Sequence this with the other door work

Three open jobs all require the driver's door panel off:

1. Door beltline weatherstrip / outer window felt — cracked through (known-issues, water intrusion)
2. This window motor
3. Door panel replacement or recover (known-issues, interior)

Do them as one teardown: **panel off → weatherstrip → window motor and regulator → panel on.**

Corollary: **do not install a new door panel until the door internals are finished.** Fitting fresh
vinyl and then pulling it back off to chase a window motor risks damaging the part that was just
paid for.
