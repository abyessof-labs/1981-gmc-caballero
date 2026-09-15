# Welding glossary

Jargon decoded, weighted toward MIG and body work.

## Metal transfer modes

How molten wire crosses the arc to the puddle. Four modes, really a heat scale.

| Mode | What happens | Heat | Relevance here |
|---|---|---|---|
| **Short circuit** ("short arc") | Wire touches the puddle, shorts, burns back, repeats 100+ ×/sec. Sounds like frying bacon | Lowest | **The mode for this project.** Thin sheet, all positions |
| **Globular** | Large irregular droplets fall across. Heavy spatter | Medium | Avoided. What CO₂-heavy gas gives mid-range |
| **Spray** | Fine mist of droplets, no shorting. Very hot | High | Flat position, thick steel. Would destroy a quarter panel |
| **Pulsed** | Engineered — spray quality at short-circuit heat | Low-med | Requires gas |

### Pulse MIG (GMAW-P)

Alternates rapidly between a **peak** current high enough to detach exactly one droplet, and a
**background** current low enough to keep the arc lit while the puddle cools — hundreds of times
per second. Result: spray-transfer quality at much lower *average* heat input. Less spatter,
less distortion, less burn-through on thin metal.

**Requires gas**, specifically an argon-rich mix. Does not work with flux core or CO₂-heavy
mixes.

**Double pulse / dual pulse** layers a second slow modulation (~1–5 Hz) on top, producing the
stacked-dime ripple. Largely cosmetic; popular for aluminum.

## The dials

| Term | Meaning |
|---|---|
| **Voltage** | Arc length and bead width. Too low = ropey stacked bead; too high = wide, flat, spattery |
| **Wire Feed Speed (WFS)** | How fast wire feeds, in IPM. **On a MIG machine WFS *is* amperage** — more wire = more current |
| **Synergic** | Machine holds the correct voltage:WFS ratio. Set wire diameter + material thickness, it picks both |
| **Inductance / arc force / "arc control"** | Smooths the short-circuit transition. Higher = softer, flatter, less spatter. Lower = crisper, more penetration |
| **Burnback** | How long current runs after trigger release, so wire doesn't weld itself to the contact tip |
| **Pre-flow / post-flow** | Gas before and after the arc. Gas machines only |
| **2T / 4T** | 2T: hold trigger to weld. 4T: pull-release to start, pull-release to stop — finger not clamped on long beads |
| **Spot / stitch mode** | Machine auto-times each burst. Useful for body work |

## Polarity

- **DCEP** (electrode positive) = "reverse polarity" → gas MIG with solid wire
- **DCEN** (electrode negative) = "straight polarity" → **gasless flux core**

DCEP puts more heat into the work, DCEN more into the wire — which is why DCEN penetrates less,
an advantage on thin sheet.

## Process names

| Casual | Formal | Also called |
|---|---|---|
| MIG | GMAW | wire feed |
| Flux core | FCAW | FCAW-**S** = self-shielded/gasless; FCAW-**G** = gas-shielded |
| TIG | GTAW | HeliArc |
| Stick | SMAW | MMA, arc |

**MIG vs MAG:** MIG = *inert* gas (pure argon). MAG = *active* gas (anything with CO₂, so C25).
North Americans say MIG for both; Europeans say MAG.

## Machine spec sheet

| Term | Meaning |
|---|---|
| **Duty cycle** | % of a 10-minute window you can weld at a stated output. "20% @ 180 A" = 2 min welding, 8 min cooling. **Irrelevant at this project's amperage** — effectively 100% |
| **IGBT inverter** | Modern switching power supply. Light, efficient, precise, vs. old 200 lb transformer machines. Every current machine is one — not a differentiator |
| **OCV** (open circuit voltage) | Voltage present before striking. Higher = easier arc starts; matters for stick |
| **Dual voltage** | Runs on 120 V or 240 V |

## TIG terms

| Term | Meaning |
|---|---|
| **Lift start** | Touch tungsten down, lift to strike. Cheap; contaminates tungsten on bad starts |
| **HF start** | High frequency jumps the gap, no contact. What you want |
| **Scratch start** | Drag it like a match. Worst |
| **Foot pedal / amptrol** | Live amperage control while welding. Transforms TIG |
| **AC vs DC** | DC for steel/stainless. **AC required for aluminum** — no budget multi-process machine has it |
| **Balance / frequency** | AC-only settings controlling oxide cleaning vs penetration on aluminum |

## Consumables

| Term | Meaning |
|---|---|
| **Contact tip** | Transfers current to the wire. Sized to wire diameter. Buy spares |
| **Nozzle** | Outer cup shaping gas flow. Gas MIG only — flux core uses a bare/open nozzle |
| **Liner** | Sleeve the wire runs through inside the gun. Gets dirty, causes feed problems |
| **Drive rolls** | Feed the wire. **Flux core needs *knurled* rolls**; solid wire needs smooth V-groove. Smooth rolls on flux wire crush it and cause bird-nesting |
| **ER70S-6** | Solid MIG wire for steel |
| **E71T-GS** | Gasless flux core, single-pass — what this project would use |
| **E71T-11** | Gasless flux core, multi-pass |
| **Stickout / CTWD** | How far wire extends past the tip. Affects heat significantly. ~3/8" typical |

## Gas

| Term | Meaning |
|---|---|
| **C25 / 75-25** | 75% argon, 25% CO₂. Standard steel MIG mix |
| **100% argon** | TIG, and aluminum MIG |
| **CFH** | Cubic feet per hour. ~15–20 CFH typical for MIG |
| **Flowmeter vs regulator** | Flowmeter reads actual flow rate, regulator reads pressure. Flowmeter is the right tool |

## Defects

| Term | Meaning |
|---|---|
| **Porosity** | Gas bubbles trapped in the weld. From contamination, wrong gas, or wind |
| **Undercut** | Groove melted into the base metal alongside the bead, unfilled. Weakens the joint |
| **Burn-through** | You made a hole. The main enemy on this project |
| **Spatter** | Molten droplets thrown clear, stuck to everything |
| **Slag** | Glassy flux residue on flux-core welds. Must be chipped/ground off |
| **Cold lap / lack of fusion** | Bead sitting *on* the metal, not fused *into* it. **The dangerous one** — looks fine, holds nothing |
| **HAZ** (heat affected zone) | Metal near the weld that got hot enough to change properties without melting |
| **Warping / distortion** | Panel pulls and oil-cans from heat. Why you stitch |
| **Plug weld / rosette** | Drill a hole in the top panel, weld through it to the one beneath. How factory spot welds get replicated — needed on the rocker and quarter |

## Spec-sheet noise

Safe to ignore for this project: **maximum amperage** (~40 A needed), **duty cycle**, **"IGBT"**
as a selling point, **spool gun compatibility** (aluminum only), and — under the no-gas plan —
**pulse**.
