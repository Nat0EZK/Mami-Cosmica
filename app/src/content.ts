/* ==========================================================================
   Todo el texto del sitio vive aquí, separado de la maquetación.
   Editar una frase no obliga a tocar ningún componente.
   ========================================================================== */

/** Contacto directo por WhatsApp. Los botones del taller apuntan aquí. */
export const whatsapp = "https://wa.me/message/4T7CI7BQ5PPDO1";

export const nav = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#talleres", label: "Talleres" },
    { href: "#productos", label: "Productos" },
    { href: "#pre-venta", label: "Journal Cósmico" },
    { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
    title: "Mami Cósmica",
    subtitle: "Guía espiritual & sanadora cósmica",
    slogan:
        "La verdadera magia es la que se crea cuando decides profundizar en ti",
    cta: { label: "Journal Cósmico", href: "#pre-venta" },
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
            {
                label: "Carta astral familiar",
                detail: {
                    title: "Carta astral familiar",
                    body: "Cuando comprendemos la info en conjunto de cada miembro de la familia, tendremos más ideas de cómo se relacionan, los puntos en común y las diferentes. Al ver la carta de los papás y los hij@s podremos entender cómo mejorar la convivencia en el día a día y entender la dinámica familiar y los roles de cada uno.",
                },
            },
            {
                label: "Carta astral infantil",
                detail: {
                    title: "Carta astral infantil",
                    body: "Esta sesión varía según la edad del niñ@, si es bebé es una oportunidad maravillosa de aprender a formar el apego seguro y entender la energía de ese pequeño humanito que todavía no puede expresarse ni regularse por sí solo. De los 3 a 8 años, la lectura va más orientada a su crianza, educación, talentos, posibles bloqueos, linaje familiar y necesidades. A partir de los 9 años se pueden hacer lecturas personalizadas y además se puede volver a leer la carta para ver cómo está su energía y misión de alma.",
                },
            },
            { label: "Revolución Solar" },
            {
                label: "Astrocouching/ tarot",
                detail: {
                    title: "Astrocouching/ tarot",
                    body: "Esta sesión es para personas que ya conocen su carta astral y están buscando una guía que les permita conocer y entender la evolución de su alma actual.",
                },
            },
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
            "Presentación en bolsita sublimada",
            "Folleto informativo y libro digital",
        ],
        media: [
            { type: "image" as const, src: "img/oraculo-grande.jpg" },
            { type: "video" as const, src: "videos/oraculo.mp4" },
            { type: "video" as const, src: "videos/oraculo2.MOV" },
        ],
    },
};

export const preventa = {
    badge: "Pre-venta · hasta el 30 de setiembre",
    heading: "Journal Cósmico",
    subheading: "Planifica · Conecta · Manifiesta",
    tagline: "Un año para volver a ti",
    intro:
        "Nos acompañan los unicornios, dragones y elfas: una energía femenina, envolvente y transformadora para materializar y comprenderte en esta encarnación.",
    editionsHeading: "Elige tu edición",
    editions: [
        {
            image: "img/journal-unicornio.png",
            name: "Edición Unicornio",
            subtitle: "Recuerda tu magia y poder",
            body: "Elígela si quieres traer ternura, amor, inspiración y activar tu visión estelar.",
        },
        {
            image: "img/journal-dragona.png",
            name: "Edición Dragona",
            subtitle: "Integración y transformación",
            body: "Elígela si quieres fuerza y poder para transformar tus miedos en deseos.",
        },
    ],
    includesHeading: "Qué incluye",
    includes: [
        "Hojas sin fecha para tu journal diario: ciclo lunar, elementos, gratitud, deseos y la carta del oráculo del día.",
        "Calendario lunar 2027–2028: lunas nuevas, lunas llenas y eclipses.",
        "Los tránsitos astrológicos más importantes del año.",
        "Rituales, secretos y hechizos de magia cósmica.",
    ],
    bonusHeading: "Regalos exclusivos",
    bonusSubheading: "Para las primeras 11 personas de la pre-venta",
    bonus: [
        {
            icon: "pencil",
            title: "Nombre personalizado",
            body: "Grabado en la portada de tu journal.",
        },
        {
            icon: "postcard",
            title: "Postal ilustrada",
            body: "Con una ilustración original de la edición.",
        },
        {
            icon: "moon",
            title: 'Clase magistral "Crea tu año"',
            body: "Acceso libre a la clase astrológica en vivo.",
        },
    ],
    price: { pre: "S/ 111", regular: "S/ 133" },
    priceNote: "Pre-venta válida hasta el 30 de setiembre · Entregas a partir del 29 de octubre",
    ctaLabel: "Reservar por WhatsApp",
};
