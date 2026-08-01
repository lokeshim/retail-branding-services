"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { packages } from "@/lib/packages";
import { usePopup } from "@/context/PopupContext";

export function Pricing() {
  const { openContactPopup } = usePopup();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Packages"
          title="Branding packages for every store"
          description="Transparent pricing to get your retail brand started. All packages include a free consultation."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <AnimatedReveal key={pkg.id} delay={i * 0.1}>
              <div
                className={`relative flex flex-col h-full p-8 border ${
                  pkg.highlighted
                    ? "border-foreground bg-foreground text-white shadow-xl"
                    : "border-border bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase bg-white text-foreground px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-medium">{pkg.name}</h3>
                <div className="mt-2 font-serif text-3xl font-medium">{pkg.price}</div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    pkg.highlighted ? "text-white/80" : "text-muted"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-white" : "text-foreground"
                        }`}
                      />
                      <span className={pkg.highlighted ? "text-white/90" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openContactPopup}
                  className={`mt-8 w-full py-4 text-sm font-medium tracking-wide transition-colors ${
                    pkg.highlighted
                      ? "bg-white text-foreground hover:bg-white/90"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            Compare all services
            <ArrowUpRight size={14} />
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
