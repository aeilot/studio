import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members · Evolution Studio",
  robots: { index: false, follow: true },
};

export default function MembersPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="coming soon..."
        tagline="where sparkles of innovations are ignited"
      />
    </PageShell>
  );
}
