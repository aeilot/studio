import type { MetadataRoute } from "next";
import { rediscoverLanguages, route } from "@/lib/rediscover-languages";
import { siteUrl } from "@/lib/site";

import { inspirplanetLanguages, inspirplanetRoute } from "@/lib/inspirplanet-languages";

const rediscoverPages = [
  { path: "", updated: "2026-10-07", priority: 1 },
  { path: "/support", updated: "2026-09-28", priority: 0.5 },
  { path: "/privacy", updated: "2026-09-21", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = new URL(siteUrl()).origin;
  const url = (path: string) => new URL(path, origin).href;
  // /about redirects off-site and /members is a placeholder; keep them out.
  const studio: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: "2026-10-07", changeFrequency: "monthly", priority: 0.8 },
  ];
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
  const inspirplanet: MetadataRoute.Sitemap = ["", "/support", "/privacy"].flatMap(path => {
    const languages = Object.fromEntries([["x-default", url(inspirplanetRoute(path))], ...inspirplanetLanguages.map(locale => [locale.code, url(inspirplanetRoute(path,locale.code))])]);
    return inspirplanetLanguages.map(locale => ({ url: url(inspirplanetRoute(path,locale.code)), lastModified: "2026-10-02", changeFrequency: "monthly" as const, priority: path === "" ? 0.9 : 0.4, alternates: { languages } }));
  });
  return [...studio, ...rediscover, ...inspirplanet];
}
