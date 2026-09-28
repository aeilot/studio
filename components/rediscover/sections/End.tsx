import Image from "next/image";
import { Download } from "../Shell";
import type { SectionProps } from "./types";

export function End({ lang, c }: SectionProps) {
  return (
    <section className="rd-end rd-wrap" id="download">
      <Image src="/rediscover/icon.png" alt="" width={64} height={64} />
      <h2>{c.end}</h2>
      <p>{c.endBody}</p>
      <Download lang={lang} />
    </section>
  );
}
