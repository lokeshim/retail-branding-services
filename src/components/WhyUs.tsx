"use client";

import Image from "next/image";
import { AnimatedReveal } from "./ui/AnimatedReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Target, Users, BarChart3, Shield } from "lucide-react";
import { images } from "@/lib/images";

const reasons = [
  {
    icon: Target,
    title: "Industry Expertise",
    description:
      "Deep specialization in airport, retail, park, and holdings branding — we understand your sector's unique challenges.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Sector-specific strategists and designers assigned to every project for focused, expert delivery.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Brand campaigns backed by KPIs — footfall, recognition, engagement, and revenue impact tracking.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "12+ years serving enterprise clients across India with consistent quality and on-time delivery.",
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
              title="Your partner in brand promotion"
              description="We don't just create logos — we build complete brand promotion ecosystems that drive visibility, trust, and business growth across every touchpoint."
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
