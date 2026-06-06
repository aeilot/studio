import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { ProjectList } from "@/components/ProjectList";

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
