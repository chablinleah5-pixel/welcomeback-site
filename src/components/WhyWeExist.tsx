import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function WhyWeExist() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow color="lavender">Notre conviction</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pourquoi Welcome Back existe
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Les retours après une absence longue sont des moments
            déterminants dans une vie professionnelle. Pourtant, ils
            reposent encore trop souvent sur l&apos;improvisation.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Un.e manager qui veut bien faire mais ne sait pas comment s&apos;y
            prendre. Une équipe qui ne sait pas quelle place laisser. Une
            personne qui revient sans savoir à quoi s&apos;attendre.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back est né d&apos;une conviction simple :
          </p>
          <p className="mt-5 font-display text-xl font-semibold leading-relaxed text-[var(--foreground)]">
            La qualité d&apos;un retour ne devrait jamais dépendre du hasard.
            Elle devrait être garantie par l&apos;organisation.
          </p>
        </div>
      </Container>
    </section>
  );
}
