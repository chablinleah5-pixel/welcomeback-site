import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

const AUDIENCES = [
  {
    title: "Pour les salarié.e.s",
    href: "/salaries",
    points: [
      "Visibilité sur le parcours",
      "Des repères concrets",
      "Moins de stress au moment du retour",
    ],
    color: "var(--color-green)",
  },
  {
    title: "Pour les managers",
    href: "/managers",
    points: [
      "Savoir quoi faire",
      "Scripts et guides prêts à l'emploi",
      "Accompagner sans être intrusif",
    ],
    color: "var(--color-pink)",
  },
  {
    title: "Pour les RH",
    href: "/rh",
    points: ["Gain de temps", "Conformité", "Homogénéisation des pratiques"],
    color: "var(--color-yellow)",
  },
  {
    title: "Pour les directions",
    href: "/entreprises",
    points: [
      "Réduire les coûts cachés liés aux absences longues",
      "Sécuriser les pratiques RH",
      "Renforcer durablement la fidélisation des talents",
    ],
    color: "var(--color-lavender)",
  },
];

export default function ForWhom() {
  return (
   <section
      className="py-14 sm:py-20"
      style={{ backgroundColor: "var(--color-yellow)1f" }}
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="green">Pour qui</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
           Un dispositif commun, pensé pour chaque rôle.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((audience) => (
            <Link
              key={audience.title}
              href={audience.href}
              className="group flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: `${audience.color}30` }}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                {audience.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm font-light text-[var(--foreground)]/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-violet)]">
                En savoir plus
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
