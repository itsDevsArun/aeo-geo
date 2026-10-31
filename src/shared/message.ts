import { FORBIDDEN_SENTENCE, REQUIRED_LINK } from "./constants";

export interface SenderIdentity {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string;
  /** Optional details some forms require. Empty = forms that need them are skipped. */
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  country?: string;
}

export interface RecipientContext {
  /** Only provided when the business label has been verified by a human. */
  verifiedBusinessName?: string | null;
}

export interface TemplateContent {
  subject: string;
  body: string;
}

export const TEMPLATE_PLACEHOLDERS = [
  "greeting_name",
  "sender_name",
  "sender_business",
  "sender_email",
  "sender_phone",
  "service_link",
] as const;

export const MESSAGE_LIMITS = {
  subjectMax: 120,
  bodyMin: 80,
  bodyMax: 1500,
} as const;

/**
 * Phrases that are blocked because they would be deceptive, overclaiming, or
 * that the owner explicitly asked to remove. Matching is case-insensitive.
 */
const BLOCKED_PATTERNS: { re: RegExp; reason: string }[] = [
  { re: /guarantee/i, reason: "Guarantee wording is not allowed (no guaranteed or 'not guaranteed' claims)." },
  { re: /\b(act now|limited time|last chance|urgent|expires today|only today)\b/i, reason: "False-urgency wording is not allowed." },
  { re: /\b(as (we|i) discussed|following up on our (call|conversation|chat)|as per our (call|conversation)|great (talking|speaking) (to|with) you)\b/i, reason: "Fake-familiarity wording is not allowed." },
  { re: /\b(i (audited|reviewed|analy[sz]ed|checked|noticed)|we (audited|reviewed|analy[sz]ed|checked|noticed)) (your|the) (site|website|pages?)\b/i, reason: "Claims of having reviewed/audited the recipient's website are not allowed without a saved audit." },
  { re: /\byour (site|website) (has|is missing|lacks|is losing)\b/i, reason: "Unverified claims about the recipient's website are not allowed." },
  { re: /\b(#1|number one|top ranking|rank (you )?first|page one)\b/i, reason: "Ranking-outcome claims are not allowed." },
  { re: /\b(case study|our clients (saw|got|achieved)|increased .* by \d+%)\b/i, reason: "Unverified client results or case studies are not allowed." },
];

const DECEPTIVE_SUBJECT = /^\s*(re|fwd?|fw)\s*:/i;

function normalizeSpaces(s: string): string {
  return s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
}

/** True if the exact required link appears as a standalone URL. */
export function containsRequiredLink(text: string): boolean {
  let from = 0;
  for (;;) {
    const idx = text.indexOf(REQUIRED_LINK, from);
    if (idx < 0) return false;
    const before = idx === 0 ? "" : text[idx - 1];
    const after = text[idx + REQUIRED_LINK.length] ?? "";
    const okBefore = before === "" || /[\s(<"':]/.test(before);
    const okAfter = after === "" || /[\s)>"'.,!?;:]/.test(after);
    if (okBefore && okAfter) return true;
    from = idx + 1;
  }
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

/** Server- and runner-side validation of a final, rendered outgoing message. */
export function validateOutgoingMessage(msg: TemplateContent): ValidationResult {
  const errors: string[] = [];
  const subject = msg.subject ?? "";
  const body = msg.body ?? "";

  if (!containsRequiredLink(body)) {
    errors.push(`Message must contain the exact link ${REQUIRED_LINK}`);
  }
  if (normalizeSpaces(body).includes(normalizeSpaces(FORBIDDEN_SENTENCE))) {
    errors.push("Message contains the sentence the owner asked to remove.");
  }
  if (/\{\{[^}]*\}\}/.test(subject) || /\{\{[^}]*\}\}/.test(body)) {
    errors.push("Message contains unresolved placeholders.");
  }
  if (subject.trim().length === 0) errors.push("Subject is required.");
  if (subject.length > MESSAGE_LIMITS.subjectMax) errors.push(`Subject must be at most ${MESSAGE_LIMITS.subjectMax} characters.`);
  if (DECEPTIVE_SUBJECT.test(subject)) errors.push("Subject must not pretend to be a reply or forward.");
  if (body.trim().length < MESSAGE_LIMITS.bodyMin) errors.push(`Message must be at least ${MESSAGE_LIMITS.bodyMin} characters.`);
  if (body.length > MESSAGE_LIMITS.bodyMax) errors.push(`Message must be at most ${MESSAGE_LIMITS.bodyMax} characters.`);
  for (const { re, reason } of BLOCKED_PATTERNS) {
    if (re.test(body) || re.test(subject)) errors.push(reason);
  }
  return { ok: errors.length === 0, errors: [...new Set(errors)] };
}

/** Very small, safe placeholder renderer: {{name}} only, no code execution. */
export function renderTemplate(
  tpl: TemplateContent,
  sender: SenderIdentity,
  recipient: RecipientContext,
): TemplateContent {
  const label = (recipient.verifiedBusinessName ?? "").trim();
  const values: Record<string, string> = {
    greeting_name: label ? `${label} team` : "there",
    sender_name: sender.name,
    sender_business: sender.business,
    sender_email: sender.email,
    sender_phone: sender.phone,
    service_link: REQUIRED_LINK,
  };
  const sub = (s: string) =>
    s.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, (m, key: string) => (key in values ? values[key] : m));
  return { subject: sub(tpl.subject).trim(), body: sub(tpl.body).replace(/\r\n/g, "\n").trim() };
}

/** Validate a template by rendering it with the sender and a neutral recipient. */
export function validateTemplate(tpl: TemplateContent, sender: SenderIdentity): ValidationResult {
  const errors: string[] = [];
  const unknown = [...tpl.body.matchAll(/\{\{\s*([a-z_]+)\s*\}\}/g), ...tpl.subject.matchAll(/\{\{\s*([a-z_]+)\s*\}\}/g)]
    .map((m) => m[1])
    .filter((k) => !(TEMPLATE_PLACEHOLDERS as readonly string[]).includes(k));
  if (unknown.length) errors.push(`Unknown placeholders: ${[...new Set(unknown)].join(", ")}`);
  for (const ctx of [{ verifiedBusinessName: null }, { verifiedBusinessName: "Example Business" }]) {
    const r = validateOutgoingMessage(renderTemplate(tpl, sender, ctx));
    errors.push(...r.errors);
  }
  return { ok: errors.length === 0, errors: [...new Set(errors)] };
}

/**
 * Offer facts are literal strings (e.g. "$199") that a template relies on.
 * Before live sending, every fact must still appear on the service page so
 * outdated pricing is never sent silently.
 */
export function checkOfferFacts(pageText: string, facts: string[]): { ok: boolean; missing: string[] } {
  const hay = pageText.replace(/\s+/g, " ");
  const missing = facts.filter((f) => f.trim() && !hay.includes(f.trim()));
  return { ok: missing.length === 0, missing };
}

export const DEFAULT_TEMPLATES: Record<"short" | "standard", TemplateContent & { name: string; offerFacts: string[] }> = {
  short: {
    name: "Short contact-form version",
    subject: "Free AI-search visibility check for your business",
    body: [
      "Hi {{greeting_name}},",
      "",
      "I'm {{sender_name}} from {{sender_business}}. I help businesses make their service pages clearer for customers and easier for AI search tools like ChatGPT, Gemini and Google AI Overviews to understand.",
      "",
      "Would a free quick AI-search visibility check be useful? Share your website, main service and target customer here and I'll send it by email:",
      "{{service_link}}",
      "",
      "Best,",
      "{{sender_name}}, {{sender_business}}",
      "{{sender_email}}",
    ].join("\n"),
    offerFacts: [],
  },
  standard: {
    name: "Standard contact-form version",
    subject: "Free AI-search visibility check for your business",
    body: [
      "Hi {{greeting_name}},",
      "",
      "I'm {{sender_name}} from {{sender_business}}. I help businesses make their service pages clearer for customers and easier for AI search tools like ChatGPT, Gemini, Perplexity and Google AI Overviews to understand.",
      "",
      "Would a free quick AI-search visibility check be useful for your business? Share your website, main service and target customer here and I'll send it by email:",
      "{{service_link}}",
      "",
      "If it makes sense afterwards, my one-time AEO + GEO Starter ($199, about ₹16,999, negotiable) covers one website: a basic audit, 10 customer questions, improvements to two existing pages, relevant structured data, and a summary action plan with one revision round.",
      "",
      "If this isn't relevant, just let me know and I won't contact you again.",
      "",
      "Best,",
      "{{sender_name}}",
      "{{sender_business}}",
      "{{sender_email}} · {{sender_phone}}",
    ].join("\n"),
    offerFacts: ["$199", "16,999", "negotiable"],
  },
};
