import type { LandingCopy } from "@/lib/rediscover-landing";
import type { Language } from "@/lib/rediscover-languages";
import type { Copy } from "@/lib/rediscover-translations";

export type SectionProps = {
  lang: Language;
  c: Copy;
  l: LandingCopy;
};
