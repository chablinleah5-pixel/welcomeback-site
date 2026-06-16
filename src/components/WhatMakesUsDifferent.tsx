import Container from "./Container";
import Eyebrow from "./Eyebrow";

const CARDS = [
  {
    role: "RH",
    title: "Gardent une vision claire",
    text: "Les retours en cours sont suivis dans un même espace, avec les principales échéances et points d'attention.",
    color: "var(--color-lavender)",
  },
  {
    role: "Managers",
    title: "Sont guidé.e.s étape par étape",
    text: "Ils.elles disposent de repères concrets pour accompagner la reprise sans avoir à tout construire eux.elles-mêmes.",
    color: "var(--color-pink)",
  },
  {
    role: "Salarié.e.s",
    title: "Ne reprennent pas seul.e.s",
    text: "Ils.elles bénéficient d'un cadre clair et de ressources adaptées tout au long de leur retour.",
    color: "var(--color-green)",
  },
  {
    role: "Directions",
    title: "Pilotent un sujet souvent invisible",
    text: "Les retours après absence longue deviennent un sujet suivi, mesurable et intégré à la politique RH de l'organisation.",
    color: "var(--color-yellow)",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="violet">Notre approche</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Ce qui rend Welcome Back différent
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Dans de nombreuses organisations, les retours après une absence
            longue reposent sur la mémoire des managers, la disponibilité
            des RH ou des procédures rarement consultées. Welcome Back
            structure l&apos;accompagnement de chaque retour en fournissant
            les bons outils, aux bonnes personnes, au bon moment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.role}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-8"
            >
              <span
                className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                style={{ backgroundColor: `${card.color}55` }}
              >
                {card.role}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
