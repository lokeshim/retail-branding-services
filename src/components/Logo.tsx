import Link from "next/link";

type LogoVariant = "light" | "dark" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  compact?: boolean;
  className?: string;
}

export function Logo({
  variant = "light",
  compact = false,
  className = "",
}: LogoProps) {
  const isFooter = variant === "footer";
  const isDark = variant === "dark" || isFooter;

  const nameClass = isFooter || isDark ? "text-white" : "text-foreground";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Retail Branding Agency"
    >
      <span className="w-9 h-9 bg-[var(--brand)] flex shrink-0 items-center justify-center transition-opacity group-hover:opacity-90">
        <span className="text-white text-xs font-bold tracking-tight">RB</span>
      </span>
      {!compact && (
        <span className={`font-medium text-base ${nameClass}`}>
          Retail Branding
        </span>
      )}
      {compact && (
        <span className={`font-medium text-sm sm:text-base leading-tight ${nameClass}`}>
          <span className="hidden sm:inline">Retail Branding</span>
          <span className="sm:hidden">RB</span>
        </span>
      )}
    </Link>
  );
}
