document.addEventListener("DOMContentLoaded", () => {

    // 1. Lógica para mostrar/ocultar secciones al navegar
    const navLinks = document.querySelectorAll('.menu a[href^="#"]');

    navLinks.forEach(link => {
        const targetHref = link.getAttribute('href');

        link.addEventListener('click', function(e) {
            
            // === CAMBIO IMPORTANTE: Agregamos "&& targetHref !== '#contacto'" ===
            // Ahora verifica Servicios, Magia, Talleres Y Contacto
            if (targetHref !== '#servicios' && targetHref !== '#magia-2026' && targetHref !== '#talleres' && targetHref !== '#contacto') {
                
                // Si es Inicio o Sobre Mí, ocultamos todas las secciones dinámicas
                document.querySelectorAll('.oculto-seccion').forEach(section => {
                    section.classList.remove('visible-seccion');
                    section.style.display = 'none'; 
                });
                
                // Permitimos el scroll natural (return true behavior)
                
            } else {
                // Si es una de las secciones especiales (Servicios, Packs, Talleres, Contacto)
                e.preventDefault();
                
                const targetSection = document.querySelector(targetHref);

                if (targetSection) {
                    // 1. Ocultar TODAS las secciones dinámicas primero
                    document.querySelectorAll('.oculto-seccion').forEach(section => {
                        section.classList.remove('visible-seccion');
                        section.style.display = 'none'; 
                    });

                    // 2. Mostrar SOLO la sección objetivo
                    targetSection.style.display = 'block'; 
                    
                    // Pequeño timeout para animación fade-in
                    setTimeout(() => {
                        targetSection.classList.add('visible-seccion');
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 10);
                }
            }
        });
    });


    // 2. Abre detalles al hacer click en items destacados (CARTA ASTRAL, ETC.)
    document.querySelectorAll(".highlight").forEach(item => {
        item.addEventListener("click", () => {
            const target = item.dataset.target;
            const bloque = document.getElementById(target);
            document.querySelectorAll(".info-detalle").forEach(b => b.classList.add("oculto"));
            document.querySelectorAll(".highlight .flecha").forEach(f => f.textContent = "▼");
            bloque.classList.remove("oculto");
            item.querySelector(".flecha").textContent = "▲";
            bloque.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // 3. Botón para cerrar detalles (▲ Cerrar)
    document.querySelectorAll(".cerrar-detalle").forEach(btn => {
        btn.addEventListener("click", () => {
            const bloque = btn.parentElement;
            bloque.classList.add("oculto");
            document.querySelectorAll(".highlight .flecha").forEach(f => f.textContent = "▼");
            document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // === NUEVO CÓDIGO PARA CONTACTO & FAQ ===
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Opción: Si quieres que se cierre uno al abrir otro, descomenta esto:
            document.querySelectorAll('.faq-item').forEach(i => {
            if(i !== item) i.classList.remove('active');
            });

            // Toggle la clase active
            item.classList.toggle('active');
        });
    });

});

// 4. Flip-cards en móviles
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});