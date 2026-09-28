import { faq } from "@/lib/rediscover-faq";
import { FaqAccordion } from "../FaqAccordion";
import type { SectionProps } from "./types";

export function Faq({ lang }: SectionProps) {
  const f = faq[lang];
  return (
    <section className="rd-faq rd-wrap" id="faq" aria-labelledby="faq-title">
      <p className="rd-eyebrow">{f.eyebrow}</p>
      <h2 id="faq-title">{f.title}</h2>
      <FaqAccordion items={f.items} />
      <noscript>
        <style>{`.rd-acc-panel{grid-template-rows:1fr!important}.rd-acc-panel-inner{opacity:1!important;filter:none!important}`}</style>
      </noscript>
    </section>
  );
}
