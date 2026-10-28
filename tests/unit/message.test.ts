import { describe, expect, it } from "vitest";
import { FORBIDDEN_SENTENCE, REQUIRED_LINK } from "@/shared/constants";
import { checkOfferFacts, containsRequiredLink, DEFAULT_TEMPLATES, renderTemplate, validateOutgoingMessage, validateTemplate } from "@/shared/message";

const sender = { name: "Arun", business: "Devs Arun", email: "itsdevsarun@gmail.com", phone: "+91 76673 11203", website: "https://devsarun.io/aeo-geo/" };

describe("required link rule", () => {
  it("detects the exact standalone link", () => {
    expect(containsRequiredLink(`See ${REQUIRED_LINK} now`)).toBe(true);
    expect(containsRequiredLink(`See ${REQUIRED_LINK}.`)).toBe(true);
    expect(containsRequiredLink(`(${REQUIRED_LINK})`)).toBe(true);
    expect(containsRequiredLink(REQUIRED_LINK)).toBe(true);
  });
  it("rejects missing, altered or extended links", () => {
    expect(containsRequiredLink("https://devsarun.io/")).toBe(false);
    expect(containsRequiredLink("https://devsarun.io/aeo-geo")).toBe(false);
    expect(containsRequiredLink("http://devsarun.io/aeo-geo/")).toBe(false);
    expect(containsRequiredLink("https://devsarun.io/aeo-geo/extra")).toBe(false);
    expect(containsRequiredLink("xhttps://devsarun.io/aeo-geo/")).toBe(false);
  });
  it("blocks a message without the link", () => {
    const r = validateOutgoingMessage({ subject: "Hello", body: "Hi there, I'm Arun from Devs Arun. Would a free quick visibility check be useful for your business? Reply anytime." });
    expect(r.ok).toBe(false);
    expect(r.errors.join(" ")).toContain(REQUIRED_LINK);
  });
});

describe("content rules", () => {
  const base = `Hi there,\n\nI'm Arun from Devs Arun. Would a free quick AI-search visibility check be useful? Share details here: ${REQUIRED_LINK}\n\nBest, Arun`;
  it("accepts the default templates for both versions", () => {
    for (const t of Object.values(DEFAULT_TEMPLATES)) {
      const r = validateTemplate(t, sender);
      expect(r.errors).toEqual([]);
      const out = renderTemplate(t, sender, { verifiedBusinessName: null });
      expect(out.body).toContain(REQUIRED_LINK);
      expect(out.body).not.toContain(FORBIDDEN_SENTENCE);
      expect(out.body.startsWith("Hi there,")).toBe(true);
    }
  });
  it("standard template reflects the verified offer", () => {
    const body = DEFAULT_TEMPLATES.standard.body;
    expect(body).toContain("$199");
    expect(body).toContain("16,999");
    expect(body).toContain("negotiable");
    expect(body).toContain("10 customer questions");
    expect(body).toContain("one revision round");
  });
  it("blocks the forbidden sentence, even with curly quotes / spacing", () => {
    const r = validateOutgoingMessage({ subject: "Hi", body: `${base}\nAI mentions, rankings,  leads and revenue are not guaranteed.` });
    expect(r.ok).toBe(false);
  });
  it("blocks guarantee claims, false urgency, fake familiarity, fake audits", () => {
    for (const bad of ["We guarantee page one results.", "Act now, limited time!", "As we discussed, here is the link.", "I audited your website and found problems.", "Your website is missing schema."]) {
      expect(validateOutgoingMessage({ subject: "Hi", body: `${base}\n${bad}` }).ok, bad).toBe(false);
    }
    expect(validateOutgoingMessage({ subject: "RE: your enquiry", body: base }).ok).toBe(false);
  });
  it("blocks unresolved or unknown placeholders", () => {
    expect(validateTemplate({ subject: "Hi", body: `${base} {{unknown_thing}}` }, sender).ok).toBe(false);
  });
  it("only personalises with a verified business name", () => {
    const t = DEFAULT_TEMPLATES.short;
    expect(renderTemplate(t, sender, { verifiedBusinessName: "Acme Plumbing" }).body.startsWith("Hi Acme Plumbing team,")).toBe(true);
    expect(renderTemplate(t, sender, {}).body.startsWith("Hi there,")).toBe(true);
  });
});

describe("offer facts", () => {
  it("flags outdated pricing", () => {
    expect(checkOfferFacts("Starter $199 ≈ ₹16,999 · negotiable", ["$199", "16,999"]).ok).toBe(true);
    const r = checkOfferFacts("Starter $249 ≈ ₹20,999", ["$199", "16,999"]);
    expect(r.ok).toBe(false);
    expect(r.missing).toEqual(["$199", "16,999"]);
  });
});
