# Angle grinder discs and wheels — what to buy for each job

The consumables side of [`tools-angle-grinder.md`](tools-angle-grinder.md). That document picks the
grinder; this one picks what goes on it for the sheet-metal work in
[`known-issues.md`](known-issues.md) — cutting the perforated rear quarter section out, opening up the
driver's rocker seam, dressing the patch welds afterward, and stripping rust and old coatings back to
weldable metal.

**The thing to keep in front of you:** every panel on this car that gets touched is roughly
**18–20 gauge (about 1.0–1.2 mm)**. Most abrasive advice on the internet is written for structural
steel, where the failure mode is a slow disc. Here the failure mode is **heat and lost thickness** — a
warped, oil-canned panel you then have to fight, or a patch area ground so thin it burns through when
you strike an arc. Disc choice on this car is mostly about being *less* aggressive, not more.

**Sourcing caveat:** assembled September 2026 from manufacturer literature, abrasive-maker technical
guides, and restoration forums via search. `princessauto.com`, `canadaweldingsupply.com` and most
Canadian retailer domains are **blocked to this research session's egress proxy** — the same wall hit
in [`welding/README.md`](welding/README.md) — so **no price below was read off a live product page.**
Prices are search-snippet derived, in **CAD unless marked USD**, and must be confirmed at the counter.
Product specs (grit ranges, disc types, RPM rules) come from abrasive manufacturers' own guides and
are solid; the *prices and stock are not*.

---

## The short list

If you buy nothing else, buy these five. Everything after this section is the reasoning and the
alternatives.

| # | What | Spec to ask for | Job on this car |
|---|---|---|---|
| 1 | **Cut-off wheels, thin** | **4-1/2" × 0.045" (1.2 mm) × 7/8" or 5/8"-11, Type 1 (flat), for steel** | Cutting the rot out of the quarter and rocker. **Buy a 10-pack** — they are consumable and they break |
| 2 | **Flap disc, 60 grit** | **4-1/2" Type 29 (conical), zirconia or ceramic, 5/8"-11** | Knocking the patch welds down |
| 3 | **Flap disc, 80 or 120 grit** | **4-1/2" Type 27 (flat), zirconia or ceramic, 5/8"-11** | Blending the dressed weld flush without digging |
| 4 | **Clean & Strip disc (purple nylon web)** | **4-1/2" Type 27, silicon carbide extra coarse — 3M Scotch-Brite Clean and Strip XT Pro, XO-DC** | Stripping paint, primer, seam sealer and surface rust **without thinning the panel** |
| 5 | **Knotted wire cup brush** | **3" or smaller, knotted, rated ≥ the grinder's no-load RPM** | Heavy scale on the underbody and rocker exterior only — *not* on outer panels |

Budget for the set: roughly **$60–110 CAD**, unverified, plus replacements. Flap discs and cut-off
wheels are the ones that get used up; the strip disc and wire cup last for the whole project.

The `$150–250` line item in [`welding/README.md`](welding/README.md) covers the grinder, discs,
clamps, magnets, welding blanket and extinguisher together — that number was a placeholder, and the
disc share of it is roughly what is above.

---

## By job

### Cutting the rot out — quarter panel, rocker seam, floor patch

**Use a 0.045" (1.2 mm) Type 1 cut-off wheel.** On 18–20 ga sheet the thin wheel is the correct
choice for three separate reasons, all of which matter here:

- It **cuts faster with less heat input**, which is what keeps the panel from warping around the cut.
- It leaves **less burr**, so there is less dressing to do before the patch can be fitted.
- It removes less material, so the kerf is closer to the cut line and the patch fits tighter — and a
  tight gap is what makes a butt weld in thin sheet possible at all. See the butt-weld-not-lap-weld
  rule in [`rust-repair-inspection.md`](rust-repair-inspection.md).

A 1/16" (1.6 mm) wheel will do it too, and lasts longer, but there is no reason to want one here.
A 1/8" (3 mm) wheel is for thick stock — it is all heat and burr on a body panel.

| Detail | Call |
|---|---|
| Type 1 (flat) vs Type 27 (depressed centre) | **Type 1.** Flat wheels cut deeper and truer. Type 27 cut-off wheels exist mainly so the lock nut clears in awkward positions |
| Arbor | Match the grinder. 4-1/2"/5" DEWALT grinders are **5/8"-11 threaded spindle**; wheels come either with a plain **7/8" centre hole** (used with the flanges) or a **5/8"-11 threaded hub**. Both work — **don't mix up which you own**, because the flanges live with the grinder and get lost |
| Grain | Aluminum oxide is fine and cheap. **Ceramic (3M Cubitron)** cuts cooler and lasts several times longer; worth it if cutting a whole quarter section |
| Wheel diameter | 4-1/2" is right. A 5" wheel on a 5" grinder gives more depth than this job needs |

**Better still for the tight spots:** a **3" cut-off tool** (already flagged in
[`tools-angle-grinder.md`](tools-angle-grinder.md)) takes a 3" × 1 mm wheel and gets inside the wheel
arch and behind the rocker where a 4-1/2" body simply does not fit. If the rocker seam turns out to be
the bigger job, this is the purchase that saves the most swearing.

### Removing spot welds

**Not a grinder job, if the lower panel is being kept.** This matters on the rocker: the seam is two
or three layers, and the inner structure stays.

| Method | Result | Verdict |
|---|---|---|
| **Spot weld cutter** (hole-saw style, 3/8", in a drill) | Cuts the top layer only, leaves the panel underneath intact | **The correct tool** when the lower layer is being saved |
| Step drill / ordinary bit | Works, needs care not to go through both layers | Acceptable fallback |
| Angle grinder with a cut-off wheel or flap disc | Fast, but you are grinding down to the weld by eye and then chiselling it free | Only where **both** layers are being replaced anyway |

Grinding spot welds off is genuinely common practice — it is just the method that assumes you don't
care about what's underneath. On the rocker, you do.

### Knocking the welds down, then blending

Two discs, in order, and **not a hard grinding wheel**:

1. **60-grit Type 29 (conical) flap disc, held at 15–25°.** The conical face presents more abrasive at
   a steeper attack, which is what takes the proud of the weld bead off quickly.
2. **80- or 120-grit Type 27 (flat) flap disc, held at 0–15°.** The flat face keeps the whole disc in
   contact, so it blends rather than digs, and the disc wears evenly.

Start at 40 grit only if the welds came out lumpy. On a patch in 20 ga, 40 grit is a tool for
correcting mistakes, not a starting point.

**Do not use a Type 27 depressed-centre grinding wheel** (the rigid 1/4"-thick stone) on body panels.
It is for weld removal on thick steel. On a quarter panel it removes metal and dumps heat faster than
you can judge either, it gouges, and it will round off a body line permanently. This is the single
most common way an amateur panel repair goes wrong, and it is already noted in
[`tools-angle-grinder.md`](tools-angle-grinder.md).

**Keep the grinder moving and keep the panel cool.** Heat is cumulative; work a weld in passes and
come back to it, rather than leaning on it until it's flat.

### Stripping paint, primer and surface rust off a panel

**The purple nylon-web strip disc is the right answer here, not a flap disc.**

An open synthetic web loaded with coarse silicon carbide grain, it strips coatings and light oxide
while **barely touching the steel underneath**. The open structure lets debris pass instead of
loading up, it runs cooler than a wire wheel, and it will not gouge or thin the panel. That is exactly
the trade this car needs: a 1981 panel that is already through in places cannot afford to donate
thickness to paint removal.

| Product | Spec |
|---|---|
| **3M Scotch-Brite Clean and Strip XT Pro Disc, XO-DC**, SiC Extra Coarse, purple | **4-1/2" × 5/8"-11, Type 27** — the reference product |
| Generic "poly strip disc" / "paint and rust removal disc" | Same construction, much cheaper, shorter life. Fine for this |

**A flap disc will strip paint too — and take panel thickness with it.** Use flap discs on welds, not
on square footage.

### Heavy scale — underbody, rocker exterior, frame areas

**Knotted wire cup brush**, for flaking rust and scale where the underlying metal is thick enough not
to care and the surface is too rough for a web disc. Crimped-wire brushes are the gentler version, for
lighter surface rust and for cleaning a weld between passes.

Wire brushing does not remove base metal — it removes what's sitting on it — but the friction still
generates real heat, so it is not a free pass on a thin outer panel.

Coordinate this with [`underbody-coating.md`](underbody-coating.md): the rust converter goes on
**after** the welding and after the surface is mechanically cleaned, and that doc already lists what
must be masked off.

### Cleaning to bright metal before striking an arc

This is not optional prep, it is weld quality. [`rust-repair-inspection.md`](rust-repair-inspection.md)
already records why: **even a thin film of primer causes inclusions**, and porosity and contamination
are where these repairs actually fail — including in front of an inspector.

**Both faces of the joint, back to bare shiny steel, both sides of the panel.** Options, roughly in
order of how gentle they are:

| Disc | Use |
|---|---|
| **Surface conditioning / Scotch-Brite type disc** (non-woven, on a backing pad) | Final clean-up to bright metal without cutting the surface |
| **Clean & Strip disc** | Coating and oxide removal in the same pass |
| **Crimped wire wheel** | Getting into the seam and the joint edges |
| **2" or 3" Roloc-style quick-change discs on a die grinder** — 3M kits **982BS** (2") and **983BS** (3") | The only thing that reaches inside the rocker, around the wheel arch lip, and into the weld line. Bristle discs in 50 / 80 / 120 grade |

Then weld it **before it flash-rusts** — bare steel in a Montréal garage does not stay bare for long.

---

## Disc reference

What each type actually is, and what it does to 20-gauge sheet.

| Disc | Construction | Removes | On thin sheet |
|---|---|---|---|
| **Cut-off wheel, Type 1** | Thin bonded resin, flat | Cuts through | **Yes** — 0.045" / 1 mm only |
| **Cut-off wheel, Type 27** | Same, depressed centre | Cuts through | Works; shallower. For clearance situations |
| **Grinding wheel, Type 27** | Rigid bonded stone, ~1/4" | Lots of steel, fast | **No.** Gouges, overheats, kills body lines |
| **Flap disc, Type 29 (conical)** | Overlapping abrasive flaps, angled face | Welds, edges, contours | Yes, at 60 grit+, kept moving |
| **Flap disc, Type 27 (flat)** | Overlapping flaps, flat face | Blends and finishes | Yes — the blending disc |
| **Fibre/sanding disc + backing pad** | Single abrasive disc on a rigid pad | Aggressive stock removal, cheap | Only with a soft pad and a light hand. Flap discs are more forgiving |
| **Clean & Strip / poly strip disc** | Open nylon web + SiC grain | Coatings, oxide, seam sealer | **Yes — the panel-stripping disc.** Leaves steel alone |
| **Surface conditioning disc** | Non-woven abrasive | Light oxide, finishing | Yes — final prep |
| **Knotted wire cup / wheel** | Twisted steel wire | Heavy scale, flaking rust | Underbody and structure. Careful on outer panels |
| **Crimped wire wheel** | Loose steel wire | Light rust, weld cleaning | Yes, gentle |
| **Diamond / masonry / turbo blade** | — | Concrete, tile | **No.** Not a steel tool. Do not fit one |

### Grit progression

| Grit | Does |
|---|---|
| 36–40 | Heavy weld removal, correcting a bad bead. Too much for routine work here |
| **60** | **The weld knock-down grit on this car** |
| **80** | **The blending grit** |
| 120 | Finishing before filler or primer |

---

## Safety — the parts that are specific to abrasives

Fume, ventilation and the brake-cleaner/phosgene hazard are in
[`welding/safety.md`](welding/safety.md) and apply to the whole job. These are the disc-specific ones:

- **Every disc carries a maximum RPM. It must be equal to or greater than the grinder's no-load
  speed.** DEWALT's 4-1/2"/5" cordless grinders run 9,000 rpm and the ATOMIC line runs 11,000–12,500 —
  check the disc against the tool, not against a habit. This bites hardest on **wire cup brushes**,
  where at 11,000 rpm the largest safe brush is typically about **2-3/4"–3"**.
- **Wire brushes throw wires,** constantly, hard enough to embed in skin through denim. **Face shield
  over safety glasses**, long sleeves, gloves. This is not an exaggeration in the sources; it is the
  consistent report.
- **Keep the guard on.** The anti-rotation clutch and kickback brake discussed in
  [`tools-angle-grinder.md`](tools-angle-grinder.md) are the second line of defence; the guard is the
  first. Thin sheet grabs cut-off wheels far more readily than thick stock does.
- **Never side-load a cut-off wheel.** Cut in a straight line and let it come out the way it went in —
  twisting is what shatters them.
- **Bonded abrasive wheels have an expiry date** stamped or printed on them. Old resin-bonded wheels
  can fail. **Worth checking on the box before buying and before fitting an old wheel** — unconfirmed
  how strictly Canadian retailers rotate stock.
- **Assume the old coatings on a 1981 body are hazardous.** Primers of that era can contain lead and
  chromates, and undercoating burns into something unpleasant. Dry-sanding or grinding them makes
  respirable dust. **Wear the P100 that [`welding/safety.md`](welding/safety.md) already calls
  non-optional**, for grinding as well as for welding. *Unconfirmed for this specific car — no paint
  analysis has been done — but it is the safe assumption and it costs nothing to act on.*

---

## Canadian sourcing

Walk-in local to Montréal unless noted. **No price here was read off a live page** — see the caveat at
the top.

| Vendor | Carries | Note |
|---|---|---|
| **Princess Auto** | Pro.Point flap discs, cut-off wheels, wire brushes, strip discs | Cheapest route for consumables. Snippet pricing: **4-1/2" flap disc ≈ $6.99**, and a 4-pack around the same. Walk-in |
| **Canadian Tire** | Grinding wheels & cut-off discs category, some flap discs | Convenient, narrower selection, generally dearer per disc. Walk-in |
| **Home Depot Canada / RONA** | DEWALT and Diablo discs, 3M consumer lines | Walk-in. Already the sources for the grinder itself |
| **Canada Welding Supply** | 3M Scotch-Brite Clean and Strip XT Pro | Snippet pricing around **$13–15 for a single 4-1/2" disc**. Order-in; site blocked to this session |
| **Acklands-Grainger / Guillevin / local industrial supply** | Full 3M Cubitron II and Roloc range | Where the ceramic-grain and Roloc part numbers actually live. Order-in, trade pricing |
| **Amazon.ca** | Generic poly strip discs, flap disc multipacks | Fine for generics. **Check the RPM rating in the listing** — unbranded discs are where the bad ones are |

General Canadian parts-buying context, including the vendors already used on this project, is in
[`parts-sourcing.md`](parts-sourcing.md).

**Buy generic on:** flap discs, cut-off wheels, wire brushes. These get consumed and the branded
premium mostly buys longer life you won't notice on one car.

**Buy branded on:** the Clean & Strip disc. The 3M web construction is the product being described
here, and the cheap imitations shed and load.

---

## Decision state

| Question | State |
|---|---|
| Disc types needed for this project | **Decided** — the five in the short list above |
| Cut-off wheel thickness | **Decided — 0.045" / 1 mm**, Type 1 flat |
| Weld dressing method | **Decided — flap discs, 60 then 80 grit.** No hard grinding wheel on body panels |
| Panel stripping method | **Decided — nylon-web strip disc**, not a flap disc and not a wire wheel |
| Arbor style (7/8" plain vs 5/8"-11 threaded) | **Open** — settles when the grinder is actually bought; both exist for every disc here |
| 3" cut-off tool for the rocker and wheel arch | **Open** — depends on how bad the rocker seam turns out to be. The screwdriver test in [`rust-repair-inspection.md`](rust-repair-inspection.md) decides it |
| Spot weld cutter | **Open** — needed only if the rocker repair keeps the inner structure, which it probably does |
| Die grinder + Roloc discs for tight spots | **Open** — a want, not a need, until the rocker is opened up |
| Actual prices and stock | **Open — nothing confirmed.** Every price here is a search snippet |

## Sources

- [3M — abrasives for right-angle systems](https://www.3m.com/3M/en_US/metalworking-us/resources/3M-abrasives-for-right-angle-systems/) · [Cubitron II range (PDF)](https://multimedia.3m.com/mws/media/1326425O/cubitron-ii-product-range.pdf) · [Scotch-Brite Roloc Bristle Disc](https://www.3m.com/3M/en_US/p/d/b40064937/) · [Roloc Bristle Disc Kit 982BS](https://www.3m.com/3M/en_US/p/d/b40065098/)
- [Weiler Abrasives — cutting wheel guide](https://www.weilerabrasives.com/en/na-articles/na-articles/cutting-wheel-guide)
- [Benchmark Abrasives — choosing a cut-off wheel](https://benchmarkabrasives.com/blogs/selecting-tools/cut-off-wheel-for-angle-grinder) · [wire wheel vs flap disc](https://benchmarkabrasives.com/blogs/selecting-tools/wire-wheel-vs-flap-disc) · [poly strip discs](https://benchmarkabrasives.com/blogs/abrasives/poly-strip-discs) · [wire wheel and brush selection](https://benchmarkabrasives.com/blogs/how-to-guides/wire-wheels-vs-brushes-selection-guide)
- [Empire Abrasives — T27 vs T29 flap discs](https://www.empireabrasives.com/blog/t27-vs-t29-flap-disc-differences/) · [wire brush and abrasive safety](https://www.empireabrasives.com/blog/wire-brushes-wheels-abrasive-safety/)
- [Welders Supply — cutting wheel vs grinding wheel, Type 1 vs Type 27](https://www.welders-supply.com/welding-consumables/abrasives/cutting-wheel-vs-grinding-wheel/)
- [Whitby Abrasives (ON) — grinding wheel vs flap disc](https://whitbyabrasives.ca/blogs/news/grinding-wheel-vs-flap-disc) · [Type 27 vs Type 29](https://whitbyabrasives.ca/blogs/news/type-27-vs-type-29-flap-disc)
- [The Fabricator — safe practices for wire brushes and abrasives](https://www.thefabricator.com/thewelder/article/consumables/safe-practices-for-wire-brushes-and-abrasives)
- [Eastwood — 5 ways to remove spot welds](https://www.eastwood.com/garage/5-easy-ways-to-remove-spot-welds/)
- [Restore-an-old-car — angle grinder attachments for automotive repair](https://www.restore-an-old-car.com/angle-grinder-attachments-for-automotive-repair.html)
- Retailer listings (snippet only, not opened): [Princess Auto flap discs](https://www.princessauto.com/en/category/air-and-power/power/abrasives/flap-discs/7051) · [Canadian Tire grinding & cut-off discs](https://www.canadiantire.ca/en/cat/tools-hardware/power-tool-accessories/cutting-grinding-accessories/grinding-cut-off-discs-DC0002044.html) · [Canada Welding Supply — Clean and Strip XT Pro](https://canadaweldingsupply.com/products/3m-scotch-brite-clean-and-strip-xt-pro-disc)
