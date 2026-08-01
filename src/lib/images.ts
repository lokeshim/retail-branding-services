export const images = {
  hero:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&auto=format&fit=crop",
  airport:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  store:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop",
  park:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
  holdings:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  process:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop",
  testimonials:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format&fit=crop",
  cta:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
} as const;

export const heroSlides = [
  {
    src: images.store,
    alt: "Retail store branding",
    label: "Store Identity",
  },
  {
    src: images.hero,
    alt: "Modern retail workspace",
    label: "Visual Merchandising",
  },
  {
    src: images.process,
    alt: "Retail branding team at work",
    label: "In-Store Promotion",
  },
] as const;
