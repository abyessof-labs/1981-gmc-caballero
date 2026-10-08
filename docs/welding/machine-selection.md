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
| ESAB Sentinel A50 | ~$200 | Shade 5–13, best ergonomics in class |
| Lincoln Viking 3350 | ~$300 | Largest viewport (3.74" × 3.34"), grind button, X6 headgear |

Two features that matter for **body work specifically**:

- **Grind mode** — on rust repair you grind far more than you weld; flipping the hood up every
  thirty seconds gets old immediately
- **Large viewport** — you will be welding contorted under a quarter panel with a poor sightline

Minimum spec: **1/1/1/1 optical clarity** and adjustable sensitivity/delay. Both are table
stakes now, even at $35.

### Shortlist compared: Jackson Insight vs Lincoln Viking 3350 (2026-10-08)

Two Amazon.ca listings saved to the cart. Both are industrial-brand helmets in the same price
band, and they are not interchangeable.

| | [Jackson Safety Insight (HLX / Halo-X shell)](https://www.amazon.ca/dp/B01HTMLSLQ) | [Lincoln Viking 3350, black](https://www.amazon.ca/dp/B019G6T4RS) |
|---|---|---|
| Part number | 46131 (Black) | K3034-4 — **inferred**; the listing names no part number |
| Viewing area | 3.94" × 2.36" (~9.3 in²) | **3.74" × 3.34" (12.5 in²)** — about 35% larger, mostly taller |
| Dark shade | 9–13 | **5–13** |
| Grind mode | Yes — shade 4 | Yes — **external grind button**, no need to lift the hood |
| Optical clarity | **None published** | **1/1/1/1** (Lincoln 4C lens) |
| Arc sensors | 4 | 4 (stated for the 3350 series; not seen on a K3034-4 page) |
| Switching speed | 1/10,000 s (one retailer) | Not checked |
| Controls | Digital, sensitivity and delay | Knobs on the cartridge, sensitivity and delay |
| Headgear | Ratchet | Lincoln X6 |
| Warranty | 2 yr lens (retailer) | 5 yr (retailer, not checked against Lincoln) |
| Standards | ANSI Z87.1, CSA Z94.3 | ANSI Z87.1, CSA Z94.3 |
| Amazon.ca rating | 4.6★, 661 | 4.7★, 609 |
| Amazon.ca seller | Third-party offers; 5 offers from **$435.67 CAD** (Narrow Shell variant from $359.84) | **Équipement Polar** (third party). Price hidden until added to cart |
| Elsewhere | Lumen.ca ~$413, Source Atlantic ~$444 (`.ca`, currency assumed CAD); Cyberweld ~$242 USD | Arcsolinc ~$319 (currency not stated); Cyberweld ~$452 USD |

**What actually separates them:**

- **Viewport.** The Viking's window is a third bigger, and the extra is height. That is the
  feature this job needs most: welding under a quarter panel with a bad sightline.
- **Shade range.** The Insight stops at 9. The Viking goes down to 5, so it also covers
  oxy-fuel and plasma cutting (shade 5–8). Shade 9 is still fine for 30–50 A flux core.
- **Optics.** Lincoln publishes 1/1/1/1. Jackson does not publish a clarity rating for the
  Insight at all, which at this price is a mark against it.
- **Grind mode.** Both have it. The Viking's is a button on the outside of the shell, which is
  the version that gets used on rust repair, where you grind far more than you weld.

**Recommendation: the Lincoln Viking 3350**, if it is one of these two. It is the better helmet
on every feature that matters for body work. The Insight is a competent industrial helmet that is
**overpriced on Amazon.ca**: about $435 CAD there, against about $242 USD in the US.

Neither is needed for this project. The $35–150 tier above does the job (see the top of this
section). Spending $300+ CAD buys comfort and a bigger window, not a better weld.

**Check before buying the Viking listing:**

- Confirm the **price in the cart**. The page hides it.
- Confirm it is the **complete helmet (K3034-4)**. The listing is sparse: "About this item" says
  only "Black", and it is categorised as `Style: Headgear`. A replacement shell, or headgear on
  its own, would also fit that description.
- Check a Canadian Lincoln distributor for the same part number before paying a third-party
  seller's markup. Lincoln Canada listed another 3350 colourway (K4440-4) at $599.99 CAD regular
  in 2024, now discontinued. That is the list-price ceiling.

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
- https://www.garagejournal.com/forum/threads/one-more-welder-thread-240v-vs-120v.478092/
