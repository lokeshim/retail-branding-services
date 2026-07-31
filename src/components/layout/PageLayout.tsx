import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
