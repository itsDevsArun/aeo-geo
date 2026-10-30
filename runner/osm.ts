/**
 * Free discovery source: OpenStreetMap via the public Overpass API (no key, no card).
 * One request per (category, country) per run, cached in memory and served in pages,
 * which stays far below the public instance's guideline (~10,000 requests/day).
 * Data © OpenStreetMap contributors, ODbL 1.0 (https://www.openstreetmap.org/copyright).
 */
import { OSM_TAG } from "../src/shared/discovery";

export const OSM_PAGE_SIZE = 50;
const cache = new Map<string, { url: string; title: string; description: string }[]>();
let lastCall = 0;

export class OsmUnavailable extends Error {}

export function overpassQuery(tag: string, country: string): string {
  if (!OSM_TAG.test(tag)) throw new Error(`Invalid OSM category ${tag}`);
  if (!/^[A-Z]{2}$/.test(country)) throw new Error(`OSM search needs a 2-letter country, got ${country}`);
  const [k, v] = tag.split("=");
  const f = `["${k}"="${v}"]`;
  return `[out:json][timeout:170];area["ISO3166-1"="${country}"][admin_level=2]->.a;(nwr${f}["website"](area.a);nwr${f}["contact:website"](area.a););out tags;`;
}

function websiteOf(tags: Record<string, string>): string | null {
  const raw = (tags.website || tags["contact:website"] || "").split(";")[0].trim();
  if (!raw) return null;
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

export async function osmSearch(
  q: { query: string; offset: number; country: string },
  opts: { baseUrl?: string; userAgent: string },
): Promise<{ results: { url: string; title: string; description: string; rank: number }[]; moreAvailable: boolean }> {
  const tag = q.query.replace(/^osm:/, "");
  const key = `${tag}|${q.country}`;
  let all = cache.get(key);
  if (!all) {
    const mirrors = opts.baseUrl ? [opts.baseUrl] : ["https://overpass-api.de/api/interpreter", "https://overpass.private.coffee/api/interpreter"];
    for (let attempt = 0; ; attempt++) {
      const base = mirrors[attempt % mirrors.length];
      const wait = lastCall + Number(process.env.OVERPASS_MIN_INTERVAL_MS || 5000) - Date.now(); // polite spacing between requests
      if (wait > 0) await new Promise((r) => setTimeout(r, wait));
      lastCall = Date.now();
      const res = await fetch(base, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": opts.userAgent, Accept: "application/json" },
        body: new URLSearchParams({ data: overpassQuery(tag, q.country) }),
        signal: AbortSignal.timeout(200_000),
      }).catch((e) => ({ ok: false, status: 0, err: e }) as const);
      if ("err" in res || res.status === 429 || res.status === 504 || res.status >= 500) {
        if (attempt >= 3) throw new OsmUnavailable(`Overpass API busy (${"err" in res ? "network" : res.status}); try again later`);
        await new Promise((r) => setTimeout(r, 30_000 * (attempt + 1)));
        continue;
      }
      if (!res.ok) throw new Error(`Overpass API rejected the request (HTTP ${res.status})`);
      const text = await res.text();
      if (!text.trimStart().startsWith("{")) {
        if (attempt >= 3) throw new OsmUnavailable("Overpass API returned a non-JSON page; try again later");
        await new Promise((r) => setTimeout(r, 15_000));
        continue;
      }
      const data = JSON.parse(text) as { elements?: { tags?: Record<string, string> }[]; remark?: string };
      if (data.remark && /rate_limited|too many/i.test(data.remark)) {
        if (attempt >= 3) throw new OsmUnavailable("Overpass rate limit reached; try again later");
        await new Promise((r) => setTimeout(r, 60_000));
        continue;
      }
      if (data.remark && /runtime error|timed out|out of memory/i.test(data.remark)) {
        throw new Error(`Overpass query too large for ${tag} in ${q.country}: use a narrower category`);
      }
      const seen = new Set<string>();
      all = [];
      for (const e of data.elements ?? []) {
        const t = e.tags ?? {};
        const url = websiteOf(t);
        if (!url || seen.has(url)) continue;
        seen.add(url);
        const place = [t["addr:city"], t["addr:state"]].filter(Boolean).join(", ");
        all.push({ url: url.slice(0, 2000), title: (t.name ?? "").slice(0, 500), description: `OpenStreetMap ${tag}${place ? ` · ${place}` : ""}`.slice(0, 2000) });
      }
      cache.set(key, all);
      break;
    }
  }
  const start = q.offset * OSM_PAGE_SIZE;
  const page = all.slice(start, start + OSM_PAGE_SIZE).map((r, i) => ({ ...r, rank: start + i + 1 }));
  return { results: page, moreAvailable: start + OSM_PAGE_SIZE < all.length };
}
