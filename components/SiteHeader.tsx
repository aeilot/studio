import Link from "next/link";
import { ABOUT_URL, GITHUB_URL } from "@/lib/site";

const navLinks = [
  { href: ABOUT_URL, label: "About" },
  { href: GITHUB_URL, label: "GitHub" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="content-wrap site-header-inner">
        <Link href="/" className="site-logo">
          Evo
        </Link>
        <nav aria-label="Main">
          <ul className="site-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="site-nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
