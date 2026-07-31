"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { images } from "@/lib/images";
import { SectionBackground } from "./ui/SectionBackground";

const testimonials = [
  {
    quote:
      "Aurelia transformed our airport lounge into a premium branded experience. Passenger satisfaction scores increased by 35% within the first quarter.",
    author: "Vikram Singh",
    role: "Director, SkyPort International",
  },
  {
    quote:
      "Their retail store branding strategy helped us achieve 2x footfall across our flagship locations. Professional, strategic, and results-driven.",
    author: "Meera Kapoor",
    role: "CEO, Metro Retail Group",
  },
  {
    quote:
      "From park signage to corporate holdings identity — Aurelia managed our entire brand portfolio with exceptional consistency and creativity.",
    author: "Rajesh Nair",
    role: "MD, Apex Holdings Ltd.",
  },
  {
    quote:
      "The park branding project exceeded our expectations. Visitor engagement rose significantly and our seasonal campaigns feel cohesive and premium.",
    author: "Sneha Iyer",
    role: "Marketing Head, Green Valley Parks",
  },
  {
    quote:
      "Aurelia understood our holdings structure and delivered a brand system that works across all subsidiaries. Truly professional.",
    author: "Arjun Mehta",
    role: "CEO, Pinnacle Corp.",
  },
  {
    quote:
      "Our storefront rebranding was a game-changer. Footfall doubled within three months and customer feedback has been overwhelmingly positive.",
    author: "Priya Sharma",
    role: "Founder, Urban Mart Stores",
  },
];

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <blockquote className="h-full p-6 sm:p-8 md:p-10 border border-white/50 bg-white flex flex-col shadow-sm">
      <span className="font-serif text-4xl sm:text-5xl text-foreground/10 leading-none">
        &ldquo;
      </span>
      <p className="text-foreground leading-relaxed mt-3 sm:mt-4 flex-1 text-sm">
        {quote}
      </p>
      <footer className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
        <cite className="not-italic">
          <div className="font-medium text-sm">{author}</div>
          <div className="text-muted text-xs mt-1">{role}</div>
        </cite>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const updateSizes = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 1 : 3;
    setPerView(count);

    if (viewportRef.current) {
      setSlideWidth(viewportRef.current.offsetWidth / count);
    }
  }, []);

  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [updateSizes]);

  useEffect(() => {
    const observer = new ResizeObserver(updateSizes);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [updateSizes]);

  useEffect(() => {
    setActive((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActive((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const arrowClass =
    "w-10 h-10 shrink-0 border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-colors";

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <SectionBackground
        src={images.testimonials}
        alt="Business team discussion"
        overlay="dark"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Stories"
          title="What our partners say"
          align="center"
          light
        />

        <div className="flex items-stretch md:gap-5">
          {/* Desktop left arrow */}
          <button
            onClick={prev}
            className={`${arrowClass} hidden md:flex self-center`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <div ref={viewportRef} className="overflow-hidden flex-1 min-w-0">
            <motion.div
              className="flex"
              animate={{ x: slideWidth > 0 ? -active * slideWidth : 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.author}
                  className="shrink-0 px-0 md:px-3"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <TestimonialCard {...item} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop right arrow */}
          <button
            onClick={next}
            className={`${arrowClass} hidden md:flex self-center`}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile navigation — below card */}
        <div className="flex md:hidden items-center justify-between gap-4 mt-6">
          <button
            onClick={prev}
            className={arrowClass}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center justify-center gap-2 flex-1">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className={arrowClass}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-300 ${
                i === active
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
