/**
 * brasa-norte.js
 *
 * Punto de entrada de la demo "Brasa Norte". Se carga como
 * <script type="module"> e importa el resto de módulos mediante
 * ES Modules nativos (sin bundler).
 *
 * Fase 2 — interactividad funcional principal:
 *  - menú renderizado desde brasa-norte-data.js, con filtros por categoría;
 *  - panel de detalle de plato (diálogo accesible con trampa de foco);
 *  - scrollspy de navegación mediante IntersectionObserver;
 *  - formulario de reserva simulada (validación, confirmación, sin envío real);
 *  - experiencia interactiva básica del fuego (pestañas accesibles);
 *  - idioma ES/EN aplicado también al contenido generado dinámicamente.
 *
 * Fuera de alcance en esta fase (llegará en la Fase 3):
 *  imágenes finales, animaciones cinematográficas avanzadas, texturas
 *  complejas, carruseles, canvas, librerías externas, integraciones reales.
 */

import { platos, tecnicasFuego } from './brasa-norte-data.js';
import { applyLanguage, getStoredLanguage, DEFAULT_LANGUAGE, t } from './brasa-norte-i18n.js';

/** Relaciona cada id de plato con el prefijo de clave usado en el diccionario i18n. */
const PLATO_I18N = {
  'pan-brasa-mantequilla-ahumada': 'plato.pan',
  'pulpo-brasa-pure-raices': 'plato.pulpo',
  'costilla-ahumada-doce-horas': 'plato.costilla',
  'trucha-brasa-hierbas-norte': 'plato.trucha',
  'raices-rescoldo': 'plato.raices',
  'setas-silvestres-brasa': 'plato.setas',
  'tarta-manzana-ahumada': 'plato.tarta',
  'chocolate-oscuro-sal-brasa': 'plato.chocolate',
};

/* -------------------------------------------------------------
   Utilidades compartidas
   ------------------------------------------------------------- */

function idiomaActual() {
  return document.documentElement.lang || DEFAULT_LANGUAGE;
}

function claveCategoria(categoriaId) {
  return `menu.categoria.${categoriaId.replace(/-/g, '_')}`;
}

function nombrePlato(plato, lang) {
  return t(`${PLATO_I18N[plato.id]}.nombre`, lang);
}

function descripcionPlato(plato, lang) {
  return t(`${PLATO_I18N[plato.id]}.descripcion`, lang);
}

function ingredientesPlato(plato, lang) {
  return lang === 'en' ? plato.ingredientesEn : plato.ingredientesEs;
}

function crearElementoTexto(tag, texto, className) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = texto;
  return el;
}

/* -------------------------------------------------------------
   Idioma: aplicación + refresco de contenido dinámico
   ------------------------------------------------------------- */

const refrescosIdioma = [];

function registrarRefrescoIdioma(fn) {
  refrescosIdioma.push(fn);
}

function refrescarIdioma(lang) {
  applyLanguage(lang);
  const activo = idiomaActual();
  refrescosIdioma.forEach((fn) => fn(activo));
}

function initIdioma() {
  document.querySelectorAll('[data-lang-option]').forEach((boton) => {
    boton.addEventListener('click', () => {
      refrescarIdioma(boton.getAttribute('data-lang-option'));
    });
  });

  const idiomaInicial = getStoredLanguage() || DEFAULT_LANGUAGE;
  refrescarIdioma(idiomaInicial);
}

/* -------------------------------------------------------------
   Año del footer
   ------------------------------------------------------------- */

function initAnioFooter() {
  const anioEl = document.getElementById('anio-actual');
  if (anioEl) {
    anioEl.textContent = String(new Date().getFullYear());
  }
}

/* -------------------------------------------------------------
   Navegación móvil
   ------------------------------------------------------------- */

function initNavegacionMovil() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-principal');
  if (!toggle || !nav) return;

  const cerrarMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t('nav.toggle_abrir', idiomaActual()));
  };

  const abrirMenu = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', t('nav.toggle_cerrar', idiomaActual()));
  };

  toggle.addEventListener('click', () => {
    const abierto = toggle.getAttribute('aria-expanded') === 'true';
    if (abierto) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  nav.addEventListener('click', (evento) => {
    if (evento.target instanceof HTMLElement && evento.target.tagName === 'A') {
      cerrarMenu();
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      cerrarMenu();
      toggle.focus();
    }
  });
}

/* -------------------------------------------------------------
   Menú dinámico + filtros
   ------------------------------------------------------------- */

let filtroActivo = 'todos';

function crearTarjetaPlato(plato, lang) {
  const li = document.createElement('li');
  li.className = 'menu-card';
  li.dataset.categoria = plato.categoriaId;

  const header = document.createElement('div');
  header.className = 'menu-card__header';
  header.appendChild(crearElementoTexto('h3', nombrePlato(plato, lang), 'menu-card__nombre'));
  header.appendChild(crearElementoTexto('span', `${plato.precio} €`, 'menu-card__precio'));
  li.appendChild(header);

  li.appendChild(crearElementoTexto('p', descripcionPlato(plato, lang), 'menu-card__descripcion'));

  const meta = document.createElement('div');
  meta.className = 'menu-card__meta';
  meta.appendChild(crearElementoTexto('span', t(claveCategoria(plato.categoriaId), lang), 'menu-card__categoria'));
  plato.alergenosFicticios.forEach((alergenoId) => {
    meta.appendChild(crearElementoTexto('span', t(`alergeno.${alergenoId}`, lang), 'menu-card__alergeno'));
  });
  li.appendChild(meta);

  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'ver-detalle-btn';
  boton.textContent = t('menu.detalle_boton', lang);
  boton.setAttribute('data-plato-id', plato.id);
  boton.addEventListener('click', () => abrirPanelPlato(plato.id, boton));
  li.appendChild(boton);

  return li;
}

function renderMenu(lang) {
  const contenedor = document.getElementById('menu-resultados');
  const conteo = document.getElementById('menu-conteo');
  const vacio = document.getElementById('menu-estado-vacio');
  if (!contenedor || !conteo || !vacio) return;

  contenedor.textContent = '';

  const filtrados = filtroActivo === 'todos'
    ? platos
    : platos.filter((plato) => plato.categoriaId === filtroActivo);

  filtrados.forEach((plato) => {
    contenedor.appendChild(crearTarjetaPlato(plato, lang));
  });

  const n = filtrados.length;
  const claveConteo = n === 1 ? 'menu.conteo_singular' : 'menu.conteo_plural';
  conteo.textContent = t(claveConteo, lang).replace('{n}', String(n));

  vacio.hidden = n !== 0;
  contenedor.hidden = n === 0;
}

function initMenu() {
  const filtros = Array.from(document.querySelectorAll('.filtro-btn'));
  if (filtros.length === 0) return;

  filtros.forEach((boton) => {
    boton.addEventListener('click', () => {
      filtroActivo = boton.getAttribute('data-filtro');
      filtros.forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
      renderMenu(idiomaActual());
    });
  });

  registrarRefrescoIdioma(renderMenu);
}

/* -------------------------------------------------------------
   Experiencia del fuego (pestañas accesibles)
   ------------------------------------------------------------- */

let tecnicaActivaIndex = 0;

function renderFuegoPanel(lang) {
  const tecnica = tecnicasFuego[tecnicaActivaIndex];
  const nombreEl = document.getElementById('fuego-panel-nombre');
  const descEl = document.getElementById('fuego-panel-descripcion');
  const datoEl = document.getElementById('fuego-panel-dato');
  const panel = document.getElementById('fuego-panel');
  if (!tecnica || !nombreEl || !descEl || !datoEl || !panel) return;

  nombreEl.textContent = lang === 'en' ? tecnica.nombreEn : tecnica.nombreEs;
  descEl.textContent = lang === 'en' ? tecnica.descripcionEn : tecnica.descripcionEs;
  datoEl.textContent = lang === 'en' ? tecnica.datoEn : tecnica.datoEs;

  document.querySelectorAll('.fuego-tab').forEach((tab, index) => {
    const activo = index === tecnicaActivaIndex;
    const datoTecnica = tecnicasFuego[index];
    tab.textContent = lang === 'en' ? datoTecnica.nombreEn : datoTecnica.nombreEs;
    tab.setAttribute('aria-selected', String(activo));
    tab.tabIndex = activo ? 0 : -1;
  });

  panel.setAttribute('aria-labelledby', `fuego-tab-${tecnicaActivaIndex}`);
}

function activarTecnica(index, enfocar) {
  tecnicaActivaIndex = index;
  renderFuegoPanel(idiomaActual());
  if (enfocar) {
    const tab = document.getElementById(`fuego-tab-${index}`);
    if (tab) tab.focus();
  }
}

function initFuego() {
  const tabs = Array.from(document.querySelectorAll('.fuego-tab'));
  if (tabs.length === 0) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activarTecnica(index, false));
    tab.addEventListener('keydown', (evento) => {
      if (evento.key === 'ArrowRight' || evento.key === 'ArrowDown') {
        evento.preventDefault();
        activarTecnica((index + 1) % tabs.length, true);
      } else if (evento.key === 'ArrowLeft' || evento.key === 'ArrowUp') {
        evento.preventDefault();
        activarTecnica((index - 1 + tabs.length) % tabs.length, true);
      } else if (evento.key === 'Home') {
        evento.preventDefault();
        activarTecnica(0, true);
      } else if (evento.key === 'End') {
        evento.preventDefault();
        activarTecnica(tabs.length - 1, true);
      }
    });
  });

  registrarRefrescoIdioma(renderFuegoPanel);
}

/* -------------------------------------------------------------
   Panel de detalle de plato (diálogo accesible / bottom sheet)
   ------------------------------------------------------------- */

let elementoDisparadorPanel = null;
let platoAbiertoId = null;

function elementosPanel() {
  const panel = document.getElementById('panel-detalle-plato');
  if (!panel) return null;
  return {
    panel,
    dialogo: panel.querySelector('.dish-panel__dialog'),
    overlay: panel.querySelector('[data-panel-overlay]'),
    cerrar: panel.querySelector('[data-panel-cerrar]'),
    nombre: panel.querySelector('#dish-panel-titulo'),
    categoria: panel.querySelector('.dish-panel__categoria'),
    descripcion: panel.querySelector('.dish-panel__descripcion'),
    precio: panel.querySelector('.dish-panel__precio'),
    ingredientes: panel.querySelector('[data-panel-ingredientes]'),
    alergenos: panel.querySelector('[data-panel-alergenos]'),
  };
}

function renderPanelContenido(lang) {
  if (!platoAbiertoId) return;
  const plato = platos.find((p) => p.id === platoAbiertoId);
  const els = elementosPanel();
  if (!plato || !els) return;

  els.nombre.textContent = nombrePlato(plato, lang);
  els.categoria.textContent = t(claveCategoria(plato.categoriaId), lang);
  els.descripcion.textContent = descripcionPlato(plato, lang);
  els.precio.textContent = `${plato.precio} €`;

  els.ingredientes.textContent = '';
  ingredientesPlato(plato, lang).forEach((ingrediente) => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    els.ingredientes.appendChild(li);
  });

  els.alergenos.textContent = plato.alergenosFicticios.length
    ? plato.alergenosFicticios.map((id) => t(`alergeno.${id}`, lang)).join(', ')
    : t('panel.alergenos_ninguno', lang);
}

function elementosFocables(contenedor) {
  return Array.from(
    contenedor.querySelectorAll('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])')
  ).filter((el) => !el.hasAttribute('disabled') && el.getClientRects().length > 0);
}

function manejarTrampaFoco(evento) {
  if (evento.key !== 'Tab') return;
  const els = elementosPanel();
  if (!els || !els.dialogo) return;

  const focables = elementosFocables(els.dialogo);
  if (focables.length === 0) return;

  const primero = focables[0];
  const ultimo = focables[focables.length - 1];

  if (evento.shiftKey && document.activeElement === primero) {
    evento.preventDefault();
    ultimo.focus();
  } else if (!evento.shiftKey && document.activeElement === ultimo) {
    evento.preventDefault();
    primero.focus();
  }
}

function manejarEscapePanel(evento) {
  if (evento.key === 'Escape') {
    cerrarPanelPlato();
  }
}

function abrirPanelPlato(platoId, disparador) {
  const els = elementosPanel();
  if (!els) return;

  platoAbiertoId = platoId;
  elementoDisparadorPanel = disparador || null;

  renderPanelContenido(idiomaActual());

  els.panel.hidden = false;
  els.panel.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => els.panel.classList.add('is-open'));

  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', manejarEscapePanel);
  if (els.dialogo) {
    els.dialogo.addEventListener('keydown', manejarTrampaFoco);
    els.dialogo.focus();
  }
}

function cerrarPanelPlato() {
  const els = elementosPanel();
  if (!els || els.panel.hidden) return;

  els.panel.classList.remove('is-open');
  els.panel.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', manejarEscapePanel);
  if (els.dialogo) {
    els.dialogo.removeEventListener('keydown', manejarTrampaFoco);
  }

  window.setTimeout(() => {
    els.panel.hidden = true;
  }, 250);

  platoAbiertoId = null;

  if (elementoDisparadorPanel) {
    elementoDisparadorPanel.focus();
    elementoDisparadorPanel = null;
  }
}

function initPanelDetalle() {
  const els = elementosPanel();
  if (!els) return;

  if (els.overlay) els.overlay.addEventListener('click', cerrarPanelPlato);
  if (els.cerrar) els.cerrar.addEventListener('click', cerrarPanelPlato);

  registrarRefrescoIdioma(renderPanelContenido);
}

/**
 * Conecta los botones estáticos de "Ver detalle" de Platos Destacados
 * (fuera de #menu-resultados) al mismo panel accesible que usa el menú
 * dinámico. No afecta a las tarjetas del menú: esas ya reciben su
 * listener individualmente en crearTarjetaPlato al crearse.
 */
function initDestacados() {
  document.querySelectorAll('.dish-grid [data-plato-id]').forEach((boton) => {
    boton.addEventListener('click', () => abrirPanelPlato(boton.getAttribute('data-plato-id'), boton));
  });
}

/* -------------------------------------------------------------
   Puntos de entrada a la reserva (header, hero, panel, ubicación, CTA móvil)
   ------------------------------------------------------------- */

function irAReserva(cerrarPanelPrimero) {
  if (cerrarPanelPrimero) cerrarPanelPlato();

  const seccion = document.getElementById('reserva');
  if (!seccion) return;

  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  seccion.scrollIntoView({ behavior: reducirMovimiento ? 'auto' : 'smooth', block: 'start' });

  const primerCampo = document.getElementById('reserva-nombre');
  if (primerCampo) {
    window.setTimeout(() => primerCampo.focus(), reducirMovimiento ? 0 : 400);
  }
}

function initReservaEntryPoints() {
  document.querySelectorAll('[data-reserva-entry]').forEach((el) => {
    el.addEventListener('click', (evento) => {
      const dentroDelPanel = Boolean(el.closest('#panel-detalle-plato'));
      evento.preventDefault();
      irAReserva(dentroDelPanel);
    });
  });
}

/* -------------------------------------------------------------
   Reserva simulada (validación, confirmación, sin envío real)
   ------------------------------------------------------------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hoyISO() {
  const ahora = new Date();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');
  return `${ahora.getFullYear()}-${mes}-${dia}`;
}

function validarReserva(datos, lang) {
  const errores = {};

  if (!datos.nombre.trim()) {
    errores.nombre = t('reserva.error.nombre_vacio', lang);
  }
  if (!EMAIL_RE.test(datos.email.trim())) {
    errores.email = t('reserva.error.email_invalido', lang);
  }
  const personas = Number(datos.personas);
  if (!Number.isInteger(personas) || personas < 1 || personas > 12) {
    errores.personas = t('reserva.error.personas_invalido', lang);
  }
  if (!datos.fecha) {
    errores.fecha = t('reserva.error.fecha_vacia', lang);
  } else if (datos.fecha < hoyISO()) {
    errores.fecha = t('reserva.error.fecha_pasada', lang);
  }
  if (!datos.hora) {
    errores.hora = t('reserva.error.hora_vacia', lang);
  }

  return errores;
}

function limpiarErroresReserva(form) {
  form.querySelectorAll('.form-error').forEach((p) => {
    p.textContent = '';
    p.hidden = true;
  });
  form.querySelectorAll('[aria-invalid]').forEach((campo) => {
    campo.removeAttribute('aria-invalid');
  });
}

function mostrarErroresReserva(form, errores) {
  let primerCampoConError = null;

  ['nombre', 'email', 'personas', 'fecha', 'hora'].forEach((campo) => {
    if (!errores[campo]) return;
    const input = form.elements.namedItem(campo);
    const errorEl = document.getElementById(`reserva-${campo}-error`);
    if (input) input.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = errores[campo];
      errorEl.hidden = false;
    }
    if (!primerCampoConError && input) primerCampoConError = input;
  });

  if (primerCampoConError) primerCampoConError.focus();
}

function initReserva() {
  const form = document.getElementById('formulario-reserva');
  const confirmacion = document.getElementById('reserva-confirmacion');
  if (!form || !confirmacion) return;

  const fechaInput = document.getElementById('reserva-fecha');
  if (fechaInput) fechaInput.min = hoyISO();

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const lang = idiomaActual();
    limpiarErroresReserva(form);
    confirmacion.hidden = true;

    const datos = {
      nombre: form.elements.namedItem('nombre').value,
      email: form.elements.namedItem('email').value,
      personas: form.elements.namedItem('personas').value,
      fecha: form.elements.namedItem('fecha').value,
      hora: form.elements.namedItem('hora').value,
    };

    const errores = validarReserva(datos, lang);

    if (Object.keys(errores).length > 0) {
      mostrarErroresReserva(form, errores);
      return;
    }

    const mensaje = t('reserva.confirmacion_template', lang)
      .replace('{nombre}', datos.nombre.trim())
      .replace('{personas}', datos.personas)
      .replace('{fecha}', datos.fecha)
      .replace('{hora}', datos.hora);

    confirmacion.textContent = mensaje;
    confirmacion.hidden = false;

    form.reset();
    if (fechaInput) fechaInput.min = hoyISO();
  });
}

/* -------------------------------------------------------------
   Scrollspy (IntersectionObserver)
   ------------------------------------------------------------- */

function initScrollspy() {
  if (!('IntersectionObserver' in window)) return;

  const enlaces = Array.from(document.querySelectorAll('#nav-principal .site-nav__list a[href^="#"]'));
  if (enlaces.length === 0) return;

  const mapaEnlaces = new Map();
  enlaces.forEach((enlace) => {
    const id = enlace.getAttribute('href').slice(1);
    const seccion = document.getElementById(id);
    if (seccion) mapaEnlaces.set(seccion, enlace);
  });

  if (mapaEnlaces.size === 0) return;

  const marcarActivo = (enlaceActivo) => {
    enlaces.forEach((enlace) => {
      if (enlace === enlaceActivo) {
        enlace.setAttribute('aria-current', 'location');
      } else {
        enlace.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entradas) => {
      const visible = entradas
        .filter((entrada) => entrada.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const enlace = mapaEnlaces.get(visible.target);
        if (enlace) marcarActivo(enlace);
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  mapaEnlaces.forEach((_enlace, seccion) => observer.observe(seccion));
}

/* -------------------------------------------------------------
   Inicialización
   ------------------------------------------------------------- */

function init() {
  initAnioFooter();
  initNavegacionMovil();
  initMenu();
  initFuego();
  initPanelDetalle();
  initDestacados();
  initReserva();
  initReservaEntryPoints();
  initScrollspy();
  initIdioma();
}

document.addEventListener('DOMContentLoaded', init);
