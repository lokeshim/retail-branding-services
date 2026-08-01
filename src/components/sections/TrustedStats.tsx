import { trustStats } from "@/lib/site-content";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function TrustedStats() {
  return (
    <section className="py-16 bg-section-dark-bg border-b border-section-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {trustStats.map((stat, i) => (
            <AnimatedReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-medium text-section-dark-text">
                  {stat.value}
                </div>
                <div className="text-section-dark-muted text-sm mt-2">
                  {stat.label}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
