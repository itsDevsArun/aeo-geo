# Devs Arun — AEO/GEO Outreach (runs entirely on GitHub)

Contact-form outreach for the [AEO + GEO Starter](https://devsarun.io/aeo-geo/). Everything runs inside **GitHub Actions** in this private repository. You do not need Vercel, Supabase or any other hosting.

It does **not** send email, scrape email addresses or run mass-mail campaigns. **Dry run is the default.**

**Step-by-step guide (Hinglish): [`outreach/README.md`](outreach/README.md)**

## How it works

```
You (GitHub web)                         GitHub Actions job (temporary)
├─ edit outreach/campaign.json            ├─ Postgres service container (empty)
├─ edit outreach/review.csv          ──►  ├─ restore state from branch outreach-state
├─ Actions → outreach-run → Run           ├─ apply your outreach/ files
│                                         ├─ Playwright Chromium runner (one website at a time)
│                                         ├─ checkpoint: commit + push state (and before EVERY live submit)
└─ read reports on branch outreach-state ◄┴─ reports, CSV, screenshots, job summary, artifact
```

| What | Where |
|---|---|
| Settings, target market, sender | `outreach/campaign.json` (main branch) |
| Message templates (short / standard) | `outreach/templates/*.txt` — a changed file becomes a new immutable version |
| Review decisions | `outreach/review.csv` |
| Reconciling uncertain attempts | `outreach/reconcile.csv` |
| Durable database | `outreach-state` branch, `state/db/*.json` (restored at the start of every job) |
| Screenshots | `outreach-state` branch, `evidence/` + the `outreach-evidence` artifact on each run (30 days) |
| **Live dashboard** | Issue **"📊 Outreach Dashboard (live)"** (label `outreach-dashboard`), rewritten every 20 s during a run with the funnel: discovered → approved → dry-run passed → submitted → confirmation observed / unclear / errors, plus replies you log in `outreach/responses.csv` |
| Countries | `outreach/campaign.json` → `countries` in priority order, e.g. `["US","AU","CA","ALL"]` (`ALL` = worldwide) |
| Reports | `outreach-state` branch, `reports/README.md` (overview), `reports/review-queue.md`, `reports/runs/*.md` (each with screenshots), `reports/*.csv`; plus the Job Summary and live log of every run |

The repository **must be private**: state, contact details and screenshots live in it.

### Controls
- **Start:** Actions → `outreach-run` → Run workflow, then choose `discovery`, `dry_run` or `live`. Live also needs `START LIVE` typed in the box.
- **Graceful stop:** Actions → `outreach-stop` → Run workflow. The running job checks every 30 s, finishes the current website, then stops.
- **Emergency cancel:** "Cancel workflow" on the running job. The submit gate is closed in the database first. Any in-flight live attempt becomes `uncertain` and must be reconciled before the next live run.
- **Next run:** start it again manually. It continues from the saved state, and businesses already contacted are never contacted again.
- **No automation of its own:** no schedule, no automatic restart, no job chaining.

## Safety guarantees
- **Single writer.** One job at a time, enforced by the workflow concurrency group `outreach-state` and by the database (one active run per campaign).
- **One live attempt per business, ever.** A unique index in the database enforces it. Recipients are keyed by registrable domain, and related domains can be linked in `campaign.json`.
- **Persist before submit.** Before every live submit, the attempt is moved to `submitting` and the state is **committed and pushed**. If the push fails, the form is not submitted. If the job dies after the push, the next job finds the attempt and marks it `uncertain` (never retried).
- **Hard-blocked forms.** These can never be automated:
  - CAPTCHA / anti-bot
  - "no solicitation" notices
  - job, booking, patient, complaint, emergency, support, newsletter or login forms
  - required consent checkboxes or file uploads
  - pages disallowed by robots.txt
- **Never filled:** honeypots and hidden fields.
- **Message rules.** Every message must contain `https://devsarun.io/aeo-geo/`. The sentence "AI mentions, rankings, leads and revenue are not guaranteed." is blocked, as are guarantee wording, false urgency, fake familiarity and fake-audit claims.
- **Offer check.** Before every live run, the service page is fetched. If the offer facts (`$199`, `16,999`, `negotiable` for the standard template) are no longer on the page, live sending stops.
- **Meaning of "Confirmation observed".** The site displayed a *new* success message after the attempt. It is not proof that the message was delivered, read or turned into a lead.

## Six-hour job window
GitHub-hosted jobs are limited to [6 hours](https://docs.github.com/en/actions/reference/limits).

| Setting | Value |
|---|---|
| Job timeout | 345 min |
| Processing step timeout | 330 min |
| Processing budget | 300 min from claim |
| New-work cutoff | 8 min before the deadline |

The job finishes early when the queue is empty.

## Setup (once)
1. Keep the repository **private**.
2. Repo → Settings → Secrets and variables → Actions → add **`BRAVE_SEARCH_API_KEY`** ([Brave Search API](https://brave.com/search/api/); needed for automatic discovery).
3. Repo → Settings → Actions → General → Workflow permissions: the workflow requests `contents: write` itself. If your organisation restricts this, allow "Read and write permissions".
4. Edit `outreach/campaign.json` (industry, country, city), then run `outreach-run` with mode `discovery`.

Secrets used by the workflows: `BRAVE_SEARCH_API_KEY` only. The built-in `GITHUB_TOKEN` pushes the state branch.

## Costs
- **GitHub Actions (private repository):** the Free plan includes 2,000 Linux minutes per month. A full 6-hour run uses about 345 minutes; short runs use a few minutes. Pro and Team plans include 3,000.
- **Brave Search API:** about $5 per 1,000 requests, with roughly $5 of monthly free credit. A card is required.
- **Storage:** screenshots are stored in the repository (JPEG, roughly 50–300 KB each). Retention is set by `evidence_retention_days` (default 180); older files are deleted from the branch, but they stay in git history.

## Tests
| Suite | Command | What it covers |
|---|---|---|
| Unit | `npm run test:unit` | message rules, CSV, URLs, discovery filters, forms, SSRF guard, robots.txt |
| Integration | `TEST_DATABASE_URL=… npm run test:integration` | real Postgres: reservations, concurrency, crash/uncertain, cancel, stop, deadline |
| GitHub-only mode | `TEST_DATABASE_URL=… npm run test:github` | real orchestrator + Postgres + Playwright + a git remote, against local fixture sites (details below) |
| Optional hosted dashboard | `npm run test:e2e:build && TEST_DATABASE_URL=… npm run test:e2e` | Browser/UI tests |

The GitHub-only suite covers:
- discovery
- review.csv rules
- dry run never submits
- live refusals
- reservation-push failure leading to no submit
- one submit per business
- crash leading to uncertain, then reconcile
- emergency cancel and finalize
- state round trip

CI (`.github/workflows/ci.yml`) runs on pull requests and on demand. It does not run on pushes to main, to save minutes.

## Troubleshooting
- **Red run with "Config problems":** open the Job Summary. It lists exactly which line of `campaign.json`, `review.csv` or a template was rejected and why.
- **"Run cannot start":** the summary lists the reasons, for example target market not set, no approved targets, live disabled, or reconciliation needed.
- **"Could not save state":** check that workflow permissions allow writing (Setup step 3).
- **Backups:** the `outreach-state` branch *is* the backup, with full git history. Download it with `git clone -b outreach-state`.

## Optional: hosted dashboard mode
The `src/app` Next.js dashboard (Supabase Auth/Storage, Vercel) is still included and tested, but you do **not** need it. The GitHub-only orchestrator reuses its server code (`src/server`) and the runner API handlers, and swaps Supabase Storage for files in the state branch. See `.env.example` if you ever want to host it.
