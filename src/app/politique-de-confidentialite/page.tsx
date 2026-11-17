import { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Welcome Back",
  description:
    "Politique de confidentialité du site getwelcomeback.fr : données collectées, finalités, durées de conservation et droits.",
};

const linkClass =
  "text-[var(--color-violet)] underline underline-offset-2 hover:opacity-80";
const pClass =
  "text-base font-light leading-relaxed text-[var(--foreground)]/70";
const h2Class =
  "font-display text-xl font-semibold text-[var(--foreground)]";
const liClass =
  "text-base font-light leading-relaxed text-[var(--foreground)]/70";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        eyebrowColor="violet"
        title="Politique de confidentialité"
        subtitle="Comment Welcome Back utilise et protège les données personnelles recueillies sur getwelcomeback.fr."
        seed={52}
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className={h2Class}>Responsable du traitement</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Le responsable du traitement des données personnelles
                  recueillies sur le site getwelcomeback.fr est Welcome Back,
                  SASU dont le siège social est situé au 381 avenue Jules
                  Ferry, 13600 La Ciotat (SIREN 131 636 060), représentée par
                  Léah Chablin, Présidente.
                </p>
                <p className={pClass}>
                  Contact :{" "}
                  <a href="mailto:leah@getwelcomeback.fr" className={linkClass}>
                    leah@getwelcomeback.fr
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Données collectées</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Lorsque vous remplissez le formulaire de contact, nous
                  recueillons les données que vous nous transmettez :
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li className={liClass}>votre nom ;</li>
                  <li className={liClass}>le nom de votre entreprise ;</li>
                  <li className={liClass}>votre fonction ;</li>
                  <li className={liClass}>votre adresse e-mail ;</li>
                  <li className={liClass}>le contenu de votre message.</li>
                </ul>
                <p className={pClass}>
                  Nous vous demandons de ne pas indiquer dans votre message
                  d’informations sensibles, notamment relatives à la santé de
                  personnes identifiables.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Finalité et base légale</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Ces données sont utilisées uniquement pour répondre à votre
                  demande, échanger avec vous et, le cas échéant, organiser une
                  démonstration de Welcome Back.
                </p>
                <p className={pClass}>
                  Le traitement repose sur notre intérêt légitime à répondre
                  aux sollicitations professionnelles qui nous sont adressées
                  (article 6.1.f du RGPD) et, le cas échéant, sur l’exécution
                  de mesures précontractuelles prises à votre demande (article
                  6.1.b du RGPD). Vos données ne sont ni vendues, ni louées, ni
                  utilisées à d’autres fins.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Durée de conservation</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Vos données sont conservées le temps nécessaire au traitement
                  de votre demande, puis pendant une durée maximale de trois
                  ans à compter du dernier contact avec vous. Elles sont
                  ensuite supprimées.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Destinataires et sous-traitants</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Vos données sont destinées uniquement à Welcome Back. Pour
                  faire fonctionner le site, nous faisons appel à des
                  prestataires techniques qui agissent sur nos instructions :
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li className={liClass}>
                    Web3Forms, pour la transmission des messages envoyés via le
                    formulaire de contact ;
                  </li>
                  <li className={liClass}>
                    Vercel Inc., pour l’hébergement du site.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Transferts hors Union européenne</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Ces prestataires peuvent traiter des données en dehors de
                  l’Union européenne, notamment aux États-Unis. Ces transferts
                  sont encadrés par les garanties prévues par le RGPD
                  (décision d’adéquation ou clauses contractuelles types de la
                  Commission européenne).
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Cookies et traceurs</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Le site getwelcomeback.fr n’utilise aucun cookie publicitaire
                  ni outil de mesure d’audience nécessitant votre consentement.
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Vos droits</h2>
              <div className="mt-3 space-y-3">
                <p className={pClass}>
                  Conformément au RGPD et à la loi Informatique et Libertés,
                  vous disposez d’un droit d’accès, de rectification,
                  d’effacement, de limitation et d’opposition concernant vos
                  données, ainsi que d’un droit à la portabilité.
                </p>
                <p className={pClass}>
                  Pour exercer ces droits, écrivez-nous à{" "}
                  <a href="mailto:leah@getwelcomeback.fr" className={linkClass}>
                    leah@getwelcomeback.fr
                  </a>
                  . Nous vous répondrons dans un délai maximum d’un mois. Si
                  vous estimez, après nous avoir contactés, que vos droits ne
                  sont pas respectés, vous pouvez introduire une réclamation
                  auprès de la CNIL (
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    cnil.fr
                  </a>
                  ).
                </p>
              </div>
            </div>

            <div>
              <h2 className={h2Class}>Mise à jour</h2>
              <div className="mt-3">
                <p className={pClass}>
                  Cette politique peut être modifiée pour tenir compte des
                  évolutions du site ou de la réglementation. Dernière mise à
                  jour : novembre 2026.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
