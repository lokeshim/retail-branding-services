import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { formats } from "@/lib/site-content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "Branding Formats | Retail Branding Agency",
  description: "Store facade, visual merchandising, in-store POP and full store makeover formats for retail branding campaigns.",
};

export default function FormatsPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Formats"
          title="Choose the canvas by the objective"
          description="Each format shows verified dimensions, visibility strengths, limitations, current availability and a genuine execution example."
          image={images.store}
          imageAlt="Retail branding formats"
        />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
            {formats.map((f, i) => (
              <AnimatedReveal key={f.id}>
                <article id={f.id} className="border border-border p-8 md:p-12 scroll-mt-28">
                  <span className="text-brand text-xs font-medium tracking-widest uppercase">Format 0{i + 1}</span>
                  <h2 className="font-serif text-3xl font-medium mt-3 mb-4">{f.title}</h2>
                  <p className="text-muted leading-relaxed max-w-3xl mb-6">{f.description}</p>
                  <div className="inline-block bg-surface px-4 py-2 text-sm">
                    <span className="text-muted">Best suited for: </span>
                    <span className="text-foreground">{f.suited}</span>
                  </div>
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
