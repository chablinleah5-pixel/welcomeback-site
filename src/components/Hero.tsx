import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Dots from "./Dots";

const JOURNEY_STEPS = [
  {
    label: "Avant l'absence",
    suffix: "(quand celle-ci est planifiée)",
    color: "var(--color-lavender)",
  },
  {
    label: "En amont de la reprise",
    color: "var(--color-pink)",
  },
  {
    label: "Après le retour",
    color: "var(--color-green)",
  },
  {
    label: "Sur le long terme",
    color: "var(--color-yellow)",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-0 pb-24 sm:pb-32">
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
            Parce qu&apos;accueillir un retour après une absence longue ne
            s&apos;improvise pas.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--foreground)]/70">
            Welcome Back structure et automatise l&apos;accompagnement des
            retours après une absence longue. Les bons outils, aux bonnes
            personnes, au bon moment.
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
          <div className="relative rounded-3xl border border-black/5 bg-white p-3 shadow-xl shadow-[var(--color-violet)]/5 sm:p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY_STEPS.map((step) => (
                <div
                  key={step.label}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: `${step.color}40` }}
                >
                  <p className="font-display text-sm font-semibold text-[var(--foreground)]">
                    {step.label}
                    {step.suffix && (
                      <span className="font-body text-xs font-light text-[var(--foreground)]/60">
                        {" "}
                        {step.suffix}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
