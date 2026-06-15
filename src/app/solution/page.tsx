import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "La solution — Welcome Back",
  description:
    "Découvrez le parcours Welcome Back : avant le retour, pendant la reprise, après le retour. Une structure claire pour chaque absence longue.",
};

const STEPS = [
  {
    phase: "Avant le retour",
    title: "Préparer",
    text: "Les bonnes actions sont déclenchées avant la reprise.",
    color: "var(--color-lavender)",
  },
  {
    phase: "Pendant la reprise",
    title: "Accompagner",
    text: "Chaque acteur reçoit les bons repères au bon moment.",
    color: "var(--color-pink)",
  },
  {
    phase: "Après le retour",
    title: "Suivre",
    text: "La reprise reste visible et pilotable dans le temps.",
    color: "var(--color-green)",
  },
];

export default function SolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="La solution"
        eyebrowColor="lavender"
        title="Un parcours structuré, du premier signal au retour pleinement réussi."
        subtitle="Welcome Back accompagne chaque étape du retour après une absence longue : avant, pendant et après la reprise. Chaque acteur sait quoi faire, quand le faire et comment le faire."
        seed={4}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow color="lavender">Comment ça fonctionne</Eyebrow>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
                <p className="mt-2.5 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner seed={6} />
    </>
  );
}
