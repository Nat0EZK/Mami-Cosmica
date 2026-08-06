import ClickSpark from "@/components/ClickSpark";
import { Starfield } from "@/components/site/Starfield";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Taller } from "@/components/site/Taller";
import { Talleres } from "@/components/site/Talleres";
import { Contacto } from "@/components/site/Contacto";

export default function App() {
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
            <Nav />

            <main className="relative z-10">
                <Hero />
                <About />
                <Services />
                <Taller />
                <Talleres />
                <Contacto />
            </main>
        </ClickSpark>
    );
}
