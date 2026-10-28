import "./globals.css";

export const metadata = {
  title: "Bluwrn — Graphic Design & Web Projects",
  description: "Graphic design, print work, promotional graphics, and web projects by Bluw / Bluwrn, based in Bontang, Indonesia.",
  openGraph: {
    title: "Bluwrn — Graphic Design & Web Projects",
    description: "Selected graphic design, client work, and web projects by Bluwrn.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
