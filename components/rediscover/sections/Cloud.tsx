import { Device } from "../Device";
import type { SectionProps } from "./types";

export function Cloud({ c }: SectionProps) {
  return (
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
          <Device kind="ipad" src="/rediscover/today-ipad.png" alt={c.ipadAlt} />
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
  );
}
