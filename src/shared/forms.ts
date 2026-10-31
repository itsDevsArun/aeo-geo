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
  maxLength?: number;
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
  { role: "zip", re: /\bzip\b|zip ?code|postal|post ?code|postcode|pin ?code/ },
  { role: "city", re: /\bcity\b|\btown\b|suburb/ },
  { role: "state", re: /\bstate\b|province|region/ },
  { role: "country", re: /\bcountry\b/ },
  { role: "address", re: /address|street/ },
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
  const lab = f.label.toLowerCase().replace(/[*:()]|required/g, "").trim();
  if (lab === "first") return "first_name";
  if (lab === "last") return "last_name";
  if (/e-?mail/.test(hay) && !/address/.test(lab.replace(/e-?mail address/, ""))) return "email";
  if (f.tag === "textarea") {
    if (/address/.test(hay) && !/message|enquiry|inquiry/.test(hay)) return "address";
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

/**
 * For a required choice (dropdown / radio group / checkbox group) pick an option that is TRUE
 * for an unsolicited vendor enquiry, or null if none is clearly true (then: manual review).
 */
export function neutralOption(options: string[], question = ""): string | null {
  const opts = options.map((o) => o.trim()).filter((o) => o && !/^(-+|select|choose|please (select|choose)|--.*--)/i.test(o));
  const find = (re: RegExp) => opts.find((o) => re.test(o.toLowerCase())) ?? null;
  const all = `${question} ${opts.join(" | ")}`.toLowerCase();
  if (opts.some((o) => /^e-?mail$/i.test(o)) && opts.some((o) => /phone|call|text/i.test(o))) return find(/^e-?mail$/); // preferred contact method
  if (opts.some((o) => /^mobile|^cell/i.test(o)) && opts.some((o) => /land ?line|home|office|work/i.test(o))) return find(/^mobile|^cell/); // phone type
  if (/hear about|find us|referr|how did you|source/.test(all) || (opts.some((o) => /google|facebook|friend|referral|yelp/i.test(o)) && find(/^other/))) {
    return find(/^(other|internet|online|web search|website|search engine)\b/);
  }
  if (/best time|time to (call|contact)/.test(all)) return find(/^(any ?time|any|no preference|either)\b/);
  if (/new customer|existing customer|current customer|homeowner|property owner|are you an?/.test(all)) return null; // would be untrue either way
  // Service / reason / project type: only an explicit general or "other" choice is honest.
  return find(/^(general( (inquiry|enquiry|question|information))?|other( (inquiry|enquiry|service|services|question))?|question|business inquiry|partnership|vendor|other services)$/);
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
export function analyzeForm(form: FormInfo, flags: PageFlags, sender?: SenderIdentity): FormAnalysis {
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
  // Required radio/checkbox groups (same name): choose a truthful neutral option or skip the form.
  const groups = new Map<string, FieldInfo[]>();
  for (const f of form.fields) if ((f.type === "radio" || f.type === "checkbox") && f.visible && !isHoneypot(f)) {
    const key = f.name || f.selector;
    groups.set(key, [...(groups.get(key) ?? []), f]);
  }
  const handled = new Set<string>();
  for (const [, g] of groups) {
    if (g.length < 2 || !g.some((f) => f.required)) continue;
    if (g.some((f) => /terms|privacy|consent|agree|gdpr|policy|marketing|accept/i.test(`${f.label} ${f.name}`))) continue; // handled below (blocked)
    const pick = neutralOption(g.map((f) => f.label), form.text.slice(0, 2000));
    for (const f of g) handled.add(f.selector);
    if (!pick) { reasons.push(`Required choice (${g.map((f) => f.label).slice(0, 4).join(" / ")}) has no truthful option`); continue; }
    const chosen = g.find((f) => f.label.trim() === pick)!;
    mapping.push({ selector: chosen.selector, role: "fixed", required: true, label: `${chosen.label} (${chosen.type})`, value: "check" });
  }
  for (const f of form.fields) {
    if (handled.has(f.selector)) continue;
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
    if (f.tag === "select") {
      const pick = f.required ? neutralOption(f.options ?? [], f.label) : null;
      if (f.required && !pick) reasons.push(`Required dropdown "${f.label || f.name}" has no truthful option`);
      mapping.push(pick ? { selector: f.selector, role: "fixed", required: true, label: f.label || f.name, value: pick } : { selector: f.selector, role: "skip", required: f.required, label: f.label || f.name });
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
    const senderKey = { last_name: "lastName", city: "city", state: "state", zip: "zip", address: "address", country: "country" }[role as string] as keyof SenderIdentity | undefined;
    if (senderKey && f.required && !(sender?.[senderKey] ?? "").toString().trim()) {
      reasons.push(`Required ${role.replace("_", " ")} field "${f.label || f.name}": set sender ${senderKey} in campaign.json to allow this form`);
    }
    if (senderKey && !f.required) {
      mapping.push({ selector: f.selector, role: "skip", required: false, label: f.label || f.name || f.placeholder });
      continue;
    }
    mapping.push({ selector: f.selector, role, required: f.required, label: f.label || f.name || f.placeholder });
  }
  if (!hasMessage) reasons.push("No message field detected");
  if (!hasEmail) reasons.push("No email field detected");
  if (!form.submitSelector) reasons.push("No submit button detected");
  const status = blocking.length || reasons.length ? "needs_manual" : "proposed";
  return { mapping, status, reasons: [...new Set(reasons)], blocking: [...new Set(blocking)] };
}

/** Check a (possibly human-edited) mapping is complete enough to automate. */
export function validateMapping(mapping: MappingEntry[], sender?: SenderIdentity): string[] {
  const errors: string[] = [];
  const roles = mapping.map((m) => m.role);
  if (!roles.includes("message")) errors.push("Mapping must include a message field");
  if (!roles.includes("email")) errors.push("Mapping must include an email field");
  for (const m of mapping) {
    if (m.required && m.role === "skip") errors.push(`Required field "${m.label}" is not mapped`);
    if (m.role === "fixed" && !(m.value ?? "").trim()) errors.push(`Fixed field "${m.label}" needs a value`);
    const key = { last_name: "lastName", city: "city", state: "state", zip: "zip", address: "address", country: "country" }[m.role as string] as keyof SenderIdentity | undefined;
    if (key && m.required && sender && !(sender[key] ?? "").toString().trim()) errors.push(`Field "${m.label}" needs sender ${key} in campaign.json`);
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
      return s.lastName ? `${s.name} ${s.lastName}` : s.name;
    case "first_name":
      return s.name;
    case "last_name":
      return s.lastName || null;
    case "city":
      return s.city || null;
    case "state":
      return s.state || null;
    case "zip":
      return s.zip || null;
    case "address":
      return s.address || null;
    case "country":
      return s.country || null;
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
  /\b(we('ve| have) received|(has|have) been (received|sent|submitted|delivered)|received your (message|enquiry|inquiry|request|submission)|submitted successfully|sent successfully|message (was )?delivered|someone will (be in touch|contact you|get back)|we appreciate (you|your)|your (request|enquiry|inquiry|submission) (has been|was) (received|sent|submitted)|success!|thank(s| you)( so much)?( for (contacting|reaching out|your (message|enquiry|inquiry|submission)|getting in touch))?|message (has been |was )?(sent|received|submitted)|we('ll| will) (be in touch|get back|contact you|respond)|successfully (sent|submitted)|submission (received|successful)|enquiry (received|sent)|inquiry (received|sent)|form (submitted|received))\b/i;
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
