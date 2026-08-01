import { whyChoose, costItems, storePlanning, industries, executionSteps, caseStudies, mediaComparison, nationalFaqs, blogInsights } from "@/lib/site-content";
import Image from "next/image";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { BgSection } from "../ui/BgSection";
import { PricingCTA } from "./HighlightCTAs";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowUpRight, Target, Users, MapPin, Layers, Calendar } from "lucide-react";

const planningIcons = [Target, Users, MapPin, Layers, Calendar];

export function WhyChoose() {
  return (
    <BgSection
      id="why-us"
      image={images.about}
      imageAlt="Why choose retail branding"
      overlay="brand"
    >
      <SectionHeading
        label="Why Us"
        title="Why Brands Choose Retail Branding"
        align="center"
        light
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {whyChoose.map((item, i) => (
          <AnimatedReveal key={item.title} delay={i * 0.05}>
            <div className="bg-white/95 backdrop-blur-sm border border-white/20 p-6 h-full shadow-sm">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
      <AnimatedReveal delay={0.2}>
        <div className="relative aspect-[21/9] max-h-72 overflow-hidden border border-white/25 shadow-xl">
          <Image
            src={images.store}
            alt="Retail branding in-store experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
                In-store impact
              </p>
              <p className="font-serif text-2xl md:text-3xl text-white max-w-md">
                Immersive retail. Measurable results.
              </p>
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </BgSection>
  );
}

export function CostOverview() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Pricing" title="Indicative Cost Overview" description="Transparent pricing. No hidden charges." align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {costItems.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.06}>
              <div className="border border-border p-6 h-full">
                <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal>
          <PricingCTA />
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function StorePlanning() {
  return (
    <BgSection
      id="planning"
      image={images.park}
      imageAlt="Store planning and retail strategy"
      overlay="brand"
    >
      <SectionHeading
        label="Planning"
        title="How Store Planning Works"
        description="A structured approach from brand objective to rollout timeline — so every store placement is intentional."
        align="center"
        light
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-white/25" aria-hidden />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {storePlanning.map((step, i) => {
            const Icon = planningIcons[i] ?? Target;
            return (
              <AnimatedReveal key={step.title} delay={i * 0.06}>
                <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 p-6 h-full shadow-sm group hover:border-brand-light/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <span className="font-serif text-2xl text-brand/40 leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-medium text-sm text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{step.description}</p>
                  {i < storePlanning.length - 1 && (
                    <span className="lg:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-lg">
                      ↓
                    </span>
                  )}
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>

      <AnimatedReveal delay={0.2} className="mt-12">
        <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-6">
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Smart store planning drives more footfall, more visibility and better results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 text-sm text-white border-b border-white/60 pb-1 hover:border-white transition-colors"
          >
            Talk to our planning desk <ArrowUpRight size={14} />
          </Link>
        </div>
      </AnimatedReveal>
    </BgSection>
  );
}

export function WhoShouldUse() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Industries" title="Who Should Use Retail Branding?" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.06}>
              <div className="border border-border p-8 hover:border-brand/30 transition-colors">
                <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-10">
          From local retailers to national brands — retail branding works for every industry.
        </p>
        <div className="text-center mt-6">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            View all industries <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ExecutionProcess() {
  return (
    <BgSection
      id="process"
      image={images.process}
      imageAlt="Campaign planning and execution"
      overlay="brand"
    >
      <SectionHeading
        label="Process"
        title="Campaign Planning and Execution Process"
        description="Our proven 8-step process ensures seamless execution and measurable results."
        align="center"
        light
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {executionSteps.map((step, i) => (
          <AnimatedReveal key={step.title} delay={i * 0.05}>
            <div className="bg-white/95 backdrop-blur-sm border border-white/20 p-6 h-full shadow-sm">
              <span className="font-serif text-3xl text-brand/30">{step.step}</span>
              <h3 className="font-medium mt-2 mb-2 text-sm text-foreground">{step.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{step.description}</p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </BgSection>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Case Studies" title="Featured Case Studies" description="Real campaigns. Real impact." align="center" />
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <AnimatedReveal key={cs.title} delay={i * 0.1}>
              <article className="border border-border p-8 h-full hover:shadow-lg transition-shadow">
                <p className="text-brand text-xs font-medium uppercase tracking-wider mb-4">{cs.tag}</p>
                <h3 className="font-serif text-2xl font-medium mb-6">{cs.title}</h3>
                <ul className="space-y-2 text-sm text-muted mb-6">
                  <li>Duration: {cs.duration}</li>
                  <li>Stores Deployed: {cs.stores}</li>
                  <li>Reach: {cs.reach}</li>
                </ul>
                <p className="text-sm font-medium text-foreground border-t border-border pt-4">
                  Outcome: {cs.outcome}
                </p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            View all case studies <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AgencyIntro() {
  return (
    <BgSection
      image={images.holdings}
      imageAlt="IM Solutions retail branding agency"
      overlay="dark-heavy"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Operated by</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-2">
          IM Solutions
        </h2>
        <p className="text-white/75 text-sm mb-12">
          Full-stack branding agency · Bengaluru · Since 2013
        </p>
        <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
          Why retailbranding.co
        </p>
        <h3 className="font-serif text-3xl md:text-4xl font-medium text-white max-w-3xl mx-auto mb-6">
          Specialist depth. Agency-wide capability.
        </h3>
        <p className="text-white/75 max-w-2xl mx-auto text-sm leading-relaxed">
          One team connects store planning, creative adaptation, production, multi-city coordination
          and campaign reporting — so strategy does not dissolve between vendors.
        </p>
      </div>
    </BgSection>
  );
}

export function MediaComparison() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Comparison" title="Retail Branding Compared with Other Media" description="Retail branding offers immersive visibility with pan-India coverage at highly competitive costs." align="center" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border bg-white">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-4 font-medium">Media</th>
                <th className="p-4 font-medium">Reach</th>
                <th className="p-4 font-medium">Cost</th>
                <th className="p-4 font-medium">Recall</th>
                <th className="p-4 font-medium">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {mediaComparison.map((row) => (
                <tr key={row.media} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium">{row.media}</td>
                  <td className="p-4 text-center text-muted">{row.reach}</td>
                  <td className="p-4 text-center text-muted">{row.cost}</td>
                  <td className="p-4 text-center text-muted">{row.recall}</td>
                  <td className="p-4 text-center text-muted">{row.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function BlogInsights() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Blog" title="Insights & perspectives." description="Explore deep dives on retail branding, store audits, and designing high-recall in-store environments." align="center" />
        <div className="grid md:grid-cols-3 gap-8">
          {blogInsights.map((post, i) => (
            <AnimatedReveal key={post.title} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block border border-border p-8 h-full hover:shadow-lg transition-shadow">
                <p className="text-brand text-xs font-medium tracking-wider mb-3">{post.category}</p>
                <h3 className="font-serif text-xl font-medium group-hover:text-brand transition-colors mb-3">{post.title}</h3>
                <p className="text-muted text-xs mb-4">{post.date} · {post.readTime}</p>
                <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-6 text-sm text-brand">
                  Read full article <ArrowUpRight size={14} />
                </span>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            View all articles <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NationalFAQ() {
  return (
    <BgSection
      id="faq"
      image={images.cta}
      imageAlt="Retail branding FAQ"
      overlay="brand"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="FAQ" title="National FAQs" align="center" light />
        <div className="space-y-4">
          {nationalFaqs.map((faq, i) => (
            <AnimatedReveal key={faq.q} delay={i * 0.05}>
              <details
                className="bg-white/95 backdrop-blur-sm border border-white/20 group shadow-sm"
                open={i === 0}
              >
                <summary className="p-6 font-serif text-lg text-foreground cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-brand text-xl font-light group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-muted text-sm leading-relaxed">{faq.a}</p>
              </details>
            </AnimatedReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-sm text-white border-b border-white/60 pb-1 hover:border-white transition-colors"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </BgSection>
  );
}
