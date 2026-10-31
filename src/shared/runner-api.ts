import { z } from "zod";
import { EVIDENCE_KINDS, FIELD_ROLES } from "./constants";

/** Contracts between the GitHub Actions runner and the dashboard backend. */

export const ClaimRequest = z.object({
  runId: z.string().uuid(),
  githubRunId: z.coerce.number().int().positive().optional(),
  githubRunUrl: z.string().url().max(500).optional(),
});

export const RunScoped = z.object({ runId: z.string().uuid() });

export const HeartbeatRequest = RunScoped.extend({
  note: z.string().max(200).optional(),
});

export const EventInput = z.object({
  type: z.string().regex(/^[a-z_]{2,40}$/),
  message: z.string().max(1000).default(""),
  candidateId: z.string().uuid().optional(),
  attemptId: z.string().uuid().optional(),
  data: z.record(z.string(), z.unknown()).optional(),
});
export const EventsRequest = RunScoped.extend({ events: z.array(EventInput).min(1).max(50) });

export const SearchResultsRequest = RunScoped.extend({
  queryId: z.string().uuid(),
  offset: z.number().int().min(0).max(100),
  moreAvailable: z.boolean(),
  results: z
    .array(
      z.object({
        url: z.string().max(2000),
        title: z.string().max(500).default(""),
        description: z.string().max(2000).default(""),
        rank: z.number().int().min(0).max(1000).optional(),
      }),
    )
    .max(50),
  error: z.string().max(500).optional(),
});

export const FieldInfoSchema = z.object({
  selector: z.string().max(500),
  tag: z.string().max(20),
  type: z.string().max(30),
  name: z.string().max(200),
  id: z.string().max(200),
  label: z.string().max(300),
  placeholder: z.string().max(300),
  autocomplete: z.string().max(100),
  required: z.boolean(),
  visible: z.boolean(),
  options: z.array(z.string().max(200)).max(100).optional(),
  maxLength: z.number().int().min(0).max(1_000_000).optional(),
});

export const FormInfoSchema = z.object({
  selector: z.string().max(500),
  action: z.string().max(2000),
  method: z.string().max(10),
  text: z.string().max(5000),
  submitSelector: z.string().max(500),
  submitText: z.string().max(200),
  fields: z.array(FieldInfoSchema).max(60),
});

export const PageFlagsSchema = z.object({
  captcha: z.boolean(),
  captcha_kinds: z.array(z.string().max(50)).max(10),
  no_solicitation: z.boolean(),
  no_solicitation_excerpt: z.string().max(500).optional(),
  consent_required: z.boolean(),
  login_required: z.boolean(),
  purpose: z.string().max(40),
  robots_disallowed: z.boolean(),
  file_upload_required: z.boolean(),
  multi_step: z.boolean(),
});

export const InspectionRequest = RunScoped.extend({
  candidateId: z.string().uuid(),
  status: z.enum(["inspected", "no_form", "blocked", "error"]),
  error: z.string().max(1000).optional(),
  contactUrl: z.string().max(2000).optional(),
  finalUrl: z.string().max(2000).optional(),
  pageTitle: z.string().max(500).default(""),
  form: FormInfoSchema.optional(),
  formsFound: z.number().int().min(0).max(100).default(0),
  flags: PageFlagsSchema.optional(),
  screenshotEvidenceId: z.string().uuid().optional(),
});

export const WorkRequest = RunScoped.extend({
  skipSearch: z.boolean().optional(),
  /** Which search providers the runner can use right now. Default: all. */
  providers: z.array(z.enum(["brave", "osm"])).optional(),
});

export const AttemptUpdateRequest = RunScoped.extend({
  attemptId: z.string().uuid(),
  status: z.enum(["filled", "submitting", "confirmed", "unclear", "error_after_submit", "failed_before_submit", "dry_run_ok", "dry_run_failed"]),
  finalUrl: z.string().max(2000).optional(),
  confirmationText: z.string().max(1000).optional(),
  error: z.string().max(2000).optional(),
  fieldValues: z.record(z.string(), z.string().max(3000)).optional(),
  adapterIssue: z.string().max(500).optional(),
  /** Runner could not durably persist the reservation, so it did NOT click submit. */
  gateAborted: z.boolean().optional(),
});

export const EvidenceFailureRequest = RunScoped.extend({
  kind: z.enum(EVIDENCE_KINDS),
  candidateId: z.string().uuid().optional(),
  attemptId: z.string().uuid().optional(),
  pageUrl: z.string().max(2000).optional(),
  error: z.string().max(1000),
});

export const FinishRequest = RunScoped.extend({
  reason: z.enum(["queue_exhausted", "deadline", "stop_requested", "cancel_requested", "limit_reached", "error", "offer_changed", "server_stop"]),
  error: z.string().max(2000).optional(),
});

export const MappingEntrySchema = z.object({
  selector: z.string().min(1).max(500),
  role: z.enum(FIELD_ROLES),
  required: z.boolean(),
  label: z.string().max(300),
  value: z.string().max(500).optional(),
});

/** Work items handed to the runner. */
export type WorkItem =
  | { type: "stop"; reason: string }
  | { type: "none"; reason: string }
  | { type: "search"; queryId: string; query: string; offset: number; country: string; language: string }
  | { type: "inspect"; candidateId: string; url: string; domain: string }
  | {
      type: "dry_run" | "live";
      attemptId: string;
      candidateId: string;
      domain: string;
      formUrl: string;
      formSelector: string;
      submitSelector: string;
      mapping: z.infer<typeof MappingEntrySchema>[];
      fieldValues: Record<string, string>;
      subject: string;
      message: string;
      fillAllowed: boolean;
    };

export interface ClaimResponse {
  runToken: string;
  run: { id: string; mode: "discovery" | "dry_run" | "live"; deadlineAt: string; campaignId: string };
  campaign: { minDelaySeconds: number; maxLiveAttempts: number };
  offerCheck: { required: boolean; url: string; facts: string[] };
}

export interface HeartbeatResponse {
  stopRequested: boolean;
  cancelRequested: boolean;
  deadlineAt: string;
  status: string;
}
