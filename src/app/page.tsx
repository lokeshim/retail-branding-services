import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedStats } from "@/components/sections/TrustedStats";
import { HighImpact } from "@/components/sections/HighImpact";
import { Services } from "@/components/Services";
import { FormatsSection } from "@/components/sections/FormatsSection";
import { MarketCoverage } from "@/components/sections/MarketCoverage";
import { ActiveCities } from "@/components/sections/ActiveCities";
import {
  WhyChoose,
  WhoShouldUse,
  ExecutionProcess,
  StorePlanning,
  CaseStudiesSection,
  MediaComparison,
  BlogInsights,
  NationalFAQ,
} from "@/components/sections/MoreSections";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LeadCTA } from "@/components/sections/LeadCTA";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hook & credibility */}
      <HeroSection />
      <TrustedStats />
      <HighImpact />

      {/* What we offer */}
      <Services />
      <FormatsSection />

      {/* Why us & process */}
      <WhyChoose />
      <WhoShouldUse />
      <ExecutionProcess />

      {/* Coverage & planning */}
      <MarketCoverage />
      <ActiveCities />
      <StorePlanning />

      {/* Proof & comparison */}
      <CaseStudiesSection />
      <TestimonialsSection />
      <MediaComparison />

      {/* Convert & resources */}
      <LeadCTA />
      <BlogInsights />
      <NationalFAQ />

      <Footer />
    </main>
  );
}
