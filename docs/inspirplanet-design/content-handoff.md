# InspirPlanet content handoff

Updated 2026-10-02. This update adds product material to the existing design.

## Files for a subsequent design pass

- `app/inspirplanet/page.tsx`: product page and six-screen gallery.
- `app/inspirplanet/inspirplanet.css`: current layout/theme styling.
- `app/inspirplanet/typography.css`: rounded typography.
- `lib/inspirplanet/locales/*.json`: eight-language product text; new `product` object contains introduction, screenshot disclosure and captions.
- `public/inspirplanet/screenshots/zh-Hans/`: six current Chinese UI screenshots.
- `public/inspirplanet/screenshots/en/`: six current English UI screenshots.

## Screenshot provenance

Source: sibling InspirPlanet app repo, `docs/app-store/iphone-air/raw/` and `docs/app-store/iphone-air/en/raw/`, captured 2026-10-02. Site copies are WebP, proportionally resized from 1260×2736 to 840×1824. These are real SwiftUI screens with isolated demonstration records. No UI is redrawn. The Chinese fifth screenshot shows related ideas; the English fifth shows a theme suggestion and Review & Create (cached demonstration fixture, not a fresh live response).

Chinese locales show simplified-Chinese UI with localized disclosure. Other locales show English UI with localized disclosure. Do not imply that the screenshots themselves have been translated into all eight languages. Original full-resolution images and framed App Store posters remain in the sibling app repo.

## Product facts to preserve

InspirPlanet is an iPhone idea notebook: text input and long-press voice capture; local-first saving; online AI for tags, keywords, priorities and planet placement; planets for projects, stars for ongoing themes, Nebula for unsorted ideas. Related ideas, long-text key points and theme suggestions are supported; suggested planets require confirmation. Project records can be marked done. iCloud sync includes planets, text and audio under the same Apple Account. Do not describe all AI as on-device, promise instant sync, or claim semantic/embedding search.

The current hero artwork and rounded fonts remain available for the next design pass. Existing language routing, theme persistence, smooth scrolling, support FAQ and privacy pages should be preserved. Production build passed; browser verified the product introduction and visible screenshot loading with no horizontal overflow at 823px.
