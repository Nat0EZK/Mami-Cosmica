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
            {/* Aurora lavanda */}
            <div
                className="absolute -top-[25vh] -left-[15vw] h-[75vw] w-[75vw] blur-[30px]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(143,121,184,.18) 0%, rgba(143,121,184,.07) 35%, transparent 68%)",
                    animation: "aurora-drift-a 34s ease-in-out infinite alternate",
                }}
            />
            {/* Aurora dorada */}
            <div
                className="absolute -bottom-[30vh] -right-[18vw] h-[70vw] w-[70vw] blur-[35px]"
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
