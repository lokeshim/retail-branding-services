"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitForm } from "@/lib/form-api";

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

const inputClass =
  "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/50 focus:border-foreground focus:outline-none transition-colors";
const labelClass = "block text-xs tracking-wider uppercase text-muted mb-2";
const footerInputClass =
  "w-full bg-white rounded-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow";
const footerLabelClass = "sr-only";

interface BrandingLeadFormProps {
  variant?: "default" | "footer";
  className?: string;
  submitLabel?: string;
}

export function BrandingLeadForm({
  variant = "default",
  className,
  submitLabel,
}: BrandingLeadFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const isFooter = variant === "footer";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = new FormData(e.currentTarget);
    const phone = form.get("phone") as string;
    const marketType = form.get("market_type") as string;
    const requirement = form.get("requirement") as string;
    const formatType = form.get("format_type") as string;
    const footerMessage = form.get("message") as string;

    const message = isFooter
      ? [phone && `Phone: ${phone}`, footerMessage].filter(Boolean).join("\n\n")
      : [
          phone && `Phone: ${phone}`,
          marketType && `Market: ${marketType}`,
          formatType && `Format: ${formatType}`,
          requirement,
        ]
          .filter(Boolean)
          .join("\n");

    const success = await submitForm({
      form_type: "contact",
      name: form.get("name") as string,
      email: form.get("email") as string,
      company: (form.get("brand") as string) || (form.get("company") as string) || "",
      business_type: isFooter ? "" : formatType || marketType || "",
      message,
    });

    if (success) {
      setStatus({
        type: "success",
        message: "Thank you! Our branding desk will respond within 24 hours.",
      });
      e.currentTarget.reset();
    } else {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  const wrapperClass =
    className ??
    (isFooter
      ? "space-y-3"
      : "space-y-5 bg-white p-8 md:p-10 shadow-2xl");

  const fieldInputClass = isFooter ? footerInputClass : inputClass;
  const fieldLabelClass = isFooter ? footerLabelClass : labelClass;

  if (status.type === "success") {
    return (
      <div className={`${wrapperClass} text-center py-8`}>
        <CheckCircle
          size={40}
          className={`mx-auto mb-3 ${isFooter ? "text-white" : "text-green-600"}`}
        />
        <p className={isFooter ? "text-white font-medium" : "text-foreground font-medium"}>
          {status.message}
        </p>
      </div>
    );
  }

  return (
    <form className={wrapperClass} onSubmit={handleSubmit}>
      {status.type === "error" && (
        <div
          className={`flex items-center gap-3 px-4 py-3 text-sm ${
            isFooter
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          <AlertCircle size={18} className="shrink-0" />
          {status.message}
        </div>
      )}

      {isFooter ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="footer-name" className={fieldLabelClass}>
                Your Name
              </label>
              <input
                id="footer-name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className={fieldInputClass}
              />
            </div>
            <div>
              <label htmlFor="footer-email" className={fieldLabelClass}>
                Your Email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className={fieldInputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="footer-phone" className={fieldLabelClass}>
              Phone Number
            </label>
            <input
              id="footer-phone"
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className={fieldInputClass}
            />
          </div>
          <div>
            <label htmlFor="footer-message" className={fieldLabelClass}>
              Message
            </label>
            <textarea
              id="footer-message"
              name="message"
              rows={4}
              required
              placeholder="Your message..."
              className={`${fieldInputClass} resize-none`}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={fieldLabelClass}>Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className={fieldInputClass}
              />
            </div>
            <div>
              <label className={fieldLabelClass}>Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className={fieldInputClass}
              />
            </div>
          </div>
          <div>
            <label className={fieldLabelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className={fieldInputClass}
            />
          </div>
          <div>
            <label className={fieldLabelClass}>Market type</label>
            <select name="market_type" className={fieldInputClass} defaultValue="metro">
              <option value="metro">Metro cities</option>
              <option value="tier">Tier 2 & 3 cities</option>
              <option value="both">Both metro & tier</option>
            </select>
          </div>
          <div>
            <label className={fieldLabelClass}>Branding requirement</label>
            <textarea
              name="requirement"
              rows={3}
              placeholder="Cities, stores, formats, timeline..."
              className={`${fieldInputClass} resize-none`}
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status.type === "loading"}
        className={
          isFooter
            ? "group flex w-full overflow-hidden rounded-md bg-brand text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
            : "group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide transition-colors w-full justify-center disabled:opacity-60 bg-foreground text-white hover:bg-foreground/90"
        }
      >
        {status.type === "loading" ? (
          <span className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold">
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </span>
        ) : isFooter ? (
          <>
            <span className="flex flex-1 items-center justify-center py-4 text-sm font-semibold">
              {submitLabel ?? "Book A Free Retail Branding Session"}
            </span>
            <span className="flex h-full items-center justify-center bg-white px-5 py-4 text-brand">
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </>
        ) : (
          <>
            {submitLabel ?? "Get free branding consultation"}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>

      {!isFooter && (
        <p className="text-center text-muted text-xs">
          Free estimate · No spam · Response in 24 hours
        </p>
      )}
    </form>
  );
}
