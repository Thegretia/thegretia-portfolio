# Portfolio · Patrick Thomas MBONJO ETIA

<div align="center">

![Astro](https://img.shields.io/badge/Astro-7-FF5000)
![Vercel](https://img.shields.io/badge/Vercel-en_ligne-success)
![Mise à jour](https://img.shields.io/badge/Mise_à_jour-Novembre_2026-blue)
![Licence](https://img.shields.io/badge/Licence-MIT-green)

**Ingénieur Données & Intelligence Artificielle (Data & AI Engineer) · AI Solutions & Data Engineer chez [Gemula](https://gemula.org)**

[Site en ligne](https://thegretia-portfolio.vercel.app/) •
[Télécharger le CV](https://thegretia-portfolio.vercel.app/documents/CV_MBONJO_ETIA_Patrick_Thomas.pdf) •
[LinkedIn](https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/) •
[Contact](mailto:thomsp2001@gmail.com)

</div>

## Présentation

Portfolio personnel d'un élève-ingénieur en Master Recherche Sciences des Données & IA à l'ENSP de Douala et **AI Solutions & Data Engineer** au sein du collectif [Gemula](https://gemula.org). Le site présente mon parcours, mes expériences (Orange Cameroun – lauréat national Orange Summer Challenge 2026 avec Kiyanza, Gemula, Hôpital Général de Douala), mes projets techniques, mes compétences et mon CV.

Sections du site : En-tête · Gemula · Parcours · Projets (avec filtres par domaine et autres réalisations) · Compétences · Formation et certifications · Engagement, distinctions et atouts · Contact.

## Stack technique

- [Astro](https://astro.build) : site statique ultra-léger, zéro dépendance superflue
- Charte graphique de Gemula : fond sombre `#08090A`, surfaces `#0F1011` / `#151618` / `#1C1D20`, accent orange `#FF5000`, polices Inter et Poppins hébergées localement
- Icônes SVG intégrées (`src/components/Icon.astro`), aucune ressource externe (ni Google Fonts, ni Font Awesome)
- Images optimisées et servies en WebP par `astro:assets` (`<Image>`)
- TypeScript léger : menu mobile accessible, filtres de projets par domaine, animations d'apparition respectant `prefers-reduced-motion`
- Sitemap (`@astrojs/sitemap`), balises canonical / Open Graph et données structurées JSON-LD (`Person`) pour le référencement

## Mettre le site à jour

Tout le contenu est repris fidèlement du CV et centralisé dans **`src/data/cv.ts`** : identité, chiffres clés, Gemula, expériences, projets, compétences, formations, certifications, réalisations/engagement, atouts, langues et centres d'intérêt. Il suffit de modifier ce fichier pour mettre tout le site à jour.

- **Ajouter ou modifier un projet** : éditer le tableau `projects` ou `otherWork` dans `src/data/cv.ts` (en plaçant l'éventuelle capture en minuscules et sans espaces dans `src/assets/`).
- **Remplacer le CV** : remplacer le fichier `public/documents/CV_MBONJO_ETIA_Patrick_Thomas.pdf` en conservant le même nom.

## Développement local

Prérequis : Node.js `>=22.23.4`.

```bash
npm install
npm run dev      # lance le serveur local sur http://localhost:4321
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le site construit
```

## Structure

```text
src/
  data/cv.ts          ← tout le contenu du site (unique source de vérité)
  components/         ← une section du site par composant Astro
  layouts/Base.astro  ← balises <head>, préchargement des polices, SEO et JSON-LD
  assets/             ← photo de profil, captures de projets, logo officiel Gemula
  styles/global.css   ← charte graphique Gemula en variables CSS natives
public/
  documents/          ← CV téléchargeable en PDF
  fonts/              ← polices Inter et Poppins (WOFF2)
vercel.json           ← configuration du build Astro et redirections
```

## Déploiement

Le site est hébergé sur **Vercel** : https://thegretia-portfolio.vercel.app/

- Un push sur `main` déploie automatiquement la version en production ; les autres branches génèrent un aperçu (Preview Deployment).
- `vercel.json` configure explicitement Astro (`"framework": "astro"`, `"outputDirectory": "dist"`, `"buildCommand": "npm run build"`) et redirige les anciennes routes ainsi que les anciens liens de CV vers `/documents/CV_MBONJO_ETIA_Patrick_Thomas.pdf`.

## Contact

- **Email** : [thomsp2001@gmail.com](mailto:thomsp2001@gmail.com)
- **Téléphone** : +237 6 94 41 60 81
- **LinkedIn** : [patrick-mbonjo-etia](https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/)
- **GitHub** : [@Thegretia](https://github.com/Thegretia)
- **Gemula** : [gemula.org](https://gemula.org)

## Licence

Code sous licence MIT. Le contenu (textes, photo, CV) reste personnel.
