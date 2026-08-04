/**
 * brasa-norte-i18n.js
 *
 * Sistema de internacionalización ES/EN de la demo "Brasa Norte".
 * Módulo autocontenido: no depende de brasa-norte-data.js ni del DOM
 * en el momento de la importación, solo cuando se llama a applyLanguage().
 *
 * Convenciones de marcado usadas por este módulo:
 * - data-i18n="clave"              -> traduce el texto (textContent) del elemento.
 * - data-i18n-<atributo>="clave"   -> traduce ese atributo (ej. data-i18n-aria-label,
 *                                     data-i18n-placeholder, data-i18n-title).
 * - <html lang="...">              -> se actualiza automáticamente al idioma activo.
 */

export const DEFAULT_LANGUAGE = 'es';
export const AVAILABLE_LANGUAGES = ['es', 'en'];

const STORAGE_KEY = 'brasaNorteLang';

/** Diccionario completo. Toda clave debe existir al menos en `es` (idioma de respaldo). */
const dictionary = {
  es: {
    'skip.link': 'Saltar al contenido principal',

    'nav.historia': 'Historia',
    'nav.platos': 'Platos destacados',
    'nav.fuego': 'El fuego',
    'nav.menu': 'Menú',
    'nav.reserva': 'Reserva',
    'nav.horarios': 'Horarios y ubicación',
    'nav.faq': 'Preguntas frecuentes',
    'nav.cta_reservar': 'Reservar mesa',
    'nav.toggle_abrir': 'Abrir menú de navegación',
    'nav.toggle_cerrar': 'Cerrar menú de navegación',

    'lang.es_label': 'ES',
    'lang.en_label': 'EN',
    'lang.selector_aria': 'Seleccionar idioma',

    'hero.badge': 'Demo comercial ficticia — Brasa Norte no es un negocio real.',
    'hero.subtitle': 'Una mesa nocturna donde el fuego escribe el menú y la brasa lleva la voz cantante.',
    'hero.cta': 'Reservar mesa',
    'hero.placeholder_texto': 'Placeholder interno — imagen de hero pendiente',

    'historia.heading': 'Una cocina que nació del fuego, no del gas',
    'historia.p1': 'Brasa Norte imagina una cocina construida alrededor de un único elemento: el fuego vivo. Sin gas, sin inducción, sin atajos: cada plato pasa por brasa, rescoldo o humo antes de llegar a la mesa.',
    'historia.p2': 'Un pequeño equipo de cocineros trabaja cada noche alrededor de una parrilla abierta, visible desde el comedor, donde el ritmo del servicio lo marca el propio fuego.',
    'historia.placeholder_texto': 'Placeholder interno — imagen de historia pendiente',

    'destacados.heading': 'Platos destacados',
    'destacados.intro': 'Una selección breve de lo que mejor representa la cocina de Brasa Norte.',
    'destacados.placeholder_texto': 'Placeholder interno — imagen de plato pendiente',

    'plato.pan.nombre': 'Pan de brasa con mantequilla ahumada',
    'plato.pan.descripcion': 'Pan de masa madre tostado al rescoldo, servido con mantequilla ahumada en sarmientos.',
    'plato.pulpo.nombre': 'Pulpo a la brasa con puré de raíces',
    'plato.pulpo.descripcion': 'Pulpo marcado a fuego vivo sobre un puré suave de raíces de temporada.',
    'plato.costilla.nombre': 'Costilla ahumada doce horas',
    'plato.costilla.descripcion': 'Costilla cocinada lentamente durante doce horas sobre madera de roble.',
    'plato.trucha.nombre': 'Trucha a la brasa con hierbas del norte',
    'plato.trucha.descripcion': 'Trucha entera asada a la brasa, aromatizada con hierbas frescas de temporada.',
    'plato.raices.nombre': 'Raíces al rescoldo',
    'plato.raices.descripcion': 'Selección de raíces de temporada cocinadas enterradas en el rescoldo.',
    'plato.setas.nombre': 'Setas silvestres a la brasa',
    'plato.setas.descripcion': 'Setas de temporada asadas enteras, terminadas con aceite de hierbas.',
    'plato.tarta.nombre': 'Tarta de manzana ahumada',
    'plato.tarta.descripcion': 'Tarta de manzana de temporada con un toque de ahumado sutil.',
    'plato.chocolate.nombre': 'Chocolate oscuro con sal de brasa',
    'plato.chocolate.descripcion': 'Chocolate oscuro de intensidad alta, terminado con sal ahumada sobre brasa.',

    'fuego.heading': 'El fuego como técnica y como experiencia',
    'fuego.p1': 'La parrilla abierta es el centro visible del restaurante. Elige una técnica para conocer cómo trabajamos el fuego en cada plato.',
    'fuego.placeholder_texto': 'Placeholder interno — experiencia del fuego pendiente',

    'menu.heading': 'Menú',
    'menu.intro': 'Explora la carta filtrando por categoría. Cada plato incluye un botón para ver el detalle completo.',
    'menu.categoria.entrantes': 'Entrantes de brasa',
    'menu.categoria.fuego_principal': 'Fuego principal',
    'menu.categoria.guarniciones': 'Guarniciones y raíces',
    'menu.categoria.dulce_final': 'Dulce final',
    'menu.filtro_todos': 'Todos',
    'menu.filtros_aria': 'Filtrar menú por categoría',
    'menu.conteo_singular': '{n} plato encontrado',
    'menu.conteo_plural': '{n} platos encontrados',
    'menu.estado_vacio': 'No hay platos disponibles para este filtro.',
    'menu.detalle_boton': 'Ver detalle',

    'alergeno.gluten': 'Gluten',
    'alergeno.lácteos': 'Lácteos',
    'alergeno.moluscos': 'Moluscos',
    'alergeno.pescado': 'Pescado',
    'alergeno.huevo': 'Huevo',

    'panel.ingredientes_heading': 'Ingredientes',
    'panel.alergenos_heading': 'Alérgenos',
    'panel.alergenos_ninguno': 'Sin alérgenos declarados',
    'panel.cerrar_aria': 'Cerrar detalle del plato',
    'panel.cta_reserva': 'Reservar mesa',

    'fuego.tabs_aria': 'Seleccionar técnica de fuego',

    'reserva.error.nombre_vacio': 'Introduce tu nombre completo.',
    'reserva.error.email_invalido': 'Introduce un correo electrónico válido.',
    'reserva.error.personas_invalido': 'Indica un número de personas entre 1 y 12.',
    'reserva.error.fecha_vacia': 'Selecciona una fecha.',
    'reserva.error.fecha_pasada': 'Elige una fecha igual o posterior a hoy.',
    'reserva.error.hora_vacia': 'Selecciona una hora.',
    'reserva.confirmacion_template': 'Gracias, {nombre}. Tu reserva simulada para {personas} personas el {fecha} a las {hora} ha sido registrada localmente. Esto es una demo: ningún dato se ha enviado a ningún servidor real.',

    'reserva.heading': 'Reserva',
    'reserva.intro': 'Completa el formulario para simular una reserva.',
    'reserva.disclaimer': 'Esta reserva es una simulación local. Ningún dato se envía a ningún servidor real.',
    'reserva.label_nombre': 'Nombre completo',
    'reserva.label_email': 'Correo de contacto',
    'reserva.label_personas': 'Número de personas',
    'reserva.label_fecha': 'Fecha',
    'reserva.label_hora': 'Hora',
    'reserva.label_comentarios': 'Comentarios (opcional)',
    'reserva.placeholder_comentarios': 'Alergias, ocasión especial, preferencias de mesa…',
    'reserva.submit': 'Solicitar reserva',

    'horarios.heading': 'Horarios y ubicación',
    'horarios.dia_lunes': 'Lunes',
    'horarios.dia_martes': 'Martes',
    'horarios.dia_miercoles': 'Miércoles',
    'horarios.dia_jueves': 'Jueves',
    'horarios.dia_viernes': 'Viernes',
    'horarios.dia_sabado': 'Sábado',
    'horarios.dia_domingo': 'Domingo',
    'horarios.estado_cerrado': 'Cerrado',
    'horarios.direccion_heading': 'Dirección',
    'horarios.direccion_texto': 'Calle del Rescoldo 14, Distrito Norte (dirección ficticia)',
    'horarios.telefono_label': 'Teléfono',
    'horarios.email_label': 'Correo',
    'horarios.mapa_placeholder_texto': 'Placeholder interno — mapa de ubicación pendiente',

    'faq.heading': 'Preguntas frecuentes',
    'faq.reserva-antelacion.pregunta': '¿Necesito reservar con antelación?',
    'faq.reserva-antelacion.respuesta': 'Recomendamos reservar con al menos 48 horas de antelación, especialmente los fines de semana.',
    'faq.opciones-vegetarianas.pregunta': '¿Tienen opciones vegetarianas?',
    'faq.opciones-vegetarianas.respuesta': 'Sí, varias guarniciones y entrantes del menú son aptos para dietas vegetarianas.',
    'faq.grupos-grandes.pregunta': '¿Aceptan grupos grandes?',
    'faq.grupos-grandes.respuesta': 'Aceptamos grupos de hasta doce personas escribiendo con antelación en el formulario de reserva.',
    'faq.aparcamiento.pregunta': '¿Hay aparcamiento cercano?',
    'faq.aparcamiento.respuesta': 'Existe una zona de aparcamiento público a pocos minutos a pie del local.',
    'faq.codigo-vestimenta.pregunta': '¿Cuál es el código de vestimenta?',
    'faq.codigo-vestimenta.respuesta': 'No exigimos código de vestimenta formal; buscamos una elegancia relajada.',

    'mobilecta.reservar': 'Reservar mesa',

    'footer.brand_note': 'Brasa Norte es una demo comercial ficticia creada con fines de portafolio.',
    'footer.aviso_ficticio': 'Ningún dato de contacto, dirección o reserva mostrado aquí corresponde a un negocio real.',
    'footer.copyright_texto': 'Brasa Norte — Demo ficticia. Todos los derechos reservados (ficticios).',
    'footer.nav_heading': 'Explorar',

    'meta.title': 'Brasa Norte — Demo comercial ficticia de restaurante de brasa',
  },

  en: {
    'skip.link': 'Skip to main content',

    'nav.historia': 'Story',
    'nav.platos': 'Featured dishes',
    'nav.fuego': 'The fire',
    'nav.menu': 'Menu',
    'nav.reserva': 'Reservation',
    'nav.horarios': 'Hours & location',
    'nav.faq': 'FAQ',
    'nav.cta_reservar': 'Book a table',
    'nav.toggle_abrir': 'Open navigation menu',
    'nav.toggle_cerrar': 'Close navigation menu',

    'lang.es_label': 'ES',
    'lang.en_label': 'EN',
    'lang.selector_aria': 'Select language',

    'hero.badge': 'Fictional commercial demo — Brasa Norte is not a real business.',
    'hero.subtitle': 'A night table where fire writes the menu and embers lead the way.',
    'hero.cta': 'Book a table',
    'hero.placeholder_texto': 'Internal placeholder — hero image pending',

    'historia.heading': 'A kitchen born from fire, not gas',
    'historia.p1': 'Brasa Norte imagines a kitchen built around a single element: live fire. No gas, no induction, no shortcuts: every dish passes through embers, ash or smoke before reaching the table.',
    'historia.p2': 'A small team of cooks works every night around an open grill, visible from the dining room, where the fire itself sets the pace of service.',
    'historia.placeholder_texto': 'Internal placeholder — story image pending',

    'destacados.heading': 'Featured dishes',
    'destacados.intro': 'A short selection of what best represents Brasa Norte’s kitchen.',
    'destacados.placeholder_texto': 'Internal placeholder — dish image pending',

    'plato.pan.nombre': 'Ember bread with smoked butter',
    'plato.pan.descripcion': 'Sourdough bread toasted over embers, served with vine-shoot smoked butter.',
    'plato.pulpo.nombre': 'Ember-grilled octopus with root purée',
    'plato.pulpo.descripcion': 'Octopus seared over live fire, set on a smooth seasonal root purée.',
    'plato.costilla.nombre': 'Twelve-hour smoked rib',
    'plato.costilla.descripcion': 'Rib slow-cooked for twelve hours over oak wood embers.',
    'plato.trucha.nombre': 'Ember-grilled trout with northern herbs',
    'plato.trucha.descripcion': 'Whole trout grilled over embers, finished with fresh seasonal herbs.',
    'plato.raices.nombre': 'Ember-baked roots',
    'plato.raices.descripcion': 'A selection of seasonal roots cooked buried in the embers.',
    'plato.setas.nombre': 'Ember-grilled wild mushrooms',
    'plato.setas.descripcion': 'Whole seasonal mushrooms grilled over fire, finished with herb oil.',
    'plato.tarta.nombre': 'Smoked apple tart',
    'plato.tarta.descripcion': 'Seasonal apple tart with a subtle smoked note.',
    'plato.chocolate.nombre': 'Dark chocolate with ember salt',
    'plato.chocolate.descripcion': 'High-intensity dark chocolate, finished with ember-smoked salt.',

    'fuego.heading': 'Fire as technique and as experience',
    'fuego.p1': 'The open grill is the visible center of the restaurant. Choose a technique to see how we work with fire in every dish.',
    'fuego.placeholder_texto': 'Internal placeholder — fire experience pending',

    'menu.heading': 'Menu',
    'menu.intro': 'Browse the menu by filtering by category. Each dish includes a button to view its full detail.',
    'menu.categoria.entrantes': 'Ember starters',
    'menu.categoria.fuego_principal': 'Main fire',
    'menu.categoria.guarniciones': 'Sides & roots',
    'menu.categoria.dulce_final': 'Sweet finish',
    'menu.filtro_todos': 'All',
    'menu.filtros_aria': 'Filter menu by category',
    'menu.conteo_singular': '{n} dish found',
    'menu.conteo_plural': '{n} dishes found',
    'menu.estado_vacio': 'No dishes available for this filter.',
    'menu.detalle_boton': 'View detail',

    'alergeno.gluten': 'Gluten',
    'alergeno.lácteos': 'Dairy',
    'alergeno.moluscos': 'Molluscs',
    'alergeno.pescado': 'Fish',
    'alergeno.huevo': 'Egg',

    'panel.ingredientes_heading': 'Ingredients',
    'panel.alergenos_heading': 'Allergens',
    'panel.alergenos_ninguno': 'No declared allergens',
    'panel.cerrar_aria': 'Close dish detail',
    'panel.cta_reserva': 'Book a table',

    'fuego.tabs_aria': 'Select fire technique',

    'reserva.error.nombre_vacio': 'Enter your full name.',
    'reserva.error.email_invalido': 'Enter a valid email address.',
    'reserva.error.personas_invalido': 'Enter a number of guests between 1 and 12.',
    'reserva.error.fecha_vacia': 'Select a date.',
    'reserva.error.fecha_pasada': 'Choose a date on or after today.',
    'reserva.error.hora_vacia': 'Select a time.',
    'reserva.confirmacion_template': 'Thank you, {nombre}. Your simulated reservation for {personas} guests on {fecha} at {hora} has been recorded locally. This is a demo: no data was sent to any real server.',

    'reserva.heading': 'Reservation',
    'reserva.intro': 'Fill in the form to simulate a reservation.',
    'reserva.disclaimer': 'This reservation is a local simulation. No data is sent to any real server.',
    'reserva.label_nombre': 'Full name',
    'reserva.label_email': 'Contact email',
    'reserva.label_personas': 'Number of guests',
    'reserva.label_fecha': 'Date',
    'reserva.label_hora': 'Time',
    'reserva.label_comentarios': 'Comments (optional)',
    'reserva.placeholder_comentarios': 'Allergies, special occasion, table preferences…',
    'reserva.submit': 'Request reservation',

    'horarios.heading': 'Hours & location',
    'horarios.dia_lunes': 'Monday',
    'horarios.dia_martes': 'Tuesday',
    'horarios.dia_miercoles': 'Wednesday',
    'horarios.dia_jueves': 'Thursday',
    'horarios.dia_viernes': 'Friday',
    'horarios.dia_sabado': 'Saturday',
    'horarios.dia_domingo': 'Sunday',
    'horarios.estado_cerrado': 'Closed',
    'horarios.direccion_heading': 'Address',
    'horarios.direccion_texto': 'Ember Lane 14, North District (fictional address)',
    'horarios.telefono_label': 'Phone',
    'horarios.email_label': 'Email',
    'horarios.mapa_placeholder_texto': 'Internal placeholder — location map pending',

    'faq.heading': 'Frequently asked questions',
    'faq.reserva-antelacion.pregunta': 'Do I need to book in advance?',
    'faq.reserva-antelacion.respuesta': 'We recommend booking at least 48 hours in advance, especially on weekends.',
    'faq.opciones-vegetarianas.pregunta': 'Do you have vegetarian options?',
    'faq.opciones-vegetarianas.respuesta': 'Yes, several sides and starters on the menu are suitable for vegetarian diets.',
    'faq.grupos-grandes.pregunta': 'Do you accept large groups?',
    'faq.grupos-grandes.respuesta': 'We accept groups of up to twelve people by writing in advance through the reservation form.',
    'faq.aparcamiento.pregunta': 'Is there parking nearby?',
    'faq.aparcamiento.respuesta': 'There is public parking a few minutes on foot from the venue.',
    'faq.codigo-vestimenta.pregunta': 'What is the dress code?',
    'faq.codigo-vestimenta.respuesta': 'We do not require a formal dress code; we favor relaxed elegance.',

    'mobilecta.reservar': 'Book a table',

    'footer.brand_note': 'Brasa Norte is a fictional commercial demo created for portfolio purposes.',
    'footer.aviso_ficticio': 'No contact detail, address or reservation shown here belongs to a real business.',
    'footer.copyright_texto': 'Brasa Norte — Fictional demo. All (fictional) rights reserved.',
    'footer.nav_heading': 'Explore',

    'meta.title': 'Brasa Norte — Fictional restaurant demo',
  },
};

/**
 * Devuelve la traducción de `key` en `lang`, con fallback a español y,
 * en último caso, a la propia clave (para detectar claves faltantes en desarrollo).
 * @param {string} key
 * @param {string} lang
 * @returns {string}
 */
export function t(key, lang) {
  const table = dictionary[lang] || dictionary[DEFAULT_LANGUAGE];
  if (table && Object.prototype.hasOwnProperty.call(table, key)) {
    return table[key];
  }
  const fallback = dictionary[DEFAULT_LANGUAGE];
  if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) {
    return fallback[key];
  }
  return key;
}

/** Lee el idioma guardado en localStorage, si es válido; si no, null. */
export function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return AVAILABLE_LANGUAGES.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** Guarda el idioma en localStorage. Falla en silencio si no hay acceso (modo privado, etc.). */
export function setStoredLanguage(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage no disponible: la preferencia solo dura la sesión actual. */
  }
}

/**
 * Aplica `lang` a todo el documento: recorre [data-i18n] y [data-i18n-*],
 * actualiza <html lang>, y persiste la preferencia.
 * @param {string} lang
 */
export function applyLanguage(lang) {
  const activeLang = AVAILABLE_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key, activeLang);
  });

  document.querySelectorAll('*').forEach((el) => {
    for (const attr of el.attributes) {
      if (attr.name.startsWith('data-i18n-')) {
        const targetAttr = attr.name.replace('data-i18n-', '');
        el.setAttribute(targetAttr, t(attr.value, activeLang));
      }
    }
  });

  document.documentElement.lang = activeLang;
  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang-option') === activeLang;
    btn.setAttribute('aria-pressed', String(isActive));
  });

  setStoredLanguage(activeLang);
}
