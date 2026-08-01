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

    const message = [
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
      business_type: formatType || marketType || "",
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
      ? "space-y-4"
      : "space-y-5 bg-white p-8 md:p-10 shadow-2xl");

  if (status.type === "success") {
    return (
      <div className={`${wrapperClass} text-center py-8`}>
        <CheckCircle size={40} className="text-green-600 mx-auto mb-3" />
        <p className="text-foreground font-medium">{status.message}</p>
      </div>
    );
  }

  return (
    <form className={wrapperClass} onSubmit={handleSubmit}>
      {status.type === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          <AlertCircle size={18} className="shrink-0" />
          {status.message}
        </div>
      )}

      <div className={isFooter ? "space-y-4" : "grid sm:grid-cols-2 gap-5"}>
        <div>
          <label className={labelClass}>{isFooter ? "Your Name" : "Name *"}</label>
          <input
            type="text"
            name="name"
            required
            placeholder={isFooter ? "Your Name" : "Your full name"}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>{isFooter ? "Your Email" : "Email *"}</label>
          <input
            type="email"
            name="email"
            required
            placeholder={isFooter ? "Your Email" : "you@company.com"}
            className={inputClass}
          />
        </div>
      </div>

      {isFooter ? (
        <>
          <div>
            <label className={labelClass}>Brand Name</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Select Type</label>
            <select name="format_type" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Select Type
              </option>
              <option value="Store facade & signage">Store facade & signage</option>
              <option value="Visual merchandising">Visual merchandising</option>
              <option value="In-store graphics & POP">In-store graphics & POP</option>
              <option value="Full store makeover">Full store makeover</option>
              <option value="Mall branding">Mall branding</option>
              <option value="Pan-India rollout">Pan-India rollout</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Market type</label>
            <select name="market_type" className={inputClass} defaultValue="metro">
              <option value="metro">Metro cities</option>
              <option value="tier">Tier 2 & 3 cities</option>
              <option value="both">Both metro & tier</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Branding requirement</label>
            <textarea
              name="requirement"
              rows={3}
              placeholder="Cities, stores, formats, timeline..."
              className={`${inputClass} resize-none`}
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status.type === "loading"}
        className={`group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide transition-colors w-full justify-center disabled:opacity-60 ${
          isFooter
            ? "bg-brand text-white hover:bg-brand-dark"
            : "bg-foreground text-white hover:bg-foreground/90"
        }`}
      >
        {status.type === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {submitLabel ??
              (isFooter
                ? "Book A Free Retail Branding Session"
                : "Get free branding consultation")}
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
