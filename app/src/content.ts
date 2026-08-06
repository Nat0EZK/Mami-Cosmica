/* ==========================================================================
   Todo el texto del sitio vive aquí, separado de la maquetación.
   Editar una frase no obliga a tocar ningún componente.
   ========================================================================== */

export const nav = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#taller-presencial", label: "Útero Cósmico" },
    { href: "#talleres", label: "Talleres" },
    { href: "#productos", label: "Productos" },
    { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
    title: "Mami Cósmica",
    subtitle: "Guía espiritual & sanadora cósmica",
    slogan:
        "La verdadera magia es la que se crea cuando decides profundizar en ti",
    cta: { label: "Empieza", href: "#taller-presencial" },
};

export const about = {
    heading: "Sobre Mami Cósmica",
    photos: [
        { src: "img/aboutme.jpg", alt: "Sobre Mami Cósmica" },
        { src: "img/aboutme2.jpg", alt: "Sobre Mami Cósmica 2" },
    ],
    paragraphs: [
        "¡Hola! Me llamo Kamilla y estoy muy feliz de que estés aquí. Desde niña he sentido un llamado muy fuerte de mi espíritu, en ese entonces creía que eran sueños y contemplaba a las estrellas con toda la fé en mis deseos. En el 2020 cuando supe que sería mamá, mi primer pensamiento al respecto fue: “mi hijo no puede tener a esta mamá tan loca jeje, tengo que sanar”. Así fue cómo comencé a llevar distintas terapias holísticas y me topé con la astrología, reconocí ese lenguaje inmediatamente y decidí estudiarlo. Cuando comprendí mi carta astral todo hizo sentido, las heridas de la infancia, inseguridades, traumas, relación con mi familia, repetición de patrones, etc. Decidí comenzar a sanar y los resultados de la constancia y la magia son maravillosos 5 años después.",
        "Me formé como terapeuta holística, especializada en mamás, mujeres, niños y familias. He estudiado y me he certificado en herbolaria mágica, sanación uterina, registros akashicos, magia draconiana, limpiezas energéticas, tarot terapéutico y distintas ramas de la astrología. En los últimos años se despertó mi canal medium y comencé a canalizar y recordar mis vidas “pasadas” así como mensajes del universo.",
        "En mayo de este año fui mamá por segunda vez, en esta ocasión decidí dar un parto en casa, que realmente fue toda una transformación espiritual. Mi hija Martina también está siendo una gran maestra, como un reflejo de lo que aún sigo en camino a sanar y me inspira a seguir creciendo pero también generando pausas y silencios necesarios para conectar conmigo misma, mi familia y mi hogar.",
        "En el 2023 decidimos mudarnos al Valle Sagrado, Cusco; este territorio trajo y sigue trayendo muchísima sanación y aprendizaje, actualmente estamos terminando de construir nuestra primera casita, hecha con materiales ecológicos y situada en la montaña. Aquí también atiendo sesiones personales y terapias profundas.",
    ],
};

export type ServiceItem = {
    label: string;
    detail?: { title: string; body: string };
};

export const services: {
    title: string;
    image: { src: string; alt: string };
    items: ServiceItem[];
}[] = [
    {
        title: "Lecturas",
        image: { src: "img/lecturas.jpg", alt: "Lecturas Mami Cósmica" },
        items: [
            {
                label: "Carta astral natal",
                detail: {
                    title: "Carta astral natal",
                    body: "(Reprograma tu configuración matrix) Conocer tu programa astral, esa configuración que tu alma decidió experimentar, te ayudará a comprender cuáles son las misiones, funciones, patrones, heridas e incluso traumas que te toca aprender en esta vida.",
                },
            },
            {
                label: "Carta astral mamá y bebé",
                detail: {
                    title: "Carta astral mamá y bebé",
                    body: "Entender y comprender mejor las energías de tu hij@, su misión de alma, sus necesidades específicas; te ayudará a vivir una maternidad más armónica y a generar un apego seguro con salud emocional y equilibrio espiritual. Primero, es importante que como mujer puedas estar contenta y cumpliendo los planes de tu alma, al tú estar bien podrás estar lista para entregarle lo mejor a tu bebé.",
                },
            },
            { label: "Carta astral familiar" },
            { label: "Carta astral infaltin" },
            { label: "Revolución Solar" },
            { label: "Astrocouching/ tarot" },
            { label: "Biodescodificación astral" },
            { label: "Carta dracónica y oráculo" },
        ],
    },
    {
        title: "Terapias",
        image: { src: "img/terapias.jpg", alt: "Terapias Mami Cósmica" },
        items: [
            { label: "Limpieza astral en Registros Akashicos" },
            { label: "Reconexión del alma/origen estelar" },
            { label: "Liberación de karmas de vidas “pasadas”" },
            { label: "Reprogramación Uterina" },
            { label: "Sanación Uterina Lemurianar" },
            { label: "Reprogramación niña interior" },
            { label: "Reprogramación maternidad" },
        ],
    },
];

export const taller = {
    badges: ["Taller Presencial", "Lima"],
    title: "Reconexión Uterina Cósmica",
    subtitle: "Útero Cósmico",
    glance: {
        heading: "En un vistazo",
        items: [
            "Taller presencial e íntimo",
            "Grupos reducidos",
            "Incluye PDF + cuarzo activado",
            "Cupos limitados",
        ],
    },
    illustration: { src: "img/utero-taller.png", alt: "Reconexión Uterina Cósmica" },
    meta: {
        heading: "Detalles",
        items: [
            { icon: "calendar", text: "Domingo 6 de setiembre" },
            { icon: "clock", text: "10:00 am – 3:00 pm" },
            { icon: "pin", text: "Lima" },
        ],
    },
    aboutHeading: "Sobre el Taller",
    about: [
        "¿Crees que es posible vivir una experiencia que regenere tu biología, tu alma y transforme tu espíritu? Después de varios encuentros exitosos, íntimos y transformadores, he tomado la decisión de compartirte algo que antes me daba un poco de miedo por el qué dirán, jeje. Pero aquí una muestra de que estamos en crecimiento, y eso es hermoso.",
        "Se habla mucho de sanar, del linaje, de la infancia, de la concepción, de la gestación; pero quizás no se entiende todavía cómo activar y transformar la realidad para que no quede solamente en un evento, un momento de reflexión que después no se pueda materializar en tu día a día.",
        "Desde niña he tenido recuerdos de mis vidas “pasadas”, siempre los mismos sueños. Cuando activé mi canal médium y decidí conectar con mis dones, comprendí que en mis manos sostenía un gran poder: el sentir, liberar y transformar la energía.",
        "Recordé los rituales que compartía como sacerdotisa y guardiana de los cristales: cada cristal guarda una frecuencia vibratoria que nos permite conectar con el Quantum y, poco a poco, regenerar y activar nuevas fibras de nuestro ADN. Los científicos solo conocen un pequeño porcentaje de su potencial, ¡y el de nuestra biología es una locura! Literalmente, esas cosas que ves en películas de ciencia ficción las haremos realidad en el taller.",
        "En este espacio podrás comprender cómo funciona esto, activar tu propio cristal, sanar tu pasado y, de una vez por todas, conectar con la línea de tiempo que deseas. Porque tenemos que hacernos cargo de nuestra vida.",
    ],
    quote: "“Regálate este espacio sagrado.\nTu útero es tu poder, tu guía, tu origen.”",
    pillarsHeading: "Pilares & Beneficios",
    pillars: [
        {
            title: "Sanación Uterina",
            body: "Un ritual de sanación uterina cósmica para liberar y transformar la memoria de tu cuerpo y tu linaje.",
        },
        {
            title: "Reconexión Espiritual",
            body: "Astrología y física cuántica se unen para reconectarte con tu energía, tu cuerpo y tu espíritu.",
        },
        {
            title: "Memoria Cósmica",
            body: "Activa el recuerdo de tus vidas “pasadas” y conecta con la línea de tiempo que deseas vivir.",
        },
        {
            title: "Poder y Transformación",
            body: "Activa tu propio cristal y aprende a transformar la energía para materializarla en tu día a día.",
        },
    ],
    programHeading: "Actividades del Taller",
    activities: [
        { icon: "sun", text: "Teoría astral sobre la energía, el cuerpo y espíritu. Astrología y física cuántica." },
        { icon: "heart", text: "Ritual de sanación uterina cósmica" },
        { icon: "sparkle", text: "Meditación y activación de códigos sagrados de regeneración celular" },
        { icon: "music", text: "Danza somática y arte terapia" },
        { icon: "flower", text: "Limpieza energética y astral profunda" },
        { icon: "dragon", text: "Oráculo y hechizo" },
    ],
    includes: {
        heading: "Incluye",
        items: [
            "Material en PDF y ejercicios para practicar post taller",
            "Cuarzo personal activado, para seguir la sanación uterina en casa",
        ],
    },
    pricingHeading: "Inversión",
    prices: [
        { tag: "Pre-venta Secreta", price: "S/ 355", ribbon: "Promo", cta: "Pre-venta" },
        {
            tag: "Promo Dupla",
            price: "S/ 611",
            ribbon: "Promo",
            note: "Amigas, mamá e hija, hermanas — 2 cupos",
            cta: "Reservar dupla",
            featured: true,
        },
        { tag: "Regular", price: "S/ 444", cta: "Regular" },
    ],
    ctaLabel: "Reserva Tu Lugar Ahora",
    ctaSub: "Cupos Limitados — Grupos Íntimos",
    footerQuote: "Tu útero es tu poder, tu guía, tu origen.",
};

export const talleres = {
    heading: "Talleres",
    cards: [
        {
            icon: { src: "img/bebe.png", alt: "Magia para Mamas" },
            title: "Magia para Mamas",
            body: "Falta",
        },
        {
            icon: { src: "img/utero.png", alt: "Sanación uterina" },
            title: "Sanación Uterina",
            body: "Falta",
        },
    ],
};

export const contacto = {
    heading: "Contacto & FAQ",
    faqs: [
        {
            q: "¿Cómo Agendar?",
            a: [
                "El tiempo de espera para agendar tu sesión es aproximadamente entre 2 a 4 semanas según disponibilidad.",
                'En el caso de que sea una sesión o terapia de "urgencia", puedes elegir la opción "Botiquín Cósmico".',
                "Para confirmar la cita se deberá abonar el monto total de preferencia o el 50% y el restante hasta 24 horas antes de la fecha pactada.",
            ],
        },
        {
            q: "Política de Zoom",
            a: [
                "A partir de la fecha de la sesión, se darán 7 días para poder descargar el video del zoom. Luego de esa fecha, el video es borrado de la nube de zoom y ya no se puede recuperar.",
                "Es responsabilidad de la mami el descargar con tiempo el video. Si se desea el servicio adicional de almacenamiento en la nube por 1 año se puede agregar el adicional de pago.",
            ],
        },
    ],
    instagram: {
        url: "https://www.instagram.com/mamicosmica/?hl=es-la",
        image: "img/aboutme.jpg",
        label: "Agenda tu Cita en Instagram",
    },
};

export const productos = {
    heading: "Nuestros Productos Mágicos",
    items: [
        { id: "oraculo", name: "Oráculo Cósmico", image: "img/oraculomain.jpg", hasDetail: true },
        { id: "kit", name: "Kit Ritual", image: "img/velas.jpg" },
        { id: "cristales", name: "Cristales", image: "img/cristales.jpg" },
    ],
    detail: {
        title: "Oráculo Cósmico",
        price: "Valor Referencial: $122 PEN",
        description:
            "El Oráculo Cósmico recoge y decodifica información de investigaciones, leyes universales, canalizaciones, símbolos, astrología y mensajes de seres astrales y/o imaginarios. Estos pertenecen a los 3 mundos de la cosmovisión andina (Hanan Pacha, Kay Pacha y Uku Pacha) desde la interpretación y creencias de la autora. Encontrarás una herramienta de autoconocimiento a todo nivel, estarás en contacto con los recuerdos cósmicos de tu alma y de todo el planeta que nos ayudan a crear una nueva realidad en la quinta dimensión.",
        includesHeading: "Lo que incluye:",
        includes: [
            "44 Cartas Ilustradas a mano",
            "Presentación en cajita",
            "Folleto informativo y libro digital",
        ],
        media: [
            { type: "image" as const, src: "img/oraculo-grande.jpg" },
            { type: "video" as const, src: "videos/oraculo.mp4" },
            { type: "video" as const, src: "videos/oraculo2.MOV" },
        ],
    },
};
