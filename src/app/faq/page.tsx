import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BgSection } from "@/components/ui/BgSection";
import { images } from "@/lib/images";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "FAQ | Retail Branding Agency",
  description:
    "Frequently asked questions about retail branding services, process, timelines, pricing, and cities we serve.",
};

export default function FAQPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about our retail branding services, process, timelines, and pricing."
          image={images.cta}
          imageAlt="FAQ retail branding"
        />

        <BgSection image={images.store} imageAlt="FAQ background" overlay="brand">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Got Questions?"
              title="We're here to help"
              align="center"
              light
            />
            <FAQAccordion />
          </div>
        </BgSection>
        <LeadCTA />
      </main>
    </PageLayout>
  );
}
