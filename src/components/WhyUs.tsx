"use client";

import Image from "next/image";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Target, Users, BarChart3, Shield } from "lucide-react";
import { images } from "@/lib/images";

const reasons = [
  {
    icon: Target,
    title: "Retail Specialists",
    description:
      "Deep expertise in retail branding — fashion, F&B, electronics, supermarkets, and franchise outlets across Bangalore.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Retail strategists and designers assigned to every project for focused, expert delivery from audit to launch.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Campaigns backed by KPIs — footfall increase, sales uplift, brand recall, and customer retention tracking.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "120+ retail stores branded across India with 98% client satisfaction and consistent on-time delivery.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src={images.about}
              alt="Business team meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionHeading
              label="Why Aurelia"
              title="Your retail branding partner in Bangalore"
              description="We don't just design logos — we build complete retail brand experiences from storefront to checkout that drive footfall, loyalty, and sales."
            />

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <AnimatedReveal key={reason.title} delay={i * 0.1}>
                  <div>
                    <reason.icon
                      size={24}
                      className="text-foreground mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
