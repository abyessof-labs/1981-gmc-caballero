# Charging system — diagnosing a low gauge reading

## Symptom

Dash gauge reads roughly 12 V with the engine running — just under the 13 V mark — despite a new
alternator and a recent-ish battery.

## Is that normal?

**No.** A 1981 GM charging system, warm, at about 1500 rpm with the lights off, should hold
**13.8–14.8 V at the battery posts** (14.2 V is typical). Anything at or below ~13.0 V is
undercharge: the alternator is contributing little or nothing and the car is running down the
battery.

Reference figures, engine **off**, battery settled:

| Resting voltage | State of charge |
|---|---|
| 12.6 V+ | full |
| 12.4 V | ~75% |
| 12.2 V | ~50% |
| 12.0 V | ~25% |

So a "12 V" reading with the engine running is roughly what the battery alone would show — the
alternator is not doing its job, **or** the gauge is lying.

## Read it with a meter before chasing anything

The factory cluster voltmeter does not sense at the battery. It is wired between an
ignition-switched feed and ground *at the cluster*, so it reads battery voltage minus everything
lost getting there — through the bulkhead connector pins, the ignition switch contacts, and the
printed-circuit traces. The needle is not miscalibrated; it is honestly reporting a voltage that
genuinely is lower at that point in the harness. A weak cluster ground shifts it further.

**A tired instrument feed commonly reads 0.3–0.7 V low with a perfectly healthy alternator.** More
than about 1 V of discrepancy is possible but means the feed path itself is badly degraded — worth
chasing on its own, since the G-body bulkhead connector is a known trouble spot.

Meter across the battery posts, engine warm, ~1500–2000 rpm, everything off. **Rpm matters:** a
stock 10SI makes poor output at low speed, so sagging into the 13s at a 600–700 rpm idle with the
blower and headlights on is normal and proves nothing. Bring the revs up before concluding
anything.

- **13.8–14.8 V** → charging system is fine, the *gauge* (or its feed) is the fault. Stop here and
  move to the cluster/bulkhead connector.
- **~12.x V, unchanged from engine-off** → genuine undercharge. Work the list below.
- **15.0 V+** → overcharge, a different fault (usually the terminal-2 sense wire open, or a bad
  regulator). Do not keep driving it; it boils the battery.

## Diagnostic order, cheapest first

The alternator is a Delcotron **10SI/12SI** with an internal regulator and a two-terminal plug
alongside the BAT output stud:

- **Terminal 1** — field exciter, fed through the charge-indicator lamp circuit.
- **Terminal 2** — voltage sense.

1. **Rev test.** Hold ~2000 rpm and watch the meter. If voltage climbs to 14 V at speed but sits at
   battery voltage at idle, the **exciter (terminal 1) circuit is open or weak**. A 10SI needs field
   current through that circuit to start charging. A burnt-out charge lamp bulb, a broken resistance
   wire, or a plug that was not reconnected during the alternator swap all produce exactly this. The
   cheapest and most likely fault after a fresh alternator install.
2. **Confirm the plug is actually on.** Very common failure mode on a replacement: only the BAT stud
   gets hooked up (especially if the old plug crumbled, or a one-wire unit was expected). Key on,
   engine off, backprobe terminal 1 — a few volts should be present. Terminal 2 should read battery
   voltage key on or off.
3. **Belt.** Twist the belt on its longest run — more than about 90° of rotation is loose. Look for
   glazing. Switch on headlights, blower, and rear defrost and watch for voltage sag with a squeal:
   that is a slipping belt, not a dead alternator.
4. **Voltage drop, insulated side.** Engine running with headlights and blower on, meter from the
   alternator BAT stud to the battery positive post. **Under 0.3 V is good; over 0.5 V is the
   fault.** The GM charge lead runs through a **fusible link at the junction block** — a
   half-cooked link is a classic undercharge cause and looks fine from outside.
5. **Voltage drop, ground side.** Alternator case to battery negative, same load. Under 0.2 V. Check
   the engine-to-firewall and engine-to-frame straps; they are original and corroded.
6. **Battery load test.** A shorted cell drags system voltage down even with a healthy alternator.
   Free at any parts counter. Read the date code on the case — "recent-ish" is not a warranty.
7. **AC ripple.** Meter on **AC volts** across the battery, engine running: under 0.1 V AC. Over
   0.5 V AC means failed diodes — which happens on remanufactured units out of the box, and produces
   undercharge on an alternator that is only weeks old.
8. **Bench test the alternator.** Free at most parts stores. Reman failure rates are real; a new part
   is not an exonerated part.

## Practical note

If step 1 confirms genuine undercharge, do not plan a night drive. Running off the battery alone,
with headlights, a 1981 system typically stalls in well under an hour.

## Inspection relevance

Charging is not itself one of the SAAQ mechanical inspection's 11 systems, but a car that will not
crank or hold lighting output at the inspection fails on the downstream items. Settle this before
booking.
