import { getDomain, getHostname } from "tldts";

const TRACKING_PARAMS = /^(utm_|gclid$|fbclid$|msclkid$|mc_|ref$|ref_src$|yclid$|_hs)/i;

export interface NormalizedUrl {
  /** Normalised full URL (no hash, no tracking params). */
  url: string;
  /** Site origin homepage, e.g. https://example.com/ */
  homepage: string;
  hostname: string;
  /** Registrable domain (eTLD+1), used as the recipient key. */
  domain: string;
}

/** Normalise an untrusted URL; returns null for anything not a public http(s) web URL. */
export function normalizeUrl(input: string): NormalizedUrl | null {
  let u: URL;
  try {
    u = new URL(String(input).trim());
  } catch {
    return null;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  if (u.username || u.password) return null;
  if (u.port && u.port !== "80" && u.port !== "443") return null;
  const hostname = (getHostname(u.hostname) ?? "").toLowerCase().replace(/\.$/, "");
  if (!hostname || isIpLiteral(hostname)) return null;
  const domain = getDomain(hostname, { allowPrivateDomains: false });
  if (!domain) return null;
  u.hash = "";
  u.hostname = hostname;
  for (const key of [...u.searchParams.keys()]) {
    if (TRACKING_PARAMS.test(key)) u.searchParams.delete(key);
  }
  return { url: u.toString(), homepage: `${u.protocol}//${hostname}/`, hostname, domain: domain.toLowerCase() };
}

export function isIpLiteral(host: string): boolean {
  const h = host.replace(/^\[|\]$/g, "");
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(h) || h.includes(":");
}

/** Registrable domain for a hostname or URL, lowercased. */
export function registrableDomain(hostOrUrl: string): string | null {
  const s = hostOrUrl.includes("://") ? hostOrUrl : `https://${hostOrUrl}`;
  return normalizeUrl(s)?.domain ?? null;
}

/** Normalise a user-entered domain list entry ("www.Example.com/path" -> "example.com"). */
export function normalizeDomainInput(input: string): string | null {
  const t = input.trim().toLowerCase();
  if (!t) return null;
  return registrableDomain(t.replace(/^\*\./, ""));
}

/** Same registrable domain? Used to keep crawling on the candidate's own site. */
export function sameSite(a: string, b: string): boolean {
  const da = registrableDomain(a);
  return !!da && da === registrableDomain(b);
}
