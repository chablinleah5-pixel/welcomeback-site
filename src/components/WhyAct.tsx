import Container from "./Container";
import Eyebrow from "./Eyebrow";

const STATS = [
  {
    value: "80 %",
    label:
      "des femmes déclarent ne pas bénéficier de l'ensemble de leurs droits au retour de congé maternité.",
    color: "var(--color-pink)",
  },
  {
    value: "44 %",
    label:
      "des salarié.e.s estiment qu'aucune action particulière n'est mise en place lors d'un retour après une absence longue.",
    color: "var(--color-yellow)",
  },
  {
    value: "73 jours",
    label:
      "de réduction moyenne de l'absentéisme lorsqu'un accompagnement structuré existe.",
    color: "var(--color-green)",
  },
];

const STAKES = [
  "Un risque accru de départ après le retour",
  "Un risque de nouvel arrêt de travail",
  "Du temps RH et managérial mobilisé dans l'urgence",
  "Une perte d'engagement et de performance",
  "Une expérience collaborateur dégradée",
];

export default function WhyAct() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="pink">Pourquoi agir</Eyebrow>
          <p className="mt-5 text-lg font-light leading-relaxed text-[var(--foreground)]/80">
            Chaque retour après une absence longue est un moment à risque
            pour l&apos;engagement, la performance et la rétention des
            talents. De quoi entraîner des coûts humains, organisationnels
            et financiers importants. Pourtant, ce moment charnière est
            rarement préparé.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-4">
              <span
                className="h-1.5 w-12 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              <p className="font-display text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs font-light text-[var(--foreground)]/45">
          Sources : Issence, Ayming, Malakoff Humanis.
        </p>

        <div className="mt-12 max-w-2xl">
          <p className="text-base font-medium text-[var(--foreground)]">
            Derrière ces chiffres se cachent des conséquences très concrètes
          </p>
          <ul className="mt-4 space-y-2">
            {STAKES.map((stake) => (
              <li
                key={stake}
                className="text-sm font-light leading-relaxed text-[var(--foreground)]/70"
              >
                — {stake}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back aide les organisations à anticiper ces situations
            plutôt qu&apos;à les subir.
          </p>
        </div>
      </Container>
    </section>
  );
}
