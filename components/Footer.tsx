import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
        <div className="flex gap-5">
          <a href={SITE.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={SITE.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
