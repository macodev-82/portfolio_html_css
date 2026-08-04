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
│   │                           los otros dos módulos con ES Modules.
│   ├── brasa-norte-data.js    Dataset ficticio: categorías, platos,
│   │                           horarios y FAQ. Preparado para la Fase 2,
│   │                           todavía no conectado a la interfaz.
│   └── brasa-norte-i18n.js    Diccionario ES/EN, aplicación de idioma,
│                               persistencia en localStorage y fallback
│                               a español.
└── assets/
    └── images/
        ├── hero/               (vacío, con .gitkeep — Fase 2)
        ├── platos/             (vacío, con .gitkeep — Fase 2)
        └── historia/           (vacío, con .gitkeep — Fase 2)
```

`brasa-norte.js` es el único `<script type="module">` cargado desde
`index.html`; importa `brasa-norte-i18n.js` mediante `import` nativo.
`brasa-norte-data.js` existe como módulo independiente, listo para ser
importado cuando se implemente el menú filtrable y el panel de detalle
de plato.

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

## Pendiente (fuera de alcance de esta fase)

- Filtros interactivos del menú.
- Modal/panel de detalle de plato (el contenedor `#panel-detalle-plato`
  existe, vacío, reservado).
- Scrollspy en la navegación.
- Validación y confirmación simulada del formulario de reserva (el
  formulario existe con `type="submit"`, pero aún no intercepta el envío
  con JavaScript; al enviarse hoy recargaría la página con parámetros en
  la URL, ya que no tiene `action` configurada. Se resolverá al conectar
  la lógica en la Fase 2).
- Experiencia interactiva de "el fuego" (hoy es un placeholder estático).
- Conexión de `brasa-norte-data.js` a la interfaz (renderizado dinámico
  del menú y de los platos destacados).
- Imágenes reales (las carpetas `assets/images/*` están vacías).
- Animaciones más elaboradas de marca (más allá de transiciones simples
  de hover y apertura de menú).
- Pulido visual final (colores, tipografía y composición son la base
  funcional, no el acabado definitivo).

## Punto exacto donde queda pausada la implementación

Fase 1 completada: fundación estructural (HTML semántico + CSS base +
JS de inicialización + dataset + i18n) creada íntegramente dentro de
`demos/brasa-norte/`. Ningún archivo fuera de esta carpeta fue
modificado. No se ha iniciado ningún servidor ni se ha realizado
ningún commit.

## Siguiente fase recomendada (Fase 2)

1. Conectar `brasa-norte-data.js` para renderizar dinámicamente el
   menú (con filtros por categoría) y los platos destacados.
2. Implementar el panel/modal de detalle de plato sobre
   `#panel-detalle-plato`, con gestión de foco (focus trap) y cierre
   accesible.
3. Implementar scrollspy en la navegación principal.
4. Implementar validación y confirmación simulada del formulario de
   reserva (sin envío real), incluyendo el manejo de los 5 puntos de
   entrada descritos en el plano oficial.
5. Sustituir los placeholders visuales por imágenes locales optimizadas
   en `assets/images/`.
6. Incorporar la micro-interacción de marca en la sección "El fuego",
   respetando `prefers-reduced-motion`.
7. Revisión de accesibilidad, SEO y rendimiento sobre la versión ya
   interactiva.
