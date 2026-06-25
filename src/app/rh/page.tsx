import { Metadata } from "next";
import { Shield, TrendingUp, Users, Eye, Award, Zap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les RH — Welcome Back",
  description:
    "Welcome Back donne aux équipes RH la structure et la sérénité nécessaires pour piloter les retours après absence longue à l'échelle de l'organisation.",
};

const BENEFITS = [
  {
    icon: Eye,
    title: "Une vision consolidée",
    text: "Les équipes RH disposent d'une lecture claire des situations de reprise en cours - sans dispersion, sans effort de reconstitution, sans dépendre des remontées individuelles.",
    color: "var(--color-yellow)",
  },
  {
    icon: Shield,
    title: "Des retours sécurisés",
    text: "Chaque situation de reprise s'appuie sur un cadre structuré qui sécurise les étapes essentielles - quels que soient le type d'absence ou le contexte de l'organisation.",
    color: "var(--color-lavender)",
  },
  {
    icon: Users,
    title: "Des pratiques harmonisées",
    text: "Quel que soit le manager ou le site, chaque retour s'appuie sur le même cadre. La qualité de l'accompagnement ne dépend plus d'une personne, ni d'une équipe en particulier.",
    color: "var(--color-green)",
  },
  {
    icon: TrendingUp,
    title: "Un pilotage facilité",
    text: "Les équipes RH peuvent identifier rapidement les situations qui nécessitent une attention particulière et agir de manière proactive - avant que les difficultés ne s'installent.",
    color: "var(--color-pink)",
  },
  {
    icon: Award,
    title: "Plus de cohérence dans l'accompagnement",
    text: "Welcome Back permet aux équipes RH de s'appuyer sur un cadre commun pour accompagner chaque reprise avec le même niveau d'attention et d'exigence, quelle que soit la situation.",
    color: "var(--color-yellow)",
  },
  {
    icon: Zap,
    title: "Un cadre adapté à chaque absence",
    text: "Congé maternité, arrêt maladie, congé parental, aidance : chaque type d'absence appelle un accompagnement spécifique. Welcome Back intègre cette diversité sans alourdir le travail des équipes RH.",
    color: "var(--color-lavender)",
  },
];

export default function RHPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les RH"
        eyebrowColor="lavender"
        bgColor="yellow"
        title="Pilotez les retours après absence longue avec sérénité."
        subtitle="Welcome Back donne aux équipes RH la structure et la visibilité nécessaires pour accompagner chaque reprise - sans alourdir leur charge de travail ni exposer l'organisation à des risques inutiles."
        seed={11}
      />

      <BenefitsGrid benefits={BENEFITS} />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un cadre partagé, pas une charge supplémentaire.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Aujourd&apos;hui, les retours après absence longue reposent trop
              souvent sur la disponibilité des équipes RH et la bonne volonté
              des managers. Welcome Back structure ces moments à l&apos;échelle
              de l&apos;organisation - pour que chaque reprise soit pilotée avec
              la même rigueur, quelle que soit la situation.
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
