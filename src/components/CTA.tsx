"use client";

import { AnimatedReveal } from "./ui/AnimatedReveal";
import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { images } from "@/lib/images";
import { SectionBackground } from "./ui/SectionBackground";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground
        src={images.cta}
        alt="Modern corporate building"
        overlay="dark"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedReveal className="text-center lg:text-left">
            <span className="text-white/90 text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Free Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mt-4 text-white drop-shadow-sm">
              Ready to brand
              <br />
              <span className="font-medium">your retail store?</span>
            </h2>
            <p className="text-white/90 mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Tell us about your store and we&apos;ll share how we can help you
              stand out in Bangalore — with a free 30-minute consultation.
            </p>

            <div className="mt-8 md:mt-10 space-y-4 w-full px-4 sm:px-0 max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <a
                href="mailto:hello@aureliabrand.com"
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors text-left"
              >
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-sm">hello@aureliabrand.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors text-left"
              >
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-4 text-white/90 text-left">
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Indiranagar, Bangalore 560038</span>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <ContactForm className="space-y-6 bg-white border border-white/30 p-8 md:p-10 shadow-2xl" />
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
