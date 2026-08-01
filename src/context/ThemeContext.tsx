"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  applyTheme,
  defaultThemeId,
  getThemeById,
  themes,
  type Theme,
} from "@/lib/themes";

const STORAGE_KEY = "aurelia-theme";

interface ThemeContextValue {
  themeId: string;
  theme: Theme;
  themes: Theme[];
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState(defaultThemeId);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = stored && getThemeById(stored) ? stored : defaultThemeId;
    setThemeId(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((id: string) => {
    if (!getThemeById(id)) return;
    setThemeId(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        theme: getThemeById(themeId),
        themes,
        setTheme,
      }}
    >
      {children}
      {!mounted && null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
