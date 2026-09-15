---
name: research-writeup
description: Land research and findings in this repo's docs before the session ends. Use at the end of ANY thread that researched, diagnosed, priced, decided, confirmed or discovered something about the 1981 GMC Caballero — parts, part numbers, tools, procedures, rust, brakes, wiring, oil, fuel, SAAQ and paperwork, sourcing and prices, forums — and whenever the user says "write this up", "document this", "save this", "add it to the repo", or asks where something should go. Covers which file each kind of finding belongs in, the house writing style, keeping README/known-issues/issues in sync, and committing it to main.
---

# Wrapping up research into the repo

This repo is the car's permanent record. Research that ends in a chat window is lost — the next
thread starts from nothing and re-researches it. **Every thread that learns something about this car
writes it down here and lands it on `main` before it finishes.** Do this on your own initiative at
the end of the work; do not ask permission to document, and do not hand the user a chat summary in
place of a commit.

The bar: a year from now, in the driveway, with no chat history, the docs alone should be enough to
act on.

## What counts as a finding

Anything durable. A part number, a price, a torque figure, a procedure, a phone call's outcome, a
correction to something the repo already claims, a decision made, a decision deliberately deferred,
or a dead end worth not repeating. Discussion that changed nothing and concluded nothing does not
need a file — but a dead end usually does, recorded as one line so nobody walks it twice.

## Where it goes

| What you found | Where it goes |
|---|---|
| Specs, procedure, part numbers for one system (oil, fuel, brakes, bulbs, tach, door panels) | `docs/<topic>.md` — new file, or extend the existing one |
| A topic broad enough to have facets (equipment + process + safety + jargon) | `docs/<topic>/` with a `README.md` index, one file per facet — follow `docs/welding/` |
| A new defect, or a change in status/severity/evidence of a known one | Row in `docs/known-issues.md`, in the right section |
| A confirmed or corrected fact about the car itself (VIN, trim, engine, transmission) | `docs/purchase-summary.md` **and** the Car table in `README.md` |
| Links, shops, appraisers, phone numbers, government process | `docs/reference-links.md` |
| Money spent or committed | A row appended to `costs.csv` (`direct` = on the car, `indirect` = everything around it) |
| Odometer reading | A row appended to `mileage.csv` |
| Work actually performed with hands on the car | `log/YYYY-MM-DD-short-slug.md`, template in `log/README.md` |
| A photo that proves something | `photos/evidence/<descriptive-name>.jpg`, linked from the `known-issues.md` row it evidences |
| Something that now needs doing | A GitHub issue, or a comment on the existing one |

Prefer extending an existing doc over starting a new one. A new `docs/` file is for a subject that
genuinely has no home yet.

## House style

Match what is already in `docs/`. The pattern there:

- `# Title` as the first line, then one or two lines saying what the document is for and who it is
  for. Wrap prose at about 100 columns.
- **Tables for anything enumerable** — specs, part numbers, sources, decisions, options compared.
  Two-column `| | |` tables for spec sheets; linked tables for Canadian sourcing with prices in CAD
  before tax, and a note on which vendors are walk-in local to Montréal versus order-in.
- **Bold the thing to actually do**, and the number to actually buy. A reader skimming for the
  answer should find it bolded.
- **Say why, not just what.** The existing docs explain the reasoning (why no anti-drain-back valve,
  why `PS-2002` and not `PS-2001`) because the reasoning is what survives a superseded part number.
- **Mark confidence honestly.** Verified against a source, versus inferred, versus unconfirmed. Flag
  what still needs checking at the parts counter or under the car. Never launder a search snippet
  into a fact.
- **Record sourcing limits.** If the network proxy blocked vendor or forum sites, say so in a short
  caveat block near the top, the way `docs/welding/README.md` and `docs/community-and-inspiration.md`
  do, and mark prices USD vs CAD.
- **A "Decision state" table** for anything still open — question in one column, `Decided — …` or
  `Open` in the other. This is how the next thread knows what is left.
- Cross-link with relative paths (`../photos/evidence/…`, `docs/welding/README.md`) rather than
  repeating content in two places.
- The car's specifics are context worth carrying: 1981 Caballero, base Z88, LG4 305 4-bbl,
  THM200C or 250C undetermined, 207,000 km, Montréal winters, SAAQ mechanical inspection (not
  emissions), parts bought in Canada.

## Before you finish — the checklist

1. **The write-up exists** in the right file, in house style.
2. **`README.md` is in sync.** If you added a `docs/` file, add it to the repo-layout tree with a
   one-line description. If you changed a car fact, fix the Car table. If the work was tool or
   equipment research, add it to the Tools section the way the grinder and welding entries are.
3. **`docs/known-issues.md` is in sync.** New defect → new row. Resolved, disproven, or
   re-graded → update Status/Severity and say what settled it. Keep the evidence column pointing at
   something real.
4. **GitHub issues are in sync.** Existing issue covering what you researched → comment on it with
   the conclusion and link the doc; the repo's issues are the work backlog and they go stale fast.
   New actionable work → open an issue, labelled for area (`rust`, `brakes`, `mechanical`,
   `interior`, `paperwork`, `cosmetic`) plus `inspection-critical` or `needs-confirmation` where it
   applies. Close an issue only when the work is actually done, not when it is merely researched.
5. **`costs.csv` / `mileage.csv`** carry any new spend or reading.
6. **Committed and landed on `main`** (below).
7. **Tell the user in two or three lines** what was written and where — file paths, and anything
   still open or needing confirmation.

## Landing it on main

Commit messages match the existing log: imperative, sentence case, no prefixes or ticket numbers —
`Document the oil fill point, funnel technique, and level check`,
`Add welding research for doing the rust repair in-house`. Keep session URLs, model names and tool
names out of the commit message body, the docs, and anything else pushed to the repo.

```bash
git add -A
git commit -m "<what was documented>"
git push -u origin <this session's branch>

git checkout main
git pull origin main
git merge <this session's branch>
git push origin main
```

`main` is where this work belongs — the docs are read from the default branch and the logger app is
served from it. If the session is pinned to a working branch and merging to `main` is not permitted,
push the branch and **say so explicitly** in the final message, so the merge does not get forgotten.
Do not open a pull request unless the user asks for one.

Retry a failed push up to four times with backoff (2s, 4s, 8s, 16s) before reporting it.

## Don't

- Don't paste the chat transcript into a doc. Write the conclusion, keep the reasoning that supports
  it, drop the search-by-search narrative.
- Don't state an unverified price, fitment or spec as fact. Hedge it or mark it for confirmation.
- Don't duplicate the purchase-evaluation handoff package described at the bottom of `README.md`.
  This repo starts at purchase.
- Don't leave a `TODO` or a blank in a doc where an open question belongs — put it in the Decision
  state table or in an issue.
- Don't invent an odometer reading, a price, or a date to fill a CSV column. Leave it empty.
