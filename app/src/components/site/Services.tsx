import { useState } from "react";
import FadeContent from "@/components/FadeContent";
import { SectionHeading } from "./Ornament";
import { services } from "@/content";
import { cn } from "@/lib/utils";

export function Services() {
    // Un solo detalle abierto a la vez en toda la sección
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section id="servicios" className="mx-auto w-[min(92%,1240px)] py-24 md:py-32">
            <FadeContent blur duration={800} initialOpacity={0}>
                <SectionHeading>Servicios</SectionHeading>
            </FadeContent>

            <div className="mt-16 space-y-24">
                {services.map((group, index) => (
                    <FadeContent
                        key={group.title}
                        blur
                        duration={900}
                        initialOpacity={0}
                        threshold={0.05}
                    >
                        <div
                            className={cn(
                                "flex flex-col items-center gap-8 md:gap-12 lg:gap-16",
                                // Alterna el lado de la imagen para dar ritmo
                                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
                            )}
                        >
                            {/* Imagen */}
                            <div className="group w-full max-w-[420px] shrink-0 overflow-hidden rounded-3xl border border-lav-600/10 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)] md:w-[clamp(280px,34%,430px)]">
                                <img
                                    src={group.image.src}
                                    alt={group.image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                                />
                            </div>

                            {/* Lista */}
                            <div className="w-full min-w-0 flex-1 rounded-3xl border border-lav-600/15 bg-cream-50/92 p-8 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)] md:p-12">
                                <h3 className="text-center font-display text-[clamp(1.6rem,3.4vw,2.15rem)] font-medium tracking-[0.06em] text-lav-800">
                                    {group.title}
                                </h3>
                                <span
                                    aria-hidden="true"
                                    className="mx-auto mt-4 mb-8 block h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                                />

                                <ul>
                                    {group.items.map((item) => {
                                        const id = `${group.title}-${item.label}`;
                                        const isOpen = open === id;

                                        return (
                                            <li
                                                key={item.label}
                                                className="border-b border-lav-600/8 last:border-0"
                                            >
                                                {item.detail ? (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpen(isOpen ? null : id)
                                                            }
                                                            aria-expanded={isOpen}
                                                            className="group/item relative flex w-full min-h-11 items-center justify-between gap-3 rounded-xl py-3 pl-8 pr-3 text-left text-[1.0625rem] font-semibold text-lav-700 transition-colors hover:bg-lav-100/60 hover:text-lav-800"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className={cn(
                                                                    "absolute left-0 top-1/2 -translate-y-1/2 text-sm text-gold-600 transition-transform duration-300",
                                                                    isOpen && "rotate-90 scale-110",
                                                                )}
                                                            >
                                                                ✧
                                                            </span>
                                                            {item.label}
                                                            <span
                                                                aria-hidden="true"
                                                                className={cn(
                                                                    "shrink-0 text-[0.7rem] text-lav-500 transition-transform duration-300",
                                                                    isOpen && "rotate-180",
                                                                )}
                                                            >
                                                                ▼
                                                            </span>
                                                        </button>

                                                        {/* Expansión sin números mágicos de altura */}
                                                        <div
                                                            className={cn(
                                                                "grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                                                                isOpen
                                                                    ? "grid-rows-[1fr] opacity-100"
                                                                    : "grid-rows-[0fr] opacity-0",
                                                            )}
                                                        >
                                                            <div className="overflow-hidden">
                                                                <div className="night-stars relative my-3 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#251D3C,#1C1630)] p-8 shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                                                                    <h4 className="relative z-10 mb-3 font-display text-2xl font-medium text-gold-300">
                                                                        {item.detail.title}
                                                                    </h4>
                                                                    <p className="relative z-10 text-[1.0625rem] leading-[1.8] text-cream-200/90">
                                                                        {item.detail.body}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="relative py-3 pl-8 text-[1.0625rem] leading-relaxed text-ink-soft">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute left-0 top-[0.95rem] text-sm text-gold-600"
                                                        >
                                                            ✧
                                                        </span>
                                                        {item.label}
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </FadeContent>
                ))}
            </div>
        </section>
    );
}
