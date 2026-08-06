import { useCallback, useEffect, useState } from "react";
import ClickSpark from "@/components/ClickSpark";
import { Starfield } from "@/components/site/Starfield";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Taller } from "@/components/site/Taller";
import { Talleres } from "@/components/site/Talleres";
import { Productos } from "@/components/site/Productos";
import { Contacto } from "@/components/site/Contacto";

/**
 * Secciones que funcionan como "vistas": están ocultas hasta que se pulsa su
 * entrada del menú, y entonces aparecen con una transición suave. Inicio y
 * Sobre Mí se muestran siempre, como en la versión original del sitio.
 */
const VIEWS: Record<string, React.ComponentType> = {
    "#servicios": Services,
    "#taller-presencial": Taller,
    "#talleres": Talleres,
    "#productos": Productos,
    "#contacto": Contacto,
};

export default function App() {
    const [active, setActive] = useState<string | null>(null);

    const navigate = useCallback((href: string) => {
        if (href in VIEWS) {
            setActive(href);
            // Esperar a que la sección exista antes de desplazarse hasta ella.
            window.setTimeout(() => {
                document
                    .querySelector(href)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 60);
            return;
        }

        // Inicio / Sobre Mí: se cierra la vista abierta y se vuelve al flujo.
        setActive(null);
        window.setTimeout(() => {
            if (href === "#inicio" || href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                document
                    .querySelector(href)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 60);
    }, []);

    /**
     * Un único manejador delegado para todos los enlaces internos: el menú, el
     * botón del hero, los de precios, los de las tarjetas… Así no hay que pasar
     * callbacks por media docena de componentes.
     */
    useEffect(() => {
        function onClick(event: MouseEvent) {
            if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;

            const target = event.target as HTMLElement | null;
            const link = target?.closest?.<HTMLAnchorElement>('a[href^="#"]');
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            event.preventDefault();
            navigate(href);
        }

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [navigate]);

    const ActiveView = active ? VIEWS[active] : null;

    return (
        // Un destello discreto allí donde la visitante toca la página
        <ClickSpark
            sparkColor="#A8842F"
            sparkCount={7}
            sparkSize={9}
            sparkRadius={18}
            duration={520}
        >
            <Starfield />
            <Nav active={active} />

            <main className="relative z-10">
                <Hero />
                <About />

                {ActiveView && (
                    // `key` fuerza el remontaje para que la transición se repita
                    // cada vez que se cambia de sección.
                    <div key={active} className="view-enter">
                        <ActiveView />
                    </div>
                )}
            </main>
        </ClickSpark>
    );
}
