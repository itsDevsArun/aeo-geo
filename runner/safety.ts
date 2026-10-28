import { BlockList, isIP } from "node:net";
import { lookup } from "node:dns/promises";

/**
 * Destination guard for browser automation. This is defence in depth, not a
 * complete SSRF defence: DNS can change between this check and Chromium's own
 * resolution (rebinding). The primary isolation is the disposable GitHub-hosted
 * runner, which has no access to any private/internal network of ours.
 */
const blocked = new BlockList();
for (const [net, prefix] of [
  ["0.0.0.0", 8], ["10.0.0.0", 8], ["100.64.0.0", 10], ["127.0.0.0", 8], ["169.254.0.0", 16], ["172.16.0.0", 12],
  ["192.0.0.0", 24], ["192.0.2.0", 24], ["192.88.99.0", 24], ["192.168.0.0", 16], ["198.18.0.0", 15], ["198.51.100.0", 24],
  ["203.0.113.0", 24], ["224.0.0.0", 4], ["240.0.0.0", 4],
] as const) blocked.addSubnet(net, prefix, "ipv4");
for (const [net, prefix] of [
  ["::", 128], ["::1", 128], ["fc00::", 7], ["fe80::", 10], ["ff00::", 8], ["2001:db8::", 32], ["100::", 64], ["2001::", 23],
] as const) blocked.addSubnet(net, prefix, "ipv6");

const BLOCKED_HOST_SUFFIX = /(^|\.)(localhost|local|internal|intranet|lan|home|corp|localdomain|home\.arpa|in-addr\.arpa|ip6\.arpa)$/i;

export function isBlockedIp(ip: string): boolean {
  const v = isIP(ip);
  if (v === 4) return blocked.check(ip, "ipv4");
  if (v === 6) {
    const lower = ip.toLowerCase();
    const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(lower) ?? /^64:ff9b::(\d+\.\d+\.\d+\.\d+)$/.exec(lower);
    if (mapped) return blocked.check(mapped[1], "ipv4");
    return blocked.check(lower, "ipv6");
  }
  return true;
}

export interface SafetyOptions {
  /** Test-only: hostnames with this suffix are mapped to a local fixture server. */
  testHostSuffix?: string;
}

const cache = new Map<string, { ok: boolean; reason: string; at: number }>();

export async function checkDestination(rawUrl: string, opts: SafetyOptions = {}): Promise<{ ok: boolean; reason: string }> {
  let u: URL;
  try {
    u = new URL(rawUrl);
  } catch {
    return { ok: false, reason: "invalid URL" };
  }
  if (u.protocol === "data:" || u.protocol === "blob:" || u.protocol === "about:") return { ok: true, reason: "inline" };
  if (u.protocol !== "http:" && u.protocol !== "https:") return { ok: false, reason: `scheme ${u.protocol} not allowed` };
  if (u.username || u.password) return { ok: false, reason: "credentials in URL" };
  if (u.port && u.port !== "80" && u.port !== "443") return { ok: false, reason: `port ${u.port} not allowed` };
  const host = u.hostname.replace(/^\[|\]$/g, "").toLowerCase();
  if (opts.testHostSuffix && host.endsWith(opts.testHostSuffix)) return { ok: true, reason: "test fixture host" };
  if (isIP(host)) return isBlockedIp(host) ? { ok: false, reason: "private/reserved IP" } : { ok: true, reason: "public IP" };
  if (BLOCKED_HOST_SUFFIX.test(host) || !host.includes(".")) return { ok: false, reason: "internal hostname" };
  const hit = cache.get(host);
  if (hit && Date.now() - hit.at < 300_000) return hit;
  let res: { ok: boolean; reason: string };
  try {
    const addrs = await lookup(host, { all: true, verbatim: true });
    const bad = addrs.find((a) => isBlockedIp(a.address));
    res = addrs.length === 0 ? { ok: false, reason: "no DNS records" } : bad ? { ok: false, reason: `resolves to private/reserved IP` } : { ok: true, reason: "public" };
  } catch {
    res = { ok: false, reason: "DNS lookup failed" };
  }
  cache.set(host, { ...res, at: Date.now() });
  return res;
}
