"use client";

import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { images } from "@/lib/images";
import { SectionBackground } from "./ui/SectionBackground";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "We study your market, audience, and competitive landscape to build a data-driven brand strategy.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Brand positioning, messaging, and promotion roadmap tailored to your business vertical.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Visual identity, promotional materials, and environmental branding crafted for maximum impact.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Rollout across all touchpoints — from airport terminals to retail floors to corporate offices.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground
        src={images.process}
        alt="Team collaboration in office"
        overlay="dark"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How we promote your brand"
          description="A structured four-step approach refined across hundreds of projects in airports, stores, parks, and holdings."
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
