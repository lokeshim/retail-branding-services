export const cityImageMeta = {
  bangalore: {
    src: "https://images.unsplash.com/photo-1685392348279-34fe7a2ea624?w=1200&q=80&auto=format&fit=crop",
    alt: "Bengaluru skyline at sunset",
  },
  mumbai: {
    src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop",
    alt: "Gateway of India, Mumbai",
  },
  delhi: {
    src: "https://images.unsplash.com/photo-1743136648410-a73d5c9dbaab?w=1200&q=80&auto=format&fit=crop",
    alt: "India Gate, New Delhi",
  },
  hyderabad: {
    src: "https://images.unsplash.com/photo-1750834115164-8c2658f18dd0?w=1200&q=80&auto=format&fit=crop",
    alt: "Charminar, Hyderabad",
  },
  kolkata: {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80&auto=format&fit=crop",
    alt: "Howrah Bridge, Kolkata",
  },
} as const;

export type CityImageSlug = keyof typeof cityImageMeta;

export function getCityImage(slug: string) {
  return cityImageMeta[slug as CityImageSlug] ?? null;
}
