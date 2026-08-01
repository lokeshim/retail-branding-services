import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedStats } from "@/components/sections/TrustedStats";
import { ClientMarquee } from "@/components/ClientMarquee";
import { HighImpact } from "@/components/sections/HighImpact";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { FormatsSection } from "@/components/sections/FormatsSection";
import { MarketCoverage } from "@/components/sections/MarketCoverage";
import { Services } from "@/components/Services";
import { ActiveCities } from "@/components/sections/ActiveCities";
import {
  WhyChoose,
  CostOverview,
  StorePlanning,
  WhoShouldUse,
  ExecutionProcess,
  CaseStudiesSection,
  AgencyIntro,
  MediaComparison,
  BlogInsights,
  NationalFAQ,
} from "@/components/sections/MoreSections";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <TrustedStats /> */}
      {/* <ClientMarquee /> */}
      <HighImpact />
      <LeadCTA />
      <FormatsSection />
      <ActiveCities />
      {/* <MarketCoverage /> */}
      {/* <Services /> */}
      <WhyChoose />
      <CostOverview />
      <StorePlanning />
      <WhoShouldUse />
      <ExecutionProcess />
      <CaseStudiesSection />
      <AgencyIntro />
      <MediaComparison />
      {/* <TestimonialsSection /> */}
      <BlogInsights />
      <NationalFAQ />
      <Footer />
    </main>
  );
}
