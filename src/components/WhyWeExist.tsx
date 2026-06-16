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
            Les retours après une absence longue sont souvent traités comme
            des situations individuelles. Pourtant, ils concernent chaque
            année des milliers de salarié.e.s, de managers et
            d&apos;organisations.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Congé maternité, arrêt maladie, burn-out, aidance, congé
            parental : ces transitions ont un impact humain, organisationnel
            et économique.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back est né d&apos;une conviction simple :
          </p>
          <p className="mt-5 font-display text-xl font-semibold leading-relaxed text-[var(--foreground)]">
            La qualité d&apos;un retour ne devrait jamais dépendre du hasard,
            du temps disponible ou de l&apos;expérience d&apos;un manager.
          </p>
        </div>
      </Container>
    </section>
  );
}
