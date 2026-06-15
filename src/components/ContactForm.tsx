"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only placeholder: integrate with your form backend / CRM here.
    setStatus("submitted");
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

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-violet)] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Envoyer ma demande de démo
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
