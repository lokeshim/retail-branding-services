"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/lib/images";
import { SectionBackground } from "../ui/SectionBackground";

const testimonials = [
  {
    quote: "Their metro mall rollout was flawless — 45 stores branded in 3 weeks with photo proof on every location.",
    author: "Marketing Director",
    role: "National Apparel Brand",
    location: "Mumbai & Delhi NCR",
  },
  {
    quote: "We scaled into 120 tier-2 outlets without quality dropping. The distributor shop branding drove measurable shelf uplift.",
    author: "Brand Manager",
    role: "FMCG Consumer Brand",
    location: "South India tier cities",
  },
  {
    quote: "One desk handled creative, production and multi-city coordination. That alone saved us three vendor headaches.",
    author: "Retail Head",
    role: "Electronics Retail Chain",
    location: "Pan-India",
  },
];

function Card({ quote, author, role, location }: (typeof testimonials)[0]) {
  return (
    <blockquote className="h-full p-8 border border-white/30 bg-white shadow-sm flex flex-col">
      <p className="text-foreground leading-relaxed flex-1 text-sm">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 pt-4 border-t border-border text-sm">
        <div className="font-medium">{author}</div>
        <div className="text-muted text-xs mt-1">{role}</div>
        <div className="text-muted text-xs">{location}</div>
      </footer>
    </blockquote>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const maxIndex = testimonials.length - 1;

  const next = useCallback(() => setActive((p) => (p >= maxIndex ? 0 : p + 1)), [maxIndex]);
  const prev = useCallback(() => setActive((p) => (p <= 0 ? maxIndex : p - 1)), [maxIndex]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground src={images.testimonials} alt="Testimonials" overlay="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Testimonials" title="What brands say about us" align="center" light />
        <div className="flex items-center gap-4 max-w-3xl mx-auto">
          <button onClick={prev} className="hidden md:flex w-10 h-10 border border-white/40 text-white items-center justify-center hover:bg-white hover:text-foreground transition-colors shrink-0" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="flex-1 overflow-hidden">
            <motion.div animate={{ x: `-${active * 100}%` }} transition={{ duration: 0.4 }} className="flex">
              {testimonials.map((t) => (
                <div key={t.author} className="w-full shrink-0 px-2">
                  <Card {...t} />
                </div>
              ))}
            </motion.div>
          </div>
          <button onClick={next} className="hidden md:flex w-10 h-10 border border-white/40 text-white items-center justify-center hover:bg-white hover:text-foreground transition-colors shrink-0" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
