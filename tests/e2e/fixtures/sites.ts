/**
 * Local fixture websites (served by Host header). Real businesses are NEVER
 * contacted by tests. The runner reaches these via Chromium host-resolver rules.
 */
import { createServer, type IncomingMessage, type Server } from "node:http";

export interface Submission { host: string; path: string; body: Record<string, string>; at: string }

const page = (title: string, body: string) => `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<style>body{font-family:sans-serif;max-width:760px;margin:24px auto;padding:0 12px} label{display:block;margin-top:10px} input,textarea,select{width:100%;padding:6px}</style>
</head><body>${body}</body></html>`;

const nav = `<nav><a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact-us">Contact Us</a> | <a href="/careers">Careers</a></nav>`;

const standardForm = (action: string, extra = "") => `
<form id="contact-form" method="post" action="${action}">
  <label for="name">Your name *</label><input id="name" name="your-name" required>
  <label for="email">Email *</label><input id="email" name="your-email" type="email" required>
  <label for="phone">Phone</label><input id="phone" name="phone" type="tel">
  <label for="company">Company</label><input id="company" name="company">
  <label for="subject">Subject</label><input id="subject" name="subject">
  <label for="message">Message *</label><textarea id="message" name="your-message" required></textarea>
  <div style="display:none"><label for="hp">Leave this field empty</label><input id="hp" name="website_hp" tabindex="-1" autocomplete="off"></div>
  ${extra}
  <button type="submit" id="send">Send message</button>
</form>`;

type Site = (req: IncomingMessage, body: Record<string, string>, record: (s: Omit<Submission, "at">) => void) => { status?: number; html: string; type?: string; headers?: Record<string, string> };

const sites: Record<string, Site> = {
  "acme-plumbing.test": (req, body, record) => {
    if (req.url === "/") return { html: page("Acme Plumbing — Testville", `${nav}<h1>Acme Plumbing</h1><p>Emergency-free, friendly plumbing in Testville.</p>`) };
    if (req.url === "/about") return { html: page("About Acme", `${nav}<h1>About</h1>`) };
    if (req.url === "/contact-us" && req.method === "GET") return { html: page("Contact Acme Plumbing", `${nav}<h1>Contact us</h1><p>Send us a general enquiry.</p>${standardForm("/contact-us")}`) };
    if (req.url === "/contact-us" && req.method === "POST") {
      if (body.website_hp) return { status: 400, html: page("Spam", "Rejected") };
      record({ host: "acme-plumbing.test", path: "/contact-us", body });
      return { html: page("Thanks", `${nav}<h1>Thank you!</h1><p>Your message has been sent. We'll be in touch.</p>`) };
    }
    return { status: 404, html: page("404", "Not found") };
  },
  "silent-forms.test": (req, body, record) => {
    if (req.url === "/") return { html: page("Silent Forms Ltd", `<a href="/contact">Contact</a><h1>Silent Forms</h1>`) };
    if (req.url === "/contact" && req.method === "GET") return { html: page("Contact", `<h1>Get in touch</h1>${standardForm("/contact")}`) };
    if (req.url === "/contact" && req.method === "POST") {
      record({ host: "silent-forms.test", path: "/contact", body });
      return { html: page("Contact", `<h1>Get in touch</h1>${standardForm("/contact")}`) };
    }
    return { status: 404, html: "nf" };
  },
  "bright-dental.test": (req) => {
    if (req.url === "/") return { html: page("Bright Dental", `<a href="/contact">Contact</a>`) };
    if (req.url === "/contact") return { html: page("Contact Bright Dental", `<h1>Contact</h1>${standardForm("/contact", '<div class="g-recaptcha" data-sitekey="test"></div>')}`) };
    return { status: 404, html: "nf" };
  },
  "nosolicit-co.test": (req) => {
    if (req.url === "/") return { html: page("NoSolicit Co", `<a href="/contact">Contact</a>`) };
    if (req.url === "/contact") return { html: page("Contact", `<h1>Contact</h1><p>Please note: we do not accept unsolicited sales or marketing offers through this form.</p>${standardForm("/contact")}`) };
    return { status: 404, html: "nf" };
  },
  "careers-only.test": (req) => {
    if (req.url === "/") return { html: page("Careers Only", `<a href="/contact">Contact</a>`) };
    if (req.url === "/contact") return { html: page("Apply", `<h1>Apply for this position</h1><form id="apply" method="post"><label for="n">Name</label><input id="n" name="name" required><label for="e">Email</label><input id="e" type="email" name="email" required><label for="cv">Upload your CV / resume</label><input id="cv" type="file" name="cv" required><label for="m">Cover letter</label><textarea id="m" name="message"></textarea><button type="submit">Apply</button></form>`) };
    return { status: 404, html: "nf" };
  },
  "osm-plumber.test": (req) => {
    if (req.url === "/") return { html: page("OSM Plumber Co", `<a href="/contact">Contact</a><h1>OSM Plumber Co</h1>`) };
    if (req.url === "/contact") return { html: page("Contact", `<h1>Contact us</h1>${standardForm("/contact")}`) };
    return { status: 404, html: "nf" };
  },
  "quiet-cafe.test": (req) => {
    if (req.url === "/") return { html: page("Quiet Cafe", `<h1>Quiet Cafe</h1><p>Call us. No online form.</p>`) };
    return { status: 404, html: "nf" };
  },
  "robots-blocked.test": (req) => {
    if (req.url === "/robots.txt") return { html: "User-agent: *\nDisallow: /\n", type: "text/plain" };
    return { html: page("Robots Blocked", `<a href="/contact">Contact</a>${standardForm("/contact")}`) };
  },
  "devsarun-fixture.test": (req) => {
    if (req.url === "/aeo-geo/") return { html: page("AEO + GEO", `<h1>AEO + GEO Starter</h1><p>$199</p><p>≈ ₹16,999 · negotiable</p><p>10 customer questions, two existing pages, 1 revision round.</p>`) };
    return { status: 404, html: "nf" };
  },
};

export interface FixtureSites { server: Server; submissions: Submission[]; close(): Promise<void> }

export async function startFixtureSites(port: number): Promise<FixtureSites> {
  const submissions: Submission[] = [];
  const server = createServer(async (req, res) => {
    const host = String(req.headers.host ?? "").split(":")[0].toLowerCase().replace(/^www\./, "");
    if (req.url === "/__fixture/submissions") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(submissions));
    }
    let raw = "";
    for await (const c of req) raw += c;
    const body = Object.fromEntries(new URLSearchParams(raw));
    const site = sites[host];
    if (!site) {
      res.writeHead(404);
      return res.end("unknown fixture host");
    }
    if (req.url === "/robots.txt" && host !== "robots-blocked.test") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("User-agent: *\nAllow: /\n");
    }
    const out = site(req, body, (s) => submissions.push({ ...s, at: new Date().toISOString() }));
    res.writeHead(out.status ?? 200, { "Content-Type": `${out.type ?? "text/html"}; charset=utf-8`, ...(out.headers ?? {}) });
    res.end(out.html);
  });
  await new Promise<void>((r) => server.listen(port, "127.0.0.1", () => r()));
  return { server, submissions, close: () => new Promise((r) => server.close(() => r())) };
}

/** Fake Brave Search API returning fixture URLs (incl. a directory and duplicates). */
export async function startFakeBrave(port: number, apiKey: string) {
  const calls: { q: string; offset: number; country: string }[] = [];
  const server = createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://x");
    if (req.headers["x-subscription-token"] !== apiKey) {
      res.writeHead(401, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "unauthorized" }));
    }
    const q = url.searchParams.get("q") ?? "";
    const offset = Number(url.searchParams.get("offset") ?? 0);
    calls.push({ q, offset, country: url.searchParams.get("country") ?? "" });
    const first = calls.filter((c) => c.offset === 0).length === 1 && offset === 0;
    const results = first
      ? [
          { url: "http://www.acme-plumbing.test/", title: "Acme Plumbing — Testville", description: "Plumbers" },
          { url: "http://acme-plumbing.test/about", title: "About Acme", description: "dup" },
          { url: "https://www.yelp.com/biz/acme-plumbing", title: "Acme on Yelp", description: "directory" },
          { url: "http://silent-forms.test/", title: "Silent Forms", description: "" },
          { url: "http://bright-dental.test/", title: "Bright Dental", description: "" },
          { url: "http://nosolicit-co.test/", title: "NoSolicit Co", description: "" },
          { url: "http://careers-only.test/", title: "Careers Only", description: "" },
          { url: "http://quiet-cafe.test/", title: "Quiet Cafe", description: "" },
          { url: "http://robots-blocked.test/", title: "Robots Blocked", description: "" },
          { url: "http://blog.example-guide.test/", title: "Top 10 plumbers in Testville", description: "listicle" },
        ]
      : offset === 1
        ? [{ url: "http://acme-plumbing.test/contact-us", title: "Acme contact", description: "dup" }]
        : [];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ query: { original: q, more_results_available: first }, web: { results } }));
  });
  await new Promise<void>((r) => server.listen(port, "127.0.0.1", () => r()));
  return { server, calls, close: () => new Promise<void>((r) => server.close(() => r())) };
}

/** Fake Overpass API (OpenStreetMap). Records the Overpass QL it receives. */
export async function startFakeOverpass(port: number) {
  const queries: string[] = [];
  const server = createServer(async (req, res) => {
    let raw = "";
    for await (const c of req) raw += c;
    const q = new URLSearchParams(raw).get("data") ?? "";
    queries.push(q);
    const elements = /ISO3166-1"="US"/.test(q) && /"craft"="plumber"/.test(q)
      ? [
          { type: "node", tags: { name: "OSM Plumber Co", craft: "plumber", website: "http://osm-plumber.test/", "addr:city": "Testville" } },
          { type: "node", tags: { name: "Acme (dup)", craft: "plumber", "contact:website": "http://www.acme-plumbing.test/" } },
          { type: "node", tags: { name: "No site", craft: "plumber" } },
          { type: "node", tags: { name: "FB only", craft: "plumber", website: "https://facebook.com/someplumber" } },
        ]
      : [];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ version: 0.6, elements }));
  });
  await new Promise<void>((r) => server.listen(port, "127.0.0.1", () => r()));
  return { server, queries, close: () => new Promise<void>((r) => server.close(() => r())) };
}
