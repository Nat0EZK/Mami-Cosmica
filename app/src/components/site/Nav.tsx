import { useEffect, useState } from "react";
import { useContent, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

function LanguageSwitch({ className }: { className?: string }) {
    const { locale, setLocale } = useLocale();

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 rounded-full border border-lav-600/20 bg-cream-50/80 p-1 text-[0.75rem] font-semibold uppercase tracking-[0.06em]",
                className,
            )}
        >
            {(["es", "en"] as const).map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                    className={cn(
                        "rounded-full px-3 py-1 transition-colors duration-200",
                        locale === code ? "bg-lav-600 text-white" : "text-ink-muted hover:text-lav-700",
                    )}
                >
                    {code}
                </button>
            ))}
        </div>
    );
}

export function Nav({ active }: { active?: string | null }) {
    const { nav } = useContent();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Esc cierra el menú móvil
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
                "backdrop-blur-xl backdrop-saturate-150",
                scrolled
                    ? "border-lav-600/12 bg-cream-100/88 shadow-[0_1px_24px_rgba(47,32,71,.07)]"
                    : "border-transparent bg-cream-100/70",
            )}
        >
            <nav className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-center gap-6 px-6">
                {/* Enlaces — escritorio */}
                <ul className="hidden items-center gap-8 md:flex">
                    {nav.items.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                aria-current={active === item.href ? "page" : undefined}
                                className={cn(
                                    "group relative py-2 text-[0.9375rem] font-medium tracking-[0.04em] transition-colors hover:text-lav-700",
                                    active === item.href ? "text-lav-700" : "text-ink-soft",
                                )}
                            >
                                {item.label}
                                <span
                                    className={cn(
                                        "absolute inset-x-0 bottom-0 h-[1.5px] origin-left rounded bg-gradient-to-r from-lav-500 to-gold-500 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100",
                                        active === item.href ? "scale-x-100" : "scale-x-0",
                                    )}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <LanguageSwitch className="hidden md:inline-flex" />

                {/* Botón hamburguesa — móvil */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="menu-movil"
                    aria-label={open ? nav.closeMenu : nav.openMenu}
                    className="absolute right-4 flex size-11 flex-col items-center justify-center gap-[5px] rounded-xl md:hidden"
                >
                    <span
                        className={cn(
                            "block h-[1.5px] w-[22px] rounded bg-lav-700 transition-transform duration-300",
                            open && "translate-y-[6.5px] rotate-45",
                        )}
                    />
                    <span
                        className={cn(
                            "block h-[1.5px] w-[22px] rounded bg-lav-700 transition-opacity duration-200",
                            open && "opacity-0",
                        )}
                    />
                    <span
                        className={cn(
                            "block h-[1.5px] w-[22px] rounded bg-lav-700 transition-transform duration-300",
                            open && "-translate-y-[6.5px] -rotate-45",
                        )}
                    />
                </button>
            </nav>

            {/* Cajón móvil */}
            <div
                id="menu-movil"
                className={cn(
                    "overflow-hidden border-t border-lav-600/10 bg-cream-100/97 backdrop-blur-xl transition-all duration-300 md:hidden",
                    open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
                )}
            >
                <ul className="px-6 py-2">
                    {nav.items.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex min-h-12 items-center border-b border-lav-600/8 py-4 text-[1.0625rem] text-ink-soft transition-colors last:border-0 hover:text-lav-700"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center border-t border-lav-600/8 py-4">
                    <LanguageSwitch />
                </div>
            </div>
        </header>
    );
}
