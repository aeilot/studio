import type { MetadataRoute } from "next";
import { rediscoverLanguages, route } from "@/lib/rediscover-languages";
import { siteUrl } from "@/lib/site";

const rediscoverPages = [
  { path: "", updated: "2026-09-28", priority: 1 },
  { path: "/support", updated: "2026-09-28", priority: 0.5 },
  { path: "/privacy", updated: "2026-09-21", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = new URL(siteUrl()).origin;
  const url = (path: string) => new URL(path, origin).href;
  const studio: MetadataRoute.Sitemap = ["/", "/about", "/members"].map(
    (path) => ({ url: url(path), changeFrequency: "monthly", priority: 0.6 }),
  );
  const rediscover = rediscoverPages.flatMap(({ path, updated, priority }) => {
    const languages = Object.fromEntries([
      ["x-default", url(route(path))],
      ...rediscoverLanguages.map((locale) => [
        locale.code,
        url(route(path, locale.code)),
      ]),
    ]);
    return rediscoverLanguages.map((locale) => ({
      url: url(route(path, locale.code)),
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
  return [...studio, ...rediscover];
}
