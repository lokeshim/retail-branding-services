import {
  Store,
  Layout,
  ShoppingBag,
  Megaphone,
  Palette,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "store-identity",
    icon: Store,
    title: "Store Identity Design",
    description:
      "Complete retail brand identity — logo, signage, colour palette, and visual language tailored for your store.",
    features: ["Logo & brand mark", "Colour palette", "Typography system", "Brand guidelines"],
  },
  {
    id: "storefront",
    icon: Layout,
    title: "Storefront & Interior Branding",
    description:
      "Eye-catching storefront design and in-store environmental graphics that drive footfall and enhance shopping experience.",
    features: ["Facade design", "Interior graphics", "Wayfinding signage", "Lighting guidance"],
  },
  {
    id: "packaging",
    icon: ShoppingBag,
    title: "Packaging & Collateral",
    description:
      "Shopping bags, product labels, price tags, and promotional materials that reinforce your retail brand.",
    features: ["Shopping bags", "Product labels", "Price tags", "Business cards"],
  },
  {
    id: "in-store-promotion",
    icon: Megaphone,
    title: "In-Store Promotion",
    description:
      "Seasonal campaigns, sale banners, POS displays, and promotional signage that boost sales at the point of purchase.",
    features: ["Sale banners", "POS displays", "Seasonal campaigns", "Digital screens"],
  },
  {
    id: "visual-merchandising",
    icon: Palette,
    title: "Visual Merchandising",
    description:
      "Strategic product display, window dressing, and shelf branding that maximises product visibility and appeal.",
    features: ["Window displays", "Shelf branding", "Product staging", "Display fixtures"],
  },
  {
    id: "brand-strategy",
    icon: TrendingUp,
    title: "Retail Brand Strategy",
    description:
      "Market positioning, competitor analysis, and brand roadmap for retail businesses entering or expanding.",
    features: ["Market research", "Competitor analysis", "Brand positioning", "Growth roadmap"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
