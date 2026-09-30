import { HeartHandshake, MapPin, Video, type LucideIcon } from "lucide-react";
import { useContent } from "@/lib/locale";
import { wrap } from "./Card";
import { MoonPhases } from "./Magic";

const FACT_ICONS: LucideIcon[] = [MapPin, Video, HeartHandshake];

export function About() {
    const { about } = useContent();
    // La foto real va al frente; la ilustración, detrás
    const [illustration, portrait] = about.photos;
    const [lead, ...rest] = about.paragraphs;

    return (
        <section id="sobre-mi" className="bg-stock py-20 md:py-28">
            <div className={`${wrap} grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20`}>
                {/* Retrato enmarcado como una carta, con su ilustración detrás */}
                <div className="relative mx-auto w-full max-w-[420px] lg:sticky lg:top-24 lg:self-start">
                    <figure className="card-face relative z-10 p-[15px]">
                        <img
                            src={portrait.src}
                            alt={portrait.alt}
                            loading="lazy"
                            decoding="async"
                            className="block h-auto w-full rounded-[4px]"
                        />
                    </figure>
                    <figure className="card-face absolute -right-4 -bottom-8 z-0 hidden w-[46%] rotate-[6deg] p-[15px] sm:block lg:-right-10">
                        <img
                            src={illustration.src}
                            alt={illustration.alt}
                            loading="lazy"
                            decoding="async"
                            className="block h-auto w-full rounded-[4px]"
                        />
                    </figure>
                </div>

                <div className="min-w-0">
                    <MoonPhases className="mb-6 block w-[170px] text-lilac" />
                    <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] text-ink">{about.heading}</h2>

                    <ul className="mt-8 grid gap-3 border-y border-line py-5 sm:grid-cols-3 sm:gap-6">
                        {about.facts.map((fact, i) => {
                            const Icon = FACT_ICONS[i] ?? MapPin;
                            return (
                                <li key={fact} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug font-medium text-ink-soft">
                                    <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet" strokeWidth={1.75} />
                                    {fact}
                                </li>
                            );
                        })}
                    </ul>

                    <p className="mt-10 max-w-[66ch] leading-[1.8] text-ink">{lead}</p>
                    {rest.map((text, i) => (
                        <p key={i} className="mt-6 max-w-[66ch] leading-[1.8] text-ink-soft">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
