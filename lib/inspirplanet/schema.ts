import { inspirplanetLanguages, inspirplanetRoute, type Language } from "../inspirplanet-languages";
import { ABOUT_URL, siteUrl } from "../site";
import { copy } from "./copy";

// Add downloadUrl / offers here once the App Store listing is live.
export function inspirplanetSchema(lang: Language) {
  const origin = new URL(siteUrl()).origin;
  const pageUrl = new URL(inspirplanetRoute("", lang), origin).href;
  const c = copy[lang];
  const imageLang = lang.startsWith("zh") ? "zh-Hans" : "en";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#studio`,
        name: "Evolution Studio",
        url: origin,
        founder: { "@type": "Person", name: "aeilot", url: ABOUT_URL },
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: "Evolution Studio",
        url: origin,
        publisher: { "@id": `${origin}/#studio` },
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": `${origin}/inspirplanet#app`,
        name: "InspirPlanet",
        description: c.meta[3],
        url: pageUrl,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "iOS",
        inLanguage: inspirplanetLanguages.map((locale) => locale.code),
        image: `${origin}/inspirplanet/icon.png`,
        screenshot: ["01-home", "02-voice", "03-organize", "04-overview"].map(
          (name) => `${origin}/inspirplanet/screenshots/${imageLang}/${name}.webp`,
        ),
        featureList: c.landing.steps.map(([, title]) => title),
        publisher: { "@id": `${origin}/#studio` },
        author: { "@type": "Person", name: "aeilot", url: ABOUT_URL },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `${c.meta[0]} · InspirPlanet`,
        description: c.meta[3],
        inLanguage: lang,
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${origin}/inspirplanet#app` },
        primaryImageOfPage: `${origin}/inspirplanet/universe.webp`,
      },
    ],
  };
}
