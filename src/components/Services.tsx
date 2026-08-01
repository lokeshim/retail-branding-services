"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { images } from "@/lib/images";
import { services } from "@/lib/services-data";

const serviceImages: Record<string, string> = {
  "store-identity": images.store,
  storefront: images.hero,
  packaging: images.about,
  "in-store-promotion": images.process,
  "visual-merchandising": images.cta,
  "brand-strategy": images.holdings,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Complete retail branding solutions"
          description="From store identity to pan-India rollout — everything your brand needs for high-impact in-store presence."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <AnimatedReveal key={item.id} delay={i * 0.1}>
              <article
                id={item.id}
                className="group bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow duration-500 scroll-mt-28"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={serviceImages[item.id] ?? images.store}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="mt-6 w-0 group-hover:w-12 h-0.5 bg-foreground transition-all duration-500" />
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            View all services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
