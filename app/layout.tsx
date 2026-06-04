import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
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
  title: "Evolution Studio",
  description: "Innovations Change The World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
