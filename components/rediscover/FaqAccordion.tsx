"use client";

import { useId, useState } from "react";

export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rd-faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="rd-acc" data-open={expanded} key={item.q}>
            <h3>
              <button
                type="button"
                className="rd-acc-head"
                id={`${id}-q${index}`}
                aria-expanded={expanded}
                aria-controls={`${id}-a${index}`}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.q}
              </button>
            </h3>
            <div
              className="rd-acc-panel"
              id={`${id}-a${index}`}
              role="region"
              aria-labelledby={`${id}-q${index}`}
              inert={!expanded}
            >
              <div className="rd-acc-panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
