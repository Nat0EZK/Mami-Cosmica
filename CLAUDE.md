# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

**Mami Cósmica** — sitio de una sola página (contenido en español) para una
práctica de astrología y terapias holísticas: lecturas de carta astral,
terapias, talleres, venta del Oráculo Cósmico y pre-venta del Journal Cósmico.
Bilingüe: español (por defecto) e inglés.

Es una aplicación **React + TypeScript + Vite + Tailwind v4**, dentro de `app/`.

> Antes fue un sitio estático de HTML/CSS/JS en la raíz. Se retiró al portar
> todo a React; vive en el historial de git si hiciera falta consultarlo.

## Comandos

Todos se ejecutan dentro de `app/`:

```bash
npm install        # dependencias
npm run dev        # servidor de desarrollo (ejecuta sync:assets antes)
npm run build      # tsc -b && vite build → app/dist/ (ejecuta sync:assets antes)
npm run preview    # sirve el build de producción
npm run lint        # oxlint
npm run sync:assets # copia img/ y videos/ de la raíz a app/public/
```

No hay tests. Para validar un cambio: `npx tsc -b --noEmit`, `npm run lint` y
revisarlo en el navegador con `npm run dev`.

## Estructura

- `app/src/content/` — **todo el texto del sitio**, un archivo por idioma
  (`es.ts`, `en.ts`). Cambiar una frase, un precio o una fecha se hace aquí,
  no en los componentes. Ver "Idiomas" abajo.
- `app/src/components/site/` — una sección por archivo (`Hero`, `About`,
  `Services`, `Talleres`, `Productos`, `Preventa`, `Contacto`, `Footer`).
  `Card.tsx` tiene las piezas compartidas: reverso de carta (`CardBack`),
  cabecera de vista (`ViewHeader`) y los numerales romanos de cada vista.
- `app/src/index.css` — **todo el sistema visual**: tokens, tipografía,
  botones (`btn`, `btn-teal`, `btn-night`, `btn-ghost`), la carta
  (`card-face`, `card-back`) y el movimiento de la tirada.
- `PRODUCT.md` y `.impeccable/` — contexto del producto y contrato de
  diseño que usa la skill `impeccable`.
- `img/`, `videos/` — **assets en la raíz, no en `app/public/`**.
- Alias `@/` → `app/src/` (definido en `tsconfig.app.json` y `vite.config.ts`).
- Las rutas de assets en el contenido son relativas (`img/…`, `videos/…`) y
  Vite usa `base: './'`, así que el build funciona bajo cualquier subruta.

### Assets: la raíz manda

`app/public/img/` y `app/public/videos/` son **copias generadas** y están en
`.gitignore`. `scripts/sync-assets.mjs` las regenera antes de cada `dev` y
cada `build`. Se hizo así porque `oraculo2.MOV` pesa 28 MB y duplicarlo
dejaría casi 60 MB permanentes en el historial de git.

**Añade imágenes nuevas en `img/` de la raíz**, nunca directamente en
`app/public/`: esa carpeta se sobrescribe.

## Navegación: secciones como vistas, no rutas

No hay React Router. `App.tsx` mapea hashes (`#servicios`, `#talleres`,
`#productos`, `#pre-venta`, `#contacto`) a un `VIEWS` record; sólo una vista está
montada a la vez y se renderiza bajo Inicio + Sobre Mí, que siempre están
visibles. Los enlaces internos (`a[href^="#"]`) se capturan con un único
listener delegado en `document`, no con `onClick` por componente. El hash de
la URL es la fuente de verdad — permite compartir enlaces directos y hace que
atrás/adelante del navegador funcionen vía `popstate`. Si añades una sección
nueva que deba comportarse como vista, regístrala en `VIEWS`.

## Idiomas

`LocaleProvider` (`app/src/lib/locale.tsx`) guarda el idioma en
`localStorage` y actualiza `<html lang>`; el selector está en `Nav`. Los
componentes leen el texto con `useContent()`, nunca importando `es.ts`
directamente.

`ContentShape = typeof es`, así que **`es.ts` es la referencia**: `en.ts` debe
tener exactamente la misma forma y `tsc` falla si no. Al añadir o cambiar
texto, edita los dos. `en.ts` es una adaptación de tono, no una traducción
literal. Lo que es igual en ambos idiomas (p. ej. el enlace de WhatsApp)
vive en `content/index.ts`.

## Sistema visual — "El Mazo"

El sitio se compone como su Oráculo Cósmico: cada vista es una carta
numerada (I Servicios … V Contacto), con doble filete en el anverso y una
chakana en el reverso. La paleta sale de sus ilustraciones pastel y **cada
color tiene un significado**:

- **Violeta** (`violet*`, clase `tone-session`): todo lo de sesiones:
  Agendar, Servicios, Talleres, Contacto.
- **Rosa** (`rose*`, clase `tone-shop`): todo lo que se compra: Journal,
  Oráculo, Productos. `toneOf(href)` en `Card.tsx` decide el tono de cada vista
  y de cada carta.
- **Aguamarina** (`aqua`): sólo detalles (marcas de lista).
- Fondo `paper`/`stock`, filetes `line`, texto en tinta ciruela `ink*`.

**Usa esos tokens en vez de colores sueltos.** Dentro de un campo de color,
`--tone`, `--tone-soft` y `--tone-mark` dan el tono activo (`btn-white` los usa).

- Display: **Gloock**. Texto: **Hanken Grotesk**. Desde Google Fonts en
  `app/index.html`.
- Campos de color planos: sin brillos ni degradados. La "magia" es geometría
  exacta en `Magic.tsx` (rueda astral, estrellas de cuatro puntas, fases
  lunares, chispas al sacar una carta), siempre `aria-hidden` y visible en
  reposo.
- Un solo momento de movimiento: en la tirada del Inicio, la carta de la vista
  abierta se levanta y gira a su anverso (`.deck-card` / `.deck-flip`); el
  abanico se abre a su lado. La posición de cada carta llega en la variable
  CSS `--rest`, para que el hover (`translateY`) se sume sin pisarla.
- Cambio de idioma: la página nueva crece como una luna desde el botón
  ES/EN (View Transitions; `LanguageSwitch` en `Nav.tsx` fija `--moon-x/y/r`,
  la animación está en `index.css`). Sin soporte, el cambio es instantáneo.
- `prefers-reduced-motion` se respeta globalmente. **Ojo:** la regla recorta
  las animaciones a 0.01 ms, así que nada puede depender de aparecer a mitad
  de animación: todo tiene que ser visible en reposo.

## Detalles que conviene saber

- `lucide-react` ya **no exporta logotipos de marca**. El icono de Instagram
  está en línea dentro de `Contacto.tsx`.
- Productos sin foto se muestran como carta boca abajo (`onError` en
  `ProductCard`), así que una imagen que falta no rompe la cuadrícula.
- El servidor de desarrollo de Vite responde `200` con el `index.html` para
  archivos que no existen, así que **una imagen rota no se nota en `dev`**.
  Compruébalo con `npm run build` + `npm run preview`.

## Pendiente

- Faltan `img/velas.jpg` e `img/cristales.jpg` (los usa Productos).
- Las dos tarjetas de Talleres tienen "Falta" como texto provisional.

## Despliegue

`.github/workflows/deploy.yml` compila `app/` y publica `app/dist/` en GitHub
Pages en cada push a `main`. Además `main.tsx` monta `<Analytics />` de
`@vercel/analytics`, que sólo registra datos si el sitio se sirve desde Vercel.
