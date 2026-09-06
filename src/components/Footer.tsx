import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15">
      <div className="mx-auto max-w-3xl px-6 py-6 text-sm opacity-70">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
