import type { City } from "@/lib/cities";
import { activeCities } from "@/lib/site-content";

export function getActiveCityMeta(slug: string) {
  return activeCities.find((c) => c.slug === slug);
}

export function getCityStats(city: City) {
  const active = getActiveCityMeta(city.slug);

  if (active) {
    return [
      { value: active.stores, label: "Stores ready" },
      { value: active.golive, label: "Avg. go-live" },
      { value: city.storesBranded, label: "Campaigns delivered" },
      { value: "24 hrs", label: "Planning response" },
    ];
  }

  return [
    { value: city.storesBranded, label: "Stores branded" },
    { value: "2x", label: "Avg. footfall uplift" },
    { value: "15+", label: "Retail categories" },
    { value: "98%", label: "Client satisfaction" },
  ];
}

export const cityBenefits = (city: City) => [
  `Verified store networks and on-ground teams across ${city.name}`,
  `Formats planned for ${city.areas.slice(0, 3).join(", ")} and surrounding catchments`,
  "Photo proof on every branded location post-installation",
  "One accountable desk for creative, production and rollout",
  `Indicative costing and go-live timeline for ${city.name} within 24 hours`,
  "Pan-India playbook with local market intelligence",
];
