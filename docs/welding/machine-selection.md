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

## Sources

- https://weldingpros.net/best-multi-process-welder/
- https://weldguru.com/best-multi-process-welder-under-1000/
- https://everlastwelders.ca/product-category/products/multi-process-mig-tig-stick/
- https://canaweld.com/product/multi-process-201-slm/
- https://www.princessauto.com/en/category/metal-fabrication/welding/tig-mig-arc/multi-process-welders/7102
- https://bestwelderreview.com/arccaptain-welder/
- https://weldingranked.com/articles/best-auto-darkening-helmets-under-200/
- https://bakersgas.com/blogs/weld-my-world/lincoln-electric-viking-guide
- https://www.garagejournal.com/forum/threads/one-more-welder-thread-240v-vs-120v.478092/
