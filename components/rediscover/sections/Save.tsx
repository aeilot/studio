import { rediscoverLinks } from "@/lib/rediscover";
import { route } from "@/lib/rediscover-languages";
import { Device } from "../Device";
import type { SectionProps } from "./types";

export function Save({ lang, c, l }: SectionProps) {
  return (
    <section className="rd-save rd-wrap" id="save">
      <span id="extensions" className="rd-anchor" aria-hidden="true" />
      <div className="rd-save-inner">
        <div className="rd-save-copy">
          <span className="rd-number">{l.saveLabel}</span>
          <h2>{l.saveTitle}</h2>
          <p>{l.saveBody}</p>
          <ul className="rd-captures">
            {l.captures.map((capture) => (
              <li key={capture}>{capture}</li>
            ))}
          </ul>
          <div className="rd-platforms-block">
            <h3>{l.platformsTitle}</h3>
            <p>{l.platformsBody}</p>
            <ul className="rd-captures">
              {l.platforms.map((platform) => (
                <li key={platform}>{platform}</li>
              ))}
            </ul>
          </div>
          <p className="rd-ai-note">{l.aiNote}</p>
          <p className="rd-credit">{l.jevCredit}</p>
        </div>
        <div className="rd-save-art">
          <Device src="/rediscover/library.png" alt={l.libraryAlt} />
        </div>
      </div>
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
                  href={href.startsWith("#") ? `${route("", lang)}${href}` : href}
                >
                  {browser === "safari" ? c.getSafari : c.getChrome}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={browser === "chrome" ? "rd-status" : "rd-included"}>
                  {browser === "chrome" ? c.soon : c.included}
                </span>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
