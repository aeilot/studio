import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
};

export function PageShell({
  children,
  showHeader = true,
  showFooter = true,
}: PageShellProps) {
  return (
    <div className="page">
      {showHeader && <SiteHeader />}
      <main className="page-main">{children}</main>
      {showFooter && <SiteFooter />}
    </div>
  );
}
