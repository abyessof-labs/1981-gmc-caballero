# Power window circuit protection — where to look, and why it isn't a fuse

For checking the electrical side before blaming the motors. Relates to
[`door-job-plan.md`](door-job-plan.md) and [`power-window-motor.md`](power-window-motor.md).

## The answer

**Fuse panel position 4 — 30 amp circuit breaker — power windows and sunroof.**

This is the 1978–81 layout, which covers a 1981 car. (1982 is a break year on this platform for
several things, so do not assume an 82–87 diagram applies.)

Fuse block is under the dash on the driver's side. Confirm by eye before hunting — the panel
usually carries a letter designation stamped on it.

## It is a circuit breaker, not a fuse — this matters

On this platform the power accessories are protected by **circuit breakers**, not blade or glass
fuses:

| Circuit | Protection |
|---|---|
| **Power windows + power door locks** | **Circuit breaker on the fuse panel — position 4, 30 A** |
| Rear window defogger | Circuit breaker on the fuse panel |
| Headlights | Circuit breaker integral with the headlight switch |
| Windshield wipers | Circuit breaker integral with the wiper switch |

Consequences for diagnosis:

- **You cannot tell by looking.** There is no visible element to inspect. A breaker that has failed
  open looks exactly like a good one.
- **Auto-reset breakers cycle.** If the window runs briefly, dies, then works again after a few
  minutes, that is the breaker *tripping*, not failing — and it means something downstream is
  drawing too much current.
- Test it with a meter or test light: **12 V should be present on both terminals.** Power on one
  side and not the other means the breaker is open and needs replacing. A breaker cannot be
  repaired or meaningfully reset here.
- **If a new breaker trips immediately, there is a short to ground** in the window circuit. Stop and
  find it rather than fitting a bigger breaker.

## The free test — do this first

**Power windows and power door locks share this one breaker.**

So if this car has power locks and **the locks work, the breaker is good** — full stop. The fault is
downstream: the switch, its clips, a ground, the wiring, or the motor. That is a five-second check
with no tools and no dash disassembly, and it should happen before anything is unbolted.

If the car has no power locks, the meter test above is the fallback.

## What a tripping breaker probably means on this car

A binding or dry window regulator draws excess current and will trip a healthy 30 A breaker. Given
this car's age and the expectation already recorded in
[`power-window-motor.md`](power-window-motor.md) — that 45-year-old hardened grease does more damage
to window speed than a tired motor — **a tripping breaker points at the regulator, not the
electrics.** The fix in that case is the clean-and-re-grease already planned, not a new breaker and
not a new motor.

Order of suspicion for a dead window, cheapest first:

1. Breaker — settled free by the door-lock test above
2. Switch and its clips — already known missing on the driver's side
3. Grounds
4. Regulator binding
5. Motor

The motors are bought and cheap, so this is not about avoiding the purchase — it is about not
finishing the job with two new motors and a window that still does not move.

## Diagrams

Could not be opened during research (egress-blocked), so these are unverified links, but all three
cover the right years:

- **[78–81 El Camino & GMC Caballero fuse panel diagram](https://knigaproavto.ru/shemy/en/gmc/caballero/681-1978-1981-chevrolet-el-camino-and-gmc-caballero-fuse-box-diagram.html)** — names the Caballero explicitly
- [Auto Genius — El Camino 1978–1981 fuse box diagram](https://www.autogenius.info/chevrolet-el-camino-1978-1981-fuse-box-diagram/)
- [Carknowledge — same years](https://www.carknowledge.info/chevrolet-el-camino-1978-1981-fuse-box-diagram/)
- [1983 El Camino owner's manual, "Fuses and Circuit Breaker" page](https://www.manualslib.com/manual/881702/Chevrolet-El-Camino-1983.html?page=96) — later year, but the breaker discussion is useful
- [ClassicCarWiring — 1980 Malibu / El Camino colour wiring diagram](https://classiccarwiring.com/products/1980-chevy-malibu-el-camino-color-wiring-diagram) — paid, and the closest thing to a proper colour schematic short of the FSM

Positions confirmed from search extracts of those diagrams:

| Position | Rating | Circuit |
|---|---|---|
| 1 | 5 A | Instrument panel lights, alarm buzzer, heater dial light |
| 2 | 20 A | Choke heater |
| 3 | 5 A | Instrument panel lights, heater dial light |
| **4** | **30 A breaker** | **Power windows and sunroof** |

Only these four came back in readable form. The full panel is in the diagrams above and in the 1981
FSM.
