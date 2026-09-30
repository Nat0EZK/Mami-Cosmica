import { useState } from "react";
import { ArrowLeft, Check, Play } from "lucide-react";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { whatsapp } from "@/content";
import { CardBack, ViewHeader, wrap } from "./Card";

/**
 * Carta de producto. Si la foto todavía no existe, la carta queda boca abajo:
 * un producto que aún no llega se muestra como una carta sin revelar.
 */
function ProductCard({
    name,
    image,
    action,
    pendingLabel,
}: {
    name: string;
    image: string;
    action?: React.ReactNode;
    pendingLabel: string;
}) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <article className="flex flex-col">
                <CardBack tone="tone-shop" className="aspect-[5/8] w-full" />
                <h3 className="mt-5 text-center text-[1.5rem] text-ink">{name}</h3>
                <p className="mt-1 text-center text-[0.9375rem] text-ink-muted">{pendingLabel}</p>
            </article>
        );
    }

    return (
        <article className="flex flex-col">
            <figure className="card-face aspect-[5/8] w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    onError={() => setFailed(true)}
                    className="absolute inset-[15px] size-[calc(100%-30px)] rounded-[4px] object-cover"
                />
            </figure>
            <h3 className="mt-5 text-center text-[1.5rem] text-ink">{name}</h3>
            {action}
        </article>
    );
}

export function Productos() {
    const { productos, contacto } = useContent();
    const [showDetail, setShowDetail] = useState(false);
    const [active, setActive] = useState(0);
    const media = productos.detail.media[active];

    return (
        <section id="productos">
            <ViewHeader id="#productos" title={productos.heading} />

            {!showDetail ? (
                <div className={`${wrap} grid gap-12 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3 lg:gap-14`}>
                    {productos.items.map((item) => (
                        <div key={item.id} className="mx-auto w-full max-w-[280px]">
                            <ProductCard
                                name={item.name}
                                image={item.image}
                                pendingLabel={productos.ui.comingSoon}
                                action={
                                    item.hasDetail ? (
                                        <button
                                            type="button"
                                            onClick={() => setShowDetail(true)}
                                            className="btn btn-rose mt-4 self-center"
                                        >
                                            {productos.ui.viewDetails}
                                        </button>
                                    ) : null
                                }
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className={`${wrap} view-enter grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16`}>
                    {/* Galería */}
                    <div className="flex flex-col gap-3">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-ink">
                            {media.type === "image" ? (
                                <img src={media.src} alt={productos.detail.title} className="size-full object-contain" />
                            ) : (
                                <video key={media.src} src={media.src} controls playsInline className="size-full object-contain" />
                            )}
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {productos.detail.media.map((m, i) => (
                                <button
                                    key={m.src}
                                    type="button"
                                    onClick={() => setActive(i)}
                                    aria-label={`${m.type === "video" ? productos.ui.viewVideo : productos.ui.viewImage} ${i + 1}`}
                                    aria-current={active === i}
                                    className={cn(
                                        "relative aspect-square overflow-hidden rounded-[10px] bg-ink ring-offset-2 ring-offset-paper transition-shadow duration-200",
                                        active === i ? "ring-2 ring-rose" : "hover:ring-1 hover:ring-lilac",
                                    )}
                                >
                                    {m.type === "image" ? (
                                        <img src={m.src} alt="" className="size-full object-cover" />
                                    ) : (
                                        <>
                                            <video src={m.src} muted playsInline preload="metadata" className="size-full object-cover opacity-80" />
                                            <span className="absolute top-1/2 left-1/2 grid size-10 -translate-1/2 place-items-center rounded-full bg-stock text-ink">
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
                        <button
                            type="button"
                            onClick={() => setShowDetail(false)}
                            className="group -ml-1 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-ink-soft hover:text-ink"
                        >
                            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                            {productos.ui.back}
                        </button>

                        <h3 className="mt-4 text-[clamp(2.25rem,5vw,3.25rem)] text-ink">{productos.detail.title}</h3>
                        <p className="mt-3 text-[1.125rem] font-semibold tabular-nums text-rose">{productos.detail.price}</p>

                        <p className="mt-8 max-w-[62ch] leading-[1.8] text-ink-soft">{productos.detail.description}</p>

                        <h4 className="mt-10 text-[1.5rem] text-ink">{productos.detail.includesHeading}</h4>
                        <ul className="mt-4 border-t border-line">
                            {productos.detail.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3 border-b border-line py-3.5 text-ink-soft">
                                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-aqua" strokeWidth={2} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-rose mt-10">
                            {contacto.whatsappLabel}
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
