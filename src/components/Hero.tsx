import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Dots from "./Dots";

const JOURNEY_STEPS = [
  {
    label: "Avant une absence planifiée",
    image: "/images/wave-yellow.png",
  },
  {
    label: "En amont de la reprise",
    image: "/images/wave-lavender.png",
  },
  {
    label: "Après le retour",
    image: "/images/wave-green.png",
  },
  {
    label: "Sur le long terme",
    image: "/images/wave-pink.png",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-0 pb-14 sm:pb-20">
      <div className="relative w-full">
        <Image
          src="/images/banner.png"
          alt="Welcome Back"
          width={6600}
          height={1650}
          priority
          className="h-auto w-full"
        />
      </div>

      <Dots seed={7} count={14} />
      <Container className="relative pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Parce qu&apos;accueillir un retour au travail après une absence
            longue ne s&apos;improvise pas.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back structure et automatise l&apos;accompagnement des
            retours en entreprise après une absence longue.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-lg font-light leading-relaxed text-[var(--foreground)]/70">
            Les bons outils, aux bonnes personnes, au bon moment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Nous contacter</Button>
            <Button href="/solution" variant="secondary">
              Découvrir la solution
            </Button>
          </div>
        </div>

        {/* Visual: return journey snapshot */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-3 shadow-xl shadow-[var(--color-violet)]/5 sm:p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY_STEPS.map((step) => (
                <div
                  key={step.label}
                  className="relative isolate flex min-h-[150px] flex-col items-start justify-end overflow-hidden rounded-2xl bg-white"
                >
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="pointer-events-none object-cover opacity-90"
                  />
                  <div className="relative w-full bg-white/85 p-4 backdrop-blur-sm">
                    <p className="font-display text-sm font-semibold leading-snug text-[var(--foreground)]">
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
