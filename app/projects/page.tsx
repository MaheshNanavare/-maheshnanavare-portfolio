import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Live, deployed projects with working links.",
};

export default function Projects() {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-xl text-muted">
        Everything here is deployed and reachable. If it isn&apos;t live, it
        isn&apos;t listed.
      </p>
      <div className="mt-10">
        <ProjectGrid projects={PROJECTS} />
      </div>
    </div>
  );
}
