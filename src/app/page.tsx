import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientMarquee />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
