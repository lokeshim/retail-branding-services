"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { usePopup } from "@/context/PopupContext";
import { Logo } from "@/components/Logo";
import { NavDropdown } from "@/components/NavDropdown";

const mainLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Formats", href: "/formats" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faq" },
];

const cityDropdownItems = [
  {
    label: "Metro Cities",
    href: "/retail-branding-metro-cities",
    description: "Mall, high-street & flagship",
  },
  {
    label: "Tier 2 & 3 Cities",
    href: "/retail-branding-tier-cities",
    description: "Neighbourhood & channel retail",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { openContactPopup } = usePopup();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileCitiesOpen(false);
  }, [pathname]);

  const isLight = !isHome || scrolled;

  const linkClass = (href: string) => {
    const active = pathname === href || pathname.startsWith(href + "/");
    return `text-sm tracking-wide transition-colors ${
      active
        ? isLight ? "text-brand font-medium" : "text-white font-medium"
        : isLight ? "text-foreground/70 hover:text-foreground" : "text-white/85 hover:text-white"
    }`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isLight ? "bg-white shadow-md border-b border-black/5" : "bg-black/60 backdrop-blur-md border-b border-white/10"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Logo variant={isLight ? "light" : "dark"} compact />

        <ul className="hidden lg:flex items-center gap-5 xl:gap-6">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>{link.label}</Link>
            </li>
          ))}
          <NavDropdown label="Cities" items={cityDropdownItems} isLight={isLight} />
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openContactPopup}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            Get a quote <ArrowUpRight size={14} />
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${isLight ? "text-foreground" : "text-white"}`} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden border-b max-h-[85vh] overflow-y-auto ${isLight ? "bg-white border-border" : "bg-black/95 border-white/10"}`}>
            <ul className="px-6 py-6 flex flex-col gap-1">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className={`block py-3 text-base ${linkClass(link.href)}`}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)} className={`w-full flex items-center justify-between py-3 text-base ${isLight ? "text-foreground/70" : "text-white/85"}`}>
                  Cities <ChevronDown size={18} className={mobileCitiesOpen ? "rotate-180" : ""} />
                </button>
                {mobileCitiesOpen && (
                  <ul className="pl-4 pb-2 space-y-1">
                    {cityDropdownItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setMobileOpen(false)} className={`block py-2 ${linkClass(item.href)}`}>
                          <span>{item.label}</span>
                          {item.description && (
                            <span className={`block text-xs mt-0.5 ${isLight ? "text-muted" : "text-white/50"}`}>{item.description}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="pt-4 flex gap-3">
                <button onClick={() => { setMobileOpen(false); openContactPopup(); }} className="flex-1 py-3 bg-brand text-white text-sm font-medium">Get a quote</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
