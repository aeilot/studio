import { GITHUB_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-wrap site-footer-inner">
        <p className="site-footer-motto">Built with care by <a href="https://aeilot.top">@aeilot</a>.</p>
        <a
          href={GITHUB_URL}
          className="site-footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
