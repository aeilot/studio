import { rediscoverMetadata } from "@/lib/rediscover-metadata";
import { language, type PageQuery } from "@/lib/rediscover-languages";
import { translations } from "@/lib/rediscover-translations";
import { Shell } from "@/components/rediscover/Shell";
import { rediscoverLinks, feedbackEmail } from "@/lib/rediscover";
export default async function Support({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  const lang = language((await searchParams).lang);
  const c = translations[lang];
  return (
    <Shell lang={lang} path="/support">
      <article className="rd-document rd-wrap">
        <p className="rd-eyebrow">{c.supportLabel}</p>
        <h1>{c.supportTitle}</h1>
        <p className="rd-lead">{c.supportIntro}</p>
        <ol className="rd-support-list">
          {c.supportItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        {rediscoverLinks.feedback ? (
          <>
            <a className="rd-button" href={rediscoverLinks.feedback}>
              {c.contact} ↗
            </a>
            <p className="rd-feedback-email">
              <a href={rediscoverLinks.feedback}>{feedbackEmail}</a>
            </p>
          </>
        ) : (
          <p className="rd-notice">{c.contactPending}</p>
        )}
      </article>
    </Shell>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  return rediscoverMetadata(language((await searchParams).lang), "/support");
}
