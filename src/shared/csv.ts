/**
 * RFC 4180 CSV with spreadsheet formula-injection protection.
 * - Every field is quoted; embedded quotes are doubled; CRLF row endings.
 * - Values starting with = + - @ TAB or CR are prefixed with a single quote so
 *   spreadsheet apps treat them as text.
 * - Output is UTF-8 with a BOM so Excel detects the encoding.
 */
export function csvCell(value: unknown): string {
  let s: string;
  if (value === null || value === undefined) s = "";
  else if (value instanceof Date) s = value.toISOString();
  else if (Array.isArray(value)) s = value.join("; ");
  else if (typeof value === "object") s = JSON.stringify(value);
  else s = String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
}

export function toCsv(columns: readonly string[], rows: Record<string, unknown>[]): string {
  const lines = [columns.map(csvCell).join(",")];
  for (const row of rows) lines.push(columns.map((c) => csvCell(row[c])).join(","));
  return "\uFEFF" + lines.join("\r\n") + "\r\n";
}

export const ATTEMPT_CSV_COLUMNS = [
  "campaign_id",
  "run_id",
  "attempt_id",
  "website",
  "verified_business_label",
  "discovery_query",
  "discovery_source_url",
  "contact_form_url",
  "final_page_url",
  "timestamp_utc",
  "subject",
  "message",
  "template_version",
  "mode",
  "outcome",
  "error_or_skip_reason",
  "confirmation_text",
  "evidence_files",
] as const;

export const CANDIDATE_CSV_COLUMNS = [
  "campaign_id",
  "candidate_id",
  "website",
  "domain",
  "verified_business_label",
  "search_title",
  "discovery_query",
  "discovery_source_url",
  "discovered_run_id",
  "review_status",
  "filtered_reason",
  "suitability_notes",
  "inspection_status",
  "contact_page_url",
  "form_found",
  "adapter_status",
  "adapter_test_status",
  "discovered_at_utc",
] as const;
