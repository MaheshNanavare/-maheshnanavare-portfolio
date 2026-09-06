export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? <p className="mt-2 opacity-70">{subtitle}</p> : null}
    </div>
  );
}
