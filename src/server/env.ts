import "server-only";

function req(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required environment variable ${name}`);
  return v;
}

function int(name: string, def: number): number {
  const v = process.env[name];
  const n = v ? Number.parseInt(v, 10) : def;
  return Number.isFinite(n) ? n : def;
}

/** Server-only configuration. Never import from client components. */
export const env = {
  get databaseUrl() {
    return req("DATABASE_URL");
  },
  get supabaseUrl() {
    return req("NEXT_PUBLIC_SUPABASE_URL");
  },
  get supabaseAnonKey() {
    return req("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  },
  get supabaseServiceRoleKey() {
    return req("SUPABASE_SERVICE_ROLE_KEY");
  },
  get evidenceBucket() {
    return process.env.EVIDENCE_BUCKET || "evidence";
  },
  /** Comma-separated list of emails allowed into the dashboard. */
  get adminEmails(): string[] {
    return req("ADMIN_EMAILS")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
  },
  get runnerApiSecret() {
    const s = req("RUNNER_API_SECRET");
    if (s.length < 32) throw new Error("RUNNER_API_SECRET must be at least 32 characters");
    return s;
  },
  get githubRepository() {
    return req("GITHUB_REPOSITORY_SLUG");
  },
  get githubDispatchToken() {
    return req("GITHUB_DISPATCH_TOKEN");
  },
  get githubWorkflowFile() {
    return process.env.GITHUB_WORKFLOW_FILE || "outreach-run.yml";
  },
  get githubRef() {
    return process.env.GITHUB_WORKFLOW_REF || "main";
  },
  /** Set to "disabled" only in local tests: runs are queued but not dispatched. */
  get githubDispatchMode() {
    return process.env.GITHUB_DISPATCH_MODE === "disabled" ? "disabled" : "github";
  },
  get processingBudgetMinutes() {
    return Math.min(Math.max(int("PROCESSING_BUDGET_MINUTES", 300), 1), 320);
  },
  /** Stop handing out new work this many seconds before the deadline. */
  get newWorkCutoffSeconds() {
    return Math.max(int("NEW_WORK_CUTOFF_SECONDS", 480), 0);
  },
  get heartbeatStaleSeconds() {
    return int("HEARTBEAT_STALE_SECONDS", 120);
  },
  get runnerLostMinutes() {
    return int("RUNNER_LOST_MINUTES", 10);
  },
  get queuedLostMinutes() {
    return int("QUEUED_LOST_MINUTES", 30);
  },
  get servicePageUrl() {
    return process.env.SERVICE_PAGE_URL || "https://devsarun.io/aeo-geo/";
  },
};
