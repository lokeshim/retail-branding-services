"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { faqs } from "@/lib/faqs";

export function FAQAccordion({
  items = faqs,
  variant = "on-image",
}: {
  items?: typeof faqs;
  variant?: "on-image" | "on-surface";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const cardClass =
    variant === "on-image"
      ? "bg-white/95 backdrop-blur-sm border border-white/20 shadow-sm"
      : "bg-white border border-border shadow-sm";

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((faq, i) => (
        <AnimatedReveal key={faq.q} delay={i * 0.05}>
          <div className={cardClass}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-serif text-lg md:text-xl text-foreground pr-4">
                {faq.q}
              </span>
              {openIndex === i ? (
                <Minus size={18} className="shrink-0 text-muted" />
              ) : (
                <Plus size={18} className="shrink-0 text-muted" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 md:px-8 pb-6 md:pb-8 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
