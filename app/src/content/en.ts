/* ==========================================================================
   English translation of the site copy. Shape must mirror es.ts exactly —
   this is a rewrite for tone/idiom, not a literal word-for-word rendering.
   ========================================================================== */
import type { PreventaEdition, ServiceGroup } from "./types";

export const nav = {
    items: [
        { href: "#inicio", label: "Home" },
        { href: "#sobre-mi", label: "About Me" },
        { href: "#servicios", label: "Services" },
        { href: "#talleres", label: "Workshops" },
        { href: "#productos", label: "Products" },
        { href: "#pre-venta", label: "Cosmic Journal" },
        { href: "#contacto", label: "Contact" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
};

export const hero = {
    title: "Mami Cósmica",
    subtitle: "Spiritual guide & cosmic healer",
    slogan: "True magic is created the moment you choose to go deeper within yourself",
    cta: { label: "Cosmic Journal", href: "#pre-venta" },
};

export const about = {
    heading: "About Mami Cósmica",
    photos: [
        { src: "img/aboutme.jpg", alt: "About Mami Cósmica" },
        { src: "img/aboutme2.jpg", alt: "About Mami Cósmica 2" },
    ],
    paragraphs: [
        "Hi, I'm Kamilla, and I'm so glad you're here. Ever since I was a little girl, I've felt a powerful call from my spirit — back then I thought it was just dreams, and I'd gaze at the stars, pouring all my faith into my wishes. In 2020, when I found out I was going to be a mom, my very first thought was: “this child can't be stuck with such a scattered mother — I need to heal.” That's how I started exploring different holistic therapies, and that's when I found astrology. I recognized that language instantly and knew I had to study it. Once I understood my own birth chart, everything clicked: childhood wounds, insecurities, traumas, family relationships, repeating patterns — all of it. I decided to begin healing, and five years of consistency and magic later, the results have been extraordinary.",
        "I trained as a holistic therapist specializing in mothers, women, children, and families. I've studied and certified in magical herbalism, womb healing, Akashic records, Draconian magic, energy cleansing, therapeutic tarot, and several branches of astrology. In recent years my mediumship awakened, and I began channeling and remembering my “past” lives, along with messages from the universe.",
        "This past May I became a mother for the second time, and this time I chose a home birth — truly a spiritual transformation. My daughter Martina has become a great teacher too, a mirror of what I'm still healing, and she inspires me to keep growing while also making room for the pauses and quiet I need to reconnect with myself, my family, and my home.",
        "In 2023 we moved to the Sacred Valley in Cusco — this land has brought, and keeps bringing, so much healing and learning. We're currently finishing our first little home here, built with eco-friendly materials and set right into the mountainside. This is also where I hold in-person sessions and deep therapeutic work.",
    ],
};

export const services = {
    heading: "Services",
    groups: [
        {
            title: "Readings",
            image: { src: "img/lecturas.jpg", alt: "Mami Cósmica Readings" },
            items: [
                {
                    label: "Natal Birth Chart",
                    detail: {
                        title: "Natal Birth Chart",
                        body: "(Reprogram your matrix configuration) Getting to know your astrological blueprint — the configuration your soul chose to experience — will help you understand the missions, roles, patterns, wounds, and even traumas you're here to learn from in this lifetime.",
                    },
                },
                {
                    label: "Mother & Baby Birth Chart",
                    detail: {
                        title: "Mother & Baby Birth Chart",
                        body: "Understanding your child's energy, soul mission, and specific needs will help you live a more harmonious motherhood and build secure attachment rooted in emotional health and spiritual balance. First, it matters that you, as a woman, feel fulfilled and aligned with your own soul's path — because when you're well, you're ready to give your baby your very best.",
                    },
                },
                {
                    label: "Family Birth Chart",
                    detail: {
                        title: "Family Birth Chart",
                        body: "When we look at the chart of each family member together, we gain insight into how they relate to one another — where they align, and where they differ. By reading parents' and children's charts side by side, we can understand how to improve everyday life together and make sense of the family dynamic and each person's role within it.",
                    },
                },
                {
                    label: "Children's Birth Chart",
                    detail: {
                        title: "Children's Birth Chart",
                        body: "This session varies depending on the child's age. For a baby, it's a wonderful opportunity to learn how to build secure attachment and understand the energy of this little one who can't yet express or regulate themselves on their own. For children ages 3 to 8, the reading leans toward parenting, education, talents, possible blocks, family lineage, and needs. From age 9 onward, personalized readings are available, and the chart can also be revisited to check in on their energy and soul mission.",
                    },
                },
                { label: "Solar Return" },
                {
                    label: "Astro-Coaching / Tarot",
                    detail: {
                        title: "Astro-Coaching / Tarot",
                        body: "This session is for people who already know their birth chart and are looking for guidance to understand where their soul's journey stands right now.",
                    },
                },
                { label: "Astral Biodecoding" },
                { label: "Draconic Chart & Oracle" },
            ],
        },
        {
            title: "Therapies",
            image: { src: "img/terapias.jpg", alt: "Mami Cósmica Therapies" },
            items: [
                { label: "Astral Cleansing in the Akashic Records" },
                { label: "Soul & Starseed Origin Reconnection" },
                { label: "Releasing Karma from “Past” Lives" },
                { label: "Womb Reprogramming" },
                { label: "Lemurian Womb Healing" },
                { label: "Inner Child Reprogramming" },
                { label: "Motherhood Reprogramming" },
            ],
        },
    ] satisfies ServiceGroup[],
};

export const talleres = {
    heading: "Workshops",
    ctaLabel: "Inquire",
    cards: [
        {
            icon: { src: "img/bebe.png", alt: "Magic for Moms" },
            title: "Magic for Moms",
            body: "Coming soon",
        },
        {
            icon: { src: "img/utero.png", alt: "Womb Healing" },
            title: "Womb Healing",
            body: "Coming soon",
        },
    ],
};

export const contacto = {
    heading: "Contact & FAQ",
    faqs: [
        {
            q: "How Do I Book a Session?",
            a: [
                "To book and hold your date, send payment via Plin (a Peruvian instant-payment app) and confirm. Your slot is only held for 24 hours.",
                'The current wait time is about 2 weeks. If it\'s urgent, you can choose the "Botiquín Cósmico" (Cosmic First-Aid) option — an emergency therapeutic session for an additional fee.',
            ],
        },
        {
            q: "Rescheduling & Penalties",
            a: [
                "Rescheduling is allowed up to 2 days in advance. Your new date will be booked based on availability, typically about 2 weeks out.",
                "If you miss your session, it can be rescheduled with a 55% penalty fee.",
            ],
        },
        {
            q: "Zoom Policy",
            a: [
                "From the date of your session, you'll have 7 days to download the Zoom recording. After that, the video is deleted from the Zoom cloud and can no longer be recovered.",
                "It's your responsibility to download the video in time. If you'd like it stored in the cloud for a full year instead, that add-on service is available for an extra fee.",
            ],
        },
    ],
    instagram: {
        url: "https://www.instagram.com/mamicosmica/?hl=es-la",
        image: "img/aboutme.jpg",
        imageAlt: "Mami Cósmica on Instagram",
        label: "Book Your Session on Instagram",
    },
};

export const productos = {
    heading: "Our Magical Products",
    items: [
        { id: "oraculo", name: "Cosmic Oracle", image: "img/oraculomain.jpg", hasDetail: true },
        { id: "kit", name: "Ritual Kit", image: "img/velas.jpg" },
        { id: "cristales", name: "Crystals", image: "img/cristales.jpg" },
    ],
    detail: {
        title: "Cosmic Oracle",
        price: "Reference Price: $122 PEN",
        description:
            "The Cosmic Oracle gathers and decodes information from research, universal laws, channelings, symbols, astrology, and messages from astral and imagined beings. These belong to the three worlds of Andean cosmology — Hanan Pacha, Kay Pacha, and Uku Pacha — as interpreted through the author's own beliefs. Inside, you'll find a tool for self-discovery on every level, connecting you with the cosmic memories of your soul and of the whole planet, helping us all create a new reality in the fifth dimension.",
        includesHeading: "What's included:",
        includes: [
            "44 hand-illustrated cards",
            "Presented in a sublimated pouch",
            "Info booklet and digital book",
        ],
        media: [
            { type: "image" as const, src: "img/oraculo-grande.jpg" },
            { type: "video" as const, src: "videos/oraculo.mp4" },
            { type: "video" as const, src: "videos/oraculo2.MOV" },
        ],
    },
    ui: {
        viewDetails: "View Details",
        comingSoon: "Coming Soon",
        back: "Back to Catalog",
        viewVideo: "View video",
        viewImage: "View image",
    },
};

export const preventa = {
    badge: "Pre-sale · through September 30",
    heading: "Cosmic Journal",
    subheading: "Plan · Connect · Manifest",
    tagline: "A year to come home to yourself",
    intro:
        "This edition is guided by unicorns, dragons, and elves — a feminine, enveloping, transformative energy to help you manifest and understand yourself in this lifetime.",
    editionsHeading: "Choose Your Edition",
    coverAltPrefix: "Cosmic Journal cover",
    watchVideoLabel: "Watch video",
    editions: [
        {
            image: "img/journal-unicornio.png",
            name: "Unicorn Edition",
            subtitle: "Remember Your Magic and Power",
            body: "Choose this one to invite tenderness, love, inspiration, and to awaken your stellar vision.",
        },
        {
            image: "img/journal-dragona.png",
            name: "Dragon Edition",
            subtitle: "Integration and Transformation",
            body: "Choose this one for the strength and power to transform your fears into desires.",
            video: "videos/journal1.MP4",
        },
    ] satisfies PreventaEdition[],
    includesHeading: "What's Included",
    includes: [
        "Undated pages for your daily journaling: lunar cycle, elements, gratitude, wishes, and your daily oracle card.",
        "2027–2028 lunar calendar: new moons, full moons, and eclipses.",
        "The year's most important astrological transits.",
        "Rituals, secrets, and cosmic magic spells.",
    ],
    bonusHeading: "Exclusive Gifts",
    bonusSubheading: "For the first 11 people to pre-order",
    bonus: [
        {
            icon: "pencil",
            title: "Personalized Name",
            body: "Engraved on your journal's cover.",
        },
        {
            icon: "postcard",
            title: "Illustrated Postcard",
            body: "Featuring original artwork from your edition.",
        },
        {
            icon: "moon",
            title: '"Create Your Year" Masterclass',
            body: "Free access to the live astrology class.",
        },
    ],
    priceLabel: "Pre-sale Price",
    price: { pre: "S/ 111", regular: "S/ 133" },
    priceNote: "Pre-sale valid through September 30 · Delivery starts October 29",
    ctaLabel: "Reserve via WhatsApp",
};
