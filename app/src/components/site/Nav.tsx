import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useContent, useLocale } from "@/lib/locale";
import type { Locale } from "@/content";
import { cn } from "@/lib/utils";

function LanguageSwitch({ className }: { className?: string }) {
    const { locale, setLocale } = useLocale();

    /**
     * Cambio de idioma como una luna que crece desde el botón pulsado: la
     * página nueva se revela en un círculo (ver ::view-transition-new en
     * index.css). Sin soporte de View Transitions, el cambio es instantáneo.
     */
    function change(code: Locale, button: HTMLButtonElement) {
        if (code === locale) return;
        if (!document.startViewTransition) {
            setLocale(code);
            return;
        }
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        // Radio hasta la esquina más lejana, para cubrir toda la pantalla
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        const root = document.documentElement.style;
        root.setProperty("--moon-x", `${x}px`);
        root.setProperty("--moon-y", `${y}px`);
        root.setProperty("--moon-r", `${r}px`);
        document.startViewTransition(() => flushSync(() => setLocale(code)));
    }

    return (
        <div className={cn("flex items-center text-[0.8125rem] font-semibold uppercase tracking-[0.08em]", className)}>
            {(["es", "en"] as const).map((code, i) => (
                <span key={code} className="flex items-center">
                    {i > 0 && <span aria-hidden="true" className="px-1 text-line">/</span>}
                    <button
                        type="button"
                        onClick={(e) => change(code, e.currentTarget)}
                        aria-pressed={locale === code}
                        className={cn(
                            "relative min-h-11 min-w-9 px-1 transition-colors duration-200",
                            // Subrayado del idioma activo: responde al instante al pulsar
                            "after:absolute after:inset-x-1.5 after:bottom-2 after:h-[1.5px] after:origin-center after:bg-violet after:transition-transform after:duration-[160ms] after:ease-[var(--ease-out)]",
                            locale === code ? "text-ink after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:text-ink",
                        )}
                    >
                        {code}
                    </button>
                </span>
            ))}
        </div>
    );
}

export function Nav({ active }: { active?: string | null }) {
    const { nav, hero } = useContent();
    const [open, setOpen] = useState(false);

    // Esc cierra el menú móvil
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Inicio y Sobre Mí no son vistas: siempre están arriba
    const links = nav.items.filter((item) => item.href !== "#inicio");

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper">
            <nav className="mx-auto flex h-16 w-[min(100%-2.5rem,1200px)] items-center justify-between gap-6">
                <a href="#inicio" className="font-display text-[1.375rem] leading-none text-ink">
                    {hero.title}
                </a>

                <ul className="hidden items-center gap-7 lg:flex">
                    {links.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                aria-current={active === item.href ? "page" : undefined}
                                className={cn(
                                    "relative py-2 text-[0.9375rem] font-medium transition-colors duration-200 hover:text-ink",
                                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:origin-left after:bg-ink after:transition-transform after:duration-300 after:ease-[var(--ease-out)]",
                                    active === item.href ? "text-ink after:scale-x-100" : "text-ink-soft after:scale-x-0",
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <LanguageSwitch className="hidden lg:flex" />

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="menu-movil"
                        aria-label={open ? nav.closeMenu : nav.openMenu}
                        className="-mr-2 flex size-11 flex-col items-center justify-center gap-[6px] lg:hidden"
                    >
                        <span className={cn("block h-[1.5px] w-6 bg-ink transition-transform duration-300", open && "translate-y-[3.75px] rotate-45")} />
                        <span className={cn("block h-[1.5px] w-6 bg-ink transition-transform duration-300", open && "-translate-y-[3.75px] -rotate-45")} />
                    </button>
                </div>
            </nav>

            {/* Cajón móvil */}
            <div
                id="menu-movil"
                inert={!open}
                className={cn(
                    "grid border-line bg-paper transition-[grid-template-rows] duration-300 ease-[var(--ease-out)] lg:hidden",
                    open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]",
                )}
            >
                <div className="overflow-hidden">
                    <ul className="mx-auto w-[min(100%-2.5rem,1200px)] py-2">
                        {links.map((item) => (
                            <li key={item.href} className="border-b border-line last:border-0">
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    aria-current={active === item.href ? "page" : undefined}
                                    className={cn(
                                        "flex min-h-13 items-center font-display text-[1.375rem]",
                                        active === item.href ? "text-violet" : "text-ink",
                                    )}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mx-auto w-[min(100%-2.5rem,1200px)] border-t border-line py-2">
                        <LanguageSwitch />
                    </div>
                </div>
            </div>
        </header>
    );
}
