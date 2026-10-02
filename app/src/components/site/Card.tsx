import { cn } from "@/lib/utils";
import { AstroWheel } from "./Magic";

/** Numeral de cada vista en la tirada: el orden del menú es el orden del mazo. */
export const NUMERALS: Record<string, string> = {
    "#servicios": "I",
    "#talleres": "II",
    "#productos": "III",
    "#contacto": "IV",
};

/** Camino al que pertenece cada vista: lo que se compra va en rosa, el resto en violeta. */
export const toneOf = (href: string) =>
    href === "#productos" ? "tone-shop" : "tone-session";

/* Chakana (cruz andina escalonada) centrada en (50, 80), módulo de 7 px. */
const STEPS = [
    [-1, -3], [1, -3], [1, -2], [2, -2], [2, -1], [3, -1], [3, 1], [2, 1], [2, 2], [1, 2],
    [1, 3], [-1, 3], [-1, 2], [-2, 2], [-2, 1], [-3, 1], [-3, -1], [-2, -1], [-2, -2], [-1, -2],
];
const chakana = (u: number) => STEPS.map(([x, y]) => `${50 + x * u},${80 + y * u}`).join(" ");

/**
 * Reverso del mazo: color plano de su camino con la chakana en filete. Es geometría,
 * no ilustración: se dibuja exacta a cualquier tamaño.
 */
export function CardBack({
    label,
    numeral,
    tone = "tone-session",
    className,
}: {
    label?: string;
    numeral?: string;
    tone?: string;
    className?: string;
}) {
    return (
        <div className={cn("card-back overflow-hidden", tone, className)}>
            <svg viewBox="0 0 100 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0 size-full">
                <g fill="none" strokeWidth="0.6" style={{ stroke: "var(--tone-mark)" }}>
                    <rect x="5" y="5" width="90" height="150" rx="6" opacity=".55" />
                    <rect x="8" y="8" width="84" height="144" rx="4" opacity=".35" />
                    <polygon points={chakana(7)} />
                    <polygon points={chakana(4.6)} opacity=".6" />
                    <circle cx="50" cy="80" r="4.5" />
                    <path d="M50 122 L54 130 L50 138 L46 130 Z" opacity=".7" />
                    <path d="M50 108 V122" opacity=".45" />
                </g>
            </svg>
            {(numeral || label) && (
                // Índice en la esquina, como en una baraja: sigue visible
                // aunque la carta vecina tape el resto en el abanico.
                <div className="card-index absolute top-[8%] left-[11%] z-10 max-w-[78%] text-left">
                    {numeral && <span className="block font-display text-[1.5em] leading-none text-[var(--tone-mark)]">{numeral}</span>}
                    {label && (
                        <span className="mt-1.5 block text-[0.72em] leading-tight font-semibold uppercase tracking-[0.08em] text-white">
                            {label}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

/**
 * Cabecera de cada vista: un campo de color a sangre con el numeral de su carta.
 * Todas las vistas comparten esta gramática, así que el sitio se lee como un mazo.
 */
export function ViewHeader({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <header className={cn("tone-field relative overflow-hidden", toneOf(id))}>
            <AstroWheel className="astro-wheel absolute top-1/2 right-[-140px] -mt-[220px] hidden size-[440px] text-[var(--tone-mark)] opacity-35 md:block" />
            <div className="relative mx-auto w-[min(100%-2.5rem,1200px)] py-14 md:py-20">
                <div className="flex items-baseline gap-5 md:gap-8">
                    <span aria-hidden="true" className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-none text-[var(--tone-mark)]">
                        {NUMERALS[id]}
                    </span>
                    <h2 className="min-w-0 text-[clamp(2.25rem,5.5vw,4rem)] text-white">{title}</h2>
                </div>
                {children && <div className="mt-5 max-w-[62ch] text-[var(--tone-soft)]">{children}</div>}
            </div>
        </header>
    );
}

/** Contenedor estándar de ancho. */
export const wrap = "mx-auto w-[min(100%-2.5rem,1200px)]";
