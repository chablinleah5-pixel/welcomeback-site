import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Welcome Back — Structurer les retours après une absence longue",
  "Welcome Back aide les RH, managers et salarié.e.s à structurer et automatiser l'accompagnement des retours après une absence longue : congé maternité, arrêt maladie, congé parental, aidance.",
  keywords: [
    "retour au travail",
    "absence longue",
    "RH",
    "congé maternité",
    "reprise du travail",
    "SaaS RH",
  ],
  openGraph: {
    title: "Welcome Back — Parce qu'accueillir un retour ne s'improvise pas.",
    description:
      "Welcome Back structure et automatise l'accompagnement des retours après une absence longue. Les bons outils, aux bonnes personnes, au bon moment.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
