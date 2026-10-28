import type { FieldRole } from "./constants";
import type { SenderIdentity } from "./message";

/** Descriptor of a form control, extracted by the runner from an untrusted page. */
export interface FieldInfo {
  selector: string;
  tag: string; // input | textarea | select
  type: string; // text, email, tel, checkbox, hidden, ...
  name: string;
  id: string;
  label: string;
  placeholder: string;
  autocomplete: string;
  required: boolean;
  visible: boolean;
  options?: string[];
}

export interface FormInfo {
  selector: string;
  action: string;
  method: string;
  text: string; // visible text inside the form (headings, labels, buttons)
  submitSelector: string;
  submitText: string;
  fields: FieldInfo[];
}

export interface PageFlags {
  captcha: boolean;
  captcha_kinds: string[];
  no_solicitation: boolean;
  no_solicitation_excerpt?: string;
  consent_required: boolean;
  login_required: boolean;
  purpose: FormPurpose;
  robots_disallowed: boolean;
  file_upload_required: boolean;
  multi_step: boolean;
}

export type FormPurpose =
  | "general_enquiry"
  | "job_application"
  | "booking"
  | "patient_intake"
  | "complaint"
  | "emergency"
  | "support"
  | "newsletter"
  | "login"
  | "search"
  | "quote_request"
  | "unknown";

export interface MappingEntry {
  selector: string;
  role: FieldRole;
  required: boolean;
  label: string;
  /** Only for role "fixed": a human-reviewed value. */
  value?: string;
}

const ROLE_RULES: { role: FieldRole; re: RegExp }[] = [
  { role: "email", re: /e-?mail/ },
  { role: "phone", re: /phone|mobile|tel\b|telephone|whatsapp|contact number|cell/ },
  { role: "first_name", re: /first[ _-]?name|given[ _-]?name|fname/ },
  { role: "last_name", re: /last[ _-]?name|surname|family[ _-]?name|lname/ },
  { role: "company", re: /company|organi[sz]ation|business name|firm|brand/ },
  { role: "website", re: /website|web site|\burl\b|domain|site address/ },
  { role: "subject", re: /subject|topic|regarding|title/ },
  { role: "message", re: /message|comment|enquiry|inquiry|question|details|how can we help|tell us|description|requirement/ },
  { role: "name", re: /\bname\b|full[ _-]?name|your[ _-]?name/ },
];

const HONEYPOT = /honey|hp_|_hp\b|\bhp\b|bot[-_]?field|leave (this )?(field )?(blank|empty)|do not fill|antispam|nospam|trap/i;

export function isHoneypot(f: FieldInfo): boolean {
  if (!f.visible) return true;
  return HONEYPOT.test(`${f.name} ${f.id} ${f.label} ${f.placeholder}`);
}

/** Heuristic role for a visible field. Returns null if unknown. */
export function classifyField(f: FieldInfo): FieldRole | null {
  if (f.type === "email") return "email";
  if (f.type === "tel") return "phone";
  if (f.type === "url") return "website";
  const ac = f.autocomplete.toLowerCase();
  if (ac === "email") return "email";
  if (ac === "tel") return "phone";
  if (ac === "given-name") return "first_name";
  if (ac === "family-name") return "last_name";
  if (ac === "organization") return "company";
  if (ac === "name") return "name";
  if (ac === "url") return "website";
  const hay = `${f.label} ${f.name} ${f.id} ${f.placeholder}`.toLowerCase().replace(/[_\-[\]]+/g, " ");
  if (f.tag === "textarea") {
    if (/address/.test(hay) && !/message|enquiry|inquiry/.test(hay)) return null;
    return "message";
  }
  for (const { role, re } of ROLE_RULES) if (re.test(hay)) return role;
  return null;
}

const NO_SOLICITATION =
  /\b(no (solicitation|soliciting|solicitors|sales (calls|pitches|enquiries|inquiries)|marketing (messages|enquiries|inquiries)|vendors?)|do not (solicit|send (us )?(marketing|sales|promotional))|not (for|intended for) (solicitation|sales|marketing|vendors)|we do not accept (unsolicited|vendor|sales|marketing)|unsolicited (offers|proposals|sales|marketing|emails?) (are|will) (not|be ignored)|solicitations? (are|is) not (accepted|welcome|permitted))\b/i;

export function detectNoSolicitation(text: string): string | null {
  const m = NO_SOLICITATION.exec(text);
  if (!m) return null;
  const start = Math.max(0, m.index - 80);
  return text.slice(start, m.index + m[0].length + 80).replace(/\s+/g, " ").trim();
}

const PURPOSE_RULES: { purpose: FormPurpose; re: RegExp }[] = [
  { purpose: "emergency", re: /\bemergenc(y|ies)\b|\b911\b|urgent (care|help)/ },
  { purpose: "patient_intake", re: /\bpatient\b|medical history|date of birth|symptom|insurance (provider|id)|intake form/ },
  { purpose: "job_application", re: /\b(apply|application|resume|résumé|cv|careers?|job|position|vacanc)/ },
  { purpose: "booking", re: /\b(book(ing)? (an? )?(appointment|table|session|now)|schedule (an? )?(appointment|visit)|reservation|preferred (date|time)|check-?in|check-?out)\b/ },
  { purpose: "complaint", re: /\b(complaint|grievance|report (a|an) (issue|problem)|feedback about (your|our) (order|experience))\b/ },
  { purpose: "support", re: /\b(support ticket|order (number|id|#)|ticket|warranty claim|tracking number|account number|customer id)\b/ },
  { purpose: "login", re: /\b(log ?in|sign ?in|password|forgot password)\b/ },
  { purpose: "newsletter", re: /\b(subscribe|newsletter|mailing list)\b/ },
  { purpose: "quote_request", re: /\b(get a quote|request a quote|free quote|estimate)\b/ },
  { purpose: "general_enquiry", re: /\b(contact|enquir|inquir|get in touch|message|reach us|talk to us|send us)/ },
];

export function detectPurpose(form: FormInfo, pageUrl: string): FormPurpose {
  const fieldText = form.fields.map((f) => `${f.label} ${f.name} ${f.placeholder}`).join(" ");
  const hasPassword = form.fields.some((f) => f.type === "password");
  if (hasPassword) return "login";
  if (form.fields.some((f) => f.type === "search") || /\bsearch\b/i.test(form.submitText)) return "search";
  const hay = `${form.text} ${fieldText} ${form.submitText} ${pageUrl}`.toLowerCase();
  for (const { purpose, re } of PURPOSE_RULES) if (re.test(hay)) return purpose;
  return "unknown";
}

export interface FormAnalysis {
  mapping: MappingEntry[];
  status: "proposed" | "needs_manual";
  reasons: string[];
  blocking: string[]; // reasons that make automation impossible regardless of mapping
}

/** Purposes that must never receive promotional messages. */
export const DISALLOWED_PURPOSES: FormPurpose[] = [
  "job_application",
  "booking",
  "patient_intake",
  "complaint",
  "emergency",
  "support",
  "newsletter",
  "login",
  "search",
];

/** Propose a mapping and decide whether the form needs manual review. */
export function analyzeForm(form: FormInfo, flags: PageFlags): FormAnalysis {
  const reasons: string[] = [];
  const blocking: string[] = [];
  if (flags.robots_disallowed) blocking.push("robots.txt disallows automated access to this page");
  if (flags.captcha) blocking.push(`CAPTCHA / anti-bot present (${flags.captcha_kinds.join(", ") || "detected"})`);
  if (flags.no_solicitation) blocking.push("Website indicates it does not accept solicitation");
  if (flags.login_required) blocking.push("Form requires login");
  if (DISALLOWED_PURPOSES.includes(flags.purpose)) blocking.push(`Form purpose is ${flags.purpose.replace(/_/g, " ")}`);
  if (flags.file_upload_required) blocking.push("Form requires a file upload");

  const mapping: MappingEntry[] = [];
  let hasMessage = false;
  let hasEmail = false;
  for (const f of form.fields) {
    if (["hidden", "submit", "button", "image", "reset", "file", "password"].includes(f.type)) {
      if (f.type === "file" && f.required) blocking.push("Form requires a file upload");
      continue;
    }
    if (isHoneypot(f)) continue; // never fill honeypots or hidden controls
    if (f.type === "checkbox" || f.type === "radio") {
      if (f.required) {
        if (/terms|privacy|consent|agree|gdpr|policy|marketing|accept/i.test(`${f.label} ${f.name}`)) {
          blocking.push("Required consent/terms checkbox — never accepted automatically");
        } else {
          reasons.push(`Required ${f.type} "${f.label || f.name}" needs a reviewed value`);
        }
      }
      mapping.push({ selector: f.selector, role: "skip", required: f.required, label: f.label || f.name });
      continue;
    }
    const role = classifyField(f);
    if (role === "message") hasMessage = true;
    if (role === "email") hasEmail = true;
    if (!role) {
      if (f.required) reasons.push(`Required field "${f.label || f.name || f.placeholder}" is not a standard field`);
      mapping.push({ selector: f.selector, role: "skip", required: f.required, label: f.label || f.name || f.placeholder });
      continue;
    }
    if (role === "last_name" && f.required) reasons.push("Required last-name field: sender last name is not configured");
    if (f.tag === "select" && f.required) reasons.push(`Required dropdown "${f.label || f.name}" needs a reviewed value`);
    mapping.push({
      selector: f.selector,
      role: f.tag === "select" ? "skip" : role,
      required: f.required,
      label: f.label || f.name || f.placeholder,
    });
  }
  if (!hasMessage) reasons.push("No message field detected");
  if (!hasEmail) reasons.push("No email field detected");
  if (!form.submitSelector) reasons.push("No submit button detected");
  const status = blocking.length || reasons.length ? "needs_manual" : "proposed";
  return { mapping, status, reasons: [...new Set(reasons)], blocking: [...new Set(blocking)] };
}

/** Check a (possibly human-edited) mapping is complete enough to automate. */
export function validateMapping(mapping: MappingEntry[]): string[] {
  const errors: string[] = [];
  const roles = mapping.map((m) => m.role);
  if (!roles.includes("message")) errors.push("Mapping must include a message field");
  if (!roles.includes("email")) errors.push("Mapping must include an email field");
  for (const m of mapping) {
    if (m.required && m.role === "skip") errors.push(`Required field "${m.label}" is not mapped`);
    if (m.role === "fixed" && !(m.value ?? "").trim()) errors.push(`Fixed field "${m.label}" needs a value`);
    if (m.role === "last_name") errors.push(`Field "${m.label}": last name is not part of the sender identity; use a reviewed fixed value`);
  }
  return errors;
}

/** Values to type for each mapped role. Never invents facts beyond the sender identity. */
export function valuesForMapping(
  mapping: MappingEntry[],
  sender: SenderIdentity,
  message: { subject: string; body: string },
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of mapping) {
    const v = valueForRole(m, sender, message);
    if (v !== null) out[m.selector] = v;
  }
  return out;
}

function valueForRole(m: MappingEntry, s: SenderIdentity, msg: { subject: string; body: string }): string | null {
  switch (m.role) {
    case "name":
    case "first_name":
      return s.name;
    case "company":
      return s.business;
    case "email":
      return s.email;
    case "phone":
      return s.phone;
    case "website":
      return s.website;
    case "subject":
      return msg.subject;
    case "message":
      return msg.body;
    case "fixed":
      return m.value ?? null;
    default:
      return null;
  }
}

const SUCCESS_MARKERS =
  /\b(thank(s| you)( so much)?( for (contacting|reaching out|your (message|enquiry|inquiry|submission)|getting in touch))?|message (has been |was )?(sent|received|submitted)|we('ll| will) (be in touch|get back|contact you|respond)|successfully (sent|submitted)|submission (received|successful)|enquiry (received|sent)|inquiry (received|sent)|form (submitted|received))\b/i;
const ERROR_MARKERS =
  /\b(this field is required|required field|please (fill|enter|complete|correct)|is (invalid|required)|error (occurred|sending)|failed to send|could not be sent|try again|captcha|verify you are human)\b/i;

export interface ConfirmationResult {
  status: "confirmed" | "unclear" | "error_after_submit";
  text: string | null;
}

/**
 * "Confirmation observed" requires a *new* success marker that was not on the
 * page before submitting. Clicking submit or an HTTP 200 alone is never success.
 */
export function detectConfirmation(before: { text: string; url: string }, after: { text: string; url: string }): ConfirmationResult {
  const beforeText = before.text.replace(/\s+/g, " ");
  const afterText = after.text.replace(/\s+/g, " ");
  const success = SUCCESS_MARKERS.exec(afterText);
  if (success && !SUCCESS_MARKERS.test(beforeText)) {
    return { status: "confirmed", text: excerpt(afterText, success.index, success[0].length) };
  }
  if (success) {
    // Marker existed before: only count it if additional occurrences appeared.
    const countBefore = (beforeText.match(new RegExp(SUCCESS_MARKERS.source, "gi")) ?? []).length;
    const countAfter = (afterText.match(new RegExp(SUCCESS_MARKERS.source, "gi")) ?? []).length;
    if (countAfter > countBefore) return { status: "confirmed", text: excerpt(afterText, success.index, success[0].length) };
  }
  if (after.url !== before.url && /thank|success|sent|confirm/i.test(new URL(after.url).pathname)) {
    return { status: "confirmed", text: `Redirected to ${new URL(after.url).pathname}` };
  }
  const err = ERROR_MARKERS.exec(afterText);
  if (err && !ERROR_MARKERS.test(beforeText)) {
    return { status: "error_after_submit", text: excerpt(afterText, err.index, err[0].length) };
  }
  return { status: "unclear", text: null };
}

function excerpt(text: string, idx: number, len: number): string {
  return text.slice(Math.max(0, idx - 60), idx + len + 100).trim().slice(0, 300);
}
