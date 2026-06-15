import Container from "./Container";

const STATS = [
  {
    value: "1 salarié.e sur 5",
    label: "connaîtra une absence longue au cours de sa carrière professionnelle.",
    color: "var(--color-yellow)",
  },
  {
    value: "Les premières semaines",
    label: "sont déterminantes pour la qualité et la durabilité d'une reprise.",
    color: "var(--color-pink)",
  },
  {
    value: "Sans cadre partagé",
    label: "chaque retour repose sur la bonne volonté individuelle d'un manager ou d'un.e RH.",
    color: "var(--color-green)",
  },
  {
    value: "Une reprise mal accompagnée",
    label: "augmente le risque de nouvelle absence dans les mois qui suivent.",
    color: "var(--color-lavender)",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pourquoi structurer le retour change tout.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-4">
              <span
                className="h-1.5 w-12 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              <p className="font-display text-xl font-semibold leading-snug text-[var(--foreground)]">
                {stat.value}
              </p>
              <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
