import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/lib/images";

const markets = [
  {
    title: "Metro Cities",
    subtitle: "Mall, high-street & flagship",
    stat: "8+ metros · 2,500+ stores",
    href: "/retail-branding-metro-cities",
    image: images.metroCoverage,
    imageAlt: "Metro city retail branding — malls and high-street stores",
  },
  {
    title: "Tier 2 & 3 Cities",
    subtitle: "Neighbourhood & channel retail",
    stat: "50+ tier cities · 5,000+ outlets",
    href: "/retail-branding-tier-cities",
    image: images.tierCoverage,
    imageAlt: "Tier 2 and tier 3 city retail branding — neighbourhood outlets",
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
                className="group block border border-border overflow-hidden bg-white hover:shadow-xl hover:border-brand/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-foreground/10 transition-opacity duration-500 group-hover:from-foreground/85 group-hover:via-foreground/40" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <p className="text-white/80 text-xs font-medium tracking-wider uppercase mb-2">
                      {m.stat}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
                      {m.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{m.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-6 md:px-8 md:py-5 bg-surface group-hover:bg-white transition-colors duration-300">
                  <span className="text-sm text-foreground">
                    Explore {m.title.toLowerCase()}
                  </span>
                  <span className="inline-flex items-center justify-center w-9 h-9 border border-border bg-white group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-all duration-300">
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
