import { Device } from "../Device";
import type { SectionProps } from "./types";

export function Radar({ c, l }: SectionProps) {
  return (
    <section className="rd-radar" id="radar">
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
          <span className="rd-number">{l.radarLabel}</span>
          <h2>{l.radarTitle}</h2>
          <p>{l.radarBody}</p>
          <blockquote className="rd-radar-quote">{l.radarQuote}</blockquote>
          <p className="rd-radar-note">{l.radarOpml}</p>
        </div>
      </div>
    </section>
  );
}
