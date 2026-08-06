document.addEventListener("DOMContentLoaded", () => {

    // 1. NAVEGACIÓN PRINCIPAL
    // Detectamos links del menú y botones que llevan a secciones principales
    const navLinks = document.querySelectorAll('.menu a[href^="#"], .btn-detalles, .hero-btn');

    navLinks.forEach(link => {
        const targetHref = link.getAttribute('href');

        link.addEventListener('click', function(e) {
            
            // Lista de IDs de tus secciones "paginas"
            const seccionesDinamicas = ['#servicios', '#taller-presencial', '#talleres', '#contacto', '#productos'];

            // Si el link NO es una de estas secciones, asumimos que es Inicio/SobreMi (scroll normal)
            if (!seccionesDinamicas.includes(targetHref)) {
                
                // Ocultar todas las secciones dinámicas
                document.querySelectorAll('.oculto-seccion').forEach(section => {
                    section.classList.remove('visible-seccion');
                    section.style.display = 'none'; 
                });
                
            } else {
                // Si ES una sección dinámica
                e.preventDefault();
                
                const targetSection = document.querySelector(targetHref);

                if (targetSection) {
                    // 1. Ocultar TODAS las secciones dinámicas primero
                    document.querySelectorAll('.oculto-seccion').forEach(section => {
                        section.classList.remove('visible-seccion');
                        section.style.display = 'none'; 
                    });

                    // 2. Lógica Específica para PRODUCTOS (Resetear vista al entrar)
                    if (targetHref === '#productos') {
                        document.getElementById('catalogo-productos').style.display = 'block';
                        document.getElementById('detalle-oraculo').style.display = 'none';
                    }

                    // 3. Mostrar la sección objetivo
                    targetSection.style.display = 'block'; 
                    
                    setTimeout(() => {
                        targetSection.classList.add('visible-seccion');
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 10);
                }
            }
        });
    });


    // 2. Lógica interna de SERVICIOS (Acordeones/Detalles)
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

    document.querySelectorAll(".cerrar-detalle").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.classList.add("oculto");
            document.querySelectorAll(".highlight .flecha").forEach(f => f.textContent = "▼");
            document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // 3. Lógica interna de CONTACTO (FAQ)
    document.querySelectorAll('.faq-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });

    // 4. Lógica interna de PRODUCTOS (Catálogo <-> Detalle)
    const btnVerOraculo = document.getElementById('btn-ver-oraculo');
    const btnVolverCatalogo = document.getElementById('btn-volver-catalogo');
    const vistaCatalogo = document.getElementById('catalogo-productos');
    const vistaDetalle = document.getElementById('detalle-oraculo');

    if(btnVerOraculo && btnVolverCatalogo) {
        // Ir al detalle
        btnVerOraculo.addEventListener('click', () => {
            vistaCatalogo.style.display = 'none';
            vistaDetalle.style.display = 'block';
            // Scroll arriba suave
            document.getElementById('productos').scrollIntoView({ behavior: "smooth" });
        });

        // Volver al catálogo
        btnVolverCatalogo.addEventListener('click', () => {
            vistaDetalle.style.display = 'none';
            vistaCatalogo.style.display = 'block';
             // Scroll arriba suave
             document.getElementById('productos').scrollIntoView({ behavior: "smooth" });
        });
    }

});

/* ==========================================
   FUNCIÓN PARA CAMBIAR ENTRE IMAGEN Y VIDEO
   ========================================== */
function cambiarVista(tipo, ruta, elementoThumb) {
    
    // 1. Obtener elementos principales
    const mainImg = document.getElementById('main-img-display');
    const mainVideo = document.getElementById('main-video-display');

    // 2. Pausar video principal si estaba sonando
    mainVideo.pause();

    // 3. Lógica de cambio
    if (tipo === 'imagen') {
        // Mostrar Imagen, Ocultar Video
        mainImg.src = ruta;
        mainImg.className = 'media-active';
        mainVideo.className = 'media-hidden';

    } else if (tipo === 'video') {
        // Mostrar Video, Ocultar Imagen
        mainVideo.src = ruta;
        mainVideo.className = 'media-active';
        mainImg.className = 'media-hidden';
        
        // Opcional: Reproducir automáticamente al cambiar
        // mainVideo.play(); 
    }

    // 4. Actualizar estilo de miniaturas (Borde activo)
    // Quitamos la clase 'active-thumb' de todos
    document.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // Se la ponemos al que hicimos click
    elementoThumb.classList.add('active-thumb');
}