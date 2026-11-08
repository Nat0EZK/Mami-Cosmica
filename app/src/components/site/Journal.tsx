import { useState } from "react";
import { ArrowLeft, Check, Play } from "lucide-react";
import { whatsapp, type JournalMedia } from "@/content";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { wrap } from "./Card";
import { MoonPhases } from "./Magic";

/**
 * Detalle del Journal Cósmico. Las seis portadas sólo se diferencian por fuera,
 * así que se muestran como un selector sobre una única portada grande, y el
 * interior se enseña una sola vez en la galería "Por dentro".
 */
export function JournalDetail({ onBack }: { onBack: () => void }) {
    const { journal, productos } = useContent();
    const [picked, setPicked] = useState(0);
    const cover = journal.covers[picked];

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

            {/* Portadas */}
            <h4 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{journal.editionsHeading}</h4>
            <p className="mt-2 max-w-[52ch] text-ink-muted">{journal.editionsNote}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
                <div>
                    <div className="card-face aspect-[3/4] overflow-hidden">
                        <div className="absolute inset-[15px] overflow-hidden rounded-[4px] bg-ink">
                            <img
                                key={cover.image}
                                src={cover.image}
                                alt={`${journal.coverAltPrefix}, ${cover.name}`}
                                decoding="async"
                                className="absolute inset-0 size-full animate-[view-enter_380ms_cubic-bezier(.16,1,.3,1)_both] object-cover"
                            />
                        </div>
                    </div>
                    <p className="mt-5 font-display text-[1.75rem] text-ink">{cover.name}</p>
                </div>

                <ul className="grid grid-cols-3 gap-4 self-start sm:gap-5">
                    {journal.covers.map((item, i) => (
                        <li key={item.image}>
                            <button
                                type="button"
                                onClick={() => setPicked(i)}
                                aria-pressed={i === picked}
                                className={cn(
                                    "group block w-full overflow-hidden rounded-[6px] outline-offset-4 transition-all duration-200",
                                    i === picked
                                        ? "ring-2 ring-rose"
                                        : "opacity-70 ring-1 ring-line hover:opacity-100",
                                )}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                                <span className="block px-1 py-2 text-[0.8125rem] font-medium text-ink-soft">
                                    {item.name}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Interior: común a todas las portadas */}
            <h4 className="mt-20 text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{journal.insideHeading}</h4>
            <p className="mt-2 max-w-[52ch] text-ink-muted">{journal.insideNote}</p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {journal.inside.map((media) => (
                    <li key={media.src}>
                        <MediaTile media={media} label={journal.watchVideoLabel} />
                    </li>
                ))}
            </ul>

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
 * Foto fija, o vídeo que se reproduce mudo y en bucle al pasar el cursor
 * (o al tocar en móvil).
 */
function MediaTile({ media, label }: { media: JournalMedia; label: string }) {
    const [playing, setPlaying] = useState(false);
    const isVideo = media.type === "video";

    return (
        <figure
            className="group"
            onMouseEnter={() => isVideo && setPlaying(true)}
            onMouseLeave={() => setPlaying(false)}
            onFocus={() => isVideo && setPlaying(true)}
            onBlur={() => setPlaying(false)}
            onClick={() => isVideo && setPlaying((v) => !v)}
            tabIndex={isVideo ? 0 : undefined}
        >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-ink ring-1 ring-line">
                {isVideo ? (
                    <>
                        {/* El póster del propio vídeo evita cargar el archivo hasta que hace falta */}
                        <video
                            src={media.src}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            autoPlay={playing}
                            ref={(el) => {
                                if (!el) return;
                                if (playing) void el.play().catch(() => {});
                                else el.pause();
                            }}
                            className="absolute inset-0 size-full object-cover"
                        />
                        {!playing && (
                            <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[0.8125rem] font-semibold text-stock">
                                <Play aria-hidden="true" className="size-3 translate-x-px fill-current" />
                                {label}
                            </span>
                        )}
                    </>
                ) : (
                    <img
                        src={media.src}
                        alt={media.caption}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                )}
            </div>
            <figcaption className="mt-3 text-[0.9375rem] font-medium text-ink-soft">{media.caption}</figcaption>
        </figure>
    );
}
