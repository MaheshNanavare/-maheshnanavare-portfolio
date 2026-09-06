import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        {site.name}
      </h1>
      <p className="mt-4 max-w-prose opacity-80">
        Placeholder intro. Say what you build, who you build it for, and what
        you are looking for next.
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/projects" className="underline underline-offset-4">
          View projects
        </Link>
        <Link href="/calendar" className="underline underline-offset-4">
          Book time
        </Link>
      </div>
    </section>
  );
}
