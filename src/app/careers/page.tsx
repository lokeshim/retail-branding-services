import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { CareersOpenings } from "@/components/CareersOpenings";
import { images } from "@/lib/images";
import { MapPin, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Aurelia Brand Studio",
  description:
    "Join Aurelia Brand Studio. Explore career opportunities in branding, design, strategy, and marketing in Bangalore.",
};

const perks = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with passionate strategists and designers on meaningful projects.",
  },
  {
    icon: MapPin,
    title: "Bangalore Office",
    description:
      "Modern workspace in Indiranagar with a creative, inspiring environment.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "We trust our team to deliver great work on a schedule that works.",
  },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Careers"
          title="Build brands. Build your career."
          description="Join a team that's shaping how airports, stores, parks, and holdings connect with their audiences across India."
          image={images.process}
          imageAlt="Team collaboration at Aurelia"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Why Join Us"
              title="Grow with Aurelia"
              description="We're always looking for talented people who are passionate about branding and want to make a real impact."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {perks.map((perk, i) => (
                <AnimatedReveal key={perk.title} delay={i * 0.1}>
                  <div className="border border-border p-8 h-full">
                    <perk.icon size={24} className="mb-4" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Open Positions"
              title="Current openings"
              description="Don't see a perfect fit? Send your resume to careers@aureliabrand.com — we're always interested in meeting great people."
            />
            <CareersOpenings />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
