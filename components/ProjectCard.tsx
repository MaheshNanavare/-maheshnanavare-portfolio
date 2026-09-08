import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, liveUrl, repoUrl, screenshot } = project;

  return (
    <article className="group overflow-hidden rounded-lg border border-line transition-colors hover:border-slate-700">
      <a href={liveUrl} aria-label={`${title} — live site`}>
        <Image
          src={screenshot}
          alt={`Screenshot of ${title}`}
          width={800}
          height={500}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="aspect-[8/5] w-full object-cover object-top"
        />
      </a>
      <div className="p-5">
        <h3 className="font-medium">
          <a href={liveUrl} className="group-hover:text-accent">
            {title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded border border-line px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-4 text-sm">
          <a href={liveUrl} className="text-accent hover:underline">
            Live site &rarr;
          </a>
          {repoUrl && (
            <a href={repoUrl} className="text-muted hover:text-foreground">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
