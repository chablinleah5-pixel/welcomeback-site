import Container from "./Container";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    phase: "Avant l'absence (quand celle-ci est planifiée)",
    title: "Suivi et rappels pour sécuriser la reprise",
    color: "var(--color-lavender)",
  },
  {
    phase: "En amont de la reprise",
    title: "Préparation manager et RH",
    color: "var(--color-pink)",
  },
  {
    phase: "Après le retour",
    title: "Rappels, guides, checklists, trames, suivi tripartite (RH, manager, employé.e)",
    color: "var(--color-green)",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="lavender">Comment ça fonctionne</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Un parcours structuré, du premier signal au retour pleinement
            réussi.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.phase}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-8"
            >
              <span
                className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                style={{ backgroundColor: `${step.color}55` }}
              >
                {step.phase}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
