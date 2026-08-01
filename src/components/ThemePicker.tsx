"use client";

import { Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemePicker() {
  const { themeId, themes, setTheme, theme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="border border-border bg-card p-6">
        <p className="text-xs uppercase tracking-widest text-muted mb-2">Active theme</p>
        <h2 className="font-serif text-2xl font-medium text-foreground">{theme.name}</h2>
        <p className="text-muted text-sm mt-2">{theme.description}</p>
        <div className="flex gap-2 mt-4">
          {theme.preview.map((color) => (
            <span
              key={color}
              className="w-10 h-10 border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-muted">All themes</p>
        {themes.map((item) => {
          const isActive = item.id === themeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={`w-full flex items-center gap-4 p-5 border transition-all text-left ${
                isActive
                  ? "border-foreground bg-surface"
                  : "border-border hover:border-foreground/30 hover:bg-surface/50"
              }`}
            >
              <div className="flex shrink-0 -space-x-1">
                {item.preview.map((color) => (
                  <span
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-card"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-foreground">{item.name}</span>
                  {isActive && <Check size={14} className="text-foreground shrink-0" />}
                </div>
                <span className="text-muted text-xs">{item.description}</span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-muted text-xs text-center">
        Your selection is saved automatically and applied across the site.
      </p>
    </div>
  );
}
