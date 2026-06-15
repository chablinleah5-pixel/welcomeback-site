import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function HowItWorks() {
  return (
   <section id="comment-ca-marche" className="bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow color="lavender">Comment ça fonctionne</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
           Un protocole validé pour préparer, accompagner et sécuriser les
            retours après une absence longue.
          </h2>
        </div>
      </Container>
    </section>
  );
}
