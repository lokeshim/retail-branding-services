export interface City {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  areas: string[];
  storesBranded: string;
  description: string;
}

export const cities: City[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    tagline: "India's retail innovation hub",
    areas: ["Indiranagar", "Koramangala", "MG Road", "Whitefield", "Jayanagar"],
    storesBranded: "45+",
    description:
      "Bangalore's fast-growing retail market demands brands that stand out. We help stores across malls, high streets, and neighbourhoods build identities that drive footfall.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "Where retail meets ambition",
    areas: ["Bandra", "Andheri", "Lower Parel", "Colaba", "Powai"],
    storesBranded: "30+",
    description:
      "From luxury boutiques in South Mumbai to high-traffic mall stores, we craft retail brands that capture attention in India's most competitive market.",
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tagline: "Capital city retail excellence",
    areas: ["Connaught Place", "Saket", "Hauz Khas", "Gurgaon", "Noida"],
    storesBranded: "28+",
    description:
      "Delhi NCR's diverse retail landscape needs branding that resonates across demographics. We deliver store identities built for India's capital region.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "Emerging retail powerhouse",
    areas: ["Banjara Hills", "Jubilee Hills", "Hitech City", "Gachibowli", "Kondapur"],
    storesBranded: "18+",
    description:
      "Hyderabad's booming retail sector offers huge opportunity. We help stores establish strong brand presence across the city's growing commercial corridors.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "Tradition meets modern retail",
    areas: ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR"],
    storesBranded: "15+",
    description:
      "Chennai retailers need branding that balances local sensibility with modern appeal. We create store identities that connect with Tamil Nadu's discerning shoppers.",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tagline: "East India retail hub",
    areas: ["Park Street", "Salt Lake", "New Town", "Ballygunge", "Howrah"],
    storesBranded: "65+",
    description:
      "Kolkata's diverse retail landscape spans heritage high streets and modern malls. We help brands create store identities that resonate with East India's shoppers.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCityRouteParam(slug: string): string {
  return `retail-branding-in-${slug}`;
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCityHref(slug: string): string {
  return `/${getCityRouteParam(slug)}`;
}
