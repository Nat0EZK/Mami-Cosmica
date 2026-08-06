import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { SectionHeading } from "./Ornament";
import { productos } from "@/content";
import { cn } from "@/lib/utils";

/** Imagen con marcador cuando el archivo todavía no existe. */
function Media({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div
                className={cn(
                    "grid place-items-center border border-dashed border-lav-600/22 text-[1.7rem] text-lav-600/40",
                    className,
                )}
                style={{
                    background:
                        "radial-gradient(circle at 50% 42%, rgba(226,199,124,.22), transparent 62%), linear-gradient(150deg, #EFE7F7, #F4EDE2)",
                }}
                role="img"
                aria-label={`${alt} (imagen pendiente)`}
            >
                ✦
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className={className}
        />
    );
}

export function Productos() {
    const [showDetail, setShowDetail] = useState(false);
    const [active, setActive] = useState(0);
    const media = productos.detail.media[active];

    return (
        <section
            id="productos"
            className="relative min-h-screen px-6 py-24 md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at 85% 10%, rgba(143,121,184,.10) 0%, transparent 45%), #FAF6EF",
            }}
        >
            {!showDetail ? (
                <>
                    <FadeContent blur duration={800} initialOpacity={0}>
                        <SectionHeading>{productos.heading}</SectionHeading>
                    </FadeContent>

                    <div className="mt-16 flex flex-wrap justify-center gap-8">
                        {productos.items.map((item, i) => (
                            <FadeContent key={item.id} blur duration={800} delay={i * 90} initialOpacity={0}>
                                <article className="group flex w-[min(320px,88vw)] flex-col overflow-hidden rounded-3xl border border-lav-600/15 bg-cream-50/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-lav-600/30 hover:shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                                    <div className="overflow-hidden rounded-2xl bg-cream-200">
                                        <Media
                                            src={item.image}
                                            alt={item.name}
                                            className="h-[360px] w-full rounded-2xl object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center gap-4 px-4 pb-4 pt-6 text-center">
                                        <h3 className="font-display text-2xl font-semibold text-lav-800">
                                            {item.name}
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={() => item.hasDetail && setShowDetail(true)}
                                            disabled={!item.hasDetail}
                                            className={cn(
                                                "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300",
                                                item.hasDetail
                                                    ? "bg-gradient-to-br from-lav-600 to-lav-700 text-white shadow-[0_3px_12px_rgba(64,46,99,.22)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(64,46,99,.3)]"
                                                    : "cursor-not-allowed border border-lav-600/30 text-lav-700/70",
                                            )}
                                        >
                                            {item.hasDetail ? "Ver Detalles" : "Próximamente"}
                                        </button>
                                    </div>
                                </article>
                            </FadeContent>
                        ))}
                    </div>
                </>
            ) : (
                <FadeContent blur duration={700} initialOpacity={0}>
                    <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-2">
                        {/* Galería */}
                        <div className="flex flex-col gap-4">
                            <div className="relative h-[470px] w-full overflow-hidden rounded-3xl bg-night-900 shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                                {media.type === "image" ? (
                                    <Media
                                        src={media.src}
                                        alt={productos.detail.title}
                                        className="size-full object-cover"
                                    />
                                ) : (
                                    <video
                                        key={media.src}
                                        src={media.src}
                                        controls
                                        playsInline
                                        className="size-full object-cover"
                                    />
                                )}
                            </div>

                            <div className="flex gap-3">
                                {productos.detail.media.map((m, i) => (
                                    <button
                                        key={m.src}
                                        type="button"
                                        onClick={() => setActive(i)}
                                        aria-label={`Ver ${m.type === "video" ? "vídeo" : "imagen"} ${i + 1}`}
                                        aria-current={active === i}
                                        className={cn(
                                            "relative h-[104px] flex-1 overflow-hidden rounded-2xl border-2 bg-night-900 transition-all duration-300 hover:-translate-y-0.5",
                                            active === i
                                                ? "border-lav-600 shadow-[0_0_0_3px_rgba(109,78,156,.16)]"
                                                : "border-transparent hover:border-lav-400",
                                        )}
                                    >
                                        {m.type === "image" ? (
                                            <Media src={m.src} alt="" className="size-full object-cover opacity-80" />
                                        ) : (
                                            <>
                                                <video src={m.src} muted playsInline className="size-full object-cover opacity-80" />
                                                <span className="pointer-events-none absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-lav-600/92 text-white shadow-[0_4px_14px_rgba(28,22,48,.4)]">
                                                    <Play aria-hidden="true" className="size-4 translate-x-px fill-current" />
                                                </span>
                                            </>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Información */}
                        <div>
                            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-medium text-lav-800">
                                {productos.detail.title}
                            </h2>

                            <span className="mt-3 inline-block rounded-full border border-gold-600/30 bg-gold-100/50 px-6 py-2 text-[0.9375rem] font-semibold text-gold-700">
                                {productos.detail.price}
                            </span>

                            <p className="mt-8 max-w-[68ch] text-[1.0625rem] leading-[1.85] text-ink-soft">
                                {productos.detail.description}
                            </p>

                            <div className="mt-8 rounded-3xl border border-lav-600/15 bg-lav-100/45 p-8">
                                <h4 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                                    {productos.detail.includesHeading}
                                </h4>
                                <ul>
                                    {productos.detail.includes.map((item) => (
                                        <li key={item} className="mb-3 flex gap-2 text-[0.9375rem] leading-relaxed text-ink-soft last:mb-0">
                                            <span aria-hidden="true" className="text-[0.7rem] text-gold-600">✦</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowDetail(false)}
                                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-lav-600/38 px-7 py-3 text-[0.9375rem] font-semibold text-lav-700 transition-all duration-300 hover:border-lav-600 hover:bg-lav-100/80"
                            >
                                <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Volver al Catálogo
                            </button>
                        </div>
                    </div>
                </FadeContent>
            )}
        </section>
    );
}
