export const feedbackEmail = "louis.chenluodeng@gmail.com";
// Set verified destinations here when distribution and support URLs are ready.
export const rediscoverLinks: {
  appStore: string | null;
  safari: string | null;
  chrome: string | null;
  feedback: string | null;
} = {
  appStore: "https://apps.apple.com/us/app/rediscover-reading-radar/id6807623281",
  safari: null,
  chrome:
    "https://chromewebstore.google.com/detail/save-to-rediscover/mfcclligjgceiagjnkahhjhmmgbnnnbh",
  feedback: `mailto:${feedbackEmail}?subject=Rediscover%20Feedback`,
};
export const copy = {
  back: "Evolution Studio",
  feedback: "Feedback",
  privacy: "Privacy",
  download: "Download on the App Store",
  pending: "App Store link coming soon",
  soon: "Link coming soon",
  title: "Rediscover the pages you meant to read.",
  platforms: "Made for iPhone, iPad & Mac",
  safari:
    "Included with Rediscover for Mac. Enable it in Safari to save the page you’re reading.",
  chrome:
    "Save the current page to the Rediscover Mac app with the companion extension.",
  end: "Something worth coming back to.",
  endBody: "Your next good read might already be in your Library.",
  supportTitle: "Let’s make Rediscover better.",
  supportIntro:
    "Have a question or suggestion? Send me an email. If something isn’t working, the details below will help me look into it.",
  contact: "Write me an email",
  contactPending: "A dedicated feedback channel is coming soon.",
  supportItems: [
    "What were you trying to do? Tell us what happened and what you expected.",
    "Include your device, OS version, and Rediscover version. Tap the version in About Rediscover to copy it.",
    "If useful, attach a screenshot or the page URL. Remove personal information and never share your API key.",
  ],
  privacyTitle: "Your pages. Your choices.",
  privacyIntro:
    "How Rediscover handles your saved content, reading activity, and connected services.",
  privacyScope:
    "This policy applies to Rediscover and its companion browser extensions.",
  updated: "Last updated September 21, 2026",
};
export const privacySections = [
  [
    "Saved content",
    "Rediscover stores saved URLs, page titles, extracted article text, summaries, categories, reading status, and feedback on your device so you can organize and revisit your pages.",
  ],
  [
    "iCloud",
    "When iCloud synchronization is available and active, library articles, feed subscriptions, and daily recommendations can sync through Apple CloudKit. Some working data, including fetched feed items and import batches, stays in the local store.",
  ],
  [
    "Web requests",
    "Fetching a page, its metadata or images, opening an article, and discovering or refreshing Radar feeds makes requests to the relevant websites or content providers. Those services receive network information such as your IP address and the requested URL.",
  ],
  [
    "Optional AI and Jev processing",
    "Rediscover supports on-device Apple Intelligence on compatible devices and optional cloud processing through OpenRouter. When you select Cloud or BYOK, Rediscover may send the page URL, title, extracted text, summary, categories, topics, and recommendation context needed for summaries, classification, or reading guides to OpenRouter, which routes the request to the selected model provider. A BYOK OpenRouter API key is stored in the system Keychain and used to authenticate requests. If you also turn on Jev Decisions, Rediscover sends shorter decision inputs—such as item IDs, titles, truncated summaries, topics, category profiles, and reading context—through OpenRouter to help with features such as Radar timing and category organization. OpenRouter and its model providers apply their own retention, training, and privacy practices. On-device model processing does not send its input to OpenRouter; other app features may still use the network.",
  ],
  [
    "Browser extensions",
    "When you activate Save to Rediscover, the extension reads the current page and sends extracted text and structured metadata to the native app. Safari’s extension is bundled with the Mac app; Chrome uses a native messaging companion.",
  ],
  [
    "Local activity records",
    "The app keeps local product activity records and AI or Jev usage records, such as reading feedback, task type, token counts, input size, decision counts, and latency. These support in-app insights and diagnostics and do not contain your API key.",
  ],
  [
    "Your controls and contact",
    "You can manage saved pages and AI settings in the app, and remove a browser extension through your browser. Connected providers apply their own policies to requests they receive. For privacy questions or requests, email louis.chenluodeng@gmail.com.",
  ],
];
