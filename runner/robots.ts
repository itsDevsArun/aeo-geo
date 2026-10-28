import type { BrowserContext } from "playwright";
import { RUNNER_USER_AGENT_TOKEN } from "../src/shared/constants";

export interface RobotsRules {
  disallow: string[];
  allow: string[];
}

/** Minimal robots.txt parser: groups for our token or "*", longest-match allow/disallow. */
export function parseRobots(text: string, agent = RUNNER_USER_AGENT_TOKEN): RobotsRules {
  const groups: { agents: string[]; allow: string[]; disallow: string[] }[] = [];
  let cur: (typeof groups)[number] | null = null;
  let lastWasAgent = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    if (!line) continue;
    const m = /^([a-z-]+)\s*:\s*(.*)$/i.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === "user-agent") {
      if (!cur || !lastWasAgent) {
        cur = { agents: [], allow: [], disallow: [] };
        groups.push(cur);
      }
      cur.agents.push(val.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!cur) continue;
    if (key === "disallow" && val) cur.disallow.push(val);
    if (key === "allow" && val) cur.allow.push(val);
  }
  const mine = groups.filter((g) => g.agents.some((a) => a !== "*" && agent.toLowerCase().includes(a)));
  const chosen = mine.length ? mine : groups.filter((g) => g.agents.includes("*"));
  return { disallow: chosen.flatMap((g) => g.disallow), allow: chosen.flatMap((g) => g.allow) };
}

function ruleMatches(rule: string, path: string): number {
  const anchored = rule.endsWith("$");
  const body = anchored ? rule.slice(0, -1) : rule;
  const re = new RegExp("^" + body.split("*").map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join(".*") + (anchored ? "$" : ""));
  return re.test(path) ? body.length : -1;
}

export function isAllowed(rules: RobotsRules, path: string): boolean {
  let best = -1;
  let allowed = true;
  for (const r of rules.disallow) {
    const l = ruleMatches(r, path);
    if (l > best) {
      best = l;
      allowed = false;
    }
  }
  for (const r of rules.allow) {
    const l = ruleMatches(r, path);
    if (l >= best && l >= 0) {
      best = l;
      allowed = true;
    }
  }
  return allowed;
}

const robotsCache = new Map<string, RobotsRules>();

/** Fetch robots.txt through the guarded browser context (same safety rules apply). */
export async function robotsFor(context: BrowserContext, origin: string): Promise<RobotsRules> {
  const hit = robotsCache.get(origin);
  if (hit) return hit;
  let rules: RobotsRules = { disallow: [], allow: [] };
  const page = await context.newPage();
  try {
    const res = await page.goto(`${origin}/robots.txt`, { timeout: 15000, waitUntil: "domcontentloaded" });
    if (res && res.ok() && (res.headers()["content-type"] ?? "").includes("text/plain")) {
      rules = parseRobots((await res.text()).slice(0, 500_000));
    }
  } catch {
    // Unreachable robots.txt: treat as no restrictions, per common practice.
  } finally {
    await page.close().catch(() => undefined);
  }
  robotsCache.set(origin, rules);
  return rules;
}
