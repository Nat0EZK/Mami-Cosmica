# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Mami Cósmica is a static single-page marketing/booking site (Spanish content) for a holistic astrology/therapy practice. There is no build system, package manager, or bundler — it's plain HTML/CSS/JS served directly.

- [index.html](index.html) — the entire page markup (one file, all sections)
- [styles.css](styles.css) — all styling
- [js/servicios.js](js/servicios.js) — all interactivity
- `img/`, `videos/` — static media assets referenced directly by relative path

## Running locally

There's no dev server or build step. Open [index.html](index.html) directly in a browser, or serve the directory with any static file server (e.g. `npx serve` or the VS Code Live Server extension) to avoid `file://` path quirks.

There are no tests, linters, or CI configured in this repo.

## Architecture: single-page, JS-driven "sections as views"

The site is one HTML document where most `<section>` elements after the hero/about are hidden by default (class `oculto-seccion`) and toggled into view by [js/servicios.js](js/servicios.js) — there's no router and no page navigation. Key pattern to understand before editing nav or sections:

- Nav links and CTA buttons matching `.menu a[href^="#"], .btn-detalles, .hero-btn` are intercepted on click.
- A hardcoded list in servicios.js (`seccionesDinamicas`) enumerates which `#hash` targets are "dynamic sections" (`#servicios`, `#taller-presencial`, `#talleres`, `#contacto`, `#productos`). Links to these get `preventDefault()`, all `.oculto-seccion` elements are hidden, then the target section is shown/faded in and scrolled to.
- Links *not* in that list (e.g. `#sobre-mi`, `#`) fall through to normal anchor scrolling, but still hide any currently-open dynamic section first.
- **When adding a new top-level section that should behave like Servicios/Taller Presencial/Talleres/Contacto/Productos**, add its `class="... oculto-seccion"` in the HTML *and* add its `#id` to `seccionesDinamicas` in servicios.js, or the nav toggle logic will silently skip it.

Within that shell, several sections have their own self-contained JS-driven sub-behavior (all wired in the same `DOMContentLoaded` handler in servicios.js):

- **Servicios accordion**: `.highlight` list items (`data-target="detalle-*"`) show a matching `#detalle-*` block and flip a `▼/▲` arrow; `.cerrar-detalle` closes it back.
- **Contacto FAQ accordion**: `.faq-header` toggles an `active` class on its parent `.faq-item`.
- **Productos catalog/detail**: `#btn-ver-oraculo`/`#btn-volver-catalogo` swap `display` between `#catalogo-productos` and `#detalle-oraculo`. Inside the detail view, `cambiarVista(tipo, ruta, elementoThumb)` (a global function, called via inline `onclick` in the HTML) swaps the main media between image and video and updates the active thumbnail border.

When editing markup, keep IDs/classes in sync with these JS selectors — most wiring is done by id/class lookup rather than data attributes, and there's no framework to catch typos.

## Styling conventions

- CSS custom properties for the palette live in `:root` in [styles.css](styles.css): `--lavanda`, `--lavanda-clara`, `--fondo`.
- Font is Google Fonts "Cormorant Garamond", imported at the top of styles.css.
- The stylesheet is organized as one big file with `/* SECTION NAME */`-style comment banners per page section (NAVBAR, HERO, SOBRE MÍ, taller presencial, talleres, FAQ, productos, etc.) — match this convention when adding styles rather than introducing new files.
- No CSS preprocessor, no CSS modules/scoping — all class names are global, so keep new class names specific enough to avoid collisions across sections.
