# Evolution Studio

Site for Evolution Studio, built with [Next.js](https://nextjs.org/).

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Projects

Featured projects are defined in `lib/projects.ts` and shown on the homepage.

## Build

```bash
pnpm build
pnpm start
```

## InspirPlanet

- `/inspirplanet`: product landing page (English by default, with a planet hero and real app screenshots).
- `/inspirplanet/support`: FAQ and support email.
- `/inspirplanet/privacy`: current local, iCloud, speech, AI, purchase and sharing data flows.

Visual evidence and verification notes are in `design-qa.md`. The support address follows the existing Studio contact. Add an App Store download link once the product listing is available.

InspirPlanet now follows system appearance by default. The footer offers candy Light Mode, space Dark Mode, and System; the preference is stored locally under `inspirplanet-theme`. Anchor links scroll smoothly unless reduced motion is enabled.

### InspirPlanet languages

Product, support and privacy pages support English, simplified/traditional Chinese, Japanese, Korean, French, German and Spanish. English is the default; other locales use `?lang=zh-Hans` (or the corresponding language code). Header and footer selectors keep the current page and fragment. Navigation retains the locale and appearance preferences remain in local storage. Full copy lives in `lib/inspirplanet/locales`; metadata, HTML language and sitemap alternates follow the selected locale.

### InspirPlanet rounded typography

Brand and hero headings use Nunito via `next/font/google` (served by this site). The redesigned homepage uses Source Sans 3 for body copy; support and privacy retain rounded typography. Chinese, Japanese and Korean use locally hosted Resource Han Rounded SC/TC/J/K regular and bold WOFF2 subsets. Licenses are included in `public/inspirplanet/fonts`. Typography is scoped to InspirPlanet.

Sources: https://fonts.google.com/specimen/Nunito and https://github.com/CyanoHao/Resource-Han-Rounded/releases/tag/v0.990. To add characters after editing localized copy, extract the official RHR-TTF-0.990 release into a local directory, then run `uv run --with 'fonttools[woff]' python scripts/subset-inspirplanet-fonts.py /path/to/extracted/fonts`. The script verifies all required non-Latin characters and regenerates local fonts and typography CSS.
