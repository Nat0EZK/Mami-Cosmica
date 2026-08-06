import { useCallback, useEffect, useRef } from "react";
import SplitText from "@/components/SplitText";
import Magnet from "@/components/Magnet";
import FadeContent from "@/components/FadeContent";
import { StarRule } from "./Ornament";
import { hero } from "@/content";

const AURORA =
    "linear-gradient(100deg, #402E63 0%, #6D4E9C 22%, #A8842F 46%, #6D4E9C 70%, #402E63 100%)";

export function Hero() {
    const wrapRef = useRef<HTMLDivElement>(null);

    /**
     * SplitText reparte el título en un <div.split-char> por letra, así que un
     * `background-clip: text` sobre el h1 no llega a pintarlas (heredan el
     * relleno transparente y se vuelven invisibles).
     *
     * Solución: pintar el degradado en cada letra y desplazar su
     * `background-position` según su posición dentro de la palabra, de modo que
     * la aurora se lea continua a lo largo de "Mami Cósmica".
     *
     * El h1 conserva un lavanda sólido de base: si esto no llega a ejecutarse,
     * el título sigue siendo perfectamente legible.
     */
    const paintAurora = useCallback(() => {
        const root = wrapRef.current?.querySelector<HTMLElement>(".split-parent");
        if (!root) return;

        const chars = root.querySelectorAll<HTMLElement>(".split-char");
        if (!chars.length) return;

        const rootBox = root.getBoundingClientRect();
        if (!rootBox.width) return;

        chars.forEach((char) => {
            const box = char.getBoundingClientRect();
            char.style.backgroundImage = AURORA;
            char.style.backgroundSize = `${rootBox.width}px 100%`;
            char.style.backgroundPosition = `${-(box.left - rootBox.left)}px 0`;
            char.style.backgroundRepeat = "no-repeat";
            char.style.webkitBackgroundClip = "text";
            char.style.backgroundClip = "text";
            char.style.webkitTextFillColor = "transparent";
            char.style.color = "transparent";
        });
    }, []);

    useEffect(() => {
        let frame = 0;
        const repaint = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(paintAurora);
        };

        // Las métricas cambian cuando termina de cargar la tipografía.
        document.fonts?.ready.then(repaint).catch(() => {});
        repaint();

        window.addEventListener("resize", repaint);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", repaint);
        };
    }, [paintAurora]);

    return (
        <section
            id="inicio"
            className="relative grid min-h-[min(94vh,900px)] place-items-center overflow-hidden px-6 pt-[calc(76px+6rem)] pb-24 text-center"
        >
            {/* Halo suave detrás del título */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[42%] size-[min(760px,92vw)] -translate-x-1/2 -translate-y-1/2 blur-[20px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(143,121,184,.16) 0%, rgba(226,199,124,.08) 42%, transparent 68%)",
                    animation: "halo-breathe 11s ease-in-out infinite",
                }}
            />

            <div className="relative z-10 max-w-4xl">
                <StarRule className="mb-8" />

                {/* El momento principal: la marca se escribe sola, letra a letra */}
                <div ref={wrapRef}>
                    <SplitText
                        text={hero.title}
                        tag="h1"
                        className="font-display text-[clamp(3rem,11vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-lav-800"
                        splitType="chars"
                        delay={55}
                        duration={1.1}
                        ease="power3.out"
                        from={{ opacity: 0, y: 46, filter: "blur(8px)" }}
                        to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        threshold={0.1}
                        onLetterAnimationComplete={paintAurora}
                    />
                </div>

                <FadeContent blur duration={900} delay={520} initialOpacity={0}>
                    <p className="mt-6 text-[clamp(.9rem,2.1vw,1.05rem)] uppercase tracking-[0.22em] text-ink-muted">
                        {hero.subtitle}
                    </p>
                </FadeContent>

                <StarRule className="my-8" />

                <FadeContent blur duration={900} delay={760} initialOpacity={0}>
                    <p className="mx-auto max-w-[30ch] font-display text-[clamp(1.35rem,3.6vw,2.05rem)] italic leading-[1.45] text-lav-700">
                        {hero.slogan}
                    </p>
                </FadeContent>

                <FadeContent blur duration={900} delay={1000} initialOpacity={0}>
                    {/* El botón se inclina hacia el cursor: invita sin gritar */}
                    <Magnet padding={90} magnetStrength={6} className="mt-12 inline-block">
                        <a
                            href={hero.cta.href}
                            className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-br from-lav-600 to-lav-700 px-12 py-[1.05rem] text-[0.9375rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(64,46,99,.26),0_14px_40px_rgba(64,46,99,.18)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(64,46,99,.30),0_20px_50px_rgba(64,46,99,.24),0_0_45px_rgba(143,121,184,.3)]"
                        >
                            <span className="relative z-10">{hero.cta.label}</span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,.32)_50%,transparent_75%)] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-full"
                            />
                        </a>
                    </Magnet>
                </FadeContent>
            </div>

            <style>{`
                @keyframes halo-breathe {
                    0%, 100% { opacity: .75; transform: translate(-50%,-50%) scale(1); }
                    50%      { opacity: 1;   transform: translate(-50%,-50%) scale(1.07); }
                }
            `}</style>
        </section>
    );
}
