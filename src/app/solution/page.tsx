import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "La solution — Welcome Back",
  description:
    "Découvrez comment Welcome Back structure les retours après une absence longue pour les RH, managers, salarié.e.s et directions.",
};

const PHASES = [
  {
    label: "Avant le retour",
    title: "Préparer plutôt qu'improviser.",
    text: "Welcome Back déclenche les bonnes actions au bon moment : informer les parties prenantes, préparer le manager, anticiper les ajustements nécessaires. Rien n'est laissé au hasard.",
    color: "var(--color-lavender)",
  },
  {
    label: "Pendant les premières semaines",
    title: "Accompagner sans surcharger.",
    text: "Des repères clairs sont fournis à chaque acteur : la personne qui reprend, le manager qui accueille, les RH qui coordonnent. Les échanges sont structurés, les étapes balisées.",
    color: "var(--color-pink)",
  },
  {
    label: "Dans la durée",
    title: "Suivre et ajuster.",
    text: "Le suivi ne s'arrête pas à la première semaine. Welcome Back permet d'identifier rapidement les situations qui nécessitent un ajustement et d'agir avant que les difficultés ne s'installent.",
    color: "var(--color-green)",
  },
];

const BENEFITS = [
  {
    role: "RH",
    points: [
      "Vision claire sur tous les retours en cours",
      "Harmonisation des pratiques à l'échelle de l'organisation",
      "Gain de temps sur le suivi et la coordination",
    ],
    color: "var(--color-yellow)",
  },
  {
    role: "Managers",
    points: [
      "Repères concrets pour accompagner sans improviser",
      "Cadre simple, adapté à chaque situation",
      "Moins d'incertitude sur ce qu'il faut faire",
    ],
    color: "var(--color-pink)",
  },
  {
    role: "Salarié.e.s",
    points: [
      "Visibilité sur le déroulé du retour",
      "Retour mieux préparé et anticipé",
      "Accompagnement cohérent tout au long de la reprise",
    ],
    color: "var(--color-green)",
  },
  {
    role: "Directions",
    points: [
      "Meilleure maîtrise des risques liés aux absences longues",
      "Fidélisation renforcée des talents",
      "Cohérence des pratiques RH à l'échelle du groupe",
    ],
    color: "var(--color-lavender)",
  },
];

const SITUATIONS = [
  "Congé maternité",
  "Congé parental",
  "Arrêt maladie",
  "Longue maladie",
  "Aidance",
  "Autres absences longues",
];

const INTERVENTIONS = [
  {
    title: "Cadrage & Diagnostic",
    text: "Un premier échange pour comprendre vos enjeux, identifier les situations de friction et définir vos priorités d'action.",
    tag: "90 minutes avec votre équipe RH ou Direction",
    color: "var(--color-lavender)",
  },
  {
    title: "Accompagnement de reprise",
    text: "Accompagnement structuré d'une situation de reprise en cours afin de sécuriser le retour d'un.e collaborateur.rice.",
    tag: "Accompagnement sur mesure",
    color: "var(--color-pink)",
  },
  {
    title: "Atelier managers",
    text: "Une session pragmatique pour donner aux managers les repères, outils et réflexes nécessaires afin d'accompagner un retour après absence longue.",
    tag: "Format individuel ou collectif",
    color: "var(--color-green)",
  },
];

export default function SolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="La solution"
        eyebrowColor="lavender"
        title="Un cadre simple pour accompagner chaque retour"
        subtitle="Grâce à Welcome Back, chaque personne sait quoi faire, quand le faire et comment le faire."
        seed={4}
      />

      <section className="bg-white py-8 sm:py-10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Welcome Back structure les retours après une absence longue pour
              l&apos;ensemble des acteurs concerné.e.s : salarié.e, manager, RH
              et direction. Chacun reçoit les bonnes informations, au bon
              moment, sans charge administrative supplémentaire.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="lavender">Un accompagnement pensé avant, pendant et après la reprise</Eyebrow>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PHASES.map((phase) => (
              <div
                key={phase.label}
                className="flex flex-col rounded-3xl border border-black/5 bg-white p-8"
              >
                <span
                  className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                  style={{ backgroundColor: `${phase.color}55` }}
                >
                  {phase.label}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--foreground)]">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="green">Ce qui change avec Welcome Back</Eyebrow>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.role}
                className="flex flex-col rounded-3xl p-7"
                style={{ backgroundColor: `${benefit.color}30` }}
              >
                <span
                  className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                  style={{ backgroundColor: `${benefit.color}55` }}
                >
                  {benefit.role}
                </span>
                <ul className="mt-5 space-y-2">
                  {benefit.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm font-light leading-relaxed text-[var(--foreground)]/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-md">
              <Eyebrow color="pink">Situations concernées</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Welcome Back accompagne toutes les absences longues.
              </h2>
            </div>
            <ul className="mt-2 grid grid-cols-2 gap-3">
              {SITUATIONS.map((s) => (
                <li
                  key={s}
                  className="rounded-2xl px-5 py-4 text-sm font-light text-[var(--foreground)]/70"
                  style={{ backgroundColor: "var(--color-lavender)" + "30" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="violet">Nos interventions</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Comment nous intervenons aujourd&apos;hui
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Aujourd&apos;hui, Welcome Back accompagne les organisations qui
              souhaitent mieux préparer et sécuriser les retours après absence
              longue.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {INTERVENTIONS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-3xl border border-black/5 bg-white p-8"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                  {card.text}
                </p>
                <p
                  className="mt-6 text-xs font-medium text-[var(--color-violet)]"
                  style={{
                    borderTop: `1px solid ${card.color}`,
                    paddingTop: "1rem",
                  }}
                >
                  → {card.tag}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-3xl p-8 text-center"
            style={{ backgroundColor: "var(--color-lavender)30" }}
          >
            <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
              Vous avez une situation à préparer ?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-[var(--foreground)]/65">
              Échangeons sur votre contexte et voyons comment Welcome Back peut
              vous accompagner.
            </p>
            
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: "var(--color-violet)" }}
            >
              Nous contacter
            </a>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Planifier un échange"
        subtitle="Échangeons sur votre contexte et découvrez comment Welcome Back peut s'intégrer à votre organisation."
        seed={6}
      />
    </>
  );
}
