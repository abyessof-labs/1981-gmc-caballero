# Machine selection

Requirement as stated: **multi-process (MIG / TIG / stick)** with **synergic control** so the
machine sets voltage and wire speed from material thickness and wire diameter.

Prices are unverified search-snippet figures in USD. See the sourcing caveat in
[`README.md`](README.md).

## What "MIG + TIG + stick" actually buys at this price point

Every budget multi-process machine does all three, but the TIG is narrower than the badge
suggests:

- **Lift-start DC TIG** on machines under ~$500 — touch the tungsten down, lift to strike. No
  high-frequency start, no foot pedal.
- **No AC**, therefore **no aluminum TIG**, on any machine in this survey.
- **TIG torch usually not included.** Confirmed for the YesWelder MIG-205DS. Budget $60–120
  extra plus a pure-argon bottle.
- **Synergic applies to MIG only.** Stick and TIG are single-amperage-knob processes; there is
  nothing to synergize.

**TIG of any kind requires argon.** Under the current no-gas plan, the TIG and pulse modes on
any machine bought now are unusable until a bottle is purchased.

## Options by tier

### ~$400–500 — the value tier

| Machine | Price | TIG | Notes |
|---|---|---|---|
| ArcCaptain MIG200 / MIG205 Pro | ~$400–500 | Lift DC | 140 A @ 120 V, 205 A @ 240 V. Large LCD, parameter memory, spool-gun ready. Available on Amazon.ca |
| YesWelder MIG-205DS Pro | ~$460–500 | Lift DC | 200 A, dual voltage, 25 lb, spool-gun ready. **TIG torch not included** |

### ~$575–800 — TIG worth using

| Machine | Price | TIG | Notes |
|---|---|---|---|
| **Everlast Power MTS 211Si** | ~$700–800 | **HF + lift**, 2T/4T, pedal included | Best TIG of the group. **Everlast has a Canadian arm** — everlastwelders.ca — so warranty and parts without cross-border hassle |
| ArcCaptain MIG205MP | ~$800 | HF, pedal | 9-in-1, includes a **plasma cutter** — useful for cutting out rusted sections cleanly |
| Eastwood Elite MP140i | ~$576 | HF | 140 A. Fine for sheet metal, thin for anything heavier. US support, 3-yr warranty |

### ~$1,100+ — brand-name

| Machine | Price | Notes |
|---|---|---|
| Hobart Multi-Handler 200 | ~$1,160 | Sold through Princess Auto. Real Canadian parts/service. Weak 20% @ 180 A duty cycle |
| Canaweld Multiprocess 201 SLM | ~$2,298 CAD (silver pkg) | **Built in Toronto. CSA/QPS approved.** 3-yr warranty, synergic + job memory. Gold package includes the TIG torch |
| Lincoln Power MIG 210 MP | ~$1,200–1,600 | Synergic, strong low-amp sheet metal performance, dealer support, holds resale value |

### Not recommended

Sub-$250 Vevor / Tooliom machines. Adequate for practice wire, not for structural patches.

## ArcCaptain — brand assessment

Independent signal is thin. Trustpilot and the WeldingWeb owner thread were both proxy-blocked;
much of what surfaces in search is either ArcCaptain's own blog or affiliate content with a
commission on the click. **Moderate confidence, not high.**

**Holds up:**
- 3-year warranty standard, 5 years on some models
- Customer service repeatedly described as responsive; reports of replacements shipped within 10 days
- Arc quality and build well regarded for entry/intermediate use

**Limitations:**
- **Limited dealer network** — no walk-in support, no local parts counter. A year-four failure
  likely means scrapping the machine
- Lower duty cycle than industrial machines (irrelevant at this project's amperage)
- Scattered forum reports of communication problems, including difficulty reaching support to
  cancel an order

**Category context matters more than the brand.** ArcCaptain, YesWelder, Vevor and Tooliom
occupy the same tier: Chinese direct-to-consumer, strong specs per dollar, weak long-term parts
and service. Choosing among them is choosing a feature set, not a reliability tier.

**Buy through Amazon.ca rather than direct.** For this class of machine the return window is
the part of the warranty that reliably functions, and it is easier to invoke than an RMA to an
overseas manufacturer. Also prices in CAD with no surprise duty.

## 120 V vs 240 V

The standard forum advice — "buy 240 V or you will buy twice" — is about welding thick steel.
It does not apply to this project.

- This work runs at roughly **30–50 A**. A 120 V machine outputs ~140 A.
- **120 V is adequate.** The $200–600 outlet install is deferrable.
- Buy a **dual-voltage** machine regardless — it costs nothing extra on every option above, and
  leaves the door open for heavier work (hitch, frame brackets) without replacing the machine.

## Auto-darkening helmet

Flux core throws a bright arc, so the low-amperage sensitivity failures that affect cheap
helmets are a **TIG problem below ~20 A**, not a MIG problem. A budget helmet is genuinely
adequate for this job.

| Helmet | Price | Notes |
|---|---|---|
| YESWELDER Blue Light Blocking | ~$34 | 1/1/1/1 clarity, 1/30,000 s switching, ~20,000 reviews at 4.6★ |
| ARCCAPTAIN Large View w/ LED | ~$60 | 1/1/1/1, larger viewport |
| **Lincoln Viking 1840** | ~$90–150 | Real brand, 4C lens, large viewing area, stocked by Canadian welding suppliers |
| ESAB Sentinel A50 | ~$200–330 | Shade 5–13, touchscreen. **Superseded by the A60** — see the shortlist below |
| Lincoln Viking 3350 | ~$320–450 | 12.5 in² viewport (3.74" × 3.34"), external grind button, X6 headgear — 4th gen (2019+) |
| **ESAB Sentinel A60** | **$526 CAD** | 13.0 in² viewport, 1/1/1/1, external grind, CSA Z94.3. Shortlist pick — see below |

Two features that matter for **body work specifically**:

- **Grind mode** — on rust repair you grind far more than you weld; flipping the hood up every
  thirty seconds gets old immediately
- **Large viewport** — you will be welding contorted under a quarter panel with a poor sightline

Minimum spec: **1/1/1/1 optical clarity** and adjustable sensitivity/delay. Both are table
stakes now, even at $35.

### Upper-tier shortlist compared (2026-10-08)

Four helmets in the $300–600 CAD band: two saved Amazon.ca listings, the
[Jackson Safety Insight](https://www.amazon.ca/dp/B01HTMLSLQ) and the
[Lincoln Viking 3350, black](https://www.amazon.ca/dp/B019G6T4RS), plus ESAB's Sentinel A50 and
the A60 that replaced it. Specs come from manufacturer spec tables as reproduced by distributors.
The manufacturers' own sites (lincolnelectric.com, esab.com) refused the research session's
fetches. Sources are listed at the end of this file.

| | Jackson Insight | Lincoln Viking 3350 | ESAB Sentinel A50 | **ESAB Sentinel A60** |
|---|---|---|---|---|
| Part number | 46131 (black, HLX-100 shell) | K3034-4 (black, 4th gen) | 0700000800 | **0700600860** (black) |
| Viewing area | 3.94" × 2.36" (9.3 in²) | **3.74" × 3.34" (12.5 in²)** | 3.93" × 2.36" (9.3 in²) | **4.65" × 2.80" (13.0 in²)** |
| Light state / grind shade | 4 | 3.5 | 4 | **3** |
| Dark shades | 9–13 only | 5–13, knob | 5–13 | **5–13 in half steps** |
| Optical class (EN 379) | **Not published** | **1/1/1/1** | 1/1/1/2 | **1/1/1/1** |
| Grind mode | Yes. Control location not confirmed | **External button** (4th gen only — see below) | External button (owner reviews) | **External button**, with an indicator inside the helmet |
| Controls | Digital | Knobs inside the shell | Touchscreen, 8 memories | Touch buttons, 9 memories, shade lock |
| Switching speed | 1/10,000 s | 1/25,000 s | 1/25,000 s | 1/25,000 s |
| Arc sensors | 4 | 4 | 4 | 4 |
| Low-amp TIG | Not stated | DC/AC ≥ 2 A (spec table) | Not stated | ISO 16321 +TIG certified |
| Weight | Not reliably stated | ~595 g (21 oz) | Not stated | 644 g (1.4 lb) |
| Warranty | 2 yr lens | 3 yr (most listings; one says 5) | Not stated | 3 yr |
| Standards | ANSI Z87.1, CSA | ANSI Z87.1 | — | ANSI Z87.1, **CSA Z94.3**, EN 379, ISO 16321 |
| Price, CAD | Amazon.ca **$435.67** (third party); Lumen ~$413, Source Atlantic ~$444 | Amazon.ca hidden until it's in the cart. Lincoln Canada lists *other* 3350 colourways at $751–819 list, less a $100 rebate | $570–599 listed, **sold out** at both Canadian dealers checked | **$526** at Weld-Ready and Canada Welding Supply, both order-in from Ontario |
| Price, US for reference | ~$223–242 USD | ~$319–452 USD | ~$300–330 USD | ~$335+ USD |

**What actually separates them:**

- **Two of these are a different class from the other two.** The Insight and the A50 share the
  same 9.3 in² window. The Viking 3350 and the A60 are a third bigger and have true 1/1/1/1
  optics. Make the first cut there.
- **The Jackson Insight is a mid-range helmet at a premium price.** Jackson does not publish an
  EN 379 optical class for it at all. The 1/1/1/1 rating belongs to Jackson's TrueSight II and
  BH3, not this one. It is about $223–242 USD in the US and $413–444 CAD in Canada. **Drop it.**
- **The A50 is superseded.** Canadian dealers show it sold out. Its window is the small one, and
  its last optical digit is a 2: the view degrades more when you look through the lens at an
  angle. **The A60 is the ESAB to consider.**
- **Viking 3350 vs A60 is close on the things that matter.** The windows are about the same
  size (12.5 vs 13.0 in²) but a different shape. The Viking's is **taller** (3.34" vs 2.80"); the
  A60's is **wider** (4.65" vs 3.74"). Both have 1/1/1/1 optics and an external grind button. The
  A60 adds a lighter grind shade (3), half-shade steps, memory presets, shade lock and CSA
  Z94.3 certification. The Viking has simple knobs, a lighter shell, and, by one reviewer's
  account, cheaper replacement lenses than ESAB's proprietary ones.
- **Generation matters on the Viking.** The **external grind button and X6 headgear arrived with
  the 4th generation in July 2019.** Some reviews of earlier 3350s describe an internal grind
  switch, which means lifting the hood to change modes. The part-number suffix appears to track
  the generation: Josef Gases still lists a **K3034-3**, and the 3350 ADV is K3034-5.
  Distributor listings for **K3034-4** specifically describe the external grind control and X6
  headgear, so K3034-4 is the 4th-gen helmet. Lincoln itself has not confirmed this.
- **The saved Amazon.ca listing is K3034-4.** The model number is shown on the listing (checked
  2026-10-08). The page itself dates from about 2016, so a third-party seller could still ship
  old stock. **Check on arrival:** a grind button on the **outside** of the shell and **X6
  headgear**. If either is missing, it is an older unit, and the 30-day return window applies.

**Recommendation:**

- **For this job, the ESAB Sentinel A60 at $526 CAD** is the safest buy. The price is real and
  Canadian, it's a current model, it has the best-documented spec sheet of the four, and its
  wide window suits seam work along a rocker or quarter panel.
- **The Lincoln Viking 3350 is equal on optics.** Buy it instead only if the cart price comes
  in well under the A60, roughly $400 CAD or less. The saved listing's part number, K3034-4,
  is the right one. It is the better pick if you prefer a taller window or knobs over touch
  buttons.
- **Skip the Jackson Insight and the A50.**

Neither is *needed* for this project. A $35–150 helmet from the table above does the job. The
extra money buys a bigger window, cleaner colour, and an external grind button.

**Check before buying the Viking listing:**

- Confirm the **price in the cart**. The page hides it.
- Part number: **confirmed K3034-4** on the listing, which is the complete helmet. A
  replacement shell would be a KP number, such as KP4561-1. "About this item" says only "Black"
  and Amazon files it under `Style: Headgear`, so check the generation on arrival as above.

## Sources

- https://weldingpros.net/best-multi-process-welder/
- https://weldguru.com/best-multi-process-welder-under-1000/
- https://everlastwelders.ca/product-category/products/multi-process-mig-tig-stick/
- https://canaweld.com/product/multi-process-201-slm/
- https://www.princessauto.com/en/category/metal-fabrication/welding/tig-mig-arc/multi-process-welders/7102
- https://bestwelderreview.com/arccaptain-welder/
- https://weldingranked.com/articles/best-auto-darkening-helmets-under-200/
- https://bakersgas.com/blogs/weld-my-world/lincoln-electric-viking-guide
- Helmet comparison. Amazon.ca pages were read through a text fetcher. Ratings, seller and
  variant prices came through, but the spec tables did not. Specs are from distributor listings:
  - https://store.cyberweld.com/collections/jackson-safety/products/jackson-welding-helmet-black-insight-lens-46131
  - https://www.airgas.com/product/Safety-Products/Head%2C-Eye-%26-Face-Protection/Welding-Helmets/Welding-Helmet---Auto-Darkening/p/SEL46131
  - https://lumen.ca/en/products/26-welding-soldering/23-welding-helmets-welding-protection/04-welding-helmets/p-SkVUNDYxMzE=-jet46131-equipement-outillage-jet-46131-hlx-100-welding-helmet---insight-variable-adf---black
  - https://www.sourceatlantic.ca/Product/46131
  - https://weldersupply.com/P/8634/K3034-4
  - https://www.weldingsuppliesfromioc.com/lincoln-viking-3350-series-black-auto-darkening-welding-helmet-k3034-4
  - https://shop.arcsolinc.com/products/lincoln-k3034-4-viking-3350-black-welding-helmet
  - https://www.globalindustrial.com/p/viking153-3350-welding-helmet-5-13-shade-black (Viking spec table: grind 3.5, 1/25,000 s, TIG ≥ 2 A)
  - https://www.aviationpros.com/aircraft-maintenance-technology/mros-repair-shops/shop-equipment/welding-equipment/product/21088946/lincoln-electric-company-lincoln-electric-releases-the-4th-generation-of-viking-2450-and-3350-series-welding-helmets (4th gen, July 2019)
  - https://weldingpros.net/lincoln-viking-3350-review/
  - https://prodcd.lincolnelectric.com/en-CA/Products/k4412-4 (Lincoln Canada list price, other colourway)
  - https://wcsafety.com/collections/all/products/esab-sentinel-a50-welding-helmet (A50 optical class 1/1/1/2)
  - https://canadaweldingsupply.ca/collections/esab-sentinel-a50
  - https://canadaweldingsupply.ca/products/esab-sentinel-a60-welding-helmet (A60 spec table and price)
  - https://canadaweldingsupply.ca/pages/esab-sentinel-a60-specifications
  - https://weld-ready.ca/products/esab-sentinel-a60-welding-helmet
  - https://rme4x4.com/threads/need-a-new-welding-hood.118293 (owner thread, Viking 3350 vs Sentinel A50)
- https://www.garagejournal.com/forum/threads/one-more-welder-thread-240v-vs-120v.478092/
