import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { images } from "@/lib/images";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Aurelia Brand Studio",
  description:
    "Get in touch with Aurelia Brand Studio for brand promotion services. Offices in Bangalore. Call +91 98765 43210.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aureliabrand.com",
    href: "mailto:hello@aureliabrand.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Indiranagar, Bangalore 560038",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 9:00 AM – 6:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Contact"
          title="Let's start your brand journey"
          description="Tell us about your project. Whether it's an airport, store, park, or holdings company — we're here to help."
          image={images.cta}
          imageAlt="Contact Aurelia Brand Studio"
        />

        <section className="py-16 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <AnimatedReveal className="text-center lg:text-left">
                <span className="text-muted text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  Get in Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-[1.15] mt-4">
                  We&apos;d love to hear from you
                </h2>
                <p className="text-muted mt-4 md:mt-6 text-base md:text-lg leading-relaxed">
                  Fill out the form and our team will get back to you within 24
                  hours. For urgent inquiries, call us directly.
                </p>

                <div className="mt-8 md:mt-10 space-y-5 w-full px-4 sm:px-0 max-w-md mx-auto lg:mx-0 lg:max-w-none">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 text-left"
                    >
                      <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs uppercase tracking-wider text-muted mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground text-sm hover:text-muted transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground text-sm">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.2}>
                <ContactForm />
              </AnimatedReveal>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
