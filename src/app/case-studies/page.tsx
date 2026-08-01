import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { caseStudies } from "@/lib/site-content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "Case Studies | Retail Branding Agency",
  description: "Real retail branding campaigns with measurable outcomes — fashion, FMCG, electronics and more.",
};

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Case Studies"
          title="Featured Case Studies"
          description="Real campaigns. Real impact. Explore how we've helped brands across India drive footfall and sales."
          image={images.about}
          imageAlt="Retail branding case studies"
        />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <AnimatedReveal key={cs.title} delay={i * 0.1}>
                <article className="border border-border p-8 h-full">
                  <p className="text-brand text-xs uppercase tracking-wider mb-4">{cs.tag}</p>
                  <h3 className="font-serif text-2xl font-medium mb-6">{cs.title}</h3>
                  <ul className="space-y-2 text-sm text-muted mb-6">
                    <li>Duration: {cs.duration}</li>
                    <li>Stores: {cs.stores}</li>
                    <li>Reach: {cs.reach}</li>
                  </ul>
                  <p className="text-sm font-medium border-t border-border pt-4">Outcome: {cs.outcome}</p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </section>
        <LeadCTA />
      </main>
    </PageLayout>
  );
}
