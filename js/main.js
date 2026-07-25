/* =========================================================================
   main.js — Portfolio Marcos Alvarez (maahcodev)
   ========================================================================= */


// ── TRADUCCIONES ───────────────────────────────────────────────────────────

const i18n = {
  es: {
    // nav
    'nav-sobre':        'Sobre mí',
    'nav-trayectoria':  'Trayectoria',
    'nav-habilidades':  'Habilidades',
    'nav-proyectos':    'Proyectos',
    'nav-contacto':     'Contacto',
    // hero
    'hero-saludo':       'Hola, soy',
    'hero-desc':         'Construyo proyectos reales aprendiendo HTML, CSS, Python y Linux desde cero. Creo en entender cada línea de código que escribo.',
    'hero-btn-ver':      'Ver mis proyectos',
    'hero-btn-contacto': 'Contáctame',
    'typing-phrases':    ['Desarrollador Web en Formación', 'Aprendiz de HTML & CSS', 'Entusiasta de Python', 'Fan de Linux y la terminal'],
    // sobre mí
    'sobre-titulo': 'Sobre mí',
    'sobre-p1': 'Soy un desarrollador web autodidacta basado en Miami, FL. Empecé con curiosidad genuina sobre cómo funciona internet por dentro — y eso me llevó a construir este portafolio desde cero, línea a línea, sin atajos.',
    'sobre-p2': 'Mi stack actual incluye <strong>HTML</strong> y <strong>CSS</strong> para la web, <strong>Python</strong> para scripting y lógica, y <strong>Linux/Ubuntu</strong> como entorno principal de trabajo. Uso <strong>Git y GitHub</strong> para versionar cada proyecto desde el primer commit.',
    'sobre-p3': 'Mi meta no es solo escribir código — es entender por qué funciona. Cada proyecto que construyo es una oportunidad de aprender algo que no sabía el día anterior.',
    // trayectoria
    'tray-titulo':  'Trayectoria',
    'tray1-titulo': 'El comienzo',
    'tray1-desc':   'Empecé a explorar programación por curiosidad propia. Primeras búsquedas, primeros tutoriales — entendí que quería construir cosas para la web.',
    'tray2-titulo': 'HTML & CSS desde cero',
    'tray2-desc':   'Me enfoqué en entender la web de verdad: HTML semántico, Flexbox, Grid, responsive design — sin frameworks, sin atajos. Cada propiedad, entendida.',
    'tray3-titulo': 'Python — primer lenguaje',
    'tray3-desc':   'Aprendí a programar con Python: estructuras de datos, funciones, manejo de archivos y lógica de programación aplicada a proyectos reales.',
    'tray4-titulo': 'Linux & Terminal',
    'tray4-desc':   'Migré a Ubuntu como entorno de trabajo principal. La terminal dejó de intimidarme — ahora es mi herramienta favorita.',
    'tray5-titulo': 'Git & GitHub',
    'tray5-desc':   'Empecé a versionar todo desde el primer commit. Comprendí el flujo de trabajo profesional: ramas, pull requests, historial limpio.',
    'tray6-titulo': 'Portfolio — en curso',
    'tray6-desc':   'Construí este sitio desde cero: HTML semántico, CSS puro, JavaScript vanilla. Sin frameworks. Mi primer proyecto completo y público.',
    'tray7-titulo': 'uv — gestión de entornos',
    'tray7-desc':   'Adopté uv como herramienta principal para gestionar entornos virtuales y dependencias en Python. Más rápido y moderno que pip tradicional.',
    'tray8-titulo': 'FastAPI',
    'tray8-desc':   'Primer framework web en Python. Construí APIs REST con validación automática, documentación interactiva y tipado estático.',
    // habilidades
    'hab-titulo':      'Habilidades',
    'hab-html-desc':   'Estructura semántica y accesible para la web',
    'hab-css-desc':    'Diseño visual, layout y responsive design',
    'hab-python-desc': 'Scripting, lógica y proyectos de consola',
    'hab-linux-desc':  'Entorno de trabajo principal y terminal',
    'hab-git-desc':    'Control de versiones y flujo de trabajo',
    'hab-github-desc':  'Repositorios, colaboración y portafolio público',
    'hab-uv-desc':      'Gestor moderno de paquetes y entornos Python',
    'hab-fastapi-desc': 'Framework web para APIs REST con Python',
    // proyectos
    'proy-titulo':  'Proyectos',
    'proy1-titulo': 'Portfolio Personal',
    'proy1-desc':   'El sitio que estás viendo ahora mismo. Construido desde cero con HTML semántico y CSS puro — sin frameworks ni librerías. Diseño limpio, responsive y preparado para crecer.',
    'proy2-titulo': 'Landing Page Practice',
    'proy2-desc':   'Ejercicio práctico de diseño web. Una landing page completa con hero section, sección de características y formulario de contacto — solo HTML y CSS.',
    'proy3-titulo': 'Python Console Project',
    'proy3-desc':   'Proyecto de consola en Python. Trabajé con estructuras de datos, funciones, manejo de archivos y lógica de programación básica. Versionado con Git desde el primer commit.',
    'btn-demo': 'Demo',
    'btn-demo-proximamente': 'Demo próximamente',
    'btn-repo-proximamente': 'Repositorio próximamente',
    'btn-demo-proximamente-aria': 'Demo aún no disponible',
    'btn-repo-proximamente-aria': 'Repositorio aún no disponible',
    // contacto
    'contact-titulo':        'Contacto',
    'contact-desc':          'Estoy abierto a colaboraciones, proyectos y oportunidades de aprendizaje. Si quieres trabajar conmigo o simplemente hablar de tecnología, escríbeme.',
    'contact-sub':           'Encuéntrame en',
    'contact-label-nombre':  'Nombre',
    'contact-label-email':   'Email',
    'contact-label-mensaje': 'Mensaje',
    'contact-ph-nombre':     'Tu nombre',
    'contact-ph-email':      'tu@email.com',
    'contact-ph-mensaje':    '¿En qué puedo ayudarte?',
    'contact-btn':           'Enviar mensaje',
    // footer
    'footer-texto': 'Diseñado y construido por <strong>Marcos Alvarez</strong> &copy; 2026',
    'footer-sub':   'Hecho con HTML y CSS puro — sin frameworks, sin atajos.',
  },

  en: {
    // nav
    'nav-sobre':        'About me',
    'nav-trayectoria':  'Journey',
    'nav-habilidades':  'Skills',
    'nav-proyectos':    'Projects',
    'nav-contacto':     'Contact',
    // hero
    'hero-saludo':       "Hi, I'm",
    'hero-desc':         "I build real projects while learning HTML, CSS, Python and Linux from scratch. I believe in understanding every line of code I write.",
    'hero-btn-ver':      'See my projects',
    'hero-btn-contacto': 'Contact me',
    'typing-phrases':    ['Web Developer in Training', 'HTML & CSS Learner', 'Python Enthusiast', 'Linux & Terminal Fan'],
    // about
    'sobre-titulo': 'About me',
    'sobre-p1': "I'm a self-taught web developer based in Miami, FL. I started with genuine curiosity about how the internet works from the inside — and that led me to build this portfolio from scratch, line by line, no shortcuts.",
    'sobre-p2': 'My current stack includes <strong>HTML</strong> and <strong>CSS</strong> for the web, <strong>Python</strong> for scripting and logic, and <strong>Linux/Ubuntu</strong> as my main work environment. I use <strong>Git and GitHub</strong> to version every project from the first commit.',
    'sobre-p3': "My goal isn't just to write code — it's to understand why it works. Every project I build is an opportunity to learn something I didn't know the day before.",
    // journey
    'tray-titulo':  'Journey',
    'tray1-titulo': 'The beginning',
    'tray1-desc':   'I started exploring programming out of genuine curiosity. First searches, first tutorials — I realized I wanted to build things for the web.',
    'tray2-titulo': 'HTML & CSS from scratch',
    'tray2-desc':   'I focused on truly understanding the web: semantic HTML, Flexbox, Grid, responsive design — no frameworks, no shortcuts. Every property, understood.',
    'tray3-titulo': 'Python — first language',
    'tray3-desc':   'I learned to program with Python: data structures, functions, file handling and programming logic applied to real projects.',
    'tray4-titulo': 'Linux & Terminal',
    'tray4-desc':   "I switched to Ubuntu as my main work environment. The terminal stopped being intimidating — now it's my favorite tool.",
    'tray5-titulo': 'Git & GitHub',
    'tray5-desc':   'I started versioning everything from the first commit. I understood the professional workflow: branches, pull requests, clean history.',
    'tray6-titulo': 'Portfolio — in progress',
    'tray6-desc':   'I built this site from scratch: semantic HTML, pure CSS, vanilla JavaScript. No frameworks. My first complete, public project.',
    'tray7-titulo': 'uv — environment management',
    'tray7-desc':   'I adopted uv as my main tool for managing virtual environments and dependencies in Python. Faster and more modern than traditional pip.',
    'tray8-titulo': 'FastAPI',
    'tray8-desc':   'First Python web framework. I built REST APIs with automatic validation, interactive documentation and static typing.',
    // skills
    'hab-titulo':      'Skills',
    'hab-html-desc':   'Semantic and accessible web structure',
    'hab-css-desc':    'Visual design, layout and responsive design',
    'hab-python-desc': 'Scripting, logic and console projects',
    'hab-linux-desc':  'Main work environment and terminal',
    'hab-git-desc':    'Version control and workflow',
    'hab-github-desc':  'Repositories, collaboration and public portfolio',
    'hab-uv-desc':      'Modern Python package and environment manager',
    'hab-fastapi-desc': 'Web framework for REST APIs with Python',
    // projects
    'proy-titulo':  'Projects',
    'proy1-titulo': 'Personal Portfolio',
    'proy1-desc':   "The site you're looking at right now. Built from scratch with semantic HTML and pure CSS — no frameworks or libraries. Clean, responsive design ready to grow.",
    'proy2-titulo': 'Landing Page Practice',
    'proy2-desc':   'A practical web design exercise. A complete landing page with hero section, features section and contact form — only HTML and CSS.',
    'proy3-titulo': 'Python Console Project',
    'proy3-desc':   'A Python console project. I worked with data structures, functions, file handling and basic programming logic. Versioned with Git from the first commit.',
    'btn-demo': 'Demo',
    'btn-demo-proximamente': 'Demo coming soon',
    'btn-repo-proximamente': 'Repository coming soon',
    'btn-demo-proximamente-aria': 'Demo not available yet',
    'btn-repo-proximamente-aria': 'Repository not available yet',
    // contact
    'contact-titulo':        'Contact',
    'contact-desc':          "I'm open to collaborations, projects and learning opportunities. If you want to work with me or just talk about technology, write to me.",
    'contact-sub':           'Find me at',
    'contact-label-nombre':  'Name',
    'contact-label-email':   'Email',
    'contact-label-mensaje': 'Message',
    'contact-ph-nombre':     'Your name',
    'contact-ph-email':      'your@email.com',
    'contact-ph-mensaje':    'How can I help you?',
    'contact-btn':           'Send message',
    // footer
    'footer-texto': 'Designed and built by <strong>Marcos Alvarez</strong> &copy; 2026',
    'footer-sub':   'Made with pure HTML and CSS — no frameworks, no shortcuts.',
  }
};


// ── LANGUAGE MANAGEMENT ────────────────────────────────────────────────────

let currentLang = localStorage.getItem('lang') || 'es';
const langToggleBtn = document.querySelector('.lang-toggle');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang][key];
    if (!val) return;
    el.hasAttribute('data-html') ? (el.innerHTML = val) : (el.textContent = val);
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = i18n[lang][key];
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = i18n[lang][key];
    if (val) el.setAttribute('aria-label', val);
  });

  langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  langToggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');

  // Reset typing effect with new language phrases
  phrases     = i18n[lang]['typing-phrases'];
  phraseIndex = 0;
  charIndex   = 0;
  isDeleting  = false;
}

langToggleBtn.addEventListener('click', () => {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
});


// ── 1. HAMBURGER MENU ──────────────────────────────────────────────────────

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Cerrar el menú al redimensionar a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navToggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}, { passive: true });


// ── 2. HEADER SCROLL EFFECT ────────────────────────────────────────────────

const header = document.querySelector('header');

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
  '.habilidad-item, .proyecto-card, .sobre-mi-texto, .seccion-titulo, .contacto-link, .timeline-item'
);

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    fadeObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

fadeTargets.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});


// ── 5. TYPING EFFECT ───────────────────────────────────────────────────────

let phrases     = i18n[currentLang]['typing-phrases'];
const typingTarget = document.querySelector('.hero-titulo');
let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

function type() {
  const current = phrases[phraseIndex];

  typingTarget.textContent = isDeleting
    ? current.slice(0, charIndex - 1)
    : current.slice(0, charIndex + 1);

  if (isDeleting) charIndex--;
  else charIndex++;

  let delay = isDeleting ? 45 : 75;

  if (!isDeleting && charIndex === current.length) {
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}


// ── 6. BACK TO TOP ─────────────────────────────────────────────────────────

const btnTop = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
  btnTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ── 7. CONTACT FORM ────────────────────────────────────────────────────────

const contactForm = document.querySelector('.contacto-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
    submitBtn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        const msg = currentLang === 'es'
          ? '✓ Mensaje enviado. Te respondo pronto.'
          : "✓ Message sent. I'll get back to you soon.";
        contactForm.innerHTML = `<p class="form-exito">${msg}</p>`;
      } else {
        submitBtn.textContent = currentLang === 'es' ? 'Error — intenta de nuevo' : 'Error — try again';
        submitBtn.disabled = false;
      }
    } catch {
      submitBtn.textContent = currentLang === 'es' ? 'Error — intenta de nuevo' : 'Error — try again';
      submitBtn.disabled = false;
    }
  });
}


// ── INIT ───────────────────────────────────────────────────────────────────

setLanguage(currentLang);
type();
