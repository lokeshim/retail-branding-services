import { SectionBackground } from "./SectionBackground";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}

export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <SectionBackground src={image} alt={imageAlt} overlay="dark-heavy" priority />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
        <span className="inline-block text-white/90 text-xs font-medium tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 md:mb-6">
          {label}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.15] text-white drop-shadow-md max-w-4xl mx-auto md:mx-0">
          {title}
        </h1>
        {description && (
          <p className="mt-4 md:mt-6 text-white/90 text-base md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
