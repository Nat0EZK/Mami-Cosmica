import { useState } from "react";
import { Plus } from "lucide-react";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { ViewHeader, wrap } from "./Card";

export function Services() {
    const { services } = useContent();
    // Un solo detalle abierto a la vez en toda la sección
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section id="servicios">
            <ViewHeader id="#servicios" title={services.heading}>
                <p>{services.note}</p>
            </ViewHeader>

            <div className={`${wrap} py-16 md:py-24`}>
                {services.groups.map((group, gi) => (
                    <div
                        key={group.title}
                        className="grid gap-10 border-b border-line py-12 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-16 md:py-16"
                    >
                        <figure className="card-face mx-auto w-full max-w-[300px] p-[15px] md:sticky md:top-24 md:self-start">
                            <img
                                src={group.image.src}
                                alt={group.image.alt}
                                loading="lazy"
                                decoding="async"
                                className="block h-auto w-full rounded-[4px]"
                            />
                        </figure>

                        <div className="min-w-0">
                            <h3 className="text-[clamp(2rem,4vw,2.75rem)] text-ink">{group.title}</h3>

                            <ul className="mt-6 border-t border-line">
                                {group.items.map((item, ii) => {
                                    const id = `servicio-${gi}-${ii}`;
                                    const isOpen = open === id;

                                    return (
                                        <li key={item.label} className="border-b border-line">
                                            {item.detail ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen(isOpen ? null : id)}
                                                        aria-expanded={isOpen}
                                                        aria-controls={`${id}-detalle`}
                                                        className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-[1.125rem] font-semibold text-ink"
                                                    >
                                                        <span className="transition-colors duration-200 group-hover:text-violet">
                                                            {item.label}
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
                                                        id={`${id}-detalle`}
                                                        inert={!isOpen}
                                                        className={cn(
                                                            "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out)]",
                                                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                                        )}
                                                    >
                                                        <div className="overflow-hidden">
                                                            <p className="max-w-[62ch] pb-6 leading-[1.8] text-ink-soft">
                                                                {item.detail.body}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="flex min-h-14 items-center py-4 text-[1.125rem] font-semibold text-ink">
                                                    {item.label}
                                                </p>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ))}

                <div className="mt-16 flex justify-center">
                    <a href="#contacto" className="btn btn-violet">
                        {services.ctaLabel}
                    </a>
                </div>
            </div>
        </section>
    );
}
