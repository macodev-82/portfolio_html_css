/* =========================================================================
   websites.js — Maahcodev commercial sales page foundation
   ========================================================================= */

(() => {
  'use strict';

  const translations = {
    en: {
      'websites-meta-title': 'Bilingual Lead-Ready Websites | Maahcodev',
      'websites-meta-description': 'Professional bilingual websites for service businesses that need a clear, modern way to earn trust and receive inquiries.',
      'websites-skip-link': 'Skip to main content',
      'websites-nav-primary-aria': 'Commercial navigation',
      'websites-nav-logo-aria': 'Maahcodev — Go to portfolio',
      'websites-nav-benefits': 'Benefits',
      'websites-nav-portfolio': 'Portfolio',
      'websites-nav-cta': 'Request a Quote',
      'websites-theme-light-aria': 'Switch to light mode',
      'websites-theme-dark-aria': 'Switch to dark mode',
      'websites-lang-switch-es-aria': 'Switch to Spanish',
      'websites-lang-switch-en-aria': 'Switch to English',
      'websites-menu-open-aria': 'Open menu',
      'websites-menu-close-aria': 'Close menu',
      'websites-hero-eyebrow': 'Bilingual Lead-Ready Website',
      'websites-hero-title': 'A bilingual website that makes your business clear, credible and easy to contact.',
      'websites-hero-description': 'Maahcodev creates clear, modern websites for service businesses that need a stronger presence in English and Spanish—on every screen.',
      'websites-hero-primary': 'Request a Quote',
      'websites-hero-secondary': 'View Portfolio',
      'websites-hero-note': 'A clear project scope is defined before development begins.',
      'websites-preview-status': 'Commercial foundation',
      'websites-preview-title': 'Built around the moment a potential client decides whether to contact you.',
      'websites-preview-description': 'Clear services, confident presentation and visible contact paths in both languages.',
      'websites-preview-item-one': 'English + Spanish from the start',
      'websites-preview-item-two': 'Mobile-first customer experience',
      'websites-preview-item-three': 'Clear call, message and quote actions',
      'websites-benefits-title': 'Core benefits',
      'websites-benefit-one-title': 'Bilingual from day one',
      'websites-benefit-one-description': 'Serve English- and Spanish-speaking clients with one consistent experience.',
      'websites-benefit-two-title': 'Designed for every screen',
      'websites-benefit-two-description': 'A mobile-first foundation that stays clear on phones, tablets and desktops.',
      'websites-benefit-three-title': 'Clear paths to contact',
      'websites-benefit-three-description': 'Make calls, messages and quote requests easier to find and understand.',
      'websites-benefit-four-title': 'Professional by design',
      'websites-benefit-four-description': 'Present your services with clarity, confidence and a custom visual direction.',
      'websites-footer-copy': 'Bilingual digital experiences for service businesses and independent professionals.',
      'websites-footer-nav-aria': 'Commercial footer navigation',
      'websites-footer-portfolio': 'Portfolio',
      'websites-footer-benefits': 'Benefits',
      'websites-footer-contact': 'Contact',
      'websites-footer-rights': '© 2026 Maahcodev. All rights reserved.',
    },
    es: {
      'websites-meta-title': 'Sitios web bilingües preparados para conseguir clientes | Maahcodev',
      'websites-meta-description': 'Sitios web bilingües profesionales para negocios de servicios que necesitan generar confianza y facilitar nuevas consultas.',
      'websites-skip-link': 'Saltar al contenido principal',
      'websites-nav-primary-aria': 'Navegación comercial',
      'websites-nav-logo-aria': 'Maahcodev — Ir al portfolio',
      'websites-nav-benefits': 'Beneficios',
      'websites-nav-portfolio': 'Portfolio',
      'websites-nav-cta': 'Solicitar cotización',
      'websites-theme-light-aria': 'Activar modo claro',
      'websites-theme-dark-aria': 'Activar modo oscuro',
      'websites-lang-switch-es-aria': 'Cambiar a español',
      'websites-lang-switch-en-aria': 'Cambiar a inglés',
      'websites-menu-open-aria': 'Abrir menú',
      'websites-menu-close-aria': 'Cerrar menú',
      'websites-hero-eyebrow': 'Sitio web bilingüe preparado para conseguir clientes',
      'websites-hero-title': 'Un sitio web bilingüe que presenta tu negocio con claridad, credibilidad y contacto fácil.',
      'websites-hero-description': 'Maahcodev crea sitios claros y modernos para negocios de servicios que necesitan una presencia más sólida en inglés y español, en cualquier pantalla.',
      'websites-hero-primary': 'Solicitar cotización',
      'websites-hero-secondary': 'Ver portfolio',
      'websites-hero-note': 'El alcance del proyecto se define claramente antes de comenzar el desarrollo.',
      'websites-preview-status': 'Fundación comercial',
      'websites-preview-title': 'Diseñado para el momento en que un cliente potencial decide si contacta tu negocio.',
      'websites-preview-description': 'Servicios claros, una presentación segura y vías de contacto visibles en ambos idiomas.',
      'websites-preview-item-one': 'Inglés y español desde el comienzo',
      'websites-preview-item-two': 'Experiencia mobile-first para tus clientes',
      'websites-preview-item-three': 'Acciones claras para llamar, escribir o cotizar',
      'websites-benefits-title': 'Beneficios principales',
      'websites-benefit-one-title': 'Bilingüe desde el primer día',
      'websites-benefit-one-description': 'Atiende clientes en inglés y español mediante una experiencia consistente.',
      'websites-benefit-two-title': 'Diseñado para cada pantalla',
      'websites-benefit-two-description': 'Una base mobile-first clara en teléfonos, tablets y computadoras.',
      'websites-benefit-three-title': 'Contacto fácil de encontrar',
      'websites-benefit-three-description': 'Facilita que las personas encuentren cómo llamar, escribir o solicitar una cotización.',
      'websites-benefit-four-title': 'Profesional desde el diseño',
      'websites-benefit-four-description': 'Presenta tus servicios con claridad, confianza y una dirección visual personalizada.',
      'websites-footer-copy': 'Experiencias digitales bilingües para negocios de servicios y profesionales independientes.',
      'websites-footer-nav-aria': 'Navegación comercial del pie de página',
      'websites-footer-portfolio': 'Portfolio',
      'websites-footer-benefits': 'Beneficios',
      'websites-footer-contact': 'Contacto',
      'websites-footer-rights': '© 2026 Maahcodev. Todos los derechos reservados.',
    },
  };

  const getStoredPreference = key => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const storePreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  };

  const normalizeLanguage = language => language === 'es' || language === 'en'
    ? language
    : 'en';

  let currentLanguage = normalizeLanguage(getStoredPreference('lang'));
  let currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

  const languageToggle = document.querySelector('.lang-toggle');
  const themeToggle = document.querySelector('.theme-toggle');

  const updateThemeControl = () => {
    if (!themeToggle) return;

    const labelKey = currentTheme === 'dark'
      ? 'websites-theme-light-aria'
      : 'websites-theme-dark-aria';
    const label = translations[currentLanguage][labelKey];

    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
    themeToggle.setAttribute('aria-pressed', String(currentTheme === 'light'));
  };

  const setTheme = (theme, { persist = true } = {}) => {
    currentTheme = theme === 'light' ? 'light' : 'dark';

    if (currentTheme === 'light') {
      document.documentElement.dataset.theme = 'light';
    } else {
      delete document.documentElement.dataset.theme;
    }

    if (persist) storePreference('theme', currentTheme);
    updateThemeControl();
  };

  const updateMetadata = language => {
    const dictionary = translations[language];
    const title = dictionary['websites-meta-title'];
    const description = dictionary['websites-meta-description'];

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  };

  const updateLanguageControl = () => {
    if (!languageToggle) return;

    const labelKey = currentLanguage === 'en'
      ? 'websites-lang-switch-es-aria'
      : 'websites-lang-switch-en-aria';

    languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    languageToggle.setAttribute('aria-label', translations[currentLanguage][labelKey]);
  };

  const applyTranslations = language => {
    const dictionary = translations[language];

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = dictionary[element.dataset.i18nAria];
      if (value) element.setAttribute('aria-label', value);
    });
  };

  const setLanguage = (language, { persist = true } = {}) => {
    currentLanguage = normalizeLanguage(language);
    document.documentElement.lang = currentLanguage;

    if (persist) storePreference('lang', currentLanguage);

    updateMetadata(currentLanguage);
    applyTranslations(currentLanguage);
    updateLanguageControl();
    updateThemeControl();
  };

  const setupTheme = () => {
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  };

  const setupLanguage = () => {
    if (!languageToggle) return;

    languageToggle.addEventListener('click', () => {
      setLanguage(currentLanguage === 'en' ? 'es' : 'en');
    });
  };

  const setupMobileMenu = () => {
    const menuToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-links');
    if (!menuToggle || !menu) return;

    const mobileQuery = window.matchMedia('(max-width: 1099px)');

    const updateMenuLabel = isOpen => {
      const labelKey = isOpen ? 'websites-menu-close-aria' : 'websites-menu-open-aria';
      menuToggle.setAttribute('aria-label', translations[currentLanguage][labelKey]);
    };

    const setMenuState = (isOpen, { focusFirst = false, returnFocus = false } = {}) => {
      const shouldOpen = mobileQuery.matches && isOpen;

      menuToggle.classList.toggle('is-open', shouldOpen);
      menu.classList.toggle('is-open', shouldOpen);
      menuToggle.setAttribute('aria-expanded', String(shouldOpen));
      updateMenuLabel(shouldOpen);

      if (mobileQuery.matches) {
        menu.toggleAttribute('inert', !shouldOpen);
        menu.setAttribute('aria-hidden', String(!shouldOpen));
      } else {
        menu.removeAttribute('inert');
        menu.removeAttribute('aria-hidden');
      }

      if (shouldOpen && focusFirst) {
        menu.querySelector('a')?.focus();
      } else if (returnFocus) {
        menuToggle.focus();
      }
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen, { focusFirst: !isOpen });
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || menuToggle.getAttribute('aria-expanded') !== 'true') return;
      event.preventDefault();
      setMenuState(false, { returnFocus: true });
    });

    mobileQuery.addEventListener('change', () => setMenuState(false));
    setMenuState(false);
  };

  const setupHeader = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const updateHeaderState = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();
  };

  setTheme(currentTheme, { persist: false });
  setLanguage(currentLanguage, { persist: false });
  setupTheme();
  setupLanguage();
  setupMobileMenu();
  setupHeader();
})();
