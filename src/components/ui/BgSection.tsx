import Image from "next/image";

type BgOverlay = "dark" | "dark-heavy" | "light" | "brand";

interface BgSectionProps {
  id?: string;
  image: string;
  imageAlt: string;
  overlay?: BgOverlay;
  children: React.ReactNode;
  className?: string;
}

const overlayClasses: Record<BgOverlay, string> = {
  dark: "bg-black/65",
  "dark-heavy": "bg-black/78",
  light: "bg-white/90",
  brand: "bg-gradient-to-br from-foreground/92 via-foreground/88 to-brand-dark/90",
};

export function BgSection({
  id,
  image,
  imageAlt,
  overlay = "brand",
  children,
  className = "",
}: BgSectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
