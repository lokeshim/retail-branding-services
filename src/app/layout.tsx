import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { PopupManager } from "@/components/popup/PopupManager";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurelia Brand Studio | Brand Promotion for Airport, Store, Park & Holdings",
  description:
    "Professional brand promotion and identity solutions for airports, retail stores, parks, and corporate holdings. Strategic branding that drives business growth.",
  keywords: [
    "airport branding",
    "retail store branding",
    "park branding",
    "holdings branding",
    "brand promotion",
    "corporate branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PopupManager>{children}</PopupManager>
      </body>
    </html>
  );
}
