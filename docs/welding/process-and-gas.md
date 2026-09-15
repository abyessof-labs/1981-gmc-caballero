# Process and gas

The open question for this project: **gasless flux core, or gas-shielded MIG?**

## The short version

Gas MIG is the better process for body panels. Gasless flux core is a real minority practice
that works for people willing to accept more grinding, more burn-through, and imperfect
sealing. It is not a myth, and it is not easy.

| | Gasless flux core (FCAW-S) | Gas MIG (GMAW) |
|---|---|---|
| Thinnest wire | **0.030"** — hard floor | **0.023"** |
| Heat into thin sheet | Higher | Lower |
| Polarity | **DCEN** (electrode negative) | DCEP (electrode positive) |
| Slag | Yes — chip/grind every pass | None |
| Spatter | Heavy | Light |
| Wind tolerance | Good | Poor — needs shelter |
| Consumable cost | Wire only | Wire + gas + bottle |
| Fume volume | **Higher** | Lower |
| Watertight seams | Difficult | Achievable |

The 0.030" vs 0.023" wire floor is most of the heat difference, and it is a hard limit that
cannot be settled around with machine adjustments.

## What people report about gasless on body panels

**It works for some people.** Documented gasless flux core on 20-gauge floors through 24-gauge
quarter panels. One account describes doing many body panels on an old truck with a 90 A flux
core machine by turning heat and wire speed down. At least one write-up argues directly against
the common wisdom and reports success.

**The consistent complaints:**

- **Burn-through** even at minimum settings with the thinnest wire. The truck-panel account
  above reports "lots of problems with it trying to burn through" and having to be "really careful"
- **Slag chipping between every weld** — comes up in nearly every thread
- **Rusty metal is thinner than nominal gauge**, so burn-through is worse than 20 ga suggests.
  Directly relevant to the blistered quarter panel and the delaminating rocker seam

**The failure mode worth knowing about:**

> Slag can cover small holes so you *think* your weld is water tight but it isn't — then
> moisture gets under whatever you put over it.

Multiple accounts describe flux core body repairs as "never water tight," specifically calling
out **rockers** as the worst case because they are thin and rusty. This hides itself until it is
already under filler and paint.

### Mitigations if going ahead gasless

1. **Leak-test before covering anything.** Wire-brush all slag off, then check from behind with
   a light in a dark garage — pinholes glow through
2. **Seam sealer over every weld**, no exceptions
3. Consider splitting: flux core on the floor and structural patches where thickness is more
   forgiving, gas for the visible quarter panel

## Technique for thin sheet

Applies to either process; matters more with flux core.

1. **Check polarity first.** Gasless flux core runs **DCEN (electrode negative)**, the opposite
   of gas MIG. Most machines ship wired DCEP and the leads are physically swapped inside the
   wire compartment. Getting this backwards produces spattery, porous welds that beginners
   blame on the machine or the wire. Manual, first page, before anything else
2. **Thinnest wire available.** 0.030" (0.8 mm) gasless; 0.023" if running gas
3. **Stitch, never run a bead.** Single tacks with real cooling time between. Tack, jump to the
   far side of the patch, come back. If the panel is too hot to rest a hand on, stop
4. **Copper backing behind the joint.** A copper spoon or bar sinks heat and will not fuse to
   steel — the single most effective anti-burn-through trick
5. **Butt joints with tight fitment, not lap joints.** Lap joints trap flux residue in the seam
   where it cannot be cleaned out
6. **Grind all slag off between passes** and before any filler or paint
7. **Clean to bright metal** on both sides before striking

DCEN penetrates less than DCEP, which works in your favour on thin sheet — that is the property
being exploited.

## Shielding gas, when the time comes

**Two different bottles are required. They are not interchangeable.**

| Process | Gas |
|---|---|
| MIG on steel | **75/25 argon/CO₂** (C25) |
| TIG on steel | **100% argon** |
| MIG on aluminum | 100% argon |

The CO₂ in C25 contaminates the tungsten in TIG — this is a "does not work" situation, not a
"works worse" one. Do not buy one oversized C25 bottle expecting it to cover both processes.

Sequence: **C25 first** (the rust work), add pure argon when TIG actually starts.

### Buy vs rent

Consensus across Canadian forums favours **buying** the cylinder. Reported figures:

| Size | Purchase | Refill |
|---|---|---|
| 50 cf | ~$240 | ~$53 |
| 80 cf | ~$200 | ~$30 (75/25) |
| 78 cf ("Q") | ~$330 | ~$100 |

Rental runs roughly $35–85/year plus refills at lock-in pricing. Buying reportedly pays for
itself in **under two years**.

Skip 20 cf bottles — they empty fast enough to be genuinely annoying. **40–80 cf** is the home
shop sweet spot.

**Ask any Montreal supplier directly: "do you refill customer-owned cylinders, or is it
exchange-only?"** Many Canadian suppliers are exchange-only, which changes the buy-vs-rent
math. Worth one phone call before buying either the bottle or the machine.

### Pulse MIG

Worth noting because it appears on spec sheets as a premium feature: **pulse requires gas**,
specifically an argon-rich mix. It does not work with flux core or CO₂-heavy mixes. Under the
current no-gas plan, paying up for pulse buys a mode that cannot be entered. See
[`glossary.md`](glossary.md) for what it actually does.

## Sources

- https://www.garagejournal.com/forum/threads/mig-welding-auto-body-sheet-metal-with-flux-core-instead-of-gas.334746/
- https://www.garagejournal.com/forum/threads/flux-core-welder-for-automotive-repairs.397721/
- https://www.mig-welding.co.uk/forum/threads/mig-gasless-car-body.33283/
- https://www.thesamba.com/vw/forum/viewtopic.php?t=687092
- https://weldtalk.hobartwelders.com/forum/equipment-talk/mig-wire-welders/35719-flux-core-ok-for-auto-patch-panels
- https://www.allaboutthebuild.com/blog/2024/5/can-you-weld-car-panels-with-flux-core
- https://www.uti.edu/blog/welding/flux-cored-welding
- https://americanindustrialsupl.com/flux-core-welding-polarity-demystified/
- https://www.garagejournal.com/forum/threads/rent-or-buy-mig-gas-cylinder.274417/
- https://forum.canadianwoodworking.com/forum/tools/power-tools/metal-working/1093614-welding-gas-cylinder-rental-fees
