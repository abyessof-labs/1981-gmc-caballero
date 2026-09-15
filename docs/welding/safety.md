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
