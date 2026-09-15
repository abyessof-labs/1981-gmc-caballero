# Working in this repo

This is the permanent record for a 1981 GMC Caballero — purchase, condition, repair research, and
paperwork. It is documentation and a small static logger app, not a software project.

## Standing rule: research gets written down

Any thread that researches, diagnoses, prices, confirms or decides something about this car
**writes the conclusion into `docs/` and lands it on `main` before it finishes** — without being
asked. Chat output is not a deliverable here.

Follow the `research-writeup` skill in `.claude/skills/research-writeup/` for where each kind of
finding goes, the house writing style, and the sync checklist (README, `docs/known-issues.md`,
GitHub issues, `costs.csv`). Read it at the start of the work, not just at the end — knowing where
the answer will live shapes what is worth chasing.

## Orientation

- `README.md` — car identity, repo layout, status. Keep its layout tree and Car table accurate.
- `docs/known-issues.md` — every defect, with severity, status and evidence. The spine of the repo.
- `log/` — one file per hands-on work session. Template in `log/README.md`.
- `costs.csv`, `mileage.csv` — appended by hand or by the logger app; `entry_id` prevents double
  logging, so never rewrite existing rows.
- GitHub issues are the work backlog and mirror `docs/known-issues.md`.

## Conventions

- Prices in CAD before tax, with the vendor linked and walk-in vs order-in noted. Mark USD as USD.
- Distinguish verified from inferred from unconfirmed, always.
- Commit messages: imperative, sentence case, no prefixes. No model or session identifiers in
  anything committed.
