import type { Metadata } from "next";
import Link from "next/link";
import { ThemePicker } from "@/components/ThemePicker";
import { Logo } from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Theme Colors | Retail Branding Agency",
  description: "Choose a business color combination for the Retail Branding Agency website.",
  robots: { index: false, follow: false },
};

export default function ThemePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-lg mx-auto px-6 py-12 md:py-16">
        <div className="mb-10">
          <Logo variant="light" className="mb-8" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Back to website
          </Link>
        </div>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Settings</p>
          <h1 className="font-serif text-4xl font-medium leading-tight">Theme colors</h1>
          <p className="text-muted text-sm mt-3 leading-relaxed">
            Pick a color combination for the site. Changes apply instantly and are remembered on this device.
          </p>
        </header>

        <ThemePicker />
      </div>
    </div>
  );
}
