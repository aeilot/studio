import { HtmlLang } from "@/components/HtmlLang";
import { htmlLangHeader } from "@/lib/html-lang";
import { language } from "@/lib/rediscover-languages";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import { Suspense } from "react";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "Evolution Studio",
  description: "Innovations Change The World",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = language((await headers()).get(htmlLangHeader) ?? undefined);

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning className={`${lora.variable} ${sourceSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem("inspirplanet-theme");document.documentElement.dataset.ipTheme=t==="light"||t==="dark"?t:"system"}catch(e){}})()` }} />
      </head>
      <body>
        <Suspense fallback={null}>
          <HtmlLang />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
