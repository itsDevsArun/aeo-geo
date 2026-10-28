/** State export -> fresh DB -> import must be lossless (GitHub-only mode durability). */
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import postgres from "postgres";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../helpers/db";
import { migrate } from "../../scripts/migrate";
import { exportDb, importDb, STATE_TABLES } from "../../scripts/gh/state";
import { parseCsv, parseTemplateFile } from "../../scripts/gh/config";
import { mdBlock, mdCell } from "../../scripts/gh/report";

let a: { url: string; drop: () => Promise<void> };
let b: { url: string; drop: () => Promise<void> };
beforeAll(async () => {
  a = await createTestDatabase();
  b = await createTestDatabase();
});
afterAll(async () => {
  await a?.drop();
  await b?.drop();
});

describe("state round trip", () => {
  it("exports and re-imports every table exactly, including circular FKs, arrays, jsonb and sequences", async () => {
    const s1 = postgres(a.url, { max: 1, onnotice: () => {} });
    const [c] = await s1`insert into campaigns (name, search_queries, excluded_domains) values ('C', ${["q, with comma", "q2"]}, ${["x.com"]}) returning id`;
    const [t] = await s1`insert into message_templates (campaign_id, kind, name) values (${c.id}, 'short', 'S') returning id`;
    const [v] = await s1`insert into template_versions (template_id, version, subject, body, offer_facts, created_by) values (${t.id}, 1, 's', ${"line1\nhttps://devsarun.io/aeo-geo/ \"q\""}, ${["$199"]}, 'me') returning id`;
    await s1`update campaigns set active_template_version_id = ${v.id} where id = ${c.id}`;
    const [r] = await s1`insert into runs (campaign_id, mode, requested_by, status) values (${c.id}, 'live', 'me', 'completed') returning id`;
    await s1`insert into run_events (run_id, campaign_id, type, data) values (${r.id}, ${c.id}, 'x', ${s1.json({ nested: { a: [1, 2] } })})`;
    await s1`insert into run_events (run_id, campaign_id, type) values (${r.id}, ${c.id}, 'y')`;
    const dir = mkdtempSync(join(tmpdir(), "state-"));
    await exportDb(s1, dir);

    await migrate(b.url, () => {});
    const s2 = postgres(b.url, { max: 1, onnotice: () => {} });
    await importDb(s2, dir);
    for (const table of STATE_TABLES) {
      const x = await s1.unsafe(`select row_to_json(t)::text as r from ${table} t order by row_to_json(t)::text`);
      const y = await s2.unsafe(`select row_to_json(t)::text as r from ${table} t order by row_to_json(t)::text`);
      expect(y.map((q) => q.r), table).toEqual(x.map((q) => q.r));
    }
    // Sequences continue after imported ids; immutability trigger is active again.
    const [e] = await s2`insert into run_events (run_id, campaign_id, type) values (${r.id}, ${c.id}, 'z') returning id`;
    expect(Number(e.id)).toBe(3);
    await expect(s2`update template_versions set body = 'x' where id = ${v.id}`).rejects.toThrow(/immutable/);
    await s1.end();
    await s2.end();
  });
});

describe("config parsing and report escaping", () => {
  it("parses owner-edited CSV with quotes, commas, comments and blank lines", () => {
    const rows = parseCsv('\uFEFFdomain,decision,notes\r\n# comment\r\nacme.in,approve,"looks ok, ""official"""\r\n\r\nb.in,reject,\n');
    expect(rows).toEqual([{ domain: "acme.in", decision: "approve", notes: 'looks ok, "official"' }, { domain: "b.in", decision: "reject", notes: "" }]);
  });
  it("parses template files", () => {
    const t = parseTemplateFile("Subject: Hello\nOffer-Facts: $199; 16,999 ; negotiable\n---\nHi\n\nBody\n");
    expect(t).toEqual({ subject: "Hello", offerFacts: ["$199", "16,999", "negotiable"], body: "Hi\n\nBody" });
  });
  it("escapes untrusted text in markdown", () => {
    expect(mdCell("a|b [x](javascript:alert(1)) <img src=x>")).toBe("a\\|b \\[x\\](javascript:alert(1)) \\<img src=x\\>");
    expect(mdBlock("evil\n~~~\n# heading")).not.toMatch(/\n~~~\n# heading/);
  });
});
