export const rediscoverLanguages = [
  { code: "en", label: "English" },
  { code: "zh-Hans", label: "简体中文" },
  { code: "zh-Hant", label: "繁體中文" },
] as const;
export type Language = (typeof rediscoverLanguages)[number]["code"];
export type PageQuery = Promise<{ lang?: string }>;
export function language(value?: string): Language {
  if (value === "zh" || value === "zh-Hans") return "zh-Hans";
  return value === "zh-Hant" ? "zh-Hant" : "en";
}
export function route(path: string, lang: Language = "en") {
  return `/rediscover${path}${lang === "en" ? "" : `?lang=${lang}`}`;
}
