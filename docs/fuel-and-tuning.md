# Fuel grade and ignition timing

Which pump grade the 305 should get, and why the answer is mostly about timing rather than fuel.

## Engine as it sits

| | |
|---|---|
| Engine | LG4 5.0L / 305 cu in V8, confirmed via VIN 8th character `H` — see [`purchase-summary.md`](purchase-summary.md) |
| Factory compression | ~8.6:1 — GM had cut compression hard for emissions by 1981 |
| Factory fuel spec | 87 octane unleaded regular (*ordinaire*) |
| Carburetor | Replaced — new four-barrel, not the factory unit |
| Camshaft | Replaced — mildly more aggressive than stock |
| Exhaust | Straight pipes |

The factory air cleaner is already noted as missing in [`known-issues.md`](known-issues.md); the carb, cam, and
exhaust above are further departures from stock. Treat the engine as a mild build on a low-compression
short block, not as a factory LG4.

## Recommendation: run 87 (*ordinaire*)

Nothing in the current configuration raises the octane requirement above what GM specified.

- **Low compression sets the floor.** At ~8.6:1 static, the engine was engineered around 87 octane with
  margin to spare.
- **The cam lowers the requirement further.** Longer duration closes the intake valve later, bleeding
  cylinder pressure back into the intake at low rpm. Dynamic compression goes *down*, so a mild cam on a
  low-compression 305 is less knock-prone than stock, not more.
- **The open exhaust helps marginally.** Less backpressure means better scavenging of hot residual exhaust
  gas, and residual EGT is one of the things that seeds detonation.
- **Octane is not power.** It is a resistance-to-autoignition rating. In an engine that is not knocking,
  higher octane yields zero additional power and slightly slower flame travel. Detergent packages track
  brand (Top Tier) rather than grade.

Premium is not a safety margin, an upgrade, or an investment in an engine that does not need it.

## Test before settling on a grade

1. Engine fully warm, warm ambient day.
2. Top gear, roughly 50 km/h.
3. Roll into wide-open throttle without letting the transmission kick down.
4. Listen for a light marbles-in-a-can rattle under load.

**No rattle on 87** → the question is settled permanently; keep running regular.

**Rattle on 87** → the octane requirement is coming from the distributor, not the engine. Fix the timing;
do not buy around it. Check, in order:

- initial (base) advance against a timing light,
- that the vacuum advance is on the correct port and actually holding vacuum,
- that the centrifugal weights and springs are not bringing advance in too early.

It is common for a 305 to get extra initial advance when a cam and open exhaust go on, and that — not the
fuel — is the usual reason one of these "needs premium." Detonation on cast pistons is engine damage in
slow motion. Premium masks the symptom while the wrong curve keeps cooking it.

Only if it still pings at correct timing should the grade go up, and midgrade is likely sufficient.

## Where premium is genuinely worth buying

For **ethanol content**, not octane. Some premium grades sold in Quebec are non-oxygenated, which matters
for a 45-year-old carbureted car:

- E10 attacks old rubber — fuel lines, accelerator pump cup, needle-and-seat tips. The carb is new and its
  internals are likely modern-compatible, but everything upstream of it on this car is original-era.
- Ethanol absorbs water and phase-separates in a tank that sits. Given the car is mid-restoration and not in
  daily service, this outweighs any octane consideration.

**Practical split:** 87 for driving; ethanol-free fuel (whatever grade it happens to be sold as) plus
stabilizer for anything left in the tank over winter storage.

## Related notes

- **No lead substitute needed.** By 1981 the heads have hardened exhaust seats; unleaded is correct and
  additives are unnecessary.
- **Knock protection may be gone.** 1981 was the first Computer Command Control year, with the electronic
  E4ME Quadrajet and, on many applications, a knock sensor driving Electronic Spark Control that retards
  timing automatically. If the replacement four-barrel is a non-electronic unit (Edelbrock, Holley, plain
  Quadrajet), that closed-loop control and its knock protection are no longer in the loop. Verify timing by
  ear and by light rather than assuming the car will protect itself.
- **Straight pipes are an inspection and enforcement exposure in Quebec.** The Highway Safety Code prohibits
  modifying the exhaust in a way that increases noise, and [`known-issues.md`](known-issues.md) already flags
  exhaust integrity as an SAAQ inspection item. Worth resolving before the inspection rather than at it.
