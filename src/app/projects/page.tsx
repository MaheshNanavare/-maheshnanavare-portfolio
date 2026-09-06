import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I have designed, built and shipped.",
};

export default function ProjectsPage() {
  return (
    <section>
      <PageHeader
        title="Projects"
        subtitle="Things I have designed, built and shipped."
      />
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg border border-black/10 p-5 dark:border-white/15"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">{project.title}</h2>
              <span className="text-sm opacity-60">{project.year}</span>
            </div>
            <p className="mt-2 text-sm opacity-80">{project.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs opacity-70">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-black/10 px-2 py-0.5 dark:border-white/15"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
