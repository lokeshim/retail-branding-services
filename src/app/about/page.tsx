import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { Target, Eye, Heart, Award } from "lucide-react";
import { LeadCTA } from "@/components/sections/LeadCTA";

export const metadata: Metadata = {
  title: "About Us | Retail Branding Agency — IM Solutions",
  description:
    "Learn about Retail Branding Agency — India's trusted retail branding desk. 500+ campaigns across metros and tier cities since 2013.",
};

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every retail brand we build serves a clear business purpose — driving footfall, loyalty, and sales growth.",
  },
  {
    icon: Eye,
    title: "Vision-Led",
    description:
      "We see beyond the brief to craft store identities that stand out in Bangalore's competitive retail market.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your store's success is our success. We partner deeply from brand audit to launch and beyond.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "World-class design standards applied to every project — from single boutiques to multi-location rollouts.",
  },
];

const team = [
  { name: "Ananya Krishnan", role: "Founder & CEO", image: images.about },
  { name: "Sneha Patel", role: "Retail Design Lead", image: images.process },
  { name: "Meera Kapoor", role: "Brand Strategist", image: images.testimonials },
  { name: "Rohit Desai", role: "Creative Director", image: images.store },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="About Us"
          title="India's retail branding specialists"
          description="Since 2013, we've helped brands across India plan, execute and verify store branding — from metro malls to tier-2 neighbourhood retail."
          image={images.about}
          imageAlt="Retail branding agency team"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedReveal>
                <SectionHeading
                  label="Our Story"
                  title="12+ years of retail brand excellence"
                  description="Retail Branding Agency was built with a simple belief — every store deserves branding planned with proof. From Bengaluru, we've grown into a pan-India desk for metro and tier-city rollouts."
                />
                <p className="text-muted leading-relaxed mt-6">
                  Today, our team of retail strategists, designers, and on-ground coordinators work with fashion chains, FMCG brands, electronics retailers, and franchise networks — delivering campaigns with photo proof on every location.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Campaigns Delivered" },
                    { value: "50+", label: "Cities Covered" },
                    { value: "100M+", label: "Monthly Impressions" },
                    { value: "12+", label: "Years Experience" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface border border-border p-6 text-center"
                    >
                      <div className="font-serif text-3xl text-foreground font-medium">
                        {stat.value}
                      </div>
                      <div className="text-muted text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Our Values"
              title="What drives us every day"
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <AnimatedReveal key={value.title} delay={i * 0.1}>
                  <div className="bg-white border border-border p-8 h-full">
                    <value.icon size={24} className="mb-4" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Leadership"
              title="Meet our team"
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <AnimatedReveal key={member.name} delay={i * 0.1}>
                  <div className="group">
                    <div className="relative aspect-[3/4] overflow-hidden border border-border mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground">{member.name}</h3>
                    <p className="text-muted text-sm mt-1">{member.role}</p>
                  </div>
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
