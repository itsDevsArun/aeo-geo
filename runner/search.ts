/**
 * Brave Search API client (legitimate search API; no search-engine scraping).
 * Respects a minimum interval between requests and Retry-After / reset headers.
 */
export interface SearchPage {
  results: { url: string; title: string; description: string; rank: number }[];
  moreAvailable: boolean;
}

export class SearchUnavailable extends Error {}

let lastCall = 0;

export async function braveSearch(
  q: { query: string; offset: number; country: string; language: string },
  opts: { apiKey: string; baseUrl?: string; minIntervalMs?: number },
): Promise<SearchPage> {
  const base = opts.baseUrl || "https://api.search.brave.com/res/v1/web/search";
  const params = new URLSearchParams({ q: q.query, count: "20", offset: String(q.offset), safesearch: "moderate", result_filter: "web" });
  if (q.country && q.country !== "ALL") params.set("country", q.country.toLowerCase());
  if (q.language) params.set("search_lang", q.language.toLowerCase());
  for (let attempt = 0; attempt < 4; attempt++) {
    const wait = lastCall + (opts.minIntervalMs ?? 1100) - Date.now();
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastCall = Date.now();
    const res = await fetch(`${base}?${params}`, {
      headers: { Accept: "application/json", "X-Subscription-Token": opts.apiKey },
      signal: AbortSignal.timeout(20000),
    });
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get("retry-after") || (res.headers.get("x-ratelimit-reset") || "").split(",")[0] || 2);
      if (!Number.isFinite(retryAfter) || retryAfter > 60) throw new SearchUnavailable("Search API quota/rate limit reached");
      await new Promise((r) => setTimeout(r, Math.max(1, retryAfter) * 1000));
      continue;
    }
    if (res.status === 401 || res.status === 403) throw new SearchUnavailable(`Search API rejected credentials (${res.status})`);
    if (res.status >= 500) {
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
      continue;
    }
    if (!res.ok) throw new Error(`Search API error ${res.status}`);
    const data = (await res.json()) as { query?: { more_results_available?: boolean }; web?: { results?: { url: string; title?: string; description?: string }[] } };
    const results = (data.web?.results ?? []).slice(0, 50).map((r, i) => ({
      url: String(r.url ?? "").slice(0, 2000),
      title: stripTags(r.title ?? "").slice(0, 500),
      description: stripTags(r.description ?? "").slice(0, 2000),
      rank: q.offset * 20 + i + 1,
    }));
    return { results, moreAvailable: !!data.query?.more_results_available };
  }
  throw new SearchUnavailable("Search API unavailable after retries");
}

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
