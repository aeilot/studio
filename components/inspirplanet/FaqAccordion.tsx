"use client";

import { useId, useState } from "react";

export function FaqAccordion({ items, subscriptionLabel }: {
  items: readonly (readonly string[])[];
  subscriptionLabel: string;
}) {
  const id = useId();
  const [open, setOpen] = useState<number | null>(null);
  return <div className="ip-faq">
    {items.map(([question, answer], index) => {
      const expanded = open === index;
      return <div className="t-acc" data-open={expanded} key={question}>
        <h2 className="ip-faq-heading">
          <button type="button" className="t-acc-head" id={`${id}-q${index}`}
            aria-expanded={expanded} aria-controls={`${id}-a${index}`}
            onClick={() => setOpen(expanded ? null : index)}>
            <span>{question}</span>
            <span className="t-acc-chevron" aria-hidden="true"><svg viewBox="0 0 16 16" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6.5L8 10.5L12 6.5" /></svg></span>
          </button>
        </h2>
        <div className="t-acc-panel" id={`${id}-a${index}`} role="region"
          aria-labelledby={`${id}-q${index}`} inert={!expanded} aria-hidden={!expanded}>
          <div className="t-acc-panel-inner">
            <p>{answer}</p>
            {index === items.length - 1 ? <a className="ip-text-link" href="https://apps.apple.com/account/subscriptions">{subscriptionLabel}</a> : null}
          </div>
        </div>
      </div>;
    })}
  </div>;
}
