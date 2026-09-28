import type { SectionProps } from "./types";

export function Problem({ l }: SectionProps) {
  return (
    <section className="rd-manifesto rd-wrap">
      <p className="rd-eyebrow">{l.problemEyebrow}</p>
      <h2>{l.problemTitle}</h2>
      <p>{l.problemBody}</p>
    </section>
  );
}
