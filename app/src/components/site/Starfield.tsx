/**
 * Cielo cósmico: capa fija detrás de todo el sitio.
 * Dos auroras enormes y difusas + tres capas de polvo estelar en mosaico.
 */
export function Starfield() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {/* Aurora lavanda.
                El tamaño va acotado en píxeles: con 75vw, en un monitor de
                1920px salía un elemento de 1440×1440 desenfocado y animándose
                sin parar, y el escritorio se arrastraba. En el móvil eran
                280px, y por eso allí iba fino. */}
            <div
                className="absolute -top-[25vh] -left-[15vw] h-[min(75vw,820px)] w-[min(75vw,820px)] blur-[18px]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(143,121,184,.18) 0%, rgba(143,121,184,.07) 35%, transparent 68%)",
                    animation: "aurora-drift-a 34s ease-in-out infinite alternate",
                }}
            />
            {/* Aurora dorada */}
            <div
                className="absolute -bottom-[30vh] -right-[18vw] h-[min(70vw,780px)] w-[min(70vw,780px)] blur-[20px]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(201,162,39,.13) 0%, rgba(226,199,124,.06) 38%, transparent 70%)",
                    animation: "aurora-drift-b 42s ease-in-out infinite alternate",
                }}
            />

            <div className="star-layer star-layer--1" />
            <div className="star-layer star-layer--2" />
            <div className="star-layer star-layer--3" />

            <style>{`
                @keyframes aurora-drift-a {
                    from { transform: translate3d(0,0,0) scale(1); }
                    to   { transform: translate3d(4vw,5vh,0) scale(1.12); }
                }
                @keyframes aurora-drift-b {
                    from { transform: translate3d(0,0,0) scale(1.08); }
                    to   { transform: translate3d(-5vw,-4vh,0) scale(1); }
                }
            `}</style>
        </div>
    );
}
