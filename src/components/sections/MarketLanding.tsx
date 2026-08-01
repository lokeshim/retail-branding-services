"use client";

import Image from "next/image";
import Link from "next/link";
import { usePopup } from "@/context/PopupContext";
import type { MarketPageContent } from "@/lib/market-pages";
import { getCityHref } from "@/lib/cities";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BgSection } from "@/components/ui/BgSection";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { images } from "@/lib/images";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function MarketCtaButton({ label }: { label: string }) {
  const { openContactPopup } = usePopup();
  return (
    <button
      onClick={openContactPopup}
      className="px-8 py-3.5 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
    >
      {label}
    </button>
  );
}

function FormatDiscussButton() {
  const { openContactPopup } = usePopup();
  return (
    <button
      onClick={openContactPopup}
      className="mt-6 text-sm text-brand hover:underline"
    >
      Discuss this format
    </button>
  );
}

function MarketFaqs({ faqs }: { faqs: MarketPageContent["faqs"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <AnimatedReveal key={faq.q} delay={i * 0.05}>
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-serif text-lg text-foreground">{faq.q}</span>
              <span className="text-brand text-xl font-light shrink-0">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <p className="px-6 pb-6 text-muted text-sm leading-relaxed">{faq.a}</p>
            )}
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}

export function MarketLanding({ content, heroImage }: { content: MarketPageContent; heroImage: string }) {
  return (
    <main>
      <PageHero
        label={content.hero.label}
        title={content.hero.title}
        description={content.hero.description}
        image={heroImage}
        imageAlt={content.hero.title}
      />

      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-medium">{stat.value}</div>
                <div className="text-white/70 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedReveal>
            <SectionHeading label="Overview" title={content.intro.title} />
            {content.intro.paragraphs.map((p) => (
              <p key={p} className="text-muted leading-relaxed mt-4">
                {p}
              </p>
            ))}
            <ul className="space-y-3 mt-8">
              {content.intro.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <MarketCtaButton label="Get free branding quote" />
              <Link
                href="/formats"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm hover:border-foreground transition-colors"
              >
                View formats <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src={images.store}
                alt={content.hero.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Coverage"
            title={content.cities.title}
            description={content.cities.description}
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {content.cities.items.map((city, i) =>
              city.slug ? (
                <AnimatedReveal key={city.name} delay={i * 0.03}>
                  <Link
                    href={getCityHref(city.slug)}
                    className="px-5 py-3 bg-white border border-border text-sm hover:border-brand hover:text-brand transition-colors"
                  >
                    {city.name}
                  </Link>
                </AnimatedReveal>
              ) : (
                <AnimatedReveal key={city.name} delay={i * 0.03}>
                  <span className="px-5 py-3 bg-white border border-border text-sm text-foreground">
                    {city.name}
                  </span>
                </AnimatedReveal>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Formats"
            title={content.formats.title}
            description={content.formats.description}
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {content.formats.items.map((format, i) => (
              <AnimatedReveal key={format.title} delay={i * 0.05}>
                <article className="border border-border p-8 h-full hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl font-medium mb-3">{format.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{format.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted mb-1">Best suited for</p>
                    <p className="text-sm text-foreground">{format.suited}</p>
                  </div>
                  <FormatDiscussButton />
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading label="Why" title={content.why.title} align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.why.items.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.06}>
                <div className="bg-white border border-border p-6 h-full">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <BgSection image={images.process} imageAlt={content.process.title} overlay="brand">
        <SectionHeading label="Process" title={content.process.title} align="center" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {content.process.items.map((step, i) => (
            <AnimatedReveal key={step.title} delay={i * 0.05}>
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 p-6 h-full shadow-sm">
                <span className="font-serif text-2xl text-brand/40">0{i + 1}</span>
                <h3 className="font-medium mt-2 mb-2 text-sm">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{step.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </BgSection>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading label="Case Studies" title={content.caseStudies.title} align="center" />
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {content.caseStudies.items.map((cs, i) => (
              <AnimatedReveal key={cs.title} delay={i * 0.1}>
                <article className="border border-border p-8 h-full">
                  <p className="text-brand text-xs uppercase tracking-wider mb-3">{cs.tag}</p>
                  <h3 className="font-serif text-2xl font-medium mb-4">{cs.title}</h3>
                  <p className="text-sm font-medium border-t border-border pt-4">{cs.outcome}</p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <BgSection image={images.cta} imageAlt="FAQ" overlay="brand">
        <SectionHeading label="FAQ" title="Common questions" align="center" light />
        <div className="mt-10">
          <MarketFaqs faqs={content.faqs} />
        </div>
      </BgSection>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.cta.title}</h2>
          <p className="text-muted mb-8">{content.cta.description}</p>
          <MarketCtaButton label={content.cta.buttonLabel} />
        </div>
      </section>

      <LeadCTA />
    </main>
  );
}
