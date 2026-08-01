import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { PopupManager } from "@/components/popup/PopupManager";
import { ThemeProvider } from "@/context/ThemeContext";
import { themeCssMap } from "@/lib/themes";
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
  title: "Retail Branding Agency India | In-Store Branding & Promotion",
  description:
    "Plan, price and execute store branding across India. Metro to tier-3 rollouts with operator-aware strategy and verifiable reporting.",
  keywords: [
    "retail branding bangalore",
    "retail branding agency",
    "store branding",
    "visual merchandising",
    "storefront design",
    "retail brand strategy",
  ],
};

const themeInitScript = `
  try {
    var t = localStorage.getItem('aurelia-theme');
    var themes = ${JSON.stringify(themeCssMap)};
    if (t && themes[t]) {
      var c = themes[t];
      var r = document.documentElement;
      r.setAttribute('data-theme', t);
      r.style.setProperty('--background', c.background);
      r.style.setProperty('--foreground', c.foreground);
      r.style.setProperty('--muted', c.muted);
      r.style.setProperty('--accent', c.accent);
      r.style.setProperty('--accent-light', c.accentLight);
      r.style.setProperty('--surface', c.surface);
      r.style.setProperty('--surface-elevated', c.surfaceElevated);
      r.style.setProperty('--border', c.border);
      r.style.setProperty('--card', c.card);
      r.style.setProperty('--brand', c.accent);
      r.style.setProperty('--brand-dark', t === 'classic' ? '#000000' : c.accentLight);
      r.style.setProperty('--brand-light', c.surfaceElevated);
    }
  } catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <PopupManager>{children}</PopupManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
