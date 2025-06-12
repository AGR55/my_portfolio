/**
 * Gestiona las animaciones en scroll del sitio
 * - Observa elementos con class="animate-on-scroll"
 * - Les añade class="visible" cuando entran en el viewport
 */
const initScrollAnimations = () => {
  // Retornar si no hay soporte para IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("visible");
    });
    return;
  }

  // Comprobar si el usuario prefiere menos movimiento
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Si prefiere reducción de movimiento, deshabilitar animaciones
  if (prefersReducedMotion) {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("visible");
    });
    return;
  }

  // Configurar el intersection observer para animaciones
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añadir clase para activar la animación
          entry.target.classList.add("visible");

          // Dejar de observar una vez que la animación se ha activado
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Umbral de visibilidad para activar la animación
      threshold: 0.1,
      // Margen para activar antes de que el elemento esté completamente visible
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observar todos los elementos con la clase animate-on-scroll
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
};

/**
 * Gestiona efectos de parallax sutiles si están habilitados
 * Solo activa efectos si el usuario no prefiere reducir el movimiento
 */
const initParallaxEffects = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  // Elementos con parallax
  const parallaxElements = document.querySelectorAll(".parallax");

  if (parallaxElements.length === 0) return;

  // Manejar el parallax basado en scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((element) => {
      // La velocidad puede configurarse con un atributo data-speed
      const speed = element.dataset.speed || 0.1;

      // Calcular la posición en Y
      const yPos = -(scrollY * speed);

      // Aplicar transformación
      element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
    });
  });
};

/**
 * Inicializar todas las animaciones cuando el DOM está cargado
 */
document.addEventListener("DOMContentLoaded", () => {
  // Pequeña demora para asegurar que todo se carga correctamente
  setTimeout(() => {
    initScrollAnimations();
    initParallaxEffects();

    // Animar elementos inicialmente visibles
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 300);
});

/**
 * Exporta funciones para poder usarlas individualmente
 */
export { initScrollAnimations, initParallaxEffects };
