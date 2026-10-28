import Link from "next/link";
import { candidateDetail } from "@/server/queries";
import { getCampaign, senderOf } from "@/server/services/campaigns";
import { getTemplateVersion } from "@/server/services/templates";
import { renderTemplate, validateOutgoingMessage } from "@/shared/message";
import { analyzeForm } from "@/shared/forms";
import { ActionButton, Time } from "../../../ui/client";
import { StatusBadge } from "../../../ui/badge";
import { AdapterControls, LabelEditor, MappingEditor, ReviewControls } from "./controls";

export default async function CandidatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const d = await candidateDetail(id);
  const c = d.candidate as Record<string, string | boolean | null>;
  const campaign = await getCampaign(c.campaign_id as string);
  const version = campaign.active_template_version_id ? await getTemplateVersion(campaign.active_template_version_id) : null;
  const draft = version ? renderTemplate(version, senderOf(campaign), { verifiedBusinessName: c.label_verified ? (c.label as string) : null }) : null;
  const draftCheck = draft ? validateOutgoingMessage(draft) : null;
  const page = d.pages[0];
  const analysis = page?.fields?.fields && page.flags ? analyzeForm(page.fields, page.flags) : null;
  return (
    <div>
      <p><Link href="/candidates">← Review queue</Link></p>
      <h1 className="wrap">{c.domain as string}</h1>
      {d.suppressed && <div className="alert bad">This business is suppressed / opted out. It will never be contacted.</div>}
      <div className="grid2">
        <div className="panel">
          <h2>Website</h2>
          <dl className="kv">
            <dt>Website</dt><dd><a href={c.url as string} target="_blank" rel="noreferrer noopener nofollow">{c.url as string}</a></dd>
            <dt>Business label</dt><dd>{c.label ? `${c.label} ${c.label_verified ? "(verified)" : "(unverified)"}` : <span className="muted">not set</span>}</dd>
            <dt>Search title</dt><dd>{c.title as string}</dd>
            <dt>Search query</dt><dd>{c.discovery_query as string}</dd>
            <dt>Source URL</dt><dd className="mono small">{c.source_url as string}</dd>
            <dt>Linked domains</dt><dd>{d.domains.join(", ")}</dd>
            <dt>Review status</dt><dd><StatusBadge status={c.review_status as string} /> {c.reviewed_by ? <span className="small muted">by {c.reviewed_by as string}</span> : null}</dd>
            <dt>Inspection</dt><dd><StatusBadge status={c.inspection_status as string} /> {c.inspection_error ? <span className="small">{c.inspection_error as string}</span> : null}</dd>
          </dl>
          <h3 style={{ marginTop: 14 }}>Suitability notes</h3>
          <pre data-testid="suitability">{(c.suitability_notes as string) || "—"}</pre>
          <LabelEditor candidateId={id} label={(c.label as string) ?? ""} verified={!!c.label_verified} />
        </div>
        <div className="panel">
          <h2>Review</h2>
          <ReviewControls candidateId={id} status={c.review_status as string} />
          <h3 style={{ marginTop: 16 }}>Review history</h3>
          {d.approvals.length === 0 ? <p className="muted small">No decisions yet.</p> : (
            <ul className="small">
              {d.approvals.map((a) => (
                <li key={a.id}><Time iso={a.created_at} /> — {a.subject}: <strong>{a.decision}</strong> by {a.actor}{a.notes ? ` — ${a.notes}` : ""}</li>
              ))}
            </ul>
          )}
          <div style={{ marginTop: 12 }}>
            <ActionButton path={`/api/candidates/${id}`} method="DELETE" label="Delete candidate data" className="danger" confirm="Permanently delete this candidate, its inspections and screenshots?" />
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>Contact page & form</h2>
        {!page ? <p className="muted">Not inspected yet. Run discovery to inspect.</p> : (
          <>
            <dl className="kv">
              <dt>Inspected URL</dt><dd className="mono small">{page.url}</dd>
              <dt>Final URL</dt><dd className="mono small">{page.final_url}</dd>
              <dt>Inspected</dt><dd><Time iso={page.inspected_at} /></dd>
              <dt>Form found</dt><dd>{page.form_found ? "yes" : "no"} <span className="muted small">{page.notes}</span></dd>
              <dt>Flags</dt>
              <dd className="small">
                purpose: {page.flags?.purpose ?? "—"} · CAPTCHA: {page.flags?.captcha ? `yes (${page.flags.captcha_kinds.join(", ")})` : "no"} · no-solicitation: {page.flags?.no_solicitation ? "YES" : "no"} · consent required: {page.flags?.consent_required ? "yes" : "no"} · robots disallowed: {page.flags?.robots_disallowed ? "yes" : "no"}
              </dd>
            </dl>
            {analysis && analysis.blocking.length > 0 && (
              <div className="alert bad">Automation blocked: {analysis.blocking.join("; ")}. This form can only be handled manually outside the tool.</div>
            )}
            {page.screenshot_evidence_id && (
              <div className="shots" style={{ marginTop: 10 }}>
                <figure>
                  <a href={`/api/evidence/${page.screenshot_evidence_id}`} target="_blank" rel="noreferrer"><img src={`/api/evidence/${page.screenshot_evidence_id}`} alt="Inspected contact page screenshot" /></a>
                  <figcaption>Inspected-page screenshot</figcaption>
                </figure>
              </div>
            )}
          </>
        )}
      </div>

      {d.adapter && page && (
        <div className="panel">
          <h2>Form adapter (field mapping)</h2>
          <div className="row small">
            Status <StatusBadge status={d.adapter.status} /> · Test <StatusBadge status={d.adapter.test_status} /> · v{d.adapter.version}
            {d.adapter.approved_by && <span className="muted">approved by {d.adapter.approved_by}</span>}
          </div>
          {d.adapter.status_reason && <p className="small">{d.adapter.status_reason}</p>}
          {d.adapter.test_details && <p className="small muted">Last test: {d.adapter.test_details}</p>}
          <MappingEditor adapterId={d.adapter.id} mapping={JSON.parse(JSON.stringify(d.adapter.mapping))} fields={JSON.parse(JSON.stringify(page.fields?.fields ?? []))} submitSelector={d.adapter.submit_selector} />
          <AdapterControls adapterId={d.adapter.id} status={d.adapter.status} />
        </div>
      )}

      <div className="panel">
        <h2>Proposed message</h2>
        {!draft ? <p className="muted">No active template.</p> : (
          <>
            <div className="small">Template {version?.kind} v{version?.version} · {draftCheck?.ok ? <span className="badge ok">passes validation</span> : <span className="badge bad">blocked: {draftCheck?.errors.join("; ")}</span>}</div>
            <pre style={{ marginTop: 8 }} data-testid="proposed-message"><strong>{draft.subject}</strong>{"\n\n"}{draft.body}</pre>
          </>
        )}
      </div>

      <div className="panel">
        <h2>Evidence & attempts</h2>
        <div className="shots">
          {d.evidence.map((e) => (
            <figure key={e.id}>
              {e.stored ? <a href={`/api/evidence/${e.id}`} target="_blank" rel="noreferrer"><img src={`/api/evidence/${e.id}`} alt={`${e.kind} screenshot`} /></a> : <div className="alert warn">Capture failed: {e.capture_error}</div>}
              <figcaption>{e.kind} · <Time iso={e.created_at} /></figcaption>
            </figure>
          ))}
        </div>
        <ul className="small">
          {d.attempts.map((a) => <li key={a.id}><Link href={`/records/${a.id}`}>{a.mode} attempt {String(a.id).slice(0, 8)}</Link> — <StatusBadge status={a.status} /> <Time iso={a.reserved_at} /></li>)}
        </ul>
      </div>
    </div>
  );
}
