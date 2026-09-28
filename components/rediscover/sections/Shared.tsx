import { Device } from "../Device";
import type { SectionProps } from "./types";

export function Shared({ l }: SectionProps) {
  return (
    <section className="rd-shared" id="shared" aria-labelledby="shared-title">
      <div className="rd-wrap rd-shared-inner">
        <div className="rd-shared-copy">
          <span className="rd-number">{l.sharedLabel}</span>
          <h2 id="shared-title">{l.sharedTitle}</h2>
          <p>{l.sharedBody}</p>
          <p className="rd-shared-note">{l.sharedNote}</p>
          <a className="rd-text-link" href="#plans">
            {l.navPlans} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="rd-shared-art">
          <Device src="/rediscover/shared.png" alt={l.sharedAlt} />
        </div>
      </div>
    </section>
  );
}
