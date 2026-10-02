import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./inspirplanet.css";
import "./typography.css";
import "./landing.css";
const rounded = Nunito({ subsets: ["latin", "latin-ext"], variable: "--font-ip-rounded", display: "swap" });
export const metadata: Metadata = { title: { default: "InspirPlanet", template: "%s · InspirPlanet" }, icons: { icon: "/inspirplanet/icon.png", apple: "/inspirplanet/icon.png" } };
export default function Layout({ children }: { children: React.ReactNode }) { return <div className={rounded.variable}>{children}</div>; }
