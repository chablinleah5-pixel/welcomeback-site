import { Metadata } from "next";
import { Eye, Compass, Clock, MessageCircle, Shield, HeartHandshake } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les salarié.e.s — Welcome Back",
  description:
    "Welcome Back donne aux salarié.e.s de la clarté et des repères pour aborder leur retour après une absence longue avec plus de sérénité.",
};

const BENEFITS = [
  {
    icon: Eye,
    title: "Une meilleure visibilité sur la reprise",
    text: "Revenir après une absence longue, c'est souvent avancer dans le flou. Welcome Back permet à la personne qui reprend de mieux comprendre ce qui l'attend, avant même de franchir la porte.",
    color: "var(--color-green)",
  },
  {
    icon: Compass,
    title: "Des repères pour reprendre progressivement",
    text: "Les premières semaines après un retour sont rarement simples. Welcome Back offre un cadre qui aide à reprendre pied, sans avoir à tout redécouvrir seul.e ni à tout gérer en même temps.",
    color: "var(--color-lavender)",
  },
  {
    icon: Clock,
    title: "Un accompagnement adapté au rythme de reprise",
    text: "Chaque retour est différent. Welcome Back permet à chaque personne d'être accompagnée à un rythme qui respecte sa situation, sans pression ni précipitation.",
    color: "var(--color-pink)",
  },
  {
    icon: MessageCircle,
    title: "Des espaces de dialogue pour ajuster la reprise",
    text: "La personne qui revient n'est pas seule face à sa reprise. Welcome Back crée les conditions pour que des échanges aient lieu — au bon moment, sur les bons sujets.",
    color: "var(--color-yellow)",
  },
  {
    icon: Shield,
    title: "Un cadre rassurant",
    text: "Savoir que l'organisation a anticipé et structuré ce retour change beaucoup de choses. Cela réduit l'incertitude et permet d'aborder la reprise avec davantage de confiance.",
    color: "var(--color-green)",
  },
  {
    icon: HeartHandshake,
    title: "Une reprise accompagnée",
    text: "Welcome Back ne se substitue pas aux relations humaines : il crée les conditions pour que chacun.e — la personne qui revient, son manager, les RH — soit bien positionné.e pour que le retour se passe bien.",
    color: "var(--color-lavender)",
  },
];

export default function SalariesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les salarié.e.s"
        eyebrowColor="violet"
        bgColor="green"
        title="Reprendre le travail avec des repères clairs."
        subtitle="Après un congé maternité, un arrêt maladie ou un congé parental, revenir au travail s'accompagne souvent d'incertitudes. Welcome Back apporte de la clarté sur les conditions du retour, sans rien imposer."
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
              Welcome Back ne s&apos;immisce pas dans la vie personnelle de
              la personne qui reprend. Son rôle est d&apos;aider
              l&apos;organisation à mieux préparer et structurer le retour —
              pour que la personne n&apos;ait pas à porter seule la charge de
              cette transition.
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
