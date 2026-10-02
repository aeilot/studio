import { rediscoverLanguages, language, type Language, type PageQuery } from "./rediscover-languages";
export const inspirplanetLanguages = rediscoverLanguages;
export type { Language, PageQuery };
export function inspirplanetLanguage(value?: string | null): Language {
  if (value === "zh") return "zh-Hans";
  return value && inspirplanetLanguages.some(item => item.code === value) ? language(value) : "en";
}
export function inspirplanetRoute(path = "", lang: Language = "en") {
  return `/inspirplanet${path}${lang === "en" ? "" : `?lang=${lang}`}`;
}
