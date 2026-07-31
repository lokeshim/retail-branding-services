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

interface CareerPopupFormProps {
  position?: string;
  onSuccess?: () => void;
}

export function CareerPopupForm({
  position = "",
  onSuccess,
}: CareerPopupFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = new FormData(e.currentTarget);

    const success = await submitForm({
      form_type: "career",
      name: form.get("name") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      position: form.get("position") as string,
      message: form.get("message") as string,
    });

    if (success) {
      setStatus({
        type: "success",
        message: "Application submitted successfully! We'll be in touch soon.",
      });
      e.currentTarget.reset();
      onSuccess?.();
    } else {
      setStatus({
        type: "error",
        message: "Failed to submit application. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
        <p className="text-foreground font-medium text-lg">{status.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status.type === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          <AlertCircle size={18} className="shrink-0" />
          {status.message}
        </div>
      )}

      <div>
        <label className={labelClass}>Position *</label>
        <input
          type="text"
          name="position"
          required
          defaultValue={position}
          placeholder="Job title"
          className={inputClass}
          readOnly={!!position}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
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
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
      </div>

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
        <label className={labelClass}>Cover Letter / Message *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us why you'd be a great fit..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors w-full justify-center disabled:opacity-60"
      >
        {status.type === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Application
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
