import { language, type PageQuery } from "@/lib/rediscover-languages";
import { translations, translatedPrivacy } from "@/lib/rediscover-translations";
import { Shell } from "@/components/rediscover/Shell";

export default async function Privacy({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  const lang = language((await searchParams).lang);
  const c = translations[lang];
  return (
    <Shell lang={lang} path="/privacy">
      <article className="rd-document rd-wrap">
        <p className="rd-eyebrow">{c.privacyLabel}</p>
        <h1>{c.privacyTitle}</h1>
        <p className="rd-lead">{c.privacyIntro}</p>
        <p className="rd-notice">{c.privacyScope}</p>
        <p className="rd-platforms">{c.updated}</p>
        {translatedPrivacy[lang].map(([title, body]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </article>
    </Shell>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  const c = translations[language((await searchParams).lang)];
  return {
    title: c.privacy,
    description: c.privacyIntro,
    robots: { index: true, follow: true },
  };
}
