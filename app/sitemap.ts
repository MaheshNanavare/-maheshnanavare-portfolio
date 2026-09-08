import type { MetadataRoute } from "next";
import { NAV_LINKS, SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return NAV_LINKS.map(({ href }) => ({
    url: new URL(href, SITE.url).toString(),
    lastModified,
  }));
}
