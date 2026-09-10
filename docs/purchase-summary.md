# Purchase summary

## VIN

**`1GTCW80H5BD502482`** — check digit validates.

| Position | Value | Decodes to |
|---|---|---|
| 1–3 | `1GT` | GMC Truck, USA |
| 4–7 | `CW80` | Caballero, ½-ton |
| 8 | `H` | **LG4 305 cu in four-barrel V8** |
| 9 | `5` | Check digit — **validates** (computes to `5`) |
| 10 | `B` | **1981** |
| 11 | `D` | Assembly plant — Doraville, GA |
| 12–17 | `502482` | Sequence number |

### How this was resolved

The original door-jamb photo was read as `1GTCW80H5BD502462`, which failed the check digit
(computed `X` against a stamped `5`). Three single-character corrections were listed as candidates:
position 11 `D` → `B`, position 16 `6` → `8`, or the check digit itself `5` → `X`.

The SAAQ mechanical inspection report (#1002981283, 2026-09-10) records the VIN as
`1GTCW80H5BD502482` — **candidate #2, position 16 `6` → `8`.** That value computes to a check
digit of `5`, matching the stamped character, so the transcription and the check digit now agree.

Note that candidate #1 (`1GTCW80H5BB502462`, plant `B`) **also** produces a valid check digit, so
the arithmetic alone does not choose between them. What decides it is that the inspector
independently transcribed position 11 as `D` and position 16 as `8`. The earlier note had flagged
the plant code as the *most* likely error; on the evidence now available it was the sequence number
instead.

**Still worth doing:** cross-check against the green Ontario permit and the dash plate. A valid
check digit proves the string is internally consistent, not that it is this car's VIN — the
inspector was transcribing from the same rust-pitted plate. Two independent reads now agree,
which is good but not conclusive.

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
