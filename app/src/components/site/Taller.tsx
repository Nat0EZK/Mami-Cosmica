import {
    Calendar,
    Clock,
    MapPin,
    Sun,
    Heart,
    Sparkles,
    Music,
    Flower2,
    Wand2,
    type LucideIcon,
} from "lucide-react";
import FadeContent from "@/components/FadeContent";
import SpotlightCard from "@/components/SpotlightCard";
import Magnet from "@/components/Magnet";
import { taller, whatsapp } from "@/content";
import { cn } from "@/lib/utils";

/* Iconografía real en lugar de emoji sueltos */
const ICONS: Record<string, LucideIcon> = {
    calendar: Calendar,
    clock: Clock,
    pin: MapPin,
    sun: Sun,
    heart: Heart,
    sparkle: Sparkles,
    music: Music,
    flower: Flower2,
    dragon: Wand2,
};

function Icon({ name, className }: { name: string; className?: string }) {
    const Cmp = ICONS[name] ?? Sparkles;
    return <Cmp aria-hidden="true" className={cn("size-4 shrink-0", className)} />;
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center">
            <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium text-lav-800">
                {children}
            </h3>
            <span
                aria-hidden="true"
                className="mx-auto mt-4 block h-px w-14 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
        </div>
    );
}

export function Taller() {
    return (
        <section
            id="taller-presencial"
            className="relative overflow-hidden px-6 py-24 text-center md:py-32"
            style={{
                background:
                    "radial-gradient(ellipse at 12% 8%, rgba(143,121,184,.10) 0%, transparent 45%), radial-gradient(ellipse at 88% 92%, rgba(201,162,39,.09) 0%, transparent 45%), #F4EDE2",
            }}
        >
            {/* Cabecera */}
            <FadeContent blur duration={800} initialOpacity={0}>
                <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {taller.badges.map((b) => (
                        <span
                            key={b}
                            className="inline-flex items-center gap-2 rounded-full border border-lav-600/28 bg-cream-50/93 px-6 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-lav-700 shadow-sm"
                        >
                            <span aria-hidden="true" className="text-gold-600">✦</span>
                            {b}
                        </span>
                    ))}
                </div>

                <h2 className="font-display text-[clamp(2.1rem,6vw,4rem)] font-medium leading-[1.08] text-lav-800">
                    {taller.title}
                </h2>
                <p className="mt-6 text-[0.9375rem] font-medium uppercase tracking-[0.26em] text-gold-700">
                    {taller.subtitle}
                </p>
            </FadeContent>

            {/* Vistazo · ilustración · detalles */}
            <div className="mx-auto mt-16 flex max-w-[1040px] flex-wrap items-center justify-center gap-8">
                <FadeContent blur duration={800} delay={80} initialOpacity={0} className="min-w-[230px] max-w-[290px] flex-1">
                    <div className="rounded-3xl border border-lav-600/15 bg-cream-50/93 p-8 text-left shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]">
                        <h4 className="mb-6 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                            {taller.glance.heading}
                        </h4>
                        <ul className="flex flex-col gap-3 text-[0.9375rem] leading-snug text-ink-soft">
                            {taller.glance.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span aria-hidden="true" className="text-[0.7rem] text-gold-600">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeContent>

                <FadeContent blur duration={800} delay={160} initialOpacity={0}>
                    <div className="w-[280px] shrink-0">
                        {/* Sin marco circular: la ilustración se muestra
                            entera, sin recorte ni borde. */}
                        <img
                            src={taller.illustration.src}
                            alt={taller.illustration.alt}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full object-contain drop-shadow-[0_14px_30px_rgba(64,46,99,.20)]"
                        />
                    </div>
                </FadeContent>

                <FadeContent blur duration={800} delay={240} initialOpacity={0} className="min-w-[230px] max-w-[290px] flex-1">
                    <div className="rounded-3xl border border-lav-600/15 bg-cream-50/93 p-8 text-left shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]">
                        <h4 className="mb-6 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                            {taller.meta.heading}
                        </h4>
                        <ul className="flex flex-col gap-3 text-[0.9375rem] text-ink-soft tabular-nums">
                            {taller.meta.items.map((item) => (
                                <li key={item.text} className="flex items-center gap-3">
                                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lav-100/85 text-lav-700">
                                        <Icon name={item.icon} />
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeContent>
            </div>

            {/* Relato + cita */}
            <div className="mx-auto mt-24 grid max-w-[1100px] items-stretch gap-12 text-left lg:grid-cols-[1.45fr_1fr]">
                <FadeContent blur duration={900} initialOpacity={0}>
                    <div>
                        <h3 className="mb-8 font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium text-lav-800">
                            {taller.aboutHeading}
                        </h3>
                        {taller.about.map((p, i) => (
                            <p key={i} className="mb-6 max-w-[68ch] text-[1.0625rem] leading-[1.85] text-ink-soft last:mb-0">
                                {p}
                            </p>
                        ))}
                    </div>
                </FadeContent>

                <FadeContent blur duration={900} delay={120} initialOpacity={0}>
                    <blockquote className="night-stars relative flex h-full items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(150deg,#33284F,#1C1630)] px-8 py-16 text-center shadow-[0_4px_10px_rgba(47,32,71,.05),0_22px_55px_rgba(47,32,71,.12)]">
                        <p className="relative z-10 whitespace-pre-line font-display text-[clamp(1.3rem,2.6vw,1.7rem)] italic leading-[1.55] text-cream-100">
                            {taller.quote}
                        </p>
                    </blockquote>
                </FadeContent>
            </div>

            {/* Pilares */}
            <div className="mt-24">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <Heading>{taller.pillarsHeading}</Heading>
                </FadeContent>

                <div className="mx-auto mt-12 grid max-w-[1100px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {taller.pillars.map((p, i) => (
                        <FadeContent key={p.title} blur duration={800} delay={i * 90} initialOpacity={0}>
                            {/* La luz sigue al cursor sobre la tarjeta */}
                            <SpotlightCard
                                className="h-full rounded-3xl border border-lav-600/15 bg-cream-50/93 px-6 py-12 text-center transition-transform duration-300 hover:-translate-y-1.5"
                                spotlightColor="rgba(201, 162, 39, 0.18)"
                            >
                                <div className="mb-6 text-[1.15rem] text-gold-600">✦</div>
                                <h4 className="mb-3 font-display text-[1.35rem] font-semibold text-lav-800">
                                    {p.title}
                                </h4>
                                <p className="text-[0.9375rem] leading-relaxed text-ink-muted">{p.body}</p>
                            </SpotlightCard>
                        </FadeContent>
                    ))}
                </div>
            </div>

            {/* Programa */}
            <div className="mx-auto mt-24 max-w-[1100px]">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <Heading>{taller.programHeading}</Heading>
                </FadeContent>

                <div className="mt-12 flex flex-wrap items-stretch justify-center gap-8 text-left">
                    <FadeContent blur duration={800} initialOpacity={0} className="min-w-[290px] flex-1">
                        <ul className="flex h-full flex-col gap-4 rounded-3xl border border-lav-600/15 bg-lav-100/45 p-12 text-[1.0625rem] leading-relaxed text-ink-soft">
                            {taller.activities.map((a) => (
                                <li
                                    key={a.text}
                                    className="flex items-start gap-3 border-b border-lav-600/10 pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-cream-50/90 text-lav-700">
                                        <Icon name={a.icon} />
                                    </span>
                                    {a.text}
                                </li>
                            ))}
                        </ul>
                    </FadeContent>

                    <FadeContent blur duration={800} delay={120} initialOpacity={0} className="min-w-[265px] max-w-[350px] flex-1">
                        <div className="h-full rounded-3xl border border-lav-600/15 bg-cream-50/94 p-12 shadow-sm">
                            <h4 className="mb-6 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                                {taller.includes.heading}
                            </h4>
                            <ul>
                                {taller.includes.items.map((item) => (
                                    <li key={item} className="mb-4 flex gap-2 text-[0.9375rem] leading-relaxed text-ink-soft last:mb-0">
                                        <span aria-hidden="true" className="text-[0.7rem] text-gold-600">✦</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeContent>
                </div>
            </div>

            {/* Inversión */}
            <div className="mt-24">
                <FadeContent blur duration={800} initialOpacity={0}>
                    <Heading>{taller.pricingHeading}</Heading>
                </FadeContent>

                <div className="mt-12 flex flex-wrap items-stretch justify-center gap-8">
                    {taller.prices.map((p, i) => (
                        <FadeContent key={p.tag} blur duration={800} delay={i * 90} initialOpacity={0}>
                            <SpotlightCard
                                className={cn(
                                    "relative flex h-full w-[265px] max-w-full flex-col items-center gap-3 overflow-hidden rounded-3xl px-6 pb-8 pt-12 text-center transition-transform duration-300 hover:-translate-y-1.5",
                                    p.featured
                                        ? "border border-lav-600/38 bg-cream-50 shadow-[0_2px_4px_rgba(47,32,71,.04),0_10px_28px_rgba(47,32,71,.08)]"
                                        : "border border-lav-600/15 bg-cream-50/90 shadow-sm",
                                )}
                                spotlightColor="rgba(201, 162, 39, 0.20)"
                            >
                                {p.featured && (
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -top-3/5 left-1/2 h-[120%] w-[200%] -translate-x-1/2"
                                        style={{
                                            background:
                                                "radial-gradient(ellipse at 50% 0%, rgba(226,199,124,.22) 0%, transparent 60%)",
                                        }}
                                    />
                                )}

                                {p.ribbon && (
                                    <span className="absolute -right-9 top-4 z-10 rotate-[35deg] bg-gradient-to-br from-gold-600 to-gold-500 px-10 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white shadow">
                                        {p.ribbon}
                                    </span>
                                )}

                                <span className="relative text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                                    {p.tag}
                                </span>
                                <span className="relative font-display text-[2.6rem] font-semibold leading-none tabular-nums text-lav-700">
                                    {p.price}
                                </span>
                                {p.note && (
                                    <p className="relative text-[0.8125rem] leading-snug text-ink-muted">{p.note}</p>
                                )}

                                <a
                                    href={whatsapp} target="_blank" rel="noopener noreferrer"
                                    className="relative mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-br from-lav-600 to-lav-700 px-6 py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_3px_12px_rgba(64,46,99,.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(64,46,99,.32)]"
                                >
                                    {p.cta}
                                </a>
                            </SpotlightCard>
                        </FadeContent>
                    ))}
                </div>
            </div>

            {/* Cierre */}
            <FadeContent blur duration={900} initialOpacity={0}>
                <div className="mt-24">
                    <Magnet padding={80} magnetStrength={7} className="inline-block">
                        <a
                            href={whatsapp} target="_blank" rel="noopener noreferrer"
                            className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-br from-lav-600 to-lav-700 px-14 py-[1.15rem] text-[1.0625rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_8px_20px_rgba(155,114,207,.45)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10">{taller.ctaLabel}</span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,.32)_50%,transparent_75%)] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-full"
                            />
                        </a>
                    </Magnet>

                    <p className="mt-6 text-[0.9375rem] uppercase tracking-[0.14em] text-gold-700">
                        <span aria-hidden="true">✦ </span>
                        {taller.ctaSub}
                        <span aria-hidden="true"> ✦</span>
                    </p>

                    <p className="mt-16 font-display text-[clamp(1.2rem,2.6vw,1.6rem)] italic text-lav-600/90">
                        {taller.footerQuote}
                    </p>
                </div>
            </FadeContent>
        </section>
    );
}
