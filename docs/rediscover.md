# Rediscover website

Routes: `/rediscover`, `/rediscover/support`, `/rediscover/privacy`.
The website supports the app’s eight languages: English (`en`), Simplified Chinese (`zh-Hans`), Traditional Chinese (`zh-Hant`), Japanese (`ja`), Korean (`ko`), French (`fr`), German (`de`), and Spanish (`es`). Use `?lang=zh-Hans` or `?lang=zh-Hant`; legacy `?lang=zh` maps to Simplified Chinese. The custom language menu preserves the current path and hash. Locales live in `lib/rediscover-languages.ts`, with typed page and privacy translations in `lib/rediscover-translations.ts` and `lib/rediscover-international.ts`. The menu supports arrow keys, Home/End, Escape, outside click, and focus restoration.

## Distribution and contact links

Configure verified destinations in `lib/rediscover.ts`:

- `appStore`: the app’s public App Store product page.
- `safari`: a verified Safari extension destination; the extension is bundled with the Mac app.
- `chrome`: the extension’s public **Chrome Web Store** listing (not a ZIP download).
- `feedback`: mailto link to `louis.chenluodeng@gmail.com`, with the subject “Rediscover Feedback”. The visible address comes from `feedbackEmail`.

The App Store badge currently points at the page’s own `#download` section. Replace it with the real product URL before publishing. Safari’s Get link uses the App Store destination while the extension remains bundled with the Mac app. Chrome’s Get link goes to the public Chrome Web Store listing. Both cards use matching text links rather than a store badge. Feedback lives on `/rediscover/support`, linked from the footer. Supply the public website origin through `SITE_URL` for absolute Open Graph URLs; local development defaults to localhost; production defaults to `https://studio.aeilot.top`. Each route and locale generates its own Open Graph/Twitter title and description, canonical URL, and language alternates through `lib/rediscover-metadata.ts`. All locales share the English 1200 × 630 product artwork.

The privacy policy is presented as the official policy, with a scope notice covering Rediscover and its companion browser extensions. Search indexing is enabled. The notice is based on `RediscoverSchema.swift`, `PersistenceBootstrap.swift`, `AIFallbackProviding.swift`, `OpenRouterClient.swift`, `OpenRouterCredentials.swift`, `APIKeyStore.swift`, `JevClient.swift`, `JevDecisionProvider.swift`, `DecisionUsageLog.swift`, `ProductEventLog.swift`, `AIUsageLog.swift`, and browser-extension manifests/READMEs in the Rediscover repository.

After the site is deployed, point the app’s `AppAbout.feedbackURL` and `privacyPolicyURL` at the deployed support/privacy pages. No app source changes were made in this website task. Open-source acknowledgments remain in the app only.

## Artwork provenance

Product icon and screenshots are copied from Rediscover’s asset catalog and `Resources/GuideImages`: GuideToday-iPhone (`today.png`), GuideWorth-iPhone (`rate.png`), GuideDetails-iPhone (`library.png`), GuideRadarDiscover-iPhone (`radar.png`). The Open Graph image is composed from the same Today screenshot and website typography.

Official App Store badges are retained unmodified, with proportional display sizing:

- Apple English: https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg
- Apple guidelines: https://developer.apple.com/app-store/marketing/guidelines/

Keep App Store badges linked to the actual available product, not a store home page. Do not recolor, crop, distort, or redraw the artwork. The Chrome extension card uses a text link to the listing rather than the Chrome Web Store badge.

## Product presentation and motion

All app screenshots use the shared `Device` component with a CSS device shell. Store badges remain official, unmodified artwork. Scroll reveal uses IntersectionObserver; the hero device has a small requestAnimationFrame-driven scroll offset. Reduced-motion preferences disable reveals, the hero entrance, and smooth scrolling. Content remains visible when JavaScript is unavailable.

The iCloud section uses the actual GuideToday-iPad screenshot alongside GuideToday-iPhone, both framed by Device. Development output is `.next`; production build/start output is `.next-production` so build verification cannot overwrite active development chunks.

Chinese App Store badges use the unmodified Apple Marketing Tools API artwork for `zh-cn` and `zh-tw`. Japanese, Korean, French, German, and Spanish badges use the same official API with `ja-jp`, `ko-kr`, `fr-fr`, `de-de`, and `es-es`. Product screenshots retain their original in-app English content.

## Landing page

Positioning: “Read-later apps help you save. Rediscover helps you come back.” The design and the claims each section may make are in `docs/superpowers/specs/2026-09-28-rediscover-marketing-redesign-design.md`.

`app/rediscover/page.tsx` composes the sections in `components/rediscover/sections/`: Hero, Problem, Today (`#today`), Save (`#save`, with `#extensions` kept as an alias), Radar (`#radar`), Shared (`#shared`), Pocket (`#pocket`), Cloud (`#icloud`), Plans (`#plans`) and End (`#download`). Header links go to Today, Radar, Shared and Plans.

Section copy for all eight languages lives in `lib/rediscover-landing.ts`, typed with `satisfies Record<Language, LandingCopy>`, so a missing string fails the build. Strings quoted from the app (Today styles, the reminder, the rating prompt, Radar’s daily-limit line) use the app’s own translations from `Rediscover/*.lproj/Localizable.strings`. Shell, support, privacy and the iCloud section keep their copy in `lib/rediscover.ts`, `lib/rediscover-translations.ts` and `lib/rediscover-international.ts`.

Jev is credited once, in the Save section, for smart categories; it is optional in the app and off by default.

Plans show US prices from `Rediscover.storekit` (Pro $29.99 lifetime; Pro+ $5.99 monthly or $49.99 yearly), with a note that local prices appear in the App Store. Entitlements follow `PurchaseProducts.swift`: Free allows 15 articles, 3 Radar sources and 1 owned shared space; Pro removes article and source limits, adds imports, iCloud and BYOK, and permits 3 owned spaces; Pro+ adds managed Cloud AI with higher limits and unlimited owned spaces. Joining spaces is free. Update the prices here if StoreKit changes.

## Search and AI discoverability

- `app/robots.ts` allows all crawlers, lists AI crawlers explicitly (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended and others), and points to the sitemap.
- `app/sitemap.ts` lists the studio pages and every Rediscover route in all eight languages, each with `hreflang` alternates.
- `app/llms.txt/route.ts` serves `/llms.txt`, a plain-text fact sheet for AI assistants built from the English landing copy and FAQ, so it stays in sync with the page.
- The landing page embeds JSON-LD from `lib/rediscover-schema.ts`: Organization, WebSite, SoftwareApplication (platforms, languages, screenshots, offers with US prices), WebPage and FAQPage. `downloadUrl` and the App Store `sameAs` appear automatically once `rediscoverLinks.appStore` is a real URL.
- The visible FAQ (`#faq`, copy in `lib/rediscover-faq.ts`) mirrors the FAQPage data. Keep answers factual; they are what search engines and assistants quote.
- Titles and descriptions (`metaTitle`, `metaDescription` in `lib/rediscover-landing.ts`) include “read-later app”, “Pocket alternative” and the platforms. Google is allowed full-length snippets and large image previews.

Shared uses the iPhone screenshot from `app-store-connect/screenshots/ios/en-US/native-source/06-shared.png` (`public/rediscover/shared.png`). The Shared feature flag must be on in the release build for this section to stay accurate.
