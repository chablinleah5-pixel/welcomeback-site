import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "La solution — Welcome Back",
  description:
    "Découvrez le parcours Welcome Back : avant le retour, pendant la reprise, après le retour. Une structure claire pour chaque absence longue.",
};

const PHASES = [
  {
    phase: "Avant le retour",
    color: "var(--color-lavender)",
    title: "Préparer plutôt que subir",
    intro:
      "Tout commence avant le premier jour. Welcome Back aide le manager et les RH à anticiper ce retour, pour que rien ne soit improvisé.",
    items: [
      {
        title: "Préparation du manager",
        text: "Le manager reçoit un cadre clair : ce qui a changé pendant l'absence, les sujets à aborder (ou non), et comment organiser le premier échange.",
      },
      {
        title: "Préparation RH",
        text: "Les RH disposent d'une checklist de conformité et d'organisation : mise à jour des accès, planification de l'entretien de retour, coordination avec le manager.",
      },
      {
        title: "Communication avec la personne",
        text: "La personne en absence peut, si elle le souhaite, être informée en amont du déroulé de son retour, pour aborder la reprise avec des repères.",
      },
    ],
  },
  {
    phase: "Pendant la reprise",
    color: "var(--color-pink)",
    title: "Donner le mode d'emploi des premières semaines",
    intro:
      "Les premiers jours et premières semaines sont accompagnés par des outils concrets, pensés pour structurer sans alourdir le quotidien.",
    items: [
      {
        title: "Guides pas à pas",
        text: "Des guides détaillent, jour après jour, les points d'attention pour le manager et les ressources disponibles pour la personne qui reprend.",
      },
      {
        title: "Checklists opérationnelles",
        text: "Mise à jour des accès, des outils, des dossiers en cours : rien n'est oublié grâce à des listes de vérification dédiées à chaque situation.",
      },
      {
        title: "Rituels d'échange planifiés",
        text: "Des points d'échange entre le manager et la personne sont programmés automatiquement, à des moments clés de la reprise.",
      },
    ],
  },
  {
    phase: "Après le retour",
    color: "var(--color-green)",
    title: "Garder une vision claire dans le temps",
    intro:
      "L'accompagnement ne s'arrête pas après la première semaine. Welcome Back permet de suivre la reprise sur la durée et d'agir tôt en cas de difficulté.",
    items: [
      {
        title: "Suivi dans le temps",
        text: "Des points d'étape sont programmés sur plusieurs semaines, pour s'assurer que la reprise se déroule dans de bonnes conditions.",
      },
      {
        title: "Prévention des rechutes",
        text: "Des signaux de vigilance, définis avec les RH, permettent d'identifier tôt les situations qui nécessitent un ajustement.",
      },
      {
        title: "Visibilité RH",
        text: "Les RH disposent d'un tableau de bord regroupant tous les retours en cours, leur statut et les points d'attention à traiter.",
      },
    ],
  },
];

export default function SolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="La solution"
        eyebrowColor="lavender"
        title="Un parcours structuré, du premier signal au retour pleinement réussi."
        subtitle="Welcome Back accompagne chaque étape du retour après une absence longue : avant, pendant et après la reprise. Chaque acteur sait quoi faire, quand le faire et comment le faire."
        seed={4}
      />

      {PHASES.map((phase, i) => (
        <section
          key={phase.phase}
          className={i % 2 === 1 ? "bg-white py-20 sm:py-28" : "py-20 sm:py-28"}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
              <div>
                <span
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                  style={{ backgroundColor: `${phase.color}55` }}
                >
                  {phase.phase}
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {phase.title}
                </h2>
                <p className="mt-4 text-base font-light leading-relaxed text-[var(--foreground)]/70">
                  {phase.intro}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-1">
                {phase.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/5 bg-white p-7"
                    style={
                      i % 2 === 1
                        ? { backgroundColor: "var(--background)", borderColor: "transparent" }
                        : undefined
                    }
                  >
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CtaBanner seed={6} />
    </>
  );
}
