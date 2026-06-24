import { Metadata } from "next";
import { Shield, TrendingUp, Users, Eye, Award, Zap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les RH — Welcome Back",
  description:
    "Welcome Back donne aux équipes RH la visibilité, la structure et la sérénité nécessaires pour piloter les retours après absence longue à l'échelle de l'organisation.",
};

const BENEFITS = [
  {
    icon: Eye,
    title: "Une visibilité consolidée",
    text: "Les RH disposent d'une vue claire et à jour sur l'ensemble des retours en cours, sans avoir à solliciter managers ou salarié.e.s pour savoir où en est chaque situation.",
    color: "var(--color-yellow)",
  },
  {
    icon: Shield,
    title: "Des retours sécurisés",
    text: "Chaque retour est accompagné d'un cadre structuré qui intègre les obligations légales propres à chaque type d'absence. Les RH savent que rien d'essentiel ne sera oublié.",
    color: "var(--color-lavender)",
  },
  {
    icon: Users,
    title: "Des pratiques harmonisées",
    text: "Quel que soit le manager ou le site, chaque retour s'appuie sur le même cadre. La qualité de l'accompagnement ne dépend plus de la sensibilité ou de l'expérience de chacun.e.",
    color: "var(--color-green)",
  },
  {
    icon: TrendingUp,
    title: "Un pilotage facilité",
    text: "Les RH peuvent identifier rapidement les situations qui nécessitent une attention particulière et intervenir au bon moment, sans avoir à multiplier les relances.",
    color: "var(--color-pink)",
  },
  {
    icon: Award,
    title: "Une traçabilité utile",
    text: "L'accompagnement de chaque retour est documenté de manière fiable, ce qui facilite les échanges internes et renforce la crédibilité de la fonction RH.",
    color: "var(--color-yellow)",
  },
  {
    icon: Zap,
    title: "Un cadre adapté à chaque absence",
    text: "Congé maternité, arrêt maladie, congé parental, aidance : chaque situation est prise en compte dans sa spécificité, sans que les RH aient à tout reconstruire à chaque fois.",
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
        subtitle="Welcome Back donne aux équipes RH la structure et la visibilité nécessaires pour accompagner chaque retour — sans alourdir leur charge de travail ni exposer l'organisation à des risques inutiles."
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
              Aujourd&apos;hui, les retours après absence longue reposent souvent
              sur la disponibilité des RH et la bonne volonté des managers.
              Welcome Back structure ces moments clés à l&apos;échelle de
              l&apos;organisation — pour que chaque retour soit piloté avec
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
