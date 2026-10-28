# Devs Arun — AEO/GEO Outreach Dashboard

A private dashboard for running contact-form outreach for the [AEO + GEO Starter](https://devsarun.io/aeo-geo/). You configure a target market, discover business websites through a search API, and review every website and its contact form. After that you can run safe dry runs, and only when you deliberately choose to, submit your approved message to reviewed targets. Every attempt is recorded with screenshots, and you can export the records as CSV.

It does **not** send email, scrape email addresses or run mass-mail campaigns.

**Dry run is the default.** Live submission needs all of the following:
- live mode enabled on the campaign
- verified sender details
- an approved website
- an approved form adapter that passed a dry run
- typing `START LIVE` when you start the run

## Architecture

```
Browser ──HTTPS──> Next.js dashboard (Vercel)          GitHub Actions (workflow_dispatch only)
                   ├─ Supabase Auth (email+password)   └─ runner/ (Node + Playwright Chromium)
                   ├─ server routes / services  <───────── /api/runner/* (shared secret + per-run token)
                   ├─ Postgres (Supabase) = source of truth
                   └─ Supabase Storage, PRIVATE bucket "evidence" (60 s signed links)
```

| Concern | Implementation |
|---|---|
| Dashboard + API | Next.js 16 App Router, TypeScript, server-only modules in `src/server` |
| Auth | Supabase Auth with httpOnly cookies, plus an `ADMIN_EMAILS` allowlist checked on the server for every page and API call. Mutations also need a same-origin request (CSRF check) and are rate-limited in the database. |
| Database | Postgres, set up by `db/migrations/0001_init.sql`: foreign keys, indexes, and RLS enabled with no policies, so Supabase's public `anon`/`authenticated` roles can read nothing |
| Evidence | Private Supabase Storage bucket. Screenshots are uploaded right after capture and viewed through `/api/evidence/:id`, which checks the session and then redirects to a 60-second signed URL. |
| Automation | `runner/` runs in a disposable GitHub-hosted runner. It never touches the database directly; every step goes through the dashboard API, and progress is saved continuously. |
| Search | [Brave Search API](https://brave.com/search/api/) (a legitimate API, not search-engine scraping) |

**How a run works**
1. The dashboard inserts the run row. A unique index allows only one active run per campaign.
2. The dashboard calls the GitHub `workflow_dispatch` API. The workflow's `concurrency` group also limits each campaign to one job.
3. The runner claims the run and receives a random per-run token.
4. In a loop, the runner asks the server for exactly one next item (`/api/runner/work`) and reports results and events. It sends a heartbeat every 20 s.
5. The runner stops when the queue is empty, when you request a stop, or at the deadline.

## Duplicate prevention and crash safety

The end-of-run Git ledger from the earlier starter is replaced by **atomic reservations in the database**:

- **Recipient identity.** A recipient is a business, keyed by its registrable domain (`shop.acme.com` counts as `acme.com`). You can link related domains (for example `acme.in` and `acme.com`) to the same business under Campaign → Related domains.
- **Reservation before anything is typed.** Before any field is filled, the server rechecks the run state, approval, adapter status and suppressions inside one locked transaction. It then inserts the attempt with the exact message, the template version and the attempt ID.
- **One live attempt per business, ever.** A partial unique index, `attempts_live_once_per_business`, makes a second live attempt for the same business impossible, even with concurrent workers or across campaigns. The two exceptions are attempts known to have failed before submit, and attempts you manually reconcile as *not sent*.
- **Submit gate.** Just before clicking submit, the runner must move the attempt to `submitting` through the server. That transition is refused if the run has been stopped, cancelled or marked lost. Dry-run attempts can never enter `submitting`.
- **Crash or cancel after the gate.** An attempt left at `submitting` becomes `uncertain`. It is never retried automatically, and live runs stay blocked until you reconcile it on the run page.
- **No exactly-once claim.** Third-party forms have no idempotency, so exactly-once delivery is not claimed.

## The six-hour job window

GitHub's [Actions limits](https://docs.github.com/en/actions/reference/limits) cap each job on GitHub-hosted runners at **6 hours** (checked October 2026).

| Item | Value |
|---|---|
| Job `timeout-minutes` | 345 |
| Processing step timeout | 330 min |
| Processing budget | 300 min from claim (`PROCESSING_BUDGET_MINUTES`) |
| New-work cutoff | 8 min before the deadline (`NEW_WORK_CUTOFF_SECONDS`) |
| Setup (checkout, `npm ci`, Chromium) | about 5–8 min |

- **Worst case** is about 310 min, well inside the limit.
- **Early finish:** the runner exits as soon as the eligible queue is empty.
- **No chaining:** there is no schedule, no automatic restart and no job chaining.
- **Next run:** start it manually. It continues from the state saved in the database.

## Setup and deployment

You need accounts for Supabase, Vercel (or another Node host) and Brave Search API. Set credentials only in each provider's secret settings, never in chat or in the repository.

1. **Supabase**
   1. Create a project.
   2. Set `DATABASE_URL`, then run `npm run db:migrate`.
   3. Run `npm run storage:setup` to create the **private** `evidence` bucket.
   4. Under Authentication → Providers → Email, **disable sign-ups**.
   5. Under Authentication → Users → Add user, add your login (email and password).
2. **GitHub token**
   1. Create a fine-grained token with access to **this repository only**.
   2. Give it the permission **Actions: Read and write**, and nothing else.
3. **Vercel**
   1. Import the repository.
   2. Set the dashboard variables from `.env.example`.
   3. Deploy, then open `/api/health`. It shows only whether each variable name is set, never a value.
4. **GitHub Actions secrets:** add `DASHBOARD_URL`, `RUNNER_API_SECRET` and `BRAVE_SEARCH_API_KEY`.
5. **Smoke test**
   1. Log in.
   2. Create a campaign and enter your target market.
   3. Run discovery and confirm events appear.
   4. Run a dry run.
   5. Download the CSV.

Environment variable names (dashboard): `DATABASE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `EVIDENCE_BUCKET`, `ADMIN_EMAILS`, `RUNNER_API_SECRET`, `GITHUB_REPOSITORY_SLUG`, `GITHUB_DISPATCH_TOKEN`, `GITHUB_WORKFLOW_FILE`, `GITHUB_WORKFLOW_REF`, `PROCESSING_BUDGET_MINUTES`, `NEW_WORK_CUTOFF_SECONDS`.

GitHub Actions secrets: `DASHBOARD_URL`, `RUNNER_API_SECRET`, `BRAVE_SEARCH_API_KEY`.

> **Repository visibility:** Actions logs on a public repository are public. The runner deliberately logs no domains, messages or contact details. Even so, a **private repository is recommended**, at the cost of the Actions minutes quota described under Costs.

## Operating instructions

1. **Configure the campaign.** Go to **Campaign** and enter:
   - industry, 2-letter country code, city/region, language and optional queries
   - maximum candidates, maximum live attempts per run, and minimum delay between websites
   - excluded domains, and "dry-run fill domains" (test forms you own)
   - sender details, then click **I confirm these sender details are correct**

   Discovery is refused until the target market is set; the tool never invents one.
2. **Discover.** Go to **Runs → Start discovery**.
   - The runner searches, then normalises, deduplicates and filters the results (directories, social networks, listicles, government/education sites, exclusions, suppressions).
   - It then visits each official site, respects `robots.txt`, finds the contact page, extracts the form and saves an inspection screenshot.
3. **Review.** Go to **Review queue**. Each candidate shows:
   - its source query, contact URL and suitability notes
   - the inspection screenshot and the proposed message
   - the proposed field mapping

   **Approve** requires ticking the attestation (official site, general-enquiry form, no prohibition on solicitation). **Suppress** opts a domain out of every campaign.

   These forms are hard-blocked and can never be approved:
   - CAPTCHA or other anti-bot checks
   - a no-solicitation notice on the site
   - job, booking, patient, complaint, emergency, support, newsletter or login forms
   - required consent checkboxes or file uploads
   - pages disallowed by `robots.txt`

   Unknown required fields, such as a budget dropdown, need a reviewed **fixed** value in the mapping editor. Honeypots and hidden fields are never filled.
4. **Test an adapter.** Run **Start dry run**.
   - The runner verifies every mapped field and the submit button on the live page and drafts the exact message.
   - It never submits. It only types into fields on your listed test domains, so third-party sites never receive partial form data.
   - When the dry run passes, the adapter's test status becomes `passed`.
   - Then open the candidate and click **Approve adapter for live use**.
5. **Run live.**
   1. In Campaign settings, enable live mode.
   2. Go to **Runs → Start approved live run** and type `START LIVE`.
   3. At the start, the runner checks the service page. If any offer fact the active template relies on (for example `$199`, `16,999`) is no longer on https://devsarun.io/aeo-geo/, live sending is blocked.
6. **Stop.**
   - **Stop gracefully:** the runner finishes the current website, then takes no new work.
   - **Emergency cancel:**
     - closes the submit gate immediately and asks GitHub to cancel the job
     - turns any in-flight attempt into `uncertain`
     - requires **reconciliation** on the run page before another live run
7. **Next run.** Click Start again. Persistent state skips businesses already contacted, suppressed or awaiting reconciliation.
8. **Evidence.**
   - **Records** has a filtered CSV and a full-campaign CSV.
   - Each run page has a run CSV and an evidence bundle (zip of the CSV, a manifest and screenshots).
   - Each record shows the inspected-page, filled-form and post-attempt screenshots, each with a download link.
   - CSVs are UTF-8 with a BOM, every field is quoted, and values beginning with `= + - @` or tab/CR are prefixed with `'` to block formula injection.

"**Confirmation observed**" means the site displayed a *new* success message after the attempt. It does not prove the message reached an inbox, was read, or produced a lead. Clicking submit or getting HTTP 200 is never counted as success.

## Message templates

There are two versions, short and standard. Both are versioned and immutable: saving creates a new version, and the history is kept. You can edit the subject, see a live preview, and pick which version is active.

The server enforces these rules on save, on render and at the submit gate:
- The exact link `https://devsarun.io/aeo-geo/` must appear.
- The sentence "AI mentions, rankings, leads and revenue are not guaranteed." is not allowed.
- Guarantee wording, false urgency, fake familiarity, claims to have audited the recipient's site, and ranking or case-study claims are blocked.
- Unresolved placeholders are blocked.
- The recipient is greeted by business name only when you have marked that name as verified.

The standard template reflects the offer on the page as checked on 2026-10-28:
- one-time $199 (about ₹16,999, negotiable)
- one website
- a basic audit
- 10 customer questions
- improvements to two existing pages
- relevant structured data
- a summary action plan with one revision round

## Tests

| Type | Command | Scope |
|---|---|---|
| Unit | `npm run test:unit` | message/link rules, CSV escaping and injection, URL normalisation and dedup, discovery filters, form mapping, honeypot/consent/CAPTCHA/no-solicitation detection, confirmation detection, SSRF guard, robots.txt |
| Integration | `TEST_DATABASE_URL=... npm run test:integration` | real Postgres and real service code: settings and audit, template versioning, discovery pagination/caps/dedup, suppression, review attestation, adapter blocking, single active run, dry run cannot submit, live refuses unapproved targets, 10 concurrent reservations → 1, unique index, crash → `uncertain` → reconciliation, emergency cancel closes the submit gate, graceful stop, deadline cutoff, CSV, overview counts |
| Browser/UI e2e | `npm run test:e2e:build && TEST_DATABASE_URL=... npm run test:e2e` | production build, real Postgres and the real runner process against **local fixture sites only**; details below |

The e2e suite covers:
- login, unauthorised API access and CSRF
- the whole discovery → review → dry run → live → records → CSV → zip flow
- stop, cancel and deadline
- desktop and mobile layouts, with screenshots in `docs/screenshots/`

The e2e suite uses test doubles: a local stand-in for the Supabase Auth and Storage HTTP APIs, and a fake Brave API. It therefore does **not** prove real Supabase, Brave or GitHub behaviour; only a smoke test of the deployed app can do that. CI (`.github/workflows/ci.yml`) runs all three suites with a Postgres service container.

## Costs (approximate — check current pricing)

- **Vercel:** the Hobby plan is non-commercial only, so this business tool needs **Pro, about $20/month**.
- **Supabase:** the Free plan works for low volume, but free projects pause after 7 days of inactivity. **Pro is about $25/month.**
- **Brave Search API:** about $5 per 1,000 requests, with roughly $5 of free monthly credit. A card is required.
- **GitHub Actions:**
  - free on public repositories
  - on private repositories, Free plans include 2,000 Linux minutes a month, and a full 6-hour run uses about 345
  - a typical run that finishes early uses far less

## Retention, backup and troubleshooting

- **Retention:** each campaign has a screenshot retention period (default 180 days). Use **Purge expired screenshots** to delete older files. Attempt records are kept on purpose so a business is never contacted again.
- **Deletion:** use **Delete candidate data** for a data-deletion request; it removes the candidate, its inspections and its screenshots. Candidates with live attempts can only be suppressed.
- **Backups:** Supabase Pro includes daily backups. You can also run `pg_dump "$DATABASE_URL"` regularly. Storage objects can be exported with the Supabase CLI.
- **Troubleshooting:**
  - Run stuck in *queued*: check the GitHub Actions secrets and the token permissions. A queued run is closed as `lost` after 30 minutes.
  - *Stale heartbeat* warning: the runner is closed automatically after 10 minutes without a heartbeat, and any in-flight attempts become `uncertain`.
  - Errors on the dashboard: `/api/health` shows whether each required variable is set.
