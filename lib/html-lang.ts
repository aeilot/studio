import { language, type Language } from "./rediscover-languages";

export const htmlLangHeader = "x-html-lang";

export function htmlLang(pathname: string, value?: string | null): Language {
  if (pathname === "/rediscover" || pathname.startsWith("/rediscover/")) {
    return language(value ?? undefined);
  }
  return "en";
}
