# BLUWRN — Design Specification

## 1. Status and sources

Phase 3: Design Direction & Rules. The owner has approved the curated-stack hero composition and the hero introduction recorded in section 11. Phase 4 implementation has not started.

Read this specification alongside [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) before design or UI work. The current application remains the source of truth for existing behavior, assets, and technical details; the approved references define the intended hero composition.

Approved references, visually inspected during this documentation phase:

- [Desktop hero reference](references/bluwrn-hero-desktop-reference.png): 1600 × 960 PNG.
- [Mobile hero reference](references/bluwrn-hero-mobile-reference.png): 460 × 1120 PNG.

These images define composition, relative scale, overlap, and visual direction. They are not exact pixel specifications, font measurements, final copy approval, or website image assets. Use the existing WebP artworks in the eventual hero. Do not render the reference PNGs as a flattened hero.

Implementation sources inspected: [page](../app/page.js), [global styles](../app/globals.css), [layout](../app/layout.js), [artwork inventory](../data/artworks.js), [gallery](../components/ArtworkGallery.js), and [theme control](../components/ThemeToggle.js).

## 2. Identity and hierarchy

- Primary professional identity: graphic designer.
- Computer science and programming are educational background and ongoing learning interests. They must not be presented as an equally developed professional service.
- Use a name-driven, experimental editorial hero with an oversized, readable `BLUWRN.` masthead.
- Introduce the person naturally, then let actual graphic design work substantiate that introduction.
- Keep About, Toolkit, contact details, and the graphic design gallery intact. Do not restore the removed software showcase.

The hierarchy is: masthead; personal introduction and actual artwork stack; supporting copy and actions; small contextual labels; background geometry. Artwork must remain recognizably important rather than becoming a faint decorative texture.

## 3. Approved artwork selection

The stack contains four projects and four images. These paths exist and match entries in `data/artworks.js`.

| Project / inventory ID | Repository asset | Runtime URL | Intrinsic dimensions |
|---|---|---|---|
| Color Your Night / `color-your-night` | [public/artwork/color-your-night.webp](../public/artwork/color-your-night.webp) | `/artwork/color-your-night.webp` | 1545 × 2000 |
| Bijak Bersosial Media / `bijak-sosialmedia` | [public/artwork/bijak-sosialmedia.webp](../public/artwork/bijak-sosialmedia.webp) | `/artwork/bijak-sosialmedia.webp` | 1600 × 2000 |
| MOCA 2026 / `moca-2026` | [public/artwork/moca-banner.webp](../public/artwork/moca-banner.webp) | `/artwork/moca-banner.webp` | 2000 × 1334 |
| Roti Goreng Bontang / `roti-goreng` | [public/artwork/roti-goreng-kdm.webp](../public/artwork/roti-goreng-kdm.webp) | `/artwork/roti-goreng-kdm.webp` | 2000 × 600 |

The references use the MOCA event banner and the Roti Goreng promotional/menu banner. The related `moca-nama.webp` and `roti-goreng-kdm-title.webp` files exist but are not the selected stack images. Do not substitute them or add a fifth artwork without approval.

Keep the existing pixels, colors, text, and aspect ratios. The printed-paper effect comes from presentation around each image: visible rectangular paper edges, modest static rotation, overlap, and restrained shadows. Do not recolor, stretch, regenerate, blur, or bake a new collage into an image. Prefer the whole source image with overlapping papers over destructive cropping. Source imagery and illustration authorship must not be inferred from the portfolio inventory.

## 4. Desktop composition

The desktop reference shows a wide, bordered hero beneath the existing header. The masthead occupies the upper portion, aligned with the introduction below it on the left. A curated cluster of four prints occupies the right and lower-right portion.

- Make `BLUWRN.` the dominant serif headline, with a pink period. Fit its scale to the available frame width rather than copying measurements from the PNG.
- Keep the greeting, identity/supporting text, and `VIEW WORK` / `ABOUT ME` controls in a readable left column. The stack must not obstruct this content or its focus outlines.
- Put Color Your Night at the front as the largest, nearly upright portrait print.
- Put Bijak behind it toward the upper right and MOCA behind it toward the upper left, with different static tilts.
- Put the wide Roti Goreng banner at the base, extending toward the lower right behind the front print.
- Allow controlled overlap near the masthead's lower/right area as shown, while keeping the complete name legible. Do not let the artwork hide essential letters or the pink period.
- Preserve intentional open space between the reading column and stack. The asymmetry should come from these unequal regions and the print arrangement, not a uniform four-card grid.
- Retain the strong frame, corner/bracket language, fine rules, and subtle background geometry. Lower portfolio sections remain cleaner and more regular.

The reference's small work counts refer to four curated hero images, not the full inventory of 22 project groups and 27 artworks. If a count is rendered, derive it from the actual hero selection. Labels such as "COMPOSITION STUDY" and the concept captions outside the frame describe the mockup artifact; they are not approved visitor-facing copy.

## 5. Mobile composition and responsive adaptation

The mobile reference is a vertical composition, not a scaled-down desktop canvas. Its reading order is masthead, introduction, actions, then the artwork stack within the same enclosing frame.

- Keep the full `BLUWRN.` name readable on one line where it fits. Use responsive type sizing and spacing; do not horizontally distort the font or clip letters to force a fit.
- Keep the introduction and both actions above the stack. Controls may wrap when needed for narrow screens or text zoom.
- Retain all four selected artworks. Color Your Night remains the front print; Bijak moves to the rear left, MOCA to the rear right, and Roti Goreng stays at the bottom.
- Fit the transformed paper bounds inside the available space, reserving height for the stack and its shadows. Do not rely on the legacy fixed-looking mobile minimum height to contain the new artwork.
- Let the hero grow and scroll naturally. Do not force the entire composition into one screen or remove artworks solely to meet a viewport-height target.
- Adapt the cluster's scale, offsets, overlap, and tilt for mobile. Keep enough of every piece visible to identify four distinct prints.

Current CSS has responsive rules at 1100px, 800px, and 620px. These are existing implementation breakpoints, not new pixel requirements from the references. Reuse them as starting points and check intermediate widths, including the audited 1440px desktop and 390px mobile widths.

The mobile PNG abbreviates navigation to Work and About. It does not establish approval to remove the existing Archive, Toolkit, or Contact destinations. Preserve access to all five current section links, the theme control, keyboard navigation, and the skip link unless a separate navigation change is approved. Keep working arrow and theme graphics; mockup box-like glyphs are not replacement icon specifications.

## 6. Typography and spacing

The current font stacks in `app/globals.css` are:

| Existing property | Actual stack | Role in the approved hierarchy |
|---|---|---|
| `--serif` | `Georgia, "Times New Roman", serif` | Oversized masthead and a smaller italic greeting, as seen in the references |
| `--sans` | `Arial, Helvetica, sans-serif` | Readable identity and supporting copy; existing default body stack |
| `--mono` | `"Courier New", Courier, monospace` | Navigation, controls, concise labels, and technical framing |

Preserve these stacks; no new typeface is approved or required. The current headline specifies weight 900 and tight negative letter spacing. Those existing values describe the current two-line heading, not approved measurements for the new masthead. Fit and review the new word at each size, including font fallback and text zoom.

Existing layout baselines include section gutters of `clamp(22px, 4.3vw, 78px)`, 18px section gutters below 620px, hero frame padding of `clamp(26px, 4vw, 57px)`, and 20px frame padding below 620px. Preserve the established spacing language while adjusting only the hero where the new composition requires it. These are current CSS values, not a newly invented spacing-token system.

Keep the name dominant, the introduction easy to read, and captions subordinate. Do not turn essential information into tiny technical labels. Avoid duplicating the professional identity across many badges or creating another competing oversized ghost wordmark.

## 7. Theme tokens and geometry

The following existing properties are copied from `:root` and `:root[data-theme="dark"]` in `app/globals.css`. They are the current palette, not new tokens sampled from the PNGs.

| Existing property | Light | Dark |
|---|---|---|
| `--paper` | `#f8fafb` | `#161e26` |
| `--paper-alt` | `#f2f6f8` | `#1a242e` |
| `--surface` | `#ffffff` | `#222e39` |
| `--hero-surface` | `#f9fdff` | `#1b2630` |
| `--ink` | `#101318` | `#ebf0f2` |
| `--ink-soft` | `#313a42` | `#c5d0d7` |
| `--muted` | `#657078` | `#a7b7c2` |
| `--line` | `#cad2d7` | `#455462` |
| `--line-soft` | `#e0e5e9` | `#334350` |
| `--line-strong` | `#abb5bb` | `#586979` |
| `--cyan` | `#55bfd5` | `#88d7e7` |
| `--cyan-pale` | `#def7fb` | `#25414b` |
| `--pink` | `#f34499` | `#ff8fbc` |
| `--pink-pale` | `#fce5f0` | `#482f43` |
| `--on-ink` | `#ffffff` | `#16212a` |
| `--hero-dot` | `#bdeaf1` | `#375763` |
| `--frame-shadow` | `rgba(10,14,19,.1)` | `rgba(5,12,17,.4)` |
| `--card-shadow` | `rgba(0,0,0,.05)` | `rgba(4,9,14,.23)` |
| `--crystal-opacity` | `.72` | `.35` |

Reuse the other existing semantic properties where appropriate; inspect the stylesheet before choosing them. Do not invent additional approved token names or replace the palette with PNG color samples.

Both supplied references show light mode. Preserve the application's existing blue-slate dark surfaces and comfortable contrast. Artwork pixels stay unchanged in both modes; surrounding surfaces, borders, text, and shadows should use the theme system. The light reference's pale paper edges must remain distinguishable against dark surfaces; their exact dark-mode treatment requires visual review in Phase 4 rather than an invented dark mockup specification.

Reuse [crystalline-shards.svg](../public/crystalline-shards.svg), the cyan/pink accents, and the established bracket/rule vocabulary. Keep geometry behind content and quieter than the masthead and prints. Existing decorations are not inherently inappropriate because they are unconventional. Adjust their placement or prominence for hierarchy, not to replace the visual identity.

Theme state currently uses `data-theme` and `color-scheme` on the root element, a pre-hydration script in `app/layout.js`, and the `bluwrn-theme` browser preference in `ThemeToggle.js`. Preserve manual-choice precedence, system preference fallback, storage failure handling, and cross-tab synchronization.

## 8. Motion and interaction

- Keep paper rotations static and purposeful. The reference PNGs do not approve dragging, shuffling, autoplay, card cycling, or a hover-only reveal system.
- Preserve existing anchor navigation and button feedback. The current hero entrance is 0.55 seconds with a 14px vertical movement, limited to hover-capable devices without a reduced-motion preference; theme transitions are 0.2 seconds.
- Any adapted entrance should remain short and controlled, with no ongoing paper movement. Respect the existing `prefers-reduced-motion` rules and immediate access to content.
- Do not add scroll hijacking, a loading gate, background audio, cursor-dependent access, or an animation package.
- Treat the stack as a visual selection by default. No new artwork-click behavior is approved by a static image; visitors can reach the existing interactive gallery through View Work.
- Preserve gallery filters, show-all behavior, grouped-image viewing, lightbox keyboard/focus behavior, and cross-category navigation.

## 9. Accessibility and image performance

- Keep one semantic hero `h1`, a natural reading order, descriptive artwork alternatives, and understandable action labels. Name text must remain real text rather than a raster image.
- Keep decorative geometry out of the accessibility tree and out of pointer hit testing. Paper overlap must not obstruct links, focus outlines, or readable introductory text.
- Preserve the skip link, navigation landmarks, existing visible-focus styling, theme-control labels, and reduced-motion behavior.
- Check contrast in both themes, text zoom, narrow screens, and font fallback. Ensure the stack creates no page-level horizontal scrolling or clipped focus indicators.
- Render existing WebP files with the installed Next.js Image component. Preserve their intrinsic aspect ratios and reserve layout space for the full stack before loading finishes.
- Set image `sizes` for the actual hero slots, accounting for responsive scale. Gallery `sizes` describe a different layout and must not be copied blindly.
- Prioritize loading according to measured above-fold visibility and LCP. Do not automatically preload all four prints plus the decorative SVG. Consult the installed Next.js documentation for supported loading properties.
- Keep artwork titles available accessibly even where papers overlap. The full, unobstructed images remain available in the existing gallery.
- Do not use reference PNGs, base64 screenshots, generated artwork, or a newly rasterized collage as runtime assets. No dependency installation is needed for this plan.

## 10. Rules against generic AI-generated aesthetics

- Build the composition around the actual BLUWRN name and four real works; keep the asymmetric printed-paper arrangement rather than replacing it with a generic agency split hero or uniform rounded-card grid.
- Preserve the existing serif character, cyan/pink accents, framing, and crystalline geometry. Do not remove established elements merely because they resemble a broader web trend.
- Do not introduce arbitrary glass panels, gradient blobs, neon glows, excessive pill badges, or unrelated decorative layers.
- Do not add random Japanese text, invented client logos, awards, project years, experience claims, performance counters, or fake technical metadata.
- Use concise, truthful copy. Avoid generic creative slogans, exaggerated service claims, repetitive professional labels, and programming presented as a professional offering.
- Use overlap and static tilt to suggest physical prints. Do not obscure most of the work, add meaningless rotation, or make decorative effects more prominent than the actual compositions.

## 11. Approved hero copy and remaining decisions

The portfolio brand and main masthead are `BLUWRN.`. The personal introduction/call name is `Bluw`. The curated-stack direction and the following two-paragraph hero introduction are approved:

> Hi, I'm Bluw.
>
> I'm a graphic designer based in Bontang, Indonesia. I work on posters, event graphics, and print layouts.

This decision supersedes the reference greeting's use of "Bluwrn" and the earlier provisional introduction. Use the exact approved wording above; other copy and study annotations in the reference PNGs are not automatically approved visitor-facing text. Programming can remain in About and Toolkit without being repeated in the hero; any added hero sentence about it must remain educational and requires owner approval.

Retain the existing `VIEW WORK` and `ABOUT ME` destinations. Additional labels, a rendered four-work count, paper-edge treatment in dark mode, and any new artwork interaction must be reviewed in context during Phase 4; they are not inferred final copy or behavior from mockup annotations.

## 12. Phase 4 implementation plan — pending

1. Modify only the hero portion of `app/page.js`: replace the category-led headline with the masthead, introduce owner-approved copy, and compose the four selected images from the existing inventory. Keep all other sections and their IDs intact. Do not alter `data/artworks.js` to implement the hero selection.
2. Modify hero-related rules in `app/globals.css`: desktop reading column and stack, mobile vertical flow and reordered rear papers, responsive masthead, paper edges/shadows, and controlled decoration. Keep global typography, active theme colors, navigation behavior, gallery styles, and unrelated section spacing intact.
3. Reuse `next/image`, `Ident`, `.section-shell`, `.hero-frame`, the button styles, existing theme properties, and the crystalline asset. A new component is not required; no gallery or theme refactor is needed. `app/layout.js` already has designer-first metadata and working theme bootstrap and is not an expected modification.
4. Validate the approved composition on desktop, mobile, intermediate widths, both themes, reduced motion, keyboard navigation, and text zoom. Check transformed paper bounds, all four images, readable copy, image loading, and unchanged gallery/lightbox behavior.
5. Run the existing lint and production build scripts, inspect the final source diff, and report any warnings. Phase 5 final QA and deployment remain separate and require explicit authorization.

This document records the design and plan only. It does not authorize starting Phase 4 or committing, pushing, or deploying.
