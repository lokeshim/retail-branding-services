"use client";

import { AnimatedReveal } from "./ui/AnimatedReveal";

const clients = [
  "Metro Retail Group",
  "Urban Mart Stores",
  "FreshMart Supermarkets",
  "Luxe Fashion Boutique",
  "StyleHub Retail",
  "Brew & Bean Café",
  "GreenLeaf Organics",
  "TechZone Electronics",
];

export function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-border bg-white overflow-hidden">
      <AnimatedReveal>
        <p className="text-center text-foreground/70 text-xs font-medium tracking-[0.3em] uppercase mb-8">
          Trusted by brands across India
        </p>
      </AnimatedReveal>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-serif text-2xl md:text-3xl font-medium text-foreground/50 hover:text-foreground transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
