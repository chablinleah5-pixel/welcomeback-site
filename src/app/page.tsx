import Hero from "@/components/Hero";
import WhyAct from "@/components/WhyAct";
import SimpleFramework from "@/components/SimpleFramework";
import ForWhom from "@/components/ForWhom";
import WhyWeExist from "@/components/WhyWeExist";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyAct />
      <SimpleFramework />
      <ForWhom />
      <WhyWeExist />

      <section
        id="contact"
        className="py-14 sm:py-20"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-green) 30%, white)" }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <Eyebrow color="lavender">Contact</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Échangeons sur votre contexte.
              </h2>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[var(--foreground)]/70">
                Décrivez-nous votre organisation et les types d&apos;absences
                longues que vous accompagnez. Nous reviendrons vers vous
                rapidement pour organiser une démonstration adaptée.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
