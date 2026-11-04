import Image from "next/image";
import ArtworkGallery from "../components/ArtworkGallery";
import ThemeToggle from "../components/ThemeToggle";
import { projects } from "../data/artworks";

const designTools = [
  { name: "AFFINITY", icon: "affinity.png" },
  { name: "CORELDRAW", icon: "coreldraw.png" },
  { name: "FIGMA", icon: "figma.svg", monochrome: true },
  { name: "CANVA", icon: "canva.svg" },
];
const devTools = [
  { name: "HTML", icon: "html5.svg", monochrome: true },
  { name: "CSS", icon: "css.svg", monochrome: true },
  { name: "JAVASCRIPT", icon: "javascript.svg", monochrome: true },
  { name: "PYTHON", icon: "python.svg", monochrome: true },
  { name: "PHP", icon: "php.svg", monochrome: true },
  { name: "REACT", icon: "react.svg", monochrome: true },
  { name: "NEXT.JS", icon: "nextdotjs.svg", monochrome: true },
  { name: "GIT", icon: "git.svg", monochrome: true },
];

function Tool({ name, icon, monochrome }) {
  return <span><Image className={`skill-icon${monochrome ? " skill-icon-mono" : ""}`} src={`/icons/${icon}`} alt="" aria-hidden="true" width={24} height={24} unoptimized /><span>{name}</span></span>;
}

// Width fractions match the desktop/mobile paper arrangement in globals.css.
const heroArtworks = [
  { id: "color-your-night", placement: "night", width: 1545, height: 2000, desktop: .5, mobile: .62 },
  { id: "bijak-sosialmedia", placement: "bijak", width: 1600, height: 2000, desktop: .4, mobile: .56 },
  { id: "moca-2026", placement: "moca", width: 2000, height: 1334, desktop: .49, mobile: .57 },
  { id: "roti-goreng", placement: "roti", width: 2000, height: 600, desktop: .57, mobile: .68 },
].map((artwork) => ({
  ...artwork,
  project: projects.find((project) => project.id === artwork.id),
  sizes: `(max-width: 620px) calc(min(100vw - 80px, 480px) * ${artwork.mobile} - 12px), (max-width: 800px) ${480 * artwork.mobile - 12}px, calc(min(43vw, 640px) * ${artwork.desktop} - 2 * clamp(4px, .45vw, 7px) - 2px)`,
}));

function Ident({ children }) {
  return <span className="micro-label"><span className="micro-square" />{children}</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Bluwrn, back to top">BLUWRN<span className="brand-pink">.</span><span className="brand-description">GRAPHIC DESIGN</span></a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">[01] WORK</a><a href="#archive">[02] ARCHIVE</a><a href="#about">[03] ABOUT</a><a href="#skills">[04] TOOLKIT</a><a href="#contact">[05] CONTACT</a>
        </nav>
        <div className="header-controls"><ThemeToggle /></div>
      </header>

      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-meta mono small"><Ident>PORTFOLIO / OVERVIEW</Ident><span>BASED IN BONTANG, ID</span></div>
          <div className="hero-frame">
            <span className="frame-top-left" aria-hidden="true"/><span className="frame-bottom-left" aria-hidden="true"/><span className="frame-bottom-right" aria-hidden="true"/>
            <Image className="crystal-background" src="/crystalline-shards.svg" alt="" fill unoptimized sizes="100vw" />
            <div className="hero-status"><span><span className="status-flag"/> GRAPHIC DESIGNER</span></div>
            <h1 id="hero-title" className="hero-masthead">BLUWRN<span className="pink-stop">.</span></h1>
            <div className="hero-copy">
              <p className="hero-greeting">Hi, I&apos;m Bluw.</p>
              <p className="hero-description">I&apos;m a graphic designer based in Bontang, Indonesia. I work on posters, event graphics, and print layouts.</p>
              <div className="hero-actions"><a href="#work" className="button-dark">VIEW WORK <span aria-hidden="true">↗</span></a><a href="#about" className="button-plain">ABOUT ME <span aria-hidden="true">↗</span></a></div>
              <div className="hero-frame-footer mono small"><span><span className="cyan-dot"/> SELECTED WORK</span></div>
            </div>
            <div className="hero-stack" role="group" aria-label="Selected graphic design artworks">
              {heroArtworks.map(({ project, placement, width, height, sizes }) => (
                <figure key={project.id} className={`hero-print hero-print-${placement}`}>
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    loading={placement === "night" ? "eager" : "lazy"}
                    fetchPriority={placement === "night" ? "high" : undefined}
                  />
                  <figcaption>{project.title}</figcaption>
                </figure>
              ))}
            </div>
            <div className="frame-diagonal" aria-hidden="true"><i/><i/><i/></div>
          </div>
          <div className="hero-strip mono small"><span>SELECTED WORK / 2026</span></div>
        </section>

        <ArtworkGallery />

        <section id="about" className="section-shell about-section" aria-labelledby="about-title">
          <div className="section-identity"><Ident>03 / ABOUT ME</Ident><span className="mono small muted">A BIT OF CONTEXT</span></div>
          <div className="section-heading"><h2 id="about-title">ABOUT <em>ME</em><span className="cyan-stop">.</span></h2></div>
          <div className="about-grid">
            <div className="about-intro"><p>I&apos;m Bluw, a graphic designer based in Bontang, Indonesia, and a third-year computer science student.</p><p>I work with client graphics, event materials, and print production. I&apos;m also learning programming and exploring web interfaces.</p></div>
            <div className="about-panels"><div className="about-panel cyan-edge"><Ident>DESIGN & PRINT</Ident><p>Campaign graphics, posters, banners, commercial layouts, and print-ready artwork.</p></div><div className="about-panel pink-edge"><Ident>COMPUTER SCIENCE</Ident><p>Studying computer science and learning programming.</p></div></div>
          </div>
        </section>

        <section id="skills" className="section-shell skills-section" aria-labelledby="skills-title">
          <div className="section-identity"><Ident>04 / TOOLKIT</Ident><span className="mono small muted">TOOLS & TECH</span></div>
          <div className="section-heading"><h2 id="skills-title">TOOLS <em>& SKILLS</em><span className="pink-stop">.</span></h2></div>
          <div className="skills-group"><p className="mono small"><span className="pink-dot"/> DESIGN TOOLS</p><div className="skill-grid">{designTools.map(tool=><Tool key={tool.name} {...tool} />)}</div></div>
          <div className="skills-group"><p className="mono small"><span className="cyan-dot"/> PROGRAMMING / LEARNING</p><div className="skill-grid">{devTools.map(tool=><Tool key={tool.name} {...tool} />)}</div><a className="icon-credits" href="/icons/LICENSES.txt">Icon credits & licenses</a></div>
        </section>

        <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <div className="section-identity"><Ident>05 / CONTACT</Ident><span className="mono small muted">EMAIL / SOCIAL LINKS</span></div>
          <div className="contact-content"><div><h2 id="contact-title">GET IN <em>TOUCH</em><span className="pink-stop">.</span></h2><p>Contact me about graphic design work.</p></div><div className="contact-panel"><span className="mono small muted">CONTACT CHANNELS</span><a className="contact-channel" href="mailto:design.bluw@gmail.com" aria-label="Email Bluw at design.bluw@gmail.com"><span>EMAIL</span><span>design.bluw@gmail.com</span></a><a className="contact-channel" href="https://github.com/bluwrn" target="_blank" rel="noopener noreferrer" aria-label="Bluwrn on GitHub (opens in a new tab)"><span>GITHUB</span><span>bluwrn ↗</span></a><a className="contact-channel" href="https://www.instagram.com/bramnt.io/" target="_blank" rel="noopener noreferrer" aria-label="Bluwrn on Instagram (opens in a new tab)"><span>INSTAGRAM</span><span>@bramnt.io ↗</span></a></div></div>
        </section>
      </main>
      <footer className="site-footer section-shell"><span>BLUW / BLUWRN <span className="pink-text">✳</span></span><span>© 2026 BLUWRN — GRAPHIC DESIGN</span><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}
