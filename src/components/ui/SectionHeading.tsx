import { AnimatedReveal } from "./AnimatedReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const alignClass = isCenter
    ? "text-center mx-auto"
    : "text-center md:text-left mx-auto md:mx-0";
  const labelClass = light ? "text-white/90" : "text-foreground/70";
  const titleClass = light
    ? "text-white drop-shadow-sm"
    : "text-foreground";
  const descClass = light ? "text-white/90" : "text-foreground/70";
  const lineClass = light ? "bg-white/60" : "bg-foreground";

  return (
    <AnimatedReveal className={`w-full max-w-3xl mb-12 md:mb-20 ${alignClass}`}>
      <span
        className={`inline-block text-xs font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 ${labelClass}`}
      >
        {label}
      </span>
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : "mx-auto md:mx-0"
          } ${descClass}`}
        >
          {description}
        </p>
      )}
      <div
        className={`h-px w-20 md:w-24 mt-6 md:mt-8 ${
          isCenter ? "mx-auto" : "mx-auto md:mx-0"
        } ${lineClass}`}
      />
    </AnimatedReveal>
  );
}
