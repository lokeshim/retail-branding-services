import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { LegalContent } from "@/components/ui/LegalContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aurelia Brand Studio",
  description:
    "Terms and Conditions for using Aurelia Brand Studio website and branding services.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content: [
      "By accessing and using the Aurelia Brand Studio website (aureliabrand.com) and our branding, design, and promotion services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
      "These terms apply to all visitors, clients, and users of our website and services, including but not limited to airport branding, retail store promotion, park and leisure branding, and corporate holdings identity projects.",
    ],
  },
  {
    title: "2. Services",
    content: [
      "Aurelia Brand Studio provides brand strategy, brand identity design, packaging design, digital branding, rebranding, brand guidelines, and related promotional services for businesses across airports, retail, leisure, and corporate sectors.",
      "All services are subject to a separate project agreement or proposal that outlines scope, deliverables, timelines, and fees. In the event of any conflict between these Terms and a signed project agreement, the project agreement shall prevail.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "All content on this website — including text, graphics, logos, images, and software — is the property of Aurelia Brand Studio and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.",
      "Upon full payment for branding projects, clients receive ownership or license rights to final deliverables as specified in the project agreement. Aurelia Brand Studio retains the right to display completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    content: [
      "Clients agree to provide accurate information, timely feedback, and necessary materials required for project completion. Delays in client feedback or approvals may affect project timelines and are not the responsibility of Aurelia Brand Studio.",
      "Clients are responsible for ensuring that any content, materials, or briefs provided to us do not infringe on third-party intellectual property rights.",
    ],
  },
  {
    title: "5. Payment Terms",
    content: [
      "Payment terms are outlined in individual project proposals and agreements. Unless otherwise stated, a deposit is required before work commences, with remaining balance due upon project completion or as per agreed milestones.",
      "Late payments may incur interest charges and may result in suspension of services. All fees are quoted in Indian Rupees (INR) unless otherwise specified.",
    ],
  },
  {
    title: "6. Revisions & Approvals",
    content: [
      "Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions beyond the agreed scope may incur extra charges.",
      "Final approval of deliverables must be provided in writing. Once approved, Aurelia Brand Studio is not responsible for errors or changes requested after approval.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "Aurelia Brand Studio shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability for any claim shall not exceed the amount paid by the client for the specific project in question.",
      "We do not guarantee specific business results, revenue increases, or market performance from branding services, though we strive to deliver work that supports our clients' business objectives.",
    ],
  },
  {
    title: "8. Confidentiality",
    content: [
      "We treat all client information, business strategies, and project details as confidential. We will not disclose confidential information to third parties without client consent, except as required by law.",
      "Clients agree to keep confidential any proprietary methodologies, pricing structures, or internal processes shared by Aurelia Brand Studio during the course of a project.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "Either party may terminate a project agreement with written notice as per the terms specified in the agreement. Upon termination, the client is responsible for payment of all work completed up to the termination date.",
      "We reserve the right to refuse or terminate service to any client who violates these Terms and Conditions or engages in abusive or unlawful conduct.",
    ],
  },
  {
    title: "10. Website Use",
    content: [
      "You agree not to use our website for any unlawful purpose, to transmit harmful code or malware, to attempt unauthorised access to our systems, or to interfere with the proper functioning of the website.",
      "We reserve the right to modify, suspend, or discontinue any part of our website at any time without prior notice.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "For questions about these Terms and Conditions, please contact us at:",
      "Aurelia Brand Studio · Indiranagar, Bangalore 560038, India · Email: hello@aureliabrand.com · Phone: +91 98765 43210",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Legal"
          title="Terms & Conditions"
          description="Terms governing the use of our website and branding services."
          image={images.holdings}
          imageAlt="Terms and conditions"
        />
        <LegalContent sections={sections} lastUpdated="March 15, 2026" />
      </main>
    </PageLayout>
  );
}
