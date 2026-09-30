---
name: Mami Cósmica
description: El sitio compuesto como su mazo de oráculo, con reversos de color por camino, anverso de cartulina y numerales romanos.
colors:
  violet: "#6B4FA8"
  violet-2: "#5A4192"
  violet-soft: "#EDE6F8"
  violet-mark: "#CDBDEE"
  rose: "#A93E70"
  rose-2: "#8F3260"
  rose-soft: "#FBE8EF"
  rose-mark: "#EDB5CB"
  aqua: "#2E8783"
  lilac: "#C9B5E8"
  paper: "#F3EEF8"
  stock: "#FCFAFD"
  line: "#DED3EB"
  ink: "#2E1F3D"
  ink-soft: "#54456A"
  ink-muted: "#6A5D80"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(3.4rem, 11vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  numeral:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  card-index:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.72em"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  image: "4px"
  thumb: "10px"
  card: "14px"
  pill: "999px"
spacing:
  card-inset: "15px"
  gutter: "20px"
  view-header: "56px"
  view-header-md: "80px"
  section: "64px"
  section-md: "96px"
components:
  button-violet:
    backgroundColor: "{colors.violet}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 25.6px"
    height: "48px"
  button-violet-hover:
    backgroundColor: "{colors.violet-2}"
  button-rose:
    backgroundColor: "{colors.rose}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 25.6px"
    height: "48px"
  button-rose-hover:
    backgroundColor: "{colors.rose-2}"
  button-white-shop:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.rose}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 25.6px"
    height: "48px"
  button-white-shop-hover:
    backgroundColor: "{colors.rose-soft}"
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 25.6px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.stock}"
  card-face:
    backgroundColor: "{colors.stock}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-inset}"
  card-back-session:
    backgroundColor: "{colors.violet}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
  card-back-shop:
    backgroundColor: "{colors.rose}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
  view-header-session:
    backgroundColor: "{colors.violet}"
    textColor: "#FFFFFF"
    typography: "{typography.headline}"
    padding: "{spacing.view-header-md} {spacing.gutter}"
  view-header-shop:
    backgroundColor: "{colors.rose}"
    textColor: "#FFFFFF"
    typography: "{typography.headline}"
    padding: "{spacing.view-header-md} {spacing.gutter}"
  nav:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    height: "64px"
  footer:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink-soft}"
---

# Design System: Mami Cósmica

## Overview

**Creative North Star: "El Mazo"**

El sitio es su mazo de oráculo. Cada vista es una carta numerada (I Servicios, II Talleres, III Productos, IV Journal, V Contacto) que se saca de la tirada, gira a su anverso y se lee. Todo el sistema sale de dos caras de una misma carta: el reverso, un campo de color plano con la chakana dibujada en filete; y el anverso, cartulina clara con doble filete impreso que enmarca una fotografía real. La página es lila pálido, como la mesa donde se tiende el mazo, y la tinta es ciruela.

El color dice el camino. Todo lo que lleva a una sesión (agendar, servicios, talleres, contacto) es violeta; todo lo que se compra (el Journal, el Oráculo, los productos) es rosa. El reverso de cada carta, la cabecera de cada vista y cada botón toman el tono del camino al que pertenecen, así que la visitante sabe si va a reservar tiempo o a comprar algo antes de leer. La aguamarina queda para detalles pequeños.

La densidad es de impreso, no de pantalla: datos concretos (modalidad, espera, precio, pasos) en listas con filetes, títulos grandes en una serif de alto contraste, texto sobrio en grotesca. El color es plano por principio. Rechaza el "cielo estrellado + cursiva dorada + tarjetas redondeadas" genérico de la astrología: sin brillos ni degradados. La magia es geometría exacta de su oficio (`components/site/Magic.tsx`): una rueda de carta astral que gira muy despacio detrás de la tirada y en las cabeceras, pocas estrellas de cuatro puntas que respiran, fases lunares en Sobre Mí, el Journal y el pie, y una pequeña constelación que se enciende al sacar una carta.

**Key Characteristics:**
- Dos caras: reverso de color con chakana geométrica, anverso de cartulina con doble filete.
- Color por camino: violeta para sesiones, rosa para compras.
- Numerales romanos como sistema de navegación: el orden del menú es el orden del mazo.
- Campos de color planos; la profundidad sólo la dan las cartas.
- Proporción de carta 5:8 en la tirada y en las imágenes de sección.

## Colors

Mesa lila y tinta ciruela, con dos campos de color que marcan el camino (violeta y rosa) y una aguamarina de detalle.

### Primary
- **Violeta de Sesión** (violet): el camino de las sesiones. Botón de Agendar y de Instagram, cabeceras de Servicios, Talleres y Contacto, el campo de la tirada en el hero, los reversos de esas cartas, numerales y lema sobre claro, iconos de hechos, hover y estado abierto de los acordeones, ítem activo del menú móvil. También es el color de sistema: `accent-color`, cursor de texto y anillo de foco.
- **Violeta Hondo** (violet-2): sólo el hover del botón violeta.
- **Violeta Velado** (violet-soft): texto de apoyo sobre un campo violeta y hover del botón blanco sobre ese campo.
- **Violeta de Filete** (violet-mark): la chakana y el numeral sobre un campo violeta.

### Secondary
- **Rosa de Compra** (rose): el camino de lo que se compra. Botón de Reservar Journal y de Ver detalles o pedir un producto, cabeceras de Productos y Journal, reversos de esas cartas y de los productos sin foto, la caja de precio, precios y subtítulos de edición, los regalos del Journal y la miniatura activa de la galería.
- **Rosa Hondo** (rose-2): sólo el hover del botón rosa.
- **Rosa Velado** (rose-soft): texto de apoyo sobre un campo rosa (precio tachado, nota de precio) y hover del botón blanco sobre ese campo.
- **Rosa de Filete** (rose-mark): la chakana y el numeral sobre un campo rosa.

### Tertiary
- **Aguamarina de Detalle** (aqua): sólo las marcas de verificación de las listas de lo que incluye un producto o el Journal.
- **Lila de Mesa** (lilac): la raya lateral del lema, la selección de texto, el hover de las miniaturas y la barra de desplazamiento.

### Neutral
- **Cartulina** (stock): el anverso de la carta, la banda de Sobre Mí, las celdas de pasos, el pie.
- **Mesa Lila** (paper): el fondo de página y de la barra de navegación.
- **Filete Impreso** (line): los dos filetes del anverso, divisores de listas, bordes de la barra y del pie, contorno del botón fantasma.
- **Tinta Ciruela** (ink): títulos y texto principal.
- **Tinta Suave** (ink-soft): párrafos secundarios, respuestas desplegadas, enlaces de menú en reposo, texto del pie.
- **Tinta Apagada** (ink-muted): notas mínimas (producto por llegar, idioma inactivo).

### Named Rules
**The Path-Coding Rule.** El color dice el camino: violeta para todo lo que lleva a una sesión, rosa para todo lo que se compra. Una vista, carta o botón toma el tono de su camino y nunca el del otro; la aguamarina sólo marca listas y nunca es fondo ni botón.

**The Tone Family Rule.** Cada camino es una familia completa (base, hondo, velado, filete) que se aplica en bloque con el tono de sesión o de compra. Sobre un campo de color, el título y los botones son blancos, el texto de apoyo usa el velado y la chakana y el numeral usan el filete.

**The Flat Field Rule.** Todo color se aplica como campo plano. Sin degradados, brillos ni desenfoques. Sobre un campo sólo va geometría en filete del color `--tone-mark`: chakana, rueda astral, estrellas de cuatro puntas y fases lunares. Toda decoración es `aria-hidden` y visible en reposo.

## Typography

**Display Font:** Gloock (con Georgia, serif)
**Body Font:** Hanken Grotesk (con system-ui, sans-serif), pesos 400 a 700

**Character:** Gloock es una serif de alto contraste y peso único, con aire de naipe impreso; carga títulos y numerales romanos. Hanken Grotesk es neutra y amable, y deja que los datos se lean sin adorno.

### Hierarchy
- **Display** (400, clamp(3.4rem, 11vw, 6rem), 0.92): sólo el nombre en el hero.
- **Numeral** (400, clamp(3rem, 8vw, 5.5rem), 1): el numeral romano de cada cabecera de vista, alineado por la línea base con su título.
- **Headline** (400, clamp(2.25rem, 5.5vw, 4rem), 1.08): títulos de vista y de Sobre Mí.
- **Title** (400, clamp(1.75rem, 3.5vw, 2.5rem), 1.08): subtítulos dentro de una vista; las tarjetas y preguntas usan tamaños fijos cercanos (1.375 a 1.75rem).
- **Body** (400, 1.0625rem, 1.7): texto corrido, con medida de 62 a 66ch y 1.8 de interlineado en párrafos largos.
- **Label** (600, 0.9375rem, 0.01em): botones y enlaces de acción.
- **Card Index** (600, 0.72em, 0.08em, mayúsculas): el índice en la esquina de cada carta de la tirada, como en una baraja.

### Named Rules
**The Hierarchy-by-Scale Rule.** Gloock trabaja siempre en peso 400; la jerarquía se hace con tamaño, nunca con negritas ni cursivas.

**The Roman Numeral Rule.** Los numerales romanos son navegación, no decoración: cada uno corresponde a una vista fija del mazo (I a V). No se inventan numerales para otras secciones.

## Layout

Una columna centrada de ancho `min(100% - 2.5rem, 1200px)`, con 20px de margen lateral en móvil. Las vistas alternan un campo de color a sangre en el tono de su camino (la cabecera, 56px de alto interior en móvil y 80px desde md) con un cuerpo sobre la mesa lila (64px arriba y abajo en móvil, 96px desde md).

El hero se parte en dos desde lg: presentación a la izquierda y la tirada sobre un campo violeta en el 46% derecho, hasta 880px de alto. En móvil la tirada pasa a una fila deslizable con encaje por carta bajo los botones.

Los cuerpos de vista usan rejillas asimétricas: imagen de carta fija en una columna estrecha (300px o 5fr) que se queda pegada al hacer scroll, y listas con filetes en la columna ancha. Los pasos de agenda son una rejilla de estaciones numeradas separadas por 1px de filete (1, 2 y 4 columnas). El pie es claro, en cartulina bajo un filete. Puntos de corte de Tailwind: sm 640px, md 768px, lg 1024px.

## Elevation & Depth

El sistema es plano: páginas, bandas, cabeceras, barra y pie no llevan sombra. La profundidad pertenece sólo a las cartas, que descansan sobre la mesa con una sombra corta de contacto y una larga y difusa. La barra de navegación y el pie se separan con un filete, no con sombra ni desenfoque.

### Shadow Vocabulary
- **Carta en la mesa** (`box-shadow: 0 1px 2px rgb(46 31 61 / 0.08), 0 14px 30px -14px rgb(46 31 61 / 0.35)`): todo anverso de cartulina.
- **Reverso en la mesa** (`box-shadow: 0 1px 2px rgb(46 31 61 / 0.18), 0 16px 32px -14px rgb(46 31 61 / 0.45)`): todo reverso de color, incluida la caja de precio.

### Named Rules
**The Only Cards Cast Shadows Rule.** Si algo proyecta sombra, es una carta. Botones, listas, cabeceras y bandas quedan planos.

## Shapes

La silueta rectora es la carta: rectángulo de 14px de radio en proporción 5:8 (5:7 en el retrato, 4:5 en las ediciones del Journal). El anverso lleva dos filetes interiores de 1px en color filete, a 7px (radio 9px) y 11px (radio 6px) del borde; la imagen se asienta a 15px del borde con esquinas de 4px. Los botones y las píldoras son totalmente redondeados (999px); los controles de desplegar son círculos de 32px con un anillo de 1px. El reverso dibuja la chakana, la cruz andina escalonada, como polígono geométrico exacto a cualquier tamaño.

## Components

### Buttons
Dos caminos con el mismo peso: mismas medidas, el color del camino.
- **Shape:** píldora (999px), 48px de alto mínimo, 12px por 25.6px de relleno.
- **Violet:** violeta con texto blanco; hover a violeta hondo. Para agendar y todo lo que lleva a una sesión.
- **Rose:** rosa con texto blanco; hover a rosa hondo. Para reservar el Journal y todo lo que se compra. En el hero va junto al violeta con el mismo tamaño.
- **White:** blanco con texto en el tono del campo; hover al velado de ese tono. Sólo sobre un campo de color (la caja de precio).
- **Ghost:** contorno interior de 1px en filete impreso y texto tinta; hover rellena de cartulina. Para el canal alternativo (WhatsApp junto a Instagram).
- **Hover / Focus / Active:** el color cambia en 200ms sólo con puntero que permite hover; al presionar escala a 0.97 en 160ms. Foco: contorno violeta de 2px a 3px de distancia, blanco sobre un campo de color.

### Cards / Containers
- **Anverso (card-face):** cartulina, 14px, doble filete impreso, sombra de carta en la mesa, imagen a 15px del borde. Enmarca imágenes de sección, productos, ediciones, el retrato y las tarjetas de talleres.
- **Reverso (card-back):** campo en el tono de su camino (violeta por defecto), 14px, chakana en el filete de ese tono, sombra de reverso. Además de la tirada, representa lo que aún no se revela: un producto sin foto se muestra boca abajo, en rosa.
- **Caja de precio:** un reverso rosa usado como contenedor, con el precio en Gloock, notas en rosa velado y el botón blanco.

### Navigation
- **Barra:** fija, 64px, mesa lila opaca con filete inferior. Marca en Gloock 1.375rem.
- **Enlaces:** Hanken 500, 0.9375rem, tinta suave; el activo pasa a tinta y dibuja un subrayado de 1.5px que crece desde la izquierda en 300ms.
- **Móvil:** dos trazos que se cruzan en una X; cajón que se despliega por altura de rejilla, con enlaces en Gloock 1.375rem separados por filetes, el activo en violeta. Esc lo cierra.
- **Idioma:** ES / EN en mayúsculas espaciadas, el activo en tinta.

### Footer
Claro: cartulina bajo un filete, marca en Gloock 1.75rem en tinta, datos en tinta suave, enlaces de Instagram y WhatsApp en tinta con subrayado al pasar.

### Accordions
Listas con filetes arriba y entre ítems. La pregunta o el servicio es el botón entero (56 a 64px de alto); a la derecha, un círculo de 32px con un más en violeta que al abrir gira 45° y se rellena de violeta con el más en blanco. El panel se despliega por altura de rejilla en 300ms. Un solo ítem abierto a la vez.

### La Tirada (Signature Component)
Las cinco cartas del mazo en abanico sobre el campo violeta (escritorio, 184px de ancho, 6° de giro por posición) o en fila deslizable (móvil, 104px). Cada reverso lleva el tono de su camino, así que III Productos y IV Journal se ven rosas entre las violetas, con el índice en la esquina (numeral en filete y nombre en mayúsculas blancas). La carta de la vista abierta se saca: sube 44px, se endereza y gira 180° sobre su eje en 520ms para mostrar su anverso con una foto real de la sección; sus vecinas se abren para no taparla. Con puntero fino, una carta en reposo se levanta 14px al pasar el cursor.

### View Header
Campo de color a sangre al comienzo de cada vista, en el tono de su camino: numeral romano en el filete del tono a escala de numeral, alineado por la línea base con el título en blanco, y una entrada opcional en el velado del tono a 62ch. Es la gramática compartida que hace que el sitio se lea como un mazo.

## Do's and Don'ts

### Do:
- **Do** asignar a toda vista, carta y botón nuevo el tono de su camino: violeta si lleva a una sesión, rosa si es algo que se compra.
- **Do** presentar las dos rutas de conversión (Agendar sesión y Reservar Journal) como botones de igual tamaño, violeta y rosa.
- **Do** usar el botón blanco sólo sobre un campo de color, con el texto en el tono del campo.
- **Do** enmarcar toda imagen de sección como anverso de carta: cartulina, doble filete, imagen a 15px, esquinas de 4px.
- **Do** abrir cada vista nueva con la cabecera de color y su numeral romano, y registrar su camino si debe aparecer en la tirada.
- **Do** mostrar lo que aún no existe como una carta boca abajo.
- **Do** mantener el movimiento en el gesto de sacar la carta y en entradas de 380ms con la curva `cubic-bezier(0.23, 1, 0.32, 1)`; todo decorado animado necesita un estado visible en reposo para `prefers-reduced-motion`.

### Don't:
- **Don't** usar degradados, brillos, desenfoques, cielos densos de estrellas ni cursiva dorada. Las estrellas son pocas, de cuatro puntas y fijas.
- **Don't** mezclar caminos: nada de rosa en una acción de sesión ni violeta en una de compra.
- **Don't** usar la aguamarina ni el lila como fondo o como botón.
- **Don't** poner sombra a nada que no sea una carta.
- **Don't** usar Gloock en negrita o cursiva; la jerarquía es de escala.
- **Don't** usar colores sueltos: todo color sale de los tokens de `@theme` en `index.css`.
