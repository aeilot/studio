import Link from "next/link";
import { ABOUT_URL } from "@/lib/site";
import { StudioTitle } from "@/components/StudioTitle";

type HeroProps = {
  eyebrow: string;
  tagline?: string;
  showLinks?: boolean;
};

export function Hero({ eyebrow, tagline, showLinks = false }: HeroProps) {
  return (
    <section className="hero content-wrap">
      <p className="hero-eyebrow">{eyebrow}</p>
      <StudioTitle />
      {tagline && <p className="hero-tagline">{tagline}</p>}
    </section>
  );
}
