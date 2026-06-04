import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { ProjectList } from "@/components/ProjectList";

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="It has arrived."
        tagline="where sparkles of innovations are ignited"
        showLinks
      />
      <ProjectList />
    </PageShell>
  );
}
