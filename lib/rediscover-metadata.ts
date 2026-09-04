import type { Metadata } from "next";
import {
  rediscoverLanguages,
  route,
  type Language,
} from "./rediscover-languages";
import { translations } from "./rediscover-translations";
import { siteUrl } from "./site";

const ogLocales: Record<Language, string> = {
  ja: "ja_JP",
  ko: "ko_KR",
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES",
  en: "en_US",
  "zh-Hans": "zh_CN",
  "zh-Hant": "zh_TW",
};
export function rediscoverMetadata(
  lang: Language,
  page: "" | "/support" | "/privacy" = "",
): Metadata {
  const c = translations[lang];
  const origin = new URL(siteUrl());
  const url = new URL(route(page, lang), origin).href;
  const title =
    page === "/support"
      ? `${c.feedback} · Rediscover`
      : page === "/privacy"
        ? `${c.privacy} · Rediscover`
        : `Rediscover — ${c.title.replace(/^Rediscover\s+/i, "")}`;
  const description =
    page === "/support"
      ? c.supportIntro
      : page === "/privacy"
        ? c.privacyIntro
        : c.intro;
  const images = [
    {
      url: new URL("/rediscover/opengraph-image", origin).href,
      width: 1200,
      height: 630,
      alt: "Rediscover · iPhone · iPad · Mac",
    },
  ];
  return {
    title: { absolute: page ? title : "Rediscover · Evolution Studio" },
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries([
        ["x-default", new URL(route(page), origin).href],
        ...rediscoverLanguages.map((locale) => [
          locale.code,
          new URL(route(page, locale.code), origin).href,
        ]),
      ]),
    },
    openGraph: {
      type: "website",
      siteName: "Rediscover",
      title,
      description,
      url,
      locale: ogLocales[lang],
      alternateLocale: Object.entries(ogLocales)
        .filter(([key]) => key !== lang)
        .map(([, value]) => value),
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
