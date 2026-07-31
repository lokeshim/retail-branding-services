export type FormType = "contact" | "career";

export interface ContactFormData {
  form_type: "contact";
  name: string;
  email: string;
  company: string;
  business_type: string;
  message: string;
}

export interface CareerFormData {
  form_type: "career";
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export type FormData = ContactFormData | CareerFormData;

export async function submitForm(data: FormData): Promise<boolean> {
  const response = await fetch("/api/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) return false;

  const result = await response.json();
  return result.success === true;
}
