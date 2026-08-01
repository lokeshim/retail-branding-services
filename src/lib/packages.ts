export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹49,999",
    description: "Essential branding for new stores and small boutiques.",
    features: [
      "Logo & brand mark design",
      "Colour palette & typography",
      "Basic signage design",
      "Brand guidelines PDF",
      "2 revision rounds",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹1,49,999",
    description: "Complete store branding for growing retail businesses.",
    features: [
      "Everything in Starter",
      "Storefront & facade design",
      "In-store environmental graphics",
      "Packaging & shopping bag design",
      "POS & promotional templates",
      "4 revision rounds",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Multi-location rollouts and franchise brand systems.",
    features: [
      "Everything in Professional",
      "Multi-store rollout support",
      "Visual merchandising strategy",
      "Seasonal campaign design",
      "Dedicated account manager",
      "Unlimited revisions",
    ],
  },
];
