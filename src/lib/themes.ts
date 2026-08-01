export interface ThemeColors {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  accentLight: string;
  surface: string;
  surfaceElevated: string;
  border: string;
  card: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  preview: [string, string, string];
  colors: ThemeColors;
}

export const themes: Theme[] = [
  {
    id: "classic",
    name: "Classic Mono",
    description: "Timeless black & white",
    preview: ["#111111", "#ffffff", "#f8f9fa"],
    colors: {
      background: "#ffffff",
      foreground: "#111111",
      muted: "#6b7280",
      accent: "#111111",
      accentLight: "#374151",
      surface: "#f8f9fa",
      surfaceElevated: "#f1f3f5",
      border: "rgba(0, 0, 0, 0.1)",
      card: "#ffffff",
    },
  },
  {
    id: "navy",
    name: "Navy Professional",
    description: "Corporate navy & gold",
    preview: ["#1e3a5f", "#f5f0e8", "#c9a227"],
    colors: {
      background: "#faf9f7",
      foreground: "#1e3a5f",
      muted: "#5c6b7a",
      accent: "#1e3a5f",
      accentLight: "#2d5a8e",
      surface: "#f0ede8",
      surfaceElevated: "#e8e4dc",
      border: "rgba(30, 58, 95, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "forest",
    name: "Forest Green",
    description: "Natural green & cream",
    preview: ["#1a3c34", "#f7f5f0", "#2d6a4f"],
    colors: {
      background: "#fafaf8",
      foreground: "#1a3c34",
      muted: "#5a6e68",
      accent: "#1a3c34",
      accentLight: "#2d6a4f",
      surface: "#f0f4f2",
      surfaceElevated: "#e4ebe8",
      border: "rgba(26, 60, 52, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "burgundy",
    name: "Burgundy Luxury",
    description: "Rich wine & ivory",
    preview: ["#5c1a2e", "#faf8f5", "#8b2942"],
    colors: {
      background: "#faf8f5",
      foreground: "#5c1a2e",
      muted: "#7a5a62",
      accent: "#5c1a2e",
      accentLight: "#8b2942",
      surface: "#f5f0ec",
      surfaceElevated: "#ebe4de",
      border: "rgba(92, 26, 46, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "teal",
    name: "Teal Modern",
    description: "Fresh teal & slate",
    preview: ["#0f4c5c", "#f8fafb", "#1a7a8c"],
    colors: {
      background: "#f8fafb",
      foreground: "#0f4c5c",
      muted: "#5a7a82",
      accent: "#0f4c5c",
      accentLight: "#1a7a8c",
      surface: "#eef4f5",
      surfaceElevated: "#e0ecef",
      border: "rgba(15, 76, 92, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "terracotta",
    name: "Warm Terracotta",
    description: "Retail-ready rust & sand",
    preview: ["#9c4221", "#faf7f4", "#c05621"],
    colors: {
      background: "#faf7f4",
      foreground: "#7c2d12",
      muted: "#8a6f5c",
      accent: "#9c4221",
      accentLight: "#c05621",
      surface: "#f5ede6",
      surfaceElevated: "#ebe0d4",
      border: "rgba(124, 45, 18, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "indigo",
    name: "Royal Indigo",
    description: "Bold indigo & soft gold",
    preview: ["#312e81", "#faf9fc", "#6366f1"],
    colors: {
      background: "#faf9fc",
      foreground: "#312e81",
      muted: "#6b6b8a",
      accent: "#312e81",
      accentLight: "#4f46e5",
      surface: "#f0eff8",
      surfaceElevated: "#e4e2f0",
      border: "rgba(49, 46, 129, 0.12)",
      card: "#ffffff",
    },
  },
  {
    id: "charcoal",
    name: "Charcoal Rose",
    description: "Sophisticated charcoal & blush",
    preview: ["#2d2d2d", "#faf9f9", "#b76e79"],
    colors: {
      background: "#faf9f9",
      foreground: "#2d2d2d",
      muted: "#6b6568",
      accent: "#2d2d2d",
      accentLight: "#b76e79",
      surface: "#f3f0f1",
      surfaceElevated: "#e8e4e6",
      border: "rgba(45, 45, 45, 0.1)",
      card: "#ffffff",
    },
  },
];

export const defaultThemeId = "classic";

export const themeCssMap = Object.fromEntries(
  themes.map((t) => [
    t.id,
    {
      background: t.colors.background,
      foreground: t.colors.foreground,
      muted: t.colors.muted,
      accent: t.colors.accent,
      accentLight: t.colors.accentLight,
      surface: t.colors.surface,
      surfaceElevated: t.colors.surfaceElevated,
      border: t.colors.border,
      card: t.colors.card,
    },
  ])
) as Record<string, ThemeColors>;

export function getThemeById(id: string): Theme {
  return themes.find((t) => t.id === id) ?? themes[0];
}

export function applyTheme(themeId: string) {
  const theme = getThemeById(themeId);
  const root = document.documentElement;

  root.setAttribute("data-theme", themeId);
  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty("--foreground", theme.colors.foreground);
  root.style.setProperty("--muted", theme.colors.muted);
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--accent-light", theme.colors.accentLight);
  root.style.setProperty("--surface", theme.colors.surface);
  root.style.setProperty("--surface-elevated", theme.colors.surfaceElevated);
  root.style.setProperty("--border", theme.colors.border);
  root.style.setProperty("--card", theme.colors.card);
  root.style.setProperty("--brand", theme.colors.accent);
  root.style.setProperty("--brand-dark", theme.id === "classic" ? "#000000" : theme.colors.accentLight);
  root.style.setProperty("--brand-light", theme.colors.surfaceElevated);
}
