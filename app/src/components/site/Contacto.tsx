import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { contacto } from "@/content";
import { cn } from "@/lib/utils";

/* lucide-react ya no incluye logotipos de marca, así que va en línea. */
function InstagramGlyph({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <rect x="2" y="2" width="20" height="20" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function Contacto() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section
            id="contacto"
            className="relative flex min-h-screen flex-col items-center px-6 py-24 md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at 0% 0%, rgba(143,121,184,.12) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(201,162,39,.10) 0%, transparent 50%), #FAF6EF",
            }}
        >
            <FadeContent blur duration={800} initialOpacity={0}>
                <div className="mb-16 text-center">
                    <div aria-hidden="true" className="twinkle mb-4 text-[1.2rem] leading-none text-gold-600">
                        ✦
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6vw,3.6rem)] font-medium tracking-[0.02em] text-lav-800">
                        {contacto.heading}
                    </h2>
                    <span
                        aria-hidden="true"
                        className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                    />
                </div>
            </FadeContent>

            {/* Preguntas frecuentes */}
            <div className="flex w-full max-w-[820px] flex-col gap-4">
                {contacto.faqs.map((faq, i) => {
                    const isOpen = open === i;

                    return (
                        <FadeContent key={faq.q} blur duration={800} delay={i * 90} initialOpacity={0}>
                            <div
                                className={cn(
                                    "overflow-hidden rounded-3xl border bg-cream-50/92 shadow-sm transition-all duration-300",
                                    isOpen
                                        ? "border-lav-600/32 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]"
                                        : "border-lav-600/15 hover:border-lav-600/26 hover:shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]",
                                )}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-lav-100/45 md:px-8"
                                >
                                    <h3 className="font-display text-[clamp(1.2rem,2.4vw,1.5rem)] font-semibold text-lav-800">
                                        {faq.q}
                                    </h3>
                                    <span
                                        className={cn(
                                            "grid size-8 shrink-0 place-items-center rounded-full transition-all duration-500",
                                            isOpen
                                                ? "rotate-180 bg-lav-600 text-white"
                                                : "bg-lav-100/80 text-lav-700",
                                        )}
                                    >
                                        <ChevronDown aria-hidden="true" className="size-4" />
                                    </span>
                                </button>

                                {/* Altura animada con grid, sin max-height inventado */}
                                <div
                                    className={cn(
                                        "grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className="flex items-start justify-center gap-4 px-6 pb-12 text-left md:px-8">
                                            <span aria-hidden="true" className="mt-1.5 shrink-0 text-gold-600">
                                                ✦
                                            </span>
                                            <div className="text-[1.0625rem] leading-[1.8] text-ink-soft">
                                                {faq.a.map((p, k) => (
                                                    <p key={k} className="mb-4 last:mb-0">
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                            <span aria-hidden="true" className="mt-1.5 shrink-0 text-gold-600">
                                                ✦
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeContent>
                    );
                })}
            </div>

            {/* Portal de Instagram */}
            <FadeContent blur duration={900} delay={120} initialOpacity={0}>
                <div className="mt-24 text-center">
                    <a
                        href={contacto.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block size-[190px] rounded-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-105"
                    >
                        {/* Anillo giratorio */}
                        <span
                            aria-hidden="true"
                            className="absolute -inset-3 rounded-full blur-[2px]"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, rgba(143,121,184,.55), rgba(226,199,124,.55), rgba(195,176,220,.35), rgba(143,121,184,.55))",
                                animation: "spin-glow 14s linear infinite",
                            }}
                        />
                        <img
                            src={contacto.instagram.image}
                            alt="Mami Cósmica en Instagram"
                            loading="lazy"
                            decoding="async"
                            className="relative z-10 size-full rounded-full border-[5px] border-cream-50 object-cover shadow-[0_10px_30px_rgba(47,32,71,.18)]"
                        />
                        <span className="absolute right-1.5 top-1.5 z-20 grid size-12 place-items-center rounded-full bg-cream-50 text-lav-700 shadow-[0_6px_16px_rgba(47,32,71,.22)] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                            <InstagramGlyph className="size-6" />
                        </span>
                    </a>

                    <p className="mt-8 font-display text-[clamp(1.3rem,3vw,1.75rem)] italic text-lav-700">
                        {contacto.instagram.label}
                    </p>
                </div>
            </FadeContent>

            <style>{`
                @keyframes spin-glow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
