export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  year?: number;
  featured?: boolean;
  external?: boolean;
};

const projects: Project[] = [
  {
    id: "rediscover",
    title: "Rediscover",
    subtitle: "iPhone · iPad · Mac",
    description:
      "Rediscover the pages you meant to read. Save what interests you and come back to a few pages each day.",
    href: "/rediscover",
    year: 2026,
    featured: true,
  },
  {
    id: "frase",
    title: "frase.ai",
    subtitle: "SaaS",
    description:
      "AI-powered vocabulary learning with contextual definitions, example sentences, and personal wordbooks.",
    href: "https://frase.aeilot.top",
    year: 2026,
    featured: true,
    external: true,
  },
  {
    id: "hexo-theme-mingyue",
    title: "Hexo Theme Mingyue",
    subtitle: "Hexo theme",
    description: "A Hexo blog theme with a classical Chinese design.",
    href: "https://github.com/aeilot/hexo-theme-mingyue",
    year: 2026,
    featured: true,
    external: true,
  },
  {
    id: "stay-away-from-my-screen",
    title: "Stay Away From My Screen",
    subtitle: "macOS",
    description:
      'The instant digital "Do Not Touch" sign for your Mac. Protect your display with one keystroke.',
    href: "https://github.com/aeilot/stay-away-from-my-screen",
    year: 2026,
    featured: true,
    external: true,
  },
  {
    id: "ocrit",
    title: "OCRit",
    subtitle: "macOS",
    description: "OCR on macOS with DeepSeek-OCR.",
    href: "https://github.com/aeilot/OCRit",
    year: 2025,
    featured: true,
    external: true,
  },
  {
    id: "habits",
    title: "Habits",
    subtitle: "macOS",
    description: "macOS Habit Tracker in the menu bar",
    href: "https://github.com/aeilot/Habits",
    year: 2025,
    featured: true,
    external: true,
  },
  {
    id: "hsefz-digital-life",
    title: "HSEFZ Digital Life",
    subtitle: "Web Service",
    description:
      "The digital services system for No.2 High School of East China Normal University.",
    href: "https://github.com/HSEFZ-technician/HSEFZ-digital-life",
    year: 2023,
    featured: true,
    external: true,
  },
  {
    id: "lsnotes",
    title: "lsnotes",
    subtitle: "CLI",
    description: "Add a description to your directories!",
    href: "https://github.com/aeilot/lsnotes",
    year: 2022,
    featured: true,
    external: true,
  },
  {
    id: "hexo-theme-paperwhite",
    title: "Hexo Theme Paperwhite",
    subtitle: "Hexo theme",
    description: "A minimalist theme for Hexo.",
    href: "https://github.com/aeilot/hexo-theme-paperwhite",
    year: 2022,
    featured: true,
    external: true,
  },
  {
    id: "daily-notes",
    title: "Daily Notes",
    subtitle: "Android",
    description: "A Markdown Note Application written for Android.",
    href: "https://github.com/aeilot/DailyNotes",
    year: 2019,
    featured: true,
    external: true,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured !== false);
}
