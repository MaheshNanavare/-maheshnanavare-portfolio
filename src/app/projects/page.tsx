import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Websites and software I have designed, built and shipped.",
};

export default function ProjectsPage() {
  return (
    <section>
      <PageHeader
        title="Projects"
        subtitle="Websites and software I have designed, built and shipped — for non-profits, community organisations and clubs."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
