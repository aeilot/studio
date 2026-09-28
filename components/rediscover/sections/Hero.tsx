import { Device } from "../Device";
import { Download } from "../Shell";
import type { SectionProps } from "./types";

export function Hero({ lang, c, l }: SectionProps) {
  return (
    <section className="rd-hero rd-wrap">
      <div className="rd-hero-copy">
        <p className="rd-eyebrow">{l.heroEyebrow}</p>
        <h1>{c.title}</h1>
        <p className="rd-lead">{l.heroLead}</p>
        <div className="rd-actions">
          <Download lang={lang} />
          <a className="rd-text-link" href="#pocket">
            {l.pocketLink} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="rd-platforms">{c.platforms}</p>
      </div>
      <div className="rd-hero-art">
        <span className="rd-orbit" aria-hidden="true" />
        <div className="rd-phone">
          <Device src="/rediscover/today.png" alt={c.todayAlt} priority />
        </div>
      </div>
    </section>
  );
}
