/* =========================================================================
   main.js — Portfolio Marcos Alvarez (maahcodev)
   ========================================================================= */


// ── TRADUCCIONES ───────────────────────────────────────────────────────────

const i18n = {
  es: {
    'meta-title':       'Maahcodev | Desarrollador Python Backend y Full-Stack',
    'meta-description': 'Portfolio de Maahcodev: desarrollo backend con Python y FastAPI, junto con experiencias web modernas, accesibles y orientadas a producción.',
    // nav
    'nav-sobre':        'Sobre mí',
    'nav-trayectoria':  'Trayectoria',
    'nav-proyectos':    'Proyectos',
    'nav-servicios':    'Servicios',
    'nav-websites':     'Sitios web',
    'nav-contacto':     'Contacto',
    'nav-cta':          'Iniciar proyecto',
    'nav-primary-aria': 'Navegación principal',
    'nav-logo-aria':    'Maahcodev — Ir al inicio',
    'skip-link':        'Saltar al contenido',
    'nav-menu-open-aria':  'Abrir menú',
    'nav-menu-close-aria': 'Cerrar menú',
    'lang-switch-en-aria': 'Cambiar a inglés',
    'lang-switch-es-aria': 'Cambiar a español',
    'theme-switch-light-aria': 'Activar modo claro',
    'theme-switch-dark-aria':  'Activar modo oscuro',
    'back-top-aria':       'Volver arriba',
    // hero
    'hero-disponibilidad': 'Disponible para proyectos seleccionados',
    'hero-marca':          'creador de Maahcodev',
    'hero-desc':           'Construyo APIs y aplicaciones web con Python y FastAPI, conectando lógica backend, interfaces accesibles y flujos de trabajo claros desde la idea hasta una versión funcional.',
    'hero-btn-ver':        'Ver proyectos',
    'hero-btn-iniciar':    'Iniciar un proyecto',
    'hero-stack-kicker':   'Stack principal',
    'hero-stack-aria':     'Tecnologías principales',
    'hero-panel-status':   'composición activa',
    'hero-panel-kicker':   'Arquitectura de trabajo',
    'hero-layer-backend':  'Backend',
    'hero-layer-web':      'Interfaz web',
    'hero-layer-workflow': 'Flujo Linux',
    'hero-terminal-line':  'python · fastapi · web',
    // servicios y transición
    'servicios-titulo':        'Capacidades técnicas',
    'servicios-intro':         'Competencias que aplico para construir y validar proyectos web: backend con Python, interfaces accesibles y flujos de trabajo reproducibles.',
    'servicio-backend-titulo': 'Python y backend',
    'servicio-backend-desc':   'APIs, integraciones y automatizaciones en Python con alcances definidos y validación técnica.',
    'servicio-web-titulo':     'Experiencias web',
    'servicio-web-desc':       'Interfaces profesionales, responsive y bilingües.',
    'servicio-flujo-titulo':   'Flujo técnico',
    'servicio-flujo-desc':     'Git, GitHub y Linux para trabajar con trazabilidad.',
    // proyectos destacados
    'projects-title':          'Proyectos destacados',
    'projects-intro':          'Tres proyectos privados en desarrollo, con hitos funcionales y evidencia técnica documentada.',
    'project-private':         'Privado · En desarrollo',
    'family-status':           'Privado · v1 completo',
    'family-role':             'Caso de estudio privado de backend y desarrollo full-stack',
    'family-desc':             'Plataforma multimedia familiar privada construida con FastAPI y una integración segura y de solo lectura con Emby: catálogo dinámico, reproducción protegida, trailers y watchlist, con experiencia completamente responsive.',
    'family-stack-aria':       'Tecnologías de FamilyMovie',
    'family-action':           'Caso de estudio privado',
    'cheatsheet-role':         'Aplicación educativa privada',
    'cheatsheet-desc':         'Aplicación educativa con 39 ejercicios validados, búsqueda, favoritos y una experiencia bilingüe ES/EN.',
    'cheatsheet-stack-aria':   'Tecnologías de Cheat Sheet — Master Python 2026',
    'private-project-action':  'Proyecto privado',
    'nodedrive-role':          'Laboratorio privado en desarrollo',
    'nodedrive-desc':          'Laboratorio responsive para integrar Seafile de forma segura y en modo de solo lectura, con interfaz ES/EN y temas claro y oscuro.',
    'nodedrive-stack-aria':    'Tecnologías de NodeDrive UI Lab',
    'private-case-action':     'Caso de estudio privado',
    'case-view-action':            'Ver caso de estudio',
    'case-open-family-aria':        'Ver caso de estudio de FamilyMovie',
    'case-open-cheatsheet-aria':    'Ver caso de estudio de Cheat Sheet — Master Python 2026',
    'case-open-nodedrive-aria':     'Ver caso de estudio de NodeDrive UI Lab',
    'case-close':                  'Cerrar caso de estudio',
    'case-status-private':         'Repositorio privado',
    'case-dialog-kicker':          'Caso de estudio · Proyecto privado',
    'case-preview-pending':        'Vista previa pendiente hasta completar el proyecto',
    'case-preview-aria':           'Espacio preparado para la vista previa del proyecto',
    'case-preview-sanitized-aria': 'Vista previa sanitizada de la arquitectura privada de FamilyMovie',
    'case-features-title':         'Funciones verificadas',
    'case-stack-title':            'Tecnologías utilizadas',
    'case-previous':               'Proyecto anterior',
    'case-next':                   'Proyecto siguiente',
    'family-case-desc':            'FamilyMovie nace de la necesidad de una plataforma multimedia familiar propia, sin exponer credenciales, tokens ni identificadores internos del servidor Emby en el navegador. FastAPI actúa como proxy seguro entre el frontend y Emby: el frontend solo trabaja con claves opacas y nunca se comunica directamente con Emby. v1 fue completada e integrada en main, con validación final en escritorio, tablet y móvil.',
    'family-feature-catalog':      'Catálogo y hero dinámicos, con pósteres y backdrops',
    'family-feature-player':       'Reproductor HTML5 con HTTP Range / 206 / 416 y seek nativo',
    'family-feature-security':     'Claves opacas de reproducción e imagen; X-Emby-Token nunca expuesto',
    'family-feature-trailers':     'Trailers integrados con youtube-nocookie',
    'family-feature-watchlist':    'Watchlist local con localStorage',
    'family-feature-responsive':   'Experiencia responsive validada en escritorio, tablet y móvil',
    'family-feature-a11y':         'Soporte de movimiento reducido y retorno de foco en reproductor/trailers',
    'family-feature-testing':      '149 pruebas automatizadas, Ruff, compileall y validación de sintaxis JS',
    'family-feature-emby':         'Integración con Emby segura y de solo lectura, con secretos solo en backend',
    'family-feature-complete':     'v1 completada e integrada en main (repositorio privado)',
    'cheatsheet-case-desc':        'Aplicación educativa privada con 39 ejercicios validados, búsqueda, favoritos e interfaz bilingüe ES/EN.',
    'cheatsheet-feature-exercises':'39 ejercicios validados',
    'cheatsheet-feature-search':   'Búsqueda de ejercicios',
    'cheatsheet-feature-favorites':'Gestión de favoritos',
    'cheatsheet-feature-language': 'Interfaz ES/EN',
    'nodedrive-case-desc':         'Laboratorio privado y responsive que integra Seafile en modo de solo lectura, con interfaz bilingüe y temas claro y oscuro.',
    'nodedrive-feature-seafile':   'Integración Seafile de solo lectura',
    'nodedrive-feature-responsive':'Interfaz responsive',
    'nodedrive-feature-language':  'Interfaz ES/EN',
    'nodedrive-feature-theme':     'Modo claro y oscuro',
    // servicios
    'services-detail-title': 'Servicios',
    'services-detail-intro': 'Servicios concretos para presentar una marca, organizar contenido y construir interfaces funcionales con un alcance claramente definido.',
    'services-note':         'Cada servicio se acuerda con un alcance, entregables y límites claros. Las automatizaciones con Python se evalúan caso por caso.',
    'services-websites-cta': 'Ver sitios web y demos',
    'service1-title':        'Landing pages y portfolios',
    'service1-desc':         'Páginas de presentación enfocadas en identidad, contenido y llamados a la acción claros.',
    'service2-title':        'Sitios informativos',
    'service2-desc':         'Estructuras accesibles para organizar servicios, perfiles y contenido esencial.',
    'service3-title':        'Diseño responsive y ES/EN',
    'service3-desc':         'Adaptación para escritorio, tablet y móvil, con contenido disponible en español e inglés.',
    'service4-title':        'Formularios y accesibilidad',
    'service4-desc':         'Integración de formularios y mejoras prácticas de teclado, foco, contraste y legibilidad.',
    'service5-title':        'Prototipos y automatización limitada',
    'service5-desc':         'Prototipos web y automatizaciones pequeñas con Python, siempre definidos caso por caso.',
    // sobre maahcodev
    'about-signature': 'Marcos Alvarez, creador de Maahcodev.',
    'about-title':     'Sobre Maahcodev',
    'about-p1':        'Soy desarrollador autodidacta, enfocado en backend con Python y desarrollo full-stack. Construyo proyectos prácticos que convierten el aprendizaje técnico en soluciones reales.',
    'about-p2':        'Trabajo con Linux, Git y tecnologías web; priorizo sistemas claros, seguros y mantenibles. El aprendizaje continuo forma parte de cada iteración.',
    'manifest-title':   'Principios de trabajo',
    'manifest-focus':   'claridad antes que complejidad',
    'manifest-build':   'proyectos prácticos y verificables',
    'manifest-system':  'Linux, Git y mejora continua',
    'manifest-quality': 'seguridad, acceso y mantenimiento',
    // proceso
    'process-title':  'Proceso de trabajo',
    'process-intro':  'Un proceso claro para convertir una necesidad concreta en una solución web validada.',
    'process1-title': 'Descubrir',
    'process1-desc':  'Definir el objetivo, el contenido disponible y las restricciones reales.',
    'process2-title': 'Diseñar',
    'process2-desc':  'Definir jerarquía, estructura y comportamiento antes de construir.',
    'process3-title': 'Construir',
    'process3-desc':  'Construir por iteraciones pequeñas con código claro y trazable.',
    'process4-title': 'Validar',
    'process4-desc':  'Revisar el comportamiento responsive, la accesibilidad, el contenido y el funcionamiento final.',
    // trayectoria
    'journey-title':    'Trayectoria resumida',
    'journey-intro':    'Una progresión práctica desde los fundamentos web hasta el desarrollo backend y full-stack.',
    'journey1-label':   'Fundamentos',
    'journey1-title':   'Fundamentos web',
    'journey1-desc':    'HTML semántico, CSS, maquetación y diseño responsive como base de cada interfaz.',
    'journey2-title':   'Python y lógica',
    'journey2-desc':    'Programación, estructuras de datos y automatización aplicadas a proyectos.',
    'journey3-label':   'Flujo técnico',
    'journey3-title':   'Linux, Git y flujo profesional',
    'journey3-desc':    'Terminal, control de versiones y trabajo reproducible como entorno habitual.',
    'journey4-label':   'Enfoque actual',
    'journey4-title':   'FastAPI y full-stack',
    'journey4-desc':    'APIs, integraciones y experiencias web completas con validación y pruebas.',
    // habilidades
    'skills-title':         'Habilidades y herramientas',
    'skills-intro':         'Tecnologías que utilizo en proyectos, prototipos y laboratorios técnicos en desarrollo.',
    'skills-backend-desc':  'Lógica, APIs, integraciones y pruebas.',
    'skills-frontend-desc': 'Estructura, presentación e interacción web.',
    'skills-workflow-desc': 'Entorno, versiones y gestión técnica.',
    // CTA final
    'final-cta-title':     '¿Tienes una idea para una API, una landing page o un prototipo web?',
    'final-cta-desc':      'Definamos un alcance claro, entregables concretos y el siguiente paso para convertirla en una versión funcional.',
    'final-cta-primary':   'Iniciar un proyecto',
    'final-cta-secondary': 'Ver proyectos',
    // contacto
    'contact-title':         'Contacto',
    'contact-intro':         'Disponible para proyectos web seleccionados, colaboraciones y oportunidades de crecimiento profesional.',
    'contact-availability':  'Disponible para nuevas conversaciones',
    'contact-channels':      'Canales de contacto',
    'contact-note':          'No incluyas contraseñas, tokens ni información sensible en el formulario.',
    'contact-label-nombre':  'Nombre',
    'contact-label-email':   'Correo electrónico',
    'contact-label-mensaje': 'Mensaje',
    'contact-ph-nombre':     'Tu nombre',
    'contact-ph-email':      'tu@email.com',
    'contact-ph-mensaje':    'Cuéntame brevemente sobre tu proyecto',
    'contact-btn':           'Enviar mensaje',
    'contact-sending':       'Enviando mensaje…',
    'contact-success':       '✓ Mensaje enviado. Te responderé pronto.',
    'contact-error':         'No se pudo enviar el mensaje. Inténtalo de nuevo o utiliza un canal directo.',
    // footer
    'footer-brand-copy': 'Portfolio profesional de Marcos Alvarez, creador de Maahcodev.',
    'footer-nav-title':   'Explorar',
    'footer-channel-title': 'Canales',
    'footer-tech-title':  'Tecnologías',
    'footer-nav-aria':   'Navegación del pie de página',
    'footer-tech-aria':  'Tecnologías principales',
    'footer-stack':      'HTML, CSS y JavaScript · Flujo de trabajo con Git y Linux',
    'footer-rights':     '© 2026 Marcos Alvarez. Todos los derechos reservados.',
  },

  en: {
    'meta-title':       'Maahcodev | Python Backend & Full-Stack Developer',
    'meta-description': 'Maahcodev portfolio: Python and FastAPI backend development with modern, accessible, production-minded web experiences.',
    // nav
    'nav-sobre':        'About',
    'nav-trayectoria':  'Journey',
    'nav-proyectos':    'Projects',
    'nav-servicios':    'Services',
    'nav-websites':     'Websites',
    'nav-contacto':     'Contact',
    'nav-cta':          'Start a project',
    'nav-primary-aria': 'Primary navigation',
    'nav-logo-aria':    'Maahcodev — Go to homepage',
    'skip-link':        'Skip to content',
    'nav-menu-open-aria':  'Open menu',
    'nav-menu-close-aria': 'Close menu',
    'lang-switch-en-aria': 'Switch to English',
    'lang-switch-es-aria': 'Switch to Spanish',
    'theme-switch-light-aria': 'Switch to light mode',
    'theme-switch-dark-aria':  'Switch to dark mode',
    'back-top-aria':       'Back to top',
    // hero
    'hero-disponibilidad': 'Available for selected projects',
    'hero-marca':          'creator of Maahcodev',
    'hero-desc':           'I build APIs and web applications with Python and FastAPI, connecting backend logic, accessible interfaces, and clear workflows from idea to a working version.',
    'hero-btn-ver':        'View projects',
    'hero-btn-iniciar':    'Start a project',
    'hero-stack-kicker':   'Core stack',
    'hero-stack-aria':     'Core technologies',
    'hero-panel-status':   'active composition',
    'hero-panel-kicker':   'Technical architecture',
    'hero-layer-backend':  'Backend',
    'hero-layer-web':      'Web Interface',
    'hero-layer-workflow': 'Linux Workflow',
    'hero-terminal-line':  'python · fastapi · web',
    // services and transition
    'servicios-titulo':        'Technical capabilities',
    'servicios-intro':         'Technical capabilities I apply to build and validate web projects: Python backend development, accessible interfaces, and reproducible workflows.',
    'servicio-backend-titulo': 'Python & Backend',
    'servicio-backend-desc':   'APIs, integrations, and scoped Python automation with technical validation.',
    'servicio-web-titulo':     'Web Experiences',
    'servicio-web-desc':       'Professional, responsive, and bilingual interfaces.',
    'servicio-flujo-titulo':   'Technical Workflow',
    'servicio-flujo-desc':     'Git, GitHub, and Linux for traceable development.',
    // featured projects
    'projects-title':          'Featured projects',
    'projects-intro':          'Three private projects in active development, with working milestones and documented technical evidence.',
    'project-private':         'Private · In development',
    'family-status':           'Private · v1 complete',
    'family-role':             'Private backend and full-stack case study',
    'family-desc':             'A private family media platform built with FastAPI and a secure, read-only Emby integration: dynamic catalog, protected playback, trailers and watchlist, with a fully responsive experience.',
    'family-stack-aria':       'FamilyMovie technologies',
    'family-action':           'Private case study',
    'cheatsheet-role':         'Private educational application',
    'cheatsheet-desc':         'A private learning application with 39 validated exercises, search, favorites, and a bilingual ES/EN experience.',
    'cheatsheet-stack-aria':   'Cheat Sheet — Master Python 2026 technologies',
    'private-project-action':  'Private project',
    'nodedrive-role':          'Private lab in active development',
    'nodedrive-desc':          'A responsive lab that integrates Seafile securely in read-only mode, with an ES/EN interface and light and dark themes.',
    'nodedrive-stack-aria':    'NodeDrive UI Lab technologies',
    'private-case-action':     'Private case study',
    'case-view-action':            'View case study',
    'case-open-family-aria':        'View the FamilyMovie case study',
    'case-open-cheatsheet-aria':    'View the Cheat Sheet — Master Python 2026 case study',
    'case-open-nodedrive-aria':     'View the NodeDrive UI Lab case study',
    'case-close':                  'Close case study',
    'case-status-private':         'Private repository',
    'case-dialog-kicker':          'Case study · Private project',
    'case-preview-pending':        'Preview deferred until the project is complete',
    'case-preview-aria':           'Reserved area for the project preview',
    'case-preview-sanitized-aria': 'Sanitized preview of FamilyMovie\'s private architecture',
    'case-features-title':         'Verified features',
    'case-stack-title':            'Technologies used',
    'case-previous':               'Previous project',
    'case-next':                   'Next project',
    'family-case-desc':            'FamilyMovie was built to provide a private family media platform without exposing Emby credentials, tokens, or internal identifiers to the browser. FastAPI acts as a secure proxy between the frontend and Emby: the frontend only works with opaque keys and never talks to Emby directly. v1 was completed and merged into main, with final validation across desktop, tablet, and mobile.',
    'family-feature-catalog':      'Dynamic catalog and hero, with posters and backdrops',
    'family-feature-player':       'HTML5 player with HTTP Range / 206 / 416 and native seek',
    'family-feature-security':     'Opaque playback/image keys; X-Emby-Token never exposed',
    'family-feature-trailers':     'Trailers embedded via youtube-nocookie',
    'family-feature-watchlist':    'Local watchlist with localStorage',
    'family-feature-responsive':   'Responsive experience validated on desktop, tablet, and mobile',
    'family-feature-a11y':         'Reduced-motion support and focus return in player/trailers',
    'family-feature-testing':      '149 automated tests, Ruff, compileall, and JS syntax validation',
    'family-feature-emby':         'Secure, read-only Emby integration, with secrets kept backend-side',
    'family-feature-complete':     'v1 completed and merged into main (private repository)',
    'cheatsheet-case-desc':        'A private educational application with 39 validated exercises, search, favorites, and a bilingual ES/EN interface.',
    'cheatsheet-feature-exercises':'39 validated exercises',
    'cheatsheet-feature-search':   'Exercise search',
    'cheatsheet-feature-favorites':'Favorites management',
    'cheatsheet-feature-language': 'ES/EN interface',
    'nodedrive-case-desc':         'A private, responsive lab that integrates Seafile in read-only mode, with a bilingual interface and light and dark themes.',
    'nodedrive-feature-seafile':   'Read-only Seafile integration',
    'nodedrive-feature-responsive':'Responsive interface',
    'nodedrive-feature-language':  'ES/EN interface',
    'nodedrive-feature-theme':     'Light and dark modes',
    // services
    'services-detail-title': 'Services',
    'services-detail-intro': 'Focused services to present a brand, organize content, and build functional interfaces within a clearly defined scope.',
    'services-note':         'Each service is agreed with a clear scope, deliverables, and boundaries. Python automation is evaluated case by case.',
    'services-websites-cta': 'View websites and demos',
    'service1-title':        'Landing pages and portfolios',
    'service1-desc':         'Presentation pages focused on brand identity, content, and clear calls to action.',
    'service2-title':        'Informational websites',
    'service2-desc':         'Accessible structures for organizing services, profiles, and essential content.',
    'service3-title':        'Responsive design and ES/EN',
    'service3-desc':         'Layouts adapted for desktop, tablet, and mobile, with content available in Spanish and English.',
    'service4-title':        'Forms and accessibility',
    'service4-desc':         'Form integration and practical improvements to keyboard access, focus, contrast, and readability.',
    'service5-title':        'Prototypes and limited automation',
    'service5-desc':         'Web prototypes and small Python automations, always defined on a case-by-case basis.',
    // about maahcodev
    'about-signature': 'Marcos Alvarez, creator of Maahcodev.',
    'about-title':     'About Maahcodev',
    'about-p1':        'I am a self-taught developer focused on backend development with Python and full-stack web work. I build practical projects that turn technical learning into real solutions.',
    'about-p2':        'I work with Linux, Git, and web technologies, prioritizing systems that are clear, secure, and maintainable. Continuous learning shapes every iteration.',
    'manifest-title':   'Working principles',
    'manifest-focus':   'clarity before complexity',
    'manifest-build':   'practical, verifiable projects',
    'manifest-system':  'Linux, Git, and continuous improvement',
    'manifest-quality': 'security, access, and maintenance',
    // process
    'process-title':  'How I work',
    'process-intro':  'A clear process for turning a specific need into a validated web solution.',
    'process1-title': 'Discover',
    'process1-desc':  'Define the goal, available content, and real constraints.',
    'process2-title': 'Design',
    'process2-desc':  'Define hierarchy, structure, and behavior before building.',
    'process3-title': 'Build',
    'process3-desc':  'Build in small iterations with clear, traceable code.',
    'process4-title': 'Validate',
    'process4-desc':  'Review responsive behavior, accessibility, content, and end-to-end functionality.',
    // journey
    'journey-title':    'Journey in brief',
    'journey-intro':    'A practical progression from web foundations to backend and full-stack projects.',
    'journey1-label':   'Foundation',
    'journey1-title':   'Web foundations',
    'journey1-desc':    'Semantic HTML, CSS, layouts, and responsive design as the base of every interface.',
    'journey2-title':   'Python and logic',
    'journey2-desc':    'Programming, data structures, and automation applied to projects.',
    'journey3-label':   'Workflow',
    'journey3-title':   'Linux, Git, and a professional workflow',
    'journey3-desc':    'The terminal, version control, and reproducible workflows form my everyday environment.',
    'journey4-label':   'Current focus',
    'journey4-title':   'FastAPI and full-stack',
    'journey4-desc':    'APIs, integrations, and complete web experiences with validation and testing.',
    // skills
    'skills-title':         'Skills and tools',
    'skills-intro':         'Technologies I use across projects, prototypes, and technical labs in active development.',
    'skills-backend-desc':  'Logic, APIs, integrations, and testing.',
    'skills-frontend-desc': 'Web structure, presentation, and interaction.',
    'skills-workflow-desc': 'Development environment, version control, and technical workflow.',
    // final CTA
    'final-cta-title':     'Have an idea for an API, landing page, or web prototype?',
    'final-cta-desc':      'Let’s define a clear scope, concrete deliverables, and the next step toward a working version.',
    'final-cta-primary':   'Start a project',
    'final-cta-secondary': 'View projects',
    // contact
    'contact-title':         'Contact',
    'contact-intro':         'Available for selected web projects, collaborations, and professional growth opportunities.',
    'contact-availability':  'Open to new conversations',
    'contact-channels':      'Contact channels',
    'contact-note':          'Do not include passwords, tokens, or sensitive information in the form.',
    'contact-label-nombre':  'Name',
    'contact-label-email':   'Email',
    'contact-label-mensaje': 'Message',
    'contact-ph-nombre':     'Your name',
    'contact-ph-email':      'your@email.com',
    'contact-ph-mensaje':    'Tell me briefly about your project',
    'contact-btn':           'Send message',
    'contact-sending':       'Sending message…',
    'contact-success':       "✓ Message sent. I'll get back to you soon.",
    'contact-error':         'The message could not be sent. Please try again or use a direct contact channel.',
    // footer
    'footer-brand-copy': 'Professional portfolio of Marcos Alvarez, the creator of Maahcodev.',
    'footer-nav-title':   'Explore',
    'footer-channel-title': 'Channels',
    'footer-tech-title':  'Technologies',
    'footer-nav-aria':   'Footer navigation',
    'footer-tech-aria':  'Core technologies',
    'footer-stack':      'HTML, CSS, JavaScript · Git and Linux development workflow',
    'footer-rights':     '© 2026 Marcos Alvarez. All rights reserved.',
  }
};


// ── ACCESSIBILITY: REDUCED MOTION ──────────────────────────────────────────

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// ── THEME MANAGEMENT ───────────────────────────────────────────────────────

const themeToggleBtn = document.querySelector('.theme-toggle');
let currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

function updateThemeToggleLabel() {
  const labelKey = currentTheme === 'dark'
    ? 'theme-switch-light-aria'
    : 'theme-switch-dark-aria';
  const label = i18n[currentLang][labelKey];

  themeToggleBtn.setAttribute('data-i18n-aria', labelKey);
  themeToggleBtn.setAttribute('data-i18n-title', labelKey);
  themeToggleBtn.setAttribute('aria-label', label);
  themeToggleBtn.setAttribute('title', label);
  themeToggleBtn.setAttribute('aria-pressed', String(currentTheme === 'light'));
}

function setTheme(theme, { persist = true } = {}) {
  currentTheme = theme === 'light' ? 'light' : 'dark';

  if (currentTheme === 'light') {
    document.documentElement.dataset.theme = 'light';
  } else {
    delete document.documentElement.dataset.theme;
  }

  if (persist) {
    try {
      localStorage.setItem('theme', currentTheme);
    } catch {}
  }

  updateThemeToggleLabel();
}

themeToggleBtn.addEventListener('click', () => {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});


// ── LANGUAGE MANAGEMENT ────────────────────────────────────────────────────

function normalizeLanguage(lang) {
  return lang === 'es' || lang === 'en' ? lang : 'es';
}

let currentLang = 'es';
try {
  currentLang = normalizeLanguage(localStorage.getItem('lang'));
} catch {}

const langToggleBtn = document.querySelector('.lang-toggle');

function setLanguage(lang) {
  currentLang = normalizeLanguage(lang);

  try {
    localStorage.setItem('lang', currentLang);
  } catch {}

  document.documentElement.lang = currentLang;

  const pageTitle = i18n[currentLang]['meta-title'];
  const pageDescription = i18n[currentLang]['meta-description'];

  document.title = pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', pageDescription);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[currentLang][key];
    if (!val) return;
    el.hasAttribute('data-html') ? (el.innerHTML = val) : (el.textContent = val);
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = i18n[currentLang][key];
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = i18n[currentLang][key];
    if (val) el.setAttribute('aria-label', val);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = i18n[currentLang][key];
    if (val) el.setAttribute('title', val);
  });

  langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  const languageLabelKey = currentLang === 'es' ? 'lang-switch-en-aria' : 'lang-switch-es-aria';
  langToggleBtn.setAttribute('aria-label', i18n[currentLang][languageLabelKey]);
  updateThemeToggleLabel();
  updateProjectDialogContent();
}

langToggleBtn.addEventListener('click', () => {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
});


// ── 1. HAMBURGER MENU ──────────────────────────────────────────────────────

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
const mobileNavQuery = window.matchMedia('(max-width: 1099px)');

function updateMenuLabel(isOpen) {
  const key = isOpen ? 'nav-menu-close-aria' : 'nav-menu-open-aria';
  navToggle.setAttribute('data-i18n-aria', key);
  navToggle.setAttribute('aria-label', i18n[currentLang][key]);
}

function setMenuState(isOpen, { focusFirst = false, returnFocus = false } = {}) {
  const shouldOpen = mobileNavQuery.matches && isOpen;

  navToggle.classList.toggle('is-open', shouldOpen);
  navLinks.classList.toggle('is-open', shouldOpen);
  navToggle.setAttribute('aria-expanded', String(shouldOpen));
  updateMenuLabel(shouldOpen);

  if (mobileNavQuery.matches) {
    navLinks.toggleAttribute('inert', !shouldOpen);
    navLinks.setAttribute('aria-hidden', String(!shouldOpen));
  } else {
    navLinks.removeAttribute('inert');
    navLinks.removeAttribute('aria-hidden');
  }

  if (shouldOpen && focusFirst) {
    navLinks.getBoundingClientRect();
    navLinks.querySelector('a')?.focus();
  } else if (returnFocus) {
    navToggle.focus();
  }
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen, { focusFirst: !isOpen });
});

navToggle.addEventListener('keyup', event => {
  const isActivationKey = event.key === 'Enter' || event.key === ' ';
  if (isActivationKey && navToggle.getAttribute('aria-expanded') === 'true') {
    navLinks.querySelector('a')?.focus();
  }
});

navToggle.addEventListener('keydown', event => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  if (event.key === 'Tab' && !event.shiftKey && isOpen) {
    event.preventDefault();
    navLinks.querySelector('a')?.focus();
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setMenuState(false, { returnFocus: true });
  }
});

mobileNavQuery.addEventListener('change', event => {
  const returnFocus = event.matches && navLinks.contains(document.activeElement);
  setMenuState(false, { returnFocus });
});

setMenuState(false);


// ── 2. HEADER SCROLL EFFECT ────────────────────────────────────────────────

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
}, { passive: true });


// ── 3. SCROLL SPY ──────────────────────────────────────────────────────────

const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach(a => a.classList.remove('active'));
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s));


// ── 4. FADE-IN ON SCROLL ───────────────────────────────────────────────────

const fadeTargets = document.querySelectorAll(
  '[data-reveal]'
);

if (prefersReducedMotion) {
  fadeTargets.forEach(el => el.classList.add('visible'));
} else {
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  fadeTargets.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
  });
}


// ── 5. ONE-TIME TERMINAL TYPING ────────────────────────────────────────────

const typingTarget = document.querySelector('.studio-terminal-typing');
let typingTimer;
let hasTypedTerminal = false;

function startTerminalTyping() {
  const text = i18n[currentLang]['hero-terminal-line'];
  let charIndex = 1;

  if (hasTypedTerminal) return;

  hasTypedTerminal = true;
  clearTimeout(typingTimer);

  if (prefersReducedMotion) {
    typingTarget.textContent = text;
    return;
  }

  typingTarget.textContent = text.slice(0, charIndex);

  function typeNextCharacter() {
    charIndex += 1;
    typingTarget.textContent = text.slice(0, charIndex);

    if (charIndex < text.length) {
      typingTimer = window.setTimeout(typeNextCharacter, 48);
    }
  }

  typingTimer = window.setTimeout(typeNextCharacter, 180);
}


// ── 6. BACK TO TOP ─────────────────────────────────────────────────────────

const btnTop = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
  btnTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});


// ── 7. PROJECT CASE STUDY DIALOG ───────────────────────────────────────────

const projectCaseStudies = [
  {
    id: 'familymovie',
    name: 'FamilyMovie',
    roleKey: 'family-role',
    descriptionKey: 'family-case-desc',
    stack: ['Python', 'FastAPI', 'HTTPX', 'HTML', 'CSS', 'JavaScript', 'pytest'],
    featureKeys: [
      'family-feature-catalog',
      'family-feature-player',
      'family-feature-security',
      'family-feature-trailers',
      'family-feature-watchlist',
      'family-feature-responsive',
      'family-feature-a11y',
      'family-feature-testing',
      'family-feature-emby',
      'family-feature-complete',
    ],
  },
  {
    id: 'cheatsheet',
    name: 'Cheat Sheet — Master Python 2026',
    roleKey: 'cheatsheet-role',
    descriptionKey: 'cheatsheet-case-desc',
    stack: ['Python', 'FastAPI', 'Jinja2', 'Tailwind CSS', 'JavaScript'],
    featureKeys: [
      'cheatsheet-feature-exercises',
      'cheatsheet-feature-search',
      'cheatsheet-feature-favorites',
      'cheatsheet-feature-language',
    ],
  },
  {
    id: 'nodedrive',
    name: 'NodeDrive UI Lab',
    roleKey: 'nodedrive-role',
    descriptionKey: 'nodedrive-case-desc',
    stack: ['FastAPI', 'Jinja2', 'HTTPX', 'Tailwind CSS', 'JavaScript'],
    featureKeys: [
      'nodedrive-feature-seafile',
      'nodedrive-feature-responsive',
      'nodedrive-feature-language',
      'nodedrive-feature-theme',
    ],
  },
];

const projectDialog = document.querySelector('#project-case-dialog');
const projectDialogPanel = projectDialog.querySelector('[data-project-dialog-panel]');
const projectDialogBody = projectDialog.querySelector('.project-dialog-body');
const projectDialogTitle = projectDialog.querySelector('#project-dialog-title');
const projectDialogRole = projectDialog.querySelector('#project-dialog-role');
const projectDialogDescription = projectDialog.querySelector('#project-dialog-description');
const projectDialogIndex = projectDialog.querySelector('#project-dialog-index');
const projectDialogFeatures = projectDialog.querySelector('#project-dialog-features');
const projectDialogStack = projectDialog.querySelector('#project-dialog-stack');
const projectDialogPreview = projectDialog.querySelector('.project-dialog-preview');
const projectDialogPreviewPending = projectDialog.querySelector('[data-project-preview-pending]');
const projectDialogPreviewSanitized = projectDialog.querySelector('[data-project-preview-sanitized]');
const projectDialogPosition = projectDialog.querySelector('[data-project-dialog-position]');
const projectDialogCloseBtn = projectDialog.querySelector('[data-project-dialog-close]');
const projectDialogPreviousBtn = projectDialog.querySelector('[data-project-dialog-previous]');
const projectDialogNextBtn = projectDialog.querySelector('[data-project-dialog-next]');
const projectCaseTriggers = document.querySelectorAll('[data-project-trigger]');
const projectCards = document.querySelectorAll('[data-project-card]');

let activeProjectIndex = -1;
let projectDialogTrigger = null;
let projectDialogCloseTimer = null;

function replaceProjectDialogList(container, items) {
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    fragment.append(listItem);
  });

  container.replaceChildren(fragment);
}

function updateProjectDialogContent() {
  if (activeProjectIndex < 0) return;

  const project = projectCaseStudies[activeProjectIndex];
  const currentPosition = String(activeProjectIndex + 1).padStart(2, '0');
  const totalProjects = String(projectCaseStudies.length).padStart(2, '0');

  projectDialogIndex.textContent = `${currentPosition} / CASE STUDY`;
  projectDialogTitle.textContent = project.name;
  projectDialogRole.textContent = i18n[currentLang][project.roleKey];
  projectDialogDescription.textContent = i18n[currentLang][project.descriptionKey];
  projectDialogPosition.textContent = `${currentPosition} / ${totalProjects}`;

  replaceProjectDialogList(
    projectDialogFeatures,
    project.featureKeys.map(key => i18n[currentLang][key]),
  );
  replaceProjectDialogList(projectDialogStack, project.stack);

  const isSanitizedPreview = project.id === 'familymovie';
  const previewAriaKey = isSanitizedPreview ? 'case-preview-sanitized-aria' : 'case-preview-aria';
  projectDialogPreviewPending.hidden = isSanitizedPreview;
  projectDialogPreviewSanitized.hidden = !isSanitizedPreview;
  projectDialogPreview.setAttribute('data-i18n-aria', previewAriaKey);
  projectDialogPreview.setAttribute('aria-label', i18n[currentLang][previewAriaKey]);
}

function openProjectDialog(projectId, trigger) {
  const projectIndex = projectCaseStudies.findIndex(project => project.id === projectId);
  if (projectIndex < 0) return;

  window.clearTimeout(projectDialogCloseTimer);
  projectDialogCloseTimer = null;
  activeProjectIndex = projectIndex;
  projectDialogTrigger = trigger;
  updateProjectDialogContent();
  projectDialogBody.scrollTop = 0;
  projectDialog.classList.remove('is-closing');

  if (!projectDialog.open) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty('--dialog-scrollbar-compensation', `${scrollbarWidth}px`);
    document.body.classList.add('project-dialog-open');
    projectDialog.showModal();
  }

  window.requestAnimationFrame(() => {
    projectDialogCloseBtn.focus({ preventScroll: true });
  });
}

function finishProjectDialogClose() {
  projectDialogCloseTimer = null;
  projectDialog.classList.remove('is-closing');
  if (projectDialog.open) projectDialog.close();
}

function closeProjectDialog() {
  if (!projectDialog.open || projectDialog.classList.contains('is-closing')) return;

  window.clearTimeout(projectDialogCloseTimer);
  projectDialogCloseTimer = null;
  projectDialog.classList.add('is-closing');

  if (prefersReducedMotion) {
    finishProjectDialogClose();
    return;
  }

  projectDialogCloseTimer = window.setTimeout(finishProjectDialogClose, 170);
}

function showAdjacentProject(direction) {
  activeProjectIndex = (
    activeProjectIndex + direction + projectCaseStudies.length
  ) % projectCaseStudies.length;

  updateProjectDialogContent();
  projectDialogBody.scrollTop = 0;
}

function getProjectDialogFocusableElements() {
  return [...projectDialog.querySelectorAll(
    'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )].filter(element => !element.hasAttribute('hidden'));
}

projectCaseTriggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.stopPropagation();
    openProjectDialog(trigger.dataset.projectTrigger, trigger);
  });
});

projectCards.forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('button, a, input, textarea, select')) return;

    const trigger = card.querySelector('[data-project-trigger]');
    openProjectDialog(card.dataset.projectCard, trigger);
  });
});

projectDialogCloseBtn.addEventListener('click', closeProjectDialog);
projectDialogPreviousBtn.addEventListener('click', () => showAdjacentProject(-1));
projectDialogNextBtn.addEventListener('click', () => showAdjacentProject(1));

projectDialog.addEventListener('click', event => {
  if (event.target === projectDialog && !projectDialogPanel.contains(event.target)) {
    closeProjectDialog();
  }
});

projectDialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeProjectDialog();
});

projectDialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;

  const focusableElements = getProjectDialogFocusableElements();
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements.at(-1);

  if (!firstFocusable || !lastFocusable) {
    event.preventDefault();
    return;
  }

  if (event.shiftKey && document.activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  } else if (!event.shiftKey && document.activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
});

projectDialog.addEventListener('focusout', () => {
  window.requestAnimationFrame(() => {
    if (projectDialog.open && !projectDialog.contains(document.activeElement)) {
      projectDialogCloseBtn.focus({ preventScroll: true });
    }
  });
});

projectDialog.addEventListener('close', () => {
  window.clearTimeout(projectDialogCloseTimer);
  projectDialogCloseTimer = null;
  projectDialog.classList.remove('is-closing');
  document.body.classList.remove('project-dialog-open');
  document.body.style.removeProperty('--dialog-scrollbar-compensation');

  const trigger = projectDialogTrigger;
  projectDialogTrigger = null;

  window.requestAnimationFrame(() => {
    trigger?.focus({ preventScroll: true });
  });
});


// ── 8. CONTACT FORM ────────────────────────────────────────────────────────

const contactForm = document.querySelector('.contacto-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formStatus = contactForm.querySelector('.form-status');

    submitBtn.textContent = i18n[currentLang]['contact-sending'];
    submitBtn.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    formStatus.textContent = i18n[currentLang]['contact-sending'];

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        contactForm.reset();
        formStatus.textContent = i18n[currentLang]['contact-success'];
      } else {
        formStatus.textContent = i18n[currentLang]['contact-error'];
      }
    } catch {
      formStatus.textContent = i18n[currentLang]['contact-error'];
    } finally {
      submitBtn.textContent = i18n[currentLang]['contact-btn'];
      submitBtn.disabled = false;
      contactForm.removeAttribute('aria-busy');
    }
  });
}


// ── 9. HERO AMBIENT SYMBOLS ─────────────────────────────────────────────────

const heroSimbolosContainer = document.querySelector('.hero-simbolos');

const HERO_SYMBOLS = [
  // Distribución en "escalera": borde izquierdo y derecho alternados,
  // con separación vertical uniforme (~16-18%) para evitar racimos.
  // 1 — destacado: opacidad 0.17–0.22, tamaño 1.3–1.6rem
  { content: '{ }',   x: '6%',  y: '8%',  size: '1.4rem',  opacity: 0.19, duration: '12s',   delay: '0s',    driftX: '28px',  driftY: '-34px', color: 'var(--accent-color)' },
  // 2 — secundario: opacidad 0.08–0.15, tamaño 0.9–1.25rem
  // x/y reajustados: separación del símbolo 4 y del rail de escritorio (ver media query ≥1023px)
  { content: '[ ]',   x: '82%', y: '13%', size: '1rem',    opacity: 0.11, duration: '16s',   delay: '1.5s',  driftX: '-22px', driftY: '26px',  color: 'var(--secondary-accent)' },
  // 3 — secundario
  { content: '( )',   x: '5%',  y: '26%', size: '1.05rem', opacity: 0.13, duration: '14s',   delay: '3s',    driftX: '20px',  driftY: '32px',  color: 'var(--accent-color)' },
  // 4 — destacado (lado derecho, altura media: recibe ajuste de x solo en escritorio, ver media query ≥1023px)
  // y reajustada: antes a solo 12% del símbolo 6 (39% vs 51%), ahora 17%
  { content: '</>',   x: '79%', y: '34%', size: '1.55rem', opacity: 0.21, duration: '11s',   delay: '0.8s',  driftX: '-34px', driftY: '-24px', color: 'var(--accent-color)' },
  // 5 — secundario
  { content: '=>',    x: '7%',  y: '44%', size: '0.95rem', opacity: 0.09, duration: '17s',   delay: '4.5s',  driftX: '24px',  driftY: '-28px', color: 'var(--secondary-accent)' },
  // 6 — destacado (lado derecho, altura media: ajuste de x en escritorio)
  { content: '#',     x: '90%', y: '51%', size: '1.6rem',  opacity: 0.18, duration: '15s',   delay: '2s',    driftX: '-30px', driftY: '36px',  color: 'var(--accent-color)' },
  // 7 — secundario
  { content: '01',    x: '4%',  y: '62%', size: '1.1rem',  opacity: 0.14, duration: '13s',   delay: '5.5s',  driftX: '26px',  driftY: '-22px', color: 'var(--accent-color)' },
  // 8 — secundario (lado derecho, altura media: ajuste de x en escritorio)
  { content: 'def',   x: '88%', y: '69%', size: '0.9rem',  opacity: 0.10, duration: '18s',   delay: '6.5s',  driftX: '-18px', driftY: '-30px', color: 'var(--secondary-accent)' },
  // 9 — secundario
  { content: 'async', x: '8%',  y: '78%', size: '1rem',    opacity: 0.08, duration: '16s',   delay: '7s',    driftX: '32px',  driftY: '20px',  color: 'var(--accent-color)' },
  // 10 — destacado (lado derecho, altura media: ajuste de x en escritorio)
  // y reajustada: antes a solo 12% del símbolo 12 (85% vs 97%), ahora 14% simétrico con el 8
  { content: 'API',   x: '89%', y: '83%', size: '1.35rem', opacity: 0.22, duration: '10s',   delay: '1s',    driftX: '-26px', driftY: '30px',  color: 'var(--accent-color)' },
  // 11 — secundario
  { content: 'const', x: '6%',  y: '94%', size: '1rem',    opacity: 0.09, duration: '14.5s', delay: '8s',    driftX: '22px',  driftY: '-26px', color: 'var(--accent-color)' },
  // 12 — secundario (por debajo del panel técnico, sin riesgo de solapamiento)
  { content: '_',     x: '93%', y: '97%', size: '1.15rem', opacity: 0.12, duration: '12.5s', delay: '9s',    driftX: '-24px', driftY: '-32px', color: 'var(--accent-color)' },
];

function createHeroSymbols() {
  HERO_SYMBOLS.forEach((symbol) => {
    const el = document.createElement('span');
    el.className = 'hero-simbolo';
    el.textContent = symbol.content;
    el.style.setProperty('--symbol-x', symbol.x);
    el.style.setProperty('--symbol-y', symbol.y);
    el.style.setProperty('--symbol-size', symbol.size);
    el.style.setProperty('--symbol-opacity', symbol.opacity);
    el.style.setProperty('--symbol-duration', symbol.duration);
    el.style.setProperty('--symbol-delay', symbol.delay);
    el.style.setProperty('--symbol-drift-x', symbol.driftX);
    el.style.setProperty('--symbol-drift-y', symbol.driftY);
    el.style.setProperty('--symbol-color', symbol.color);
    heroSimbolosContainer.append(el);
  });
}

if (heroSimbolosContainer && !prefersReducedMotion) {
  createHeroSymbols();

  const heroSection = document.getElementById('inicio');

  if (heroSection && 'IntersectionObserver' in window) {
    const heroSymbolsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        heroSimbolosContainer.classList.toggle('hero-simbolos--activos', entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    heroSymbolsObserver.observe(heroSection);
  } else {
    heroSimbolosContainer.classList.add('hero-simbolos--activos');
  }
}


// ── INIT ───────────────────────────────────────────────────────────────────

setLanguage(currentLang);
startTerminalTyping();
