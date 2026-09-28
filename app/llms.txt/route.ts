import { faq } from "@/lib/rediscover-faq";
import { landing } from "@/lib/rediscover-landing";
import { rediscoverLanguages, route } from "@/lib/rediscover-languages";
import { rediscoverLinks } from "@/lib/rediscover";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const origin = new URL(siteUrl()).origin;
  const url = (path: string) => new URL(path, origin).href;
  const l = landing.en;
  const [free, pro, plus] = l.plans;
  const appStore = rediscoverLinks.appStore?.startsWith("http")
    ? rediscoverLinks.appStore
    : null;
  const body = `# Rediscover

> Rediscover is a read-later app for iPhone, iPad and Mac, made by Evolution Studio. Read-later apps help you save; Rediscover helps you come back. Every day it brings back one, three or five pages you saved, and Radar finds fresh writing from sites you already save from.

## Key facts

- Platforms: iPhone, iPad and Mac. Safari extension bundled with the Mac app; Chrome extension saves to the Mac app.
- Today: a daily selection of 1, 3 or 5 saved pages (styles: Focused, Balanced, Expanded; default Balanced), chosen from pages saved at least a day ago. Optional daily reminder.
- Saving: share sheet, Safari, Chrome, Shortcuts and the clipboard. Each page is summarized and categorized automatically; no tags or folders to manage. Optional "Smart Discovery and Categories" is powered by Jev.
- Radar: discovers new pages from RSS/Atom feeds of sites in your Library and shows them as swipeable cards (right to save, left to pass). Learns from saves, opens and ratings. Stops after 5 saves per day. Pro adds OPML import and manual sources.
- Shared: invite-only reading spaces synced with iCloud. Joining is free.
- Imports (Pro): Pocket export, browser bookmarks (HTML) and CSV.
- AI: on-device Apple Intelligence on compatible devices, or optional cloud processing through OpenRouter (bring your own key on Pro, managed Cloud AI on Pro+).
- Languages: ${rediscoverLanguages.map((locale) => locale.label).join(", ")}.

## Pricing (US dollars)

- ${free.name}: ${free.price}. ${free.items.join("; ")}.
- ${pro.name}: ${pro.price}, ${pro.billing.toLowerCase()}. ${pro.items.join("; ")}.
- ${plus.name}: ${plus.price} ${plus.billing}. ${plus.items.join("; ")}.

## FAQ

${faq.en.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n")}

## Links

- [Rediscover](${url(route(""))}): product page
${rediscoverLanguages
  .filter((locale) => locale.code !== "en")
  .map((locale) => `- [Rediscover (${locale.label})](${url(route("", locale.code))})`)
  .join("\n")}
- [Support](${url(route("/support"))})
- [Privacy policy](${url(route("/privacy"))})
${appStore ? `- [App Store](${appStore})\n` : ""}${rediscoverLinks.chrome ? `- [Chrome extension](${rediscoverLinks.chrome})\n` : ""}
## Optional

- [Evolution Studio](${url("/")}): other projects by the same studio
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
