# Purchase summary

## VIN

Photographed on the door jamb plate: `1GTCW80H5BD502462`

| Position | Value | Decodes to |
|---|---|---|
| 1–3 | `1GT` | GMC Truck, USA |
| 4–7 | `CW80` | Caballero, ½-ton |
| 8 | `H` | **LG4 305 cu in four-barrel V8** |
| 9 | `5` | Check digit — **does not validate** (computes to `X`) |
| 10 | `B` | **1981** |
| 11 | `D` | Assembly plant — Doraville, GA |
| 12–17 | `502462` | Sequence number |

**The check-digit failure means at least one character in this read is wrong.** Most plausible single-character corrections that restore a valid check digit:

- Position 11: `D` → `B` (plant code — most likely candidate; the plate is rust-pitted and B/D are easy to confuse on shallow stamping)
- Position 16: `6` → `8`
- Position 9 itself: `5` → `X`

**Positions 8 and 10 are unaffected by any of these candidates** — the 305 four-barrel engine and the 1981 model year are solid regardless of which correction (if any) is right.

**Action:** read the VIN off the green Ontario permit and cross-check against the dash plate and door jamb. Update this file once confirmed.

## Trim identification — base Caballero (Z88)

Confirmed by **absence** of every YE7 Diablo marker (per the 1981 GMC Caballero factory catalog):

- Two-tone paint — car is single-colour black
- Devil's-head hood graphic — absent
- "Diablo" lettering on lower doors and tailgate — absent, checked at high resolution
- Red Diablo/devil-head dash-pad lettering — not checked, low priority given the above
- Body-colour sport mirrors — mirrors are black, not body colour
- Rally wheels with GMC centre emblem — not confirmed either way from photos

Also ruled out **Amarillo (D91)**: requires two-tone paint and an "Amarillo" nameplate at the upper-right tailgate. Tailgate reads plain `GMC`.

The bright trim along the bed rail top edges and tailgate top (initially mistaken for a possible Diablo marker) is the **bed rail moulding kit** — a generic trim item fitted across El Camino/Caballero, unrelated to any specific trim package.

**Confirm at the glove box:** SPID sticker should read `Z88` (base), `D91` (Amarillo), or `YE7` (Diablo). Same sticker gives the transmission RPO (`M31` = TH250C, `MV9` = TH200C) and axle ratio.

## Provenance note

Rear bumper carries a **Pontiac dealer badge** — likely originally sold new through a Pontiac-GMC dual dealership.
