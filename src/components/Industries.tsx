"use client";

import Link from "next/link";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { industries } from "@/lib/industries-data";
import { ArrowUpRight } from "lucide-react";

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Industries"
          title="Retail categories we specialise in"
          description="From fashion boutiques to franchise chains — tailored branding for every type of retail business."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <AnimatedReveal key={item.id} delay={i * 0.08}>
              <article className="group border border-border p-8 h-full hover:shadow-lg transition-shadow">
                <item.icon size={24} strokeWidth={1.5} className="mb-4" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.examples.slice(0, 3).map((ex) => (
                    <span
                      key={ex}
                      className="text-xs px-2 py-1 bg-surface text-muted border border-border"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            View All Industries
            <ArrowUpRight size={14} />
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
