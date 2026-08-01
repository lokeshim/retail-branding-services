"use client";

import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { images } from "@/lib/images";
import { SectionBackground } from "./ui/SectionBackground";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We analyse your store, competitors, and target customers in Bangalore to understand your brand opportunity.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Brand positioning and retail promotion roadmap tailored to your category and business goals.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Store identity, signage, interiors, packaging, and promotional materials crafted for maximum impact.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Rollout across your store(s) with ongoing brand support and seasonal campaign updates.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground
        src={images.store}
        alt="Retail store branding process"
        overlay="dark"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How we brand your retail store"
          description="A structured four-step approach refined across 120+ retail branding projects in Bangalore and across India."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedReveal key={step.number} delay={i * 0.15}>
              <div className="relative group bg-white border border-white/30 p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                <span className="font-serif text-5xl text-foreground/10 group-hover:text-foreground/20 transition-colors">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl font-medium mt-4 mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
