"use client";

import Image from "next/image";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";

const projects = [
  {
    title: "Metro Retail Flagship Store",
    category: "Store Identity",
    description:
      "End-to-end retail branding including storefront, in-store graphics, and seasonal promotional campaigns.",
    image: images.store,
    year: "2025",
  },
  {
    title: "Urban Mart Multi-Location Rollout",
    category: "Franchise Branding",
    description:
      "Consistent brand identity rolled out across 12 franchise locations with unified signage and in-store graphics.",
    image: images.hero,
    year: "2025",
  },
  {
    title: "Luxe Fashion Boutique",
    category: "Visual Merchandising",
    description:
      "Window display strategy, interior environmental graphics, and seasonal campaign branding for a premium fashion retailer.",
    image: images.about,
    year: "2024",
  },
  {
    title: "FreshMart Supermarket Chain",
    category: "In-Store Promotion",
    description:
      "POS displays, aisle branding, packaging design, and promotional signage across a 5-store supermarket chain.",
    image: images.process,
    year: "2024",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Featured Work"
          title="Retail brands we've built"
          description="A selection of retail branding projects — from single-store identities to multi-location rollouts across Bangalore."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedReveal key={project.title} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs text-white bg-foreground/80 px-3 py-1 tracking-wider">
                    {project.year}
                  </span>
                </div>
                <div className="mt-5">
                  <span className="text-muted text-xs tracking-[0.2em] uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-foreground mt-2 group-hover:text-foreground/70 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            Start Your Retail Brand Project
            <ArrowUpRight size={14} />
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}
