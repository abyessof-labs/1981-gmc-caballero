# Sourcing — gas, sheet metal, and cut-to-order parts

Where to get shielding gas, flat sheet steel, and laser-cut / bent parts near Île-Perrot, for the
rust work in [`../known-issues.md`](../known-issues.md) and the rear crossmember question in
[issue #28](../../../../issues/28). Ordered closest first.

Researched 2026-10-05. **Nothing bought, nobody phoned yet.**

> **Sourcing caveat.** Addresses and phone numbers come from directory listings (Pages Jaunes,
> Canpages) and the vendors' own sites where those loaded. **None of the gas suppliers publish
> rental or refill prices**, and none of them state online whether they refill customer-owned
> cylinders. Distances and drive times are inferred from the map, not measured. Online-service
> prices are USD where marked.

## Shielding gas

What to ask for: **75/25 argon/CO₂ (C25)** for gas MIG on mild steel. Background on why, and on
buy vs rent, is in [`process-and-gas.md`](process-and-gas.md).

| Supplier | Where | Phone | What is known |
|---|---|---|---|
| **Charbonneau Propane Équipement** | **81 av. Charbonneau, Vaudreuil-Dorion J7V 7R6** | **450-455-2061** | **Authorized Linde dealer; sells and rents welding cylinders**, delivers in the West Island and Vaudreuil-Soulanges. Mainly a propane shop. **The closest option by a wide margin — call this one first** |
| Oxygène Industriel Girardin | 520 ch. Larocque, Salaberry-de-Valleyfield J6T 4C5 | 450-371-1444 · 1-800-363-5341 | Independent industrial and welding gas house, sales/repair/rental. Mon–Fri 7–5, **Sat 8–12**. Second branch at 40 rue Hébert, Sainte-Martine (450-427-2337) |
| Linde Canada (ex-Praxair) | 3200 boul. Pitfield, Saint-Laurent H4S 1K6 | 514-324-0202 | Full Linde store. The fallback if Charbonneau can only order in |
| Etna Produits de Soudure | Lachine (street address not listed) | 514-634-0049 | Welding supply, listed under West Island. Unverified whether they carry gas |
| Air Liquide Canada | No West Island counter found. Nearest stores listed: 1970 boul. Chomedey, Laval; 11201 boul. Ray-Lawson, Anjou | 450-687-7046 (Laval) | Too far to be the regular refill stop |
| Princess Auto | 4500 boul. Robert-Bourassa, **Laval**; 1939 rue F.-X.-Sabourin, **Saint-Hubert** | 1-855-725-0050 / -0051 | **Owned cylinders on an exchange program** (~83 cf). No rental fee. Far, but the one option where you own the bottle by default |

Not a gas source, despite the listing: **Eutectic Canada**, 428 rue Aimé-Vincent, Vaudreuil-Dorion,
is Castolin Eutectic's maintenance-alloy company, not a cylinder counter.

### The phone call to make

Call **Charbonneau** and ask:

1. **Do you have 75/25 argon/CO₂ in stock, and in what cylinder sizes?** Aim for **40–80 cf**
2. **Rental: monthly or a multi-year lease, and what does each cost?**
3. **Do you refill customer-owned cylinders, or exchange only?** This decides buy vs rent — see
   [`process-and-gas.md`](process-and-gas.md)
4. Price of a fill on that size
5. Same questions for **100% argon**, for the TIG work later

Same list to Girardin if Charbonneau's answers are poor; Valleyfield is the next closest counter.

## Sheet steel

Patch panels need **20 ga** (quarter, body skin) and **18 ga** (rocker, floor). The frame rail and
crossmember are much heavier — measure the original before ordering anything for those.

| Supplier | Where | Phone | Notes |
|---|---|---|---|
| **Acier Lachine** | Lachine / Dorval area | **514-634-2252** · info@acierlachine.com | Stocks **4 to 30 ga**, full sheets 48×96 and 60×120. **Shears, cuts to size and bends.** Whether they sell to walk-in individuals is not stated — ask |
| Acier Century | Sales office 50 rue Notre-Dame, Lachine H8R 1H1 | 514-366-5202 | Steel sales arm of a scrap and recycling yard (now trading as AC Métal Solutions). Lists 16, 18, 20, 22 ga sheet. Mon–Fri 7:30–4:30, closed 12–1. Buys and sells to individuals on the scrap side; sheet retail unconfirmed |
| Les Métaux Roger Grenier | 900 route Harwood, Vaudreuil-Dorion | 450-424-4878 | Closest metal business. Listed as welding / scrap and metal recycling — **worth a call for offcuts**, not a known sheet stockist |
| Home Depot / RONA | Vaudreuil-Dorion | — | Paulin hobby sheets only: small sizes, and the 24×36 is **26 ga galvanized** — too thin, and zinc-coated (see [`safety.md`](safety.md) on zinc fume). **Not useful for this job** |

**Buy a whole 4×8 sheet of 18 ga and one of 20 ga** rather than precut patches: practice pieces
for setting the machine come out of the same sheet, and the price difference over hobby squares is
small. Ask for **cold-rolled** (clean, oil-only) over hot-rolled (mill scale to grind off) and
**not galvanized**.

## Cut, bent and welded to order — online

These take a 2D drawing and ship flat or bent parts. All three Canadian ones avoid the border.

| Service | Based | Shipping to Île-Perrot | From a sketch? | Notes |
|---|---|---|---|---|
| **uMake** — [umake.ca](https://www.umake.ca/canada-digital-fabrication) | **Montréal**, 8487 8e Av. H1Z 2X2 · 514-524-9990 · quoting@umake.ca | 3–7 days Canada-wide; free shipping offered | **Yes — they advertise sketch-to-file conversion and design help** | Fiber laser + **160-tonne press brake, bends up to 10 ft long and ½" steel**. No minimum quantity. Local, so a pickup is worth asking about. **Best fit for a crossmember-sized part** |
| **Laseo** — [laseo.ca](https://www.laseo.ca/en/) | Québec (city not stated) | **Free from $49 CAD** | Partial — a sketch generator and a parts catalog, plus DXF upload | Laser cut, bending, hardware, powder coat. No welding listed |
| Ready Set Cut — [readysetcut.ca](https://www.readysetcut.ca/) | Mississauga, ON | $19.99 CAD parcel | Configurable templates (brackets, flanges) | $39 minimum. Bending offered |
| **SendCutSend** — [sendcutsend.com/canada](https://sendcutsend.com/canada/) | Nevada / Kentucky, USA | **From $19 USD** on orders over $39 USD, **2–4 days to Montréal**, **duties and taxes collected at checkout** | **Yes** — Parts Builder templates, or *"send us a sketch"* to their design team (design price not published) | The broadest material list and the best documentation. **Canadian parcel limit 44 × 30 in, no freight to Canada.** Welding is beta and **single bent part only** (corner seams), mild steel .074–.250" |

### Can one of these make the rear crossmember?

**Partly, and it is a reasonable route to the "fabricate" branch of [issue #28](../../../../issues/28).**
What these services do well is a flat blank, laser-cut to an exact outline with the holes in the
right place, then press-brake bent into a channel. That covers most of a stamped crossmember.

What they will not do from a sketch:

- **Get the geometry right for you.** The suspension mounting points, hole positions and the
  angle the crossmember meets the rails are what matter. **Measure them off this frame (or a
  donor) before the old one is cut out** — once it is gone, the reference is gone
- **Make a multi-piece welded assembly.** SendCutSend's welding is one bent part only. A
  crossmember with end caps, gussets or a boxing plate gets welded here, or by a local shop
- **Ship it if it is long.** SendCutSend's Canadian limit is **44 × 30 in**. Measure the rail-to-rail
  span before assuming it fits; **uMake (local, 10 ft brake) avoids the question**

The honest framing: they replace the press and the shear, not the measuring and the welding. And
because the rear crossmember carries the rear suspension, a fabricated one is something the SAAQ
inspector will look at closely — see [`../rust-repair-inspection.md`](../rust-repair-inspection.md).

**For patch panels** these services are overkill: flat 18/20 ga cut with the grinder or snips from
a full sheet is faster and cheaper. Where they earn their cost is **thicker, precise parts** —
crossmember, body mount perches, frame rail reinforcement plates — where a hand-cut part from
3/16" plate would be slow and inaccurate.

## Decision state

| Question | State |
|---|---|
| Gas supplier | **Leaning Charbonneau (Vaudreuil-Dorion)** — closest Linde dealer. Open until the phone call above |
| Rent or own the cylinder | Open — depends on whether Charbonneau refills owned cylinders |
| Sheet steel source | Open — **call Acier Lachine first** about selling a 4×8 of 18 and 20 ga to an individual |
| Fabricated parts (crossmember, perches) | Open — **uMake first** (local, sketch help, long brake). Waits on [issue #28](../../../../issues/28) |

## Sources

- https://charbonneaupropane.com/en/ (Linde dealer, welding cylinder sales and rental)
- https://www.oxygeneindustrielgirardin.ca/contact
- https://yellowpages.ca/search/si/1/Welding%20Equipment%20&%20Supplies/Montreal%20-%20West%20Island%20QC
- https://www.yellowpages.ca/search/si/1/Air+Liquide+Canada/Montreal+QC
- https://www.princessauto.com/en/category/metal-fabrication/welding/welding-equipment-and-accessories/welding-gas-cylinders/7234
- https://www.newswire.ca/news-releases/princess-auto-confirms-laval-as-second-quebec-store-location-872035312.html
- https://www.acierlachine.com/en/products/plates-and-sheets/
- https://acmetalsolutions.com/classification-des-metaux/autres/feuille-dacier/
- https://www.yellowpages.ca/bus/Quebec/Vaudreuil-Dorion/Les-Metaux-Roger-Grenier-Inc/2425086.html
- https://www.homedepot.ca/en/home/categories/building-materials/hardware/metal-sheets-and-rods/f/paulin/steel/c5q-4yr-9b8
- https://www.umake.ca/canada-digital-fabrication
- https://www.laseo.ca/en/
- https://www.readysetcut.ca/
- https://sendcutsend.com/canada/
- https://sendcutsend.com/faq/can-you-ship-to-countries-outside-of-the-us/
- https://sendcutsend.com/services/welding/
