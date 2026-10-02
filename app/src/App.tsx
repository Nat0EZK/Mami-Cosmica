import { useCallback, useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Talleres } from "@/components/site/Talleres";
import { Productos } from "@/components/site/Productos";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";

/**
 * Secciones que funcionan como "vistas": están ocultas hasta que se pulsa su
 * entrada del menú, y entonces aparecen con una transición suave. Inicio y
 * Sobre Mí se muestran siempre, como en la versión original del sitio.
 */
const VIEWS: Record<string, React.ComponentType> = {
    "#servicios": Services,
    "#talleres": Talleres,
    "#productos": Productos,
    "#contacto": Contacto,
    // El Journal es un producto: su enlace abre Productos con su detalle.
    // #pre-venta se mantiene para que los enlaces viejos sigan funcionando.
    "#journal-cosmico": JournalView,
    "#pre-venta": JournalView,
};

function JournalView() {
    return <Productos initial="journal" />;
}

/** Sección a la que pertenece cada vista (para el menú, la tirada y el scroll). */
const sectionOf = (hash: string | null) =>
    hash === "#journal-cosmico" || hash === "#pre-venta" ? "#productos" : hash;

/** La sección abierta se refleja en el hash de la URL, así que un enlace como
 *  …/#journal-cosmico abre directamente esa vista. */
function viewFromHash(): string | null {
    const hash = window.location.hash;
    return hash in VIEWS ? hash : null;
}

function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
    // Estado inicial tomado de la URL: permite compartir enlaces directos.
    const [active, setActive] = useState<string | null>(viewFromHash);

    const navigate = useCallback((href: string, updateUrl = true) => {
        const isView = href in VIEWS;
        setActive(isView ? href : null);

        if (updateUrl) {
            const url = isView ? href : window.location.pathname + window.location.search;
            if (window.location.hash !== (isView ? href : "")) {
                window.history.pushState(null, "", url);
            }
        }

        // Esperar a que la sección exista antes de desplazarse hasta ella.
        window.setTimeout(() => {
            if (href === "#inicio" || href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                scrollTo(sectionOf(href) ?? href);
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

    /** Atrás y adelante del navegador vuelven a funcionar. */
    useEffect(() => {
        function onPopState() {
            setActive(viewFromHash());
        }
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    /** Si se entra con un hash, desplazarse hasta esa sección una vez montada. */
    useEffect(() => {
        const initial = viewFromHash();
        if (!initial) return;
        const timer = window.setTimeout(() => scrollTo(sectionOf(initial) ?? initial), 260);
        return () => clearTimeout(timer);
    }, []);

    const ActiveView = active ? VIEWS[active] : null;

    return (
        <>
            <Nav active={sectionOf(active)} />

            <main>
                <Hero active={sectionOf(active)} />
                <About />

                {ActiveView && (
                    // `key` fuerza el remontaje para que la transición se repita
                    // cada vez que se cambia de sección.
                    <div key={active} className="view-enter">
                        <ActiveView />
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}
