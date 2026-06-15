import Button from "./Button";
import Container from "./Container";
import Dots from "./Dots";

export default function CtaBanner({
  title = "Prêt.e à structurer vos retours après absence longue ?",
  subtitle = "Échangeons sur votre contexte et découvrez Welcome Back en démonstration.",
  seed = 3,
}: {
  title?: string;
  subtitle?: string;
  seed?: number;
}) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-violet)] px-8 py-16 text-center sm:px-16">
          <Dots seed={seed} count={10} />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-white/75">
              {subtitle}
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                href="/contact"
                className="bg-white !text-[var(--color-violet)] hover:bg-white/90"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
