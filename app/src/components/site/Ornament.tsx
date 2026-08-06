import { cn } from "@/lib/utils";

/** Estrella ✦ flanqueada por dos filetes de oro. */
export function StarRule({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "mx-auto flex w-fit items-center justify-center gap-4 text-gold-600",
                className,
            )}
        >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="twinkle text-[0.95rem] leading-none">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600/50" />
        </div>
    );
}

/** Encabezado de sección con filete dorado debajo. */
export function SectionHeading({
    children,
    className,
    as: Tag = "h2",
}: {
    children: React.ReactNode;
    className?: string;
    as?: "h2" | "h3";
}) {
    return (
        <div className="text-center">
            <Tag
                className={cn(
                    "font-display text-[clamp(2rem,5vw,3.2rem)] font-medium tracking-[0.02em] text-lav-800",
                    className,
                )}
            >
                {children}
            </Tag>
            <span
                aria-hidden="true"
                className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
        </div>
    );
}
