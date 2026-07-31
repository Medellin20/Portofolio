# Portfolio — Zola-Zéric WENDEOU

Portfolio one-page en **Next.js 14 (App Router) + React 18 + Tailwind CSS**.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Où modifier quoi

Tout le contenu est regroupé en haut de `components/Portfolio.jsx`, dans des
constantes en majuscules :

| Constante      | Contenu                                              |
| -------------- | ---------------------------------------------------- |
| `ME`           | nom, rôle, email, téléphone, ville                   |
| `FICHE`        | les lignes de la carte d'identité à côté de la photo  |
| `PARC`         | les compétences (nom, domaine, niveau de 1 à 3)       |
| `DOMAINES`     | les filtres de l'inventaire                           |
| `PARCOURS`     | les expériences professionnelles                      |
| `REALISATIONS` | les projets                                           |
| `FORMATION`    | les diplômes                                          |
| `CERTIFS`      | les certifications                                    |
| `QUALITES`     | les soft skills                                       |
| `HOBBIES`      | les centres d'intérêt                                 |

**Niveaux du parc** : `lvl` va de 1 (notions) à 3 (courant). Les valeurs
actuelles sont une estimation — ajuste-les avant de publier.

## Photo

Ta photo est déjà dans `public/profile.jpg`. Pour la changer, remplace le
fichier en gardant le même nom, ou modifie la prop dans `app/page.jsx` :

```jsx
<Portfolio photo="/ma-photo.jpg" />
```

Sans photo (`<Portfolio />`), un monogramme s'affiche à la place.

## Palette

| Rôle              | Hex       |
| ----------------- | --------- |
| Fond « papier »   | `#D9DEDB` |
| Panneaux          | `#F3F5F3` |
| Encre             | `#0D1A20` |
| Texte secondaire  | `#5A6A70` |
| Vert « conforme » | `#1D5B4E` |
| Laiton (accent)   | `#C08A12` |

Typographies : **Bricolage Grotesque** (titres), **IBM Plex Sans** (texte),
**IBM Plex Mono** (données, dates, étiquettes). Chargées via Google Fonts
directement dans le composant.

## Mise en ligne

Le plus simple : pousser le dossier sur GitHub, puis importer le dépôt sur
[Vercel](https://vercel.com). Aucune configuration nécessaire.
