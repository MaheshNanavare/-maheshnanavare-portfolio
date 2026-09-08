"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/data/site";

/**
 * The one client component on the site — `usePathname` powers the
 * active-link state. No hamburger: four links wrap fine on mobile.
 */
export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-medium tracking-tight hover:text-accent">
          {SITE.name}
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {NAV_LINKS.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active ? "text-accent" : "text-muted hover:text-foreground"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
