"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/solution", label: "Solution" },
  { href: "/rh", label: "Pour les RH" },
  { href: "/managers", label: "Pour les managers" },
  { href: "/salaries", label: "Pour les salarié.e.s" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Welcome Back — Accueil"
        >
          <Image
            src="/images/logo-wb.png"
            alt="Welcome Back"
            width={68}
            height={34}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-[var(--foreground)]/75 transition-colors hover:text-[var(--color-violet)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-violet)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] hover:bg-[var(--color-violet)]/90"
          >
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-[var(--background)] md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-[var(--foreground)]/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-[var(--color-violet)] px-6 py-3 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Nous contacter
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
