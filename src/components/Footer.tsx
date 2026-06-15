import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const FOOTER_LINKS = [
  {
    title: "Produit",
    links: [
      { href: "/solution", label: "La solution" },
      { href: "/rh", label: "Pour les RH" },
      { href: "/managers", label: "Pour les managers" },
      { href: "/salaries", label: "Pour les salarié.e.s" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/contact", label: "Nous contacter" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt="Welcome Back"
            width={170}
            height={54}
            className="h-10 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--foreground)]/65">
            La solution qui structure et automatise l&apos;accompagnement des
            retours après une absence longue : maternité, maladie,
            parentalité, aidance.
          </p>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold text-[var(--foreground)]">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link, i) => (
                <li key={link.label + i}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/65 transition-colors hover:text-[var(--color-violet)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-black/5 py-6 text-xs text-[var(--foreground)]/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Welcome Back. Tous droits réservés.</p>
        <p>Structurer les retours, sereinement.</p>
      </Container>
    </footer>
  );
}
