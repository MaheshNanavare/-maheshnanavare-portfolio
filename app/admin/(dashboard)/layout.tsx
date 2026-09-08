import LogoutButton from "./LogoutButton";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-12 sm:py-16">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-medium tracking-tight">Admin</span>
        <LogoutButton />
      </div>
      <div className="pt-8">{children}</div>
    </div>
  );
}
