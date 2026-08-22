import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart, Server, Award, Sparkles } from 'lucide-react';
import { SectionGlow } from './Atmosphere';

interface FooterProps {
  onOpenCommandPalette?: () => void;
  onOpenTerminal?: () => void;
  onOpenApiDocs?: () => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenApiDocs,
  onOpenResume,
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative isolate overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/80 transition-colors">
      <SectionGlow variant="footer" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">

          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-mono text-lg font-bold tracking-tight"
            >
              <span className="text-amber-500">~/</span>
              <span>maahcodev</span>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/macodev-82"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-alvarez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:maahcodev@gmail.com"
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: t.nav.projects, href: '#projects' },
                { label: t.nav.services, href: '#services' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.journey, href: '#journey' },
                { label: t.nav.toolkit, href: '#toolkit' },
                { label: t.nav.contact, href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Tools Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              Herramientas & Demos
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {onOpenCommandPalette && (
                <li>
                  <button
                    onClick={onOpenCommandPalette}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5 text-amber-500" />
                    <span>Paleta de comandos (⌘K)</span>
                  </button>
                </li>
              )}
              {onOpenTerminal && (
                <li>
                  <button
                    onClick={onOpenTerminal}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    <span className="text-emerald-500 font-bold">&gt;_</span>
                    <span>Terminal Linux interactivo</span>
                  </button>
                </li>
              )}
              {onOpenApiDocs && (
                <li>
                  <button
                    onClick={onOpenApiDocs}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors"
                  >
                    <Server className="w-3.5 h-3.5 text-sky-500" />
                    <span>FastAPI OpenAPI Explorer (/docs)</span>
                  </button>
                </li>
              )}
              {onOpenResume && (
                <li>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Curriculum Vitae (PDF / ATS)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Tech stack badge list */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              {t.footer.technologiesTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Python 3.12', 'FastAPI', 'Linux / Ubuntu', 'Git & CI', 'HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'HTTPX / Pytest'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.nav.availableBadge}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            {t.footer.copyright}
          </div>

          <button
            id="btn-footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
