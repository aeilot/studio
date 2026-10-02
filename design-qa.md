# InspirPlanet design verification

Source visual truth: `/Users/aeilot/.codex/generated_images/01a0fa63-46cf-7392-9d64-d828f3f3216d/exec-92091eca-5486-4411-9126-e013efc036d9.png` (second displayed design).
Implementation: http://localhost:3096/inspirplanet
Screenshot: `docs/inspirplanet-design/desktop-final.png`
Full-view comparison: `docs/inspirplanet-design/comparison-final.png` (source left, implementation right).
Viewport: 1487 × 1058 CSS pixels. Both source and implementation are 1487 × 1058 pixels; density 1, no normalization needed. State: homepage, top, dark theme.
Responsive viewport: 390 × 844 CSS pixels, density 1. Screenshot: `docs/inspirplanet-design/mobile-final.png`.

## Findings and comparison history

1. The first paired comparison (`comparison-before.png`) found P2 differences in the primary CTA and orbit label sizes. The button was too narrow and labels were inconsistently sized. Fixed desktop CTA to 320 pixels, labels to 190 × 80 pixels and adjusted their positions and copy spacing. Recaptured and opened the paired `comparison-final.png`; no remaining P0/P1/P2 mismatch.
2. Initial mobile rendering placed the artwork under the feature caption. Fixed mobile art to a lower 490-pixel region. Recaptured and inspected `mobile-final.png`: caption is readable, main action unobstructed, no horizontal overflow.
3. Native anchor scrolling was unreliable immediately after route transitions with smooth scrolling. Removed smooth scrolling for this product. Rechecked Privacy #ai: target top 64 CSS pixels, visible and unobscured.

Focused evidence: main action and label sizing were assessed in the full-size paired image; no extra crop was needed. Mobile Support and Privacy screenshots were opened independently to inspect wrapping and reading hierarchy.

## Interactions and validation

- Product exploration button reaches #explore.
- Header navigation reaches all three product routes.
- Support FAQ opens to reveal the answer; native details/summary supports keyboard operation.
- Privacy table of contents reaches #ai at a readable scroll position.
- Support and Privacy mobile scroll width equals 390 CSS pixels: no overflow.
- Chinese document language is zh-Hans after route navigation.
- Support email and Apple subscription links inspected, not submitted.
- Production build and TypeScript validation passed after final CSS/metadata changes.
- Browser console had no errors. Smooth-scroll transition warnings appeared before the anchor fix; smooth scrolling has been removed from the new routes.
- React review: server-rendered components, no new client state or effects, semantic landmarks, labelled navigation, focus outlines, reduced-motion handling, optimized Next images.

## Follow-up polish and limits

- P3: orbit labels omit the source mock's decorative icons and placeholder text strokes; they retain the real labels. Brand uses the supplied App icon.
- P3: mobile constellation is cropped to keep the central planet prominent. No mobile source mock was provided.
- Homepage continues below the reference viewport with real product information; footer includes Evolution Studio. These support the requested product/help/privacy website.
- Uses the Studio's existing contact email. No App Store availability or price is invented; the primary action explores the product rather than downloading it.
- Local preview only; no deployment or email submission performed.

final result: passed

## 2026-10-02: candy Light Mode, appearance control and scrolling

- Added generated candy hero at `public/inspirplanet/universe-light.webp`, inspected alongside existing dark artwork. Composition remains consistent. Light theme applies to all three routes.
- Evidence: `docs/inspirplanet-design/light-desktop.png`, `light-mobile.png`, `light-mobile-footer.png`, `support-divider-fixed.png`.
- Desktop 1487 × 1058 and mobile 390 × 844, density 1. Full-screen evidence inspected; no actionable layout issues.
- Footer offers System / Light (candy) / Dark (space). Verified all selections. System followed the browser's dark appearance. Explicit light selection survived reload and route navigation. The selector is disabled until hydration completes. Storage failures fall back to an in-session selection.
- Explore button: smooth behavior, immediate y=0 then final y=1026 and target top=32px. Reduced motion retains auto behavior. Added the Next.js smooth-scroll marker.
- Removed the duplicated contact divider: contact border 0px, final FAQ border 1px. Privacy section dividers remain.
- Browser errors: none. Earlier initialization timing issue resolved with disabled-until-ready control.
- Final result for this iteration: passed.

## Multilingual verification — 2026-10-02

- All eight languages have complete product, 8-question support and 9-section privacy copy, localized controls and metadata. Dictionary structure matches across locales.
- All 24 locale/page combinations return the correct server-rendered HTML language, canonical and nine language alternates. Production build and TypeScript validation passed.
- Browser: English explore link scrolls smoothly; switching to French preserves #explore. French support navigation preserves locale and candy appearance; Contact border-top is 0px.
- German and French at 390px have no horizontal overflow. At 320px German caption ends at 424px and travel label starts at 459px after narrow-screen spacing fix. Footer links wrap.
- English candy desktop evidence: docs/inspirplanet-design/multilingual-en.png. App screenshot remains the original Chinese UI capture; it is not a localized app mock.

## Custom language menu — 2026-10-02

Replaced native language selects in header and footer with a themed custom menu. Verified selected-language checkmark, Escape closes and restores trigger focus, and switching English to simplified Chinese removes the locale query. Production build passed. Footer menu opens upward; keyboard arrows, Home/End and type-ahead use the existing Studio menu behavior. Screenshot: docs/inspirplanet-design/custom-language.png.

## Rounded typography — 2026-10-02

All InspirPlanet pages inherit Nunito plus locale-specific Resource Han Rounded fonts. Menus and form controls inherit the same family. Chinese/Japanese/Korean subsets pass complete current-copy character coverage; 8 files total ~1 MB and only the relevant font faces load. Production build passed. Browser verified matching heading/body/menu families; German product and Japanese support at 320px have no horizontal overflow. German caption ends at 424px, travel label starts at 459px. No browser errors. Desktop Chinese screenshot: docs/inspirplanet-design/rounded-type.png.

## Homepage v2 — English default and lower planet — 2026-10-02

- Default language is English; all eight languages remain available on product, support and privacy routes. All 24 route/language checks and production build passed.
- Homepage explains fast capture, independent notes and subsequent organization with real English/Chinese app screenshots. English heading: “Capture fast. Keep ideas in order.”
- Planet scene is a separate clipped flex child below the hero copy. Desktop copy bottom and scene top both measured 468.41px; mobile both measured 509.32px. The scene follows content height so longer translations cannot overlap text.
- Mobile 390 × 844 has no horizontal overflow. Temporary viewport override was reset after checking.
- Evidence: `docs/inspirplanet-design/homepage-v2-desktop.png` and `homepage-v2-mobile.png`.

## Static device screenshots — 2026-10-02

All six product screenshots now use a silver metal rim, black bezel, rounded display and side buttons based on the Rediscover device style. Screenshot links were removed; browser inspection confirmed six frames and zero linked frames. Desktop and 390px mobile screenshots show no horizontal overflow. Production build passed. Evidence: docs/inspirplanet-design/device-desktop.png and device-mobile.png.

## Support accordion — 2026-10-02

FAQ uses the transitions-dev grid-row accordion: 250ms height/opacity/blur transitions and a flipping chevron. One item opens at a time; clicking an open item closes it. Enter and Space verified. Collapsed content is inert and hidden from assistive technology, including the subscription link. Closed panels measure 0px; contact border remains 0px. Reduced-motion CSS disables all panel and chevron transitions. Production build passed. Evidence: docs/inspirplanet-design/support-accordion.png.
