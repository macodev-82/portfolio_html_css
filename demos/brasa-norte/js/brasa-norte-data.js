/**
 * brasa-norte-data.js
 *
 * Dataset original y ficticio de la demo comercial "Brasa Norte".
 * Ningún nombre, descripción ni dato proviene de una base externa;
 * todo el contenido fue redactado específicamente para esta demo.
 *
 * Este módulo es de solo datos: no manipula el DOM ni depende de
 * ningún otro archivo. En la Fase 2 será importado por
 * brasa-norte.js para renderizar el menú filtrable y el panel de
 * detalle de plato. En la Fase 1 se deja preparado y documentado,
 * sin conectar todavía a la interfaz.
 */

/**
 * Categorías del menú.
 * @typedef {Object} Categoria
 * @property {string} id      - Identificador estable usado como valor de filtro.
 * @property {string} nombreEs
 * @property {string} nombreEn
 */

/** @type {Categoria[]} */
export const categorias = [
  { id: 'entrantes', nombreEs: 'Entrantes de brasa', nombreEn: 'Ember starters' },
  { id: 'fuego-principal', nombreEs: 'Fuego principal', nombreEn: 'Main fire' },
  { id: 'guarniciones', nombreEs: 'Guarniciones y raíces', nombreEn: 'Sides & roots' },
  { id: 'dulce-final', nombreEs: 'Dulce final', nombreEn: 'Sweet finish' },
];

/**
 * Platos del menú. Cada plato pertenece a una única categoría (por id).
 * Los precios son ficticios y solo tienen fines demostrativos.
 * @typedef {Object} Plato
 * @property {string} id
 * @property {string} categoriaId
 * @property {string} nombreEs
 * @property {string} nombreEn
 * @property {string} descripcionEs
 * @property {string} descripcionEn
 * @property {number} precio
 * @property {string[]} alergenosFicticios
 */

/** @type {Plato[]} */
export const platos = [
  {
    id: 'pan-brasa-mantequilla-ahumada',
    categoriaId: 'entrantes',
    nombreEs: 'Pan de brasa con mantequilla ahumada',
    nombreEn: 'Ember bread with smoked butter',
    descripcionEs: 'Pan de masa madre tostado al rescoldo, servido con mantequilla ahumada en sarmientos.',
    descripcionEn: 'Sourdough bread toasted over embers, served with vine-shoot smoked butter.',
    precio: 6,
    alergenosFicticios: ['gluten', 'lácteos'],
  },
  {
    id: 'pulpo-brasa-pure-raices',
    categoriaId: 'entrantes',
    nombreEs: 'Pulpo a la brasa con puré de raíces',
    nombreEn: 'Ember-grilled octopus with root purée',
    descripcionEs: 'Pulpo marcado a fuego vivo sobre un puré suave de raíces de temporada.',
    descripcionEn: 'Octopus seared over live fire, set on a smooth seasonal root purée.',
    precio: 14,
    alergenosFicticios: ['moluscos'],
  },
  {
    id: 'costilla-ahumada-doce-horas',
    categoriaId: 'fuego-principal',
    nombreEs: 'Costilla ahumada doce horas',
    nombreEn: 'Twelve-hour smoked rib',
    descripcionEs: 'Costilla cocinada lentamente durante doce horas sobre madera de roble.',
    descripcionEn: 'Rib slow-cooked for twelve hours over oak wood embers.',
    precio: 22,
    alergenosFicticios: [],
  },
  {
    id: 'trucha-brasa-hierbas-norte',
    categoriaId: 'fuego-principal',
    nombreEs: 'Trucha a la brasa con hierbas del norte',
    nombreEn: 'Ember-grilled trout with northern herbs',
    descripcionEs: 'Trucha entera asada a la brasa, aromatizada con hierbas frescas de temporada.',
    descripcionEn: 'Whole trout grilled over embers, finished with fresh seasonal herbs.',
    precio: 19,
    alergenosFicticios: ['pescado'],
  },
  {
    id: 'raices-rescoldo',
    categoriaId: 'guarniciones',
    nombreEs: 'Raíces al rescoldo',
    nombreEn: 'Ember-baked roots',
    descripcionEs: 'Selección de raíces de temporada cocinadas enterradas en el rescoldo.',
    descripcionEn: 'A selection of seasonal roots cooked buried in the embers.',
    precio: 7,
    alergenosFicticios: [],
  },
  {
    id: 'setas-silvestres-brasa',
    categoriaId: 'guarniciones',
    nombreEs: 'Setas silvestres a la brasa',
    nombreEn: 'Ember-grilled wild mushrooms',
    descripcionEs: 'Setas de temporada asadas enteras, terminadas con aceite de hierbas.',
    descripcionEn: 'Whole seasonal mushrooms grilled over fire, finished with herb oil.',
    precio: 9,
    alergenosFicticios: [],
  },
  {
    id: 'tarta-manzana-ahumada',
    categoriaId: 'dulce-final',
    nombreEs: 'Tarta de manzana ahumada',
    nombreEn: 'Smoked apple tart',
    descripcionEs: 'Tarta de manzana de temporada con un toque de ahumado sutil.',
    descripcionEn: 'Seasonal apple tart with a subtle smoked note.',
    precio: 8,
    alergenosFicticios: ['gluten', 'huevo'],
  },
  {
    id: 'chocolate-oscuro-sal-brasa',
    categoriaId: 'dulce-final',
    nombreEs: 'Chocolate oscuro con sal de brasa',
    nombreEn: 'Dark chocolate with ember salt',
    descripcionEs: 'Chocolate oscuro de intensidad alta, terminado con sal ahumada sobre brasa.',
    descripcionEn: 'High-intensity dark chocolate, finished with ember-smoked salt.',
    precio: 8,
    alergenosFicticios: ['lácteos'],
  },
];

/**
 * Horarios ficticios, uno por día de la semana (0 = lunes ... 6 = domingo).
 * `cerrado: true` indica que ese día no hay servicio.
 * @typedef {Object} HorarioDia
 * @property {string} diaEs
 * @property {string} diaEn
 * @property {boolean} cerrado
 * @property {string} horario - Vacío si `cerrado` es true.
 */

/** @type {HorarioDia[]} */
export const horarios = [
  { diaEs: 'Lunes', diaEn: 'Monday', cerrado: true, horario: '' },
  { diaEs: 'Martes', diaEn: 'Tuesday', cerrado: false, horario: '18:00–23:00' },
  { diaEs: 'Miércoles', diaEn: 'Wednesday', cerrado: false, horario: '18:00–23:00' },
  { diaEs: 'Jueves', diaEn: 'Thursday', cerrado: false, horario: '18:00–23:30' },
  { diaEs: 'Viernes', diaEn: 'Friday', cerrado: false, horario: '18:00–00:00' },
  { diaEs: 'Sábado', diaEn: 'Saturday', cerrado: false, horario: '13:00–00:00' },
  { diaEs: 'Domingo', diaEn: 'Sunday', cerrado: false, horario: '13:00–17:00' },
];

/**
 * Preguntas frecuentes ficticias.
 * @typedef {Object} PreguntaFrecuente
 * @property {string} id
 * @property {string} preguntaEs
 * @property {string} preguntaEn
 * @property {string} respuestaEs
 * @property {string} respuestaEn
 */

/** @type {PreguntaFrecuente[]} */
export const preguntasFrecuentes = [
  {
    id: 'reserva-antelacion',
    preguntaEs: '¿Necesito reservar con antelación?',
    preguntaEn: 'Do I need to book in advance?',
    respuestaEs: 'Recomendamos reservar con al menos 48 horas de antelación, especialmente los fines de semana.',
    respuestaEn: 'We recommend booking at least 48 hours in advance, especially on weekends.',
  },
  {
    id: 'opciones-vegetarianas',
    preguntaEs: '¿Tienen opciones vegetarianas?',
    preguntaEn: 'Do you have vegetarian options?',
    respuestaEs: 'Sí, varias guarniciones y entrantes del menú son aptos para dietas vegetarianas.',
    respuestaEn: 'Yes, several sides and starters on the menu are suitable for vegetarian diets.',
  },
  {
    id: 'grupos-grandes',
    preguntaEs: '¿Aceptan grupos grandes?',
    preguntaEn: 'Do you accept large groups?',
    respuestaEs: 'Aceptamos grupos de hasta doce personas escribiendo con antelación en el formulario de reserva.',
    respuestaEn: 'We accept groups of up to twelve people by writing in advance through the reservation form.',
  },
  {
    id: 'aparcamiento',
    preguntaEs: '¿Hay aparcamiento cercano?',
    preguntaEn: 'Is there parking nearby?',
    respuestaEs: 'Existe una zona de aparcamiento público a pocos minutos a pie del local.',
    respuestaEn: 'There is public parking a few minutes on foot from the venue.',
  },
  {
    id: 'codigo-vestimenta',
    preguntaEs: '¿Cuál es el código de vestimenta?',
    preguntaEn: 'What is the dress code?',
    respuestaEs: 'No exigimos código de vestimenta formal; buscamos una elegancia relajada.',
    respuestaEn: 'We do not require a formal dress code; we favor relaxed elegance.',
  },
];
