import type { SectionProps } from "./types";

export function Plans({ l }: SectionProps) {
  return (
    <section className="rd-plans rd-wrap" id="plans" aria-labelledby="plans-title">
      <p className="rd-eyebrow">{l.plansEyebrow}</p>
      <h2 id="plans-title">{l.plansTitle}</h2>
      <p className="rd-plans-intro">{l.plansIntro}</p>
      <div className="rd-plan-grid">
        {l.plans.map((plan) => (
          <article className="rd-plan" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="rd-plan-price">{plan.price}</p>
            <p className="rd-plan-billing">{plan.billing}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="rd-pricing-note">{l.pricingNote}</p>
    </section>
  );
}
