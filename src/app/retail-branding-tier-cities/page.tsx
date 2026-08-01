import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { MarketLanding } from "@/components/sections/MarketLanding";
import { tierMarketPage } from "@/lib/market-pages";
import { images } from "@/lib/images";

export const metadata: Metadata = tierMarketPage.metadata;

export default function RetailBrandingTierCitiesPage() {
  return (
    <PageLayout>
      <MarketLanding content={tierMarketPage} heroImage={images.process} />
    </PageLayout>
  );
}
