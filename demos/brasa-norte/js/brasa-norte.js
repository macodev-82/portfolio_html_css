/**
 * brasa-norte.js
 *
 * Punto de entrada de la demo "Brasa Norte". Se carga como
 * <script type="module"> e importa el resto de módulos mediante
 * ES Modules nativos (sin bundler).
 *
 * Fase 1 — alcance intencionalmente limitado a:
 *  - aplicar el idioma guardado (o el predeterminado);
 *  - manejar el selector de idioma ES/EN;
 *  - fijar el año actual en el footer;
 *  - navegación móvil accesible (abrir/cerrar, Escape, clic en enlace).
 *
 * Fuera de alcance en esta fase (llegará en la Fase 2):
 *  filtros de menú, modal de detalle de plato, scrollspy,
 *  validación/envío simulado del formulario de reserva, animaciones avanzadas.
 */

import { applyLanguage, getStoredLanguage, DEFAULT_LANGUAGE, t } from './brasa-norte-i18n.js';

function initIdioma() {
  const idiomaInicial = getStoredLanguage() || DEFAULT_LANGUAGE;
  applyLanguage(idiomaInicial);

  document.querySelectorAll('[data-lang-option]').forEach((boton) => {
    boton.addEventListener('click', () => {
      applyLanguage(boton.getAttribute('data-lang-option'));
    });
  });
}

function initAnioFooter() {
  const anioEl = document.getElementById('anio-actual');
  if (anioEl) {
    anioEl.textContent = String(new Date().getFullYear());
  }
}

function initNavegacionMovil() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-principal');
  if (!toggle || !nav) return;

  const idiomaActual = () => document.documentElement.lang || DEFAULT_LANGUAGE;

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

function init() {
  initIdioma();
  initAnioFooter();
  initNavegacionMovil();
}

document.addEventListener('DOMContentLoaded', init);
