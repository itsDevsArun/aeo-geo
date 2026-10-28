import type { Page } from "playwright";
import type { FormInfo } from "../src/shared/forms";

export interface PageSignals {
  captchaKinds: string[];
  multiStep: boolean;
}

/**
 * Runs inside the untrusted page. Extracts structural descriptors only; page
 * text is treated as data and never interpreted as instructions.
 */
export async function extractForms(page: Page): Promise<FormInfo[]> {
  return page.evaluate(() => {
    const esc = (s: string) => (window.CSS && CSS.escape ? CSS.escape(s) : s.replace(/[^a-zA-Z0-9_-]/g, "\\$&"));
    const unique = (sel: string) => {
      try {
        return document.querySelectorAll(sel).length === 1;
      } catch {
        return false;
      }
    };
    const cssPath = (el: Element): string => {
      if (el.id && unique(`#${esc(el.id)}`)) return `#${esc(el.id)}`;
      const name = el.getAttribute("name");
      const tag = el.tagName.toLowerCase();
      if (name && unique(`${tag}[name="${name.replace(/"/g, '\\"')}"]`)) return `${tag}[name="${name.replace(/"/g, '\\"')}"]`;
      const parts: string[] = [];
      let node: Element | null = el;
      while (node && node !== document.body && parts.length < 12) {
        const t = node.tagName.toLowerCase();
        const parent: Element | null = node.parentElement;
        if (!parent) break;
        const same = Array.from(parent.children).filter((c) => c.tagName === node!.tagName);
        parts.unshift(same.length > 1 ? `${t}:nth-of-type(${same.indexOf(node) + 1})` : t);
        if (node.id && unique(`#${esc(node.id)}`)) {
          parts[0] = `#${esc(node.id)}`;
          break;
        }
        node = parent;
      }
      return parts.join(" > ");
    };
    const isVisible = (el: HTMLElement) => {
      let n: HTMLElement | null = el;
      while (n) {
        const st = getComputedStyle(n);
        if (st.display === "none" || st.visibility === "hidden" || Number(st.opacity) < 0.05) return false;
        if (n.getAttribute("aria-hidden") === "true") return false;
        n = n.parentElement;
      }
      const r = el.getBoundingClientRect();
      if (r.width < 3 || r.height < 3) return false;
      if (r.right < 0 || r.bottom < -2000 || r.left > window.innerWidth * 2) return false;
      if (el.tabIndex === -1 && (el as HTMLInputElement).type !== "checkbox") return false;
      return true;
    };
    const labelFor = (el: HTMLElement): string => {
      const lab = (el as HTMLInputElement).labels?.[0]?.innerText;
      if (lab) return lab.trim();
      const aria = el.getAttribute("aria-label");
      if (aria) return aria.trim();
      const by = el.getAttribute("aria-labelledby");
      if (by) {
        const t = by.split(/\s+/).map((id) => document.getElementById(id)?.innerText ?? "").join(" ").trim();
        if (t) return t;
      }
      const wrap = el.closest("label");
      if (wrap) return wrap.innerText.trim();
      const prev = el.previousElementSibling as HTMLElement | null;
      if (prev && prev.innerText && prev.innerText.length < 80) return prev.innerText.trim();
      return "";
    };
    const describe = (container: Element) => {
      const controls = Array.from(container.querySelectorAll("input, textarea, select")) as HTMLInputElement[];
      const fields = controls.slice(0, 60).map((el) => ({
        selector: cssPath(el),
        tag: el.tagName.toLowerCase(),
        type: (el.getAttribute("type") || (el.tagName === "INPUT" ? "text" : el.tagName.toLowerCase())).toLowerCase(),
        name: (el.getAttribute("name") || "").slice(0, 200),
        id: (el.id || "").slice(0, 200),
        label: labelFor(el).slice(0, 300),
        placeholder: (el.getAttribute("placeholder") || "").slice(0, 300),
        autocomplete: (el.getAttribute("autocomplete") || "").slice(0, 100),
        required: el.required || el.getAttribute("aria-required") === "true",
        visible: isVisible(el),
        options: el.tagName === "SELECT" ? Array.from((el as unknown as HTMLSelectElement).options).slice(0, 100).map((o) => o.text.slice(0, 200)) : undefined,
      }));
      const buttons = Array.from(container.querySelectorAll('button, input[type="submit"], input[type="image"]')) as HTMLElement[];
      const submit = buttons.find((b) => {
        const t = (b.getAttribute("type") || "submit").toLowerCase();
        return (t === "submit" || t === "image") && isVisible(b);
      });
      return {
        selector: cssPath(container),
        action: (container.getAttribute("action") || "").slice(0, 2000),
        method: (container.getAttribute("method") || "get").toLowerCase().slice(0, 10),
        text: ((container as HTMLElement).innerText || "").slice(0, 5000),
        submitSelector: submit ? cssPath(submit) : "",
        submitText: submit ? ((submit as HTMLInputElement).value || submit.innerText || "").trim().slice(0, 200) : "",
        fields,
      };
    };
    const forms: Element[] = Array.from(document.querySelectorAll("form"));
    // Fallback for script-driven forms without a <form> element.
    for (const ta of Array.from(document.querySelectorAll("textarea"))) {
      if (ta.closest("form")) continue;
      let c: Element | null = ta.parentElement;
      for (let i = 0; c && i < 6; i++, c = c.parentElement) {
        if (c.querySelector('input[type="email"], input[name*="mail" i]') && c.querySelector("button")) {
          if (!forms.includes(c)) forms.push(c);
          break;
        }
      }
    }
    return forms.slice(0, 20).map(describe);
  });
}

export async function pageSignals(page: Page, formSelector?: string): Promise<PageSignals> {
  return page.evaluate((sel) => {
    const kinds = new Set<string>();
    const q = (s: string) => document.querySelector(s);
    if (q('iframe[src*="recaptcha"], .g-recaptcha, script[src*="recaptcha"], script[src*="gstatic.com/recaptcha"]')) kinds.add("recaptcha");
    if (q('iframe[src*="hcaptcha"], .h-captcha, script[src*="hcaptcha"]')) kinds.add("hcaptcha");
    if (q('iframe[src*="challenges.cloudflare.com"], .cf-turnstile, script[src*="turnstile"]')) kinds.add("turnstile");
    if (q(".frc-captcha, script[src*='friendlycaptcha']")) kinds.add("friendlycaptcha");
    if (q('[data-sitekey], input[name*="captcha" i], img[src*="captcha" i], img[alt*="captcha" i]')) kinds.add("captcha");
    if (/i'?m not a robot|verify you are human|checking your browser/i.test(document.body?.innerText ?? "")) kinds.add("challenge_text");
    const form = sel ? document.querySelector(sel) : null;
    const btnTexts = form ? Array.from(form.querySelectorAll("button, input[type=button]")).map((b) => ((b as HTMLInputElement).value || (b as HTMLElement).innerText || "").trim().toLowerCase()) : [];
    const multiStep = btnTexts.some((t) => /^(next|continue|next step)\b/.test(t));
    return { captchaKinds: Array.from(kinds), multiStep };
  }, formSelector ?? null);
}

export async function contactLinks(page: Page): Promise<{ href: string; text: string; score: number }[]> {
  const links = await page.$$eval("a[href]", (as) =>
    as.slice(0, 2000).map((a) => ({ href: (a as HTMLAnchorElement).href, text: ((a as HTMLElement).innerText || a.getAttribute("aria-label") || "").trim().slice(0, 100) })),
  );
  const scored = links
    .map((l) => {
      const hay = `${l.text} ${l.href}`.toLowerCase();
      let score = 0;
      if (/\bcontact(-| )?us\b|\/contact-?us/.test(hay)) score += 6;
      else if (/\bcontact\b|\/contact/.test(hay)) score += 5;
      if (/enquir|inquir|get in touch|reach us|talk to us|write to us/.test(hay)) score += 4;
      if (/quote|consult/.test(hay)) score += 1;
      if (/career|job|apply|login|sign ?in|book|appointment|support|complain|privacy|terms|cookie|tel:|mailto:|whatsapp|facebook|instagram|linkedin|twitter/.test(hay)) score -= 8;
      return { ...l, score };
    })
    .filter((l) => l.score > 0 && /^https?:/.test(l.href));
  const seen = new Set<string>();
  return scored
    .sort((a, b) => b.score - a.score)
    .filter((l) => {
      const k = l.href.split("#")[0];
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
}

/** Pick the form most likely to be a general enquiry form (has message + email). */
export function chooseForm(forms: FormInfo[]): FormInfo | null {
  const scored = forms
    .map((f) => {
      const visible = f.fields.filter((x) => x.visible);
      let s = 0;
      if (visible.some((x) => x.tag === "textarea")) s += 5;
      if (visible.some((x) => x.type === "email" || /mail/i.test(`${x.name} ${x.label}`))) s += 3;
      if (visible.some((x) => x.type === "password")) s -= 10;
      if (visible.some((x) => x.type === "search")) s -= 10;
      if (visible.length < 2) s -= 5;
      return { f, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored[0]?.f ?? null;
}
