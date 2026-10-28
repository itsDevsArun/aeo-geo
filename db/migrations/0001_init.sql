-- Devs Arun AEO/GEO Outreach — initial schema.
-- The database is the durable source of truth for campaigns, discovery,
-- review, runs, attempts, evidence and audit history.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Campaigns
-- ---------------------------------------------------------------------------
create table campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(name) between 1 and 200),
  is_active boolean not null default false,
  industry text not null default '',
  country text not null default '',          -- ISO 3166-1 alpha-2, e.g. IN, US
  city_region text not null default '',
  search_language text not null default 'en',
  search_queries text[] not null default '{}',
  max_candidates integer not null default 50 check (max_candidates between 1 and 2000),
  max_live_attempts_per_run integer not null default 10 check (max_live_attempts_per_run between 0 and 500),
  min_delay_seconds integer not null default 60 check (min_delay_seconds between 5 and 3600),
  excluded_domains text[] not null default '{}',
  dry_run_fill_domains text[] not null default '{}',
  live_enabled boolean not null default false,
  sender_name text not null default 'Arun',
  sender_business text not null default 'Devs Arun',
  sender_email text not null default 'itsdevsarun@gmail.com',
  sender_phone text not null default '+91 76673 11203',
  sender_website text not null default 'https://devsarun.io/aeo-geo/',
  sender_verified_at timestamptz,
  sender_verified_by text,
  active_template_version_id uuid,
  evidence_retention_days integer not null default 180 check (evidence_retention_days between 7 and 3650),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index campaigns_single_active on campaigns ((true)) where is_active;

-- ---------------------------------------------------------------------------
-- Businesses / recipient identity (dedup across URLs, subdomains, campaigns)
-- ---------------------------------------------------------------------------
create table businesses (
  id uuid primary key default gen_random_uuid(),
  label text,
  label_verified boolean not null default false,
  notes text not null default '',
  created_at timestamptz not null default now()
);

-- Registrable domain (eTLD+1) -> business. Related domains can be linked
-- manually to the same business so they are treated as one recipient.
create table business_domains (
  domain text primary key check (domain = lower(domain) and length(domain) between 3 and 253),
  business_id uuid not null references businesses(id) on delete cascade,
  created_at timestamptz not null default now()
);
create index business_domains_business on business_domains(business_id);

-- Global suppressions / opt-outs (apply to every campaign).
create table suppressions (
  id uuid primary key default gen_random_uuid(),
  domain text not null unique check (domain = lower(domain)),
  reason text not null default '',
  created_by text not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Runs
-- ---------------------------------------------------------------------------
create table runs (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  mode text not null check (mode in ('discovery', 'dry_run', 'live')),
  status text not null default 'queued'
    check (status in ('queued', 'running', 'stopping', 'completed', 'stopped', 'cancelled', 'failed', 'lost')),
  requested_by text not null,
  budget_minutes integer not null default 300 check (budget_minutes between 1 and 320),
  created_at timestamptz not null default now(),
  started_at timestamptz,
  deadline_at timestamptz,
  heartbeat_at timestamptz,
  finished_at timestamptz,
  stop_requested_at timestamptz,
  cancel_requested_at timestamptz,
  finish_reason text,
  error text,
  github_run_id bigint,
  github_run_url text,
  runner_token_hash text,
  needs_reconciliation boolean not null default false,
  reconciled_at timestamptz,
  reconciled_by text
);
-- Only one active processing run per campaign (server-side enforcement).
create unique index runs_one_active_per_campaign on runs(campaign_id)
  where status in ('queued', 'running', 'stopping');
create index runs_campaign_created on runs(campaign_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Discovery
-- ---------------------------------------------------------------------------
create table discovery_queries (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  query text not null,
  next_offset integer not null default 0,
  exhausted boolean not null default false,
  results_seen integer not null default 0,
  last_run_id uuid references runs(id) on delete set null,
  last_searched_at timestamptz,
  created_at timestamptz not null default now(),
  unique (campaign_id, query)
);

create table candidates (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  business_id uuid not null references businesses(id) on delete cascade,
  domain text not null,
  url text not null,
  title text not null default '',
  snippet text not null default '',
  discovery_query text not null default '',
  source_url text not null default '',
  search_rank integer,
  discovered_run_id uuid references runs(id) on delete set null,
  review_status text not null default 'pending'
    check (review_status in ('pending', 'approved', 'rejected', 'suppressed', 'filtered')),
  filtered_reason text,
  suitability_notes text not null default '',
  inspection_status text not null default 'not_inspected'
    check (inspection_status in ('not_inspected', 'inspected', 'no_form', 'blocked', 'error')),
  inspection_error text,
  reviewed_at timestamptz,
  reviewed_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (campaign_id, domain)
);
create index candidates_campaign_status on candidates(campaign_id, review_status);
create index candidates_business on candidates(business_id);

create table contact_pages (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidates(id) on delete cascade,
  run_id uuid references runs(id) on delete set null,
  url text not null,
  final_url text not null,
  form_found boolean not null default false,
  flags jsonb not null default '{}'::jsonb,
  fields jsonb not null default '[]'::jsonb,
  page_title text not null default '',
  notes text not null default '',
  inspected_at timestamptz not null default now()
);
create index contact_pages_candidate on contact_pages(candidate_id, inspected_at desc);

-- Reviewed field mapping for a specific form.
create table form_adapters (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidates(id) on delete cascade,
  contact_page_id uuid references contact_pages(id) on delete set null,
  form_url text not null,
  form_selector text not null,
  submit_selector text not null default '',
  mapping jsonb not null default '[]'::jsonb,
  status text not null default 'proposed'
    check (status in ('proposed', 'needs_manual', 'approved', 'rejected')),
  status_reason text not null default '',
  test_status text not null default 'untested' check (test_status in ('untested', 'passed', 'failed')),
  test_details text not null default '',
  tested_run_id uuid references runs(id) on delete set null,
  tested_at timestamptz,
  approved_by text,
  approved_at timestamptz,
  version integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index form_adapters_one_per_candidate on form_adapters(candidate_id);

create table approvals (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidates(id) on delete cascade,
  subject text not null check (subject in ('candidate', 'adapter', 'reconciliation')),
  decision text not null,
  notes text not null default '',
  actor text not null,
  created_at timestamptz not null default now()
);
create index approvals_candidate on approvals(candidate_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Message templates (immutable versions)
-- ---------------------------------------------------------------------------
create table message_templates (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  kind text not null check (kind in ('short', 'standard')),
  name text not null,
  created_at timestamptz not null default now(),
  unique (campaign_id, kind)
);

create table template_versions (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null references message_templates(id) on delete cascade,
  version integer not null,
  subject text not null,
  body text not null,
  offer_facts text[] not null default '{}',
  created_by text not null,
  created_at timestamptz not null default now(),
  unique (template_id, version)
);

alter table campaigns add constraint campaigns_active_template_fk
  foreign key (active_template_version_id) references template_versions(id) on delete set null;

-- Immutable template versions: block updates of content.
create function template_versions_immutable() returns trigger language plpgsql as $$
begin
  raise exception 'template_versions are immutable; create a new version';
end $$;
create trigger template_versions_no_update before update on template_versions
  for each row execute function template_versions_immutable();

-- ---------------------------------------------------------------------------
-- Attempts (durable, atomic reservations)
-- ---------------------------------------------------------------------------
create table attempts (
  id uuid primary key default gen_random_uuid(),
  run_id uuid not null references runs(id) on delete cascade,
  campaign_id uuid not null references campaigns(id) on delete cascade,
  candidate_id uuid not null references candidates(id) on delete cascade,
  business_id uuid not null references businesses(id) on delete cascade,
  adapter_id uuid references form_adapters(id) on delete set null,
  template_version_id uuid not null references template_versions(id),
  mode text not null check (mode in ('dry_run', 'live')),
  status text not null check (status in (
    'reserved', 'filled', 'submitting', 'confirmed', 'unclear', 'error_after_submit',
    'failed_before_submit', 'uncertain', 'reconciled_sent', 'reconciled_not_sent',
    'dry_run_ok', 'dry_run_failed')),
  subject text not null,
  message text not null,
  field_values jsonb not null default '{}'::jsonb,
  form_url text not null,
  final_url text,
  confirmation_text text,
  error text,
  reserved_at timestamptz not null default now(),
  submit_started_at timestamptz,
  finished_at timestamptz,
  updated_at timestamptz not null default now(),
  check (position('https://devsarun.io/aeo-geo/' in message) > 0)
);
-- A business is contacted live at most once, ever, unless an attempt is
-- known to have failed before submit or was manually reconciled as not sent.
create unique index attempts_live_once_per_business on attempts(business_id)
  where mode = 'live' and status not in ('failed_before_submit', 'reconciled_not_sent');
create unique index attempts_once_per_run_candidate on attempts(run_id, candidate_id);
create index attempts_campaign on attempts(campaign_id, reserved_at desc);
create index attempts_status on attempts(status);

-- ---------------------------------------------------------------------------
-- Evidence (screenshots in private object storage)
-- ---------------------------------------------------------------------------
create table evidence (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  run_id uuid references runs(id) on delete set null,
  candidate_id uuid references candidates(id) on delete cascade,
  attempt_id uuid references attempts(id) on delete cascade,
  kind text not null check (kind in ('inspection', 'filled', 'post_attempt')),
  object_path text,
  filename text not null,
  content_type text not null default 'image/jpeg',
  bytes integer,
  sha256 text,
  page_url text,
  capture_error text,
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);
create index evidence_run on evidence(run_id);
create index evidence_attempt on evidence(attempt_id);
create index evidence_candidate on evidence(candidate_id);
create index evidence_created on evidence(created_at) where deleted_at is null;

alter table contact_pages add column screenshot_evidence_id uuid references evidence(id) on delete set null;

-- ---------------------------------------------------------------------------
-- Run events & audit
-- ---------------------------------------------------------------------------
create table run_events (
  id bigserial primary key,
  run_id uuid not null references runs(id) on delete cascade,
  campaign_id uuid not null references campaigns(id) on delete cascade,
  candidate_id uuid references candidates(id) on delete set null,
  attempt_id uuid references attempts(id) on delete set null,
  type text not null,
  message text not null default '',
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index run_events_run on run_events(run_id, id);
create index run_events_campaign_type on run_events(campaign_id, type);

create table audit_events (
  id bigserial primary key,
  actor text not null,
  action text not null,
  entity_type text not null,
  entity_id text,
  details jsonb not null default '{}'::jsonb,
  ip text,
  created_at timestamptz not null default now()
);
create index audit_events_created on audit_events(created_at desc);

create table rate_limits (
  key text not null,
  window_start timestamptz not null,
  count integer not null default 0,
  primary key (key, window_start)
);

-- ---------------------------------------------------------------------------
-- Access control: the app talks to Postgres only from trusted server code.
-- Enable RLS with no policies so Supabase's public API roles see nothing.
-- ---------------------------------------------------------------------------
do $$
declare t text;
begin
  foreach t in array array['campaigns','businesses','business_domains','suppressions','runs',
    'discovery_queries','candidates','contact_pages','form_adapters','approvals',
    'message_templates','template_versions','attempts','evidence','run_events',
    'audit_events','rate_limits']
  loop
    execute format('alter table %I enable row level security', t);
    if exists (select 1 from pg_roles where rolname = 'anon') then
      execute format('revoke all on %I from anon', t);
    end if;
    if exists (select 1 from pg_roles where rolname = 'authenticated') then
      execute format('revoke all on %I from authenticated', t);
    end if;
  end loop;
end $$;
