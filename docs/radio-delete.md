# Radio delete — wire map and procedure

Radio is inoperative and not being replaced. Plan: identify and cut the radio harness, cap and label
every conductor, pull the head unit, blank the opening.

**Before you cut, read this once:** the factory harness terminates in plugs at the radio. If those
plugs are still intact, the reversible move is to **unplug them, tape the connector bodies, and
zip-tie them up** — no cutting, and the next owner (or you, in five years) can drop a radio back in.
Cutting a 45-year-old GM harness is not undoable and there is no reproduction for it. If the wires
are already hacked off from a previous aftermarket install — which is the likely story behind the
loose bundle in the cab — then cutting back to clean copper and capping is the right call, and the
rest of this document is that job.

## What is actually hanging in there

Do **not** assume every loose wire behind the dash is radio. On an '81 G-body that area also carries
the cigarette lighter feed, courtesy and glovebox lamp feeds, the heater/AC control and blower
circuits, the wiper switch, and the instrument cluster feed — plus whatever a previous owner added.
Anything you cannot positively identify by the test procedure below, leave alone.

## Wire map — factory Delco radio, 1978–87 GM G-body

Two connectors at the radio: one for power/ground/illumination, one for speakers.

### Connector A — power, ground, illumination

| Colour | Function | Live when | Cut risk |
|---|---|---|---|
| **Orange** | 12V **constant**, from fuse block | **Always — key out, key in pocket** | **High. This is the one that starts fires.** |
| **Yellow** | 12V **switched** (ACC / RUN) | Key at ACC or RUN | Medium |
| **Gray** | Dial + dash illumination, via headlamp switch and dimmer rheostat | Park or head lamps on; brightness follows the dimmer | Low |
| **Black** | Ground | — | None |
| **Pink** (if fitted) | Power antenna trigger | With radio powered | Low — base Z88 likely has none |

### Connector B — speakers (Delco standard colour code)

| Speaker | Positive | Negative |
|---|---|---|
| Left front | Tan | Gray |
| Right front | Light green | Dark green |
| Left rear | Brown | Yellow |
| Right rear | Dark blue | Light blue |

A base Caballero with the low-line AM radio may have only the front pair, or a single dash speaker.
Fewer speaker wires than this table is normal, not a sign you are missing something.

### Two colour collisions that will bite you

- **Gray** is illumination in connector A and **left-front speaker negative** in connector B.
- **Yellow** is switched 12V in connector A and **left-rear speaker negative** in connector B.

Tell them apart by **which connector they come out of**, and confirm with the test below. Never go by
colour alone on this harness.

## Identify before you cut

Battery **connected** for steps 1–3 (you need the circuits live), test light or multimeter, one wire
at a time. Write the result on a piece of tape wrapped on each wire as you go.

1. **Key out, doors shut.** Probe each wire to a clean ground. The one that lights is the **orange
   constant**. Tag it `C-HOT`. This wire is live right now — do not let the probe slip.
2. **Key to ACC.** A second wire lights: **yellow switched**. Tag it `SW`.
3. **Park lamps on, dimmer wheel full up, then full down.** The wire that lights and *changes
   brightness with the wheel* is the **gray illumination**. Tag it `ILL`.
4. **Key out, battery negative disconnected.** Ohm each remaining wire to chassis: near zero is the
   **black ground**. Tag it `GND`.
5. Remaining wires are speakers. Ohm them against each other in pairs — a pair reading roughly
   **3–10 Ω** is one speaker. Tag each pair `SPK-LF`, `SPK-RF`, and so on.
6. **Anything left over that lights up and is not on this list is not radio wiring.** Stop, trace it,
   and leave it connected until you know what it is.

## Cut and cap

**Battery negative disconnected before the first cut. No exceptions — the orange wire is live at the
fuse block regardless of the key.**

- Leave **150–200 mm (6–8")** of wire from where the bundle breaks out of the main harness. That
  stub is what lets someone re-terminate later instead of splicing into the loom.
- **Stagger the cut lengths** by 20–30 mm across the bundle so the capped ends sit at different
  depths and cannot bunch up and chafe through against each other.
- Cut **one wire, cap that wire, then move to the next.** Never leave two bare ends loose at once.
- Cap with an **insulated closed-end connector** (a crimp cap) on each conductor, then
  **adhesive-lined heat shrink** over the crimp and onto the insulation. Second-best is adhesive-lined
  shrink alone, folded over the bare end and sealed.
- **Not acceptable:** electrical tape by itself (it unwinds at dash temperatures and the adhesive
  runs), or wire nuts (they back off with vibration).
- Sleeve the capped bundle in split loom and **zip-tie it to a dash brace**, up and away from the
  pedal box, the steering column, and any sharp bracket edge. Nothing should dangle where a foot or a
  knee can reach it.

## Mark

Sharpie on wire insulation is unreadable within a year in a hot dash. Use **printed heat-shrink
labels**, or a wrap-around vinyl label with clear shrink over top. Label with the function, not the
colour: `C-HOT 12V CONST`, `SW 12V ACC`, `ILL`, `GND`, `SPK-LF+`.

Record the final map in this file when the job is done, and tape a copy inside the glovebox lid.

**Fuse:** once everything is capped, pulling the radio fuse removes the last bit of risk on that
circuit — but check what else dies when you pull it. On GM of this era the radio's constant feed is
commonly shared with the clock and the lighter, and you may want those.

## Pulling the radio

1. Battery negative still disconnected.
2. Remove the dash bezel around the cluster and radio — Phillips screws around the perimeter, with a
   couple hidden under the lower lip.
3. Pull the control knobs off the shafts, then remove the **shaft nuts** and trim washers behind them.
4. Remove the **rear support bracket** screw — it is at the right rear of the radio, tying it to the
   lower dash. This is the one people miss; the radio will not slide out with it in place.
5. Slide the radio back and drop it out. Unplug the antenna lead at the radio body.

## Covering the hole

| Option | Notes |
|---|---|
| Reproduction ABS radio block-off plate | Paintable, made for this dash. Dixie Restoration Depot, GBodyParts, Chicago Muscle Car Parts. Cheapest tidy answer. |
| Original radio-delete plate | Factory-fitted on radio-delete cars; findable used. Correct look if originality matters at resale. |
| DIY panel | 1/8" ABS or brushed aluminium cut to the opening, edges dressed, held by the existing bezel screws or 3M VHB. |
| DIN storage pocket | The opening is the right size for a cubby — useful, and it fills the hole. |

The dash speaker grille stays as-is; nothing to do there. If you also pull the antenna, the fender
needs a plug — or leave the mast in place, it reads as stock.

## Getting the factory diagram

The map above is GM's standard G-body colour code, corroborated across several 1978–88 A/G-body
sources. For the actual factory sheet for this car:

- **1981 GMC Caballero / Chevrolet El Camino factory service manual**, chassis wiring section — the
  authoritative source, reprints are cheap.
- [classiccarwiring.com](https://classiccarwiring.com/collections/chevy) — laminated colour wiring
  diagrams, sold by year and model including Caballero.
- [GBodyForum](https://gbodyforum.com/) and [El Camino Central](https://www.elcaminocentral.com/)
  both host scanned diagram threads for 1978–88.

Verify against the test procedure regardless of which diagram you end up with. Forty-five years of
previous owners outrank any factory sheet.
