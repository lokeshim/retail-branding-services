"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePopup } from "@/context/PopupContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openContactPopup } = usePopup();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isLight = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLight
          ? "bg-white shadow-md border-b border-black/5"
          : "bg-black/60 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`w-8 h-8 border-2 flex items-center justify-center transition-colors ${
              isLight ? "border-foreground" : "border-white"
            }`}
          >
            <span
              className={`text-xs font-serif font-semibold ${
                isLight ? "text-foreground" : "text-white"
              }`}
            >
              A
            </span>
          </span>
          <span
            className={`font-serif text-xl tracking-wide ${
              isLight ? "text-foreground" : "text-white"
            }`}
          >
            Aurelia<span className={isLight ? "text-muted" : "text-white/70"}>.</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? isLight
                        ? "text-foreground font-medium"
                        : "text-white font-medium"
                      : isLight
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={openContactPopup}
          className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ${
            isLight
              ? "bg-foreground text-white hover:bg-foreground/90"
              : "bg-white text-foreground hover:bg-white/90"
          }`}
        >
          Get Started
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${isLight ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden border-b ${
              isLight
                ? "bg-white border-border"
                : "bg-black/90 backdrop-blur-lg border-white/10"
            }`}
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-lg transition-colors ${
                      pathname === link.href
                        ? isLight
                          ? "text-foreground font-medium"
                          : "text-white font-medium"
                        : isLight
                          ? "text-foreground/70 hover:text-foreground"
                          : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openContactPopup();
                  }}
                  className={`inline-block mt-4 px-6 py-3 text-sm tracking-wide ${
                    isLight
                      ? "bg-foreground text-white"
                      : "bg-white text-foreground"
                  }`}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
