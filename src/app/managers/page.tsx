import { Metadata } from "next";
import { Compass, BookOpen, MessageCircle, HeartHandshake, CalendarCheck, CheckSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les managers — Welcome Back",
  description:
    "Welcome Back aide les managers à accompagner un retour après absence longue avec clarté et sérénité - sans improviser, sans maladresse.",
};

const BENEFITS = [
  {
    icon: Compass,
    title: "Des repères clairs pour accompagner",
    text: text: "Le manager n'a pas à tout inventer. Welcome Back lui donne un cadre pour accompagner la reprise avec assurance.",
    color: "var(--color-pink)",
  },
  {
    icon: BookOpen,
    title: "Un appui pour les moments clés",
    text: "Chaque moment sensible du retour appelle une attention particulière. Welcome Back aide le manager à s'y préparer avec la bonne posture, sans avoir à construire sa propre approche à partir de rien.",
    color: "var(--color-yellow)",
  },
  {
    icon: MessageCircle,
    title: "Une aide pour préparer les échanges",
    text: "Aborder le retour avec la bonne posture n'est pas inné. Welcome Back aide le manager à identifier ce qui compte et à l'aborder avec justesse - sans maladresse ni excès.",
    color: "var(--color-lavender)",
  },
  {
    icon: HeartHandshake,
    title: "Accompagner sans être intrusif",
    text: "Welcome Back aide le manager à trouver le juste équilibre : être présent et attentif, tout en respectant l'espace et le rythme de la personne qui reprend.",
    color: "var(--color-green)",
  },
  {
    icon: CalendarCheck,
    title: "Un accompagnement structuré dans le temps",
    text: "La reprise s'étale sur plusieurs semaines. Welcome Back donne au manager un cadre pour maintenir cet accompagnement dans la durée - sans que tout repose sur sa seule initiative.",
    color: "var(--color-pink)",
  },
  {
    icon: CheckSquare,
    title: "Une meilleure préparation du retour",
    text: "Avant même le premier jour, Welcome Back aide le manager à s'assurer que les conditions d'une reprise réussie sont en place - pour la personne qui revient comme pour l'équipe.",
    color: "var(--color-yellow)",
  },
];

export default function ManagersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les managers"
        eyebrowColor="violet"
        bgColor="pink"
        title="Le bon geste, au bon moment. Sans improvisation."
        subtitle="Accompagner un retour après une absence longue est rarement enseigné. Welcome Back donne aux managers les repères nécessaires pour le faire avec justesse - dans le respect de chacun.e."
        seed={21}
      />

      <BenefitsGrid benefits={BENEFITS} />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un cadre, pas un script à suivre à la lettre.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
              Welcome Back ne remplace pas le jugement du manager : il lui
              donne une base solide pour agir avec confiance. Le cadre
              structure la démarche, tout en laissant la place à
              l&apos;adaptation au contexte de chaque personne et de chaque
              équipe.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Donnez à vos managers les bons repères pour chaque retour."
        subtitle="Découvrez comment Welcome Back aide vos managers à accompagner chaque reprise avec plus de sérénité."
        seed={22}
      />
    </>
  );
}
