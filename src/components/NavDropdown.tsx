"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  isLight: boolean;
  onNavigate?: () => void;
}

export function NavDropdown({
  label,
  items,
  isLight,
  onNavigate,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  const isActive = items.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const linkClass = isActive
    ? isLight
      ? "text-brand font-medium"
      : "text-white font-medium"
    : isLight
      ? "text-foreground/70 hover:text-foreground"
      : "text-white/85 hover:text-white";

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 text-sm tracking-wide transition-colors ${linkClass}`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 min-w-[260px] bg-white border border-border shadow-xl py-2 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className={`block px-5 py-3 transition-colors hover:bg-surface ${
                  pathname === item.href
                    ? "bg-surface"
                    : ""
                }`}
              >
                <span
                  className={`block text-sm ${
                    pathname === item.href
                      ? "text-brand font-medium"
                      : "text-foreground font-medium"
                  }`}
                >
                  {item.label}
                </span>
                {item.description && (
                  <span className="block text-xs text-muted mt-0.5">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
