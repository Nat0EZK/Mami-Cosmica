import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { CardBack, NUMERALS, toneOf } from "./Card";
import { AstroWheel, DrawSparks, StarField } from "./Magic";

/**
 * Anverso de cada carta de la tirada: una imagen real de esa sección. Las
 * ilustraciones llevan título dentro, así que se muestran enteras ("contain");
 * las fotos pueden llenar la carta ("cover").
 */
const FACES: Record<string, { src: string; fit: "contain" | "cover" }> = {
    "#servicios": { src: "img/lecturas.jpg", fit: "contain" },
    "#talleres": { src: "img/utero-taller.png", fit: "contain" },
    "#productos": { src: "img/oraculomain.jpg", fit: "cover" },
    "#pre-venta": { src: "img/journal-unicornio.png", fit: "cover" },
    "#contacto": { src: "img/aboutme.jpg", fit: "contain" },
};

type DeckItem = { href: string; label: string };

function DeckCard({
    item,
    drawn,
    rest,
    className,
}: {
    item: DeckItem;
    drawn: boolean;
    rest: string;
    className?: string;
}) {
    return (
        <a
            href={item.href}
            aria-current={drawn ? "page" : undefined}
            data-drawn={drawn}
            className={cn("deck-card on-tone block aspect-[5/8]", className)}
            style={{ "--rest": rest } as React.CSSProperties}
        >
            {drawn && <DrawSparks />}
            <span className="deck-flip relative block size-full">
                {/* Reverso: boca abajo hasta que se saca */}
                <span className="deck-side absolute inset-0">
                    <CardBack numeral={NUMERALS[item.href]} label={item.label} tone={toneOf(item.href)} className="size-full" />
                </span>

                {/* Anverso */}
                <span className="deck-side deck-side--face card-face absolute inset-0 flex flex-col overflow-hidden">
                    <span className="relative m-[15px] mb-0 flex-1 overflow-hidden rounded-t-[4px] bg-paper">
                        <img
                            src={FACES[item.href].src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className={cn(
                                "absolute inset-0 size-full",
                                FACES[item.href].fit === "cover" ? "object-cover" : "object-contain",
                            )}
                        />
                    </span>
                    <span className="px-3 pt-2 pb-[14px] text-center">
                        <span className="block font-display text-[0.95em] leading-none text-violet">
                            {NUMERALS[item.href]}
                        </span>
                        <span className="mt-1 block truncate text-[0.72em] font-semibold uppercase tracking-[0.08em] text-ink">
                            {item.label}
                        </span>
                    </span>
                </span>
            </span>
        </a>
    );
}

export function Hero({ active }: { active: string | null }) {
    const { hero, nav } = useContent();
    const deck = nav.items.filter((item) => item.href in NUMERALS);
    const mid = (deck.length - 1) / 2;

    return (
        <section id="inicio" className="relative pt-16 lg:grid lg:min-h-[min(100svh,880px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,46%)]">
            {/* Presentación */}
            <div className="flex items-center">
                <div className="mx-auto w-[min(100%-2.5rem,600px)] py-14 lg:mr-12 lg:ml-auto lg:w-[min(100%-6rem,600px)] lg:py-20">
                    <h1 className="text-[clamp(3.4rem,11vw,6rem)] leading-[0.92] tracking-[-0.025em] text-ink">
                        {hero.title}
                    </h1>
                    <p className="mt-5 text-[1.125rem] font-medium text-ink-soft">{hero.subtitle}</p>
                    <p className="mt-8 max-w-[26ch] border-l border-lilac pl-5 font-display text-[clamp(1.35rem,3vw,1.65rem)] leading-[1.3] text-violet">
                        {hero.slogan}
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a href={hero.ctaSession.href} className="btn btn-violet">
                            {hero.ctaSession.label}
                        </a>
                        <a href={hero.cta.href} className="btn btn-rose">
                            {hero.cta.label}
                        </a>
                    </div>
                </div>
            </div>

            {/* La tirada */}
            <div className="tone-session tone-field relative overflow-hidden pt-6 pb-8 lg:flex lg:flex-col lg:items-center lg:justify-center lg:pt-0 lg:pb-0">
                <StarField />
                <AstroWheel className="astro-wheel absolute top-1/2 left-1/2 -mt-[260px] -ml-[260px] size-[520px] text-[var(--tone-mark)] opacity-55 max-lg:top-[-120px] max-lg:left-auto max-lg:right-[-200px] max-lg:m-0" />
                {/* Escritorio: abanico */}
                {/* --card: ancho de carta; --step: separación en el abanico; --gap: lo
                    que se corren las cartas a la derecha de la sacada para que su
                    índice (esquina superior izquierda) quede a la vista. */}
                <nav
                    aria-label={hero.deckLabel}
                    className="relative hidden h-[290px] w-full max-w-[640px] [--card:132px] [--gap:72px] [--step:50px] lg:block xl:h-[320px] xl:[--card:156px] xl:[--gap:82px] xl:[--step:64px] min-[1400px]:h-[350px] min-[1400px]:[--card:176px] min-[1400px]:[--gap:100px] min-[1400px]:[--step:70px] 2xl:h-[360px] 2xl:[--card:184px] 2xl:[--gap:104px] 2xl:[--step:76px]"
                >
                    {deck.map((item, i) => {
                        const o = i - mid;
                        const drawnAt = deck.findIndex((d) => d.href === active);
                        // Una carta inclinada adelanta su esquina superior hacia la sacada
                        // (alto de carta = 1.6 × ancho): eso se suma a su hueco.
                        const lean = (n: number) => 1.6 * Math.sin((Math.abs(n) * 6 * Math.PI) / 180);
                        const nl = drawnAt - 1 - mid;
                        const nr = drawnAt + 1 - mid;
                        // Hueco a la izquierda: la vecina deja ver ~60 % de su ancho (su índice)
                        const left =
                            drawnAt > 0 ? `(0.6 * var(--card) - var(--step) + ${(nl > 0 ? lean(nl) : 0).toFixed(3)} * var(--card))` : "0px";
                        // Hueco a la derecha: la vecina queda casi fuera de la sacada
                        const right =
                            drawnAt >= 0 && drawnAt < deck.length - 1
                                ? `(var(--gap) + ${(nr < 0 ? lean(nr) : 0).toFixed(3)} * var(--card))`
                                : "0px";
                        const shift = drawnAt < 0 ? 0 : (i >= drawnAt ? 1 : 0);
                        const shiftR = drawnAt < 0 ? 0 : (i > drawnAt ? 1 : 0);
                        // …y todo el abanico se recentra
                        const x = `calc(-50% + ${o} * var(--step) + ${shift} * ${left} + ${shiftR} * ${right} - 0.5 * (${left} + ${right}))`;
                        const drawn = active === item.href;
                        const rest = drawn
                            ? `translateX(${x}) translateY(-44px) rotate(0deg)`
                            : `translateX(${x}) translateY(${Math.abs(o) * 12}px) rotate(${o * 6}deg)`;
                        return (
                            <DeckCard
                                key={item.href}
                                item={item}
                                drawn={drawn}
                                rest={rest}
                                className={cn(
                                    "absolute top-0 left-1/2 w-[var(--card)] origin-bottom text-[12px] xl:text-[15px] [&_.card-index]:max-w-[42%] [&_.card-index>span+span]:text-[0.6em] [&_.card-index>span+span]:tracking-[0.04em]",
                                    drawn && "z-10",
                                )}
                            />
                        );
                    })}
                </nav>

                {/* Móvil: fila deslizable */}
                <nav aria-label={hero.deckLabel} className="lg:hidden">
                    <ul className="flex snap-x snap-mandatory scroll-px-5 gap-3 [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto overflow-x-auto px-5 pt-5 pb-2 [scrollbar-width:none]">
                        {deck.map((item) => {
                            const drawn = active === item.href;
                            return (
                                <li key={item.href} className="shrink-0 snap-start">
                                    <DeckCard
                                        item={item}
                                        drawn={drawn}
                                        rest={drawn ? "translateY(-10px)" : "none"}
                                        className="relative w-[104px] text-[12px]"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
