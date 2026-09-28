import { faq } from "./rediscover-faq";
import { landing } from "./rediscover-landing";
import { rediscoverLanguages, route, type Language } from "./rediscover-languages";
import { rediscoverLinks } from "./rediscover";
import { ABOUT_URL, siteUrl } from "./site";

const absolute = (link: string | null) =>
  link && /^https?:\/\//.test(link) ? link : null;

export function rediscoverSchema(lang: Language) {
  const origin = new URL(siteUrl()).origin;
  const pageUrl = new URL(route("", lang), origin).href;
  const l = landing[lang];
  const appStore = absolute(rediscoverLinks.appStore);
  const chrome = absolute(rediscoverLinks.chrome);
  const [free, pro, plus] = l.plans;
  const offer = (name: string, price: string, duration?: string) => ({
    "@type": "Offer",
    name,
    price,
    priceCurrency: "USD",
    ...(duration && {
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price,
        priceCurrency: "USD",
        billingDuration: duration,
      },
    }),
    ...(appStore && { url: appStore }),
  });
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
        "@id": `${origin}/rediscover#app`,
        name: "Rediscover",
        alternateName: "Rediscover: read-later app",
        description: l.metaDescription,
        url: pageUrl,
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory: "Read-later",
        operatingSystem: "iOS, iPadOS, macOS",
        inLanguage: rediscoverLanguages.map((locale) => locale.code),
        image: `${origin}/rediscover/icon.png`,
        screenshot: ["today", "rate", "library", "radar", "shared"].map(
          (name) => `${origin}/rediscover/${name}.png`,
        ),
        featureList: [l.todayTitle, l.saveTitle, l.aiNote, l.radarTitle, l.sharedTitle, l.pocketTitle],
        publisher: { "@id": `${origin}/#studio` },
        author: { "@type": "Person", name: "aeilot", url: ABOUT_URL },
        offers: [
          offer(free.name, "0"),
          offer(pro.name, "29.99"),
          offer(`${plus.name} (monthly)`, "5.99", "P1M"),
          offer(`${plus.name} (annual)`, "49.99", "P1Y"),
        ],
        ...(appStore && { downloadUrl: appStore, installUrl: appStore }),
        sameAs: [appStore, chrome].filter(Boolean),
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: l.metaTitle,
        description: l.metaDescription,
        inLanguage: lang,
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${origin}/rediscover#app` },
        primaryImageOfPage: `${origin}/rediscover/opengraph-image`,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: lang,
        mainEntity: faq[lang].items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
