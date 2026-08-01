import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BgSection } from "@/components/ui/BgSection";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FormatsSection } from "@/components/sections/FormatsSection";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import {
  StorePlanning,
  ExecutionProcess,
  WhyChoose,
} from "@/components/sections/MoreSections";
import { images } from "@/lib/images";
import { services } from "@/lib/services-data";
import { getCityBySlug, getAllCitySlugs, type City } from "@/lib/cities";
import { cityBenefits, getActiveCityMeta, getCityStats } from "@/lib/city-landing";
import { CheckCircle, MapPin, ArrowUpRight } from "lucide-react";

interface PageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: "City Not Found" };

  const active = getActiveCityMeta(city.slug);

  return {
    title: `Retail Branding in ${city.name} | Retail Branding Agency`,
    description: active
      ? `Retail branding in ${city.name} — ${active.stores}, go-live ${active.golive}. Store facade, VM, POP and pan-store rollouts with photo proof.`
      : `Leading retail branding agency in ${city.name}. Store identity, signage, visual merchandising and in-store promotion across ${city.state}.`,
    keywords: [
      `retail branding ${city.name.toLowerCase()}`,
      `retail branding agency ${city.name.toLowerCase()}`,
      `store branding ${city.name.toLowerCase()}`,
      `in-store branding ${city.name.toLowerCase()}`,
    ],
  };
}

function CityAvailability({ city }: { city: City }) {
  const active = getActiveCityMeta(city.slug);
  if (!active) return null;

  return (
    <section className="py-16 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Active market</p>
            <h2 className="font-serif text-3xl font-medium">{active.name}</h2>
            <p className="text-white/80 text-sm mt-2">{active.region}</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-serif text-2xl">{active.stores}</p>
              <p className="text-white/70 text-xs mt-1">Stores ready</p>
            </div>
            <div>
              <p className="font-serif text-2xl">{active.golive}</p>
              <p className="text-white/70 text-xs mt-1">Avg. go-live</p>
            </div>
          </div>
          <div className="md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Book your {city.name} slot <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function CityLandingPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const stats = getCityStats(city);

  return (
    <PageLayout>
      <main>
        <PageHero
          label={`Retail Branding · ${city.name}`}
          title={`Retail branding in ${city.name}, planned with proof`}
          description={`${city.tagline}. Plan, price and execute store branding across ${city.name} with verified networks, clear timelines and photo proof on every location.`}
          image={images.store}
          imageAlt={`Retail branding in ${city.name}`}
        />

        <section className="py-16 bg-foreground text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-medium">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityAvailability city={city} />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedReveal>
                <SectionHeading
                  label={`Why ${city.name}`}
                  title="Your store network deserves operator-aware branding"
                  description={city.description}
                />
                <ul className="space-y-4 mt-8">
                  {cityBenefits(city).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand mt-0.5 shrink-0" />
                      <span className="text-muted text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden border border-border shadow-lg">
                  <Image
                    src={images.store}
                    alt={`Retail branding in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Areas We Serve"
              title={`Retail branding across ${city.name}`}
              description={`High-traffic retail corridors and neighbourhood catchments in ${city.state}.`}
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {city.areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-sm text-foreground"
                >
                  <MapPin size={14} className="text-brand" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Services"
              title={`Retail branding services in ${city.name}`}
              description="End-to-end formats — from facade signage to full store makeovers and multi-outlet rollouts."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimatedReveal key={service.id} delay={i * 0.06}>
                  <div className="border border-border p-8 h-full hover:border-brand/30 hover:shadow-md transition-all">
                    <service.icon size={24} className="mb-4 text-brand" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
                View all services <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <FormatsSection />
        <StorePlanning />
        <ExecutionProcess />
        <WhyChoose />
        <TestimonialsSection />

        <BgSection image={images.cta} imageAlt={`FAQ retail branding ${city.name}`} overlay="brand">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="FAQ"
              title={`Retail branding in ${city.name} — FAQs`}
              description={`Common questions from brands planning rollouts in ${city.name} and ${city.state}.`}
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
