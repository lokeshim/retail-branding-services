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
const labelClass =
  "block text-xs tracking-wider uppercase text-muted mb-2";

interface ContactFormProps {
  showBusinessType?: boolean;
  defaultBusinessType?: string;
  className?: string;
}

export function ContactForm({
  showBusinessType = true,
  defaultBusinessType = "",
  className = "space-y-6 bg-white border border-border p-8 md:p-10 shadow-lg",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = new FormData(e.currentTarget);

    const success = await submitForm({
      form_type: "contact",
      name: form.get("name") as string,
      email: form.get("email") as string,
      company: form.get("company") as string,
      business_type: form.get("business_type") as string,
      message: form.get("message") as string,
    });

    if (success) {
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      e.currentTarget.reset();
    } else {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className={`${className} text-center py-12`}>
        <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
        <p className="text-foreground font-medium text-lg">{status.message}</p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {status.type === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm mb-2">
          <AlertCircle size={18} className="shrink-0" />
          {status.message}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input
          type="text"
          name="company"
          placeholder="Your company"
          className={inputClass}
        />
      </div>
      {showBusinessType && (
        <div>
          <label className={labelClass}>Business Type</label>
          <select
            name="business_type"
            defaultValue={defaultBusinessType}
            className={inputClass}
          >
            <option value="">Select your vertical</option>
            <option value="airport">Airport</option>
            <option value="store">Retail Store</option>
            <option value="park">Park & Leisure</option>
            <option value="holdings">Holdings & Corporate</option>
          </select>
        </div>
      )}
      <div>
        <label className={labelClass}>Project Details *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your branding needs..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors duration-300 w-full sm:w-auto justify-center disabled:opacity-60"
      >
        {status.type === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  );
}
