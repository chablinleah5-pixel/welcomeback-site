import { Metadata } from "next";
import { Clock, ShieldCheck, LayoutGrid, BarChart3, FileCheck2, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les RH — Welcome Back",
  description:
    "Welcome Back fait gagner du temps aux équipes RH, garantit la conformité des retours après absence longue et homogénéise les pratiques entre managers et sites.",
};

const BENEFITS = [
  {
    icon: Clock,
    title: "Gain de temps",
    text: "Fini les suivis manuels dans des tableurs : les checklists, rappels et plannings de retour sont générés et suivis automatiquement.",
    color: "var(--color-yellow)",
  },
  {
    icon: ShieldCheck,
    title: "Conformité",
    text: "Les obligations liées à chaque type d'absence (entretien de retour, visite médicale, accès, etc.) sont intégrées au parcours, avec une traçabilité claire.",
    color: "var(--color-lavender)",
  },
  {
    icon: LayoutGrid,
    title: "Homogénéisation des pratiques",
    text: "Tous les managers s'appuient sur le même cadre, quel que soit le site ou l'équipe. La qualité du retour ne dépend plus d'une personne.",
    color: "var(--color-green)",
  },
  {
    icon: BarChart3,
    title: "Visibilité d'ensemble",
    text: "Un tableau de bord centralise tous les retours en cours, leur statut, et les points qui nécessitent une attention RH.",
    color: "var(--color-pink)",
  },
  {
    icon: FileCheck2,
    title: "Traçabilité des actions",
    text: "Chaque étape réalisée est horodatée, pour documenter l'accompagnement et faciliter les échanges avec les parties prenantes internes.",
    color: "var(--color-yellow)",
  },
  {
    icon: Users,
    title: "Un cadre adapté à chaque absence",
    text: "Congé maternité, arrêt maladie, burn-out, congé parental, aidance, adoption, congé supplémentaire de naissance : chaque parcours est ajusté au contexte.",
    color: "var(--color-lavender)",
  },
];

export default function RHPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les RH"
        eyebrowColor="lavender"
        title="Reprenez la main sur les retours après absence longue."
        subtitle="Welcome Back donne aux équipes RH un cadre fiable pour piloter chaque retour : moins de charge mentale, plus de conformité, et une visibilité claire sur l'ensemble des dossiers en cours."
        seed={11}
      />

      <BenefitsGrid benefits={BENEFITS} />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un dossier de retour, centralisé et structuré.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Chaque retour devient un dossier suivi de bout en bout : type
              d&apos;absence, échéances, étapes réalisées, personnes
              impliquées et points de vigilance. Les RH gardent une vue
              d&apos;ensemble, sans avoir à relancer chaque manager.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Donnez à vos équipes RH un cadre commun pour chaque retour."
        subtitle="Voyons ensemble comment Welcome Back s'intègre à vos processus RH existants."
        seed={12}
      />
    </>
  );
}
