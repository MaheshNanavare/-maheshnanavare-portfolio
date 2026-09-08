import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-4 max-w-xl text-muted">You&apos;re signed in.</p>
    </div>
  );
}
