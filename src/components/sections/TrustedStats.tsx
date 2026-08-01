import { trustStats } from "@/lib/site-content";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function TrustedStats() {
  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <AnimatedReveal>
          <p className="text-center text-muted text-xs tracking-[0.3em] uppercase mb-10">
            Trusted by brands across India
          </p>
        </AnimatedReveal> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustStats.map((stat, i) => (
            <AnimatedReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted text-sm mt-2">{stat.label}</div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
