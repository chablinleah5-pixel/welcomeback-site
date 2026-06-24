import { Metadata } from "next";
import { TrendingUp, ShieldCheck, Award, Users2, Building2, LineChart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les directions — Welcome Back",
  description:
    "Welcome Back aide les directions à structurer les retours après une absence longue à l'échelle de l'organisation : visibilité, homogénéité, coordination RH-opérationnel et réduction des risques de réabsence.",
};

const IMPACT_POINTS = [- {point}
  "Continuité de l'activité",
  "Charge des équipes",
  "Engagement des collaborateurs.rices",
  "Risque de réabsence",
  "Rétention des talents",
];

const LEADERSHIP_CARDS = [
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

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Réduire le risque de nouvelle absence",
    text: "Un retour bien accompagné diminue significativement le risque de rechute ou de nouvelle absence longue dans les mois qui suivent.",
    color: "var(--color-green)",
  },
  {
    icon: Users2,
    title: "Préserver les talents",
    text: "Un retour mal vécu est l'un des moments où une personne envisage de quitter l'entreprise. Welcome Back en fait au contraire un moment de fidélisation.",
    color: "var(--color-pink)",
  },
  {
    icon: Award,
    title: "Renforcer la marque employeur",
    text: "La manière dont une entreprise accompagne ses absences longues est de plus en plus un critère d'attractivité, en interne comme en externe.",
    color: "var(--color-yellow)",
  },
  {
    icon: ShieldCheck,
    title: "Sécuriser la conformité",
    text: "Les obligations légales liées aux différents types d'absence sont intégrées au parcours, avec une traçabilité claire pour l'entreprise.",
    color: "var(--color-lavender)",
  },
  {
    icon: Building2,
    title: "Homogénéiser à l'échelle du groupe",
    text: "Quel que soit le site, l'équipe ou le.la manager, chaque retour suit le même cadre, pour une expérience cohérente partout dans l'organisation.",
    color: "var(--color-green)",
  },
  {
    icon: LineChart,
    title: "Piloter avec des données fiables",
    text: "La direction dispose d'une vision agrégée des retours en cours et de leur évolution, pour suivre un indicateur encore trop souvent invisible.",
    color: "var(--color-pink)",
  },
];

export default function EntreprisesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les directions"
        eyebrowColor="lavender"
        bgColor="violet"
        title="Transformer un moment à risque en reprise durable."
        subtitle="Les absences longues font partie de la vie de toute entreprise. La façon dont les retours sont accompagnés a un impact direct sur la rétention, la marque employeur et la conformité."
        seed={41}
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Les retours après une absence longue ont un impact direct sur
              l&apos;organisation :
            </p>
            <ul className="mt-4 space-y-2">
              {IMPACT_POINTS.map((point) => (
                <li
                  key={point}
                  className="text-base font-light leading-relaxed text-[var(--foreground)]/70"
                >
                  — {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Pourtant, ces situations reposent encore souvent sur des
              pratiques hétérogènes selon les équipes ou les managers.
              Welcome Back permet de structurer ces moments clés à
              l&apos;échelle de l&apos;organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {LEADERSHIP_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl p-8"
                style={{ backgroundColor: `color-mix(in srgb, ${card.color} 19%, white)` }}
              >
                <p className="font-display text-lg font-semibold leading-snug text-[var(--foreground)]">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BenefitsGrid benefits={BENEFITS} />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un investissement qui se mesure.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Le coût d&apos;un retour mal accompagné est souvent invisible :
              nouvelle absence, départ, perte de savoir-faire, désorganisation
              d&apos;équipe. Welcome Back transforme ce point aveugle en un
              processus structuré, suivi et amélioré dans le temps, à
              l&apos;échelle de toute l&apos;entreprise.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Faites du retour après absence longue un sujet stratégique."
        subtitle="Échangeons sur les enjeux de votre organisation et sur la manière dont Welcome Back peut s'y intégrer."
        seed={42}
      />
    </>
  );
}
