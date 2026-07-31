import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";
import {
  Store,
  Palette,
  Megaphone,
  Layout,
  ShoppingBag,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail Branding in Bangalore | Aurelia Brand Studio",
  description:
    "Leading retail branding agency in Bangalore. Store identity, in-store promotion, storefront design, and visual merchandising for retail businesses. Get a free consultation.",
  keywords: [
    "retail branding bangalore",
    "retail branding agency bangalore",
    "store branding bangalore",
    "retail store design bangalore",
    "visual merchandising bangalore",
  ],
};

const services = [
  {
    icon: Store,
    title: "Store Identity Design",
    description:
      "Complete retail brand identity — logo, signage, colour palette, and visual language tailored for your store.",
  },
  {
    icon: Layout,
    title: "Storefront & Interior Branding",
    description:
      "Eye-catching storefront design and in-store environmental graphics that drive footfall and enhance shopping experience.",
  },
  {
    icon: ShoppingBag,
    title: "Packaging & Collateral",
    description:
      "Shopping bags, product labels, price tags, and promotional materials that reinforce your retail brand.",
  },
  {
    icon: Megaphone,
    title: "In-Store Promotion",
    description:
      "Seasonal campaigns, sale banners, POS displays, and promotional signage that boost sales at the point of purchase.",
  },
  {
    icon: Palette,
    title: "Visual Merchandising",
    description:
      "Strategic product display, window dressing, and shelf branding that maximises product visibility and appeal.",
  },
  {
    icon: TrendingUp,
    title: "Retail Brand Strategy",
    description:
      "Market positioning, competitor analysis, and brand roadmap for retail businesses entering or expanding in Bangalore.",
  },
];

const benefits = [
  "Increase footfall by up to 2x with compelling storefront branding",
  "Build customer loyalty through consistent in-store brand experience",
  "Stand out in Bangalore's competitive retail market",
  "Boost sales with strategic in-store promotional materials",
  "Create a memorable brand that customers recommend",
  "Scale your brand across multiple store locations seamlessly",
];

const faqs = [
  {
    q: "What is retail branding?",
    a: "Retail branding is the process of creating a unique identity for your store — including logo, signage, in-store graphics, packaging, and promotional materials — that attracts customers and builds loyalty.",
  },
  {
    q: "Why choose Aurelia for retail branding in Bangalore?",
    a: "We've branded 120+ retail stores across Bangalore and India. Our team understands the local market, consumer behaviour, and what makes retail brands succeed in competitive environments.",
  },
  {
    q: "How long does a retail branding project take?",
    a: "A typical retail branding project takes 4–8 weeks depending on scope — from single-store identity to multi-location rollouts with in-store promotion campaigns.",
  },
  {
    q: "Do you work with all types of retail stores?",
    a: "Yes — fashion, electronics, F&B, supermarkets, specialty stores, malls, and franchise outlets. We tailor our approach to your retail category and target audience.",
  },
];

const stats = [
  { value: "120+", label: "Retail Stores Branded" },
  { value: "2x", label: "Avg. Footfall Increase" },
  { value: "15+", label: "Retail Categories" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function RetailBrandingPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Retail Branding · Bangalore"
          title="Retail Branding Agency in Bangalore"
          description="Transform your store into a brand customers love. Expert retail identity, storefront design, in-store promotion, and visual merchandising for Bangalore businesses."
          image={images.store}
          imageAlt="Retail store branding in Bangalore"
        />

        {/* Stats */}
        <section className="py-16 bg-foreground text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl font-medium">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Retail Branding */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedReveal>
                <SectionHeading
                  label="Why Retail Branding"
                  title="Your store is your brand's biggest billboard"
                  description="In Bangalore's fast-growing retail market, customers have endless choices. Strong retail branding is what makes them walk into your store instead of the competition."
                />
                <ul className="space-y-4 mt-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-foreground mt-0.5 shrink-0"
                      />
                      <span className="text-muted text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image
                    src={images.store}
                    alt="Retail branding example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Our Services"
              title="Complete retail branding solutions"
              description="From store identity to in-store promotion — everything your retail business needs to succeed in Bangalore."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <AnimatedReveal key={service.title} delay={i * 0.1}>
                  <div className="bg-white border border-border p-8 h-full hover:shadow-lg transition-shadow">
                    <service.icon
                      size={24}
                      className="mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process with background */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <SectionBackground
            src={images.store}
            alt="Retail branding process"
            overlay="dark"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Our Process"
              title="How we brand your retail store"
              light
              align="center"
            />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Audit",
                  desc: "We analyse your store, competitors, and target customers in Bangalore.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Brand positioning and retail promotion roadmap tailored to your category.",
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Store identity, signage, interiors, and promotional materials.",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Rollout across your store(s) with ongoing brand support.",
                },
              ].map((item, i) => (
                <AnimatedReveal key={item.step} delay={i * 0.1}>
                  <div className="bg-white border border-white/30 p-6 h-full shadow-lg">
                    <span className="font-serif text-4xl text-foreground/10">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-xl mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="FAQ"
              title="Frequently asked questions"
              align="center"
            />
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <AnimatedReveal key={faq.q} delay={i * 0.1}>
                  <div className="border border-border p-6 md:p-8">
                    <h3 className="font-serif text-lg mb-3">{faq.q}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <SectionBackground
            src={images.cta}
            alt="Contact for retail branding"
            overlay="dark"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedReveal>
                <span className="text-white/90 text-xs tracking-[0.3em] uppercase">
                  Free Consultation
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-4 drop-shadow-sm">
                  Ready to brand your retail store?
                </h2>
                <p className="text-white/90 mt-6 leading-relaxed">
                  Get a free 30-minute consultation with our retail branding
                  experts. Tell us about your store and we&apos;ll share how we
                  can help you stand out in Bangalore.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-white border-b border-white/60 pb-1 hover:border-white transition-colors"
                >
                  Or visit our contact page
                  <ArrowRight size={14} />
                </Link>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <ContactForm
                  showBusinessType={false}
                  defaultBusinessType="store"
                />
              </AnimatedReveal>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
