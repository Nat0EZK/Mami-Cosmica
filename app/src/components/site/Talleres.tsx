import { ArrowRight } from "lucide-react";
import { useContent } from "@/lib/locale";
import { ViewHeader, wrap } from "./Card";

export function Talleres() {
    const { talleres } = useContent();

    return (
        <section id="talleres">
            <ViewHeader id="#talleres" title={talleres.heading} />

            <div className={`${wrap} grid justify-center gap-8 py-16 sm:grid-cols-[repeat(2,minmax(0,340px))] md:gap-12 md:py-24`}>
                {talleres.cards.map((card) => (
                    <article key={card.title} className="card-face flex flex-col p-[15px]">
                        <div className="grid aspect-square place-items-center rounded-t-[4px] bg-paper">
                            <img
                                src={card.icon.src}
                                alt={card.icon.alt}
                                loading="lazy"
                                decoding="async"
                                className="h-[62%] w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-1 flex-col px-5 pt-6 pb-5 text-center">
                            <h3 className="text-[1.75rem] text-ink">{card.title}</h3>
                            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{card.body}</p>
                            <a
                                href="#contacto"
                                className="group mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-center font-semibold text-violet"
                            >
                                {talleres.ctaLabel}
                                <ArrowRight
                                    aria-hidden="true"
                                    className="size-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
