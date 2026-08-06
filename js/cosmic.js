/* ==========================================================================
   MAMI CÓSMICA — capa visual
   Sólo decoración y accesibilidad. Toda la lógica de navegación entre
   secciones sigue viviendo en servicios.js; aquí no se toca.
   ========================================================================== */

(function () {
    "use strict";

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ----------------------------------------------------------------------
       1. CIELO — capas de polvo estelar
       ---------------------------------------------------------------------- */
    function buildSky() {
        var sky = document.querySelector(".cosmic-sky");
        if (!sky) return;

        for (var i = 1; i <= 3; i++) {
            var layer = document.createElement("div");
            layer.className = "star-layer star-layer--" + i;
            sky.appendChild(layer);
        }
    }

    /* ----------------------------------------------------------------------
       2. DESTELLOS alrededor del título
       Port a vanilla del componente SparklesText de Magic UI:
       misma estrella de 4 puntas, misma idea de vida/renacimiento aleatorio.
       ---------------------------------------------------------------------- */
    var SPARKLE_PATH =
        "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 " +
        "2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 " +
        "18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 " +
        "11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 " +
        "12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 " +
        "9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 " +
        "12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 " +
        "0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 " +
        "8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z";

    var SPARKLE_COLORS = ["#8F79B8", "#C9A227", "#B7A3D6"];

    function makeSparkle(host) {
        var size = Math.random() * 12 + 7;                 // 7 – 19 px
        var el = document.createElement("span");

        el.className = "cosmic-sparkle";
        el.style.left = (Math.random() * 100) + "%";
        el.style.top = (Math.random() * 100) + "%";
        el.style.width = size + "px";
        el.style.height = size + "px";
        el.style.animationDelay = (Math.random() * 2.4) + "s";
        el.style.animationDuration = (Math.random() * 1.4 + 1.8) + "s";

        el.innerHTML =
            '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="' + SPARKLE_PATH + '" fill="' +
            SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)] +
            '"/></svg>';

        host.appendChild(el);

        // Vida limitada: al terminar, la estrella renace en otro sitio.
        window.setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
            makeSparkle(host);
        }, (Math.random() * 6000) + 4000);
    }

    function buildSparkles() {
        if (reduceMotion) return;

        var host = document.querySelector(".hero-content");
        if (!host) return;

        for (var i = 0; i < 14; i++) {
            makeSparkle(host);
        }
    }

    /* ----------------------------------------------------------------------
       3. REVELADO AL HACER SCROLL
       ---------------------------------------------------------------------- */
    var REVEAL_TARGETS = [
        ".hero-content > *",
        ".about-photo .photo-rect",
        ".about-text .text-frame",
        ".services-title",
        ".service-block > *",
        ".tp-badges", ".tp-hero-text", ".tp-mini-box", ".tp-illustration",
        ".tp-about-text", ".tp-quote",
        ".tp-pillars > h3", ".tp-pillar-card",
        ".tp-program > h3", ".tp-activities", ".tp-includes-box",
        ".tp-pricing > h3", ".tp-price-card",
        ".tp-cta", ".tp-footer-quote",
        ".talleres-header", ".blob-card",
        ".contact-header", ".faq-item", ".insta-portal-container",
        ".products-header", ".product-card",
        ".detail-gallery", ".detail-info"
    ].join(",");

    function setupReveal() {
        var nodes = document.querySelectorAll(REVEAL_TARGETS);
        if (!nodes.length) return;

        // Sin IntersectionObserver o sin movimiento: mostrar todo tal cual.
        if (reduceMotion || !("IntersectionObserver" in window)) {
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].classList.add("is-visible");
            }
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

        Array.prototype.forEach.call(nodes, function (node, index) {
            node.setAttribute("data-reveal", "");
            // Escalonado suave dentro de cada grupo de hermanos
            var stagger = (index % 6) * 70;
            node.style.setProperty("--reveal-delay", stagger + "ms");
            observer.observe(node);
        });
    }

    /* ----------------------------------------------------------------------
       4. NAVEGACIÓN MÓVIL
       ---------------------------------------------------------------------- */
    function setupNav() {
        var toggle = document.querySelector(".nav-toggle");
        var menu = document.getElementById("menu-principal");
        if (!toggle || !menu) return;

        function close() {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menú");
        }

        function open() {
            menu.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Cerrar menú");
        }

        toggle.addEventListener("click", function () {
            if (menu.classList.contains("is-open")) {
                close();
            } else {
                open();
            }
        });

        // Al elegir un destino, el menú se cierra solo.
        menu.addEventListener("click", function (e) {
            if (e.target.tagName === "A") close();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && menu.classList.contains("is-open")) {
                close();
                toggle.focus();
            }
        });

        // Si se agranda la ventana, no dejar el estado móvil colgado.
        window.addEventListener("resize", function () {
            if (window.innerWidth > 860) close();
        });
    }

    /* ----------------------------------------------------------------------
       5. EMOJI → ICONO
       Envuelve el emoji inicial de cada ítem en un .emoji-chip. NO altera
       el texto: sólo mueve esos mismos caracteres dentro de un <span> para
       poder darles tamaño y alineación uniformes desde CSS.
       ---------------------------------------------------------------------- */
    function chipEmoji() {
        var selector = ".tp-meta-box li, .tp-activities li";
        var re;

        // Secuencias completas: emoji base + tono de piel + ZWJ + variación.
        try {
            re = new RegExp(
                "^\\s*((?:\\p{Extended_Pictographic}(?:\\p{Emoji_Modifier}|\\uFE0F)?" +
                "(?:\\u200D\\p{Extended_Pictographic}(?:\\p{Emoji_Modifier}|\\uFE0F)?)*)+)\\s*",
                "u"
            );
        } catch (e) {
            return; // Navegador sin escapes \p{...}: se deja el emoji tal cual.
        }

        Array.prototype.forEach.call(
            document.querySelectorAll(selector),
            function (li) {
                // Primer nodo de texto con contenido real
                var node = li.firstChild;
                while (node && node.nodeType === 3 && !node.nodeValue.trim()) {
                    node = node.nextSibling;
                }
                if (!node || node.nodeType !== 3) return;

                var match = node.nodeValue.match(re);
                if (!match) return;

                var chip = document.createElement("span");
                chip.className = "emoji-chip";
                chip.setAttribute("aria-hidden", "true");
                chip.textContent = match[1];

                node.nodeValue = node.nodeValue.slice(match[0].length);
                li.insertBefore(chip, node);
                li.classList.add("has-chip");
            }
        );
    }

    /* ----------------------------------------------------------------------
       6. IMÁGENES QUE FALTAN
       Si un archivo no existe, en vez del icono roto del navegador se pinta
       un marcador decorativo en su contenedor.
       ---------------------------------------------------------------------- */
    function imageFallback() {
        var HOLDERS = ".card-image, .photo-rect, .service-image, .blob-icon-img, .tp-illustration";

        function fail(img) {
            var holder = img.parentElement;
            while (holder && !holder.matches(HOLDERS)) {
                holder = holder.parentElement;
            }
            if (holder) holder.classList.add("media-missing");
            img.style.display = "none";
        }

        Array.prototype.forEach.call(document.images, function (img) {
            // complete + naturalWidth 0 ⇒ ya intentó cargar y falló.
            // Una imagen lazy sin empezar tiene complete === false, así que
            // esta prueba no la marca por error.
            if (img.complete && img.naturalWidth === 0) {
                fail(img);
                return;
            }
            img.addEventListener("error", function () { fail(img); });
        });
    }

    /* ----------------------------------------------------------------------
       7. CABECERA AL HACER SCROLL
       ---------------------------------------------------------------------- */
    function setupHeader() {
        var header = document.querySelector("header");
        if (!header) return;

        var ticking = false;

        function update() {
            header.classList.toggle("is-scrolled", window.scrollY > 24);
            ticking = false;
        }

        window.addEventListener("scroll", function () {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });

        update();
    }

    /* ----------------------------------------------------------------------
       Arranque
       ---------------------------------------------------------------------- */
    function init() {
        buildSky();
        buildSparkles();
        chipEmoji();
        imageFallback();
        setupReveal();
        setupNav();
        setupHeader();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
