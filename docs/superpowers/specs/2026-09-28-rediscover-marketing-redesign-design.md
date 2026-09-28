# Rediscover marketing redesign — design

Date: 2026-09-28
Scope: the `/rediscover` landing page only, in all eight site languages. App Store listing, launch channels, a Pocket migration page and the studio homepage card are out of scope.

## Positioning

**Read-later apps help you save. Rediscover helps you come back.**

- Resurfacing (Today) is the product. Saving is presented as a given: easy, everywhere, and without sorting.
- Primary audience: read-later refugees and hoarders — former Pocket, Instapaper and Omnivore users with a backlog they never read.
- Primary action: download from the App Store. No TestFlight or waitlist on the landing page.
- Jev is a supporting credit, not a headline. The page leads with "no tags, no folders"; Jev is named once, where organisation is explained.

### Claims the page may make

Every claim below is backed by the Rediscover app code (`../Rediscover`).

| Claim | Source of truth |
| --- | --- |
| Today brings back one, three or five pages a day (Focused / Balanced / Expanded; default Balanced). | `Models/DailyRecommendation.swift` |
| Picks come from pages saved at least a day ago. | `Services/RecommendationEngine.swift` |
| An optional daily reminder, skipped if Today is already opened or finished. | `App/TodayReminder.swift` |
| After reading, rate a page Not really / Worth it / Excellent; future picks use it. | `Models/Article.swift`, `Services/RecommendationTaste.swift` |
| Save from the share sheet, Safari (Mac), Chrome (Mac), Shortcuts and the clipboard. | `RediscoverShareExtension`, `RediscoverSafariExtension`, `ChromeExtension`, `Features/iOS/IOSAppIntents.swift`, `IOSAddLinkSheet.swift` |
| Each save is read, summarised and categorised automatically. | `Services/ArticleAnalyzer.swift`, `CategoryOrganizer` |
| Smart categories can be powered by Jev. | `Services/Decisions/JevClient.swift`, Settings "Smart Discovery and Categories" |
| Radar finds new writing from sites you already save from; swipe right to save, left to pass. | `Services/Radar/*`, `RadarRecommendationCard.swift` |
| Radar learns from saves, opens, ratings and mutes. | `RadarHostAffinity.swift`, `RadarSelector.swift` |
| Radar stops after five saves a day. | `FeedModels.swift` (`dailySaveLimit = 5`), `RadarEmptyState.swift` |
| Shared spaces: invite people, add links, save to your Library; joining is free. | `SharedReadingSync.swift`, `PurchaseEntitlements` |
| Import from Pocket (ZIP or CSV), Instapaper, Raindrop.io, Readwise Reader, generic CSV and bookmarks HTML; direct Safari, Chrome and Edge bookmark import on Mac (Pro). Omnivore is not supported. | `Features/Import/BookmarkImportFlow.swift`, `Services/Import` |
| Plans: Free / Pro $29.99 lifetime / Pro+ $5.99 per month or $49.99 per year. | `PurchaseProducts.swift`, `Rediscover.storekit` |

### Claims the page must not make

- That Jev handles all tags and categories for everyone. Jev is off by default and falls back to standard behaviour; summaries and topics come from other models.
- That Radar maximises or guarantees the number of saved articles. It does the opposite: it caps saves at five a day.
- That the Today count is any number from one to five. It is exactly one, three or five.
- That notifications arrive automatically. They are opt-in.
- A free trial. StoreKit has no introductory offer.

## Page structure

Visual system stays as-is: type scale, colours (`--ink`, `--paper`, `--soft`), grey story panel, dark Radar section with signal art, `Device` frames, scroll reveal and reduced-motion handling, language menu, sticky header.

English copy below is the source; all eight languages get equivalent copy.

### Header

Nav: Today · Radar · Shared · Plans · language menu. "Browser extensions" and "Feedback" leave the header.

### 1. Hero (existing `.rd-hero`)

- Eyebrow: "The other half of read-later."
- H1: "Rediscover the pages you meant to read." (unchanged)
- Lead: "Most apps are great at saving. Rediscover is built for coming back: every day it brings back one, three or five pages you saved, and lets you know when they're ready."
- Actions: App Store badge; text link "Coming from Pocket? ↓" to `#pocket`.
- Platforms line (unchanged). Tilted iPhone with `today.png` (unchanged).
- Removed: TestFlight link, the Features/Plans link row.

### 2. The problem (existing `.rd-manifesto` slot)

- Eyebrow: "THE PROBLEM WITH LATER"
- H2: "Later has a way of becoming never."
- Body: "You saved it for a reason. Then it sank under everything else you saved. Rediscover isn't another list to clear. It's the part that brings things back."

### 3. 01 / Today (existing `.rd-story` grey panel, id `today`)

- H2: "A few good pages. Every day."
- Body: "Choose Focused, Balanced or Expanded: one, three or five pages from what you saved at least a day ago. One quiet reminder when they're ready, and none if you've already read them."
- New visual detail, built in HTML/CSS (not images):
  - A 1 · 3 · 5 segmented control labelled Focused / Balanced / Expanded, Balanced selected. Decorative, `aria-hidden`, with the same information in the body text.
  - A notification banner using the app's strings: title "Today", body "A few pages to read, when you're ready."
- Merged sub-block (replaces "02 / Read & Return"): H3 "Read it. Rate it." Body: "Finish a page and mark it Not really, Worth it or Excellent. Tomorrow's picks get a little more yours."
- Screenshot: `public/rediscover/rate.png`, copied from `GuideWorth-iPhone.png` (the "Was this worth your time?" sheet). It replaces `read.png`, which showed the Library and duplicated the Save section.

### 4. 02 / Save without sorting (new; replaces `.rd-extensions`, id `save`)

- H2: "Save without sorting."
- Body: "Save from the share sheet, Safari, Chrome, Shortcuts or the clipboard. Rediscover reads each page, writes a short summary and files it for you. No tags to invent, no folders to maintain."
- Capture row: Share sheet · Safari · Chrome · Shortcuts · Clipboard (text chips, no icons).
- Safari and Chrome cards keep their current content, links and states.
- Credit line (small, `--soft`): "Smart categories, powered by Jev."
- Screenshot: `public/rediscover/library.png`, copied from `../Rediscover/Rediscover/Resources/GuideImages/GuideDetails-iPhone.png` (shows summary, topics and category on a Library item).
- Keeps `id="extensions"` as an alias anchor so existing links still land here.

### 5. 03 / Radar (existing `.rd-radar` dark section, id `radar`)

- H2: "Fresh writing. Knows when to stop."
- Body: "Radar watches the sites you already save from and deals new pages as cards. Swipe right to save, left to pass. It learns from what you keep, and after five saves it calls it a day."
- Pull quote (the app's own copy): "Five saved pages is plenty to read. Radar will wait."
- Note: "Bring your feeds along with OPML import on Pro."
- Screenshot and signal art unchanged.

### 6. 04 / Shared (existing `.rd-shared`, id `shared`)

- H2: "Shared, for reading together."
- Body: "Invite people into a space, drop in links worth discussing, and save the best to your own Library. Joining is always free."
- Screenshot unchanged. The "Plans ↓" link stays.

### 7. Coming from Pocket? (new slim strip, id `pocket`)

- H2 (section-level, smaller than page H2s): "Coming from Pocket?"
- Body: "Bring your Pocket export, browser bookmarks or a CSV. Rediscover starts bringing them back tomorrow."
- Note: "Imports are included with Pro."
- Layout: a single centred row in the existing `.rd-wrap`; no screenshot.

### 8. Every screen (existing `.rd-cloud`, unchanged)

### 9. Plans (existing `.rd-plans`, id `plans`)

Three cards, now with prices:

- Free — $0 — "Get to know Rediscover": 15 saved articles · 3 Radar sources; create 1 shared space; Cloud Free.
- Pro — $29.99, one-time purchase — unlimited articles and Radar sources; Pocket, bookmark and OPML imports; iCloud sync; bring your own OpenRouter key; create 3 shared spaces.
- Pro+ — $5.99 per month or $49.99 per year — everything in Pro; Cloud AI without your own key, with higher limits; unlimited shared spaces.
- Note: "US prices. Your local price appears in the App Store. Cloud usage limits apply; bring-your-own-key model costs are billed by your provider."
- The same USD prices are shown in every language, with the note translated.

### 10. End (existing `.rd-end`, unchanged copy)

"Something worth coming back to." / "Your next good read might already be in your Library." / App Store badge.

### Footer

Adds "Support & feedback" (to `/rediscover/support`) next to Privacy.

### Removed from the landing page

- TestFlight section (`.rd-beta`) and the hero TestFlight link.
- Feature grid (`.rd-new-features`: OPML, Jev, OpenRouter). Its content moves into Save, Radar and Plans.
- Feedback block (`.rd-feedback`). It moves to `/rediscover/support`, which gains the "what to include" list and the email button.
- The "Limited-time offer" preview note under the end badge.

## Code structure

- `app/rediscover/page.tsx` becomes a thin composition of section components in `components/rediscover/sections/` — `Hero`, `Problem`, `Today`, `Save`, `Radar`, `Shared`, `Pocket`, `Cloud`, `Plans`, `End`. Each takes the language's copy object.
- Landing copy moves into one typed object per language, `lib/rediscover-landing.ts`, typed as `Record<Language, LandingCopy>` with `satisfies`, so a missing string in any language fails `tsc`. It replaces `lib/rediscover-features.ts` and the landing-page keys in `lib/rediscover-translations.ts` / `lib/rediscover-international.ts`.
- Shell (header, footer, language menu), support and privacy copy stay in their current files. Only the nav/footer keys change.
- New CSS lives in `app/rediscover/rediscover.css` next to the existing section rules, using existing tokens and the `rd-` prefix. Rules for removed sections are deleted.
- `lib/rediscover.ts`: `appStore` becomes the real product URL (supplied before release); `testFlight` is removed.
- `lib/rediscover-metadata.ts`: landing title "Rediscover — the other half of read-later" and a description based on the hero lead, per language. The Open Graph artwork is unchanged.
- `docs/rediscover.md` is updated to describe the new sections, sources and removals.

## Verification

- `pnpm build` passes (type-checks all eight languages).
- Visual check at desktop (1440px) and mobile (390px) widths in English, Simplified Chinese and German (the longest strings); screenshots of each section.
- Every in-page anchor works: `#today`, `#save`, `#extensions`, `#radar`, `#shared`, `#pocket`, `#plans`, `#download`, including after switching language.
- Reduced motion: no reveal or entrance animation, content visible.
- No JavaScript: all content visible.

## Before release

- Real App Store URL in `lib/rediscover.ts`.
- Shared must be enabled in the launch build (its feature flag currently defaults off in Release); the owner has confirmed it will be.
- Confirm final prices still match `Rediscover.storekit`.
