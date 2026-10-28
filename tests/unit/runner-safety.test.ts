import { describe, expect, it } from "vitest";
import { checkDestination, isBlockedIp } from "../../runner/safety";
import { isAllowed, parseRobots } from "../../runner/robots";

describe("destination guard", () => {
  it("blocks private, loopback, link-local, metadata and mapped addresses", () => {
    for (const ip of ["127.0.0.1", "10.1.2.3", "172.16.0.1", "192.168.1.1", "169.254.169.254", "100.64.0.1", "0.0.0.0", "::1", "fe80::1", "fd00::1", "::ffff:127.0.0.1", "::ffff:10.0.0.1"]) {
      expect(isBlockedIp(ip), ip).toBe(true);
    }
    expect(isBlockedIp("93.184.216.34")).toBe(false);
    expect(isBlockedIp("2606:4700::1111")).toBe(false);
  });
  it("blocks unsafe schemes, ports, credentials and internal names", async () => {
    for (const u of ["file:///etc/passwd", "ftp://example.com/", "http://example.com:8080/", "http://u:p@example.com/", "http://localhost/", "http://printer.local/", "http://169.254.169.254/latest/meta-data", "http://intranet/"]) {
      expect((await checkDestination(u)).ok, u).toBe(false);
    }
    expect((await checkDestination("data:image/png;base64,AA")).ok).toBe(true);
  });
  it("allows fixture hosts only when the test suffix is configured", async () => {
    expect((await checkDestination("http://acme.test/", { testHostSuffix: ".test" })).ok).toBe(true);
    expect((await checkDestination("http://acme.test/")).ok).toBe(false);
  });
});

describe("robots.txt", () => {
  it("respects disallow rules for our agent and *", () => {
    const r = parseRobots("User-agent: *\nDisallow: /private\nAllow: /private/contact\n\nUser-agent: OtherBot\nDisallow: /");
    expect(isAllowed(r, "/")).toBe(true);
    expect(isAllowed(r, "/private/x")).toBe(false);
    expect(isAllowed(r, "/private/contact")).toBe(true);
    expect(isAllowed(parseRobots("User-agent: *\nDisallow: /"), "/contact")).toBe(false);
    expect(isAllowed(parseRobots("User-agent: DevsArunOutreachBot\nDisallow: /\n\nUser-agent: *\nAllow: /"), "/contact")).toBe(false);
  });
});
