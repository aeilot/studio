import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { ProjectList } from "@/components/ProjectList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Evolution Studio — Rediscover, InspirPlanet & more" },
  description:
    "Evolution Studio is an indie studio making apps for iPhone, iPad and Mac, including Rediscover, the read-later app that brings your pages back, and InspirPlanet for capturing ideas.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Evolution Studio", url: "/" },
};

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Creating since 2018"
        tagline="where we believe innovation changes the world."
        showLinks
      />
      <ProjectList />
    </PageShell>
  );
}
