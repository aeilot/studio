import type { Metadata } from "next";
import { inspirplanetLanguages, inspirplanetRoute, type Language } from "../inspirplanet-languages";
import { copy } from "./copy";
export function pageMetadata(path: string, lang: Language, index: number): Metadata {
 const c = copy[lang];
 const title = c.meta[index], description = c.meta[index + 3];
 const url = inspirplanetRoute(path, lang);
 const locales: Record<Language, string> = { en: "en_US", "zh-Hans": "zh_CN", "zh-Hant": "zh_TW", ja: "ja_JP", ko: "ko_KR", fr: "fr_FR", de: "de_DE", es: "es_ES" };
 return { title: { absolute: `${title} · InspirPlanet` }, description, alternates: { canonical: url, languages: Object.fromEntries([["x-default", inspirplanetRoute(path)], ...inspirplanetLanguages.map(l => [l.code, inspirplanetRoute(path,l.code)])]) }, openGraph: { title: `${title} · InspirPlanet`, description, url, locale: locales[lang], type: "website", images: [{ url: "/inspirplanet/universe.webp", alt: "InspirPlanet" }] }, twitter: { title: `${title} · InspirPlanet`, description, card: "summary_large_image", images: ["/inspirplanet/universe.webp"] } };
}
