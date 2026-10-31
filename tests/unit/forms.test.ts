import { describe, expect, it } from "vitest";
import { analyzeForm, neutralOption, classifyField, detectConfirmation, detectNoSolicitation, detectPurpose, isHoneypot, validateMapping, valuesForMapping, type FieldInfo, type FormInfo, type PageFlags } from "@/shared/forms";

const f = (p: Partial<FieldInfo>): FieldInfo => ({ selector: `#${p.name ?? "x"}`, tag: "input", type: "text", name: "", id: "", label: "", placeholder: "", autocomplete: "", required: false, visible: true, ...p });
const flags = (p: Partial<PageFlags> = {}): PageFlags => ({ captcha: false, captcha_kinds: [], no_solicitation: false, consent_required: false, login_required: false, purpose: "general_enquiry", robots_disallowed: false, file_upload_required: false, multi_step: false, ...p });
const form = (fields: FieldInfo[], text = "Contact us"): FormInfo => ({ selector: "#contact", action: "/send", method: "post", text, submitSelector: "#send", submitText: "Send", fields });

const standard = [
  f({ name: "your-name", label: "Your name", required: true }),
  f({ name: "your-email", type: "email", label: "Email", required: true }),
  f({ name: "phone", type: "tel", label: "Phone" }),
  f({ name: "company", label: "Company" }),
  f({ name: "subject", label: "Subject" }),
  f({ name: "your-message", tag: "textarea", type: "textarea", label: "Message", required: true }),
  f({ name: "website_hp", label: "Leave this field empty", visible: false }),
  f({ name: "token", type: "hidden" }),
];

describe("field classification", () => {
  it("maps ordinary fields", () => {
    expect(classifyField(standard[0])).toBe("name");
    expect(classifyField(standard[1])).toBe("email");
    expect(classifyField(standard[2])).toBe("phone");
    expect(classifyField(standard[3])).toBe("company");
    expect(classifyField(standard[4])).toBe("subject");
    expect(classifyField(standard[5])).toBe("message");
    expect(classifyField(f({ name: "site", type: "url" }))).toBe("website");
  });
  it("detects honeypots and hidden fields", () => {
    expect(isHoneypot(standard[6])).toBe(true);
    expect(isHoneypot(f({ name: "hp_field" }))).toBe(true);
    expect(isHoneypot(standard[0])).toBe(false);
  });
});

describe("form analysis", () => {
  it("proposes a mapping for a standard enquiry form and never maps honeypots", () => {
    const a = analyzeForm(form(standard), flags());
    expect(a.status).toBe("proposed");
    expect(a.blocking).toEqual([]);
    expect(a.mapping.map((m) => m.selector)).not.toContain("#website_hp");
    expect(a.mapping.find((m) => m.role === "message")).toBeTruthy();
    expect(validateMapping(a.mapping)).toEqual([]);
  });
  it("blocks CAPTCHA, no-solicitation, disallowed purposes, consent and robots", () => {
    expect(analyzeForm(form(standard), flags({ captcha: true, captcha_kinds: ["recaptcha"] })).blocking.join()).toMatch(/CAPTCHA/);
    expect(analyzeForm(form(standard), flags({ no_solicitation: true })).blocking.join()).toMatch(/solicitation/);
    for (const purpose of ["job_application", "booking", "patient_intake", "complaint", "emergency", "support", "newsletter", "login"] as const) {
      expect(analyzeForm(form(standard), flags({ purpose })).blocking.length, purpose).toBeGreaterThan(0);
    }
    const consent = [...standard, f({ name: "gdpr", type: "checkbox", label: "I agree to the privacy policy", required: true })];
    expect(analyzeForm(form(consent), flags()).blocking.join()).toMatch(/consent/i);
    expect(analyzeForm(form(standard), flags({ robots_disallowed: true })).blocking.join()).toMatch(/robots/);
  });
  it("sends unknown mandatory facts to manual review instead of guessing", () => {
    const withBudget = [...standard, f({ name: "budget", label: "Project budget", required: true })];
    const a = analyzeForm(form(withBudget), flags());
    expect(a.status).toBe("needs_manual");
    expect(a.reasons.join()).toMatch(/budget/i);
    const lastName = [...standard, f({ name: "last_name", label: "Last name", required: true })];
    expect(analyzeForm(form(lastName), flags()).status).toBe("needs_manual");
  });
  it("only fills values from the sender identity and message", () => {
    const a = analyzeForm(form(standard), flags());
    const v = valuesForMapping(a.mapping, { name: "Arun", business: "Devs Arun", email: "e@x.com", phone: "+91 1", website: "https://devsarun.io/aeo-geo/" }, { subject: "S", body: "B" });
    expect(v["#your-name"]).toBe("Arun");
    expect(v["#your-email"]).toBe("e@x.com");
    expect(v["#your-message"]).toBe("B");
    expect(Object.keys(v)).not.toContain("#website_hp");
  });
});

describe("purpose and policy detection", () => {
  it("detects job, booking and login forms", () => {
    expect(detectPurpose(form([f({ name: "resume", type: "file", label: "Upload CV" })], "Apply for this position"), "https://x.com/careers")).toBe("job_application");
    expect(detectPurpose(form([f({ name: "date", label: "Preferred date" })], "Book an appointment"), "https://x.com/book")).toBe("booking");
    expect(detectPurpose(form([f({ name: "pw", type: "password" })]), "https://x.com/")).toBe("login");
  });
  it("detects no-solicitation notices", () => {
    expect(detectNoSolicitation("Note: we do not accept unsolicited sales offers.")).toBeTruthy();
    expect(detectNoSolicitation("No solicitation please.")).toBeTruthy();
    expect(detectNoSolicitation("Contact us for a free quote.")).toBeNull();
  });
});

describe("confirmation detection", () => {
  it("requires a NEW success marker; clicking alone is not success", () => {
    expect(detectConfirmation({ text: "Contact us form", url: "https://x.com/c" }, { text: "Thank you! Your message has been sent.", url: "https://x.com/c" }).status).toBe("confirmed");
    expect(detectConfirmation({ text: "Contact us form", url: "https://x.com/c" }, { text: "Contact us form", url: "https://x.com/c" }).status).toBe("unclear");
    expect(detectConfirmation({ text: "Thank you for visiting. Contact", url: "https://x.com/c" }, { text: "Thank you for visiting. Contact", url: "https://x.com/c" }).status).toBe("unclear");
    expect(detectConfirmation({ text: "Form", url: "https://x.com/c" }, { text: "Form", url: "https://x.com/thank-you" }).status).toBe("confirmed");
    expect(detectConfirmation({ text: "Form", url: "https://x.com/c" }, { text: "This field is required.", url: "https://x.com/c" }).status).toBe("error_after_submit");
  });
});

describe("truthful answers for extra required fields", () => {
  const sender = { name: "Arun", business: "Devs Arun", email: "e@x.com", phone: "+91 1", website: "https://devsarun.io/aeo-geo/", city: "Bangalore", state: "Karnataka", country: "India" };
  it("fills city/state/country from the sender, skips forms needing missing zip or last name", () => {
    const withCity = [...standard, f({ name: "city", label: "City", required: true }), f({ name: "state", label: "State", required: true })];
    const a = analyzeForm(form(withCity), flags(), sender);
    expect(a.status).toBe("proposed");
    expect(valuesForMapping(a.mapping, sender, { subject: "S", body: "B" })["#city"]).toBe("Bangalore");
    expect(analyzeForm(form([...standard, f({ name: "zip", label: "Zip Code", required: true })]), flags(), sender).status).toBe("needs_manual");
    expect(analyzeForm(form([...standard, f({ name: "zip", label: "Zip Code", required: true })]), flags(), { ...sender, zip: "560001" }).status).toBe("proposed");
    expect(analyzeForm(form([...standard, f({ name: "lname", label: "Last", required: true })]), flags(), sender).status).toBe("needs_manual");
  });
  it("picks only options that are true for a vendor enquiry", () => {
    expect(neutralOption(["Email", "Phone", "Text"], "Preferred contact method")).toBe("Email");
    expect(neutralOption(["Google", "Facebook", "Friend", "Other"], "How did you hear about us?")).toBe("Other");
    expect(neutralOption(["Google", "Facebook", "Friend"], "How did you hear about us?")).toBeNull();
    expect(neutralOption(["Roof Repair", "Roof Replacement", "Other"], "Service")).toBe("Other");
    expect(neutralOption(["Roof Repair", "Roof Replacement"], "Service")).toBeNull();
    expect(neutralOption(["Yes", "No"], "Are you a new customer?")).toBeNull();
    expect(neutralOption(["Select...", "General Inquiry", "Quote"], "Reason")).toBe("General Inquiry");
  });
  it("maps required dropdowns and radio groups to a truthful option or sends the form to manual review", () => {
    const sel = f({ name: "reason", tag: "select", type: "select-one", label: "Reason", required: true, options: ["Select", "Quote", "General Inquiry"] });
    const a = analyzeForm(form([...standard, sel]), flags(), sender);
    expect(a.status).toBe("proposed");
    expect(a.mapping.find((m) => m.selector === "#reason")).toMatchObject({ role: "fixed", value: "General Inquiry" });
    const radios = ["Email", "Phone"].map((l, i) => f({ selector: `#cm${i}`, name: "contact_method", type: "radio", label: l, required: true }));
    const b = analyzeForm(form([...standard, ...radios]), flags(), sender);
    expect(b.status).toBe("proposed");
    expect(b.mapping.find((m) => m.selector === "#cm0")).toMatchObject({ role: "fixed", value: "check" });
    const svc = ["Roof Repair", "Gutters"].map((l, i) => f({ selector: `#s${i}`, name: "service", type: "checkbox", label: l, required: true }));
    expect(analyzeForm(form([...standard, ...svc]), flags(), sender).status).toBe("needs_manual");
  });
  it("still never ticks consent boxes", () => {
    const consent = f({ name: "gdpr", type: "checkbox", label: "I agree to the privacy policy", required: true });
    expect(analyzeForm(form([...standard, consent]), flags(), sender).blocking.join()).toMatch(/consent/i);
  });
  it("recognises more success messages", () => {
    for (const t of ["Your request has been received.", "We have received your message", "Submitted successfully"]) {
      expect(detectConfirmation({ text: "Form", url: "https://x.com/c" }, { text: t, url: "https://x.com/c" }).status, t).toBe("confirmed");
    }
  });
});
