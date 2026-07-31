"use client";

import { AnimatedReveal } from "./ui/AnimatedReveal";

const clients = [
  "SkyPort International",
  "Metro Retail Group",
  "Green Valley Parks",
  "Apex Holdings Ltd.",
  "Terminal One Lounge",
  "Urban Mart Stores",
  "Sunrise Theme Park",
  "Pinnacle Corp.",
];

export function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-border bg-white overflow-hidden">
      <AnimatedReveal>
        <p className="text-center text-foreground/70 text-xs font-medium tracking-[0.3em] uppercase mb-8">
          Trusted across airports, stores, parks & holdings
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
