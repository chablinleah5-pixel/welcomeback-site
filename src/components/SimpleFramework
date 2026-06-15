import Container from "./Container";
import Eyebrow from "./Eyebrow";

const BLOCKS = [
  {
    title: "Avant le retour",
    text: "Préparer la reprise et anticiper les actions nécessaires.",
    color: "var(--color-lavender)",
  },
  {
    title: "Pendant les premières semaines",
    text: "Structurer les échanges et sécuriser la transition.",
    color: "var(--color-pink)",
  },
  {
    title: "Dans la durée",
    text: "Suivre les retours en cours et identifier rapidement les besoins d'ajustement.",
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
            Un cadre simple pour accompagner chaque retour
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
                style={{ backgroundColor: `${block.color}55` }}
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
          Chaque acteur reçoit les bonnes informations au bon moment, sans
          charge administrative supplémentaire.
        </p>
      </Container>
    </section>
  );
}
