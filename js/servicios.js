document.addEventListener("DOMContentLoaded", () => {

    // Abre detalles al hacer click en items destacados
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

    // Botón para cerrar (▲)
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
