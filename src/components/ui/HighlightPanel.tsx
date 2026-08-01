import Image from "next/image";
import { Check } from "lucide-react";
import { images } from "@/lib/images";

interface HighlightPanelProps {
  title: string;
  description: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function HighlightPanel({
  title,
  description,
  bullets = [],
  image = images.store,
  imageAlt = "Retail branding",
  children,
}: HighlightPanelProps) {
  return (
    <div className="relative overflow-hidden border border-white/10 p-8 md:p-12 lg:p-14 text-center">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/92 via-foreground/88 to-brand-dark/90" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-4">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
          {description}
        </p>

        {bullets.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90 mb-8">
            {bullets.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check size={16} className="text-brand-light shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </div>
  );
}
