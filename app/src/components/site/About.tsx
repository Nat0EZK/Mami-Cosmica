import FadeContent from "@/components/FadeContent";
import { about } from "@/content";

export function About() {
    return (
        <section
            id="sobre-mi"
            className="relative py-24 md:py-32"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(244,237,226,.85) 12%, rgba(244,237,226,.85) 88%, transparent 100%)",
            }}
        >
            <div className="mx-auto grid w-[min(92%,1240px)] items-start gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
                {/* Retratos */}
                <div className="flex gap-4 sm:gap-6 lg:flex-col">
                    {about.photos.map((photo, i) => (
                        <FadeContent
                            key={photo.src}
                            blur
                            duration={800}
                            delay={i * 120}
                            initialOpacity={0}
                            className="flex-1"
                        >
                            <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-lav-600/15 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="size-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                                />
                                {/* Velo lavanda que se retira al pasar el cursor */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(143,121,184,.14),transparent_55%)] transition-opacity duration-500 group-hover:opacity-0"
                                />
                            </figure>
                        </FadeContent>
                    ))}
                </div>

                {/* Relato */}
                <FadeContent blur duration={900} delay={160} initialOpacity={0}>
                    <div className="relative rounded-3xl border border-lav-600/15 bg-cream-50/92 px-6 py-14 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)] sm:px-10 md:px-16">
                        {/* Ornamento floral arriba y abajo */}
                        {["-top-[31px]", "-bottom-[31px]"].map((pos) => (
                            <img
                                key={pos}
                                src="img/flor.png"
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className={`absolute ${pos} left-1/2 size-[62px] -translate-x-1/2 object-contain opacity-85 drop-shadow-[0_4px_10px_rgba(47,32,71,.12)]`}
                            />
                        ))}

                        <h2 className="text-center font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-medium uppercase tracking-[0.12em] text-lav-800">
                            {about.heading}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-4 mb-8 block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                        />

                        {about.paragraphs.map((text, i) => (
                            <p
                                key={i}
                                className={`mb-6 max-w-[68ch] text-[1.0625rem] leading-[1.85] text-ink-soft last:mb-0 ${
                                    i === 0
                                        ? "first-letter:float-left first-letter:pr-2 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-semibold first-letter:leading-[0.82] first-letter:text-lav-600"
                                        : ""
                                }`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                </FadeContent>
            </div>
        </section>
    );
}
