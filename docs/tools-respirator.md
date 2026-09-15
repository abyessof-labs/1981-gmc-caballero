# Respirator selection — grinding rust and paint

Which respirator to buy for cutting, grinding and wire-wheeling the rust in
[`known-issues.md`](known-issues.md): the rear quarter perforation, the rocker seam, the eaten
lower panel edge, and dressing the patch welds afterward.

This covers the **grinding** half of the work. Welding fume, ventilation and the brake-cleaner
hazard are in [`welding/safety.md`](welding/safety.md), and the two jobs need **two different
masks** — see [Why this is a second mask](#why-this-is-a-second-mask-not-a-replacement) below.

**Sourcing caveat:** researched September 2026. The session's network egress proxy blocked
`3m.com`, `3mcanada.ca`, `grainger.ca`, `ccohs.ca`, `amazon.ca`, `homedepot.ca`, `princessauto.com`
and every forum consulted — **every price below comes from a search-result snippet, not a live
product page.** Model numbers and technical claims were cross-checked across multiple independent
sources and are solid; **prices and Canadian stock are unconfirmed** and marked USD where the
source was American. Confirm the price, the size and the filter fitment on the SKU page or at the
counter before buying.

---

## Recommendation

**3M 6800 full facepiece (medium) + 3M 7093 P100 filters + 3M 6885 peel-off lens covers.**

Four reasons it is the right buy for this car specifically:

1. **P100 is not optional on a 1981 GM body, and a full facepiece delivers it with the eye
   protection built in.** See [Why P100 and not N95](#why-p100-and-not-n95).
2. **It shares the bayonet cartridge system with the 6000-series half mask** you also need for
   welding. One filter inventory covers both masks — buy the half mask in the same family and the
   7093s swap between them.
3. **The lens is polycarbonate and impact-rated**, so it is the face shield as well as the mask.
   Grinding is the one job where "respirator" and "eye protection" can genuinely be one purchase.
4. **Cheapest true APF 50 facepiece with real Canadian availability.** Sizes are `6700` small,
   `6800` medium, `6900` large — same mask, three shells. **Medium fits most adult faces; confirm
   before ordering**, because the size is molded in, not adjustable.

**Buy the 6885 lens covers in the same order.** They are the difference between a consumable and a
$100 mistake — see [Grinding sparks eat the lens](#grinding-sparks-eat-the-lens).

**Upgrade if you will wear it for hours at a stretch: 3M Ultimate FX FF-402** (medium; `FF-401`
small, `FF-403` large). Silicone face seal instead of thermoplastic elastomer, a roughly 85%
panoramic lens, noticeably lighter. Same NIOSH rating and same protection — you are buying comfort
and peripheral vision, at something like three to five times the price. On a driveway project
measured in weekends rather than shifts, **the 6800 is the honest answer** and the FX is a want.

---

## Why P100 and not N95

Rust and old automotive paint on a car of this vintage are not ordinary shop dust.

| Filter class | Efficiency | Oil | Verdict here |
|---|---|---|---|
| N95 | 95% @ 0.3 µm | **Not oil-resistant** | Entry-level. Inadequate for this work |
| P100 | **≥99.97% @ 0.3 µm** | **Oil-proof** | **The class to buy** |

The reason is lead. **Automotive paint was specifically exempted from the 1978 US lead-paint ban
and has never been covered by it.** XRF testing published on a 1980s El Camino — the Chevrolet
badge-twin of this Caballero, same G-body platform, same paint suppliers — returned readings around
**9,000 ppm lead** in the paint. That is one person's instrument on one car and should be treated as
a single data point, not a spec, but it points the same way as the exemption does: **assume the
paint on this car is leaded until proven otherwise.** Cars of this era also used lead body solder in
roof and quarter seams, which is already flagged in [`welding/safety.md`](welding/safety.md).

NIOSH's guidance for lead exposure up to 0.5 mg/m³ is any air-purifying respirator with an N100,
R100 or **P100** filter. Both 3M and MSA specifically call for stepping up to P100 for lead paint
work, because oil-based paint aerosols degrade N-series media. Grinding is the worst case: it takes
that paint and makes it respirable.

Add to that the rust itself, the 45 years of undercoating and seam sealer underneath, and whatever
filler is hiding in the quarter panel. **P100, every time, for pennies more than N95.**

### Which P100 filter

All three are bayonet-mount and fit both the 6000-series full facepiece and the 6000-series half
mask.

| Filter | What it adds | Use it when |
|---|---|---|
| **7093** | **Hard plastic case that resists hot spatter** | **The default here.** Grinding throws sparks straight at the filters |
| 2091 | Nothing — soft-bodied, cheapest, lowest profile | Fine for clean sanding; the soft media is exposed to sparks |
| 2097 | P100 **plus nuisance-level** organic vapour relief | Light solvent smell — rust converter, cleaners |

"Nuisance level" on the 2097 means **below the exposure limit**. It is odour relief, not vapour
protection.

**When you spray anything — rust converter, etch primer, epoxy primer, seam sealer — a P100 filter
is the wrong device entirely.** Particulate filters do nothing for solvent vapour. That job needs an
organic-vapour cartridge or an OV/P100 combination (`60921` / `60926` in the same bayonet family).
Budget for a pair when the [`underbody-coating.md`](underbody-coating.md) work starts.

---

## Why this is a second mask, not a replacement

This is the finding that changes the shopping list.

**A full facepiece respirator does not fit under a welding helmet.** The hood has nowhere to sit,
and the facepiece has no arc protection of its own — polycarbonate is not a welding lens. This is
consistently described in welding supply guidance as the reason full facepieces are rarely used for
welding despite being excellent for heavy grinding.

So the rust job needs both:

| Job | Mask | Why |
|---|---|---|
| **Grinding, cutting, wire-wheeling, sanding** | **Full facepiece P100** (6800) | Filtration and impact-rated eye protection in one piece |
| **Welding** | **P100 half mask, under the hood** | Only a half mask clears the helmet. Slim/low-profile versions exist specifically for this |

The half-mask recommendation already in [`welding/safety.md`](welding/safety.md) stands unchanged.
Buy both, in the same 6000-series bayonet family, and the filters are interchangeable.

**Neither mask does anything about ozone or NO₂ from the arc.** Those are gases; P100 is a particle
filter. The box fan in `welding/safety.md` is not made optional by any mask on this page.

---

## Grinding sparks eat the lens

A polycarbonate lens exposed to a cut-off wheel frosts over with pitting, and a pitted lens is not
repairable. Two cheap defences, both worth buying up front:

1. **Peel-off lens covers.** `6885` for the 6000-series full facepiece (`FF-400-15`, or the
   seven-layer stacked `FF-400-18`, for the Ultimate FX). They adhere to the lens and peel away when
   they are hazed. A ten-pack is roughly the price of a coffee run; the lens is not.
2. **A cheap Z87+ face shield worn over the mask** for heavy cut-off work. Standard practice, and it
   takes the spark stream that would otherwise hit both the lens and the filters. **Check clearance
   first** — the cartridges stand proud of the face and can foul a shield's visor.

A face shield is always *secondary* protection in the safety standards — it is worn over eye
protection, never instead of it. On a full facepiece, the mask is the eye protection, and the shield
is the sacrificial layer.

---

## Fit: the part that decides whether any of this works

**A tight-fitting respirator that leaks provides no protection.** It is not degraded protection, it
is contaminated air taking the path of least resistance around the filter.

- **Clean-shaven along the seal.** CSA Z94.4-18 (R2023) prohibits fit-testing anyone with hair
  growth between skin and sealing surface — beard, moustache crossing the seal, sideburns, even
  stubble — and recommends shaving **12 to 24 hours before** wearing the respirator. 3M's own policy
  refuses to certify a fit test under any facial hair that crosses the seal.
- **Seal-check every time you put it on.** Palm over the cartridges, inhale, hold: the facepiece
  should collapse against your face and stay there. Takes five seconds.
- **This is a private garage, so no fit-test is legally required** — the standard is cited here
  because the physics does not care who is paying. Nothing about a home shop makes a leaking mask
  work better.
- **Store it sealed** between sessions, in a zip bag or a lidded bin. Filters keep loading from
  ambient shop dust if left hanging on a nail, and the seal takes a set if the mask is stored
  squashed.

**If the beard stays, the entire tight-fitting category is out** — 6800, FF-402, every half mask,
all of it. The only real answer then is a **loose-fitting PAPR**, which seals with airflow rather
than against skin. See below.

---

## Options compared

APF 50 = Assigned Protection Factor 50, the NIOSH rating every full facepiece here carries. All of
these filter identically when they fit. **You are choosing comfort, lens, and price — not
protection.**

| Mask | Seal material | Notes | Price (unverified) |
|---|---|---|---|
| **3M 6800** (M) | Silicone / TPE | **The recommendation.** 6700 S / 6800 M / 6900 L. Bayonet, shares filters with the 6000 half mask | See price note below |
| 3M Ultimate FX FF-402 (M) | **Silicone** | ~85% panoramic lens, lighter, longer service life. FF-401 S / FF-403 L | ~$330 CAD on sale, ~$688 CAD list at one Canadian reseller — **both figures doubtful** |
| Honeywell North RU6500 | **Silicone** | Low-profile harness, better chemical resistance than the 5400 | Unpriced |
| Honeywell North 5400 | TPE | Honeywell's budget full facepiece; direct 6800 competitor | Unpriced |
| MSA Advantage 3200 | — | APF 50 well below MSA's Ultra Elite flagship | Unpriced |
| GVS Elipse Integra P100 | — | **Not a full facepiece** — a half mask with integrated goggles. Very low profile, very light, and it *does* fit under a welding hood. Different protection class; do not substitute it for an APF 50 mask on lead dust | Unpriced |
| 3M "Paint Project" full facepiece | — | Consumer 6000-series variant stocked by Princess Auto and Canadian Tire, ships with **OV/P95** — **P95, not P100.** Buy P100 filters separately if you take this route | Unpriced |

**Price note.** A search snippet quotes **CAD $58.66** for the 6800 on grainger.ca. That is
implausibly low against US street pricing for the same facepiece and is more likely an account-tier
or partial-listing artifact — Grainger's own page says the displayed price depends on sign-in.
**Treat it as a reason to check Grainger first, not as the price.** Same for the FF-402 figures
above. Nothing on this page has been confirmed against a live cart.

### PAPR — the answer to a beard, and to comfort

**3M Versaflo TR-300N+**, NIOSH-approved for grinding, is the powered option: a belt-mounted blower
pushes filtered air into a hood or helmet. It solves fume, fit, beard and heat in one purchase,
runs 8–12 hours on a charge, and needs no fit test in its loose-fitting configurations.

It also costs multiples of everything else on this page, and users report the weight pulling on the
neck when looking down — which is most of the time under a quarter panel.

**Not recommended for this project.** Noted because it is the only correct answer if the beard is
non-negotiable, and because the welding-side equivalent (a PAPR welding helmet) would cover both
jobs at once if the budget ever stretches that far.

---

## Canadian sourcing

Montréal-area, walk-in versus order-in. **All availability unconfirmed** — the retailer sites were
proxy-blocked.

| Vendor | Walk-in? | Carries |
|---|---|---|
| [Grainger Canada](https://www.grainger.ca/en/product/FULL-FACE-RESPIRATOR-M-GRAY/p/MMM6800) | Branch counters + order | 3M 6800. Industrial pricing tiers; sign-in changes the price |
| [Princess Auto](https://www.princessauto.com/en/product/PA0009380379) | **Yes** | 3M full-face "Paint Project" respirator and cartridge kits — **P95, check before buying** |
| [Canadian Tire](https://www.canadiantire.ca/en/pdp/3m-performance-mold-lead-paint-removal-respirator-p100-0550288p.html) | **Yes** | 3M Mold & Lead Paint Removal P100 (half mask) and Paint Project OV/P95 |
| [Home Depot Canada](https://www.homedepot.ca/en/home/categories/tools/apparel-and-safety-gear/safety-and-protective-gear/face-protection/respirators.html) | **Yes** | Respirator range; 6800 listed on the US site, Canadian stock unverified |
| [Canada Welding Supply](https://canadaweldingsupply.com/products/3m-replaceable-face-shield-cover-for-6000-series-respirators-6885) | Order-in | 6885 lens covers — useful, since accessories are the hard part to find locally |
| [United Canada](https://unitedcanadainc.com/products/3m%E2%84%A2-lens-cover-6885P10-C-for-full-face-respirator-6800-6900-clear-10-per-pack) | Order-in | 6885P10-C lens covers, 10-pack, quoted ~$27.99 CAD |
| [3M Canada](https://www.3mcanada.ca/3M/en_CA/p/c/ppe/respiratory-protection/reusable-respirators/full-face/) | Reference | Model and size confirmation — not a storefront |

**Buy the facepiece somewhere with a returns counter.** Size is molded, not adjustable, and a 6800
that does not seal on your face is worth nothing regardless of what it cost.

---

## Shopping list

| Item | Qty | Purpose |
|---|---|---|
| **3M 6800** full facepiece, size checked | 1 | Grinding, cutting, sanding, wire wheel |
| **3M 7093** P100 filters | 2 pairs | Hard case survives spark impact |
| **3M 6885** lens covers | 1 pack | Sacrificial layer over the lens |
| **3M 6000-series half mask**, low profile | 1 | Welding, under the hood — see `welding/safety.md` |
| Z87+ face shield | 1 | Optional, over the mask for heavy cut-off work |
| OV/P100 cartridges (`60921`/`60926`) | 1 pair | **Later** — when primer or rust converter gets sprayed |

Rough order of magnitude for the first four lines: **$150–300 CAD**, unverified. That replaces the
"$60 respirator + box fan" line in [`welding/README.md`](welding/README.md), which assumed a half
mask alone and did not account for lead.

---

## Decision state

| Question | State |
|---|---|
| Filter class | **Decided — P100.** Lead-paint risk makes N95 inadequate |
| Full facepiece for grinding | **Decided — yes.** Filtration plus impact-rated eye protection in one piece |
| Specific facepiece | **Leaning 3M 6800**, medium subject to a size check. FF-402 if comfort justifies the premium |
| Spatter-resistant filters | **Decided — 7093** over 2091 for grinding |
| Lens covers | **Decided — buy with the mask**, not after the lens is pitted |
| Separate half mask for welding | **Decided — required.** A full facepiece does not fit under a helmet |
| Face shield over the mask | Open — cheap insurance, but check cartridge clearance first |
| Facial hair | **Open — and it decides everything.** Clean-shaven at the seal, or the whole tight-fitting category is out |
| PAPR | **Decided — no**, unless the beard stays or a PAPR welding helmet is bought to cover both jobs |
| OV cartridges for spraying | Deferred to the coating stage |
| Size (6700 / 6800 / 6900) | **Open — confirm before ordering.** Medium fits most adults |
| Prices | **Open — every figure here is unverified.** Confirm at the counter |

---

## Sources

- [3M — reusable respirator cartridge and filter selection guide (PDF)](https://multimedia.3m.com/mws/media/1687482O/select-the-right-cartridges-and-filters-reusable-respirators-english.pdf)
- [3M — particulate filter 7093 P100 technical specifications (PDF)](https://multimedia.3m.com/mws/media/149967O/3m-particulate-filter-7093-p100-technical-specifications.pdf)
- [3M — particulate filter 2097 P100 with nuisance-level organic vapour relief (PDF)](https://multimedia.3m.com/mws/media/5188O/3m-particulate-filter-2097-p100.pdf)
- [3M — CSA Z94.4-18 review of updates and changes (PDF)](https://multimedia.3m.com/mws/media/1687483O/csa-z94-4-18-reusable-respirators-review-of-updates-and-changes-english.pdf)
- [3M — facial hair and respirator fit testing policy (PDF)](https://multimedia.3m.com/mws/media/1682579O/facial-hair-and-respirator-fit-testing-policy-technical-bulletin.pdf)
- [3M Canada — facial hair and fit testing policy](https://safetytownsquare.3mcanada.ca/pandemic-and-emergency-preparedness/3m-canada-facial-hair-and-respirator-fit-testing-policy)
- [3M — stacked lens cover FF-400-18](https://www.3m.com/3M/en_US/p/d/v000436240/) · [faceshield cover 6885](https://www.3m.com/3M/en_US/p/d/v000587707/)
- [CDC / NIOSH Pocket Guide — lead](https://www.cdc.gov/niosh/npg/npgd0368.html)
- [PK Safety — what P100 means](https://pksafety.com/blog/what-does-p100-mean) · [respirator filters for sanding dust](https://pksafety.com/blogs/pk-safety-blog/best-mask-for-sanding) · [automotive paint cartridge guide](https://pksafety.com/blogs/pk-safety-blog/which-spray-paint-mask-filters-are-best-for-automotive-work-and-spray-painting)
- [Tamara Rubin — XRF testing, 1980s El Camino paint at ~9,000 ppm lead](https://tamararubin.com/2018/01/paint-on-1980s-el-camino-car-9000-ppm-lead-when-tested-with-an-xrf-instrument-this-is-mostly-an-issue-with-metal-cars)
- [Benchmark Abrasives — respiratory protection for grinding and welding](https://benchmarkabrasives.com/blogs/safety-and-cleanliness/respiratory-protection-for-grinding-and-welding)
- [Weldready — slim-profile half mask for use under a welding helmet](https://weld-ready.com/products/3m-slim-profile-half-face-reusable-respirator-for-under-welding-helmet)
- [Empire Abrasives — face shield vs safety glasses for grinding](https://www.empireabrasives.com/blog/face-shield-vs-safety-glasses-for-grinding-why-you-need-both/)
- [Midland Tool — ANSI Z87.1 face shield markings](https://www.midlandtool.com/blog/21395/face-shields-ansi-z87-1-markings-and-how-to-choose)
- [3M Versaflo TR-300+ series PAPR](https://www.3m.com/3M/en_US/p/d/b5005486003/)
- [GVS — Elipse Integra P100 NIOSH respirator](https://www.gvs.com/en/catalog/elipse-integra-p100-niosh-respirator)
- [Hot Rod Forum — respiratory protection for grinding paint and rust](https://hotrodders.com/forum/respiratory-protection-grinding-paint-rust-138151.html)
