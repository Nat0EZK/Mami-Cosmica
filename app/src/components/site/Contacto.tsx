import { useState } from "react";
import { Plus } from "lucide-react";
import { whatsapp } from "@/content";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { ViewHeader, wrap } from "./Card";

/* lucide-react ya no incluye logotipos de marca, así que va en línea. */
export function InstagramGlyph({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <rect x="2" y="2" width="20" height="20" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function Contacto() {
    const { contacto } = useContent();
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="contacto">
            <ViewHeader id="#contacto" title={contacto.heading} />

            <div className={`${wrap} py-16 md:py-24`}>
                {/* Cómo agendar: estaciones en orden */}
                <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{contacto.stepsHeading}</h3>
                <ol className="mt-8 grid gap-px overflow-hidden rounded-[14px] bg-line sm:grid-cols-2 lg:grid-cols-4">
                    {contacto.steps.map((step, i) => (
                        <li key={step.title} className="bg-stock p-6">
                            <span className="font-display text-[1.75rem] leading-none text-violet tabular-nums">{i + 1}</span>
                            <p className="mt-4 font-semibold text-ink">{step.title}</p>
                            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{step.body}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={contacto.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-violet">
                        <InstagramGlyph className="size-[1.1rem]" />
                        {contacto.instagram.label}
                    </a>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        {contacto.whatsappLabel}
                    </a>
                </div>

                {/* Preguntas frecuentes */}
                <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
                    <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{contacto.faqHeading}</h3>

                    <ul className="border-t border-line">
                        {contacto.faqs.map((faq, i) => {
                            const isOpen = open === i;
                            return (
                                <li key={faq.q} className="border-b border-line">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-${i}`}
                                        className="group flex min-h-16 w-full items-center justify-between gap-4 py-5 text-left"
                                    >
                                        <span className="font-display text-[1.375rem] leading-snug text-ink transition-colors duration-200 group-hover:text-violet">
                                            {faq.q}
                                        </span>
                                        <span
                                            className={cn(
                                                "grid size-8 shrink-0 place-items-center rounded-full text-violet ring-1 ring-line transition-[transform,background-color] duration-300 ease-[var(--ease-out)]",
                                                isOpen && "rotate-45 bg-violet text-white ring-violet",
                                            )}
                                        >
                                            <Plus aria-hidden="true" className="size-4" strokeWidth={1.75} />
                                        </span>
                                    </button>
                                    <div
                                        id={`faq-${i}`}
                                        inert={!isOpen}
                                        className={cn(
                                            "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out)]",
                                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                        )}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="max-w-[62ch] pb-6 leading-[1.8] text-ink-soft">
                                                {faq.a.map((p, k) => (
                                                    <p key={k} className="mb-3 last:mb-0">
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
