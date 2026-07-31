import Image from "next/image";

type OverlayType = "dark" | "dark-heavy" | "light" | "light-subtle";

interface SectionBackgroundProps {
  src: string;
  alt: string;
  overlay?: OverlayType;
  priority?: boolean;
}

const overlayClasses: Record<OverlayType, string> = {
  dark: "bg-black/60",
  "dark-heavy": "bg-black/75",
  light: "bg-white/85",
  "light-subtle": "bg-white/70",
};

export function SectionBackground({
  src,
  alt,
  overlay = "dark",
  priority = false,
}: SectionBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
    </div>
  );
}
