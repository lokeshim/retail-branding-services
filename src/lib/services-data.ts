import {
  Store,
  Building2,
  Megaphone,
  ShoppingCart,
  Palette,
  MapPinned,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  type: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "store-facade",
    icon: Store,
    type: "Store Facade Branding",
    title: "Street-level visibility that pulls footfall",
    description:
      "Exterior signage, facade graphics and storefront branding built for high-traffic retail corridors and daily shopper recall.",
    features: ["Facade signage", "Window branding", "Exterior graphics", "Night visibility"],
  },
  {
    id: "mall-highstreet",
    icon: Building2,
    type: "Mall & High-Street Branding",
    title: "Premium presence in malls and high streets",
    description:
      "Branding formats tailored for mall atriums, anchor stores and high-street frontages where competition for attention is highest.",
    features: ["Mall rollouts", "High-street facades", "Atrium branding", "Flagship zones"],
  },
  {
    id: "in-store-promotion",
    icon: Megaphone,
    type: "In-Store Promotion Branding",
    title: "Campaigns that convert at the shelf",
    description:
      "Offer-led signage, seasonal campaigns and promotional branding placed where shoppers are closest to purchase.",
    features: ["Sale campaigns", "Festive branding", "Offer signage", "Launch promotions"],
  },
  {
    id: "shelf-aisle",
    icon: ShoppingCart,
    type: "Shelf & Aisle Branding",
    title: "Shelf visibility across retail networks",
    description:
      "Aisle branding, shelf talkers and category signage that keeps your brand visible through the full in-store journey.",
    features: ["Shelf talkers", "Aisle branding", "Category blocks", "End-cap displays"],
  },
  {
    id: "visual-merchandising",
    icon: Palette,
    type: "Visual Merchandising Branding",
    title: "Displays that guide attention and intent",
    description:
      "Window dressing, product staging and VM-led branding that turns browsing into buying across multi-store formats.",
    features: ["Window displays", "Product staging", "Fixture branding", "Display zones"],
  },
  {
    id: "pan-india-rollout",
    icon: MapPinned,
    type: "Pan-India Rollout Branding",
    title: "One team from metro malls to tier-city stores",
    description:
      "Multi-city retail branding with verified store networks, consistent execution and photo proof on every location.",
    features: ["Metro rollouts", "Tier-city scale", "On-ground teams", "Photo proof"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
