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
            <p>des pratiques en place dans l&apos;organisation.</p>
          </div>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Pourtant, ces transitions sont des moments déterminants. Elles ont
            un impact humain majeur, mais aussi des conséquences
            organisationnelles et économiques directes pour les entreprises.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Après avoir managé des équipes, vécu plusieurs retours de congé
            maternité et traversé moi-même un arrêt pour épuisement
            professionnel, j&apos;ai réalisé qu&apos;il me manquait un cadre
            simple pour accompagner systématiquement ces moments charnières.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            C&apos;est pour cette raison que Welcome Back existe. Pour que
            chaque retour soit préparé, accompagné et suivi, quels que soient
            le contexte ou l&apos;organisation.
          </p>

          <div className="mt-8 border-l-2 border-[var(--color-violet)]/30 pl-5">
            <p className="font-display text-base font-semibold text-[var(--foreground)]">
              Léah
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
