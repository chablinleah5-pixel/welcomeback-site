import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Contact — Welcome Back",
  description:
    "Demandez une démonstration de Welcome Back et découvrez comment structurer l'accompagnement des retours après une absence longue dans votre organisation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        eyebrowColor="violet"
        title="Demandez une démonstration de Welcome Back."
        subtitle="Parlez-nous de votre organisation et des situations de retour après absence longue que vous accompagnez. Nous reviendrons vers vous rapidement."
        seed={41}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <Eyebrow color="lavender">Démonstration</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
                Ce qui vous attend.
              </h2>
              <ul className="mt-6 space-y-4 text-sm font-light leading-relaxed text-[var(--foreground)]/70">
                <li>
                  Un échange de 30 minutes pour comprendre votre contexte :
                  effectifs, types d&apos;absences concernées, pratiques
                  actuelles.
                </li>
                <li>
                  Une présentation de Welcome Back adaptée à vos enjeux,
                  avec des exemples concrets de parcours.
                </li>
                <li>
                  Une réponse à vos questions sur la mise en place, la
                  conformité et l&apos;intégration à vos outils RH.
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
