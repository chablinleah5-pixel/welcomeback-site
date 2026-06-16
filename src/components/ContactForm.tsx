"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "3617c832-06ec-4dc1-99b5-966d86076895";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nouvelle demande de démo — Welcome Back",
      from_name: "Site Welcome Back",
    };
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("submitted");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-black/5 bg-white p-10 text-center"
      >
        <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
          Merci pour votre demande !
        </h3>
        <p className="mt-3 text-sm font-light text-[var(--foreground)]/65">
          Notre équipe vous recontacte sous 24 à 48h pour organiser votre
          démonstration de Welcome Back.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="nom" label="Nom" name="nom" autoComplete="name" required />
        <Field
          id="entreprise"
          label="Entreprise"
          name="entreprise"
          autoComplete="organization"
          required
        />
        <Field
          id="fonction"
          label="Fonction"
          name="fonction"
          autoComplete="organization-title"
          required
        />
        <Field
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--foreground)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-black/10 bg-[var(--background)] px-4 py-3 text-sm font-light text-[var(--foreground)] outline-none transition-colors focus:border-[var(--color-violet)]"
          placeholder="Décrivez votre contexte : effectifs, types d'absences concernées, échéance souhaitée..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-light text-red-600">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou
          de nous écrire directement par email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-violet)] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-[var(--foreground)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-[var(--background)] px-4 py-3 text-sm font-light text-[var(--foreground)] outline-none transition-colors focus:border-[var(--color-violet)]"
      />
    </div>
  );
}
