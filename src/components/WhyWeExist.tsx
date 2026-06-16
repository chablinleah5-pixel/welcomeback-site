import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function WhyWeExist() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow color="lavender">Notre conviction</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pourquoi Welcome Back existe
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back est né d&apos;un constat simple : la qualité d&apos;un
            retour après une absence longue dépend encore trop souvent du
            hasard.
          </p>

          <div className="mt-5 space-y-2 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            <p>Du manager sur lequel on tombe.</p>
            <p>Du temps dont disposent les RH.</p>
            <p>
              Ou de la capacité de la personne à demander de l&apos;aide.
            </p>
          </div>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Pourtant, les retours après une absence longue sont des moments
            déterminants dans la vie professionnelle : congé maternité,
            arrêt maladie, burn-out, congé parental, aidance...
          </p>

          <p className="mt-3 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Ils ont un impact humain, organisationnel et économique
            important.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Après avoir accompagné des équipes, vécu plusieurs retours de
            congé maternité et traversé moi-même un arrêt pour épuisement
            professionnel, j&apos;ai réalisé qu&apos;il n&apos;existait pas de
            cadre simple permettant d&apos;accompagner systématiquement ces
            moments de transition.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back a été créé pour que chaque retour puisse être
            préparé, suivi et accompagné, quel que soit le contexte ou
            l&apos;organisation.
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
