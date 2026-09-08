import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} by email, GitHub, or LinkedIn.`,
};

const LINKS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "GitHub", value: "github.com/MaheshNanavare", href: SITE.github },
  { label: "LinkedIn", value: "View profile", href: SITE.linkedin },
];

export default function Contact() {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-muted">
        Open to graduate software engineering roles and interesting projects.
        The quickest way to reach me is email.
      </p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {LINKS.map(({ label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex flex-wrap items-center justify-between gap-2 py-4 hover:text-accent"
            >
              <span className="text-sm text-muted">{label}</span>
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
