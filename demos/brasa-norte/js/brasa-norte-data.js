/**
 * brasa-norte-data.js
 *
 * Dataset original y ficticio de la demo comercial "Brasa Norte".
 * Ningún nombre, descripción ni dato proviene de una base externa;
 * todo el contenido fue redactado específicamente para esta demo.
 *
 * Este módulo es de solo datos: no manipula el DOM. Desde la Fase 2,
 * `categorias`, `platos` y `tecnicasFuego` son importados por
 * brasa-norte.js para renderizar el menú filtrable, el panel de
 * detalle de plato y la experiencia interactiva del fuego.
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
 * `ingredientesEs`/`ingredientesEn` son listas breves e ilustrativas,
 * pensadas para el panel de detalle de plato.
 * @typedef {Object} Plato
 * @property {string} id
 * @property {string} categoriaId
 * @property {string} nombreEs
 * @property {string} nombreEn
 * @property {string} descripcionEs
 * @property {string} descripcionEn
 * @property {number} precio
 * @property {string[]} alergenosFicticios
 * @property {string[]} ingredientesEs
 * @property {string[]} ingredientesEn
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
    ingredientesEs: ['Masa madre', 'Mantequilla ahumada', 'Sarmientos de vid', 'Sal marina'],
    ingredientesEn: ['Sourdough', 'Smoked butter', 'Vine shoots', 'Sea salt'],
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
    ingredientesEs: ['Pulpo', 'Patata', 'Chirivía', 'Aceite de oliva', 'Pimentón ahumado'],
    ingredientesEn: ['Octopus', 'Potato', 'Parsnip', 'Olive oil', 'Smoked paprika'],
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
    ingredientesEs: ['Costilla de cerdo', 'Madera de roble', 'Especias de brasa', 'Glaseado ligero'],
    ingredientesEn: ['Pork rib', 'Oak wood', 'Ember spice rub', 'Light glaze'],
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
    ingredientesEs: ['Trucha entera', 'Hierbas frescas', 'Limón', 'Aceite de oliva'],
    ingredientesEn: ['Whole trout', 'Fresh herbs', 'Lemon', 'Olive oil'],
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
    ingredientesEs: ['Zanahoria', 'Remolacha', 'Chirivía', 'Sal gruesa'],
    ingredientesEn: ['Carrot', 'Beetroot', 'Parsnip', 'Coarse salt'],
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
    ingredientesEs: ['Setas de temporada', 'Ajo', 'Aceite de hierbas', 'Perejil'],
    ingredientesEn: ['Seasonal mushrooms', 'Garlic', 'Herb oil', 'Parsley'],
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
    ingredientesEs: ['Manzana de temporada', 'Masa quebrada', 'Canela', 'Toque ahumado'],
    ingredientesEn: ['Seasonal apple', 'Shortcrust pastry', 'Cinnamon', 'Smoked touch'],
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
    ingredientesEs: ['Chocolate oscuro 70%', 'Sal ahumada', 'Aceite de oliva'],
    ingredientesEn: ['70% dark chocolate', 'Ember-smoked salt', 'Olive oil'],
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

/**
 * Técnicas de fuego ficticias mostradas en la experiencia interactiva
 * de la sección "El fuego". El dato técnico (`datoEs`/`datoEn`) es
 * ilustrativo y no corresponde a ninguna medición real.
 * @typedef {Object} TecnicaFuego
 * @property {string} id
 * @property {string} nombreEs
 * @property {string} nombreEn
 * @property {string} descripcionEs
 * @property {string} descripcionEn
 * @property {string} datoEs
 * @property {string} datoEn
 */

/** @type {TecnicaFuego[]} */
export const tecnicasFuego = [
  {
    id: 'llama-directa',
    nombreEs: 'Llama directa',
    nombreEn: 'Direct flame',
    descripcionEs: 'El alimento se cocina en contacto directo con la llama viva, buscando un dorado rápido y un ligero toque ahumado en el exterior.',
    descripcionEn: 'Food is cooked in direct contact with the live flame, aiming for a quick sear and a light smoky note on the outside.',
    datoEs: 'Dato ilustrativo: temperatura aproximada de trabajo, 280–320 °C.',
    datoEn: 'Illustrative fact: approximate working temperature, 280–320 °C.',
  },
  {
    id: 'brasa-lenta',
    nombreEs: 'Brasa lenta',
    nombreEn: 'Slow ember',
    descripcionEs: 'Cocciones largas sobre brasa de intensidad moderada, pensadas para piezas grandes que necesitan horas para ablandarse.',
    descripcionEn: 'Long cooks over moderate-intensity embers, designed for large cuts that need hours to become tender.',
    datoEs: 'Dato ilustrativo: tiempos de cocción de referencia, entre 6 y 12 horas.',
    datoEn: 'Illustrative fact: reference cooking times, between 6 and 12 hours.',
  },
  {
    id: 'humo-madera',
    nombreEs: 'Humo de madera',
    nombreEn: 'Wood smoke',
    descripcionEs: 'Maderas seleccionadas se queman a baja intensidad para envolver el alimento en humo aromático sin cocinarlo directamente.',
    descripcionEn: 'Selected woods burn at low intensity to wrap the food in aromatic smoke without cooking it directly.',
    datoEs: 'Dato ilustrativo: maderas de referencia, roble y sarmiento de vid.',
    datoEn: 'Illustrative fact: reference woods, oak and vine shoot.',
  },
  {
    id: 'calor-envolvente',
    nombreEs: 'Calor envolvente',
    nombreEn: 'Enveloping heat',
    descripcionEs: 'El alimento se cocina enterrado en rescoldo o rodeado de calor indirecto, para una cocción uniforme desde todos los lados.',
    descripcionEn: 'Food is cooked buried in embers or surrounded by indirect heat, for even cooking from every side.',
    datoEs: 'Dato ilustrativo: técnica reservada principalmente a raíces y verduras enteras.',
    datoEn: 'Illustrative fact: technique used mainly for roots and whole vegetables.',
  },
];
