"use client";

import Image from "next/image";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Plane, Store, Trees, Building2 } from "lucide-react";
import { images } from "@/lib/images";

const verticals = [
  {
    icon: Plane,
    title: "Airport Branding",
    description:
      "Terminal signage, lounge branding, wayfinding systems, and promotional campaigns that enhance passenger experience and brand visibility.",
    image: images.airport,
  },
  {
    icon: Store,
    title: "Retail Store Promotion",
    description:
      "In-store branding, visual merchandising, storefront identity, and promotional materials that drive footfall and sales.",
    image: images.store,
  },
  {
    icon: Trees,
    title: "Park & Leisure Branding",
    description:
      "Theme park identity, recreational venue branding, event promotion, and environmental graphics for leisure destinations.",
    image: images.park,
  },
  {
    icon: Building2,
    title: "Holdings & Corporate",
    description:
      "Corporate identity for holding companies, subsidiary branding, investor communications, and multi-brand portfolio management.",
    image: images.holdings,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Verticals"
          title="Brand promotion tailored to your industry"
          description="We specialize in four core business sectors, delivering targeted branding solutions that resonate with your audience and drive measurable results."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.1}>
              <article className="group bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow duration-500">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
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
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="mt-6 w-0 group-hover:w-12 h-0.5 bg-foreground transition-all duration-500" />
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
