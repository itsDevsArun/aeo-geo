import type { RunRow } from "@/server/runner-auth";

export const ACTOR = "owner@example.com";

export function runRow(r: { id: string; campaign_id: string; mode: string; status: string; deadline_at: Date | null; stop_requested_at: Date | null; cancel_requested_at: Date | null; budget_minutes: number }): RunRow {
  return { id: r.id, campaign_id: r.campaign_id, mode: r.mode as RunRow["mode"], status: r.status, deadline_at: r.deadline_at, stop_requested_at: r.stop_requested_at, cancel_requested_at: r.cancel_requested_at, budget_minutes: r.budget_minutes };
}

export const STANDARD_FORM = {
  selector: "#contact",
  action: "/send",
  method: "post",
  text: "Contact us",
  submitSelector: "#send",
  submitText: "Send",
  fields: [
    { selector: "#name", tag: "input", type: "text", name: "name", id: "name", label: "Your name", placeholder: "", autocomplete: "", required: true, visible: true },
    { selector: "#email", tag: "input", type: "email", name: "email", id: "email", label: "Email", placeholder: "", autocomplete: "", required: true, visible: true },
    { selector: "#message", tag: "textarea", type: "textarea", name: "message", id: "message", label: "Message", placeholder: "", autocomplete: "", required: true, visible: true },
  ],
};

export const CLEAN_FLAGS = {
  captcha: false,
  captcha_kinds: [],
  no_solicitation: false,
  consent_required: false,
  login_required: false,
  purpose: "general_enquiry",
  robots_disallowed: false,
  file_upload_required: false,
  multi_step: false,
};
