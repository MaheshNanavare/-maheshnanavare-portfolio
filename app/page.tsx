import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <section className="border-t border-line py-12">
        <h2 className="text-xl font-medium tracking-tight">Featured work</h2>
        <div className="mt-6">
          <ProjectGrid
            projects={featured}
            emptyMessage="First live project launching soon."
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          <Link href="/projects" className="text-accent hover:underline">
            See all projects &rarr;
          </Link>
        </p>
      </section>
    </>
  );
}
