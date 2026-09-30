import { whatsapp } from "@/content";
import { useContent } from "@/lib/locale";
import { InstagramGlyph } from "./Contacto";
import { wrap } from "./Card";
import { MoonPhases } from "./Magic";

export function Footer() {
    const { hero, about, contacto } = useContent();

    return (
        <footer className="border-t border-line bg-stock text-ink-soft">
            <div className={`${wrap} flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between`}>
                <div>
                    <MoonPhases className="mb-5 block w-[150px] text-lilac" />
                    <a href="#inicio" className="font-display text-[1.75rem] leading-none text-ink">
                        {hero.title}
                    </a>
                    <p className="mt-2 text-[0.9375rem]">
                        {hero.subtitle} · {about.facts[0]}
                    </p>
                </div>
                <div className="flex items-center gap-5 text-[0.9375rem] font-semibold">
                    <a
                        href={contacto.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-ink hover:underline"
                    >
                        <InstagramGlyph className="size-4" />
                        Instagram
                    </a>
                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center text-ink hover:underline"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}
