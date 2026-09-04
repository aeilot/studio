export const ABOUT_URL = "https://aeilot.top";
export const GITHUB_URL = "https://github.com/louis-studio";
export const PRODUCTION_SITE_URL = "https://studio.aeilot.top";

export function siteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
