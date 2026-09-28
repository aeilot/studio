import { rediscoverMetadata } from "@/lib/rediscover-metadata";
import { language, type PageQuery } from "@/lib/rediscover-languages";
import { translations } from "@/lib/rediscover-translations";
import { landing } from "@/lib/rediscover-landing";
import { Shell } from "@/components/rediscover/Shell";
import { Hero } from "@/components/rediscover/sections/Hero";
import { Problem } from "@/components/rediscover/sections/Problem";
import { Today } from "@/components/rediscover/sections/Today";
import { Save } from "@/components/rediscover/sections/Save";
import { Radar } from "@/components/rediscover/sections/Radar";
import { Shared } from "@/components/rediscover/sections/Shared";
import { Pocket } from "@/components/rediscover/sections/Pocket";
import { Cloud } from "@/components/rediscover/sections/Cloud";
import { Plans } from "@/components/rediscover/sections/Plans";
import { End } from "@/components/rediscover/sections/End";
import { Faq } from "@/components/rediscover/sections/Faq";
import { jsonLd, rediscoverSchema } from "@/lib/rediscover-schema";

export default async function Rediscover({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  const lang = language((await searchParams).lang);
  const props = { lang, c: translations[lang], l: landing[lang] };
  return (
    <Shell lang={lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(rediscoverSchema(lang)) }}
      />
      <Hero {...props} />
      <Problem {...props} />
      <Today {...props} />
      <Save {...props} />
      <Radar {...props} />
      <Shared {...props} />
      <Pocket {...props} />
      <Cloud {...props} />
      <Plans {...props} />
      <Faq {...props} />
      <End {...props} />
    </Shell>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  return rediscoverMetadata(language((await searchParams).lang), "");
}
