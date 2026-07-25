---
name: portfolio-visual-v2
description: Rediseño visual del portfolio maahcodev — usar al auditar, planificar o implementar mejoras de diseño visual (profundidad, jerarquía, animación, hero, proyectos, navegación) de este sitio. No se autoinvoca; el usuario debe llamarla explícitamente con /portfolio-visual-v2.
disable-model-invocation: true
---

# Portfolio Visual V2 — maahcodev

## Objetivo

Convertir el portfolio actual en una experiencia visual moderna, profesional,
dinámica y memorable, **conservando su identidad original**. No se trata de
crear un portfolio distinto, sino de evolucionar el diseño existente hasta que
parezca una versión premium y profesional de sí mismo.

## Identidad que debe conservarse

- Marca `maahcodev`.
- Paleta azul marino oscuro, cian y verde tecnológico (`--color-fondo`,
  `--color-acento`, etc. en `css/styles.css`).
- Estética relacionada con Linux, terminal, desarrollo y código.
- Sensación limpia, seria y profesional — no una plantilla genérica de
  marketing.
- Soporte completo en español e inglés (sistema i18n de `js/main.js`).
- Arquitectura actual: HTML, CSS y JavaScript vanilla, sin frameworks.
- Contenido honesto: sin experiencia, métricas ni proyectos inventados.

## Problema actual

El portfolio está ordenado y limpio, pero se percibe demasiado plano,
uniforme, estático y con poca profundidad visual.

## Dirección visual a explorar

1. Profundidad mediante degradados, luces ambientales y capas sutiles.
2. Fondo tecnológico discreto: cuadrícula, líneas, ruido o patrones de
   terminal.
3. Hero más impactante, sin convertirlo en una plantilla genérica.
4. Elemento visual inspirado en terminal o código alrededor de la identidad
   "MA".
5. Mejor jerarquía tipográfica y contraste entre títulos, contenido y
   llamadas a la acción.
6. Navegación moderna con estado activo y microinteracciones.
7. Separación visual más sofisticada entre secciones.
8. Trayectoria con animación progresiva y mejor narrativa.
9. Skills con interacciones suaves y contexto real de uso.
10. Proyectos convertidos en tarjetas premium con:
    - captura real cuando esté disponible;
    - problema que resuelve;
    - responsabilidad del desarrollador;
    - tecnologías;
    - decisión técnica o dificultad;
    - resultado honesto;
    - enlaces reales.
11. Formulario y contacto con mejor jerarquía y confianza visual.
12. Footer integrado con la nueva identidad.

## Movimiento (animación)

- Usar animaciones con propósito, no decoración excesiva.
- Priorizar `transform` y `opacity`.
- Evitar animar `width`, `height`, `top`, `left` y otras propiedades que
  provoquen layout/reflow.
- Respetar `prefers-reduced-motion`.
- El contenido debe seguir visible y usable sin animaciones.
- Usar progressive enhancement para funciones modernas.
- No añadir GSAP, Three.js, React ni librerías pesadas sin autorización
  explícita del usuario.
- No usar parallax excesivo.
- No usar cursores personalizados.
- No usar efectos que persigan el puntero constantemente.
- No llenar la página de partículas.
- No abusar de glassmorphism, blur o glow.
- No sacrificar legibilidad por efectos visuales.

## Accesibilidad

- Mantener HTML semántico.
- Navegación completa por teclado.
- Focus visible y con contraste suficiente.
- Contraste WCAG AA para texto y componentes esenciales.
- Skip link ("saltar al contenido").
- Estados hover, focus, active y disabled claramente diferenciados.
- `aria-label` y textos traducibles cuando corresponda.
- El cambio ES/EN debe continuar funcionando en todos los componentes
  nuevos.

## Responsive

Validar como mínimo en estos tamaños:

- 390 × 844 (móvil)
- 768 × 1024 (tablet)
- 1440 × 900 (escritorio)

El diseño no debe ser una versión de escritorio reducida. Cada tamaño debe
tener composición, espacio y jerarquía adecuados a su contexto.

## Rendimiento

- Mantener el sitio ligero.
- Evitar dependencias innecesarias.
- Optimizar imágenes y recursos.
- Evitar layout shifts (CLS).
- Cargar de forma diferida lo que no sea crítico.
- Usar `will-change` únicamente cuando una medición demuestre que es
  necesario.
- Mantener el sitio funcionando aunque una función visual moderna no sea
  compatible con el navegador del visitante.

## Proceso obligatorio

1. Leer la guía maestra (`docs/guia_maestra_portfolio.md`) y revisar el
   estado Git (`git status`, `git log`, `git diff`).
2. Analizar el diseño actual sin modificarlo.
3. Identificar qué elementos deben conservarse (ver "Identidad que debe
   conservarse").
4. Proponer tres direcciones visuales compatibles con la identidad actual
   (ver "Las tres direcciones" abajo).
5. Explicar ventajas, riesgos y esfuerzo de cada dirección.
6. Recomendar una dirección, con justificación.
7. **Esperar autorización explícita del usuario antes de modificar
   código.**
8. Implementar una sola capa visual a la vez (nunca varias secciones o
   efectos a la vez).
9. Mostrar el diff completo después de cada capa implementada.
10. Validar español e inglés tras cada capa.
11. Validar teclado, focus visible y `prefers-reduced-motion` tras cada
    capa.
12. Validar móvil, tablet y escritorio (390×844, 768×1024, 1440×900) tras
    cada capa.
13. No hacer `git add`, `commit`, `push` ni deploy sin autorización
    explícita del usuario para ese paso concreto.

## Las tres direcciones que se deben poder proponer

**A. Terminal Atmosférico**
Más profundidad, cuadrícula sutil, luces cian, terminal sofisticada y
microinteracciones. Evolución más conservadora del diseño actual.

**B. Developer Command Center**
Portfolio inspirado en un panel de trabajo moderno, pero sin parecer una
aplicación administrativa. Énfasis en estructura y datos organizados.

**C. Midnight Technical Editorial**
Combinación de diseño editorial, documentación técnica, grandes bloques
visuales y detalles de código. Énfasis en narrativa y tipografía.

## Regla principal

No crear un portfolio completamente distinto. Evolucionar el diseño
existente hasta que parezca una versión premium y profesional de sí mismo.
Cualquier propuesta que se aleje de la identidad descrita arriba debe
señalarse como riesgo antes de implementarse.
