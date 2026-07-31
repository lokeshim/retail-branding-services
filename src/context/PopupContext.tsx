"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type PopupType = "contact" | "career" | null;

interface PopupContextValue {
  popupType: PopupType;
  careerPosition: string;
  formKey: number;
  openContactPopup: () => void;
  openCareerPopup: (position?: string) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [popupType, setPopupType] = useState<PopupType>(null);
  const [careerPosition, setCareerPosition] = useState("");
  const [formKey, setFormKey] = useState(0);

  const openContactPopup = useCallback(() => {
    setCareerPosition("");
    setFormKey((k) => k + 1);
    setPopupType("contact");
  }, []);

  const openCareerPopup = useCallback((position = "") => {
    setCareerPosition(position);
    setFormKey((k) => k + 1);
    setPopupType("career");
  }, []);

  const closePopup = useCallback(() => {
    setPopupType(null);
    setCareerPosition("");
  }, []);

  return (
    <PopupContext.Provider
      value={{
        popupType,
        careerPosition,
        formKey,
        openContactPopup,
        openCareerPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within PopupProvider");
  }
  return context;
}
