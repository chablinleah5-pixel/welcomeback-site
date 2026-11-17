import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mentions légales — Welcome Back",
  description: "Mentions légales du site getwelcomeback.fr.",
};

const linkClass =
  "text-[var(--color-violet)] underline underline-offset-2 hover:opacity-80";
const pClass =
  "text-base font-light leading-relaxed text-[var(--foreground)]/70";
const h2Class =
  "font-display text-xl font-semibold text-[var(--foreground)]";

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        eyebrowColor="violet"
        title="Mentions légales"
        subtitle="Informations relatives à l’éditeur et à l’hébergeur du site getwelcomeback.fr."
        seed={51}
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className={h2Class}>Éditeur du site</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Le site getwelcomeback.fr est édité par Welcome Back,
                  société par actions simplifiée unipersonnelle (SASU) au
                  capital de 1 000 €, dont le siège social est situé au 381
                  avenue Jules Ferry, 13600 La Ciotat, immatriculée au
                  Registre du commerce et des sociétés de Marseille sous le
                  numéro SIREN 131 636 060 (SIRET du siège : 131 636 060
                  00017).
                </p>
                <p className={pClass}>Société non assujettie à la TVA.</p>
                <p className={pClass}>
                  Contact :{" "}
                  <a href="mailto:leah@getwelcomeback.fr" className={linkClass}>
                    leah@getwelcomeback.fr
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Directrice de la publication</h2>
              <div className="mt-3">
                <p className={pClass}>Léah Chablin, Présidente.</p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Hébergeur</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Le site est hébergé par Vercel Inc., 440 N Barranca Ave
                  #4133, Covina, CA 91723, États-Unis,{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    vercel.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Propriété intellectuelle</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Welcome Back est une marque déposée. L’ensemble des
                  contenus du site (textes, visuels, logo, marque,
                  structure) est la propriété de Welcome Back ou fait
                  l’objet d’une autorisation d’utilisation. Toute
                  reproduction, représentation ou réutilisation, totale ou
                  partielle, sans autorisation écrite préalable est
                  interdite.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Données personnelles</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Les informations recueillies par le formulaire de contact
                  (nom, entreprise, fonction, adresse e-mail, message) sont
                  utilisées uniquement pour répondre aux demandes. Pour en
                  savoir plus et exercer vos droits, consultez notre
                  politique de confidentialité.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Responsabilité</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Welcome Back s’efforce d’assurer l’exactitude des
                  informations du site mais ne peut garantir qu’elles sont
                  exhaustives ou à jour. Les informations présentées ne
                  constituent pas un conseil juridique.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Droit applicable</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Les présentes mentions sont régies par le droit français.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
