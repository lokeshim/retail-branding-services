export interface MarketStat {
  value: string;
  label: string;
}

export interface MarketFormat {
  title: string;
  description: string;
  suited: string;
}

export interface MarketWhyItem {
  title: string;
  description: string;
}

export interface MarketProcessStep {
  title: string;
  description: string;
}

export interface MarketCaseStudy {
  tag: string;
  title: string;
  outcome: string;
}

export interface MarketFaq {
  q: string;
  a: string;
}

export interface MarketCityItem {
  name: string;
  slug?: string;
}

export interface MarketPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    title: string;
    description: string;
  };
  stats: MarketStat[];
  intro: {
    title: string;
    paragraphs: string[];
    checklist: string[];
  };
  cities: {
    title: string;
    description: string;
    items: MarketCityItem[];
  };
  formats: {
    title: string;
    description: string;
    items: MarketFormat[];
  };
  why: {
    title: string;
    items: MarketWhyItem[];
  };
  process: {
    title: string;
    items: MarketProcessStep[];
  };
  caseStudies: {
    title: string;
    items: MarketCaseStudy[];
  };
  faqs: MarketFaq[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export const metroMarketPage: MarketPageContent = {
  metadata: {
    title: "Retail Branding in Metro Cities | Pan-India Agency",
    description:
      "Execute high-impact retail branding across India's leading metros — malls, high streets and flagship stores with verified networks and photo proof.",
  },
  hero: {
    label: "Metro Cities",
    title: "Retail Branding in Metro Cities",
    description:
      "Execute high-impact retail branding across India's leading metros with premium inventory, dense footfall corridors and agency-led rollout discipline.",
  },
  stats: [
    { value: "8+", label: "Metro markets" },
    { value: "2,500+", label: "Stores branded" },
    { value: "45M+", label: "Monthly footfall reach" },
    { value: "98%", label: "Rollout accuracy" },
  ],
  intro: {
    title: "Premium visibility where shoppers concentrate",
    paragraphs: [
      "Metro cities offer the highest density of organised retail — malls, high streets, transit hubs and premium neighbourhood clusters. Retail branding here demands format-aware planning, operator coordination and production quality that holds up at scale.",
      "We plan and execute retail branding across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and Ahmedabad — with verified store networks, production quality and proof-of-execution reporting on every location.",
    ],
    checklist: [
      "Mall & high-street store rollouts at scale",
      "Flagship and experience-store branding",
      "Seasonal VM and campaign refreshes",
      "Multi-city coordination from one desk",
    ],
  },
  cities: {
    title: "Metro Cities We Cover",
    description: "Launch and manage retail branding campaigns across India's most influential metro markets.",
    items: [
      { name: "Delhi NCR", slug: "delhi" },
      { name: "Mumbai", slug: "mumbai" },
      { name: "Bengaluru", slug: "bangalore" },
      { name: "Hyderabad", slug: "hyderabad" },
      { name: "Chennai", slug: "chennai" },
      { name: "Kolkata", slug: "kolkata" },
      { name: "Pune" },
      { name: "Ahmedabad" },
    ],
  },
  formats: {
    title: "Types of Retail Branding in Metro Cities",
    description:
      "Each metro format is chosen by objective — visibility, dwell time, purchase intent and current store availability.",
    items: [
      {
        title: "Mall & multiplex branding",
        description:
          "Atrium activations, mall facade branding, kiosk wraps and in-mall POP for high footfall captive audiences.",
        suited: "Fashion, electronics, F&B launches",
      },
      {
        title: "High-street facade & signage",
        description:
          "Street-facing store facades, illuminated signage and window branding on commercial corridors.",
        suited: "Retail chains, jewellery, apparel",
      },
      {
        title: "Flagship & experience stores",
        description:
          "Full-store makeovers, immersive zones and premium VM for brand flagship launches in metro hubs.",
        suited: "Flagship launches, rebrands",
      },
      {
        title: "Airport & transit retail",
        description:
          "Duty-free, travel retail and transit-hub store branding with policy-compliant formats.",
        suited: "Premium brands, travel retail",
      },
      {
        title: "Supermarket & hypermarket POP",
        description:
          "End-cap displays, shelf branding, floor graphics and counter units in organised retail chains.",
        suited: "FMCG, consumer brands",
      },
      {
        title: "Digital in-store integration",
        description:
          "LED screens, interactive kiosks and QR-led journeys blended with physical store branding.",
        suited: "Tech, D2C, electronics",
      },
    ],
  },
  why: {
    title: "Why Brands Invest in Metro Retail Branding",
    items: [
      {
        title: "Highest shopper density",
        description: "Metros deliver the largest daily footfall pools for in-store brand exposure.",
      },
      {
        title: "Premium brand positioning",
        description: "Flagship formats and mall placements signal category leadership.",
      },
      {
        title: "Multi-format opportunity",
        description: "Malls, high streets and transit hubs allow layered campaign architecture.",
      },
      {
        title: "Measurable ROI",
        description: "Footfall trackers, store audits and sales uplift data validate investment.",
      },
    ],
  },
  process: {
    title: "How We Execute in Metro Markets",
    items: [
      {
        title: "City audit",
        description: "Store mapping, catchment analysis and format shortlisting per metro.",
      },
      {
        title: "Creative adaptation",
        description: "Metro-grade creative tuned for mall policies and high-street visibility.",
      },
      {
        title: "Production",
        description: "Premium materials, colour-accurate printing and fixture fabrication.",
      },
      {
        title: "Rollout & proof",
        description: "Multi-store installation with geo-tagged completion photography.",
      },
    ],
  },
  caseStudies: {
    title: "Success in this market",
    items: [
      {
        tag: "45 stores · Full makeover",
        title: "Apparel Brand — Mumbai",
        outcome: "38% increase in store visits",
      },
      {
        tag: "28 stores · Facade branding",
        title: "Electronics Retailer — Delhi NCR",
        outcome: "42% footfall uplift",
      },
    ],
  },
  faqs: [
    {
      q: "Which metro cities do you cover?",
      a: "We execute across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and Ahmedabad with on-ground teams in each market.",
    },
    {
      q: "How long does a metro rollout take?",
      a: "Average go-live is 10–14 days for active metros after brief confirmation. Multi-city rollouts are phased with a shared timeline and photo proof on every store.",
    },
    {
      q: "Do you handle mall NOC and permissions?",
      a: "Yes. Our metro desk coordinates mall management approvals, size-compliant creative and installation windows as part of rollout planning.",
    },
  ],
  cta: {
    title: "Plan your metro retail branding rollout",
    description:
      "Share your city, store count and campaign objective — get a customized plan within 24 hours.",
    buttonLabel: "Get metro city estimate",
  },
};

export const tierMarketPage: MarketPageContent = {
  metadata: {
    title: "Retail Branding in Tier 2 & Tier 3 Cities | Pan-India Agency",
    description:
      "Reach emerging retail corridors beyond metros with neighbourhood-store branding, distributor networks and cost-efficient formats built for scale.",
  },
  hero: {
    label: "Tier 2 & 3 Cities",
    title: "Retail Branding in Tier 2 & Tier 3 Cities",
    description:
      "Reach emerging retail corridors beyond metros with neighbourhood-store branding, distributor networks and cost-efficient formats built for scale.",
  },
  stats: [
    { value: "50+", label: "Tier cities covered" },
    { value: "5,000+", label: "Outlets branded" },
    { value: "80M+", label: "Rural & tier reach" },
    { value: "35%", label: "Avg. sales uplift" },
  ],
  intro: {
    title: "Brand presence where growth is accelerating",
    paragraphs: [
      "Tier 2 and tier 3 cities are where India's retail expansion is fastest — neighbourhood clusters, distributor networks, local markets and rising mall penetration. Branding here needs local language sensitivity, cost-fit formats and reliable field verification.",
      "We execute retail branding across 50+ tier cities including Coimbatore, Lucknow, Jaipur, Nagpur, Visakhapatnam, Indore, Bhopal, Kochi and more — with format-fit planning and verifiable rollout reporting.",
    ],
    checklist: [
      "Neighbourhood and local market store branding",
      "Distributor and channel-partner shop branding",
      "Cost-efficient POP and signage formats",
      "Tier-city rollout with metro-quality standards",
    ],
  },
  cities: {
    title: "Tier 2 & Tier 3 Cities We Cover",
    description: "Distributed rollout across emerging retail corridors with local execution partners.",
    items: [
      { name: "Coimbatore" },
      { name: "Lucknow" },
      { name: "Jaipur" },
      { name: "Nagpur" },
      { name: "Indore" },
      { name: "Bhopal" },
      { name: "Kochi" },
      { name: "Visakhapatnam" },
      { name: "Patna" },
      { name: "Guwahati" },
      { name: "Chandigarh" },
      { name: "Vadodara" },
    ],
  },
  formats: {
    title: "Types of Retail Branding in Tier 2 & Tier 3 Cities",
    description:
      "Formats adapted for local retail economics — high reach, practical production and fast rollout across distributed store networks.",
    items: [
      {
        title: "Neighbourhood store branding",
        description:
          "Local kirana, specialty and neighbourhood retail facades, counter branding and in-store graphics.",
        suited: "FMCG, pharma, local chains",
      },
      {
        title: "Distributor & channel shops",
        description:
          "Dealer boards, shop-in-shop units and co-branded fascia for distributor and channel-partner networks.",
        suited: "Electronics, auto, industrial",
      },
      {
        title: "Local market activations",
        description:
          "Temporary stalls, market-day setups and seasonal booth branding in high-traffic local bazaars.",
        suited: "Seasonal campaigns, FMCG",
      },
      {
        title: "Tier-city mall & retail park",
        description:
          "Growing mall formats in tier cities — kiosk branding, aisle POP and store fascia in new retail developments.",
        suited: "Apparel, lifestyle brands",
      },
      {
        title: "Rural retail & haat nodes",
        description:
          "Village market branding, haat-day activations and rural retail touchpoints for deep geographic reach.",
        suited: "Agri, FMCG, government schemes",
      },
      {
        title: "Mobile & van retail branding",
        description:
          "Branded delivery vans, mobile pop-up units and travelling retail formats for distributed tier markets.",
        suited: "QSR, telecom, sampling",
      },
    ],
  },
  why: {
    title: "Why Brands Scale into Tier 2 & Tier 3",
    items: [
      {
        title: "Faster market penetration",
        description: "Lower competition and rising disposable income unlock new growth corridors.",
      },
      {
        title: "Cost-efficient reach",
        description: "Higher impressions per rupee vs. saturated metro media channels.",
      },
      {
        title: "Channel depth",
        description: "Distributor and neighbourhood networks create last-mile brand presence.",
      },
      {
        title: "First-mover advantage",
        description: "Early branding in tier cities builds long-term category recall.",
      },
    ],
  },
  process: {
    title: "How We Execute in Tier Markets",
    items: [
      {
        title: "Network mapping",
        description: "Identify distributor, retail and market nodes per tier city.",
      },
      {
        title: "Format optimization",
        description: "Cost-fit formats designed for distributed store economics.",
      },
      {
        title: "Local production",
        description: "Regional print partners for speed and cost efficiency.",
      },
      {
        title: "Field verification",
        description: "On-ground teams verify every outlet with photo proof.",
      },
    ],
  },
  caseStudies: {
    title: "Success in this market",
    items: [
      {
        tag: "120 stores · VM & POP",
        title: "FMCG Brand — South India",
        outcome: "30% shelf sales uplift",
      },
      {
        tag: "200+ outlets · Channel shops",
        title: "Consumer Brand — Tier 2 rollout",
        outcome: "25% distribution growth",
      },
    ],
  },
  faqs: [
    {
      q: "Can you brand stores in small towns and rural areas?",
      a: "Yes. We cover tier 2, tier 3 and select rural retail nodes through our regional partner network across India.",
    },
    {
      q: "Is tier-city branding cheaper than metro?",
      a: "Generally yes — format and production costs are optimized for distributed networks. We share indicative costing per city and outlet count within 24 hours.",
    },
    {
      q: "How do you manage quality across distributed outlets?",
      a: "Standardized creative kits, regional production partners and field verification with photo proof on every branded location.",
    },
  ],
  cta: {
    title: "Scale your brand across tier 2 & tier 3 cities",
    description:
      "Tell us your target cities and outlet count — we'll build a rollout plan with timelines and estimates.",
    buttonLabel: "Get tier city estimate",
  },
};
