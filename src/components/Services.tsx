"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { images } from "@/lib/images";
import { services } from "@/lib/services-data";

const serviceImages: Record<string, string> = {
  "store-facade": images.store,
  "mall-highstreet": images.cta,
  "in-store-promotion": images.process,
  "shelf-aisle": images.hero,
  "visual-merchandising": images.about,
  "pan-india-rollout": images.holdings,
};

function ServiceSlide({
  type,
  title,
  description,
  icon: Icon,
  image,
  id,
}: (typeof services)[0] & { image: string }) {
  return (
    <article
      id={id}
      className="group h-full bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow duration-500 scroll-mt-28 flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={type}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
        <div className="absolute top-4 left-4 w-11 h-11 bg-white flex items-center justify-center shadow-sm">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/85 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
            {type}
          </p>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted leading-relaxed text-sm flex-1">{description}</p>
        <div className="mt-6 w-0 group-hover:w-12 h-0.5 bg-foreground transition-all duration-500" />
      </div>
    </article>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, services.length - perView);

  const updateSizes = useCallback(() => {
    const width = window.innerWidth;
    const count = width < 768 ? 1 : width < 1024 ? 2 : 3;
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
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const arrowClass =
    "w-10 h-10 shrink-0 border border-border bg-white flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors";

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Types of Retail Branding"
          title="Complete retail branding solutions"
          description="Every format is built for a specific retail objective — from facade recall to shelf conversion and pan-India rollout."
          align="center"
        />

        <div className="flex items-stretch gap-4 md:gap-5">
          <button
            onClick={prev}
            className={`${arrowClass} hidden md:flex self-center`}
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>

          <div ref={viewportRef} className="overflow-hidden flex-1 min-w-0">
            <motion.div
              className="flex"
              animate={{ x: slideWidth > 0 ? -active * slideWidth : 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {services.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-0 md:px-3"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <ServiceSlide
                    {...item}
                    image={serviceImages[item.id] ?? images.store}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={next}
            className={`${arrowClass} hidden md:flex self-center`}
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex md:hidden items-center justify-between gap-4 mt-6">
          <button onClick={prev} className={arrowClass} aria-label="Previous service">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center justify-center gap-2 flex-1">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === active ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className={arrowClass} aria-label="Next service">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-300 ${
                i === active ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1"
          >
            View all services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
