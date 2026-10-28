/** The exact service link every outgoing message must contain. */
export const REQUIRED_LINK = "https://devsarun.io/aeo-geo/";

/** The service page whose current offer the templates must reflect. */
export const SERVICE_PAGE_URL = "https://devsarun.io/aeo-geo/";

/** Sentence the owner explicitly does not want in outreach messages. */
export const FORBIDDEN_SENTENCE = "AI mentions, rankings, leads and revenue are not guaranteed.";

export const RUNNER_USER_AGENT_TOKEN = "DevsArunOutreachBot";

export const RUN_MODES = ["discovery", "dry_run", "live"] as const;
export type RunMode = (typeof RUN_MODES)[number];

export const ACTIVE_RUN_STATUSES = ["queued", "running", "stopping"] as const;

export const FIELD_ROLES = [
  "name",
  "first_name",
  "last_name",
  "company",
  "email",
  "phone",
  "website",
  "subject",
  "message",
  "fixed",
  "skip",
] as const;
export type FieldRole = (typeof FIELD_ROLES)[number];

/** Attempt statuses that are terminal outcomes reported by the runner. */
export const ATTEMPT_RESULT_STATUSES = [
  "confirmed",
  "unclear",
  "error_after_submit",
  "failed_before_submit",
  "dry_run_ok",
  "dry_run_failed",
] as const;
export type AttemptResultStatus = (typeof ATTEMPT_RESULT_STATUSES)[number];

export const EVIDENCE_KINDS = ["inspection", "filled", "post_attempt"] as const;
export type EvidenceKind = (typeof EVIDENCE_KINDS)[number];

export const MAX_EVIDENCE_BYTES = 4 * 1024 * 1024;
