import { Metadata } from "next";
import { Compass, BookOpen, MessageCircle, HeartHandshake, CalendarCheck, CheckSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les managers — Welcome Back",
  description:
    "Welcome Back aide les managers à accompagner un retour après absence longue avec clarté et sérénité — sans improviser, sans surcharger, sans risquer de maladresse.",
};

const BENEFITS = [
  {
    icon: Compass,
    title: "Savoir comment agir",
    text: "Le manager dispose de repères clairs pour aborder chaque étape du retour — avant, pendant et après la reprise — sans avoir à tout construire seul.e à partir de rien.",
    color: "var(--color-pink)",
  },
  {
    icon: BookOpen,
    title: "Des ressources pour les moments clés",
    text: "Chaque moment sensible du retour est accompagné de ressources adaptées pour aider le manager à trouver la bonne posture et les bons mots.",
    color: "var(--color-yellow)",
  },
  {
    icon: MessageCircle,
    title: "Préparer des échanges adaptés",
    text: "Le manager est guidé pour aborder les sujets qui comptent : la reprise, l'organisation, le rythme. Sans maladresse, sans excès d'intrusion.",
    color: "var(--color-lavender)",
  },
  {
    icon: HeartHandshake,
    title: "Accompagner sans être intrusif",
    text: "Welcome Back aide le manager à trouver le juste équilibre — être présent et attentif, tout en respectant l'espace et le rythme de la personne qui reprend.",
    color: "var(--color-green)",
  },
  {
    icon: CalendarCheck,
    title: "Un accompagnement structuré dans le temps",
    text: "La reprise s'étale sur plusieurs semaines. Le manager bénéficie d'un cadre qui structure cet accompagnement dans la durée, sans que tout repose sur sa seule mémoire.",
    color: "var(--color-pink)",
  },
  {
    icon: CheckSquare,
    title: "Une meilleure préparation du retour",
    text: "Avant même le premier jour, le manager est accompagné pour s'assurer que les conditions d'une reprise réussie sont en place — pour la personne qui revient comme pour l'équipe.",
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
        subtitle="Accompagner un retour après une absence longue est rarement enseigné. Welcome Back donne aux managers les repères nécessaires pour le faire avec justesse, dans le respect de chacun.e."
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
