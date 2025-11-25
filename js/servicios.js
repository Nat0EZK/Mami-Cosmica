document.addEventListener("DOMContentLoaded", () => {

    // 1. Lógica para mostrar/ocultar secciones al navegar
const navLinks = document.querySelectorAll('.menu a[href^="#"]');

navLinks.forEach(link => {
    const targetHref = link.getAttribute('href');

    link.addEventListener('click', function(e) {
        // La acción por defecto de Inicio o Sobre Mí es hacer scroll
        if (targetHref !== '#servicios' && targetHref !== '#magia-2026') {
            
            // Ocultar todas las secciones dinámicas al hacer clic en 'Inicio' o 'Sobre Mí'
            document.querySelectorAll('.oculto-seccion').forEach(section => {
                section.classList.remove('visible-seccion');
                section.style.display = 'none'; 
            });
            
            // Permitir que el navegador maneje el scroll natural
            // No hacemos e.preventDefault()
            
        } else {
            // Manejar los clics en 'Servicios' y 'Packs'
            e.preventDefault();
            
            const targetSection = document.querySelector(targetHref);

            if (targetSection) {
                // Ocultar todas las secciones que pueden estar visibles (Servicios y Magia Cósmica)
                document.querySelectorAll('.oculto-seccion').forEach(section => {
                    section.classList.remove('visible-seccion');
                    section.style.display = 'none'; 
                });

                // Mostrar solo la sección objetivo
                targetSection.style.display = 'block'; 
                setTimeout(() => {
                    targetSection.classList.add('visible-seccion');
                    
                    // Scroll suave a la sección
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10);
            }
        }
    });
});


    // 2. Abre detalles al hacer click en items destacados (CÓDIGO ORIGINAL)
    document.querySelectorAll(".highlight").forEach(item => {
        item.addEventListener("click", () => {

            const target = item.dataset.target; // ID del bloque a abrir
            const bloque = document.getElementById(target);

            // Cerrar todos los bloques antes
            document.querySelectorAll(".info-detalle").forEach(b => {
                b.classList.add("oculto");
            });

            // Resetear flechas ▼
            document.querySelectorAll(".highlight .flecha").forEach(f => {
                f.textContent = "▼";
            });

            // Abrir el bloque
            bloque.classList.remove("oculto");

            // Cambiar flecha de ese item a ▲
            item.querySelector(".flecha").textContent = "▲";

            // Hacer scroll suave
            bloque.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // 3. Botón para cerrar (▲) (CÓDIGO ORIGINAL)
    document.querySelectorAll(".cerrar-detalle").forEach(btn => {
        btn.addEventListener("click", () => {

            const bloque = btn.parentElement;

            // Ocultar bloque
            bloque.classList.add("oculto");

            // Resetear flechas ▼
            document.querySelectorAll(".highlight .flecha").forEach(f => {
                f.textContent = "▼";
            });

            // Volver hacia los servicios
            document.getElementById("servicios").scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        });
    });
});

// 4. Flip-cards en móviles (tap) (CÓDIGO ORIGINAL - FUERA del DOMContentLoaded)
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});