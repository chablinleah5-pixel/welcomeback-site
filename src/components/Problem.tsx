import Container from "./Container";
import Eyebrow from "./Eyebrow";

const PROBLEMS = [
  {
    title: "Des retours mal préparés",
    text: "Le retour est décidé, mais personne ne sait précisément qui doit faire quoi, ni quand. Le jour J arrive sans cadre clair.",
  },
  {
    title: "Des pratiques disparates",
    text: "Chaque manager improvise à sa façon. L'expérience du retour dépend de la personne qui l'accompagne, pas d'un process partagé.",
  },
  {
    title: "Un suivi qui s'arrête trop vite",
    text: "Les premiers jours sont gérés, puis plus rien. Les difficultés de reprise ne sont détectées que lorsqu'elles sont déjà installées.",
  },
  {
    title: "Une charge mentale pour les RH",
    text: "Les équipes RH gardent ces dossiers en tête, dans des tableurs ou des mails épars, sans visibilité d'ensemble ni traçabilité.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="pink">Le constat</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Le retour après une absence longue est un moment charnière
            souvent géré au cas par cas.
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Congé maternité, arrêt maladie, burn-out, congé parental, aidance,
            adoption : ces absences sont fréquentes, mais leur retour reste
            rarement structuré. Le résultat : de l&apos;incertitude pour
            tout le monde, et un risque accru de rechute ou de nouvelle
            absence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROBLEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white p-7"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
