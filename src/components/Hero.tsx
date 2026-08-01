"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/images";

export function Hero() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[active].src}
              alt={heroSlides[active].alt}
              fill
              priority={active === 0}
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
          <span className="inline-block text-white/90 text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8">
            Retail Branding · Store Identity · Visual Merchandising
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-md">
            Transform your store into
            <br />
            <span className="font-medium">a brand customers love</span>
          </h1>

          <p className="mt-6 md:mt-8 text-white/90 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mx-auto md:mx-0">
            Expert retail identity, storefront design, in-store promotion, and
            visual merchandising for Bangalore businesses — helping stores drive
            footfall, build loyalty, and stand out in a competitive market.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-medium tracking-wide hover:bg-white/90 transition-colors duration-300"
            >
              Get Free Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-sm tracking-wide hover:bg-white hover:text-foreground transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {[
            { value: "120+", label: "Retail Stores Branded" },
            { value: "2x", label: "Avg. Footfall Increase" },
            { value: "15+", label: "Retail Categories" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-black/40 backdrop-blur-md border border-white/30 p-4 sm:p-6 text-center md:text-left"
            >
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium">
                {stat.value}
              </div>
              <div className="mt-1 text-white/85 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 transition-all duration-300 ${
              i === active ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
