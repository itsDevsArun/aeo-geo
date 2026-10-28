import type { Page } from "playwright";
import type { RunnerApi } from "./api";
import { captureScreenshot, settle, visibleText, type GuardedContext } from "./browser";
import { chooseForm, contactLinks, extractForms, pageSignals } from "./extract";
import { isAllowed, robotsFor } from "./robots";
import { detectConfirmation, detectNoSolicitation, detectPurpose, type FormInfo, type PageFlags } from "../src/shared/forms";
import { containsRequiredLink, validateOutgoingMessage } from "../src/shared/message";
import { REQUIRED_LINK, type EvidenceKind } from "../src/shared/constants";
import { sameSite } from "../src/shared/urls";
import type { WorkItem } from "../src/shared/runner-api";

type InspectItem = Extract<WorkItem, { type: "inspect" }>;
type AttemptItem = Extract<WorkItem, { type: "dry_run" | "live" }>;

const NAV_TIMEOUT = 30000;
const requireCheckpoint = () => process.env.RUNNER_REQUIRE_CHECKPOINT === "1";

async function shoot(api: RunnerApi, page: Page, meta: { kind: EvidenceKind; candidateId?: string; attemptId?: string }): Promise<string | null> {
  try {
    const bytes = await captureScreenshot(page);
    return await api.uploadEvidence({ ...meta, pageUrl: page.url() }, bytes, "image/jpeg");
  } catch (e) {
    await api.evidenceFailure({ ...meta, pageUrl: page.url(), error: e instanceof Error ? e.message.slice(0, 500) : String(e) });
    return null;
  }
}

function buildFlags(form: FormInfo, url: string, signals: { captchaKinds: string[]; multiStep: boolean }, text: string, robotsDisallowed: boolean): PageFlags {
  const excerpt = detectNoSolicitation(text);
  const consentRequired = form.fields.some((f) => f.required && f.type === "checkbox" && /terms|privacy|consent|agree|gdpr|policy|marketing|accept/i.test(`${f.label} ${f.name}`));
  return {
    captcha: signals.captchaKinds.length > 0,
    captcha_kinds: signals.captchaKinds,
    no_solicitation: !!excerpt,
    ...(excerpt ? { no_solicitation_excerpt: excerpt.slice(0, 500) } : {}),
    consent_required: consentRequired,
    login_required: form.fields.some((f) => f.type === "password"),
    purpose: detectPurpose(form, url),
    robots_disallowed: robotsDisallowed,
    file_upload_required: form.fields.some((f) => f.type === "file" && f.required),
    multi_step: signals.multiStep,
  };
}

/** Discovery: visit the official site, find a contact page and its form, capture evidence. */
export async function inspectCandidate(g: GuardedContext, api: RunnerApi, item: InspectItem): Promise<void> {
  const page = await g.context.newPage();
  g.setAllowedSite(item.url);
  const base = { candidateId: item.candidateId };
  try {
    const origin = new URL(item.url).origin;
    const robots = await robotsFor(g.context, origin);
    if (!isAllowed(robots, "/")) {
      await api.inspection({ ...base, status: "blocked", error: "robots.txt disallows automated access to the site" });
      return;
    }
    const res = await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
    await settle(page);
    if (!sameSite(page.url(), item.url)) throw new Error("Homepage redirected off-site");
    await api.event("page_opened", `Opened homepage (HTTP ${res?.status() ?? "?"})`, { candidateId: item.candidateId, data: { url: page.url() } });
    const homeText = await visibleText(page);
    const links = (await contactLinks(page)).filter((l) => sameSite(l.href, item.url)).slice(0, 3);
    const toTry = [...links.map((l) => l.href), page.url()];
    if (links.length === 0) toTry.unshift(`${origin}/contact`, `${origin}/contact-us`);

    let chosen: { url: string; form: FormInfo; formsFound: number; title: string } | null = null;
    let lastUrl = page.url();
    let formsFoundTotal = 0;
    for (const url of [...new Set(toTry)]) {
      const path = new URL(url).pathname;
      if (!isAllowed(robots, path)) continue;
      if (url !== page.url()) {
        const r = await page.goto(url, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT }).catch(() => null);
        if (!r || r.status() >= 400) continue;
        await settle(page);
        if (!sameSite(page.url(), item.url)) continue;
      }
      lastUrl = page.url();
      const forms = await extractForms(page);
      formsFoundTotal += forms.length;
      const form = chooseForm(forms);
      if (form) {
        chosen = { url: page.url(), form, formsFound: forms.length, title: await page.title() };
        break;
      }
    }
    if (!chosen) {
      const shotId = await shoot(api, page, { kind: "inspection", ...base });
      await api.inspection({ ...base, status: "no_form", contactUrl: lastUrl, finalUrl: page.url(), pageTitle: (await page.title()).slice(0, 500), formsFound: formsFoundTotal, screenshotEvidenceId: shotId ?? undefined });
      return;
    }
    await api.event("contact_page_found", `Contact page found`, { candidateId: item.candidateId, data: { url: chosen.url } });
    const signals = await pageSignals(page, chosen.form.selector);
    const text = `${await visibleText(page)}\n${homeText}`;
    const flags = buildFlags(chosen.form, chosen.url, signals, text, !isAllowed(robots, new URL(chosen.url).pathname));
    const shotId = await shoot(api, page, { kind: "inspection", ...base });
    await api.inspection({
      ...base,
      status: flags.captcha || flags.no_solicitation ? "blocked" : "inspected",
      contactUrl: chosen.url,
      finalUrl: page.url(),
      pageTitle: chosen.title.slice(0, 500),
      form: chosen.form,
      formsFound: chosen.formsFound,
      flags,
      screenshotEvidenceId: shotId ?? undefined,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message.split("\n")[0].slice(0, 500) : String(e);
    await api.inspection({ ...base, status: "error", error: msg }).catch(() => undefined);
  } finally {
    await page.close().catch(() => undefined);
  }
}

/** Re-verify the reviewed adapter still matches the live page. Returns a problem or null. */
async function preflight(page: Page, item: AttemptItem): Promise<string | null> {
  if (!sameSite(page.url(), item.formUrl)) return "Form page redirected off-site";
  if (!(await page.$(item.formSelector))) return "Reviewed form not found on page (site changed)";
  const signals = await pageSignals(page, item.formSelector);
  if (signals.captchaKinds.length) return `CAPTCHA/anti-bot now present (${signals.captchaKinds.join(", ")})`;
  if (signals.multiStep) return "Form is multi-step";
  const text = await visibleText(page);
  if (detectNoSolicitation(text)) return "No-solicitation notice present";
  for (const m of item.mapping) {
    if (m.role === "skip") continue;
    const loc = page.locator(m.selector);
    if ((await loc.count()) !== 1) return `Mapped field "${m.label}" not found uniquely`;
    if (!(await loc.isVisible())) return `Mapped field "${m.label}" is not visible`;
  }
  if (!item.submitSelector || (await page.locator(item.submitSelector).count()) !== 1) return "Submit button not found";
  const v = validateOutgoingMessage({ subject: item.subject, body: item.message });
  if (!v.ok) return `Message failed validation: ${v.errors.join("; ")}`;
  return null;
}

async function fillForm(page: Page, item: AttemptItem): Promise<{ values: Record<string, string>; problem: string | null }> {
  const values: Record<string, string> = {};
  for (const m of item.mapping) {
    const value = item.fieldValues[m.selector];
    if (m.role === "skip" || value === undefined) continue;
    const loc = page.locator(m.selector);
    const tag = await loc.evaluate((el) => el.tagName.toLowerCase());
    if (tag === "select") {
      await loc.selectOption({ label: value }).catch(async () => loc.selectOption(value));
    } else {
      await loc.fill(value, { timeout: 10000 });
      const actual = await loc.inputValue();
      if (actual !== value) {
        if (m.role === "message" && !containsRequiredLink(actual)) return { values, problem: `Message field truncated the text; the required link ${REQUIRED_LINK} would be lost` };
        if (m.role === "message") return { values, problem: "Message field altered the text (length limit?)" };
        return { values, problem: `Field "${m.label}" did not accept the value` };
      }
    }
    values[`${m.label || m.selector} [${m.role}]`] = value;
  }
  return { values, problem: null };
}

/**
 * Dry run: verify the adapter; type into fields only on explicitly allowed test domains; never submit.
 * Live: fill, screenshot, pass the server submit gate, click once, observe, screenshot.
 */
export async function processAttempt(g: GuardedContext, api: RunnerApi, item: AttemptItem): Promise<string> {
  const page = await g.context.newPage();
  g.setAllowedSite(item.formUrl);
  const meta = { candidateId: item.candidateId, attemptId: item.attemptId };
  const live = item.type === "live";
  let gatePassed = false;
  try {
    await page.goto(item.formUrl, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
    await settle(page);
    await api.event("page_opened", "Opened form page", { ...meta, data: { url: page.url() } });
    const problem = await preflight(page, item);
    if (problem) {
      await shoot(api, page, { kind: "inspection", ...meta });
      await api.attempt({ attemptId: item.attemptId, status: live ? "failed_before_submit" : "dry_run_failed", error: problem, adapterIssue: problem, finalUrl: page.url() });
      return live ? "failed_before_submit" : "dry_run_failed";
    }
    if (!item.fillAllowed) {
      // Dry run on a real business site: never type into a third-party form.
      await shoot(api, page, { kind: "inspection", ...meta });
      await api.attempt({ attemptId: item.attemptId, status: "dry_run_ok", finalUrl: page.url(), error: "Selectors verified; fields not typed (domain not in dry-run fill list); not submitted" });
      return "dry_run_ok";
    }
    const filled = await fillForm(page, item);
    if (filled.problem) {
      await shoot(api, page, { kind: "filled", ...meta });
      await api.attempt({ attemptId: item.attemptId, status: live ? "failed_before_submit" : "dry_run_failed", error: filled.problem, adapterIssue: filled.problem, finalUrl: page.url() });
      return live ? "failed_before_submit" : "dry_run_failed";
    }
    await api.attempt({ attemptId: item.attemptId, status: "filled", fieldValues: filled.values });
    await shoot(api, page, { kind: "filled", ...meta });
    if (!live) {
      await api.attempt({ attemptId: item.attemptId, status: "dry_run_ok", finalUrl: page.url(), error: "Fields filled on allowed test domain; not submitted (dry run)" });
      return "dry_run_ok";
    }
    const before = { text: await visibleText(page), url: page.url() };
    try {
      await api.attempt({ attemptId: item.attemptId, status: "submitting" });
    } catch (e) {
      await api.attempt({ attemptId: item.attemptId, status: "failed_before_submit", error: `Submit gate refused: ${e instanceof Error ? e.message : e}` }).catch(() => undefined);
      return "failed_before_submit";
    }
    // GitHub-only mode: the reservation (status "submitting") must be pushed to the
    // private state branch BEFORE clicking, so a crash can never lose the record.
    if (requireCheckpoint() && !(await api.checkpoint(`pre-submit ${item.attemptId}`))) {
      await api.attempt({ attemptId: item.attemptId, status: "failed_before_submit", gateAborted: true, error: "Could not persist the reservation to the state branch; NOT submitted" }).catch(() => undefined);
      return "failed_before_submit";
    }
    gatePassed = true;
    let clickError: string | null = null;
    try {
      await Promise.all([
        page.waitForLoadState("load", { timeout: 20000 }).catch(() => undefined),
        page.locator(item.submitSelector).click({ timeout: 10000, noWaitAfter: false }),
      ]);
    } catch (e) {
      clickError = e instanceof Error ? e.message.split("\n")[0] : String(e);
    }
    await settle(page, 8000);
    await page.waitForTimeout(2000);
    const after = { text: await visibleText(page), url: page.url() };
    const result = clickError ? { status: "error_after_submit" as const, text: null } : detectConfirmation(before, after);
    await shoot(api, page, { kind: "post_attempt", ...meta });
    await api.attempt({
      attemptId: item.attemptId,
      status: result.status,
      finalUrl: after.url,
      confirmationText: result.text ?? undefined,
      error: clickError ? `Submit click error (outcome unknown, not retried): ${clickError}` : result.status === "unclear" ? "No new success marker observed" : undefined,
    });
    if (requireCheckpoint()) await api.checkpoint(`post-attempt ${item.attemptId}`);
    return result.status;
  } catch (e) {
    const msg = e instanceof Error ? e.message.split("\n")[0].slice(0, 500) : String(e);
    if (gatePassed) {
      await api.attempt({ attemptId: item.attemptId, status: "error_after_submit", error: `Error after submit gate (not retried): ${msg}`, finalUrl: page.url() }).catch(() => undefined);
      return "error_after_submit";
    }
    await shoot(api, page, { kind: "inspection", ...meta }).catch(() => undefined);
    await api.attempt({ attemptId: item.attemptId, status: live ? "failed_before_submit" : "dry_run_failed", error: msg }).catch(() => undefined);
    return "error";
  } finally {
    await page.close().catch(() => undefined);
  }
}
