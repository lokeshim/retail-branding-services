import Image from "next/image";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/lib/images";

const points = [
  "Exterior signage creates brand recall at street level",
  "In-store branding engages captive shopper audiences",
  "Wide geographic coverage across retail corridors",
  "Cost-effective with high reach and conversion uplift",
];

const miniStats = [
  { value: "High", label: "Awareness" },
  { value: "Pan India", label: "Presence" },
  { value: "Measurable", label: "Impact" },
];

export function HighImpact() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedReveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image src={images.store} alt="Retail branding impact" fill className="object-cover" sizes="50vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-white p-6">
                <p className="text-xs uppercase tracking-wider text-white/70">Concept Direction</p>
                <p className="font-serif text-xl mt-1">Immersive retail. Measurable discipline.</p>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <SectionHeading
              label="Concept Direction"
              title="High Impact. Daily Visibility."
              description="Retail branding is one of the most powerful in-store media solutions that puts your brand in front of thousands of shoppers every day."
            />
            <ul className="space-y-3 mt-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="text-brand font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4 mt-10">
              {miniStats.map((s) => (
                <div key={s.label} className="border border-border bg-white p-4 text-center">
                  <div className="font-serif text-xl font-medium">{s.value}</div>
                  <div className="text-muted text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
