# Welding

Research for doing the rust repair in `docs/known-issues.md` in-house rather than farming it
out to ATS Auto Body (see `docs/reference-links.md` → Shops).

Researched 2026-09-14/15. **No equipment purchased yet.**

## Why this section exists

Three of the open structural items are sheet-metal welding jobs:

| Issue | Panel | Gauge (nominal) |
|---|---|---|
| Rear quarter panel — through-hole, curled edge, blistering | Quarter | ~20 ga |
| Rocker panel seam, driver side — flange delaminating | Rocker | ~18–20 ga |
| Smuggler's box floor — not yet photographed | Floor | ~18–20 ga |

Everything else in `known-issues.md` is mechanical, paperwork, or trim. **Brake lines get
flared, not welded.** Exhaust is likely cheaper to farm out than to learn on.

The practical consequence: this is *low-amperage thin-sheet work*, roughly 30–50 A. Maximum
output, duty cycle, and spool-gun support are irrelevant to this project. Low-end control and
wire-feed smoothness are what matter.

## Contents

| File | Covers |
|---|---|
| [`machine-selection.md`](machine-selection.md) | Welder options by tier, ArcCaptain brand reputation, Canadian availability |
| [`process-and-gas.md`](process-and-gas.md) | Gasless flux core vs gas MIG for body panels, shielding gas, technique |
| [`safety.md`](safety.md) | Fume, ventilation, respirator, the brake-cleaner/phosgene hazard |
| [`glossary.md`](glossary.md) | Welding jargon decoded |

## Decision state

| Question | State |
|---|---|
| Doing the rust work in-house | **Decided — yes** |
| Multi-process machine (MIG/TIG/stick) | **Decided — yes**, for future TIG capability, not for this job |
| Process for this job | **Leaning gasless flux core.** Gas MIG is the better process for sheet metal — see `process-and-gas.md` |
| Specific machine | Open |
| 240 V in the garage | Open — **potentially 120 V only**, which is adequate for this work |
| Gas bottle | Open — not purchased. Required for TIG later regardless |
| Helmet | Open |

## Budget

Rough, unverified — see the sourcing caveat below.

| Item | Est. | Note |
|---|---|---|
| Multi-process welder | $160–800 USD | Wide range by tier; see `machine-selection.md` |
| Auto-darkening helmet | $35–300 USD | $35 tier is genuinely adequate for MIG |
| Gas bottle + flowmeter (C25) | $250–400 | Deferred under the gasless plan; required for TIG |
| Respirator (P100) + box fan | ~$60 | **Not optional** — see `safety.md` |
| Grinder, discs, clamps, magnets, blanket, extinguisher | $150–250 | Grinder in [`docs/tools-angle-grinder.md`](../tools-angle-grinder.md); discs and wheels in [`docs/tools-abrasives.md`](../tools-abrasives.md) (disc share ≈ $60–110) |
| 240 V outlet install | $200–600 | **Deferrable.** Not needed at this amperage |

## Sourcing caveat

Most welding retailer and forum sites were blocked by the research session's network egress
proxy — including Princess Auto, Canada Welding Supply, Amazon, Trustpilot, WeldingWeb, Weld
Guru and YesWelder. Prices below come from **search-result snippets, not live product pages**,
and are **USD unless marked**. Canadian pricing, duty and availability are unverified.

Treat every number here as a starting point for a real quote, not a fact. Nothing in this
section has been confirmed against a vendor.
