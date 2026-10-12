# Engine power — can the 305 make 400 hp?

What it would take to get 400 horsepower out of the car's LG4 305, the routes compared, and what
else on the car has to change before that much power is usable. For whoever revisits the engine plan.

**Sourcing caveat:** the magazine and TV dyno builds below were read through fan-site transcriptions
and article summaries, not the original issues or episodes. Parts lists and figures are as
transcribed; treat them as benchmarks, not specifications. No prices were gathered.

## Short answer

**Yes, but the 305 is the hard way to get there.** It has been done naturally aspirated on the stock
crank (a 1983 *Hot Rod* build made 402 hp), but only as a high-compression, 7,000+ rpm engine that is
miserable on the street. The ways that make 400 hp *and* drive well are a stroker crank in the 305,
boost, or — the usual advice — swapping in a 350 or 383, which bolts into the same place.

Either way, 400 hp is not just an engine job on this car. **The transmission, probably the rear axle,
and above all the rotted rear frame have to be dealt with first.**

## Starting point

| | |
|---|---|
| Engine | LG4 305 four-barrel — see [`purchase-summary.md`](purchase-summary.md) |
| Factory rating | **145 hp** net, 1981 El Camino / Caballero 305 4-bbl ([Hagerty](https://www.hagerty.com/apps/valuationtools/1981-chevrolet-el_camino)) |
| Bore × stroke | 3.736" × 3.48" (a 350 is 4.00" × the same 3.48") |
| Compression | ~8.6:1 |
| Current state | Aftermarket four-barrel, mild cam, straight pipes, open air cleaner — see [`fuel-and-tuning.md`](fuel-and-tuning.md) |
| Mileage | 207,000 km — assume the short block needs a rebuild before it is asked for more |

400 hp is roughly **2.75× the factory rating**. Nothing short of opening the engine gets close.

**Why the 305 fights it:** the small bore crowds the valves against the cylinder wall, so the head
can't breathe like a 350's even with the same castings, and less displacement means making the power
higher in the rev range. That is the whole reason the 350 swap is the standard answer.

**Which 400 hp:** magazine numbers are flywheel figures on an engine dyno. Through an automatic,
expect about 15–25% less at the wheels — the *Hot Rod* engine below went from 402 on the engine dyno
to 300 on the chassis dyno.

## The routes compared

| Route | What it involves | Benchmark | Street manners | Verdict |
|---|---|---|---|---|
| **A. Stock-stroke 305, all-motor** | ~10.5:1 compression, ported heads with 1.94"/1.50" valves, ~224° @ .050" cam, single-plane intake, 650 cfm carb | *Hot Rod*, July 1983, L69 305: **402 hp @ 7,250, 344 lb-ft @ 6,000**; 300 hp at the wheels ([transcription](https://montecarloss.com/SSThunder/stripsbc.html)) | Poor — peak torque at 6,000 rpm, needs steep gears and a loose converter. Wants premium fuel at that compression | Possible, not sensible for this car |
| **B. 305 stroker** | 3.75" (400-style) crank in the 305 block: **~329 ci** standard bore, **~334 ci** at .030" over, **~340 ci** at .060" over. Needs custom-height pistons, balancing, possibly block clearancing | PowerNation 340 ci 305: **486 hp, 444 lb-ft** (parts not listed) ([Chevy Hardcore](https://www.chevyhardcore.com/?p=5832)) | Good — displacement brings the torque back | Works, but costs about what a 383 does and still has the small bore |
| **C. Boost on a 305** | Supercharger or turbo. The low factory compression suits boost | No dyno source found — *inferred* that single-digit psi on a sound, rebuilt 305 reaches 400 | Good if tuned | Not on the current 207,000 km bottom end with cast pistons. Most complex route |
| **D. Swap to a 350 or 383** | Same block exterior, mounts, bellhousing and accessories. 4" bore unshrouds the valves; a 383 (350 block + 3.75" crank) makes 400 with mild street parts | Common practice, *not sourced here* | Best | **Recommended if 400 is the goal** |

Snippet-level only, not verified: a *Car Craft* 305 with Vortec heads and an Edelbrock intake was
reported at 325 hp @ 5,800. That's about where a bolt-on 305 tops out without a stroker or boost.

## What else has to change

| System | Problem at 400 hp | Confidence |
|---|---|---|
| **Frame** | Rear rail rotted through at the body mount, rear crossmember rotted (see [`known-issues.md`](known-issues.md)). The rear crossmember carries the rear suspension, which is what puts the power down. **No power upgrade before the frame is sound** | Verified — SAAQ report and owner observation |
| **Transmission** | The THM200C is a light-duty unit for low-power use; neither it nor the 250C is meant for 400 hp. Plan on a TH350, TH400, or a built 700R4 / 200-4R. Which one the car has is still undetermined (pan bolts: 11 = 200C, 13 = 250C) | Inferred from forum and builder sources; no factory torque rating for the 200C found |
| **Rear axle** | Probably the GM 7.5" 10-bolt, which is marginal at 400 hp with sticky tires. Check the cover and axle tag | **Unconfirmed** — not checked on this car |
| **Brakes** | Front disc / rear drum with an open SAAQ brake-hose failure and dead parking brake. Fix to spec first; an upgrade is optional | Verified condition; upgrade is judgement |
| **Fuel and ignition** | Mechanical pump and HEI are usually enough at this level; the knock-control loop is already gone ([`fuel-and-tuning.md`](fuel-and-tuning.md)) | Inferred |
| **Insurance / SAAQ** | Quebec does not emissions-test cars of this age, so there is no smog barrier. Tell the insurer about engine modifications. Straight pipes are already an SAAQ issue | Insurer disclosure is general practice; SAAQ rules on engine modification **not checked** |

## Decision state

| Question | State |
|---|---|
| Is 400 hp actually the goal? | **Open** |
| If so, build the 305 or swap the engine? | **Open** — recommendation is a 350/383 swap (route D), keeping the 305 as-is meanwhile |
| Frame and brakes before any power work | **Recommended**, not yet decided — it follows from the open SAAQ items |
| Which transmission is in the car (200C vs 250C) | **Open** — pan bolt count settles it, and it decides whether the transmission is replaced either way |
| Rear axle identity | **Open** — check cover and tag next time the car is on the hoist |
