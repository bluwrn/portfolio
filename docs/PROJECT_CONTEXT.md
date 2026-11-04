
# BLUWRN — Portfolio Project Context

## 1. Project Identity

Name: BLUWRN / Bluw

This is a personal portfolio for a graphic designer who is also a computer science student learning and exploring programming.

Primary identity: Graphic Designer.
Secondary background: Computer Science Student; programming is an educational interest and an area of ongoing learning.

The purpose of the website is to showcase actual graphic design work. Do not present graphic design and programming as equally developed professional skill sets or market professional web development services.

The portfolio is already implemented using Next.js and deployed on Vercel. Continue developing the existing codebase rather than rebuilding it.

## 2. Visual Direction

The visual identity is experimental, typography-driven, expressive, and influenced by Japanese graphic design and creative websites.

Core principles:
- Strong typography and intentional visual hierarchy.
- Expressive, high-impact hero section.
- Cleaner, more readable sections below the hero.
- Visually distinctive without sacrificing usability.
- Real artwork should be the visual centerpiece.
- Avoid generic corporate portfolio templates.
- Avoid unnecessary decoration and generic AI aesthetics.

The established Figma design serves as a reference for typography, color, visual language, and composition. It is NOT a strict pixel-perfect layout specification.

Layouts may be improved if they better showcase the user's work while preserving the established art direction.

Before design or UI work, also read [DESIGN.md](DESIGN.md) and its approved references. The permanent specification records the intended hero; it does not mean that hero has been implemented.

Approved hero direction:

- Name-driven experimental editorial composition with an oversized `BLUWRN.` masthead.
- A curated printed-paper stack of four real graphic design artworks, with controlled overlap, static tilts, and restrained shadows.
- On desktop, the introduction and actions sit on the left and the stack on the right beneath the masthead. On mobile, introduction and actions precede the stack in a vertical composition.
- Color Your Night is the front print; Bijak and MOCA are rear prints that switch sides between desktop and mobile; Roti Goreng Bontang forms the base.
- Preserve the existing serif typography, cyan/pink accents, crystalline geometry, framing, navigation access, and light/dark themes.
- The final introduction copy remains unapproved. Copy and study annotations in the mockups are not automatically approved visitor-facing text.

Approved composition references:

- [Desktop mockup](references/bluwrn-hero-desktop-reference.png)
- [Mobile mockup](references/bluwrn-hero-mobile-reference.png)

These PNGs define visual direction and composition, not exact pixels or runtime artwork assets. Use the verified WebP files below when Phase 4 is authorized.

## 3. Content and Structure

The portfolio emphasizes graphic design work.

Graphic design gallery:
- A selection of featured works.
- A browsable full gallery.
- Hybrid organization by project and category.
- Project grouping and image viewing interactions.
- Use actual artwork and existing assets.
- Allow placeholders for missing content.

The four intended hero projects and selected assets are:

| Project | Verified repository asset |
|---|---|
| Color Your Night | [public/artwork/color-your-night.webp](../public/artwork/color-your-night.webp) |
| Bijak Bersosial Media | [public/artwork/bijak-sosialmedia.webp](../public/artwork/bijak-sosialmedia.webp) |
| MOCA 2026 | [public/artwork/moca-banner.webp](../public/artwork/moca-banner.webp) |
| Roti Goreng Bontang | [public/artwork/roti-goreng-kdm.webp](../public/artwork/roti-goreng-kdm.webp) |

These selections match `data/artworks.js`. Keep the artwork inventory and gallery unchanged; the hero is a separate curated presentation. Do not substitute the MOCA name graphic or Roti Goreng title strip for the selected banners.

Computer science and programming:
- Keep these as educational interests and part of the user's learning journey.
- Preserve truthful references in About and Toolkit without implying established professional development experience.
- The public software project showcase and its placeholder entries were removed in Phase 2. Do not add them back without an explicit request.
- Preserve original project files, artwork assets, and unrelated code. Removal of the showcase only authorizes cleanup of its unused presentation code.

Contact channels:
- Email: [design.bluw@gmail.com](mailto:design.bluw@gmail.com)
- GitHub: https://github.com/bluwrn
- Instagram: https://www.instagram.com/bramnt.io/
- Use these exact supplied destinations and meaningful accessible link labels. External links opened in new tabs must use appropriate security attributes.
- No contact form, backend, or additional platforms are needed.

Do not fabricate projects, achievements, experiences, skills, or placeholder content presented as real work.

## 4. Design System and Interaction

- Preserve the established colors, typography, and brand identity.
- Support responsive layouts across desktop and mobile.
- Use expressive but controlled motion.
- Avoid excessive animations or distracting effects.
- Maintain functional light and dark modes.
- Dark mode should be comfortable, using balanced dark surfaces rather than arbitrary pure black.
- Maintain readable contrast and accessible interactive elements.
- Prioritize image loading and frontend performance.

## 5. Copywriting

Avoid AI-generated marketing language and filler.

Preferred:
- Direct, simple, human writing.
- Concise project descriptions.
- Personality without forced cleverness.
- Natural language suited to an independent designer.
- Describe programming as study, exploration, and learning rather than a professional service.

Avoid:
- Empty buzzwords.
- Generic motivational taglines.
- Exaggerated claims about skills or experience.
- Unnecessary explanations and repetitive descriptions.

## 6. Development Context

- Framework: Existing Next.js application using the App Router.
- Styling: Inspect the current repository to determine the actual implementation.
- Deployment: Vercel, connected to the project's Git workflow.
- Repository: Continue using the existing repository and Git history.
- Implementation: JavaScript/JSX, handwritten global CSS with light/dark theme tokens, and browser state for gallery and theme interactions. Inspect the codebase before changing these details.

Treat the current repository as the technical source of truth.

Do not assume a feature is missing, a dependency is installed, or an implementation is unfinished without inspecting the relevant files.

## 7. Collaboration Expectations

- Preserve working features unless changes are explicitly requested.
- Prefer focused, incremental improvements over rewrites.
- Explain meaningful technical and design tradeoffs.
- Call out weak design decisions rather than agreeing automatically.
- Do not introduce new libraries without a justified need.
- Keep changes maintainable and reviewable.

## 8. Project Status

The portfolio has an existing implementation and Vercel deployment.

Known design decisions:
- BLUWRN branding.
- Graphic-design-first presentation.
- Experimental Japanese-inspired direction.
- Graphic design is the main public portfolio content; the former software showcase was removed in Phase 2.
- Computer science and programming remain visible as educational background and learning interests.
- Featured artwork and full gallery concept.
- Existing light/dark theme work.
- Email, GitHub, and Instagram contact links use the user-supplied details above.
- Phase 3 records the approved curated-stack hero and design rules in `docs/DESIGN.md`. The current application still has the category-led `GRAPHIC / DESIGN.` hero; the approved replacement is pending Phase 4.

The exact implementation status must be verified from the local codebase.

Do not treat design plans as proof that features have been completed.

## 9. Five-Phase Roadmap

| Phase | Scope | Status |
|---|---|---|
| Phase 1 | Technical Foundation | Complete |
| Phase 2 | Identity & Content Cleanup | Complete |
| Phase 3 | Design Direction & Rules | Current |
| Phase 4 | Implementation & Visual Polish | Pending |
| Phase 5 | Final QA & Deployment | Pending |

The approved composition and this documentation do not authorize application changes. Wait for explicit Phase 4 instructions before implementing the hero. Do not commit, push, or deploy automatically.
