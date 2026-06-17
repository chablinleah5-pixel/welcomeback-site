import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function WhyWeExist() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow color="lavender">Pourquoi Welcome Back existe</Eyebrow>

          <p className="mt-6 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back est né d&apos;un constat simple : la qualité d&apos;un
            retour au travail après une absence longue dépend encore trop
            souvent du hasard.
          </p>

          <div className="mt-5 space-y-1 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            <p>Du manager sur lequel on tombe,</p>
            <p>du temps dont disposent les RH,</p>
            <p>des pratiques en place dans l&apos;organisation,</p>
            <p>du cadre mis en place pour accompagner la reprise.</p>
          </div>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Pourtant, ces retours sont des moments déterminants. Ils ont des
            conséquences humaines, mais aussi organisationnelles et économiques
            importantes pour les organisations.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Après avoir accompagné des équipes, vécu plusieurs retours de congé
            maternité et traversé moi-même un arrêt pour épuisement
            professionnel, j&apos;ai réalisé qu&apos;il n&apos;existait pas de
            cadre simple permettant d&apos;accompagner systématiquement ces
            moments de transition.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            C&apos;est pour cette raison que Welcome Back a été créé.
          </p>

          <p className="mt-3 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Pour que chaque retour puisse être préparé, suivi et accompagné,
            quel que soit le contexte ou l&apos;organisation.
          </p>

  

          <div className="mt-8 border-l-2 border-[var(--color-violet)]/30 pl-5">
            <p className="font-display text-base font-semibold text-[var(--foreground)]">
              Léah,
            </p>
            <p className="mt-0.5 text-sm font-light text-[var(--foreground)]/55">
              Fondatrice de Welcome Back
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
