# Welding safety — fume, ventilation, PPE

Garage welding, door open. **The open door alone is not adequate ventilation.** A respirator and
a correctly positioned fan are both required.

Gas MIG produces *less* fume than flux core, so the gas option helps here — but "less" is not
"none," and car work adds hazards that plain steel fabrication does not have.

## Read this first: chlorinated brake cleaner

**Never use chlorinated brake cleaner anywhere near where welding will happen.**

Many traditional brake cleaners contain tetrachloroethylene or trichloroethylene. UV and heat
from a welding arc break these down into **phosgene** — a WWI chemical weapon.

- Potentially fatal around **4 ppm**
- Symptoms can be **delayed 6–48 hours**
- **There is no antidote**

This is directly relevant to this project: `known-issues.md` lists active corrosion at the
master cylinder brake line outlets and at least one brake line needing replacement, so brake
cleaner will be in that garage.

**Controls:**
- Check the can for "chlorinated" — many brands sell **non-chlorinated** versions
- Use acetone or a dedicated welding prep degreaser instead
- Do not store or use chlorinated solvents in the weld area at all, even hours earlier

## Is an open garage door enough? No.

Reference standard for natural ventilation being adequate: **10,000 ft³ per welder, 16 ft
ceilings, unobstructed cross-ventilation.** A typical two-car garage is 4,000–6,000 ft³ with
8–9 ft ceilings — roughly half the volume and half the ceiling height. Where that standard is
not met, guidance calls for mechanical ventilation moving about **2,000 CFM**.

These are workplace numbers and do not legally bind a private garage, but they are the yardstick
for whether the air is actually clearing. It is not.

## What is in the fume

| Hazard | Source | Concern |
|---|---|---|
| **Manganese** | All mild steel and wire | Neurotoxin. Chronic exposure linked to manganism, a Parkinson's-like condition. ACGIH tightened the TLV in 2013 to **0.02 mg/m³ respirable** |
| **Ozone + NO₂** | Arc UV reacting with air | **Argon-shielded MIG produces more ozone than flux core.** The gas-specific hazard being added |
| **Iron oxide** | Base metal | The visible grey smoke. Least concerning |

## Car-specific hazards

**Zinc / galvanizing.** Much auto body steel is galvanized or carries zinc-rich primer. Welding
it vaporizes zinc oxide → **metal fume fever**: fever, chills, cough, chest tightness, metallic
taste. Onset **3–10 hours** after exposure, usually resolving in 1–2 days. Easily mistaken for flu.

**Old undercoating and seam sealer.** A 45-year-old G-body will have both. Burning them produces
genuinely foul smoke.

**Possible lead.** Cars of this era used lead body solder in seams, and old paint may contain
lead. Do not grind or weld through unknown old filler without protection.

**The single best control for all three: grind the coating off to bright metal before striking
the arc.** Removing zinc, paint, primer and undercoat at the source eliminates most of the bad
fume before it exists — and it is required for weld quality anyway. Same action, two benefits.

## Ventilation — pull, don't blow

The trap: **a fan blowing on the weld destroys the shielding gas and causes porosity.** Even a
mild breeze disrupts the gas cloud. A box fan cannot simply be pointed at the work or the welder.

- Box fan in the doorway **facing out**, drawing air out of the garage. Work in the
  negative-pressure zone behind it so fume drifts away without wind crossing the puddle
- **Never point a fan at the weld or at yourself while welding**
- Open a second door or window opposite for makeup air — otherwise the fan spins against a
  sealed room and moves nothing
- Position so the plume rises away from the face. **Keep your head out of the smoke column** —
  free, and the highest-value habit available
- Later upgrade: a small fume extractor arm parked near the work

### An inline duct fan as a fume extractor

Assessed 2026-10-05: the **AC Infinity Cloudline S6** (6" inline fan, EC motor, 10-speed
controller, IP44, about **$99 USD** from the maker; on amazon.ca as `B07FPFVZTZ`, CAD price not
read). Grow-room fans like this are a common hobby-garage fume extractor: a hood on a length of
6" duct parked next to the weld, the other end out a window.

**IP44 is enough — it is not the number that matters.** The first digit is solids: `4` keeps out
objects over 1 mm. The second is water: `4` is splashing. Welding fume is sub-micron, so neither
IP44 nor IP65 describes it — and fume at hobby duty cycles does not kill a fan. It leaves a film on
the impeller that is cleaned off (the S6 motor box unclips for that). Searching for IP65 buys
nothing here.

What actually hurts a fan on welding duty, in order:

1. **Sparks and spatter pulled into the duct.** Keep the hood beside or above the work, not in
   line with the spatter, and run **the first few feet in metal duct** — not foil-and-plastic flex
2. **Grinding.** Hot abrasive sparks plus conductive steel dust through an open-motor fan, into a
   duct coated in fume residue. **Turn the hood away or off while grinding**; grinding dust is the
   respirator's job
3. **Heat.** Rated to **140°F (60°C)** — fine with room air mixing in, not with the hood on the arc

**Does 402–425 CFM capture welding fume? Only up close.** That is free-air rating; with a hood,
duct and a window adapter, expect roughly **250–300 CFM** real (inferred, not measured). The
industrial-hygiene capture formula for a plain duct opening is *Q = V(10X² + A)* with a capture
velocity *V* of about 100 ft/min for welding:

| Hood to arc | 6" hood (S6) needs | 8" hood (S8) needs |
|---|---|---|
| **6 in** | **~270 CFM** — S6 just manages | ~285 CFM |
| **9 in** | ~580 CFM — **S6 falls short** | **~600 CFM — S8 manages** |
| 12 in | ~1,020 CFM | ~1,035 CFM — neither |

A flange around the hood mouth cuts these by about a quarter, so **put a flat flange on the hood**.

So:

- **The S6 works as a source-capture hood if its mouth sits within about 6 in of the arc** and
  is moved as the weld moves. On stitch-welded patches that is a lot of repositioning
- **The Cloudline S8** (8", **807 CFM**, also IP44) buys the 9 in of slack that makes it usable
  in practice. **If buying one of these for welding, buy the S8**
- **Neither is room ventilation.** Against the ~2,000 CFM general guidance above, 300 CFM is a
  sixth; it does not clear a garage. **The doorway box fan facing out, makeup air and the P100
  stay required** ([issue #24](../../../../issues/24))
- **Exhaust outside, never into the garage.** It has no filter; it moves fume, it does not clean it
- **Watch for porosity.** Pulling hard near a gas MIG arc can strip the shielding gas — the same
  failure as the fan-on-the-weld trap above. Run the hood beside or above, not across, the puddle,
  turn the speed down if porosity shows up, and test on scrap before the car

## Respirator

**P100 half-mask.** 3M 2097 filters are the common standard. N95 is entry-level for clean mild
steel; P100 is appropriate given the coatings on a car.

Three things that catch people out:

1. **The welding helmet provides zero respiratory protection.** It is a face shield, not a
   filter. The mask goes on *under* the hood
2. **P100 filters particles, not gases.** It does nothing for ozone or NO₂. Those require
   ventilation, not filtration — which is why the fan is not optional even with a good mask
3. **Fit is everything, and facial hair breaks the seal.** A beard makes a half-mask
   substantially less effective

A PAPR (powered helmet with filtered air) solves fume, fit and comfort together, but that is a
$500+ later purchase.

## Two more

**Argon is heavier than air** and displaces oxygen. A non-issue in an open garage, but do not
run gas in a closed space, and note that it pools in low spots — relevant when working under
the car or in a pit.

**Fire.** This is welding on a vehicle with fuel lines, a tank, and 45 years of undercoating.
Extinguisher within arm's reach, welding blanket over anything that cannot be moved, and check
where sparks are landing *before* striking — hot slag travels further than expected.

## Checklist

1. Non-chlorinated cleaner only; chlorinated solvents out of the garage
2. Grind to bright metal before every weld
3. Box fan in the doorway facing **out**, second opening for cross-flow
4. P100 half-mask under the helmet
5. Head out of the plume
6. Extinguisher and welding blanket in reach

Roughly $60 of respirator and fan on top of the equipment budget. The items it addresses are
the cumulative and irreversible ones.

## Sources

- https://hackaday.com/2025/12/17/the-lethal-danger-of-combining-welding-and-brake-cleaner/
- https://www.isystemsweb.com/phosgene-gas/
- https://welders-supply.com/welding-applications/home-diy/welding-shop-ventilation-requirements/
- https://safetyregulatory.com/guides/welding-fume-osha-requirements/
- https://pksafety.com/blogs/pk-safety-blog/how-can-you-protect-yourself-from-welding-fumes
- https://www.robovent.com/learn/blog/metal-fume-fever-causes-and-prevention/
- https://pubmed.ncbi.nlm.nih.gov/25348190/
- https://www.bernardtregaskiss.com/solving-common-causes-of-welding-porosity/
- https://acinfinity.com/hydroponics-growers/cloudline-pro-s6-quiet-inline-duct-fan-system-with-speed-controller-6-inch/
- https://acinfinity.com/cloudline-s8-quiet-inline-fan-8-with-speed-controller/
- https://www.weldingweb.com/threads/welding-fume-extractor-project-for-small-garage-hobbyist-workshop.724789/
- https://www.garagejournal.com/forum/threads/fan-for-extracting-fumes.407427/
