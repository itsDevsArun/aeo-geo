"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api, ErrorBox, Time } from "../../ui/client";

type CampaignPlain = Record<string, unknown> & { id: string };

const lines = (v: unknown) => (Array.isArray(v) ? v.join("\n") : "");
const toList = (s: string) => s.split(/[\n,]/).map((x) => x.trim()).filter(Boolean);

export function CampaignSettingsForm({ campaign }: { campaign: CampaignPlain }) {
  const router = useRouter();
  const [f, setF] = useState({
    name: String(campaign.name),
    industry: String(campaign.industry),
    country: String(campaign.country),
    city_region: String(campaign.city_region),
    search_language: String(campaign.search_language),
    search_queries: lines(campaign.search_queries),
    max_candidates: String(campaign.max_candidates),
    max_live_attempts_per_run: String(campaign.max_live_attempts_per_run),
    min_delay_seconds: String(campaign.min_delay_seconds),
    excluded_domains: lines(campaign.excluded_domains),
    dry_run_fill_domains: lines(campaign.dry_run_fill_domains),
    sender_name: String(campaign.sender_name),
    sender_business: String(campaign.sender_business),
    sender_email: String(campaign.sender_email),
    sender_phone: String(campaign.sender_phone),
    sender_website: String(campaign.sender_website),
    evidence_retention_days: String(campaign.evidence_retention_days),
    live_enabled: Boolean(campaign.live_enabled),
  });
  const [error, setError] = useState<Error | null>(null);
  const [saved, setSaved] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value });
  const field = (k: keyof typeof f, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`f-${k}`}>{label}</label>
      <input id={`f-${k}`} value={String(f[k])} onChange={set(k)} {...props} />
    </div>
  );
  const area = (k: keyof typeof f, label: string, hint: string) => (
    <div>
      <label htmlFor={`f-${k}`}>{label}</label>
      <textarea id={`f-${k}`} value={String(f[k])} onChange={set(k)} placeholder={hint} />
    </div>
  );
  return (
    <form
      className="panel"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setSaved(false);
        if (f.live_enabled && !campaign.live_enabled && !window.confirm("Enable LIVE outreach for this campaign? Live runs will submit real contact forms for approved targets.")) return;
        try {
          await api(`/api/campaigns/${campaign.id}`, "PATCH", {
            ...f,
            search_queries: f.search_queries.split("\n").map((q) => q.trim()).filter(Boolean),
            excluded_domains: toList(f.excluded_domains),
            dry_run_fill_domains: toList(f.dry_run_fill_domains),
            max_candidates: Number(f.max_candidates),
            max_live_attempts_per_run: Number(f.max_live_attempts_per_run),
            min_delay_seconds: Number(f.min_delay_seconds),
            evidence_retention_days: Number(f.evidence_retention_days),
          });
          setSaved(true);
          router.refresh();
        } catch (err) {
          setError(err as Error);
        }
      }}
    >
      <h2>Target market & limits</h2>
      <div className="grid2">
        <div>
          {field("name", "Campaign name")}
          {field("industry", "Industry / niche (required for discovery)", { placeholder: "e.g. dental clinics" })}
          {field("country", "Country (2-letter code)", { placeholder: "e.g. IN, US, GB", maxLength: 3 })}
          {field("city_region", "City / region (required for discovery)", { placeholder: "e.g. Bangalore" })}
          {field("search_language", "Search language", { placeholder: "en" })}
          <label htmlFor="f-search_queries">Search queries (one per line; optional — generated from industry + city if empty)</label>
          <textarea id="f-search_queries" value={f.search_queries} onChange={set("search_queries")} />
        </div>
        <div>
          {field("max_candidates", "Maximum candidates (campaign total)", { type: "number", min: 1, max: 2000 })}
          {field("max_live_attempts_per_run", "Maximum live submission attempts per run", { type: "number", min: 0, max: 500 })}
          {field("min_delay_seconds", "Minimum delay between websites (seconds)", { type: "number", min: 5, max: 3600 })}
          {area("excluded_domains", "Excluded domains", "one per line, e.g. competitor.com")}
          {area("dry_run_fill_domains", "Dry-run fill domains (test forms you own; dry runs type into these only)", "e.g. my-test-site.com")}
          {field("evidence_retention_days", "Screenshot retention (days)", { type: "number", min: 7, max: 3650 })}
        </div>
      </div>
      <h2 style={{ marginTop: 20 }}>Sender details</h2>
      <div className="grid2">
        <div>
          {field("sender_name", "Name")}
          {field("sender_business", "Business")}
          {field("sender_email", "Email", { type: "email" })}
        </div>
        <div>
          {field("sender_phone", "Phone / WhatsApp")}
          {field("sender_website", "Website (used for 'website' form fields)", { type: "url" })}
        </div>
      </div>
      <h2 style={{ marginTop: 20 }}>Mode</h2>
      <label className="row" style={{ color: "var(--text)", fontSize: 14 }}>
        <input type="checkbox" checked={f.live_enabled} onChange={set("live_enabled")} data-testid="live-enabled" /> Allow live runs for this campaign (dry-run is the default; each live run still requires typing START LIVE)
      </label>
      <div style={{ marginTop: 14 }} className="row">
        <button className="primary" type="submit">Save settings</button>
        {saved && <span className="badge ok">Saved</span>}
      </div>
      <ErrorBox error={error} />
    </form>
  );
}

interface Version { id: string; kind: "short" | "standard"; version: number; subject: string; body: string; offer_facts: string[]; created_by: string; created_at: string }

export function TemplateEditor({ campaignId, activeVersionId, versions }: { campaignId: string; activeVersionId: string | null; versions: Version[] }) {
  const router = useRouter();
  const [kind, setKind] = useState<"short" | "standard">((versions.find((v) => v.id === activeVersionId)?.kind) ?? "short");
  const latest = versions.find((v) => v.kind === kind);
  const [subject, setSubject] = useState(latest?.subject ?? "");
  const [body, setBody] = useState(latest?.body ?? "");
  const [facts, setFacts] = useState((latest?.offer_facts ?? []).join(", "));
  const [businessName, setBusinessName] = useState("");
  const [preview, setPreview] = useState<{ rendered: { subject: string; body: string }; valid: boolean; errors: string[]; length: number } | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const l = versions.find((v) => v.kind === kind);
    setSubject(l?.subject ?? "");
    setBody(l?.body ?? "");
    setFacts((l?.offer_facts ?? []).join(", "));
  }, [kind, versions]);
  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        setPreview(await api(`/api/campaigns/${campaignId}/preview`, "POST", { subject, body, businessName: businessName || undefined }));
      } catch {
        /* preview is best effort */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [subject, body, businessName, campaignId]);
  return (
    <div className="panel">
      <h2>Message templates</h2>
      <p className="small muted">
        Placeholders: {"{{greeting_name}} {{sender_name}} {{sender_business}} {{sender_email}} {{sender_phone}} {{service_link}}"}. Every message must contain https://devsarun.io/aeo-geo/ — saving and sending are blocked otherwise. Versions are immutable; saving creates a new version.
      </p>
      <div className="row">
        <button className={kind === "short" ? "primary" : ""} onClick={() => setKind("short")}>Short version</button>
        <button className={kind === "standard" ? "primary" : ""} onClick={() => setKind("standard")}>Standard version</button>
      </div>
      <div className="grid2" style={{ marginTop: 10 }}>
        <div>
          <label htmlFor="t-subject">Subject (editable)</label>
          <input id="t-subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <label htmlFor="t-body">Body</label>
          <textarea id="t-body" value={body} onChange={(e) => setBody(e.target.value)} style={{ minHeight: 260 }} data-testid="template-body" />
          <label htmlFor="t-facts">Offer facts this text relies on (comma separated; checked against the live service page before every live run)</label>
          <input id="t-facts" value={facts} onChange={(e) => setFacts(e.target.value)} placeholder="$199, 16,999, negotiable" />
          <div className="row" style={{ marginTop: 10 }}>
            <button
              className="primary"
              data-testid="save-template"
              onClick={async () => {
                setError(null);
                try {
                  await api(`/api/campaigns/${campaignId}/templates`, "POST", { kind, subject, body, offerFacts: facts.split(",").map((s) => s.trim()).filter(Boolean) });
                  router.refresh();
                } catch (e) {
                  setError(e as Error);
                }
              }}
            >
              Save as new version
            </button>
          </div>
          <ErrorBox error={error} />
        </div>
        <div>
          <label htmlFor="t-bn">Preview with verified business name (optional)</label>
          <input id="t-bn" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="leave empty for 'Hi there'" />
          <label>Preview</label>
          {preview && (
            <>
              <div className="row small">
                {preview.valid ? <span className="badge ok">valid</span> : <span className="badge bad">blocked</span>} <span className="muted">{preview.length} characters</span>
              </div>
              {!preview.valid && (
                <ul className="small" style={{ color: "var(--danger)" }} data-testid="preview-errors">
                  {preview.errors.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              )}
              <pre style={{ marginTop: 6 }}><strong>{preview.rendered.subject}</strong>{"\n\n"}{preview.rendered.body}</pre>
            </>
          )}
        </div>
      </div>
      <h3 style={{ marginTop: 16 }}>Version history</h3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Template</th><th>Version</th><th>Subject</th><th>Created</th><th>Status</th></tr></thead>
          <tbody>
            {versions.map((v) => (
              <tr key={v.id}>
                <td>{v.kind}</td><td>v{v.version}</td><td className="wrap">{v.subject}</td>
                <td><Time iso={v.created_at} /> <span className="muted small">{v.created_by}</span></td>
                <td>
                  {v.id === activeVersionId ? <span className="badge ok">active</span> : (
                    <button onClick={async () => {
                      try {
                        await api(`/api/campaigns/${campaignId}/templates/activate`, "POST", { versionId: v.id });
                        router.refresh();
                      } catch (e) {
                        setError(e as Error);
                      }
                    }}>Use this version</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ServicePageCheck() {
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  return (
    <div className="panel">
      <h2>Service page offer check</h2>
      <p className="small muted">Fetches https://devsarun.io/aeo-geo/ now and checks that the facts used by your templates are still on the page. Live runs repeat this check automatically and stop if anything is missing.</p>
      <button onClick={async () => {
        setError(null);
        try {
          setData(await api("/api/service-page"));
        } catch (e) {
          setError(e as Error);
        }
      }}>Check service page now</button>
      <ErrorBox error={error} />
      {data && <pre style={{ marginTop: 10 }}>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export function SuppressionForm() {
  const router = useRouter();
  const [domain, setDomain] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState<Error | null>(null);
  return (
    <div className="row">
      <input placeholder="domain.com" value={domain} onChange={(e) => setDomain(e.target.value)} style={{ maxWidth: 260 }} />
      <input placeholder="reason (e.g. opted out by email)" value={reason} onChange={(e) => setReason(e.target.value)} style={{ maxWidth: 320 }} />
      <button onClick={async () => {
        setError(null);
        try {
          await api("/api/suppressions", "POST", { domain, reason });
          setDomain("");
          setReason("");
          router.refresh();
        } catch (e) {
          setError(e as Error);
        }
      }}>Suppress domain</button>
      <ErrorBox error={error} />
    </div>
  );
}

export function LinkDomainsForm() {
  const router = useRouter();
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState<Error | null>(null);
  return (
    <div className="row">
      <input placeholder="primary-domain.com" value={a} onChange={(e) => setA(e.target.value)} style={{ maxWidth: 240 }} />
      <input placeholder="related-domain.co.in" value={b} onChange={(e) => setB(e.target.value)} style={{ maxWidth: 240 }} />
      <button onClick={async () => {
        setError(null);
        try {
          await api("/api/businesses/link", "POST", { primaryDomain: a, relatedDomain: b });
          setMsg(`Linked ${b} to ${a}`);
          router.refresh();
        } catch (e) {
          setError(e as Error);
        }
      }}>Link as same business</button>
      {msg && <span className="badge ok">{msg}</span>}
      <ErrorBox error={error} />
    </div>
  );
}
