import { Metadata } from "next";
import { Eye, Map, HeartHandshake, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les salarié.e.s — Welcome Back",
  description:
    "Welcome Back donne aux salarié.e.s de la visibilité, des repères et réduit le stress lié au retour après une absence longue : congé maternité, arrêt maladie, burn-out, congé parental.",
};

const BENEFITS = [
  {
    icon: Eye,
    title: "Visibilité sur le retour",
    text: "Avant même le premier jour, la personne sait à quoi s'attendre : organisation, interlocuteurs, étapes prévues.",
    color: "var(--color-green)",
  },
  {
    icon: Map,
    title: "Des repères concrets",
    text: "Un fil conducteur pour les premiers jours et premières semaines, pour ne pas avoir à tout redécouvrir seul.e.",
    color: "var(--color-lavender)",
  },
  {
    icon: Clock3,
    title: "Un rythme de reprise respecté",
    text: "Les rituels d'échange sont espacés dans le temps, pour accompagner la reprise progressivement, sans précipitation.",
    color: "var(--color-pink)",
  },
  {
    icon: MessageCircle,
    title: "Un espace d'échange dédié",
    text: "Des points réguliers avec le manager permettent d'exprimer ce qui fonctionne bien et ce qui nécessite un ajustement.",
    color: "var(--color-yellow)",
  },
  {
    icon: ShieldCheck,
    title: "Un cadre rassurant",
    text: "Savoir que l'entreprise a prévu et structuré ce retour réduit l'incertitude et le stress associés à la reprise.",
    color: "var(--color-green)",
  },
  {
    icon: HeartHandshake,
    title: "Une reprise non isolée",
    text: "La personne n'est pas seule à gérer son retour : le manager et les RH disposent du même cadre, pour une reprise coordonnée.",
    color: "var(--color-lavender)",
  },
];

export default function SalariesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les salarié.e.s"
        eyebrowColor="green"
        title="Reprendre le travail avec des repères clairs."
        subtitle="Après un congé maternité, un arrêt maladie, un burn-out ou un congé parental, revenir au travail s'accompagne souvent d'incertitudes. Welcome Back apporte de la clarté sur l'organisation du retour — sans rien imposer."
        seed={31}
      />

      <BenefitsGrid benefits={BENEFITS} />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un accompagnement organisationnel, pas un suivi personnel.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Welcome Back se concentre sur l&apos;organisation du retour : ce
              qui est prévu, par qui, et à quel moment. L&apos;objectif est de
              donner des repères clairs pour que la reprise se déroule dans de
              bonnes conditions, à chacun son rythme.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Vous accompagnez des salarié.e.s en retour d'absence longue ?"
        subtitle="Découvrez comment Welcome Back peut s'intégrer à votre organisation."
        seed={32}
      />
    </>
  );
}
