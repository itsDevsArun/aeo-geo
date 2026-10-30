/**
 * auto_approve (campaign.json): the owner pre-approves every website whose contact form
 * passed ALL automatic checks. A form only reaches adapter status "proposed" when:
 *  - no CAPTCHA / anti-bot, no "no solicitation" notice, robots.txt allows it
 *  - the form is a general business enquiry form (not job, booking, patient, complaint,
 *    emergency, support, newsletter, login or search)
 *  - no required consent box, file upload, unknown required field or required last name
 *  - it has email + message fields and a submit button
 * Everything else stays in the review queue for manual handling.
 */
import { db } from "../../src/server/db";
import * as candidates from "../../src/server/services/candidates";

export async function approveCleanCandidates(campaignId: string, actor: string): Promise<number> {
  const rows = await db()<{ id: string }[]>`
    select c.id from candidates c join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${campaignId} and c.review_status = 'pending' and c.inspection_status = 'inspected' and a.status = 'proposed'
      and not exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = c.business_id)`;
  let n = 0;
  for (const r of rows) {
    try {
      await candidates.reviewCandidate(r.id, { decision: "approve", attestPermitted: true, notes: "Auto-approved: form passed all automatic checks (campaign.json auto_approve=true)" }, actor);
      n++;
    } catch {
      /* e.g. suppressed meanwhile: leave for manual review */
    }
  }
  return n;
}

export async function approveTestedAdapters(campaignId: string, actor: string): Promise<number> {
  const rows = await db()<{ id: string }[]>`
    select a.id from form_adapters a join candidates c on c.id = a.candidate_id
    where c.campaign_id = ${campaignId} and c.review_status = 'approved' and a.status = 'proposed' and a.test_status = 'passed'`;
  let n = 0;
  for (const r of rows) {
    try {
      await candidates.decideAdapter(r.id, { decision: "approve", notes: "Auto-approved after passing the dry run" }, actor);
      n++;
    } catch {
      /* blocked on re-check: stays for manual review */
    }
  }
  return n;
}
