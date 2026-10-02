import Image from "next/image";
import Link from "next/link";
import { ThemeControl } from "./ThemeControl";
import { LanguageControl } from "./LanguageControl";
import { copy } from "@/lib/inspirplanet/copy";
import { inspirplanetRoute as route, type Language } from "@/lib/inspirplanet-languages";
export function Shell({ children, active, lang, hero = false }: { children: React.ReactNode; active: "product" | "support" | "privacy"; lang: Language; hero?: boolean }) {
 const c = copy[lang];
 const pages = ["product", "support", "privacy"];
 const paths = ["", "/support", "/privacy"];
 return <div className={`ip ${hero ? "ip-home" : "ip-document"}`}>
 <a className="ip-skip" href="#main">{c.skip}</a>
 <header className="ip-header"><Link href={route("",lang)} className="ip-brand" aria-label={c.homeLabel}><Image src="/inspirplanet/icon.png" width={34} height={34} alt="" />InspirPlanet</Link><div className="ip-header-end"><nav aria-label={c.navigation}>{paths.map((path,i)=><Link key={path} href={route(path,lang)} aria-current={active === pages[i] ? "page" : undefined}>{c.nav[i]}</Link>)}</nav><LanguageControl lang={lang} label={c.language} /></div></header>
 <main id="main">{children}</main>
 <footer className="ip-footer"><Link href={route("",lang)}>InspirPlanet</Link><nav aria-label={c.footerNavigation}><Link href={route("/support",lang)}>{c.nav[1]}</Link><Link href={route("/privacy",lang)}>{c.nav[2]}</Link><Link href="/">Evolution Studio</Link></nav><LanguageControl lang={lang} label={c.language} /><ThemeControl labels={c.theme} /><span>{c.footer}</span></footer>
 </div>;
}
