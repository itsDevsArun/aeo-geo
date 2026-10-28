import { normalizeUrl, type NormalizedUrl } from "./urls";

/**
 * Directories, marketplaces, social networks, review sites and other
 * non-official sources. Results on these domains are filtered out.
 */
export const NON_OFFICIAL_DOMAINS = new Set([
  "facebook.com", "instagram.com", "linkedin.com", "twitter.com", "x.com", "youtube.com", "tiktok.com",
  "pinterest.com", "reddit.com", "quora.com", "medium.com", "threads.net", "threads.com", "whatsapp.com",
  "wikipedia.org", "wikimedia.org", "yelp.com", "yelp.co.uk", "yellowpages.com", "yellowpages.ca", "yell.com",
  "tripadvisor.com", "tripadvisor.in", "justdial.com", "sulekha.com", "indiamart.com", "tradeindia.com",
  "clutch.co", "goodfirms.co", "glassdoor.com", "glassdoor.co.in", "indeed.com", "naukri.com", "bbb.org",
  "angi.com", "angieslist.com", "thumbtack.com", "houzz.com", "homeadvisor.com", "trustpilot.com",
  "google.com", "google.co.in", "goo.gl", "g.page", "apple.com", "bing.com", "yahoo.com", "duckduckgo.com",
  "amazon.com", "amazon.in", "flipkart.com", "ebay.com", "etsy.com", "practo.com", "zomato.com", "swiggy.com",
  "magicpin.in", "urbancompany.com", "nextdoor.com", "mapquest.com", "foursquare.com", "crunchbase.com",
  "zoominfo.com", "dnb.com", "manta.com", "chamberofcommerce.com", "expertise.com", "upcity.com",
  "designrush.com", "sortlist.com", "fiverr.com", "upwork.com", "craigslist.org", "olx.in", "quikr.com",
  "booking.com", "airbnb.com", "makemytrip.com", "groupon.com", "github.com", "wordpress.com", "blogspot.com",
  "wix.com", "squarespace.com", "shopify.com", "godaddy.com", "devsarun.io",
]);

const LISTICLE = /\b(top|best)\s+\d{1,3}\b|\b\d{1,3}\s+best\b|\blist of\b|\bdirectory\b|\bnear me\b.*\breviews?\b/i;
const NON_BUSINESS_TLD = /\.(gov|gov\.[a-z]{2}|edu|edu\.[a-z]{2}|mil|ac\.[a-z]{2}|nic\.in)$/i;
const JOB_OR_NEWS = /\b(jobs?|careers?|vacanc(y|ies)|hiring|news|press release|wiki)\b/i;

export interface SearchResultInput {
  url: string;
  title?: string;
  description?: string;
  rank?: number;
}

export interface ClassifiedResult {
  accept: boolean;
  normalized: NormalizedUrl | null;
  reason: string | null;
  notes: string[];
}

export function classifySearchResult(
  r: SearchResultInput,
  opts: { excludedDomains: string[]; suppressedDomains: Set<string> },
): ClassifiedResult {
  const n = normalizeUrl(r.url);
  const notes: string[] = [];
  if (!n) return { accept: false, normalized: null, reason: "invalid_or_unsafe_url", notes };
  if (NON_OFFICIAL_DOMAINS.has(n.domain)) return { accept: false, normalized: n, reason: "directory_or_social", notes };
  if (opts.excludedDomains.includes(n.domain)) return { accept: false, normalized: n, reason: "excluded_domain", notes };
  if (opts.suppressedDomains.has(n.domain)) return { accept: false, normalized: n, reason: "suppressed_domain", notes };
  if (NON_BUSINESS_TLD.test(n.hostname)) return { accept: false, normalized: n, reason: "non_business_tld", notes };
  const title = `${r.title ?? ""}`;
  if (LISTICLE.test(title)) return { accept: false, normalized: n, reason: "listicle_or_directory_page", notes };
  if (JOB_OR_NEWS.test(title) && !/\bservices?\b/i.test(title)) {
    notes.push("Title mentions jobs/news — check this is the official business site.");
  }
  const path = new URL(n.url).pathname;
  if (path.split("/").filter(Boolean).length > 2) {
    notes.push("Result was a deep page; homepage will be inspected.");
  }
  if (!n.hostname.startsWith("www.") && n.hostname.split(".").length > n.domain.split(".").length) {
    notes.push(`Subdomain ${n.hostname} — verify it belongs to the business.`);
  }
  return { accept: true, normalized: n, reason: null, notes };
}

const COUNTRY_NAMES: Record<string, string> = {
  IN: "India", US: "USA", GB: "UK", CA: "Canada", AU: "Australia", AE: "UAE", SG: "Singapore", NZ: "New Zealand",
  IE: "Ireland", ZA: "South Africa", DE: "Germany", FR: "France",
};

/** Build discovery queries strictly from the configured target market. */
export function buildDiscoveryQueries(c: {
  industry: string;
  city_region: string;
  country: string;
  search_queries: string[];
}): string[] {
  const custom = c.search_queries.map((q) => q.trim()).filter(Boolean);
  const industry = c.industry.trim();
  const city = c.city_region.trim();
  const out = [...custom];
  if (industry && city) {
    const country = COUNTRY_NAMES[c.country.toUpperCase()] ?? c.country;
    out.push(`${industry} in ${city}`, `${industry} ${city} contact`, `${industry} company ${city} ${country}`.trim());
  }
  return [...new Set(out.map((q) => q.replace(/\s+/g, " ").slice(0, 300)))];
}
