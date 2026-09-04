import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  // Local production builds use a separate directory so they cannot replace
  // chunks used by a running `next dev` server. Vercel always expects `.next`.
  const useDefaultDistDir =
    phase === PHASE_DEVELOPMENT_SERVER || Boolean(process.env.VERCEL);

  return {
    distDir: useDefaultDistDir ? ".next" : ".next-production",
    // Keep Open Graph / Twitter tags in <head> for every UA. Next.js 15 otherwise
    // streams generateMetadata into <body> except for a short crawler list.
    htmlLimitedBots: /.*/,
    outputFileTracingIncludes: {
      "/rediscover/opengraph-image": [
        "./app/rediscover/og/**/*",
        "./public/rediscover/today.png",
        "./public/rediscover/icon.png",
      ],
    },
  };
}
