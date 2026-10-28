import Link from "next/link";
import { requirePageUser } from "@/server/auth";
import { LogoutButton } from "../ui/client";

export const dynamic = "force-dynamic";

export default async function DashLayout({ children }: { children: React.ReactNode }) {
  const user = await requirePageUser();
  return (
    <div className="shell">
      <nav className="nav" aria-label="Main">
        <div className="brand">Devs Arun Outreach</div>
        <div className="sub">AEO/GEO contact-form outreach</div>
        <Link href="/">Overview</Link>
        <Link href="/campaign">Campaign</Link>
        <Link href="/candidates">Review queue</Link>
        <Link href="/runs">Runs</Link>
        <Link href="/records">Records</Link>
        <Link href="/audit">Audit log</Link>
        <div className="who">
          {user.email}
          <div style={{ marginTop: 8 }}>
            <LogoutButton />
          </div>
        </div>
      </nav>
      <main className="main">{children}</main>
    </div>
  );
}
