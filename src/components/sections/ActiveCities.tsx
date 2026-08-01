"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { activeCities } from "@/lib/site-content";
import { getCityHref } from "@/lib/cities";
import { getCityImage } from "@/lib/city-images";
import { images } from "@/lib/images";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { CityAvailabilityCTA } from "./HighlightCTAs";

const stats = [
  { value: "5 cities", label: "Active markets" },
  { value: "400+", label: "Stores ready" },
  { value: "4 markets", label: "Available now" },
  { value: "10–14 days", label: "Avg. go-live" },
];

export function ActiveCities() {
  return (
    <section id="cities" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Active Markets"
          title="Where we can start your branding right now"
          description="Verified store networks across India — formats confirmed, timelines clear, no guesswork. Pick your city and we'll plan your rollout."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <AnimatedReveal key={s.label} delay={i * 0.05}>
              <div className="group text-center p-4 md:p-5 bg-white border border-border hover:border-brand/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="font-serif text-2xl font-medium group-hover:text-brand transition-colors">
                  {s.value}
                </div>
                <div className="text-muted text-xs mt-1">{s.label}</div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCities.map((city, i) => {
            const cityImage = getCityImage(city.slug);

            return (
            <AnimatedReveal key={city.name} delay={i * 0.06} className="h-full">
              <Link
                href={getCityHref(city.slug)}
                className="group block h-full border border-border overflow-hidden bg-white hover:shadow-xl hover:border-brand/30 transition-all duration-500"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-foreground/10">
                  <Image
                    src={cityImage?.src ?? images.store}
                    alt={cityImage?.alt ?? `Retail branding in ${city.name}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent transition-opacity duration-500 group-hover:from-foreground/90 group-hover:via-foreground/45" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <div className="flex items-center gap-2 text-white/75 text-xs uppercase tracking-wider mb-2">
                      <MapPin size={12} />
                      {city.region}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
                      {city.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 md:p-6 group-hover:bg-surface transition-colors duration-300">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted text-xs">Stores ready</p>
                      <p className="font-medium mt-0.5">{city.stores}</p>
                    </div>
                    <div>
                      <p className="text-muted text-xs">Go-live</p>
                      <p className="font-medium mt-0.5">{city.golive}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-border">
                    <span className="text-sm text-foreground">View city details</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 border border-border bg-white group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
            );
          })}
        </div>

        <AnimatedReveal className="mt-12">
          <CityAvailabilityCTA />
        </AnimatedReveal>
      </div>
    </section>
  );
}
