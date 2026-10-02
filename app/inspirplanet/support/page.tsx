import { FaqAccordion } from "@/components/inspirplanet/FaqAccordion";
import { Shell } from "@/components/inspirplanet/Shell";
import { copy } from "@/lib/inspirplanet/copy";
import { inspirplanetLanguage, inspirplanetRoute as route, type PageQuery } from "@/lib/inspirplanet-languages";
import { pageMetadata } from "@/lib/inspirplanet/metadata";
import Link from "next/link";
export async function generateMetadata({ searchParams }: { searchParams: PageQuery }) { return pageMetadata("/support", inspirplanetLanguage((await searchParams).lang), 1); }
export default async function Support({ searchParams }: { searchParams: PageQuery }) {
 const lang = inspirplanetLanguage((await searchParams).lang), c = copy[lang];
 return <Shell active="support" lang={lang}><article className="ip-prose"><p className="ip-eyebrow">{c.support[0]}</p><h1>{c.support[1]}<br />{c.support[2]}</h1><p className="ip-lead">{c.support[3]}</p><FaqAccordion items={c.questions} subscriptionLabel={c.support[9]} /><section id="contact"><p className="ip-eyebrow">{c.support[4]}</p><h2>{c.support[5]}</h2><p>{c.support[6]}</p><a className="ip-button" href="mailto:louis.chenluodeng@gmail.com?subject=InspirPlanet%20Support">{c.support[7]}</a><p><a href="mailto:louis.chenluodeng@gmail.com?subject=InspirPlanet%20Support">louis.chenluodeng@gmail.com</a></p><Link className="ip-text-link" href={route("/privacy",lang)}>{c.support[8]}</Link></section></article></Shell>;
}
