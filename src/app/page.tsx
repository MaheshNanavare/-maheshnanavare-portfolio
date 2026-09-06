import Link from "next/link";
import { site } from "@/lib/site";

const focus = [
  "Full-stack web development",
  "TypeScript & React",
  "Teaching & mentoring",
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section>
        <p className="text-sm font-medium tracking-wide text-accent">
          Open to software developer roles
        </p>

        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {site.name}
        </h1>

        <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-muted">
          MSc Computer Science graduate from the{" "}
          <span className="text-foreground">University of Bristol</span> and a{" "}
          <span className="text-foreground">Graduate Teacher</span>. I build
          software for the web and I am looking for my next software developer
          role.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View my projects
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section aria-labelledby="focus-heading">
        <h2
          id="focus-heading"
          className="text-xs font-semibold uppercase tracking-widest text-muted"
        >
          What I focus on
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {focus.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border px-4 py-3 text-sm leading-snug"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next-heading">
        <h2
          id="next-heading"
          className="text-xs font-semibold uppercase tracking-widest text-muted"
        >
          Elsewhere on this site
        </h2>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          <li>
            <Link
              href="/projects"
              className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <span className="font-medium">Projects</span>
              <span className="text-sm text-muted group-hover:text-accent">
                Things I have built &rarr;
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/calendar"
              className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <span className="font-medium">Calendar</span>
              <span className="text-sm text-muted group-hover:text-accent">
                Availability &amp; events &rarr;
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
