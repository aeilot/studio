import { Shell } from "@/components/inspirplanet/Shell";
import { copy } from "@/lib/inspirplanet/copy";
import { inspirplanetLanguage, inspirplanetRoute as route, type PageQuery } from "@/lib/inspirplanet-languages";
import { pageMetadata } from "@/lib/inspirplanet/metadata";
export async function generateMetadata({ searchParams }: { searchParams: PageQuery }) { return pageMetadata("/privacy", inspirplanetLanguage((await searchParams).lang), 2); }
export default async function Privacy({ searchParams }: { searchParams: PageQuery }) {
 const lang = inspirplanetLanguage((await searchParams).lang), c = copy[lang];
 return <Shell active="privacy" lang={lang}><article className="ip-prose"><p className="ip-eyebrow">{c.privacy[0]}</p><h1>{c.privacy[1]}<br />{c.privacy[2]}</h1><p className="ip-lead">{c.privacy[3]}</p><nav className="ip-toc" aria-label={c.privacy[4]}>{c.sections.map(([id,title])=><a key={id} href={`#${id}`}>{title}</a>)}</nav>{c.sections.map(([id,title,body])=><section id={id} key={id}><h2>{title}</h2><p>{body}</p>{["providers","local","voice"].includes(id) ? <div className="ip-provider-links">{id === "providers" ? <><a href="https://openrouter.ai/privacy">OpenRouter · {c.privacy[5]}</a><a href="https://www.cloudflare.com/privacypolicy/">Cloudflare · {c.privacy[5]}</a></> : <a href="https://www.apple.com/legal/privacy/">Apple · {c.privacy[5]}</a>}</div> : null}{id === "contact" ? <a className="ip-text-link" href="mailto:louis.chenluodeng@gmail.com?subject=InspirPlanet%20Privacy">{c.privacy[6]}</a> : null}</section>)}</article></Shell>;
}
