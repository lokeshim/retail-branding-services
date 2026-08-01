import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";

const markets = [
  {
    title: "Metro Cities",
    subtitle: "Mall, high-street & flagship",
    stat: "8+ metros · 2,500+ stores",
    href: "/retail-branding-metro-cities",
  },
  {
    title: "Tier 2 & 3 Cities",
    subtitle: "Neighbourhood & channel retail",
    stat: "50+ tier cities · 5,000+ outlets",
    href: "/retail-branding-tier-cities",
  },
];

export function MarketCoverage() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Coverage"
          title="Pan-India retail branding metro to tier 3."
          description="One accountable team for premium metro rollouts and scalable tier-city expansion."
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {markets.map((m, i) => (
            <AnimatedReveal key={m.title} delay={i * 0.1}>
              <Link
                href={m.href}
                className="group block border border-border p-10 hover:shadow-lg hover:border-brand/30 transition-all"
              >
                <p className="text-brand text-xs font-medium tracking-wider uppercase mb-3">{m.stat}</p>
                <h3 className="font-serif text-3xl font-medium text-foreground group-hover:text-brand transition-colors">
                  {m.title}
                </h3>
                <p className="text-muted mt-2">{m.subtitle}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm text-foreground">
                  Explore {m.title.toLowerCase()}
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
