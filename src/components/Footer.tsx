import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BrandingLeadForm } from "@/components/BrandingLeadForm";
import { activeCities } from "@/lib/site-content";
import { getCityHref } from "@/lib/cities";
const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Logo variant="footer" className="mb-6" />
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">IM SOLUTIONS</p>
            <p className="text-white/70 text-sm italic mb-6">Your Gain Our Success</p>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
              <li><a href="mailto:hello@retailbranding.co" className="hover:text-white">hello@retailbranding.co</a></li>
            </ul>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="px-3 py-2 border border-white/20 text-xs text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Quick Link</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/retail-branding-metro-cities" className="hover:text-white">Retail Branding Metro Cities</Link></li>
              <li><Link href="/retail-branding-tier-cities" className="hover:text-white">Retail Branding Tier 2 & 3 Cities</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog & Insights</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Cities</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {activeCities.map((c) => (
                <li key={c.slug}><Link href={getCityHref(c.slug)} className="hover:text-white">{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-serif text-xl text-white mb-2">
              Let&apos;s Elevate Your Retail Brand Experience
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Partner with India&apos;s most trusted{" "}
              <em className="italic text-white/80">retail branding consultant</em>{" "}
              to build memorable, high-performing retail spaces.
            </p>
            <BrandingLeadForm variant="footer" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Retail Branding Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
