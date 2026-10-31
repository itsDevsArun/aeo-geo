import { chromium, type Browser, type BrowserContext, type Page } from "playwright";
import { checkDestination, type SafetyOptions } from "./safety";
import { RUNNER_USER_AGENT_TOKEN } from "../src/shared/constants";
import { sameSite } from "../src/shared/urls";

export interface GuardedContext {
  browser: Browser;
  context: BrowserContext;
  /** Restrict top-level navigations to this site (registrable domain). */
  setAllowedSite(url: string | null): void;
  blockedRequests: string[];
  close(): Promise<void>;
}

/** Honest identity for API calls (Overpass rejects browser-like agents with HTTP 406). */
export const API_USER_AGENT = `${RUNNER_USER_AGENT_TOKEN}/1.0 (+https://devsarun.io/aeo-geo/; itschool408@gmail.com)`;

export const USER_AGENT = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 ${RUNNER_USER_AGENT_TOKEN}/1.0 (+https://devsarun.io/aeo-geo/)`;

export async function launchGuarded(opts: SafetyOptions & { hostResolverRules?: string }): Promise<GuardedContext> {
  const args = ["--disable-dev-shm-usage"];
  if (opts.hostResolverRules) args.push(`--host-resolver-rules=${opts.hostResolverRules}`);
  const browser = await chromium.launch({ headless: true, args });
  const context = await browser.newContext({
    userAgent: USER_AGENT,
    viewport: { width: 1280, height: 900 },
    acceptDownloads: false,
    serviceWorkers: "block",
    javaScriptEnabled: true,
    locale: "en-US",
    permissions: [],
  });
  // tsx/esbuild may wrap functions passed to page.evaluate with a __name helper.
  await context.addInitScript({ content: "window.__name = window.__name || ((f) => f);" });
  let allowedSite: string | null = null;
  const blockedRequests: string[] = [];
  await context.route("**/*", async (route) => {
    const req = route.request();
    const url = req.url();
    const type = req.resourceType();
    if (type === "media" || type === "font") return route.abort("blockedbyclient");
    const verdict = await checkDestination(url, opts);
    if (!verdict.ok) {
      blockedRequests.push(`${verdict.reason}`);
      return route.abort("blockedbyclient");
    }
    if (req.isNavigationRequest() && req.frame() === req.frame().page().mainFrame() && allowedSite && !sameSite(url, allowedSite)) {
      blockedRequests.push("off-site navigation");
      return route.abort("blockedbyclient");
    }
    return route.continue();
  });
  await context.routeWebSocket(/.*/, (ws) => ws.close());
  return {
    browser,
    context,
    blockedRequests,
    setAllowedSite(url) {
      allowedSite = url;
    },
    async close() {
      await context.close().catch(() => undefined);
      await browser.close().catch(() => undefined);
    },
  };
}

/** JPEG screenshot capped in height and size so it can be uploaded reliably. */
export async function captureScreenshot(page: Page): Promise<Buffer> {
  const height = await page.evaluate(() => Math.min(document.documentElement.scrollHeight, 6000)).catch(() => 900);
  let shot = await page.screenshot({ type: "jpeg", quality: 60, fullPage: true, clip: { x: 0, y: 0, width: 1280, height: Math.max(height, 300) }, timeout: 20000 });
  if (shot.byteLength > 3.5 * 1024 * 1024) shot = await page.screenshot({ type: "jpeg", quality: 50, fullPage: false, timeout: 20000 });
  return shot;
}

export async function settle(page: Page, ms = 4000): Promise<void> {
  await page.waitForLoadState("networkidle", { timeout: ms }).catch(() => undefined);
}

export async function visibleText(page: Page): Promise<string> {
  return page.evaluate(() => (document.body?.innerText ?? "").slice(0, 300000)).catch(() => "");
}
