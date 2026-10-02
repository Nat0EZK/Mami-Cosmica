import { useState } from "react";
import { ArrowLeft, Check, Play } from "lucide-react";
import { whatsapp, type JournalEdition } from "@/content";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { wrap } from "./Card";
import { MoonPhases } from "./Magic";

/**
 * Detalle del Journal Cósmico dentro de Productos: un solo producto con sus
 * dos ediciones, en vez de dos productos casi iguales en el catálogo.
 */
export function JournalDetail({ onBack }: { onBack: () => void }) {
    const { journal, productos } = useContent();

    return (
        <div className={`${wrap} view-enter py-16 md:py-24`}>
            <button
                type="button"
                onClick={onBack}
                className="group -ml-1 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-ink-soft hover:text-ink"
            >
                <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                {productos.ui.back}
            </button>

            <MoonPhases className="mt-8 block w-[170px] text-lilac" />
            <h3 className="mt-5 text-[clamp(2.25rem,5vw,3.25rem)] text-ink">{journal.heading}</h3>
            <p className="mt-2 font-display text-[1.5rem] leading-snug text-rose">{journal.tagline}</p>
            <p className="mt-1 text-ink-muted">{journal.subheading}</p>
            <p className="mt-6 max-w-[60ch] text-[1.1875rem] leading-[1.7] text-ink">{journal.intro}</p>

            {/* Ediciones */}
            <h4 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{journal.editionsHeading}</h4>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
                {journal.editions.map((edition) => (
                    <EditionCard key={edition.name} edition={edition} />
                ))}
            </div>

            {/* Qué incluye + precio */}
            <div className="mt-20 grid items-start gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
                <div>
                    <h4 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{journal.includesHeading}</h4>
                    <ul className="mt-6 border-t border-line">
                        {journal.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3 border-b border-line py-4 leading-relaxed text-ink-soft">
                                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-aqua" strokeWidth={2} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card-back tone-shop px-7 py-10 text-white md:px-10">
                    <p className="text-[0.9375rem] text-rose-soft">{journal.priceLabel}</p>
                    <p className="mt-1 font-display text-[clamp(3rem,8vw,4.5rem)] leading-none tabular-nums">{journal.price}</p>
                    <p className="mt-4 text-[0.9375rem] text-rose-soft">{journal.priceNote}</p>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-white on-tone mt-8">
                        {journal.ctaLabel}
                    </a>
                </div>
            </div>
        </div>
    );
}

/**
 * Al pasar el cursor (o tocar en móvil) sobre una edición con vídeo, la
 * portada cede el paso a una vista previa muda en bucle.
 */
function EditionCard({ edition }: { edition: JournalEdition }) {
    const { journal } = useContent();
    const [playing, setPlaying] = useState(false);
    const hasVideo = Boolean(edition.video);

    return (
        <article
            className="group"
            onMouseEnter={() => hasVideo && setPlaying(true)}
            onMouseLeave={() => setPlaying(false)}
            onFocus={() => hasVideo && setPlaying(true)}
            onBlur={() => setPlaying(false)}
            onClick={() => hasVideo && setPlaying(true)}
            tabIndex={hasVideo ? 0 : undefined}
        >
            <div className="card-face aspect-[3/4] overflow-hidden">
                <div className="absolute inset-[15px] overflow-hidden rounded-[4px] bg-ink">
                    <img
                        src={edition.image}
                        alt={`${journal.coverAltPrefix}, ${edition.name}`}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                            "absolute inset-0 size-full object-cover transition-opacity duration-300",
                            playing && hasVideo && "opacity-0",
                        )}
                    />
                    {hasVideo && playing && (
                        <video
                            key={edition.video}
                            src={edition.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 size-full object-cover"
                        />
                    )}
                    {hasVideo && !playing && (
                        <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[0.8125rem] font-semibold text-stock">
                            <Play aria-hidden="true" className="size-3 translate-x-px fill-current" />
                            {journal.watchVideoLabel}
                        </span>
                    )}
                </div>
            </div>
            <h5 className="mt-6 font-display text-[1.75rem] text-ink">{edition.name}</h5>
            <p className="mt-1 font-medium text-rose">{edition.subtitle}</p>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft">{edition.body}</p>
        </article>
    );
}
