import Container from "./Container";
import Eyebrow from "./Eyebrow";

const BLOCKS = [
  {
    title: "Avant le retour",
    text: "Chaque retour se prépare. Welcome Back permet à l'organisation d'aborder cette phase avec sérénité, en s'assurant que les bonnes conditions sont réunies bien avant le Jour J.",
    color: "var(--color-lavender)",
  },
  {
    title: "Pendant les premières semaines",
    text: "Les premières semaines sont souvent les plus déterminantes. Welcome Back permet à chaque acteur d'avancer avec clarté — sans improviser, sans surcharger.",
    color: "var(--color-pink)",
  },
  {
    title: "Dans la durée",
    text: "Un retour réussi se mesure dans le temps. Welcome Back aide les organisations à maintenir une attention adaptée et à agir avant que les difficultés ne s'installent.",
    color: "var(--color-green)",
  },
];

export default function SimpleFramework() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="lavender">Le cadre Welcome Back</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Un cadre simple, déjà testé auprès d&apos;organisations publiques
            et privées, pour accompagner chaque retour
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Les retours après une absence longue impliquent plusieurs
            acteurs : salarié.e, manager, RH et direction. Welcome Back
            structure ces moments clés en donnant à chacun.e les bons
            repères au bon moment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-black/5 bg-white p-8"
            >
              <span
                className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[var(--color-violet)]"
                style={{ backgroundColor: `color-mix(in srgb, ${block.color} 33%, white)` }}
              >
                {block.title}
              </span>
              <p className="mt-5 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-[var(--foreground)]/70">
          Chaque acteur.rice sait quoi faire et quand le faire — sans que cela
          ne repose uniquement sur la disponibilité ou la mémoire de chacun.e.
        </p>
      </Container>
    </section>
  );
}
