import { Metadata } from "next";
import { ListChecks, MessageSquareText, HeartHandshake, Calendar, BookOpenCheck, Compass } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BenefitsGrid from "@/components/BenefitsGrid";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Pour les managers — Welcome Back",
  description:
    "Welcome Back aide les managers à savoir quoi faire, disposer de scripts et guides concrets, et accompagner un retour après absence longue sans être intrusif.",
};

const BENEFITS = [
  {
    icon: Compass,
    title: "Savoir quoi faire",
    text: "Un plan d'action clair, étape par étape, adapté au type d'absence et au contexte de la personne qui revient.",
    color: "var(--color-pink)",
  },
  {
    icon: BookOpenCheck,
    title: "Des guides prêts à l'emploi",
    text: "Des guides pratiques expliquent comment préparer le retour, organiser le premier jour et structurer les premières semaines.",
    color: "var(--color-yellow)",
  },
  {
    icon: MessageSquareText,
    title: "Des scripts pour les échanges",
    text: "Des propositions de formulations pour aborder le retour, poser les bonnes questions et fixer un cadre clair, sans maladresse.",
    color: "var(--color-lavender)",
  },
  {
    icon: HeartHandshake,
    title: "Accompagner sans être intrusif",
    text: "Le manager dispose de repères pour soutenir la reprise tout en respectant l'espace et le rythme de la personne concernée.",
    color: "var(--color-green)",
  },
  {
    icon: Calendar,
    title: "Des rituels planifiés automatiquement",
    text: "Les points d'échange sont programmés au bon moment, sans que le manager ait à y penser ou à improviser un calendrier.",
    color: "var(--color-pink)",
  },
  {
    icon: ListChecks,
    title: "Des checklists opérationnelles",
    text: "Accès, outils, dossiers en cours, organisation de l'équipe : tout ce qui doit être prêt avant le retour est listé et suivi.",
    color: "var(--color-yellow)",
  },
];

export default function ManagersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pour les managers"
        eyebrowColor="pink"
         title="Le bon geste, au bon moment. Sans improvisation."
        subtitle="Accompagner un retour après une absence longue est rarement enseigné. Welcome Back donne aux managers les outils concrets pour le faire avec justesse, dans le respect de chacun.e."

6. src/app/salaries/page.tsx
Ligne ~11, remplacez :
tsx    "Welcome Back donne aux salarié.e.s de la visibilité, des repères et réduit le stress lié au retour après une absence longue : congé maternité, arrêt maladie, burn-out, congé parental.",
par :
tsx    "Welcome Back donne aux salarié.e.s de la visibilité, des repères et réduit le stress lié au retour après une absence longue : congé maternité, arrêt maladie, congé parental.",
Ligne ~60, remplacez :
tsx        subtitle="Après un congé maternité, un arrêt maladie, un burn-out ou un congé parental, revenir au travail s'accompagne souvent d'incertitudes. Welcome Back apporte de la clarté sur l'organisation du retour — sans rien imposer."
par :
tsx        subtitle="Après un congé maternité, un arrêt maladie ou un congé parental, revenir au travail s'accompagne souvent d'incertitudes. Welcome Back apporte de la clarté sur l'organisation du retour, sans rien imposer."
Ligne ~76, remplacez :
tsx              bonnes conditions, à chacun son rythme.
par :
tsx              bonnes conditions, à chacun.e son rythme.

Note : "burn-out" subsiste encore dans src/app/layout.tsx (métadonnées SEO globales) et src/components/Footer.tsx — vous n'aviez mentionné que la section homepage et la page Salariés. Dites-moi si vous voulez que je le retire aussi de ces deux endroits.
Build vérifié OK pour tous ces changements.Vous avez dit : retirer burn out de partoutretirer burn out de partout17:14Claude a répondu : Build OK, "burn-out" entièrement retiré.Exécuté 3 commandes, a consulté 2 fichiers, 2 fichiers modifiésExécuté 3 commandes, a consulté 2 fichiers, 2 fichiers modifiésBuild OK, "burn-out" entièrement retiré. Deux fichiers à mettre à jour sur GitHub :

src/app/layout.tsx
Lignes ~8-18, remplacez :
tsx    "Welcome Back aide les RH, managers et salarié.e.s à structurer et automatiser l'accompagnement des retours après une absence longue : congé maternité, arrêt maladie, burn-out, congé parental, aidance.",
  keywords: [
    "retour au travail",
    "absence longue",
    "RH",
    "congé maternité",
    "burn-out",
    "reprise du travail",
    "SaaS RH",
  ],
par :
tsx    "Welcome Back aide les RH, managers et salarié.e.s à structurer et automatiser l'accompagnement des retours après une absence longue : congé maternité, arrêt maladie, congé parental, aidance.",
  keywords: [
    "retour au travail",
    "absence longue",
    "RH",
    "congé maternité",
    "reprise du travail",
    "SaaS RH",
  ],

src/components/Footer.tsx
Lignes ~37-39, remplacez :
tsx            La solution qui structure et automatise l&apos;accompagnement des
            retours après une absence longue : maternité, maladie, burn-out,
            parentalité, aidance.
par :
tsx            La solution qui structure et automatise l&apos;accompagnement des
            retours après une absence longue : maternité, maladie,
            parentalité, aidance.Souhaitez-vous être averti lorsque Claude répond ?Notifier
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
              donne une base solide. Les guides et checklists structurent la
              démarche, tout en laissant la place à l&apos;adaptation au
              contexte de chaque personne et de chaque équipe.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Donnez à vos managers les bons réflexes pour chaque retour."
        subtitle="Découvrez en démonstration les guides et rituels proposés par Welcome Back."
        seed={22}
      />
    </>
  );
}
