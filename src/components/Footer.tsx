import Link from "next/link";
import { Share2, Globe, Mail } from "lucide-react";

const socialIcons = [Share2, Globe, Mail];

const footerLinks = {
  Verticals: [
    { label: "Airport Branding", href: "/#services" },
    { label: "Retail Branding", href: "/retail-branding-in-bangalore" },
    { label: "Park & Leisure", href: "/#services" },
    { label: "Holdings & Corporate", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/#work" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "Case Studies", href: "/#work" },
    { label: "Partnerships", href: "/contact" },
    { label: "Get a Quote", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-5 lg:gap-12 lg:text-left lg:items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-serif font-semibold">
                  A
                </span>
              </span>
              <span className="font-serif text-xl tracking-wide">
                Aurelia<span className="text-white/60">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Professional brand promotion for airports, retail stores, parks,
              and corporate holdings — building brands that drive business
              growth.
            </p>
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:contents">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div
                key={title}
                className="flex flex-col items-center lg:items-start"
              >
                <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4 lg:flex-row lg:justify-between lg:text-left">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Aurelia Brand Studio. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 justify-center lg:justify-end">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
