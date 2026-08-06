"use client";

import { useMemo, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * SparklesText de Magic UI, adaptado a este proyecto:
 *
 *  - `as` permite montar el envoltorio como <h1> en vez de <div>, para no
 *    perder la semántica del título.
 *  - Sin <strong> ni `font-bold` forzados: el título es una serif fina y el
 *    negrita la estropeaba.
 *  - El original recalculaba las estrellas con setInterval cada 100 ms y las
 *    guardaba en estado, re-renderizando 10 veces por segundo de forma
 *    permanente. Aquí se generan una sola vez y el parpadeo lo lleva CSS,
 *    que se anima en el compositor sin tocar React.
 */

const SPARKLE_PATH =
    "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z";

interface SparklesTextProps {
    as?: ElementType;
    className?: string;
    children: ReactNode;
    sparklesCount?: number;
    colors?: { first: string; second: string };
}

export function SparklesText({
    as: Tag = "div",
    className,
    children,
    sparklesCount = 10,
    colors = { first: "#9E7AFF", second: "#FE8BBB" },
}: SparklesTextProps) {
    // Posiciones fijas por montaje: nada que recalcular en cada frame.
    const sparkles = useMemo(
        () =>
            Array.from({ length: sparklesCount }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: Math.random() > 0.5 ? colors.first : colors.second,
                delay: Math.random() * 2.2,
                duration: Math.random() * 1.6 + 1.6,
                scale: Math.random() * 0.7 + 0.5,
            })),
        [sparklesCount, colors.first, colors.second],
    );

    return (
        <Tag className={cn("relative", className)}>
            <span className="relative inline-block">
                <span aria-hidden="true">
                    {sparkles.map((s) => (
                        <svg
                            key={s.id}
                            className="pointer-events-none absolute z-20"
                            style={
                                {
                                    left: s.left,
                                    top: s.top,
                                    width: `${s.scale * 21}px`,
                                    height: `${s.scale * 21}px`,
                                    animation: `sparkle-pop ${s.duration}s ease-in-out ${s.delay}s infinite`,
                                    opacity: 0,
                                } as CSSProperties
                            }
                            viewBox="0 0 21 21"
                        >
                            <path d={SPARKLE_PATH} fill={s.color} />
                        </svg>
                    ))}
                </span>
                {children}
            </span>
        </Tag>
    );
}

export default SparklesText;
