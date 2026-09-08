import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
  /** Shown when there is nothing to list. */
  emptyMessage?: string;
};

export default function ProjectGrid({ projects, emptyMessage }: Props) {
  if (projects.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-line px-6 py-10 text-center text-muted">
        {emptyMessage ??
          "Projects launching soon — only live, deployed work gets listed here."}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
