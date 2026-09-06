# Rediscover website

Routes: `/rediscover`, `/rediscover/support`, `/rediscover/privacy`.
The website supports the app’s eight languages: English (`en`), Simplified Chinese (`zh-Hans`), Traditional Chinese (`zh-Hant`), Japanese (`ja`), Korean (`ko`), French (`fr`), German (`de`), and Spanish (`es`). Use `?lang=zh-Hans` or `?lang=zh-Hant`; legacy `?lang=zh` maps to Simplified Chinese. The custom language menu preserves the current path and hash. Locales live in `lib/rediscover-languages.ts`, with typed page and privacy translations in `lib/rediscover-translations.ts` and `lib/rediscover-international.ts`. The menu supports arrow keys, Home/End, Escape, outside click, and focus restoration.

## Distribution and contact links

Configure verified destinations in `lib/rediscover.ts`:

- `appStore`: the app’s public App Store product page.
- `testFlight`: the public TestFlight invitation URL.
- `safari`: a verified Safari extension destination; the extension is bundled with the Mac app.
- `chrome`: the extension’s public **Chrome Web Store** listing (not a ZIP download).
- `feedback`: mailto link to `louis.chenluodeng@gmail.com`, with the subject “Rediscover Feedback”. The visible address comes from `feedbackEmail`.

The App Store badge currently uses an explicitly requested local preview anchor (`#download-preview`). Replace it with the real product URL before publishing. TestFlight uses `#testflight` until the public invitation is available. Safari’s Get link uses the App Store destination while the extension remains bundled with the Mac app. Chrome’s Get link goes to the public Chrome Web Store listing. Both cards use matching text links rather than a store badge. Browser extensions and Feedback navigation scroll to landing-page sections; the standalone support page remains available for app support links. Supply the public website origin through `SITE_URL` for absolute Open Graph URLs; local development defaults to localhost; production defaults to `https://studio.aeilot.top`. Each route and locale generates its own Open Graph/Twitter title and description, canonical URL, and language alternates through `lib/rediscover-metadata.ts`. All locales share the English 1200 × 630 product artwork.

The privacy policy is presented as the official policy, with a scope notice covering Rediscover and its companion browser extensions. Search indexing is enabled. The notice is based on `RediscoverSchema.swift`, `PersistenceBootstrap.swift`, `AIFallbackProviding.swift`, `DeepSeekClient.swift`, `ProductEventLog.swift`, `AIUsageLog.swift`, and browser-extension manifests/READMEs in the Rediscover repository.

After the site is deployed, point the app’s `AppAbout.feedbackURL` and `privacyPolicyURL` at the deployed support/privacy pages. No app source changes were made in this website task. Open-source acknowledgments remain in the app only.

## Artwork provenance

Product icon and screenshots are copied from Rediscover’s asset catalog and `Resources/GuideImages`: GuideToday-iPhone, GuideOpen-iPhone, GuideRadarDiscover-iPhone. The Open Graph image is composed from the same Today screenshot and website typography.

Official App Store badges are retained unmodified, with proportional display sizing:

- Apple English: https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg
- Apple guidelines: https://developer.apple.com/app-store/marketing/guidelines/

Keep App Store badges linked to the actual available product, not a store home page. Do not recolor, crop, distort, or redraw the artwork. The Chrome extension card uses a text link to the listing rather than the Chrome Web Store badge.

## Product presentation and motion

All three app screenshots use the shared `Device` component with a CSS device shell. Store badges remain official, unmodified artwork. Scroll reveal uses IntersectionObserver; the hero device has a small requestAnimationFrame-driven scroll offset. Reduced-motion preferences disable reveals, the hero entrance, and smooth scrolling. Content remains visible when JavaScript is unavailable.

The iCloud section uses the actual GuideToday-iPad screenshot alongside GuideToday-iPhone, both framed by Device. Development output is `.next`; production build/start output is `.next-production` so build verification cannot overwrite active development chunks.

Chinese App Store badges use the unmodified Apple Marketing Tools API artwork for `zh-cn` and `zh-tw`. Japanese, Korean, French, German, and Spanish badges use the same official API with `ja-jp`, `ko-kr`, `fr-fr`, `de-de`, and `es-es`. Product screenshots retain their original in-app English content.
