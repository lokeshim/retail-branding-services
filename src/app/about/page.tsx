import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { Target, Eye, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aurelia Brand Studio",
  description:
    "Learn about Aurelia Brand Studio — Bangalore's trusted branding partner for airports, retail stores, parks, and corporate holdings.",
};

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every brand we build serves a clear business purpose — driving recognition, trust, and growth.",
  },
  {
    icon: Eye,
    title: "Vision-Led",
    description:
      "We see beyond the brief to craft brands that stand the test of time and market shifts.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success. We partner deeply with every client from strategy to launch.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "World-class design standards applied to every project, regardless of scale or industry.",
  },
];

const team = [
  { name: "Ananya Krishnan", role: "Founder & CEO", image: images.about },
  { name: "Rohit Desai", role: "Creative Director", image: images.process },
  { name: "Sneha Patel", role: "Brand Strategist", image: images.testimonials },
  { name: "Arjun Mehta", role: "Head of Operations", image: images.holdings },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="About Aurelia"
          title="Building brands that move businesses forward"
          description="Since 2014, we've helped airports, retail stores, parks, and holding companies across India build brands that customers remember and trust."
          image={images.about}
          imageAlt="Aurelia team at work"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedReveal>
                <SectionHeading
                  label="Our Story"
                  title="12 years of brand excellence"
                  description="Aurelia was founded with a simple belief — every business deserves a brand that truly represents its ambition. From a small studio in Bangalore, we've grown into one of India's most trusted branding agencies, serving clients across airports, retail, leisure, and corporate sectors."
                />
                <p className="text-muted leading-relaxed mt-6">
                  Today, our team of strategists, designers, and brand managers
                  work with 280+ clients nationwide, delivering brand promotion
                  solutions that create measurable business impact.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "280+", label: "Clients Served" },
                    { value: "12+", label: "Years Experience" },
                    { value: "40+", label: "Awards Won" },
                    { value: "4", label: "Industry Verticals" },
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
      </main>
    </PageLayout>
  );
}
