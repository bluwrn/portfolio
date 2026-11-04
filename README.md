# Bluwrn

Personal portfolio for my graphic design work. I'm also a computer science student learning and exploring programming. Built with Next.js, using a visual direction based on my Figma design.

## What's here

- Six featured design projects and a browsable archive of 27 artworks.
- Category filters and an image viewer for individual or grouped designs.
- Light and dark modes, with the selected theme saved in the browser.
- Sections for about, tools and learning, and contact.

Contact links are available for email, GitHub, and Instagram. The public software showcase has been removed; programming remains part of my studies and interests.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## Project files

- `app/` — page, layout, and global styles.
- `components/` — artwork gallery and theme toggle.
- `data/artworks.js` — artwork titles, categories, groups, and featured selection.
- `public/artwork/` — portfolio images.
- `public/projects/` — retained folder from the former software showcase; not used by the current portfolio.

To add or change artwork, put the image in `public/artwork/` and update `data/artworks.js`.

## Status

The design gallery, theme toggle, and contact links are implemented. The portfolio focuses on graphic design, with computer science and programming presented as educational interests. Run `npm run lint` and `npm run build` before deployment.
