import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

const CARDS = [
  {
    title: "Réduire les coûts cachés",
    text: "Absentéisme, désengagement, turnover, désorganisation des équipes : les conséquences d'un retour mal préparé dépassent largement la seule période de reprise.",
    color: "var(--color-lavender)",
  },
  {
    title: "Sécuriser les pratiques",
    text: "Les obligations légales et les bonnes pratiques sont intégrées dans un cadre commun partagé par les RH et les managers.",
    color: "var(--color-pink)",
  },
  {
    title: "Piloter un sujet souvent invisible",
    text: "Les directions disposent d'une vision claire des retours en cours et des points d'attention à anticiper.",
    color: "var(--color-yellow)",
  },
  {
    title: "Renforcer l'attractivité de l'organisation",
    text: "La qualité de l'accompagnement des retours contribue directement à l'expérience collaborateur.rice et à la marque employeur.",
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
              className="flex flex-col rounded-3xl p-6"
              style={{ backgroundColor: `${card.color}30` }}
            >
              <p className="font-display text-base font-semibold leading-snug text-[var(--foreground)]">
                {card.title}
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-[var(--foreground)]/70">
          Un retour bien accompagné est un enjeu humain. C&apos;est aussi un
          enjeu de performance, de fidélisation et de gestion des risques
          pour l&apos;organisation.
        </p>

        <Link
          href="/entreprises"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-violet)]"
        >
          En savoir plus pour les directions
          <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
