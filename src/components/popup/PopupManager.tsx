"use client";

import { MessageCircle } from "lucide-react";
import { PopupProvider, usePopup } from "@/context/PopupContext";
import { FormModal } from "./FormModal";
import { ContactPopupForm } from "./ContactPopupForm";
import { CareerPopupForm } from "./CareerPopupForm";

function PopupModals() {
  const { popupType, careerPosition, formKey, closePopup } = usePopup();

  return (
    <>
      <FormModal
        isOpen={popupType === "contact"}
        onClose={closePopup}
        title="Get in Touch"
        subtitle="Tell us about your project and we'll get back within 24 hours."
      >
        <ContactPopupForm key={`contact-${formKey}`} />
      </FormModal>

      <FormModal
        isOpen={popupType === "career"}
        onClose={closePopup}
        title="Apply for Position"
        subtitle={
          careerPosition
            ? `Applying for: ${careerPosition}`
            : "Submit your application below."
        }
      >
        <CareerPopupForm
          key={`career-${formKey}`}
          position={careerPosition}
        />
      </FormModal>
    </>
  );
}

function FloatingContactButton() {
  const { openContactPopup, popupType } = usePopup();

  if (popupType) return null;

  return (
    <button
      onClick={openContactPopup}
      className="fixed bottom-20 right-6 z-40 w-14 h-14 bg-brand text-white shadow-lg hover:bg-brand-dark transition-all flex items-center justify-center"
      aria-label="Open contact form"
    >
      <MessageCircle size={24} />
    </button>
  );
}

export function PopupManager({ children }: { children: React.ReactNode }) {
  return (
    <PopupProvider>
      {children}
      <PopupModals />
      <FloatingContactButton />
    </PopupProvider>
  );
}
