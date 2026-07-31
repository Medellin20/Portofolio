import "./globals.css";

export const metadata = {
  title: "Zola-Zéric WENDEOU — Architecture SI, AMOA & Audit du parc IT",
  description:
    "Portfolio de Zola-Zéric WENDEOU, ingénieur en architecture des systèmes d'information à Cotonou : audit du parc IT, AMOA, cybersécurité et développement web.",
  openGraph: {
    title: "Zola-Zéric WENDEOU — Architecture SI, AMOA & Audit du parc IT",
    description:
      "Audit de parc informatique, cadrage AMOA et développement d'applications web. Cotonou, Bénin.",
    type: "profile",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
