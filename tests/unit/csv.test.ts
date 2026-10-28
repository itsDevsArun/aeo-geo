import { describe, expect, it } from "vitest";
import { ATTEMPT_CSV_COLUMNS, csvCell, toCsv } from "@/shared/csv";

/** Minimal RFC 4180 parser used to prove round-tripping. */
function parseCsv(text: string): string[][] {
  const s = text.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (q) {
      if (ch === '"' && s[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\r" && s[i + 1] === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; i++; }
    else cell += ch;
  }
  return rows;
}

describe("CSV", () => {
  it("escapes commas, quotes and newlines and round-trips", () => {
    const msg = 'Hi "team",\nLine two, with comma\r\nand CRLF';
    const csv = toCsv(["a", "b"], [{ a: msg, b: "plain" }]);
    expect(csv.startsWith("\uFEFF")).toBe(true);
    const rows = parseCsv(csv);
    expect(rows[0]).toEqual(["a", "b"]);
    expect(rows[1]).toEqual([msg, "plain"]);
  });
  it("neutralises spreadsheet formula injection", () => {
    for (const v of ["=HYPERLINK(\"x\")", "+1+1", "-2", "@SUM(A1)", "\tcmd", "\rcmd"]) {
      expect(csvCell(v).startsWith(`"'`)).toBe(true);
    }
    expect(csvCell("https://devsarun.io/aeo-geo/")).toBe('"https://devsarun.io/aeo-geo/"');
  });
  it("handles null, dates, arrays and objects consistently", () => {
    expect(csvCell(null)).toBe('""');
    expect(csvCell(new Date("2026-01-02T03:04:05.000Z"))).toBe('"2026-01-02T03:04:05.000Z"');
    expect(csvCell(["a", "b"])).toBe('"a; b"');
    expect(csvCell({ k: 1 })).toBe('"{""k"":1}"');
  });
  it("has stable, required attempt columns", () => {
    for (const c of ["campaign_id", "run_id", "attempt_id", "website", "contact_form_url", "final_page_url", "timestamp_utc", "message", "template_version", "mode", "outcome", "confirmation_text", "evidence_files"]) {
      expect(ATTEMPT_CSV_COLUMNS).toContain(c);
    }
  });
});
