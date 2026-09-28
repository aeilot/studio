import type { SectionProps } from "./types";

export function Pocket({ l }: SectionProps) {
  return (
    <section className="rd-pocket rd-wrap" id="pocket" aria-labelledby="pocket-title">
      <div className="rd-pocket-inner">
        <h2 id="pocket-title">{l.pocketTitle}</h2>
        <p>{l.pocketBody}</p>
        <ul className="rd-captures rd-import-sources">
          {l.importSources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
        <p className="rd-pocket-note">
          {l.pocketNote}{" "}
          <a className="rd-text-link" href="#plans">
            {l.navPlans} <span aria-hidden="true">↓</span>
          </a>
        </p>
      </div>
    </section>
  );
}
