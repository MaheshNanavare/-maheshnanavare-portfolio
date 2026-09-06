import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const inProgress = project.status === "in-progress";

  return (
    <article className="flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-muted">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h2>
        {inProgress ? (
          <span className="shrink-0 rounded-full border border-accent px-2.5 py-0.5 text-xs font-medium text-accent">
            In Progress
          </span>
        ) : null}
      </div>

      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Visit site
            <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted opacity-70">
            {inProgress ? "Coming soon" : "Link coming soon"}
          </span>
        )}
      </div>
    </article>
  );
}
