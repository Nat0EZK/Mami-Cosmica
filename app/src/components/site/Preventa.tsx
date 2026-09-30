import { useState } from "react";
import { Check, Image as ImageIcon, Moon, PenLine, Play, type LucideIcon } from "lucide-react";
import { whatsapp, type PreventaEdition } from "@/content";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { ViewHeader, wrap } from "./Card";
import { MoonPhases } from "./Magic";

const ICONS: Record<string, LucideIcon> = {
    pencil: PenLine,
    postcard: ImageIcon,
    moon: Moon,
};

export function Preventa() {
    const { preventa } = useContent();

    return (
        <section id="pre-venta">
            <ViewHeader id="#pre-venta" title={preventa.heading}>
                <p className="font-display text-[1.5rem] leading-snug text-white">{preventa.tagline}</p>
                <p className="mt-2">{preventa.subheading}</p>
                <p className="mt-5 inline-flex rounded-full px-4 py-1.5 text-[0.875rem] font-semibold text-white ring-1 ring-white/45">
                    {preventa.badge}
                </p>
                <MoonPhases className="mt-7 block w-[200px] text-[var(--tone-mark)]" />
            </ViewHeader>

            <div className={`${wrap} py-16 md:py-24`}>
                <p className="max-w-[60ch] text-[1.1875rem] leading-[1.7] text-ink">{preventa.intro}</p>

                {/* Ediciones */}
                <h3 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{preventa.editionsHeading}</h3>
                <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
                    {preventa.editions.map((edition) => (
                        <EditionCard key={edition.name} edition={edition} />
                    ))}
                </div>

                {/* Qué incluye + regalos */}
                <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{preventa.includesHeading}</h3>
                        <ul className="mt-6 border-t border-line">
                            {preventa.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3 border-b border-line py-4 leading-relaxed text-ink-soft">
                                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-aqua" strokeWidth={2} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{preventa.bonusHeading}</h3>
                        <p className="mt-2 font-medium text-rose">{preventa.bonusSubheading}</p>
                        <ul className="mt-6 border-t border-line">
                            {preventa.bonus.map((item) => {
                                const Icon = ICONS[item.icon] ?? Moon;
                                return (
                                    <li key={item.title} className="flex items-start gap-3 border-b border-line py-4">
                                        <Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-rose" strokeWidth={2} />
                                        <span className="leading-relaxed text-ink-soft">
                                            <span className="font-semibold text-ink">{item.title}.</span> {item.body}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Precio y reserva */}
                <div className="card-back tone-shop mt-20 grid gap-8 px-7 py-10 text-white md:grid-cols-[1fr_auto] md:items-center md:px-12 md:py-12">
                    <div>
                        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span className="font-display text-[clamp(3rem,8vw,4.5rem)] leading-none tabular-nums">
                                {preventa.price.pre}
                            </span>
                            <s className="text-[1.25rem] tabular-nums text-rose-soft">{preventa.price.regular}</s>
                        </p>
                        <p className="mt-4 max-w-[46ch] text-[0.9375rem] text-rose-soft">
                            {preventa.priceLabel} · {preventa.priceNote}
                        </p>
                    </div>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-white on-tone">
                        {preventa.ctaLabel}
                    </a>
                </div>
            </div>
        </section>
    );
}

/**
 * Al pasar el cursor (o tocar en móvil) sobre una edición con vídeo, la
 * portada cede el paso a una vista previa muda en bucle.
 */
function EditionCard({ edition }: { edition: PreventaEdition }) {
    const { preventa } = useContent();
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
                        alt={`${preventa.coverAltPrefix}, ${edition.name}`}
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
                            {preventa.watchVideoLabel}
                        </span>
                    )}
                </div>
            </div>
            <h4 className="mt-6 text-[1.75rem] text-ink">{edition.name}</h4>
            <p className="mt-1 font-medium text-rose">{edition.subtitle}</p>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft">{edition.body}</p>
        </article>
    );
}
