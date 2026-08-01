import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { industries } from "@/lib/industries-data";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "Industries | Retail Branding Agency",
  description:
    "Retail branding for fashion, F&B, electronics, supermarkets, specialty stores, and franchise chains across India.",
};

export default function IndustriesPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Industries"
          title="Retail categories we serve"
          description="Specialised branding expertise for every type of retail business — tailored strategies that resonate with your target customers."
          image={images.store}
          imageAlt="Retail industry categories"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Our Expertise"
              title="Branding built for your retail category"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((item, i) => (
                <AnimatedReveal key={item.id} delay={i * 0.08}>
                  <article
                    id={item.id}
                    className="border border-border p-8 md:p-10 h-full hover:shadow-lg transition-shadow scroll-mt-28"
                  >
                    <item.icon size={28} strokeWidth={1.5} className="mb-5" />
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs px-3 py-1.5 bg-surface text-muted border border-border"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
        <LeadCTA />
      </main>
    </PageLayout>
  );
}
