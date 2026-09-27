import { rediscoverMetadata } from "@/lib/rediscover-metadata";
import { language, route, type PageQuery } from "@/lib/rediscover-languages";
import { translations } from "@/lib/rediscover-translations";
import Image from "next/image";
import { featureTranslations } from "@/lib/rediscover-features";
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
  const f = featureTranslations[lang];
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
          <div className="rd-discover-links">
            <a className="rd-text-link" href="#features">{f.featuresNav} ↓</a>
            <a className="rd-text-link" href="#plans">{f.plansNav} ↓</a>
          </div>
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
      <section className="rd-shared" id="shared" aria-labelledby="shared-title">
        <div className="rd-wrap rd-shared-inner">
          <div className="rd-shared-copy">
            <span className="rd-number">04 / SHARED</span>
            <h2 id="shared-title">{f.sharedTitle}</h2>
            <p>{f.sharedDetail}</p>
            <p className="rd-shared-note">{f.sharedBody}</p>
            <a className="rd-text-link" href="#plans">{f.plansNav} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="rd-shared-art">
            <Device src="/rediscover/shared.png" alt={f.sharedTitle} />
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
              {c.ipadCaption} <strong>iPad</strong>
            </figcaption>
          </figure>
          <figure className="rd-cloud-iphone">
            <Device src="/rediscover/today.png" alt={c.iphoneAlt} />
            <figcaption>
              {c.iphoneCaption} <strong>iPhone</strong>
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
          {(["safari", "chrome"] as const).map((browser) => {
            const href =
              rediscoverLinks[browser] ??
              (browser === "safari" ? rediscoverLinks.appStore : null);
            return (
              <article key={browser}>
                <h3>{browser === "safari" ? "Safari" : "Chrome"}</h3>
                <p>{c[browser]}</p>
                {href ? (
                  <a
                    className="rd-text-link"
                    href={
                      href.startsWith("#") ? `${route("", lang)}${href}` : href
                    }
                  >
                    {browser === "safari" ? c.getSafari : c.getChrome}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    className={
                      browser === "chrome" ? "rd-status" : "rd-included"
                    }
                  >
                    {browser === "chrome" ? c.soon : c.included}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>
      <section className="rd-new-features rd-wrap" id="features" aria-labelledby="features-title">
        <p className="rd-eyebrow">{f.featuresNav}</p>
        <h2 id="features-title">{f.featuresTitle}</h2>
        <div className="rd-new-feature-grid">
          {([
            ["OPML", f.opmlTitle, f.opmlBody, f.opmlDetail],
            ["Jev", f.jevTitle, f.jevBody, f.jevDetail],
            ["OpenRouter", f.routerTitle, f.routerBody, f.routerDetail],
          ]).map(([name, title, body, detail]) => (
            <article key={name}>
              <p className="rd-eyebrow">{name}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
              <p className="rd-feature-availability">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="rd-plans rd-wrap" id="plans" aria-labelledby="plans-title">
        <p className="rd-eyebrow">{f.plansNav}</p>
        <h2 id="plans-title">{f.plansTitle}</h2>
        <p className="rd-plans-intro">{f.plansIntro}</p>
        <div className="rd-plan-grid">
          {[
            { name: f.freeName, billing: f.freeBilling, items: [f.freeLimits, f.freeShared, f.cloudFree] },
            { name: f.proName, billing: f.proBilling, items: [f.unlimited, f.imports, f.sync, f.byok, f.proShared, f.cloudFree] },
            { name: f.plusName, billing: f.plusBilling, items: [f.allPro, f.cloudPlus, f.plusShared] },
          ].map((plan) => (
            <article className="rd-plan" key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="rd-plan-billing">{plan.billing}</p>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="rd-pricing-note">{f.pricingNote}</p>
        <a className="rd-text-link" href="#download">{f.cta} <span aria-hidden="true">↓</span></a>
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
      <section className="rd-end rd-wrap" id="download">
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
