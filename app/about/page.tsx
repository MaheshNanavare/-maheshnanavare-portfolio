import type { Metadata } from "next";
import SkillList from "@/components/SkillList";
import { BIO, ROLES } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MSc Computer Science at the University of Bristol, Graduate Teacher, and volunteer web developer.",
};

export default function About() {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-4 text-muted">
        {BIO.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-medium tracking-tight">Roles</h2>
        <ul className="mt-4 space-y-4">
          {ROLES.map(({ title, org, detail }) => (
            <li key={`${title}-${org}`} className="border-l border-line pl-4">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-accent">{org}</p>
              <p className="mt-1 text-sm text-muted">{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium tracking-tight">Skills</h2>
        <div className="mt-4">
          <SkillList />
        </div>
      </section>
    </div>
  );
}
