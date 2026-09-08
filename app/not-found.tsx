import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">
        That page doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-8 inline-block text-accent hover:underline">
        &larr; Back home
      </Link>
    </div>
  );
}
