"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { activeCities } from "@/lib/site-content";
import { getCityHref } from "@/lib/cities";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { CityAvailabilityCTA } from "./HighlightCTAs";

export function ActiveCities() {
  return (
    <section id="cities" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Active Markets"
          title="Where we can start your branding right now"
          description="Verified store networks across India — formats confirmed, timelines clear, no guesswork. Pick your city and we'll plan your rollout."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "5 cities", label: "Active markets" },
            { value: "400+", label: "Stores ready" },
            { value: "4 markets", label: "Available now" },
            { value: "10–14 days", label: "Avg. go-live" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 bg-surface border border-border">
              <div className="font-serif text-2xl font-medium">{s.value}</div>
              <div className="text-muted text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCities.map((city, i) => (
            <AnimatedReveal key={city.name} delay={i * 0.06}>
              <Link
                href={getCityHref(city.slug)}
                className="group block border border-border p-6 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-wider mb-2">
                  <MapPin size={12} />
                  {city.region}
                </div>
                <h3 className="font-serif text-2xl font-medium group-hover:text-brand transition-colors">
                  {city.name}
                </h3>
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted text-xs">Stores ready</p>
                    <p className="font-medium">{city.stores}</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs">Go-live</p>
                    <p className="font-medium">{city.golive}</p>
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-12">
          <CityAvailabilityCTA />
        </AnimatedReveal>
      </div>
    </section>
  );
}
