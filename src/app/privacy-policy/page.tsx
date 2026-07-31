import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { LegalContent } from "@/components/ui/LegalContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurelia Brand Studio",
  description:
    "Privacy Policy for Aurelia Brand Studio. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Aurelia Brand Studio (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aureliabrand.com or use our branding and design services.",
      "By accessing our website or submitting information through our contact forms, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect personal information that you voluntarily provide to us when you fill out a contact form, request a quote, apply for a career position, or subscribe to our newsletter. This may include your name, email address, phone number, company name, business type, and project details.",
      "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data helps us improve our website and user experience.",
      "We may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, provide branding and design services, process job applications, send project updates, and improve our website and services.",
      "We may use your contact information to send you marketing communications about our services, blog updates, and industry insights. You can opt out of marketing emails at any time by clicking the unsubscribe link in our emails.",
      "We do not sell, trade, or rent your personal information to third parties for their marketing purposes.",
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you — such as email service providers, hosting platforms, and analytics tools. These parties are obligated to keep your information confidential.",
      "We may disclose your information if required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form submissions and project inquiries are typically retained for up to 3 years.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Depending on your location, you may have the right to access, correct, update, or delete your personal information. You may also have the right to object to or restrict certain processing of your data.",
      "To exercise any of these rights, please contact us at hello@aureliabrand.com. We will respond to your request within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites such as social media platforms, partner sites, or client portfolios. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
      "Aurelia Brand Studio · Indiranagar, Bangalore 560038, India · Email: hello@aureliabrand.com · Phone: +91 98765 43210",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Legal"
          title="Privacy Policy"
          description="How we collect, use, and protect your personal information."
          image={images.holdings}
          imageAlt="Privacy policy"
        />
        <LegalContent sections={sections} lastUpdated="March 15, 2026" />
      </main>
    </PageLayout>
  );
}
