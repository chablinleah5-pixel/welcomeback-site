import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

const CARDS = [
  {
    title: "Plus de visibilité sur les retours en cours",
    color: "var(--color-lavender)",
  },
  {
    title: "Une expérience homogène quel que soit le manager",
    color: "var(--color-pink)",
  },
  {
    title: "Une meilleure coordination entre RH et opérationnel.le.s",
    color: "var(--color-yellow)",
  },
  {
    title: "Une réduction des risques de désengagement ou de réabsence",
    color: "var(--color-green)",
  },
];

export default function ForLeadershipTeaser() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="violet">Pour les directions</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Transformer un moment à risque en reprise durable
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Les retours après une absence longue ont un impact direct sur
            l&apos;organisation : continuité de l&apos;activité, charge des
            équipes, engagement des collaborateurs.rices, risque de
            réabsence, rétention des talents. Welcome Back permet de
            structurer ces moments clés à l&apos;échelle de
            l&apos;organisation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl p-6"
              style={{ backgroundColor: `${card.color}30` }}
            >
              <p className="font-display text-base font-semibold leading-snug text-[var(--foreground)]">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/entreprises"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-violet)]"
        >
          En savoir plus pour les directions
          <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
