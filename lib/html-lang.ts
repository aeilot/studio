import { language, type Language } from "./rediscover-languages";

import { inspirplanetLanguage } from "./inspirplanet-languages";

export const htmlLangHeader = "x-html-lang";

export function htmlLang(pathname: string, value?: string | null): Language {
  if (pathname === "/inspirplanet" || pathname.startsWith("/inspirplanet/")) return inspirplanetLanguage(value);
  if (pathname === "/rediscover" || pathname.startsWith("/rediscover/")) {
    return language(value ?? undefined);
  }
  return "en";
}
