import { rediscoverMetadata } from "@/lib/rediscover-metadata";
import { language, type PageQuery } from "@/lib/rediscover-languages";
import { translations } from "@/lib/rediscover-translations";
import Image from "next/image";
import { Device } from "@/components/rediscover/Device";
import { Shell, Download } from "@/components/rediscover/Shell";
import { rediscoverLinks, feedbackEmail } from "@/lib/rediscover";
export default async function Rediscover({
  searchParams,
}: {
  searchParams: PageQuery;
}) {
  const lang = language((await searchParams).lang);
  const c = translations[lang];
  return (
    <Shell lang={lang}>
      <section className="rd-hero rd-wrap">
        <div className="rd-hero-copy">
          <p className="rd-eyebrow">
            <span />
            {c.eyebrow}
          </p>
          <h1>{c.title}</h1>
          <p className="rd-lead">{c.intro}</p>
          <div className="rd-actions">
            <Download lang={lang} />
            <a className="rd-text-link" href="#extensions">
              {c.extensions} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            className="rd-testflight-link"
            href={rediscoverLinks.testFlight || "#testflight"}
          >
            {c.tryBeta} <span aria-hidden="true">↗</span>
          </a>
          <p className="rd-platforms">{c.platforms}</p>
        </div>
        <div className="rd-hero-art">
          <span className="rd-orbit" aria-hidden="true" />

          <div className="rd-phone">
            <Device src="/rediscover/today.png" alt={c.todayAlt} priority />
          </div>
        </div>
      </section>
      <section className="rd-manifesto rd-wrap">
        <p className="rd-eyebrow">{c.way}</p>
        <h2>{c.quote}</h2>
        <p>{c.quoteBody}</p>
      </section>
      <section className="rd-story rd-wrap">
        <div className="rd-story-intro">
          <span className="rd-number">{c.todayLabel}</span>
          <h2>
            {!lang.startsWith("zh") ? (
              c.today
            ) : (
              <>
                {c.today.split("，")[0]}，<br />
                {c.today.split("，")[1]}
              </>
            )}
          </h2>
          <p>{c.todayBody}</p>
        </div>
        <div className="rd-feature-shot">
          <Device src="/rediscover/read.png" alt={c.readAlt} />
        </div>
        <div className="rd-reading">
          <span className="rd-number">{c.readLabel}</span>
          <h2>{c.read}</h2>
          <p>{c.readBody}</p>
        </div>
      </section>
      <section className="rd-radar">
        <div className="rd-wrap rd-radar-inner">
          <div className="rd-radar-art">
            <svg
              className="rd-signal"
              viewBox="0 0 720 720"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
                <path d="M290 239 A140 140 0 0 0 290 481 M430 239 A140 140 0 0 1 430 481" />
                <path d="M250 169 A220 220 0 0 0 250 551 M470 169 A220 220 0 0 1 470 551" />
                <path d="M210 100 A300 300 0 0 0 210 620 M510 100 A300 300 0 0 1 510 620" />
                <path d="M360 377 V470" />
              </g>
              <circle cx="360" cy="350" r="22" fill="currentColor" />
            </svg>
            <Device src="/rediscover/radar.png" alt={c.radarAlt} />
          </div>
          <div className="rd-radar-copy">
            <span className="rd-number">03 / RADAR</span>
            <h2>{c.radar}</h2>
            <p>{c.radarBody}</p>
          </div>
        </div>
      </section>
      <section className="rd-cloud rd-wrap" id="icloud">
        <div className="rd-cloud-copy">
          <p className="rd-eyebrow">iCloud · iPhone · iPad · Mac</p>
          <h2>
            {c.cloudTitle}
            <br />
            {c.cloudSubtitle}
          </h2>
          <p>{c.cloudBody}</p>
        </div>
        <div className="rd-cloud-devices">
          <figure className="rd-cloud-ipad">
            <Device
              kind="ipad"
              src="/rediscover/today-ipad.png"
              alt={c.ipadAlt}
            />
            <figcaption>
              {c.ipadCaption} <strong>iPad.</strong>
            </figcaption>
          </figure>
          <figure className="rd-cloud-iphone">
            <Device src="/rediscover/today.png" alt={c.iphoneAlt} />
            <figcaption>
              {c.iphoneCaption} <strong>iPhone.</strong>
            </figcaption>
          </figure>
        </div>
        <p className="rd-cloud-note">{c.cloudNote}</p>
      </section>
      <section className="rd-extensions rd-wrap" id="extensions">
        <span className="rd-number">{c.saveLabel}</span>
        <h2>{c.extensionTitle}</h2>
        <p>{c.extensionBody}</p>
        <div className="rd-extension-grid">
          {(["safari", "chrome"] as const).map((browser) => (
            <article key={browser}>
              <div>
                <h3>{browser === "safari" ? "Safari" : "Chrome Web Store"}</h3>
                <p>{c[browser]}</p>
                {rediscoverLinks[browser] ? (
                  <a
                    className={
                      browser === "chrome" ? "rd-store-badge" : "rd-text-link"
                    }
                    href={rediscoverLinks[browser]!}
                  >
                    {browser === "chrome" ? (
                      <Image
                        src="/rediscover/badges/chrome-web-store.png"
                        alt={c.chromeBadgeAlt}
                        width={206}
                        height={58}
                      />
                    ) : (
                      <>{c.getSafari} ↗</>
                    )}
                  </a>
                ) : browser === "chrome" ? (
                  <span className="rd-status">{c.soon}</span>
                ) : (
                  <span className="rd-included">{c.included}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rd-feedback rd-wrap" id="feedback">
        <div>
          <p className="rd-eyebrow">{c.together}</p>
          <h2>{c.supportTitle}</h2>
          <p>{c.supportIntro}</p>
          <div className="rd-feedback-actions">
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
              <p className="rd-status">{c.contactPending}</p>
            )}
          </div>
        </div>
        <div className="rd-feedback-content">
          <ol>
            {c.supportItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="rd-beta rd-wrap" id="testflight">
        <span className="rd-number">TESTFLIGHT</span>
        <h2>{c.betaTitle}</h2>
        <p>{c.betaBody}</p>
        {rediscoverLinks.testFlight &&
        !rediscoverLinks.testFlight.startsWith("#") ? (
          <a className="rd-button" href={rediscoverLinks.testFlight}>
            {c.joinBeta} ↗
          </a>
        ) : (
          <p className="rd-status">{c.betaPending}</p>
        )}
      </section>
      <section className="rd-end rd-wrap">
        <Image src="/rediscover/icon.png" alt="" width={64} height={64} />
        <h2>{c.end}</h2>
        <p>{c.endBody}</p>
        <Download lang={lang} />
        {rediscoverLinks.appStore?.startsWith("#") && (
          <p className="rd-preview-note" id="download-preview">
            {c.downloadPreview}
          </p>
        )}
      </section>
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
