/* =========================================================================
   ClaraNest Home Care — Premium bilingual commercial demo
   ========================================================================= */

(() => {
  'use strict';

  const STORAGE_KEY = 'homeCleaningLanguage';

  const translations = {
    en: {
      'meta-title': 'ClaraNest Home Care — Commercial Demo | Maahcodev',
      'meta-description': 'A fictional bilingual cleaning-business website created to demonstrate Maahcodev\'s commercial design and development quality.',
      'skip-link': 'Skip to main content',
      'disclosure-aria': 'Commercial demo notice',
      'disclosure-badge': 'Commercial Demo',
      'disclosure-text': 'Commercial demo. Fictional business concept created to demonstrate Maahcodev\'s design and development quality. No cleaning services are offered and no information is collected.',
      'disclosure-link': 'View Maahcodev\'s Work',
      'nav-aria': 'Primary demo navigation',
      'brand-aria': 'ClaraNest Home Care — Go to demo home',
      'brand-descriptor': 'Home Care',
      'nav-services': 'Services',
      'nav-experience': 'Experience',
      'nav-process': 'How It Works',
      'nav-faq': 'FAQ',
      'nav-estimate': 'Estimate Preview',
      'nav-maahcodev': 'Maahcodev',
      'nav-cta': 'Request an Estimate',
      'language-toggle-aria': 'Switch to Spanish',
      'menu-open-aria': 'Open menu',
      'menu-close-aria': 'Close menu',
      'menu-overlay-aria': 'Close menu',
      'hero-kicker': 'Bilingual residential cleaning',
      'hero-title': 'A cleaner home, with a simpler way to get started.',
      'hero-description': 'Explore clear cleaning options, choose what fits your space and preview an estimate request in English or Spanish.',
      'hero-primary': 'Request an Estimate',
      'hero-secondary': 'Explore Services',
      'hero-image-alt': 'A bright, carefully organized home-cleaning scene',
      'hero-visual-badge': 'Bilingual digital experience',
      'hero-visual-badge-description': 'A fictional service concept designed for clear online presentation.',
      'estimate-kicker': 'Clear choices, less friction',
      'estimate-title': 'Start with the essentials.',
      'estimate-badge': 'Demo only',
      'estimate-space-label': 'Space',
      'estimate-space-home': 'Home',
      'estimate-space-apartment': 'Apartment',
      'estimate-space-office': 'Small office',
      'estimate-service-label': 'Service',
      'estimate-service-general': 'General cleaning',
      'estimate-service-deep': 'Deep cleaning',
      'estimate-service-moveout': 'Move-out cleaning',
      'estimate-language-label': 'Language',
      'estimate-language-english': 'English',
      'estimate-language-spanish': 'Spanish',
      'estimate-language-bilingual': 'English + Spanish',
      'estimate-button': 'Preview the Request',
      'estimate-notice': 'Commercial demo. No information is collected, stored or sent.',
      'estimate-result': 'Demo selection: {space} · {service} · {language}. This preview demonstrates how a cleaning business could organize a service request without submitting information.',
      'trust-title': 'Demo experience highlights',
      'trust-one': 'Bilingual Experience',
      'trust-two': 'Clear Service Presentation',
      'trust-three': 'Responsive Estimate Preview',
      'services-kicker': 'Service presentation',
      'services-title': 'Clear options for different cleaning needs.',
      'services-description': 'These fictional service cards demonstrate how a cleaning business could organize its offer without making real availability or pricing claims.',
      'service-house-title': 'House Cleaning',
      'service-house-description': 'A clear way to present routine cleaning options for full-home spaces.',
      'service-apartment-title': 'Apartment Cleaning',
      'service-apartment-description': 'A focused presentation suited to compact layouts and shared buildings.',
      'service-deep-title': 'Deep Cleaning',
      'service-deep-description': 'A dedicated card for explaining more detailed cleaning requests.',
      'service-moveout-title': 'Move-Out Cleaning',
      'service-moveout-description': 'A structured way to describe cleaning needs connected to a move.',
      'service-office-title': 'Small Office Cleaning',
      'service-office-description': 'A concise option for presenting small-workspace cleaning requests.',
      'service-custom-title': 'Custom Requests',
      'service-custom-description': 'Space for a real business to explain how tailored requests could be discussed.',
      'values-aria': 'Demo value presentation',
      'compare-kicker': 'Conceptual comparison',
      'compare-title': 'Two staged states, one clear visual story.',
      'compare-description': 'A single styled scene contrasts a more relaxed side with a tidier, presentation-ready side, without presenting a real client result.',
      'compare-note': 'Conceptual comparison — not a real client result.',
      'compare-image-alt': 'A styled living room comparison showing a more cluttered side and a cleaner organized side',
      'value-two-kicker': 'Adaptable presentation',
      'value-two-title': 'Designed for real spaces',
      'value-two-description': 'The structure can be personalized for homes, apartments and small offices while keeping the experience understandable on every screen.',
      'value-two-image-alt': 'A calm, well-lit living space with a small home-office desk',
      'value-two-point-one': 'Homes and apartment layouts',
      'value-two-point-two': 'Small-office contexts',
      'value-two-point-three': 'Flexible bilingual content',
      'process-kicker': 'How the demo works',
      'process-title': 'A simple three-step preview.',
      'process-one-title': 'Choose your space.',
      'process-one-description': 'Select the type of space represented in this fictional request.',
      'process-two-title': 'Select a service.',
      'process-two-description': 'Choose one of the example cleaning options presented by the demo.',
      'process-three-title': 'Preview the request.',
      'process-three-description': 'Review a local summary without sending or storing information.',
      'faq-kicker': 'Demo questions',
      'faq-title': 'Clear answers about this fictional experience.',
      'faq-description': 'These answers explain what the ClaraNest concept does and does not represent.',
      'faq-one-question': 'What is included in this demo?',
      'faq-one-answer': 'This demo includes a bilingual service presentation, example service cards, a local estimate preview and educational content showing how a cleaning-business website could be structured.',
      'faq-two-question': 'Does the estimate preview send information?',
      'faq-two-answer': 'No. The preview reads the three selections only in the browser, creates a temporary summary and does not send, store or submit information.',
      'faq-three-question': 'Can the experience be used in English or Spanish?',
      'faq-three-answer': 'Yes. The interface, controls, navigation, metadata and explanatory content are available in English and Spanish.',
      'faq-four-question': 'Could this design be adapted for a real cleaning business?',
      'faq-four-answer': 'Yes. The visual system and content structure could later be personalized with verified business information, service details and an approved contact workflow.',
      'faq-five-question': 'Does ClaraNest provide real cleaning services?',
      'faq-five-answer': 'No. ClaraNest is a fictional commercial concept. It does not process service requests, provide prices or offer cleaning services.',
      'final-cta-kicker': 'Explore the concept',
      'final-cta-title': 'See how a clear service experience can take shape.',
      'final-cta-description': 'Explore the fictional estimate flow or return to Maahcodev to see how this concept fits into a broader web-services portfolio.',
      'final-cta-primary': 'Preview the Estimate',
      'final-cta-secondary': 'View Maahcodev\'s Work',
      'footer-brand-aria': 'ClaraNest Home Care — Back to top',
      'footer-description': 'A fictional bilingual home-cleaning concept designed by Maahcodev to demonstrate commercial-quality web design and development.',
      'footer-nav-aria': 'Demo footer navigation',
      'footer-navigation-title': 'Explore',
      'footer-project-title': 'Project',
      'footer-maahcodev-home': 'Maahcodev Home',
      'footer-maahcodev-work': 'View Maahcodev\'s Work',
      'footer-back-maahcodev': 'Back to Maahcodev',
      'footer-back-top': 'Back to top',
      'footer-disclosure': 'Commercial demo. Fictional business concept created to demonstrate Maahcodev\'s design and development quality. No cleaning services are offered and no information is collected.',
      'footer-copyright': '© 2026 Maahcodev. Commercial concept — not a real business.',
    },
    es: {
      'meta-title': 'ClaraNest Home Care — Demo comercial | Maahcodev',
      'meta-description': 'Sitio bilingüe ficticio para un negocio de limpieza, creado para demostrar la calidad comercial del diseño y desarrollo de Maahcodev.',
      'skip-link': 'Saltar al contenido principal',
      'disclosure-aria': 'Aviso de demo comercial',
      'disclosure-badge': 'Demo comercial',
      'disclosure-text': 'Demo comercial. Concepto ficticio creado para demostrar la calidad de diseño y desarrollo de Maahcodev. No se ofrecen servicios de limpieza ni se recopila información.',
      'disclosure-link': 'Ver el trabajo de Maahcodev',
      'nav-aria': 'Navegación principal de la demo',
      'brand-aria': 'ClaraNest Home Care — Ir al inicio de la demo',
      'brand-descriptor': 'Cuidado del hogar',
      'nav-services': 'Servicios',
      'nav-experience': 'Experiencia',
      'nav-process': 'Cómo funciona',
      'nav-faq': 'Preguntas',
      'nav-estimate': 'Vista del estimado',
      'nav-maahcodev': 'Maahcodev',
      'nav-cta': 'Solicitar estimado',
      'language-toggle-aria': 'Cambiar a inglés',
      'menu-open-aria': 'Abrir menú',
      'menu-close-aria': 'Cerrar menú',
      'menu-overlay-aria': 'Cerrar menú',
      'hero-kicker': 'Limpieza residencial bilingüe',
      'hero-title': 'Un hogar más limpio, con una forma más sencilla de comenzar.',
      'hero-description': 'Explora opciones de limpieza claras, elige lo que se adapta a tu espacio y consulta una solicitud de estimado en inglés o español.',
      'hero-primary': 'Solicitar estimado',
      'hero-secondary': 'Ver servicios',
      'hero-image-alt': 'Una escena luminosa de limpieza del hogar cuidadosamente organizada',
      'hero-visual-badge': 'Experiencia digital bilingüe',
      'hero-visual-badge-description': 'Un concepto ficticio diseñado para una presentación clara en línea.',
      'estimate-kicker': 'Opciones claras, menos fricción',
      'estimate-title': 'Comienza con lo esencial.',
      'estimate-badge': 'Solo demo',
      'estimate-space-label': 'Espacio',
      'estimate-space-home': 'Hogar',
      'estimate-space-apartment': 'Apartamento',
      'estimate-space-office': 'Oficina pequeña',
      'estimate-service-label': 'Servicio',
      'estimate-service-general': 'Limpieza general',
      'estimate-service-deep': 'Limpieza profunda',
      'estimate-service-moveout': 'Limpieza de salida',
      'estimate-language-label': 'Idioma',
      'estimate-language-english': 'Inglés',
      'estimate-language-spanish': 'Español',
      'estimate-language-bilingual': 'Inglés y español',
      'estimate-button': 'Consultar la solicitud',
      'estimate-notice': 'Demo comercial. No se recopila, almacena ni envía información.',
      'estimate-result': 'Selección de demostración: {space} · {service} · {language}. Esta vista demuestra cómo una empresa de limpieza podría organizar una solicitud sin enviar información.',
      'trust-title': 'Aspectos destacados de la experiencia demostrativa',
      'trust-one': 'Experiencia bilingüe',
      'trust-two': 'Presentación clara de servicios',
      'trust-three': 'Vista responsive del estimado',
      'services-kicker': 'Presentación de servicios',
      'services-title': 'Opciones claras para distintas necesidades de limpieza.',
      'services-description': 'Estas tarjetas ficticias demuestran cómo una empresa de limpieza podría organizar su oferta sin afirmar disponibilidad ni precios reales.',
      'service-house-title': 'Limpieza de casas',
      'service-house-description': 'Una forma clara de presentar opciones de limpieza habitual para hogares completos.',
      'service-apartment-title': 'Limpieza de apartamentos',
      'service-apartment-description': 'Una presentación enfocada para espacios compactos y edificios compartidos.',
      'service-deep-title': 'Limpieza profunda',
      'service-deep-description': 'Una tarjeta dedicada a explicar solicitudes de limpieza más detalladas.',
      'service-moveout-title': 'Limpieza de salida',
      'service-moveout-description': 'Una forma estructurada de describir necesidades de limpieza asociadas a una mudanza.',
      'service-office-title': 'Limpieza de oficinas pequeñas',
      'service-office-description': 'Una opción concisa para presentar solicitudes de limpieza de espacios de trabajo pequeños.',
      'service-custom-title': 'Solicitudes personalizadas',
      'service-custom-description': 'Un espacio para que un negocio real explique cómo podrían conversarse solicitudes específicas.',
      'values-aria': 'Presentación de valor de la demo',
      'compare-kicker': 'Comparación conceptual',
      'compare-title': 'Dos estados preparados, una historia visual clara.',
      'compare-description': 'Una misma escena cuidada contrasta un lado más relajado con un lado más ordenado y listo para presentar, sin representar el resultado real de un cliente.',
      'compare-note': 'Comparación conceptual — no es el resultado de un cliente real.',
      'compare-image-alt': 'Una comparación de sala decorada que muestra un lado más desordenado y otro más limpio y organizado',
      'value-two-kicker': 'Presentación adaptable',
      'value-two-title': 'Diseñado para espacios reales',
      'value-two-description': 'La estructura puede personalizarse para casas, apartamentos y oficinas pequeñas sin perder claridad en ninguna pantalla.',
      'value-two-image-alt': 'Un espacio de estar tranquilo y bien iluminado con un pequeño escritorio de oficina',
      'value-two-point-one': 'Casas y apartamentos',
      'value-two-point-two': 'Contextos de oficinas pequeñas',
      'value-two-point-three': 'Contenido bilingüe flexible',
      'process-kicker': 'Cómo funciona la demo',
      'process-title': 'Una vista sencilla en tres pasos.',
      'process-one-title': 'Elige tu espacio.',
      'process-one-description': 'Selecciona el tipo de espacio representado en esta solicitud ficticia.',
      'process-two-title': 'Selecciona un servicio.',
      'process-two-description': 'Elige una de las opciones de limpieza de ejemplo presentadas por la demo.',
      'process-three-title': 'Consulta la solicitud.',
      'process-three-description': 'Revisa un resumen local sin enviar ni almacenar información.',
      'faq-kicker': 'Preguntas sobre la demo',
      'faq-title': 'Respuestas claras sobre esta experiencia ficticia.',
      'faq-description': 'Estas respuestas explican lo que el concepto ClaraNest representa y lo que no representa.',
      'faq-one-question': '¿Qué incluye esta demo?',
      'faq-one-answer': 'Esta demo incluye una presentación bilingüe de servicios, tarjetas de ejemplo, una vista local del estimado y contenido educativo que muestra cómo podría estructurarse el sitio web de una empresa de limpieza.',
      'faq-two-question': '¿La vista del estimado envía información?',
      'faq-two-answer': 'No. La vista lee las tres selecciones únicamente en el navegador, crea un resumen temporal y no envía, almacena ni registra información.',
      'faq-three-question': '¿La experiencia puede usarse en inglés o español?',
      'faq-three-answer': 'Sí. La interfaz, los controles, la navegación, los metadatos y el contenido explicativo están disponibles en inglés y español.',
      'faq-four-question': '¿Este diseño podría adaptarse a una empresa real de limpieza?',
      'faq-four-answer': 'Sí. El sistema visual y la estructura de contenido podrían personalizarse posteriormente con información empresarial verificada, detalles de servicios y un flujo de contacto aprobado.',
      'faq-five-question': '¿ClaraNest ofrece servicios reales de limpieza?',
      'faq-five-answer': 'No. ClaraNest es un concepto comercial ficticio. No acepta reservas, programa visitas, proporciona precios ni ofrece servicios de limpieza.',
      'final-cta-kicker': 'Explora el concepto',
      'final-cta-title': 'Descubre cómo puede tomar forma una experiencia de servicio clara.',
      'final-cta-description': 'Explora el flujo ficticio del estimado o vuelve a Maahcodev para ver cómo este concepto forma parte de un portafolio más amplio de servicios web.',
      'final-cta-primary': 'Ver el estimado',
      'final-cta-secondary': 'Ver el trabajo de Maahcodev',
      'footer-brand-aria': 'ClaraNest Home Care — Volver arriba',
      'footer-description': 'Concepto ficticio y bilingüe de limpieza del hogar diseñado por Maahcodev para demostrar diseño y desarrollo web de calidad comercial.',
      'footer-nav-aria': 'Navegación del pie de la demo',
      'footer-navigation-title': 'Explorar',
      'footer-project-title': 'Proyecto',
      'footer-maahcodev-home': 'Inicio de Maahcodev',
      'footer-maahcodev-work': 'Ver el trabajo de Maahcodev',
      'footer-back-maahcodev': 'Volver a Maahcodev',
      'footer-back-top': 'Volver arriba',
      'footer-disclosure': 'Demo comercial. Concepto ficticio creado para demostrar la calidad de diseño y desarrollo de Maahcodev. No se ofrecen servicios de limpieza ni se recopila información.',
      'footer-copyright': '© 2026 Maahcodev. Concepto comercial — no es un negocio real.',
    },
  };

  const normalizeLanguage = language => language === 'en' || language === 'es'
    ? language
    : 'en';

  const getStoredLanguage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  };

  const storeLanguage = language => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  };

  let currentLanguage = normalizeLanguage(getStoredLanguage());
  let refreshMenuLabel = () => {};
  let hideEstimateResult = () => {};

  const languageToggle = document.querySelector('.hc-language-toggle');

  const updateMetadata = language => {
    const dictionary = translations[language];
    const title = dictionary['meta-title'];
    const description = dictionary['meta-description'];

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  };

  const applyTranslations = language => {
    const dictionary = translations[language];

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const value = dictionary[element.dataset.i18nAlt];
      if (value !== undefined) element.setAttribute('alt', value);
    });
  };

  const updateLanguageControl = () => {
    if (!languageToggle) return;

    languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    languageToggle.setAttribute('aria-label', translations[currentLanguage]['language-toggle-aria']);
    languageToggle.setAttribute('title', translations[currentLanguage]['language-toggle-aria']);
  };

  const setLanguage = (language, { persist = true } = {}) => {
    currentLanguage = normalizeLanguage(language);
    document.documentElement.lang = currentLanguage;

    if (persist) storeLanguage(currentLanguage);

    applyTranslations(currentLanguage);
    updateMetadata(currentLanguage);
    updateLanguageControl();
    refreshMenuLabel();
    hideEstimateResult();
  };

  const setupLanguage = () => {
    if (!languageToggle) return;

    languageToggle.addEventListener('click', () => {
      setLanguage(currentLanguage === 'en' ? 'es' : 'en');
    });
  };

  const setupMobileMenu = () => {
    const menu = document.querySelector('.hc-nav__menu');
    const menuToggle = document.querySelector('.hc-menu-toggle');
    const overlay = document.querySelector('.hc-menu-overlay');
    const mobileQuery = window.matchMedia('(max-width: 1079px)');

    if (!menu || !menuToggle || !overlay) return;

    const updateMenuLabel = () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      const labelKey = isOpen ? 'menu-close-aria' : 'menu-open-aria';
      menuToggle.setAttribute('aria-label', translations[currentLanguage][labelKey]);
      overlay.setAttribute('aria-label', translations[currentLanguage]['menu-overlay-aria']);
    };

    const getFocusableElements = () => [
      ...menu.querySelectorAll('a'),
      ...(languageToggle ? [languageToggle] : []),
      menuToggle,
    ].filter(element => !element.hasAttribute('disabled'));

    const setMenuState = (isOpen, { focusFirst = false, returnFocus = false } = {}) => {
      const shouldOpen = mobileQuery.matches && isOpen;

      menu.classList.toggle('is-open', shouldOpen);
      menuToggle.classList.toggle('is-open', shouldOpen);
      menuToggle.setAttribute('aria-expanded', String(shouldOpen));
      document.body.classList.toggle('hc-menu-open', shouldOpen);
      overlay.hidden = !shouldOpen;

      if (mobileQuery.matches) {
        menu.toggleAttribute('inert', !shouldOpen);
        menu.setAttribute('aria-hidden', String(!shouldOpen));
      } else {
        menu.removeAttribute('inert');
        menu.removeAttribute('aria-hidden');
      }

      updateMenuLabel();

      if (shouldOpen && focusFirst) {
        menu.querySelector('a')?.focus();
      } else if (!shouldOpen && returnFocus) {
        menuToggle.focus();
      }
    };

    refreshMenuLabel = updateMenuLabel;

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen, { focusFirst: !isOpen });
    });

    overlay.addEventListener('click', () => {
      setMenuState(false, { returnFocus: true });
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', event => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (!isOpen) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuState(false, { returnFocus: true });
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    });

    const handleBreakpointChange = () => setMenuState(false);

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', handleBreakpointChange);
    } else {
      mobileQuery.addListener(handleBreakpointChange);
    }

    setMenuState(false);
  };

  const setupEstimatePreview = () => {
    const button = document.querySelector('#estimate-preview-button');
    const result = document.querySelector('#estimate-result');
    const space = document.querySelector('#estimate-space');
    const service = document.querySelector('#estimate-service');
    const language = document.querySelector('#estimate-language');

    if (!button || !result || !space || !service || !language) return;

    hideEstimateResult = () => {
      result.hidden = true;
      result.textContent = '';
    };

    button.addEventListener('click', () => {
      const template = translations[currentLanguage]['estimate-result'];
      const selectedSpace = space.selectedOptions[0]?.textContent.trim() || '';
      const selectedService = service.selectedOptions[0]?.textContent.trim() || '';
      const selectedLanguage = language.selectedOptions[0]?.textContent.trim() || '';

      result.textContent = template
        .replace('{space}', selectedSpace)
        .replace('{service}', selectedService)
        .replace('{language}', selectedLanguage);
      result.hidden = false;

      window.requestAnimationFrame(() => result.focus());
    });
  };

  const setupProgressiveReveal = () => {
    const items = [...document.querySelectorAll('.hc-reveal')];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!items.length || reducedMotion || !('IntersectionObserver' in window)) return;

    document.body.classList.add('hc-motion-ready');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    });

    const alreadyVisible = [];

    items.forEach(item => {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.92) {
        alreadyVisible.push(item);
      } else {
        observer.observe(item);
      }
    });

    if (alreadyVisible.length) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          alreadyVisible.forEach(item => item.classList.add('is-visible'));
        });
      });
    }
  };

  const setupProgressiveImage = (containerSelector, imageSelector) => {
    const container = document.querySelector(containerSelector);
    const image = container?.querySelector(imageSelector);
    if (!container || !image) return;

    const showImage = () => {
      image.hidden = false;
      container.classList.add('has-photo');
    };

    const hideImage = () => {
      image.hidden = true;
      container.classList.remove('has-photo');
    };

    const source = image.dataset.photoSrc;

    if (!source) {
      hideImage();
      return;
    }

    image.addEventListener('load', showImage, { once: true });
    image.addEventListener('error', hideImage, { once: true });
    image.hidden = false;
    image.src = source;

    if (image.complete) {
      if (image.naturalWidth > 0) showImage();
      else hideImage();
    }
  };

  const setupHeader = () => {
    const header = document.querySelector('.hc-header');
    if (!header) return;

    const updateHeaderState = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();
  };

  setupEstimatePreview();
  setLanguage(currentLanguage, { persist: false });
  setupLanguage();
  setupMobileMenu();
  setupProgressiveImage('.hc-hero-visual', '.hc-hero-visual__photo');
  setupProgressiveImage('.hc-value-art--compare', '.hc-value-art__photo');
  setupProgressiveImage('.hc-value-art--spaces', '.hc-value-art__photo');
  setupHeader();
  setupProgressiveReveal();
})();
