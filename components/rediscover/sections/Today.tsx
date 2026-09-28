import Image from "next/image";
import { Device } from "../Device";
import type { SectionProps } from "./types";

const counts = [1, 3, 5];

export function Today({ l }: SectionProps) {
  return (
    <section className="rd-story rd-wrap" id="today">
      <div className="rd-story-intro">
        <span className="rd-number">{l.todayLabel}</span>
        <h2>{l.todayTitle}</h2>
        <p>{l.todayBody}</p>
        <div className="rd-styles" aria-hidden="true">
          {l.styles.map((style, index) => (
            <span key={style} className={index === 1 ? "is-active" : undefined}>
              <strong>{counts[index]}</strong>
              {style}
            </span>
          ))}
        </div>
        <div className="rd-notification" aria-hidden="true">
          <Image src="/rediscover/icon.png" alt="" width={38} height={38} />
          <div>
            <p className="rd-notification-head">
              <strong>Rediscover</strong>
              <span>{l.notifTime}</span>
            </p>
            <p className="rd-notification-title">{l.notifTitle}</p>
            <p>{l.notifBody}</p>
          </div>
        </div>
      </div>
      <div className="rd-feature-shot">
        <Device src="/rediscover/rate.png" alt={l.rateAlt} />
      </div>
      <div className="rd-reading">
        <h2>{l.rateTitle}</h2>
        <p>{l.rateBody}</p>
      </div>
    </section>
  );
}
