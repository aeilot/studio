import Image from "next/image";
import Link from "next/link";
import { Device } from "@/components/inspirplanet/Device";
import { Shell } from "@/components/inspirplanet/Shell";
import { copy } from "@/lib/inspirplanet/copy";
import { inspirplanetLanguage, inspirplanetRoute as route, type PageQuery } from "@/lib/inspirplanet-languages";
import { pageMetadata } from "@/lib/inspirplanet/metadata";
import { inspirplanetSchema } from "@/lib/inspirplanet/schema";
import { jsonLd } from "@/lib/rediscover-schema";

export async function generateMetadata({ searchParams }: { searchParams: PageQuery }) {
  return pageMetadata("", inspirplanetLanguage((await searchParams).lang), 0);
}

export default async function Product({ searchParams }: { searchParams: PageQuery }) {
  const lang = inspirplanetLanguage((await searchParams).lang), c = copy[lang], l = c.landing;
  const chinese = lang.startsWith("zh");
  const imageLang = chinese ? "zh-Hans" : "en";
  const screenshot = (name: string) => `/inspirplanet/screenshots/${imageLang}/${name}.webp`;
  const stepImages = [["01-home", "02-voice"], ["06-completed"], ["03-organize", "04-overview"]];
  const imageLabels: Record<string, string> = {
    "01-home": c.product.captions[0], "02-voice": c.product.captions[1],
    "03-organize": c.product.captions[2], "04-overview": c.product.captions[3], "06-completed": c.product.captions[5],
  };
  return <Shell active="product" lang={lang} hero>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(inspirplanetSchema(lang)) }} />
    <section className="ip-hero" aria-labelledby="hero-title">
      <div className="ip-planet-scene" aria-hidden="true"><Image className="ip-universe ip-universe-dark" src="/inspirplanet/universe-dark-full.webp" fill priority sizes="100vw" alt="" />
      <Image className="ip-universe ip-universe-light" src="/inspirplanet/universe-light-full.webp" fill priority sizes="100vw" alt="" /></div>
      <div className="ip-hero-copy">
        <p className="ip-landing-kicker">{l.hero[6]}</p>
        <h1 id="hero-title"><span>{l.hero[0]}</span><span>{l.hero[1]}</span></h1>
        <p className="ip-landing-description">{l.hero[2]}</p>
        <div className="ip-hero-actions"><span className="ip-release-status">{l.hero[3]}</span><a className="ip-button ip-button-glass" href="#explore">{l.hero[4]}<span aria-hidden="true">↓</span></a></div>
        <div className="ip-hero-caption">{l.hero[5]}</div>
      </div>
    </section>
    <section className="ip-product-story ip-wrap" id="explore" aria-label={c.product.eyebrow}>
      <p className="ip-screen-disclosure">{c.product.note}</p>
      {l.steps.map(([eyebrow,title,body],index) => <section className={`ip-story-row ip-story-row-${index}`} key={eyebrow}>
        <div className="ip-story-copy"><p className="ip-eyebrow">{`0${index+1} / ${eyebrow}`}</p><h2 id={index === 0 ? "product-title" : undefined}>{title}</h2><p>{body}</p></div>
        <div className={`ip-story-screens ${stepImages[index].length > 1 ? "ip-story-pair" : ""}`}>{stepImages[index].map(name => <figure key={name}><Device src={screenshot(name)} sizes="(max-width: 600px) 42vw, 250px" alt={imageLabels[name]} /><figcaption>{imageLabels[name]}</figcaption></figure>)}</div>
      </section>)}
    </section>
    <section className="ip-return-section ip-wrap"><div><p className="ip-eyebrow">{l.later[0]}</p><h2>{l.later[1]}</h2><p>{l.later[2]}</p></div><figure><Device src={screenshot(chinese ? "05-related" : "05-discover")} sizes="(max-width: 600px) 65vw, 240px" alt={c.product.captions[4]} /><figcaption>{c.product.captions[4]}</figcaption></figure></section>
    <section className="ip-reassurance ip-wrap"><div><p className="ip-eyebrow">{c.trust[0]}</p><h2>{c.trust[1]} {c.trust[2]}</h2><p>{c.trust[3]}</p><Link className="ip-text-link" href={route("/privacy",lang)}>{c.trust[4]}</Link></div><div><p className="ip-eyebrow">{c.help[0]}</p><h2>{c.help[1]}</h2><p>{c.support[3]}</p><Link className="ip-text-link" href={route("/support",lang)}>{c.help[2]}</Link></div></section>
    <section className="ip-landing-end ip-wrap"><h2>{l.finish[0]}</h2><p>{l.finish[1]}</p><span className="ip-release-status">{l.hero[3]}</span></section>
  </Shell>;
}
