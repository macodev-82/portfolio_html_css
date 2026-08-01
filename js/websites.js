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
      'websites-problem-eyebrow': 'The problem',
      'websites-problem-title': 'It is harder for clients to choose your business when your online presence does not clearly explain what you offer.',
      'websites-problem-description': 'Potential clients need to understand what you offer, trust what they see and find a simple way to contact you. When any of those steps is unclear, they may keep looking.',
      'websites-problem-one-title': 'Your services feel unclear',
      'websites-problem-one-description': 'Scattered or outdated information makes it difficult to understand what you do and who you help.',
      'websites-problem-two-title': 'Contact takes too much effort',
      'websites-problem-two-description': 'Calls, messages and quote requests are easily lost when the next step is not visible.',
      'websites-problem-three-title': 'Your presence does not match your work',
      'websites-problem-three-description': 'A social-only or outdated presence may not reflect the care and professionalism behind your service.',
      'websites-solution-eyebrow': 'The solution',
      'websites-solution-title': 'One clear website, designed to build trust and make the next step easy.',
      'websites-solution-description': 'Maahcodev brings your message, services and contact paths into one professional bilingual experience designed for the way clients browse today.',
      'websites-solution-one-title': 'Make the offer clear',
      'websites-solution-one-description': 'Organize your services and essential information so visitors can quickly understand your business.',
      'websites-solution-two-title': 'Serve both languages',
      'websites-solution-two-description': 'Present one consistent experience for English- and Spanish-speaking clients from the start.',
      'websites-solution-three-title': 'Guide the next step',
      'websites-solution-three-description': 'Use visible, purposeful actions for calling, messaging or requesting a quote.',
      'websites-solution-summary': 'The goal is not more decoration. It is a clearer path from first impression to a real inquiry.',
      'websites-scope-eyebrow': 'What is included',
      'websites-scope-title': 'A focused foundation for presenting your service business professionally.',
      'websites-scope-description': 'Every project is tailored to the business. The final deliverables and responsibilities are confirmed in a written scope before development begins.',
      'websites-scope-strategy-title': 'Strategy and presentation',
      'websites-scope-strategy-one': 'Custom one-page design tailored to your business',
      'websites-scope-strategy-two': 'Up to seven primary sections',
      'websites-scope-strategy-three': 'English and Spanish content integration',
      'websites-scope-conversion-title': 'Lead-ready experience',
      'websites-scope-conversion-one': 'Clear calls to action throughout the page',
      'websites-scope-conversion-two': 'Contact or quote request form',
      'websites-scope-conversion-three': 'Call, email and WhatsApp actions when relevant',
      'websites-scope-technical-title': 'Technical foundation',
      'websites-scope-technical-one': 'Responsive, mobile-first implementation',
      'websites-scope-technical-two': 'Essential SEO and social metadata',
      'websites-scope-technical-three': 'Basic accessibility, keyboard support and initial image optimization',
      'websites-scope-launch-title': 'Launch and handoff',
      'websites-scope-launch-one': 'Domain connection and publication',
      'websites-scope-launch-two': 'Form and cross-device checks before launch',
      'websites-scope-launch-three': 'Two revision rounds and limited initial support',
      'websites-fit-eyebrow': 'Who it is for',
      'websites-fit-title': 'Designed for service businesses that need a stronger online presence and a clearer way to receive inquiries.',
      'websites-fit-description': 'This offer is a strong fit for small businesses and independent professionals ready to move beyond an unclear, outdated or social-only presence.',
      'websites-fit-one': 'Local service businesses',
      'websites-fit-two': 'Independent contractors and technicians',
      'websites-fit-three': 'Family-owned businesses',
      'websites-fit-four': 'Consultants and independent professionals',
      'websites-fit-five': 'Businesses serving clients in English and Spanish',
      'websites-fit-six': 'Teams moving beyond a social-only presence',
      'websites-exclusions-eyebrow': 'Separate scope',
      'websites-exclusions-title': 'Some features require a separate proposal.',
      'websites-exclusions-description': 'The core website does not automatically include the following services or systems:',
      'websites-exclusions-one': 'E-commerce and online payments',
      'websites-exclusions-two': 'Complex booking or scheduling systems',
      'websites-exclusions-three': 'Accounts, dashboards, databases or full web applications',
      'websites-exclusions-four': 'Complete branding, logo, photography or unlimited content production',
      'websites-exclusions-five': 'Ongoing SEO or unlimited monthly changes',
      'websites-exclusions-six': 'Unlimited revisions or 24/7 support',
      'websites-exclusions-note': 'When relevant, additional work can be reviewed and quoted separately.',
      'websites-mid-cta-eyebrow': 'Start with a clear scope',
      'websites-mid-cta-title': 'Ready for a website that helps clients understand, trust and contact your business?',
      'websites-mid-cta-description': 'Tell Maahcodev about your business, audience and goals. You will receive a tailored scope before development begins.',
      'websites-mid-cta-button': 'Request a Quote',
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
      'websites-problem-eyebrow': 'El problema',
      'websites-problem-title': 'Es más difícil que los clientes elijan tu negocio cuando tu presencia digital no explica claramente lo que ofreces.',
      'websites-problem-description': 'Los clientes potenciales necesitan entender qué ofreces, confiar en lo que ven y encontrar una forma sencilla de contactarte. Cuando alguno de esos pasos no está claro, pueden seguir buscando.',
      'websites-problem-one-title': 'Tus servicios no se entienden con facilidad',
      'websites-problem-one-description': 'La información dispersa o desactualizada dificulta entender qué haces y a quién ayudas.',
      'websites-problem-two-title': 'Contactarte requiere demasiado esfuerzo',
      'websites-problem-two-description': 'Las llamadas, los mensajes y las solicitudes de cotización se pierden con facilidad cuando el siguiente paso no es visible.',
      'websites-problem-three-title': 'Tu presencia no refleja la calidad de tu trabajo',
      'websites-problem-three-description': 'Depender solo de redes sociales o de un sitio desactualizado puede no reflejar el cuidado y el profesionalismo de tu servicio.',
      'websites-solution-eyebrow': 'La solución',
      'websites-solution-title': 'Un sitio claro, diseñado para generar confianza y facilitar el siguiente paso.',
      'websites-solution-description': 'Maahcodev reúne tu mensaje, tus servicios y tus vías de contacto en una experiencia bilingüe profesional, diseñada para la forma en que los clientes navegan hoy.',
      'websites-solution-one-title': 'Explicar la oferta con claridad',
      'websites-solution-one-description': 'Organiza tus servicios y la información esencial para que las personas entiendan rápidamente tu negocio.',
      'websites-solution-two-title': 'Atender en ambos idiomas',
      'websites-solution-two-description': 'Presenta desde el comienzo una experiencia consistente para clientes que hablan inglés o español.',
      'websites-solution-three-title': 'Guiar el siguiente paso',
      'websites-solution-three-description': 'Utiliza acciones visibles y útiles para llamar, escribir o solicitar una cotización.',
      'websites-solution-summary': 'El objetivo no es añadir decoración. Es crear un camino más claro desde la primera impresión hasta una consulta real.',
      'websites-scope-eyebrow': 'Qué incluye',
      'websites-scope-title': 'Una base enfocada para presentar tu negocio de servicios de manera profesional.',
      'websites-scope-description': 'Cada proyecto se adapta al negocio. Los entregables y las responsabilidades finales se confirman por escrito antes de comenzar el desarrollo.',
      'websites-scope-strategy-title': 'Estrategia y presentación',
      'websites-scope-strategy-one': 'Diseño personalizado de una página adaptado a tu negocio',
      'websites-scope-strategy-two': 'Hasta siete secciones principales',
      'websites-scope-strategy-three': 'Integración de contenido en inglés y español',
      'websites-scope-conversion-title': 'Experiencia preparada para recibir consultas',
      'websites-scope-conversion-one': 'Llamadas a la acción claras en toda la página',
      'websites-scope-conversion-two': 'Formulario de contacto o solicitud de cotización',
      'websites-scope-conversion-three': 'Opciones para llamar, enviar correo o usar WhatsApp cuando corresponda',
      'websites-scope-technical-title': 'Base técnica',
      'websites-scope-technical-one': 'Implementación responsive y mobile-first',
      'websites-scope-technical-two': 'SEO esencial y metadatos para redes sociales',
      'websites-scope-technical-three': 'Accesibilidad básica, uso por teclado y optimización inicial de imágenes',
      'websites-scope-launch-title': 'Publicación y entrega',
      'websites-scope-launch-one': 'Conexión del dominio y publicación',
      'websites-scope-launch-two': 'Comprobación del formulario y de distintos dispositivos antes de publicar',
      'websites-scope-launch-three': 'Dos rondas de revisiones y soporte inicial limitado',
      'websites-fit-eyebrow': 'Para quién es',
      'websites-fit-title': 'Diseñado para negocios de servicios que necesitan una presencia más sólida y una forma clara de recibir consultas.',
      'websites-fit-description': 'Esta oferta es adecuada para pequeños negocios y profesionales independientes preparados para superar una presencia confusa, desactualizada o limitada a redes sociales.',
      'websites-fit-one': 'Negocios locales de servicios',
      'websites-fit-two': 'Contratistas, técnicos y trabajadores independientes',
      'websites-fit-three': 'Negocios familiares',
      'websites-fit-four': 'Consultores y profesionales independientes',
      'websites-fit-five': 'Negocios que atienden clientes en inglés y español',
      'websites-fit-six': 'Equipos que desean superar una presencia limitada a redes sociales',
      'websites-exclusions-eyebrow': 'Alcance separado',
      'websites-exclusions-title': 'Algunas funciones requieren una propuesta separada.',
      'websites-exclusions-description': 'El sitio web básico no incluye automáticamente los siguientes servicios o sistemas:',
      'websites-exclusions-one': 'Comercio electrónico y pagos en línea',
      'websites-exclusions-two': 'Sistemas complejos de reservación o programación de citas',
      'websites-exclusions-three': 'Cuentas, paneles, bases de datos o aplicaciones web completas',
      'websites-exclusions-four': 'Branding completo, logo, fotografía o producción ilimitada de contenido',
      'websites-exclusions-five': 'SEO continuo o cambios mensuales ilimitados',
      'websites-exclusions-six': 'Revisiones ilimitadas o soporte 24/7',
      'websites-exclusions-note': 'Cuando corresponda, el trabajo adicional puede evaluarse y cotizarse por separado.',
      'websites-mid-cta-eyebrow': 'Comienza con un alcance claro',
      'websites-mid-cta-title': '¿Listo para un sitio web que ayude a tus clientes a entender tu negocio, confiar en él y contactarte?',
      'websites-mid-cta-description': 'Cuéntale a Maahcodev sobre tu negocio, tu público y tus objetivos. Recibirás un alcance personalizado antes de comenzar el desarrollo.',
      'websites-mid-cta-button': 'Solicitar cotización',
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
