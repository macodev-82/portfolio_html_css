# Brasa Norte — Demo comercial ficticia

## Propósito

Pieza de portafolio que reconstruye, desde cero y sin frameworks, el
concepto de un restaurante contemporáneo de cocina al fuego. Sustituye
una versión previa basada en React/Vite por una implementación 100%
estática: HTML semántico, CSS propio y JavaScript modular con ES Modules
nativos.

## Carácter ficticio

**Brasa Norte no es un negocio real.** Nombre, dirección, teléfono,
correo, horarios, platos, precios y preguntas frecuentes son datos
inventados con fines exclusivamente demostrativos. La reserva es una
simulación local: ningún dato introducido en el formulario se envía a
ningún servidor. El aviso "Demo comercial ficticia" es visible en la
cabecera del `hero`.

No se han utilizado ni datos, ni textos, ni clases, ni estructura de
ninguna base de referencia (ni de la versión React/Gemini, ni de otras
demos como ClaraNest); todo el contenido fue redactado específicamente
para este proyecto.

## Stack utilizado

- HTML5 semántico.
- CSS propio, modular, mobile-first (`css/brasa-norte.css`).
- JavaScript modular mediante ES Modules nativos del navegador — sin
  bundler, sin `npm`, sin dependencias.
- Bilingüe ES/EN mediante un diccionario propio (`js/brasa-norte-i18n.js`).

**Explícitamente fuera del stack:** React, Vite, Tailwind, npm, Google AI
Studio, Gemini API, Express, cualquier CDN de fuentes o de imágenes.

## Estructura de archivos

```
demos/brasa-norte/
├── index.html                 Estructura semántica completa, contenido
│                               inicial en español, atributos data-i18n.
├── README.md                  Este documento.
├── css/
│   └── brasa-norte.css        Tokens, reset, layout y componentes base.
├── js/
│   ├── brasa-norte.js         Punto de entrada (type="module"). Importa
│   │                           los otros dos módulos con ES Modules e
│   │                           implementa toda la interactividad.
│   ├── brasa-norte-data.js    Dataset ficticio: categorías, platos
│   │                           (con ingredientes), horarios, FAQ y
│   │                           técnicas de fuego. Conectado a la
│   │                           interfaz desde la Fase 2.
│   └── brasa-norte-i18n.js    Diccionario ES/EN, aplicación de idioma,
│                               persistencia en localStorage y fallback
│                               a español.
└── assets/
    └── images/
        ├── hero/               (vacío, con .gitkeep — Fase 3)
        ├── platos/             (vacío, con .gitkeep — Fase 3)
        └── historia/           (vacío, con .gitkeep — Fase 3)
```

`brasa-norte.js` es el único `<script type="module">` cargado desde
`index.html`; importa `brasa-norte-data.js` y `brasa-norte-i18n.js`
mediante `import` nativo, y orquesta el menú dinámico, el panel de
detalle, el scrollspy, la reserva simulada y la experiencia del fuego.

## Alcance de esta primera fase (Fase 1 — Fundación estructural)

Implementado:

- Estructura semántica completa de las 12 secciones del plano (skip
  link, header/nav, hero, historia, platos destacados, experiencia del
  fuego, menú, reserva, horarios/ubicación, FAQ, CTA móvil, footer) más
  un contenedor vacío reservado para el futuro panel de detalle de
  plato.
- Un único `h1` (título del hero).
- Contenido textual original en español, completo para las 12 secciones.
- Dataset ficticio (`brasa-norte-data.js`) con 4 categorías, 8 platos, 7
  días de horario y 5 preguntas frecuentes.
- Diccionario ES/EN completo (`brasa-norte-i18n.js`) que cubre el 100%
  del texto visible creado en esta fase, con fallback a español.
- Aplicación de idioma, selector ES/EN, persistencia en `localStorage`.
- Navegación móvil accesible: apertura/cierre, cierre con `Escape`,
  cierre al elegir un enlace, `aria-expanded` actualizado.
- Año dinámico en el footer.
- Fundación visual completa en CSS: tokens de color/tipografía/espaciado,
  reset, foco visible, layout mobile-first, y breakpoints para tablet y
  escritorio.
- `prefers-reduced-motion` respetado a nivel global.
- Placeholders visuales claramente identificados como internos de
  desarrollo (sin URL externa) en las áreas todavía sin imagen.
- Metadata básica: `title`, `description`, `canonical` (ruta futura),
  Open Graph inicial sin `og:image`. Sin JSON-LD.

## Fase 2 — Interactividad funcional principal

Añadido sobre la fundación de la Fase 1, siempre dentro de
`demos/brasa-norte/` y sin dependencias nuevas:

- **Menú dinámico:** `js/brasa-norte-data.js` se conecta a la interfaz.
  Las 4 categorías y los 8 platos se renderizan en `#menu-resultados`
  mediante creación explícita de nodos DOM (`document.createElement`),
  sin `innerHTML` con datos. Cada tarjeta muestra nombre, descripción,
  precio, categoría, etiquetas de alérgenos ficticios y un botón de
  detalle.
- **Filtros del menú:** botones "Todos" + 4 categorías, un único filtro
  activo (`aria-pressed`), conteo de resultados traducido y en
  `aria-live="polite"`, y estado vacío traducido si un filtro no
  arrojara resultados.
- **Panel de detalle de plato:** construido sobre el contenedor
  `#panel-detalle-plato` ya existente. En móvil se comporta como panel
  inferior (bottom sheet); a partir de tablet (`min-width: 48rem`), como
  diálogo centrado. Usa `role="dialog"`, `aria-modal="true"`,
  `aria-labelledby`, trampa de foco, cierre con botón/`Escape`/clic en
  overlay (nunca al hacer clic dentro), bloqueo de scroll de fondo
  (`body.no-scroll`) y devolución de foco al elemento que lo abrió.
  Muestra nombre, descripción completa, precio, ingredientes,
  alérgenos ficticios, categoría y CTA hacia la reserva.
- **Scrollspy:** implementado con `IntersectionObserver` sobre las
  secciones de `<main>`; marca el enlace activo con
  `aria-current="location"`. No interfiere con la navegación por
  anclas y no se ejecuta si `IntersectionObserver` no está disponible.
- **Reserva simulada:** el formulario ya existente ahora valida nombre,
  correo, número de personas, fecha (sin fechas pasadas) y hora;
  muestra errores junto a cada campo asociados por `aria-describedby`,
  lleva el foco al primer campo con error, y confirma el envío en una
  región `aria-live="polite"` dejando explícito que es una simulación.
  No hay `fetch`, `XMLHttpRequest`, `alert()` ni `console.log` con
  datos del formulario; no se guarda ningún dato personal en
  `localStorage` (solo la preferencia de idioma, como en la Fase 1). El
  formulario se limpia tras una confirmación correcta. Los 5 puntos de
  entrada (header, hero, panel de plato, ubicación, CTA móvil)
  comparten la misma lógica mediante `[data-reserva-entry]`.
- **Experiencia del fuego:** cuatro técnicas ficticias (llama directa,
  brasa lenta, humo de madera, calor envolvente) presentadas como
  pestañas accesibles (`role="tablist"`/`role="tab"`/`role="tabpanel"`,
  `aria-selected`, foco en rueda con flechas/Home/End), sin imágenes ni
  animaciones pesadas.
- **i18n:** el diccionario ES/EN cubre ahora también filtros, conteo de
  resultados, categorías, alérgenos, textos del panel de detalle,
  técnicas del fuego, errores de formulario y mensaje de confirmación.
  El idioma sigue persistiendo en `localStorage`; cambiar de idioma
  vuelve a renderizar el menú, la técnica de fuego activa y el panel de
  plato si está abierto, sin romper el filtro seleccionado.

### Accesibilidad aplicada en esta fase

- Gestión completa de foco en el panel de detalle (apertura, trampa,
  cierre, devolución de foco).
- Estados accesibles actualizados dinámicamente: `aria-pressed`
  (filtros e idioma), `aria-selected`/`aria-controls` (pestañas del
  fuego), `aria-current="location"` (scrollspy), `aria-invalid` y
  `aria-describedby` (errores de formulario), `aria-live` (conteo del
  menú y confirmación de reserva).
- Toda la interacción nueva es operable por teclado: filtros y pestañas
  son `<button>`, las pestañas del fuego implementan navegación con
  flechas/Home/End, el panel se puede cerrar con `Escape` y su foco
  queda atrapado dentro mientras está abierto.

### Validaciones realizadas

`git status --short`, `node --check` sobre los tres archivos JS,
`git diff --check`, recuento de `<h1>` e IDs duplicados, búsqueda de
referencias prohibidas (React/Vite/Tailwind/Gemini/Google AI
Studio/CDNs/`href="#"`), ausencia de `fetch`/`XMLHttpRequest`/URLs
externas de imágenes, confirmación de que el formulario no envía datos
ni los persiste, y verificación de que el panel cumple
`role="dialog"` + `aria-modal` + cierre con `Escape`.

## Pendiente (fuera de alcance de esta fase)

- Imágenes reales (las carpetas `assets/images/*` siguen vacías).
- Animaciones cinematográficas avanzadas y texturas complejas.
- Carruseles, canvas o librerías externas.
- Integraciones reales (envío real de reservas, mapa embebido, etc.).
- Pulido visual final (colores, tipografía y composición son la base
  funcional e interactiva, no el acabado definitivo).

## Punto exacto donde queda pausada la implementación

Fase 2 completada: interactividad funcional principal (menú dinámico +
filtros, panel de detalle de plato, scrollspy, reserva simulada,
experiencia del fuego, i18n extendido) implementada íntegramente dentro
de `demos/brasa-norte/`, sobre la fundación de la Fase 1. Ningún
archivo fuera de esta carpeta fue modificado. No se ha realizado ningún
commit ni push desde esta fase.

## Siguiente fase recomendada (Fase 3)

1. Sustituir los placeholders visuales por imágenes locales optimizadas
   en `assets/images/` (hero, historia, platos).
2. Pulido visual definitivo: composición asimétrica más marcada,
   texturas de fuego/carbón/madera, tipografía y espaciado afinados.
3. Animaciones de marca más elaboradas para la sección "El fuego",
   siempre respetando `prefers-reduced-motion`.
4. Revisión de accesibilidad, SEO y rendimiento sobre la versión ya
   interactiva (auditoría Lighthouse orientativa).
5. Revisión de contenido final (copys, precios, textos ficticios) antes
   de considerar la demo cerrada.
