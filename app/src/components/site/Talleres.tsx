import { useState } from "react";
import FadeContent from "@/components/FadeContent";
import { talleres } from "@/content";

/* Formas orgánicas: cada tarjeta muta suavemente al pasar el cursor */
const BLOBS = [
    { rest: "42% 58% 70% 30% / 45% 45% 55% 55%", hover: "55% 45% 38% 62% / 52% 38% 62% 48%" },
    { rest: "60% 40% 30% 70% / 60% 30% 70% 40%", hover: "40% 60% 62% 38% / 45% 58% 42% 55%" },
];

export function Talleres() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section
            id="talleres"
            className="relative min-h-screen overflow-hidden px-6 py-24 text-center md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at 12% 18%, rgba(143,121,184,.10) 0%, transparent 45%), radial-gradient(ellipse at 88% 82%, rgba(201,162,39,.09) 0%, transparent 45%), #FAF6EF",
            }}
        >
            <FadeContent blur duration={800} initialOpacity={0}>
                <div className="mb-24">
                    <div aria-hidden="true" className="twinkle mb-4 text-[2rem] leading-none text-gold-600">
                        ☾
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6vw,3.6rem)] font-medium tracking-[0.02em] text-lav-800">
                        {talleres.heading}
                    </h2>
                    <span
                        aria-hidden="true"
                        className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                    />
                </div>
            </FadeContent>

            <div className="relative mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-12">
                {/* Constelación de fondo entre las dos tarjetas */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-90"
                    style={{
                        backgroundImage: [
                            "radial-gradient(1.6px 1.6px at 20% 30%, rgba(168,132,47,.45), transparent)",
                            "radial-gradient(1.4px 1.4px at 50% 12%, rgba(109,78,156,.40), transparent)",
                            "radial-gradient(1.5px 1.5px at 78% 34%, rgba(168,132,47,.40), transparent)",
                            "radial-gradient(1.3px 1.3px at 62% 82%, rgba(109,78,156,.35), transparent)",
                            "radial-gradient(1.4px 1.4px at 30% 76%, rgba(168,132,47,.35), transparent)",
                        ].join(","),
                    }}
                />

                {talleres.cards.map((card, i) => (
                    <FadeContent key={card.title} blur duration={900} delay={i * 120} initialOpacity={0}>
                        <article
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative flex aspect-square w-[min(440px,88vw)] flex-col items-center justify-center border-2 border-lav-600/28 p-8 text-center shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2.5 hover:border-lav-600/40 hover:shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12),0_0_45px_rgba(143,121,184,.3)] md:p-12"
                            style={{
                                borderRadius: hovered === i ? BLOBS[i].hover : BLOBS[i].rest,
                                background:
                                    "linear-gradient(150deg, rgba(253,251,247,.95) 0%, rgba(244,237,226,.90) 100%)",
                                transitionProperty: "border-radius, transform, box-shadow, border-color",
                            }}
                        >
                            <div className="relative z-10 max-w-[82%]">
                                <img
                                    src={card.icon.src}
                                    alt={card.icon.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="mx-auto mb-6 h-[88px] w-auto drop-shadow-[0_6px_14px_rgba(47,32,71,.16)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                                    style={{
                                        transform: hovered === i ? "translateY(-5px) scale(1.05)" : "none",
                                    }}
                                />
                                <h3 className="mb-3 font-display text-[clamp(1.5rem,3vw,1.95rem)] font-semibold leading-tight text-lav-800">
                                    {card.title}
                                </h3>
                                <p className="mb-8 text-[0.9375rem] leading-relaxed text-ink-muted">
                                    {card.body}
                                </p>
                                <a
                                    href="#contacto"
                                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-br from-lav-600 to-lav-700 px-8 py-3 text-[0.9375rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_3px_12px_rgba(64,46,99,.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(64,46,99,.32)]"
                                >
                                    Consulta
                                </a>
                            </div>
                        </article>
                    </FadeContent>
                ))}
            </div>
        </section>
    );
}
