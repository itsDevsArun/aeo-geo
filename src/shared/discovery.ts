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

export interface DiscoveryTarget {
  query: string;
  /** ISO 3166-1 alpha-2, or "ALL" for worldwide. */
  country: string;
  /** Lower runs first: country order x 1000 + position of the query/category in its list. */
  priority: number;
}

/** Ordered target countries: `countries` list if set, else the single `country`. */
export function targetCountries(c: { country: string; countries?: string[] }): string[] {
  const list = (c.countries?.length ? c.countries : c.country ? [c.country] : []).map((x) => x.trim().toUpperCase()).filter(Boolean);
  return [...new Set(list)];
}

const ANY_INDUSTRY = /^(any|all|\*|any industry)?$/i;

/** OSM tag filter, e.g. "craft=plumber" or "office=lawyer". Strict format: it is placed into an Overpass query. */
export const OSM_TAG = /^[a-z][a-z0-9_:]{0,40}=[A-Za-z0-9_ .-]{1,60}$/;
export const OSM_PREFIX = "osm:";

/** True when the owner has given enough to search: queries, OSM categories, or a specific industry. */
export function hasTargetMarket(c: { industry: string; country: string; countries?: string[]; search_queries: string[]; osm_categories?: string[] }): boolean {
  if (targetCountries(c).length === 0) return false;
  return c.search_queries.some((q) => q.trim()) || (c.osm_categories ?? []).some((t) => OSM_TAG.test(t.trim())) || !ANY_INDUSTRY.test(c.industry.trim());
}

/** Build discovery queries strictly from the configured target market (never invented). */
export function buildDiscoveryQueries(c: {
  industry: string;
  city_region: string;
  country: string;
  countries?: string[];
  search_queries: string[];
  osm_categories?: string[];
  osm_other_countries?: string[];
}): DiscoveryTarget[] {
  const osm = (c.osm_categories ?? []).map((t) => t.trim()).filter((t) => OSM_TAG.test(t));
  const osmOthers = (c.osm_other_countries ?? []).map((x) => x.trim().toUpperCase()).filter((x) => /^[A-Z]{2}$/.test(x));
  const custom = c.search_queries.map((q) => q.trim()).filter(Boolean);
  const industry = ANY_INDUSTRY.test(c.industry.trim()) ? "" : c.industry.trim();
  const city = c.city_region.trim();
  const out: DiscoveryTarget[] = [];
  targetCountries(c).forEach((country, countryIdx) => {
    let n = 0;
    const priority = () => countryIdx * 1000 + n++;
    const name = country === "ALL" ? "" : COUNTRY_NAMES[country] ?? country;
    const qs = [...custom];
    if (industry && city) qs.push(`${industry} in ${city}`, `${industry} ${city} contact`, `${industry} company ${city} ${name}`.trim());
    else if (industry) qs.push(`${industry} ${name} contact us`.replace(/\s+/g, " ").trim(), `${industry} company ${name}`.trim());
    // OSM categories first, in the owner's order (e.g. trades that get leads from websites, then professional firms).
    // Free OSM source: one query per category per country; "ALL" expands to osm_other_countries.
    const osmCountries = country === "ALL" ? osmOthers.filter((x) => !targetCountries(c).includes(x)) : [country];
    for (const t of osm) for (const oc of osmCountries) out.push({ query: `${OSM_PREFIX}${t}`, country: oc, priority: priority() });
    for (const q of qs) out.push({ query: q.replace(/\s+/g, " ").slice(0, 300), country, priority: priority() });
  });
  const seen = new Set<string>();
  return out.filter((t) => (seen.has(`${t.country}|${t.query}`) ? false : (seen.add(`${t.country}|${t.query}`), true)));
}
