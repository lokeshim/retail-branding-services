"use client";

import { AnimatedReveal } from "../ui/AnimatedReveal";
import { BrandingLeadForm } from "../BrandingLeadForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { images } from "@/lib/images";
import { SectionBackground } from "../ui/SectionBackground";

export function LeadCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground src={images.cta} alt="Contact retail branding" overlay="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedReveal>
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase">Free Consultation</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mt-4 leading-tight">
              Get a branding plan in 24 hours
            </h2>
            <p className="text-white/85 mt-6 leading-relaxed">
              Share your name, email and phone — our branding desk responds with format recommendations,
              indicative costing and rollout timeline for your promotion campaign.
            </p>
            <ul className="mt-8 space-y-2 text-white/85 text-sm">
              {[
                "Metro & tier-city rollout planning",
                "Branding & in-store promotion formats",
                "Proof-of-execution reporting included",
              ].map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white/85 hover:text-white text-sm">
                <Phone size={16} /> +91 98765 43210
              </a>
              <a href="mailto:hello@retailbranding.co" className="flex items-center gap-3 text-white/85 hover:text-white text-sm">
                <Mail size={16} /> hello@retailbranding.co
              </a>
              <div className="flex items-center gap-3 text-white/85 text-sm">
                <MapPin size={16} /> Bengaluru, India
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <BrandingLeadForm />
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
