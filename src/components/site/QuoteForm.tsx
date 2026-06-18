import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/lib/leads.functions";
import { toast } from "sonner";

type Source = "quote_form" | "contact_form";

interface Props {
  source?: Source;
  compact?: boolean;
}

export function QuoteForm({ source = "quote_form", compact = false }: Props) {
  const submit = useServerFn(submitLead);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      moveDate: String(fd.get("moveDate") || ""),
      origin: String(fd.get("origin") || ""),
      destination: String(fd.get("destination") || ""),
      message: String(fd.get("message") || ""),
      source,
    };

    setSubmitting(true);
    const form = e.currentTarget;
    try {
      await submit({ data: payload });
      form.reset();
      setSent(true);
      toast.success("Thank you — we've received your request.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="p-12 border border-border text-center">
        <p className="font-serif text-3xl">Thank you.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
          We've received your request and will be in touch shortly.
        </p>
        {!compact && (
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-8 text-xs tracking-[0.3em] uppercase underline underline-offset-4 hover:no-underline"
          >
            Submit another request
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Field name="name" label="Full Name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" />
        <Field name="moveDate" label="Anticipated Move Date" type="date" />
        <Field name="origin" label="Origin" placeholder="City, Country" />
        <Field name="destination" label="Destination" placeholder="City, Country" />
      </div>
      <Field name="message" label="Tell us about your move" textarea />

      <div className="flex items-center justify-between gap-6 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground tracking-wide max-w-sm">
          Your information remains strictly confidential.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground/85 transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Request Consultation"}
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}

function Field({ name, label, type = "text", placeholder, required, textarea }: FieldProps) {
  const base =
    "w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none py-3 text-base placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block group">
      <span className="eyebrow block mb-3">
        {label}
        {required && <span className="text-foreground"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          className={base + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </label>
  );
}
