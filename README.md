# BLUWRN — Graphic Design & Web Projects

Next.js portfolio for Bluw / Bluwrn, rebuilt from the existing `bluwporto` starter. The visual direction follows the supplied Figma reference: editorial serif headings, black technical borders, cyan/pink accents, crystalline hero artwork, and a restrained gallery-first layout.

## Run locally

Requires Node.js supported by Next.js 16 (Node 20.9+).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production testing:

```bash
npm run build
npm run start
```

## Content and gallery

- **27 WebP artworks** are located under `public/artwork/`.
- `data/artworks.js` defines **22 project groups**, categories, featured projects, image order, display labels, and accessibility text.
- `components/ArtworkGallery.js` provides the six featured projects, filterable archive, and click-to-open image viewer.
- Project groups with multiple images use the same lightbox, supporting keyboard arrows and Escape.
- Featured works are intentionally repeated in the archive to keep the complete collection browseable.

### Add new artwork

1. Add an optimized image to `public/artwork/` (prefer WebP).
2. Add an image object to an existing project in `data/artworks.js`, or create a new project entry.
3. For homepage exposure, add `featured: true` to an entry; remove another featured flag if you want to keep six.
4. Avoid attributing third-party illustrations or supplied brand marks as original illustration work.

### Software screenshots (placeholders)

`components/SoftwareShowcase.js` intentionally displays *SCREENSHOT COMING SOON* mock panels for Student Management System and Tofolite. To replace a preview later, put screenshots in `public/projects/` and replace the corresponding `PreviewPlaceholder` usage with a Next.js `<Image />` (or ask for help when ready). Their repository and demo links are not invented.

### Contact details (placeholders)

Replace the non-clickable EMAIL / GITHUB / INSTAGRAM placeholder rows in `app/page.js` with actual links, once confirmed.

### Branding

- Hero SVG: `public/crystalline-shards.svg`
- Main palette, layout and responsive rules: `app/globals.css`
- Metadata: `app/layout.js`
- Favicon: `app/icon.svg`

## Before publishing

- Verify each client work is permitted for public presentation (owner confirmed).
- Confirm or adjust project labels and About copy.
- Add real screenshots, repo URLs, and contact links when available.
- Test mobile/desktop, image viewer, and performance.

This project is deliberately static and uses no external CMS, extra UI framework, or animation library.
