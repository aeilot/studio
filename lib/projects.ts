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
    id: "frase",
    title: "frase.ai",
    subtitle: "Product",
    description:
      "AI-powered vocabulary learning with contextual definitions, example sentences, and personal wordbooks.",
    href: "https://frase.aeilot.top",
    year: 2025,
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
    year: 2026,
    featured: true,
    external: true,
  },
  {
    id: "hexo-theme-paperwhite",
    title: "hexo-theme-paperwhite",
    subtitle: "Hexo theme",
    description: "A minimalist theme for Hexo.",
    href: "https://github.com/aeilot/hexo-theme-paperwhite",
    year: 2024,
    featured: true,
    external: true,
  },
  {
    id: "lsnotes",
    title: "lsnotes",
    subtitle: "Developer tool",
    description: "Add a description to your directories.",
    href: "https://github.com/aeilot/lsnotes",
    year: 2025,
    featured: true,
    external: true,
  },
  {
    id: "ancient-chinese-dict-cli",
    title: "ancient-chinese-dict-cli",
    subtitle: "CLI",
    description: "A CLI dictionary for ancient Chinese.",
    href: "https://github.com/aeilot/ancient-chinese-dict-cli",
    year: 2025,
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
