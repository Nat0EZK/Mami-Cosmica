import { PenLine, Image as ImageIcon, Moon, type LucideIcon } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import SpotlightCard from "@/components/SpotlightCard";
import Magnet from "@/components/Magnet";
import { preventa, whatsapp } from "@/content";

const ICONS: Record<string, LucideIcon> = {
    pencil: PenLine,
    postcard: ImageIcon,
    moon: Moon,
};

export function Preventa() {
    return (
        <section
            id="pre-venta"
            className="relative overflow-hidden px-6 py-24 text-center md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at 14% 10%, rgba(143,121,184,.12) 0%, transparent 45%), radial-gradient(ellipse at 86% 90%, rgba(201,162,39,.10) 0%, transparent 45%), #FAF6EF",
            }}
        >
            {/* Cabecera */}
            <FadeContent blur duration={800} initialOpacity={0}>
                <span className="inline-flex items-center gap-2 rounded-full border border-lav-600/28 bg-cream-50/93 px-6 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-lav-700 shadow-sm">
                    <span aria-hidden="true" className="text-gold-600">✦</span>
                    {preventa.badge}
                </span>

                <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,4rem)] font-medium leading-[1.08] text-lav-800">
                    {preventa.heading}
                </h2>
                <p className="mt-5 text-[0.9375rem] font-medium uppercase tracking-[0.26em] text-gold-700">
                    {preventa.subheading}
                </p>
                <p className="mx-auto mt-6 max-w-[30ch] font-display text-[clamp(1.25rem,3.2vw,1.6rem)] italic text-lav-700">
                    {preventa.tagline}
                </p>
                <p className="mx-auto mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.85] text-ink-soft">
                    {preventa.intro}
                </p>
            </FadeContent>

            {/* Ediciones */}
            <div className="mx-auto mt-20 max-w-[1040px]">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium text-lav-800">
                        {preventa.editionsHeading}
                    </h3>
                    <span
                        aria-hidden="true"
                        className="mx-auto mt-4 block h-px w-14 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                    />
                </FadeContent>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    {preventa.editions.map((edition, i) => (
                        <FadeContent key={edition.name} blur duration={800} delay={i * 90} initialOpacity={0}>
                            <article className="group h-full overflow-hidden rounded-3xl border border-lav-600/15 bg-cream-50/93 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]">
                                <div className="overflow-hidden">
                                    <img
                                        src={edition.image}
                                        alt={`Portada del Journal Cósmico, ${edition.name}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-[380px] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-8 py-8 text-left">
                                    <h4 className="font-display text-[1.5rem] font-semibold text-lav-800">
                                        {edition.name}
                                    </h4>
                                    <p className="mt-1 font-display text-[1.0625rem] italic text-lav-600">
                                        {edition.subtitle}
                                    </p>
                                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                                        {edition.body}
                                    </p>
                                </div>
                            </article>
                        </FadeContent>
                    ))}
                </div>
            </div>

            {/* Qué incluye */}
            <div className="mx-auto mt-20 max-w-[860px]">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <div className="rounded-3xl border border-lav-600/15 bg-lav-100/45 p-10 text-left md:p-12">
                        <h4 className="mb-6 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                            {preventa.includesHeading}
                        </h4>
                        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                            {preventa.includes.map((item) => (
                                <li key={item} className="flex gap-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                                    <span aria-hidden="true" className="mt-1 shrink-0 text-[0.7rem] text-gold-600">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeContent>
            </div>

            {/* Regalos exclusivos */}
            <div className="mt-20">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium text-lav-800">
                        {preventa.bonusHeading}
                    </h3>
                    <p className="mt-3 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        {preventa.bonusSubheading}
                    </p>
                </FadeContent>

                <div className="mx-auto mt-12 grid max-w-[900px] gap-6 sm:grid-cols-3">
                    {preventa.bonus.map((item, i) => (
                        <FadeContent key={item.title} blur duration={800} delay={i * 90} initialOpacity={0}>
                            <SpotlightCard
                                className="h-full rounded-3xl border border-lav-600/15 bg-cream-50/93 px-6 py-10 text-center"
                                spotlightColor="rgba(201, 162, 39, 0.18)"
                            >
                                <span className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-lav-100/85 text-lav-700">
                                    <Icon name={item.icon} />
                                </span>
                                <h4 className="font-display text-[1.25rem] font-semibold text-lav-800">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-muted">{item.body}</p>
                            </SpotlightCard>
                        </FadeContent>
                    ))}
                </div>
            </div>

            {/* Inversión + CTA */}
            <FadeContent blur duration={900} initialOpacity={0}>
                <div className="night-stars relative mx-auto mt-24 max-w-[640px] overflow-hidden rounded-3xl bg-[linear-gradient(150deg,#33284F,#1C1630)] px-8 py-16 shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                    <p className="relative z-10 text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        Valor de pre-venta
                    </p>
                    <div className="relative z-10 mt-5 flex flex-wrap items-baseline justify-center gap-4">
                        <span className="font-display text-[clamp(2.6rem,7vw,3.6rem)] font-semibold text-gold-300">
                            {preventa.price.pre}
                        </span>
                        <span className="text-[1.1rem] text-lav-300 line-through">{preventa.price.regular}</span>
                    </div>
                    <p className="relative z-10 mx-auto mt-5 max-w-[38ch] text-[0.9375rem] leading-relaxed text-lav-200">
                        {preventa.priceNote}
                    </p>

                    <div className="relative z-10 mt-10">
                        <Magnet padding={70} magnetStrength={7} className="inline-block">
                            <a
                                href={whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-br from-lav-600 to-lav-700 px-12 py-[1.05rem] text-[0.9375rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_4px_14px_rgba(64,46,99,.26),0_14px_40px_rgba(64,46,99,.18)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(64,46,99,.30),0_20px_50px_rgba(64,46,99,.24),0_0_45px_rgba(143,121,184,.3)]"
                            >
                                <span className="relative z-10">{preventa.ctaLabel}</span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,.32)_50%,transparent_75%)] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-full"
                                />
                            </a>
                        </Magnet>
                    </div>
                </div>
            </FadeContent>
        </section>
    );
}

function Icon({ name, className }: { name: string; className?: string }) {
    const Cmp = ICONS[name] ?? Moon;
    return <Cmp aria-hidden="true" className={className ?? "size-5"} />;
}
