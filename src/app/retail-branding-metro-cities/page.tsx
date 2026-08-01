import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { MarketLanding } from "@/components/sections/MarketLanding";
import { metroMarketPage } from "@/lib/market-pages";
import { images } from "@/lib/images";

export const metadata: Metadata = metroMarketPage.metadata;

export default function RetailBrandingMetroCitiesPage() {
  return (
    <PageLayout>
      <MarketLanding
        content={metroMarketPage}
        heroImage={images.metroCoverage}
        formatsBgImage={images.metroCoverage}
      />
    </PageLayout>
  );
}
