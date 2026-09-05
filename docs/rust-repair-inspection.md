# Rust repair and welding — what the SAAQ inspection actually tests

Researched September 2026. Applies to the rust items in [`known-issues.md`](known-issues.md).

**Sourcing caveat:** the SAAQ *Guide de vérification mécanique* is the authority, and it could not
be opened during this research — saaq.gouv.qc.ca is blocked to automated clients (already noted in
[`reference-links.md`](reference-links.md); it loads fine in a browser). The criteria below come
from search extracts of that guide, not from reading it. **Read the real thing before planning the
repairs:**
https://saaq.gouv.qc.ca/blob/saaq/documents/publications/guide-verification-mecanique.pdf

## What the guide rejects

| Criterion | Effect |
|---|---|
| A longeron (frame rail) **broken, cracked, deformed, or perforated by rust** | Rejection |
| A longeron carrying **a repair or modification that weakens the structure** | Rejection |
| Vertical crack ≥ **37 mm** in the longeron web, or ≥ **25 mm** in the lower flange | Rejection |
| Distortion from corrosion of **≥ 10 mm** | Minor defect |
| Floor cracked, warped or perforated | Noted defect |

**Read that second row twice.** A bad repair is itself a listed rejection criterion. Patching
badly is not a neutral gamble that might squeak through — it can convert something the inspector
would have written up as a minor defect into an outright fail, and it is the one failure mode that
is entirely self-inflicted.

## Structural vs cosmetic — and where this car sits

The line that matters is whether the rust is in a **structural area**: rockers, pillars, frame
rails, reinforcements, suspension attachment points, and **seat belt anchorages**. Inspectors work
it by cleaning back the scale and judging how much solid metal is left underneath.

Mapping that onto the known issues:

| Item | Structural? | Reading |
|---|---|---|
| **Rocker panel seam, driver's side** — flange delaminating, material gone in one section | **Yes — rockers are on the structural list** | The inspection-critical rust item on this car. The screwdriver test is still outstanding and should happen before anything is booked |
| **Rear seat belt anchor** — bright bolt, not fully seated, anchor loose | **Yes — anchorages are structural** | Already flagged safety-critical. Corrosion or weak metal *around* an anchorage fails, not just the bolt |
| **Smuggler's box floor** — water-trail staining, not yet photographed | Floor perforation is a noted defect; **structural if it reaches the anchorage** | Priority to photograph. Its proximity to the rear belt anchor is the concern |
| **Rear quarter panel** — confirmed through-hole | **No — outer body panel** | Should be fixed, but not the thing that fails the inspection |
| Frame rails, front and rear | Sound — factory formed holes, already corrected | No action |

The useful conclusion: the dramatic-looking quarter panel hole is the *least* inspection-relevant
rust on the car, and the unglamorous rocker seam is the one that decides the outcome.

## What the trade says about repair method

Consistent across restoration and inspection sources:

- **Filler, fibreglass, or filler over mesh is a cosmetic finish, never a structural repair.**
  Repair allowances for floor perforation specifically *exclude* structural areas such as rockers.
  A shop that certified a cosmetic patch over structural rot would be risking its licence, which is
  why they decline to.
- **Butt weld, do not lap weld.** A lap joint is easier, but it does not seal — it traps moisture
  behind the overlap and rusts again from the back, so the repair becomes the next problem. Cut the
  rot out and butt a patch into sound metal.
- **Cut back to clean, solid metal**, not to the edge of the visible hole. The rust always runs
  further than it looks.
- **Weld quality is where inspections and repairs actually fail.** Porosity from a draft killing the
  gas shielding, and contamination — even a thin film of primer causes inclusions. Bare, clean metal
  both sides, and weld out of the wind.
- **Treat the backside.** Grind the welds, then protect *inside* the closed section — weld-through
  primer at the joint, then cavity wax down the rocker. An untreated back face is what kills patch
  repairs a few winters later, and on this car that cavity is already wet.
- **Seam seal** the finished joint to keep water back out.

## Doing it in the right order

1. **Screwdriver-test the rocker seam** and photograph the smuggler's box floor. Until those two are
   settled, the scope of this job is unknown and no useful quote exists.
2. **Fix the structural rust before booking the mechanical inspection**, not after. A rejection
   costs a re-inspection and puts the vehicle in the system with a recorded failure.
3. **Keep every invoice.** The SAAQ re-inspection after repairs wants documentation proving the work
   was done — already noted in [`log/README.md`](../log/README.md) — and it is also what makes the
   repair worth something at resale rather than being an unverifiable claim.
4. **Consider a paid pre-inspection** at a mandataire before the official one, so the list of
   defects arrives as a work order rather than as a failure.

**ATS Auto Body** (Coteau-du-Lac, portfolio is American classics) and **CCR Technologie** are the
rust shops already listed in [`reference-links.md`](reference-links.md).

## On the shortcut

Concealing structural rot rather than repairing it does not survive contact with this particular
project. Three reasons specific to this car, before any question of whether it is a good idea:

- The rocker is the structural item, and a filled rocker is what an inspector cleaning back scale is
  specifically looking for.
- A weakening repair is its own rejection criterion, so the attempt can produce the failure.
- The re-inspection wants invoices, and the whole value of this repo's paper trail — for the SAAQ
  and for the eventual buyer — is that the work is real and documented.

The rocker also happens to sit directly under the driver, alongside a seat belt anchorage that is
already loose.
