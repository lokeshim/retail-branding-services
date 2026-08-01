"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { faqs } from "@/lib/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const homeFaqs = faqs.slice(0, 5);

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          description="Quick answers about our retail branding services, process, and pricing."
          align="center"
        />

        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <AnimatedReveal key={faq.q} delay={i * 0.05}>
              <div className="bg-white border border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-serif text-lg text-foreground pr-4">
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
                      <p className="px-6 pb-6 text-muted text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            View All FAQs
            <ArrowUpRight size={14} />
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
