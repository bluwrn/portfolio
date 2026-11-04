import "./globals.css";

export const metadata = {
  title: "Bluwrn — Graphic Designer",
  description: "Graphic design, print work, and promotional graphics by Bluw / Bluwrn, based in Bontang, Indonesia.",
  openGraph: {
    title: "Bluwrn — Graphic Designer",
    description: "Selected graphic design, print work, and promotional graphics by Bluwrn.",
    type: "website",
  },
};

// Runs before React hydration so returning visitors don't see a light-mode flash.
// The system preference is only the default; a manual choice takes priority.
const themeBootstrap = `(function(){
  var theme = null;
  try { theme = localStorage.getItem("bluwrn-theme"); } catch (e) {}
  if (theme !== "dark" && theme !== "light") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBootstrap }} /></head>
      <body>{children}</body>
    </html>
  );
}
