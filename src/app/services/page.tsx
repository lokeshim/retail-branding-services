import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { services } from "@/lib/services-data";
import { CheckCircle } from "lucide-react";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "Services | Retail Branding Agency",
  description:
    "Complete retail branding services — store identity, storefront design, packaging, in-store promotion, visual merchandising, and brand strategy.",
};

const serviceImages: Record<string, string> = {
  "store-identity": images.store,
  storefront: images.hero,
  packaging: images.about,
  "in-store-promotion": images.process,
  "visual-merchandising": images.cta,
  "brand-strategy": images.holdings,
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Our Services"
          title="Retail branding services"
          description="End-to-end branding solutions for retail stores — from identity design to in-store promotion and multi-location rollouts."
          image={images.store}
          imageAlt="Retail branding services"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
            {services.map((service, i) => (
              <AnimatedReveal key={service.id}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-28 ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <span className="text-muted text-xs tracking-[0.3em] uppercase">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-3 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle size={16} className="text-foreground shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden border border-border ${
                      i % 2 === 1 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <Image
                      src={serviceImages[service.id] ?? images.store}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </section>
        <LeadCTA />
      </main>
    </PageLayout>
  );
}
