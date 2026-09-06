"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="rounded-sm text-[0.9375rem] font-semibold tracking-tight transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {site.name}
        </Link>

        <ul className="flex items-center gap-1">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active
                      ? "font-medium text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
