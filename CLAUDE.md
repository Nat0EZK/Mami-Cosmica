# CLAUDE.md

Guía para Claude Code (claude.ai/code) al trabajar en este repositorio.

## Qué es

**Mami Cósmica** — sitio de una sola página (contenido en español) para una
práctica de astrología y terapias holísticas: lecturas de carta astral,
terapias, el taller presencial "Útero Cósmico" y venta del Oráculo Cósmico.

Es una aplicación **React + TypeScript + Vite + Tailwind v4**, dentro de `app/`.

> Antes fue un sitio estático de HTML/CSS/JS en la raíz. Se retiró al portar
> todo a React; vive en el historial de git si hiciera falta consultarlo.

## Comandos

Todos se ejecutan dentro de `app/`:

```bash
npm install        # dependencias
npm run dev        # servidor de desarrollo
npm run build      # tsc -b && vite build → app/dist/
npm run preview    # sirve el build de producción
npm run sync:assets # copia img/ y videos/ de la raíz a app/public/
```

No hay tests. Para validar un cambio: `npx tsc -b --noEmit` y revisarlo en el
navegador con `npm run dev`.

## Estructura

- `app/src/content.ts` — **todo el texto del sitio**. Cambiar una frase, un
  precio o una fecha se hace aquí, no en los componentes.
- `app/src/components/site/` — una sección por archivo: `Nav`, `Hero`,
  `About`, `Services`, `Taller`, `Talleres`, `Productos`, `Contacto`, más
  `Starfield` y `Ornament` (decoración compartida).
- `app/src/components/` — componentes de React Bits (`SplitText`, `Magnet`,
  `SpotlightCard`, `FadeContent`, `ClickSpark`, `SoftAurora`).
- `app/src/components/ui/` — componentes de shadcn y Magic UI.
- `app/src/index.css` — tema de shadcn + **capa de marca** al final
  (tokens, tipografía, decoración). Es donde vive el sistema visual.
- `img/`, `videos/` — **assets en la raíz, no en `app/public/`**.

### Assets: la raíz manda

`app/public/img/` y `app/public/videos/` son **copias generadas** y están en
`.gitignore`. `scripts/sync-assets.mjs` las regenera antes de cada `dev` y
cada `build`. Se hizo así porque `oraculo2.MOV` pesa 28 MB y duplicarlo
dejaría casi 60 MB permanentes en el historial de git.

**Añade imágenes nuevas en `img/` de la raíz**, nunca directamente en
`app/public/`: esa carpeta se sobrescribe.

## Sistema visual — "Cielo Sereno"

Crema tibia, lavanda espiritual y oro astral. Los tokens están en el bloque
`@theme` de `index.css`: `cream-*`, `ink-*`, `lav-*`, `gold-*`, `night-*`.
**Usa esos tokens en vez de colores sueltos.**

- Display: **Cormorant Garamond**. Texto: **Raleway**. Ambas desde Google
  Fonts en `app/index.html`.
- El movimiento es sobrio a propósito: la marca es de sanación, no de
  espectáculo. Duraciones cortas y curvas suaves.
- `prefers-reduced-motion` se respeta globalmente. **Ojo:** la regla recorta
  las animaciones a 0.01 ms, así que cualquier elemento que empiece en
  `opacity: 0` y sólo aparezca a mitad de animación se queda invisible. Si
  añades decoración animada, dale un estado visible en reposo (ver
  `.sparkle-star`).

## Componentes de terceros: están parcheados

Los componentes de React Bits y Magic UI se editan al instalarlos. Si
reinstalas alguno, estos arreglos se pierden:

- **`Magnet`** y **`SpotlightCard`** — guardaban la posición del cursor en
  estado de React y re-renderizaban en cada `mousemove`. Ahora escriben
  directamente sobre el nodo dentro de un `requestAnimationFrame`. `Magnet`
  además animaba con `transform .3s`, lo que hacía que el botón persiguiera
  al cursor con retraso.
- **`SpotlightCard`** usa `cn()` (tailwind-merge) para que su
  `bg-neutral-900` por defecto no gane a los colores de marca.
- **`SparklesText`** — acepta `as` para montarse como `<h1>`, no fuerza
  `<strong>` ni `font-bold`, y genera las estrellas una sola vez en vez de
  recalcularlas con `setInterval` cada 100 ms.

## Detalles que conviene saber

- `lucide-react` ya **no exporta logotipos de marca**. El icono de Instagram
  está en línea dentro de `Contacto.tsx`.
- `SplitText` parte el título en un `<div>` por letra. Un
  `background-clip: text` sobre el `<h1>` no llega a pintarlas: heredan el
  relleno transparente y el título desaparece.
- El servidor de desarrollo de Vite responde `200` con el `index.html` para
  archivos que no existen, así que **una imagen rota no se nota en `dev`**.
  Compruébalo con `npm run build` + `npm run preview`.

## Pendiente

- Faltan `img/velas.jpg` e `img/cristales.jpg` (los usa Productos).
- Las dos tarjetas de Talleres tienen "Falta" como texto provisional.
- El sitio aún no está desplegado en ningún sitio.
