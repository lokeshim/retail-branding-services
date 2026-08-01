import type { NextConfig } from "next";

const citySlugs = ["bangalore", "mumbai", "delhi", "hyderabad", "chennai", "kolkata"];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return citySlugs.map((slug) => ({
      source: `/retail-branding-in-${slug}`,
      destination: `/city/${slug}`,
    }));
  },
};

export default nextConfig;
