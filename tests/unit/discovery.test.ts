import { describe, expect, it } from "vitest";
import { buildDiscoveryQueries, classifySearchResult, hasTargetMarket } from "@/shared/discovery";
import { overpassQuery } from "../../runner/osm";
import { normalizeDomainInput, normalizeUrl, registrableDomain, sameSite } from "@/shared/urls";

const opts = { excludedDomains: ["competitor.com"], suppressedDomains: new Set(["optedout.in"]) };

describe("URL normalisation", () => {
  it("normalises host, strips hash and tracking params, keeps registrable domain", () => {
    const n = normalizeUrl("HTTPS://WWW.Example.co.uk/Contact?utm_source=x&id=2#top")!;
    expect(n.url).toBe("https://www.example.co.uk/Contact?id=2");
    expect(n.homepage).toBe("https://www.example.co.uk/");
    expect(n.domain).toBe("example.co.uk");
  });
  it("rejects unsafe or non-web URLs", () => {
    for (const u of ["javascript:alert(1)", "file:///etc/passwd", "ftp://x.com", "http://127.0.0.1/", "http://[::1]/", "http://user:pw@x.com/", "http://x.com:8080/", "not a url"]) {
      expect(normalizeUrl(u), u).toBeNull();
    }
  });
  it("treats subdomains as the same business domain", () => {
    expect(registrableDomain("shop.acme.com")).toBe("acme.com");
    expect(sameSite("https://blog.acme.com/x", "https://www.acme.com/")).toBe(true);
    expect(sameSite("https://acme.com", "https://acme.net")).toBe(false);
    expect(normalizeDomainInput("*.Acme.com/path")).toBe("acme.com");
  });
  it("supports fixture .test domains used in local tests", () => {
    expect(normalizeUrl("http://acme-plumbing.test/")?.domain).toBe("acme-plumbing.test");
  });
});

describe("search result classification", () => {
  it("filters directories, social networks, exclusions, suppressions and listicles", () => {
    expect(classifySearchResult({ url: "https://www.yelp.com/biz/acme" }, opts).reason).toBe("directory_or_social");
    expect(classifySearchResult({ url: "https://facebook.com/acme" }, opts).reason).toBe("directory_or_social");
    expect(classifySearchResult({ url: "https://www.justdial.com/x" }, opts).reason).toBe("directory_or_social");
    expect(classifySearchResult({ url: "https://competitor.com/" }, opts).reason).toBe("excluded_domain");
    expect(classifySearchResult({ url: "https://www.optedout.in/" }, opts).reason).toBe("suppressed_domain");
    expect(classifySearchResult({ url: "https://blog.cityguide-example.com/", title: "Top 10 plumbers in Pune" }, opts).reason).toBe("listicle_or_directory_page");
    expect(classifySearchResult({ url: "https://city.gov.in/" }, opts).reason).toBe("non_business_tld");
  });
  it("accepts likely official sites and adds notes", () => {
    const r = classifySearchResult({ url: "https://www.acmeplumbing.in/services/drains/blocked", title: "Acme Plumbing" }, opts);
    expect(r.accept).toBe(true);
    expect(r.normalized?.homepage).toBe("https://www.acmeplumbing.in/");
    expect(r.notes.join(" ")).toContain("deep page");
  });
});

describe("query generation", () => {
  it("never invents a target market", () => {
    expect(buildDiscoveryQueries({ industry: "", city_region: "", country: "", search_queries: [] })).toEqual([]);
    expect(hasTargetMarket({ industry: "any", country: "", countries: ["US"], search_queries: [] })).toBe(false);
    expect(hasTargetMarket({ industry: "any", country: "", countries: [], search_queries: ["x"] })).toBe(false);
    expect(hasTargetMarket({ industry: "any", country: "", countries: ["US"], search_queries: ["law firm contact us"] })).toBe(true);
  });
  it("builds queries from the configured market plus custom queries", () => {
    const q = buildDiscoveryQueries({ industry: "dentists", city_region: "Pune", country: "IN", search_queries: ["dental clinic Pune"] }).map((t) => t.query);
    expect(q[0]).toBe("dental clinic Pune");
    expect(q).toContain("dentists in Pune");
    expect(q).toContain("dentists company Pune India");
    expect(new Set(q).size).toBe(q.length);
  });
  it("adds free OSM category queries per country; ALL expands to osm_other_countries", () => {
    const t = buildDiscoveryQueries({ industry: "any", city_region: "", country: "", countries: ["US", "AU", "ALL"], search_queries: [],
      osm_categories: ["craft=plumber", "bad tag!"], osm_other_countries: ["GB", "US", "NZ"] });
    expect(t.map((x) => `${x.priority}:${x.country}:${x.query}`)).toEqual(["0:US:osm:craft=plumber", "1000:AU:osm:craft=plumber", "2000:GB:osm:craft=plumber", "2001:NZ:osm:craft=plumber"]);
    expect(hasTargetMarket({ industry: "any", country: "", countries: ["US"], search_queries: [], osm_categories: ["office=lawyer"] })).toBe(true);
  });
  it("builds a strict Overpass query and rejects injection", () => {
    expect(overpassQuery("craft=plumber", "US")).toContain('nwr["craft"="plumber"]["website"](area.a)');
    expect(() => overpassQuery('craft=x"];out;', "US")).toThrow();
    expect(() => overpassQuery("craft=plumber", "ALL")).toThrow();
  });
  it("keeps the owner's category order inside each country (trades first, then professional firms)", () => {
    const t = buildDiscoveryQueries({ industry: "any", city_region: "", country: "", countries: ["US", "AU"], search_queries: [], osm_categories: ["craft=plumber", "craft=roofer", "office=lawyer"] });
    expect(t.sort((a, b) => a.priority - b.priority).map((x) => `${x.country}:${x.query}`)).toEqual([
      "US:osm:craft=plumber", "US:osm:craft=roofer", "US:osm:office=lawyer", "AU:osm:craft=plumber", "AU:osm:craft=roofer", "AU:osm:office=lawyer"]);
  });
  it("orders countries by priority: US, then AU, then CA, then worldwide", () => {
    const t = buildDiscoveryQueries({ industry: "any", city_region: "", country: "", countries: ["us", "AU", "CA", "ALL", "US"], search_queries: ["law firm contact us", "roofing company contact us"] });
    expect(t.map((x) => `${x.priority}:${x.country}:${x.query}`)).toEqual([
      "0:US:law firm contact us", "1:US:roofing company contact us",
      "1000:AU:law firm contact us", "1001:AU:roofing company contact us",
      "2000:CA:law firm contact us", "2001:CA:roofing company contact us",
      "3000:ALL:law firm contact us", "3001:ALL:roofing company contact us",
    ]);
  });
});
