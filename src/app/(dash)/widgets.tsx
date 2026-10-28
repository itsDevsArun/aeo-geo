"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ErrorBox } from "../ui/client";

export function CreateCampaign() {
  const router = useRouter();
  const [name, setName] = useState("Devs Arun AEO/GEO outreach");
  const [error, setError] = useState<Error | null>(null);
  return (
    <div>
      <label htmlFor="cname">Campaign name</label>
      <div className="row">
        <input id="cname" value={name} onChange={(e) => setName(e.target.value)} style={{ maxWidth: 400 }} />
        <button
          className="primary"
          onClick={async () => {
            try {
              await api("/api/campaigns", "POST", { name });
              router.push("/campaign");
              router.refresh();
            } catch (e) {
              setError(e as Error);
            }
          }}
        >
          Create campaign
        </button>
      </div>
      <ErrorBox error={error} />
    </div>
  );
}
