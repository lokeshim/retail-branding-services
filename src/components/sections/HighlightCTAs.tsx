"use client";

import Link from "next/link";
import { usePopup } from "@/context/PopupContext";
import { HighlightPanel } from "../ui/HighlightPanel";

export function PricingCTA() {
  const { openContactPopup } = usePopup();

  return (
    <HighlightPanel
      title="Get exact pricing for your campaign"
      description="Share your requirement and get a customized quote within 24 hours."
      bullets={[
        "Transparent cost breakdown",
        "No hidden charges",
        "Response within 24 hours",
      ]}
    >
      <button
        onClick={openContactPopup}
        className="px-8 py-3.5 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
      >
        Request a quote
      </button>
    </HighlightPanel>
  );
}

export function CityAvailabilityCTA() {
  const { openContactPopup } = usePopup();

  return (
    <HighlightPanel
      title="Your city not listed? We still cover 50+ markets."
      description="Tell us your target cities and store count — our planning desk will confirm availability, formats and a rollout timeline within 24 hours. No obligation."
      bullets={[
        "Verified partner network",
        "Photo proof on every store",
        "One team, pan-India",
      ]}
    >
      <button
        onClick={openContactPopup}
        className="px-8 py-3.5 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
      >
        Get availability for my cities
      </button>
    </HighlightPanel>
  );
}

export function TierCityCTA() {
  return (
    <HighlightPanel
      title="Need branding in a tier-2 or tier-3 city?"
      description="We cover 50+ markets beyond metros. Share your target cities and store count — our desk will confirm formats, timelines and rollout feasibility within 24 hours."
      bullets={[
        "Distributor & neighbourhood stores",
        "Consistent quality at scale",
        "Pan-India on-ground teams",
      ]}
    >
      <Link
        href="/contact"
        className="inline-block px-8 py-3.5 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
      >
        Talk to our planning desk
      </Link>
    </HighlightPanel>
  );
}
