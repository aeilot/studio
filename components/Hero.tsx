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
      {showLinks && (
        <p className="hero-links">
          Check{" "}
          <a
            href={ABOUT_URL}
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            about us
          </a>{" "}
          and{" "}
          <Link href="/members" className="hero-link">
            members
          </Link>
        </p>
      )}
    </section>
  );
}
