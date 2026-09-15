# 2026-09-10 — SAAQ mechanical inspection

**Where:** SAAQ-mandated inspection shop, mandate #7003121
**Inspector:** Sébastien Alexandre Corbeil, mechanic #2003271
**Time:** 13:00–13:54
**Cost:** _fill in_

**Report:** `Rapport de vérification mécanique — Véhicule de promenade` #1002981283
**Reason code:** 120
**Odometer as recorded:** 7 060 km (5-digit mechanical odometer, second rollover — true reading ≈ 207,060 km)
**VIN as recorded:** `1GTCW80H5BD502482`

## Outcome

**1 major defect, 15 minor defects. Certificate stamped `INTERDICTION DE CIRCULER`** — the car is
prohibited from the road until the major defect is repaired and attested.

### Major (blocking)

| Loc | Code | Component | Defect | Note on the report |
|---|---|---|---|---|
| 09 | 133 | Frein de service | `T` | *"Fuite de liquide à frein près de la canalisation flexible de l'essieu (arrière centre)"* — brake fluid leaking at the rear axle flex hose |

### Minor

| Loc | Code | Component | Defect | Note on the report |
|---|---|---|---|---|
| 11 | 007 | Feux de changement direction | `HH` | *"Ne fonctionne pas lorsque les lumières sont allumées"* |
| 11 | 011 | Feux de freinage | `HH` | *"Ne fonctionne pas lorsque les lumières sont allumées"* |
| 01 | 024 | Batterie | `CC` | — |
| 01 | 256 | Pare-brise | `Q` | *"Intersection de fissures dans la zone couverte par les essuie-glaces"* |
| 06 | 259 | Vitre latérale | `GG` | *"Vitre chauffeur ne fonctionne pas"* |
| 15 | 333 | Banquette / siège | `CC` | *"Les 2 sièges avant ne sont fixés correctement"* |
| 02 | 332 | Lave-glace | `GG` | — |
| 03 | 332 | Lave-glace | `GG` | — |
| 23 | 135 | Frein de stationnement | `V` | — |
| 33 | 135 | Frein de stationnement | `V` | — |
| 07 | 158 | Câble (frein stationnement) | `F` | — |
| 09 | 196 | Longeron | `NN` | *"Côté arrière droit (coin) où est située l'attache de carrosserie complètement pourri"* |
| 09 | 198 | Attache de carrosserie | `N` | *"Coussinets d'attache de la carrosserie complètement à l'arrière"* |
| 07 | 306 | Système d'échappement | `T` | — |
| 07 | 308 | Élément de fixation | `CC` | *"Tuyau attaché avec de la broche"* |

Defect-letter meanings for the rows with no written remark (battery, washers, parking brake, exhaust
system) are inferred from the pattern of the annotated rows — `CC` = improperly secured, `T` = leak,
`GG`/`HH` = inoperative. Confirm against SAAQ's defect-code table before quoting them to a shop.

## What was found that we didn't already know

- The brake fault the seller disclosed is specifically the **rear axle flex hose**, and it is the
  one thing keeping the car off the road.
- **The right rear frame rail is perforated at the body mount.** This answers the open "rear frame
  rails aft of the axle — not yet photographed" item. It is frame, not floor.
- Rear turn signals and brake lights **both** drop out with the headlights on — one shared-ground
  fault, not two bulb faults.
- Both front seats are loose on their mounts.
- The parking brake doesn't hold at either rear wheel, plus a cable fault.

## What passed that we expected to fail

- `116 maître-cylindre` — the master cylinder passed despite the corrosion at the outlet fittings
  noted at purchase. Still worth watching; a pass is not a clean bill.
- `324 ceinture de sécurité` — passed, despite the loose rear driver-side belt anchor found in
  photos. Recheck ourselves.
- `14 feu de recul` — reverse lights passed, closing an untested item.
- `330 neutralisation du démarreur` — neutral-safety interlock passed, so the unhooked shift
  indicator cable is not the interlock.

## Not on the report

**The driver-side middle body mount, which is completely separated, was not recorded.** The only
structural entries are the two location-`09` (rear underbody) rows, and the `196` row is narrowed in
writing to the right rear corner. There is no location `06` or `08` (left side) structural entry.
Location `06` is confirmed to mean driver's-side middle by the `06 / 259` driver's window row on the
same report.

This is an omission, not a pass. A separated mount is plausibly gradeable as **major** rather than
minor. Raise it at the re-inspection rather than letting it surface after the repair money is spent.

## Next

1. Rear axle flex hose — repair and get the **major** attestation signed. Nothing else can happen on
   a public road until this is done.
2. Get the car on a hoist and **sound out the full extent of the frame rot** at the right rear mount
   before committing to a repair method. Also assess the separated driver-side mount at the same
   time. Decide between local mount-and-patch, sectioning the rail, or a donor frame.
3. Chase the rear harness ground for the `HH` lighting faults.
4. Cheap items to knock out in one session: battery hold-down, washer pumps/nozzles, exhaust hanger.
5. Confirm **who can sign section H**. Both conformity boxes ask for an `Intervenant SAAQ` and a
   `Numéro du mandat` — a glass shop or body shop that does the work may not hold a SAAQ mandate to
   attest it. Check with the original inspection shop before planning a three-shop sign-off route.
6. Read the deadlines for the minor defects off the back of the certificate (*"voyez les
   instructions au verso"*) — not yet photographed.

## Related

Updates [`docs/known-issues.md`](../docs/known-issues.md). Resolves the VIN check-digit question in
[`docs/purchase-summary.md`](../docs/purchase-summary.md) — position 16 was `8`, not `6`.

Keep the invoices. The re-inspection requires them.
