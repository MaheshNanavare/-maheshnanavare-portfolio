import Link from "next/link";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {SITE.name}
        <span className="mt-2 block text-accent">{SITE.tagline}</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{SITE.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-slate-900 hover:opacity-90"
        >
          View projects
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
