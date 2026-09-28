import { faq } from "@/lib/rediscover-faq";
import type { SectionProps } from "./types";

export function Faq({ lang }: SectionProps) {
  const f = faq[lang];
  return (
    <section className="rd-faq rd-wrap" id="faq" aria-labelledby="faq-title">
      <p className="rd-eyebrow">{f.eyebrow}</p>
      <h2 id="faq-title">{f.title}</h2>
      <div className="rd-faq-list">
        {f.items.map((item) => (
          <details key={item.q}>
            <summary>
              <h3>{item.q}</h3>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
