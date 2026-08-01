"use client";

import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { cities, getCityHref } from "@/lib/cities";

export function Cities() {
  return (
    <section id="cities" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Locations"
          title="Retail branding across India"
          description="We serve major retail markets nationwide. Select your city to explore local branding services."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, i) => (
            <AnimatedReveal key={city.slug} delay={i * 0.08}>
              <Link
                href={getCityHref(city.slug)}
                className="group block border border-border p-8 h-full hover:shadow-lg hover:border-foreground/20 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-wider mb-2">
                      <MapPin size={12} />
                      {city.state}
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-muted text-sm mt-2">{city.tagline}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted group-hover:text-foreground transition-colors"
                  />
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted">{city.storesBranded} stores branded</span>
                  <span className="text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
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
