# WelcomeBack — Site vitrine

Site vitrine Next.js (App Router, TypeScript, Tailwind CSS v4) pour WelcomeBack.

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm start
```

## Déploiement

Le projet est prêt pour un déploiement direct sur Vercel (`vercel deploy`).

## Typographies

Le design utilise deux variables CSS définies dans `src/app/globals.css` :

- `--font-display` : prévu pour **Parisine Plus Std** (titres)
- `--font-body` : prévu pour **Colaborate Light** (textes)

Ces deux polices n'étant pas disponibles via Google Fonts, un repli système
(`Sora` / `Work Sans` puis polices système) est utilisé par défaut. Pour
activer les polices de marque :

1. Placez les fichiers `.woff2` dans `public/fonts/`.
2. Décommentez et adaptez les blocs `@font-face` en haut de
   `src/app/globals.css`.

## Palette

| Couleur | Usage |
| --- | --- |
| `#FAEB5C` (jaune) | Accents, badges |
| `#EBBBD8` (rose) | Accents, badges |
| `#A2D0A7` (vert) | Accents, badges |
| `#4A3A8F` (violet) | Couleur de marque principale, CTA |
| `#C1CDEA` (lavande) | Accents, badges |

## Structure

- `/` — Accueil (hero, problème, chiffres, parcours, pour qui, témoignages, contact)
- `/solution` — Détail du parcours avant / pendant / après le retour
- `/rh` — Page bénéfices RH
- `/managers` — Page bénéfices managers
- `/salaries` — Page bénéfices salarié·e·s
- `/contact` — Formulaire de demande de démo

## Formulaire de contact

`src/components/ContactForm.tsx` est actuellement un formulaire front-end
sans backend (affiche un message de confirmation au submit). Branchez-le
sur votre service d'envoi d'emails / CRM (ex: Resend, HubSpot, etc.) via
une route API Next.js (`src/app/api/contact/route.ts`).
