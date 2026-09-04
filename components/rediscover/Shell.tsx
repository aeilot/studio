import Image from "next/image";
import Link from "next/link";
import { LanguageMenu } from "./LanguageMenu";
import { Motion } from "./Motion";
import { rediscoverLinks } from "@/lib/rediscover";
import { route, type Language } from "@/lib/rediscover-languages";
import { translations } from "@/lib/rediscover-translations";

export function Download({ lang }: { lang: Language }) {
  const copy = translations[lang];
  return rediscoverLinks.appStore ? (
    <a
      className="rd-store-badge"
      href={
        rediscoverLinks.appStore.startsWith("#")
          ? `${route("", lang)}${rediscoverLinks.appStore}`
          : rediscoverLinks.appStore
      }
    >
      <Image
        src={`/rediscover/badges/app-store-${lang}.svg`}
        alt={copy.download}
        width={156}
        height={52}
        unoptimized
      />
    </a>
  ) : (
    <span className="rd-button rd-pending">{copy.pending}</span>
  );
}
export function Shell({
  path = "",
  lang,
  children,
}: {
  path?: string;
  lang: Language;
  children: React.ReactNode;
}) {
  const copy = translations[lang];
  return (
    <div className="rd" lang={lang}>
      <Motion />
      <a className="rd-skip" href="#main">
        {copy.skip}
      </a>
      <header className="rd-header rd-wrap">
        <Link className="rd-brand" href={route("", lang)}>
          <Image src="/rediscover/icon.png" alt="" width={36} height={36} />
          Rediscover
        </Link>
        <div className="rd-header-end">
          <nav aria-label={copy.mainNav}>
            <a href={path ? `${route("", lang)}#icloud` : "#icloud"}>iCloud</a>
            <a href={path ? `${route("", lang)}#extensions` : "#extensions"}>
              {copy.extensions}
            </a>
            <a href={path ? `${route("", lang)}#feedback` : "#feedback"}>
              {copy.feedback}
            </a>
          </nav>
          <LanguageMenu lang={lang} label={copy.languageLabel} />
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="rd-footer rd-wrap">
        <div>
          <Link className="rd-brand" href={route("", lang)}>
            Rediscover
          </Link>
          <p>
            {copy.madeBy} <a href="https://aeilot.top">aeilot</a>
          </p>
        </div>
        <nav aria-label={copy.footerNav}>
          <a href={path ? `${route("", lang)}#feedback` : "#feedback"}>
            {copy.feedback}
          </a>
          <Link href={route("/privacy", lang)}>{copy.privacy}</Link>
          <Link href="/">Evolution Studio ↗</Link>
        </nav>
        <span className="rd-copyright">
          © {new Date().getFullYear()} Rediscover
        </span>
      </footer>
    </div>
  );
}
