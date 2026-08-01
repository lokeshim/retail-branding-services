import { getCityHref } from "./cities";

export const serviceNavItems = [
  { label: "All Services", href: "/services" },
  { label: "Store Identity", href: "/services#store-identity" },
  { label: "Storefront Branding", href: "/services#storefront" },
  { label: "Packaging & Collateral", href: "/services#packaging" },
  { label: "In-Store Promotion", href: "/services#in-store-promotion" },
  { label: "Visual Merchandising", href: "/services#visual-merchandising" },
  { label: "Brand Strategy", href: "/services#brand-strategy" },
];

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export { cities, getCityHref } from "./cities";
