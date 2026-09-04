import type { Metadata } from "next";
import "./rediscover.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: {
    default: "Rediscover — The pages you meant to read",
    template: "%s · Rediscover",
  },
  description:
    "Save what interests you. Come back to a few pages each day. Rediscover for iPhone, iPad and Mac.",
  openGraph: {
    title: "Rediscover",
    description: "Rediscover the pages you meant to read.",
    images: [{ url: "/rediscover/social.png", width: 1200, height: 630 }],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
