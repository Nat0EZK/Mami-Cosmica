import { cn } from "@/lib/utils";

/*
 * Decoración del mundo "El Mazo": todo es geometría exacta (rueda astral,
 * estrellas de cuatro puntas, fases lunares), no ilustración. Siempre
 * aria-hidden, y visible en reposo aunque el movimiento esté reducido.
 */

const polar = (deg: number, r: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [Math.cos(a) * r, Math.sin(a) * r] as const;
};

/** Planetas de adorno: ángulos fijos, no una carta real. */
const PLANETS = [12, 57, 101, 148, 203, 251, 318];

/** Rueda de carta astral: casas, grados y un gran trígono. */
export function AstroWheel({ className }: { className?: string }) {
    const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
    return (
        <svg viewBox="-50 -50 100 100" aria-hidden="true" className={cn("pointer-events-none", className)}>
            <g fill="none" stroke="currentColor" strokeWidth="0.3">
                <circle r="48" />
                <circle r="42" />
                <circle r="30" />
                {ticks.map((d) => {
                    const len = d % 30 === 0 ? 6 : d % 10 === 0 ? 2.4 : 1.4;
                    const [x1, y1] = polar(d, 48);
                    const [x2, y2] = polar(d, 48 - len);
                    return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} />;
                })}
                {Array.from({ length: 12 }, (_, i) => {
                    const [x1, y1] = polar(i * 30, 30);
                    const [x2, y2] = polar(i * 30, 42);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity=".7" />;
                })}
                {/* Aspectos: un trígono y una cuadratura */}
                <polygon points={[12, 132, 252].map((d) => polar(d, 30).join(",")).join(" ")} opacity=".8" />
                <line x1={polar(57, 30)[0]} y1={polar(57, 30)[1]} x2={polar(147, 30)[0]} y2={polar(147, 30)[1]} opacity=".6" />
            </g>
            <g fill="currentColor">
                {PLANETS.map((d) => {
                    const [x, y] = polar(d, 36);
                    return <circle key={d} cx={x} cy={y} r="1" />;
                })}
            </g>
        </svg>
    );
}

/** Estrella de cuatro puntas. */
export function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg viewBox="-1 -1 2 2" aria-hidden="true" className={cn("pointer-events-none", className)} style={style}>
            <path
                d="M0 -1 C.08 -.08 .08 -.08 1 0 C.08 .08 .08 .08 0 1 C-.08 .08 -.08 .08 -1 0 C-.08 -.08 -.08 -.08 0 -1Z"
                fill="currentColor"
            />
        </svg>
    );
}

/** Parte iluminada de la luna para la fase i (0 nueva … 4 llena … 7). */
function litPath(i: number) {
    if (i === 0) return "";
    if (i === 4) return "M0 -1 A1 1 0 0 1 0 1 A1 1 0 0 1 0 -1Z";
    const theta = ((i < 4 ? i : 8 - i) * Math.PI) / 4;
    const rx = Math.abs(Math.cos(theta)).toFixed(3);
    const gibbous = theta > Math.PI / 2 ? 1 : 0;
    // La menguante es el espejo de la creciente: lo aplica MoonPhases con transform
    return `M0 -1 A1 1 0 0 1 0 1 A${rx} 1 0 0 ${gibbous} 0 -1Z`;
}

/** Las ocho fases de la luna en fila. */
export function MoonPhases({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 170 14" aria-hidden="true" className={cn("pointer-events-none", className)}>
            {Array.from({ length: 8 }, (_, i) => (
                <g key={i} transform={`translate(${7 + i * 22} 7) scale(6)${i > 4 ? " scale(-1 1)" : ""}`}>
                    <circle r="1" fill="none" stroke="currentColor" strokeWidth={0.12} />
                    {i > 0 && <path d={litPath(i)} fill="currentColor" />}
                </g>
            ))}
        </svg>
    );
}

/** Cielo de fondo: pocas estrellas, fijas, que respiran despacio. */
const SKY = [
    { x: 8, y: 14, s: 10, d: 0 },
    { x: 86, y: 9, s: 14, d: 1.2 },
    { x: 92, y: 62, s: 9, d: 2.4 },
    { x: 14, y: 78, s: 12, d: 3.1 },
    { x: 70, y: 88, s: 8, d: 0.6 },
    { x: 38, y: 6, s: 7, d: 4 },
    { x: 58, y: 18, s: 6, d: 2 },
    { x: 4, y: 46, s: 9, d: 3.6 },
    { x: 96, y: 34, s: 7, d: 1.6 },
    { x: 30, y: 94, s: 11, d: 5 },
    { x: 78, y: 52, s: 6, d: 4.4 },
];

export function StarField({ className }: { className?: string }) {
    return (
        <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
            {SKY.map((st, i) => (
                <Star
                    key={i}
                    className="twinkle-star absolute"
                    style={{
                        left: `${st.x}%`,
                        top: `${st.y}%`,
                        width: st.s,
                        height: st.s,
                        animationDelay: `${st.d}s`,
                    }}
                />
            ))}
        </div>
    );
}

/** Constelación que se enciende alrededor de la carta que se saca. */
const SPARKS = [
    { x: -16, y: 8, s: 18 },
    { x: 104, y: 4, s: 13 },
    { x: -8, y: 62, s: 8 },
    { x: 108, y: 48, s: 20 },
    { x: 46, y: -12, s: 12 },
    { x: 96, y: 92, s: 9 },
];

export function DrawSparks() {
    return (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
            {SPARKS.map((sp, i) => (
                <Star
                    key={i}
                    className="draw-spark absolute text-white"
                    style={{
                        left: `${sp.x}%`,
                        top: `${sp.y}%`,
                        width: sp.s,
                        height: sp.s,
                        animationDelay: `${260 + i * 60}ms, ${1200 + i * 400}ms`,
                    }}
                />
            ))}
        </span>
    );
}
