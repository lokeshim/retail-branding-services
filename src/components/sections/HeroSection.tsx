"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroSlides, heroStats } from "@/lib/site-content";
import { images } from "@/lib/images";
import { usePopup } from "@/context/PopupContext";

const slideImages = [images.store, images.hero, images.process];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const { openContactPopup } = usePopup();
  const slide = heroSlides[active];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slideImages[active]}
              alt={slide.title}
              fill
              priority={active === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-8 w-full flex-1 flex flex-col justify-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-white text-foreground text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              {slide.badge}
            </span>
            <span className="text-white/70 text-xs">{slide.subBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-white max-w-4xl">
            {slide.title}{" "}
            <span className="text-white">{slide.highlight}</span>
          </h1>

          <p className="mt-6 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={openContactPopup}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground text-sm font-medium hover:bg-white/90 transition-colors"
            >
              {slide.ctaPrimary}
              <ArrowUpRight size={16} />
            </button>
            <Link
              href="/formats"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm hover:bg-white/10 transition-colors"
            >
              {slide.ctaSecondary}
              <ArrowDown size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {heroStats.map((stat) => (
            <div
              key={stat.value}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 text-center md:text-left"
            >
              <div className="text-white font-medium text-sm sm:text-base">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <span className="text-white/80">
            Market <strong className="text-white">{slide.market}</strong> → Objective{" "}
            <strong className="text-white">{slide.objective}</strong>
          </span>
          <div className="flex flex-wrap gap-2">
            {slide.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-white/60 text-white text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 transition-all ${
                i === active ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
