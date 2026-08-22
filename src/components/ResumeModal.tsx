import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  X,
  Printer,
  FileDown,
  Copy,
  Check,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Award,
  BookOpen,
  Briefcase,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/translations';
import { useModalA11y } from '../hooks/useModalA11y';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const { addToast } = useNotifications();
  const [copiedMd, setCopiedMd] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useModalA11y(isOpen, onClose, containerRef);

  const handlePrint = () => {
    window.print();
  };

  const getMarkdownResume = () => {
    const projectsMd = PROJECTS_DATA.map((proj) => {
      const bullets = proj.keyDeliverables[language].map((d) => `- ${d}`).join('\n');
      return `### ${proj.title} · ${proj.status[language]}\n${proj.summary[language]}\n${bullets}`;
    }).join('\n\n');

    return `# Marcos Alvarez (Maahcodev)
**Python Backend & Full-Stack Developer**
- Email: maahcodev@gmail.com
- GitHub: https://github.com/macodev-82
- LinkedIn: https://www.linkedin.com/in/marcos-alvarez

---

## 1. Professional Summary
${t.resumeModal.summaryText}

---

## 2. Core Technical Skills
- **Backend & APIs:** Python 3.12, FastAPI, HTTPX (Async), Pydantic v2, Pytest, Jinja2, Asyncio, RESTful Architecture
- **Frontend & Web:** Semantic HTML5, CSS3, JavaScript (ES2024), Tailwind CSS, Responsive Design, WCAG 2.1 AA Accessibility
- **Systems & Workflow:** Linux (Ubuntu), Bash Scripting, Git, GitHub, uv packaging
- **Methodologies:** Test-Driven Development (TDD), Clean Architecture

---

## 3. Selected Projects & Engineering Achievements

${projectsMd}

---

## 4. Working Principles
- **Clarity before complexity:** Understandable, maintainable code over unnecessary abstractions.
- **Verifiable deliverables:** Automated testing and clear milestones for every project.
- **Continuous improvement:** Active learning in modern Python concurrency, typing, and backend architecture.
`;
  };

  const getJsonResume = () => {
    return JSON.stringify(
      {
        basics: {
          name: "Marcos Alvarez",
          label: "Python Backend & Full-Stack Developer",
          email: "maahcodev@gmail.com",
          profiles: [
            { network: "GitHub", url: "https://github.com/macodev-82" },
            { network: "LinkedIn", url: "https://www.linkedin.com/in/marcos-alvarez" }
          ]
        },
        skills: [
          { name: "Backend", keywords: ["Python 3.12", "FastAPI", "HTTPX", "Pydantic v2", "Pytest"] },
          { name: "Frontend", keywords: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "A11y"] },
          { name: "Systems & Workflow", keywords: ["Linux Ubuntu", "Bash", "Git", "GitHub", "uv"] }
        ],
        projects: PROJECTS_DATA.map((proj) => ({
          name: proj.title,
          status: proj.status[language],
          description: proj.tagline[language],
        }))
      },
      null,
      2
    );
  };

  const handleCopyMd = () => {
    navigator.clipboard.writeText(getMarkdownResume());
    setCopiedMd(true);
    addToast({
      title: 'Markdown Copiado',
      message: t.resumeModal.copiedMd,
      type: 'success',
    });
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(getJsonResume());
    setCopiedJson(true);
    addToast({
      title: 'JSON Resume Copiado',
      message: t.resumeModal.copiedJson,
      type: 'success',
    });
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm print:hidden"
          />

          {/* Modal Box / Printable Sheet */}
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.resumeModal.title}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:rounded-none z-10"
          >
            {/* Top Toolbar (Hidden during print) */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3 print:hidden">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {t.resumeModal.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {t.resumeModal.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.resumeModal.btnPrint}</span>
                </button>

                <button
                  onClick={handleCopyMd}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-mono transition-colors"
                >
                  {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Markdown (ATS)</span>
                </button>

                <button
                  onClick={handleCopyJson}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-mono transition-colors"
                >
                  {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>JSON Resume</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Cerrar modal de CV"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans print:p-0 print:text-black">
              {/* CV Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-slate-900 dark:text-white print:text-black">
                    Marcos Alvarez
                  </h1>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-sm font-semibold print:text-gray-800">
                    Maahcodev · Python Backend & Full-Stack
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 print:text-gray-700">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    maahcodev@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-amber-500" />
                    github.com/macodev-82
                  </span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-amber-500" />
                    linkedin.com/in/marcos-alvarez
                  </span>
                </div>
              </div>

              {/* 1. Professional Summary */}
              <div className="space-y-2.5">
                <h2 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold print:text-black">
                  01 / {t.resumeModal.summaryTitle}
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-gray-900">
                  {t.resumeModal.summaryText}
                </p>
              </div>

              {/* 2. Skills Matrix */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold print:text-black">
                  02 / {t.resumeModal.skillsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & APIs</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                      Python 3.12, FastAPI, HTTPX, Pydantic v2, Asyncio, Pytest, Jinja2
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend & Web</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                      HTML5 semántico, CSS3, JavaScript ES2024, Tailwind CSS, Accesibilidad WCAG 2.1 AA
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 print:bg-white print:border-gray-300">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Linux & Workflow</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                      Ubuntu, Bash, Git, GitHub, uv
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Featured Projects & Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold print:text-black">
                  03 / {t.resumeModal.experienceTitle}
                </h2>

                <div className="space-y-4 text-xs">
                  {PROJECTS_DATA.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 print:bg-white print:border-gray-300 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                          {proj.title} · <span className="text-slate-500 font-normal">{proj.tagline[language]}</span>
                        </h3>
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">
                          {proj.status[language]}
                        </span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {proj.summary[language]}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded font-mono text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Principles */}
              <div className="space-y-2.5 pt-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold print:text-black">
                  04 / Metodología y Principios
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>Claridad y simplicidad:</strong> Soluciones directas con código legible y bien tipado con Pydantic.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>Validación automatizada:</strong> Cobertura de pruebas unitarias con Pytest antes del despliegue.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>Entorno Linux:</strong> Flujo de desarrollo continuo en terminal con control de versiones en Git.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>Accesibilidad universal:</strong> Cumplimiento estricto de estándares WCAG 2.1 AA en todas las interfaces.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 print:hidden">
              <span>Actualizado: 2026 · Marcos Alvarez (Maahcodev)</span>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
