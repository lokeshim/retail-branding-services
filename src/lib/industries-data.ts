import {
  Shirt,
  UtensilsCrossed,
  Smartphone,
  ShoppingCart,
  Sparkles,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

export const industries: Industry[] = [
  {
    id: "fashion",
    icon: Shirt,
    title: "Fashion & Apparel",
    description:
      "Boutiques, clothing chains, and fashion retailers that need premium brand experiences from window to fitting room.",
    examples: ["Boutiques", "Ethnic wear", "Sportswear", "Luxury fashion"],
  },
  {
    id: "fnb",
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description:
      "Cafés, restaurants, bakeries, and QSR outlets where ambience and packaging shape customer perception.",
    examples: ["Cafés", "Restaurants", "Bakeries", "Cloud kitchens"],
  },
  {
    id: "electronics",
    icon: Smartphone,
    title: "Electronics & Gadgets",
    description:
      "Tech stores and gadget shops that need clean, modern branding to showcase products and build trust.",
    examples: ["Mobile stores", "Computer shops", "Appliance retail", "Gaming zones"],
  },
  {
    id: "supermarket",
    icon: ShoppingCart,
    title: "Supermarket & Grocery",
    description:
      "Supermarkets and grocery chains requiring consistent branding across aisles, signage, and packaging.",
    examples: ["Supermarkets", "Organic stores", "Convenience chains", "Hypermarkets"],
  },
  {
    id: "specialty",
    icon: Sparkles,
    title: "Specialty & Lifestyle",
    description:
      "Jewellery, cosmetics, home décor, and lifestyle stores where brand storytelling drives premium perception.",
    examples: ["Jewellery", "Cosmetics", "Home décor", "Gift shops"],
  },
  {
    id: "franchise",
    icon: Building2,
    title: "Franchise & Multi-Location",
    description:
      "Franchise brands scaling across cities with unified identity systems and location rollout support.",
    examples: ["Franchise outlets", "Chain stores", "Mall kiosks", "Pop-up stores"],
  },
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((i) => i.id === id);
}
