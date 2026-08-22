import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';
import {
  Search,
  FolderGit2,
  Terminal,
  FileCode2,
  FileText,
  Activity,
  Layers,
  Sparkles,
  Sun,
  Moon,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Compass,
  Check,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModalA11y } from '../hooks/useModalA11y';
import { PROJECTS_DATA } from '../data/translations';

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  category: 'nav' | 'projects' | 'tools' | 'actions';
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenApiDocs: () => void;
  onOpenResume: () => void;
  onOpenBenchmarks: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenApiDocs,
  onOpenResume,
  onOpenBenchmarks,
  onSelectProject,
}) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useNotifications();
  const projectById = {
    familymovie: PROJECTS_DATA.find((p) => p.id === 'familymovie')!,
    cheatsheet: PROJECTS_DATA.find((p) => p.id === 'cheatsheet')!,
    nodedrive: PROJECTS_DATA.find((p) => p.id === 'nodedrive')!,
  };
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useModalA11y(isOpen, onClose, containerRef);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('maahcodev@gmail.com');
    addToast({
      title: 'Email copiado',
      message: 'maahcodev@gmail.com copiado al portapapeles',
      type: 'success',
    });
    onClose();
  };

  const items: CommandItem[] = [
    // Tools
    {
      id: 'tool-api-docs',
      title: t.commandPalette.openApiDocs,
      description: t.commandPalette.openApiDocsDesc,
      category: 'tools',
      icon: <FileCode2 className="w-4 h-4 text-amber-500" />,
      action: () => {
        onClose();
        onOpenApiDocs();
      },
      keywords: ['api', 'docs', 'swagger', 'fastapi', 'rest', 'openapi', 'json', 'endpoints']
    },
    {
      id: 'tool-terminal',
      title: t.commandPalette.openTerminal,
      description: t.commandPalette.openTerminalDesc,
      category: 'tools',
      icon: <Terminal className="w-4 h-4 text-emerald-500" />,
      action: () => {
        onClose();
        onOpenTerminal();
      },
      keywords: ['terminal', 'bash', 'zsh', 'shell', 'cli', 'neofetch', 'pytest', 'linux', 'ubuntu']
    },
    {
      id: 'tool-resume',
      title: t.commandPalette.openResume,
      description: t.commandPalette.openResumeDesc,
      category: 'tools',
      icon: <FileText className="w-4 h-4 text-sky-500" />,
      action: () => {
        onClose();
        onOpenResume();
      },
      keywords: ['cv', 'resume', 'curriculum', 'pdf', 'ats', 'experiencia', 'estudios', 'skills']
    },
    {
      id: 'tool-benchmarks',
      title: t.commandPalette.openBenchmarks,
      description: t.commandPalette.openBenchmarksDesc,
      category: 'tools',
      icon: <Activity className="w-4 h-4 text-rose-500" />,
      action: () => {
        onClose();
        onOpenBenchmarks();
      },
      keywords: ['benchmark', 'rendimiento', 'async', 'asgi', 'concurrencia', 'rps', 'latencia', 'uvloop']
    },

    // Projects
    {
      id: 'proj-familymovie',
      title: `${projectById.familymovie.title} · ${projectById.familymovie.badge[language]}`,
      description: 'FastAPI + read-only Emby integration · 149 automated tests',
      category: 'projects',
      icon: <FolderGit2 className="w-4 h-4 text-amber-500" />,
      action: () => {
        onClose();
        onSelectProject('familymovie');
      },
      keywords: ['familymovie', 'emby', 'streaming', 'fastapi', 'video', 'async']
    },
    {
      id: 'proj-cheatsheet',
      title: `${projectById.cheatsheet.title} · ${projectById.cheatsheet.badge[language]}`,
      description: 'FastAPI + Jinja2 · 39 validated exercises',
      category: 'projects',
      icon: <FolderGit2 className="w-4 h-4 text-emerald-500" />,
      action: () => {
        onClose();
        onSelectProject('cheatsheet');
      },
      keywords: ['cheat sheet', 'master python', 'ejercicios', 'exercises', 'code']
    },
    {
      id: 'proj-nodedrive',
      title: `${projectById.nodedrive.title} · ${projectById.nodedrive.badge[language]}`,
      description: 'FastAPI + read-only Seafile integration',
      category: 'projects',
      icon: <FolderGit2 className="w-4 h-4 text-sky-500" />,
      action: () => {
        onClose();
        onSelectProject('nodedrive');
      },
      keywords: ['nodedrive', 'seafile', 'explorer', 'archivos', 'cloud', 'lab']
    },

    // Navigation
    {
      id: 'nav-projects',
      title: t.nav.projects,
      description: t.commandPalette.navProjectsDesc,
      category: 'nav',
      icon: <Layers className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('projects'),
      keywords: ['proyectos', 'projects', 'trabajos', 'portfolio']
    },
    {
      id: 'nav-services',
      title: t.nav.services,
      description: t.commandPalette.navServicesDesc,
      category: 'nav',
      icon: <Layers className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('services'),
      keywords: ['servicios', 'services', 'precios', 'presupuesto', 'landing']
    },
    {
      id: 'nav-about',
      title: t.nav.about,
      description: t.commandPalette.navAboutDesc,
      category: 'nav',
      icon: <Layers className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('about'),
      keywords: ['sobre mi', 'about', 'principios', 'marcos alvarez']
    },
    {
      id: 'nav-journey',
      title: t.nav.journey,
      description: t.commandPalette.navJourneyDesc,
      category: 'nav',
      icon: <Compass className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('journey'),
      keywords: ['trayectoria', 'journey', 'historia', 'carrera']
    },
    {
      id: 'nav-toolkit',
      title: t.nav.toolkit,
      description: t.commandPalette.navToolkitDesc,
      category: 'nav',
      icon: <Terminal className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('toolkit'),
      keywords: ['tecnologias', 'toolkit', 'stack', 'python', 'fastapi', 'git', 'linux']
    },
    {
      id: 'nav-contact',
      title: t.nav.contact,
      description: t.commandPalette.navContactDesc,
      category: 'nav',
      icon: <Mail className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection('contact'),
      keywords: ['contacto', 'contact', 'email', 'mensaje', 'escribir']
    },

    // Actions
    {
      id: 'act-theme',
      title: `${t.commandPalette.toggleTheme} (${theme === 'dark' ? t.commandPalette.lightModeLabel : t.commandPalette.darkModeLabel})`,
      description: t.commandPalette.toggleThemeDesc,
      category: 'actions',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        onClose();
      },
      keywords: ['tema', 'theme', 'dark', 'light', 'oscuro', 'claro', 'modo']
    },
    {
      id: 'act-lang',
      title: `${t.commandPalette.toggleLanguage} (${language === 'es' ? 'English' : 'Español'})`,
      description: t.commandPalette.toggleLanguageDesc,
      category: 'actions',
      icon: <Globe className="w-4 h-4 text-emerald-500" />,
      action: () => {
        toggleLanguage();
        onClose();
      },
      keywords: ['idioma', 'language', 'english', 'español', 'translate']
    },
    {
      id: 'act-copy-email',
      title: t.commandPalette.copyEmail,
      description: t.commandPalette.copyEmailDesc,
      category: 'actions',
      icon: <Mail className="w-4 h-4 text-amber-500" />,
      action: copyEmail,
      keywords: ['email', 'correo', 'copiar', 'maahcodev@gmail.com']
    },
    {
      id: 'act-github',
      title: t.commandPalette.actGithubTitle,
      description: t.commandPalette.actGithubDesc,
      category: 'actions',
      icon: <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
      action: () => {
        window.open('https://github.com/macodev-82', '_blank');
        onClose();
      },
      keywords: ['github', 'repo', 'codigo', 'git']
    },
    {
      id: 'act-linkedin',
      title: t.commandPalette.actLinkedinTitle,
      description: t.commandPalette.actLinkedinDesc,
      category: 'actions',
      icon: <Linkedin className="w-4 h-4 text-sky-600" />,
      action: () => {
        window.open('https://www.linkedin.com/in/marcos-alvarez', '_blank');
        onClose();
      },
      keywords: ['linkedin', 'perfil', 'red']
    }
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const cleanQuery = query.toLowerCase().trim();
    const matchTitle = item.title.toLowerCase().includes(cleanQuery);
    const matchDesc = item.description?.toLowerCase().includes(cleanQuery) || false;
    const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(cleanQuery)) || false;
    return matchTitle || matchDesc || matchKeywords;
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const getCategoryBadge = (cat: CommandItem['category']) => {
    switch (cat) {
      case 'tools':
        return t.commandPalette.toolsGroup;
      case 'projects':
        return t.commandPalette.projectsGroup;
      case 'nav':
        return t.commandPalette.navGroup;
      case 'actions':
        return t.commandPalette.actionsGroup;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Palette Box */}
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.commandPalette.placeholder}
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={t.commandPalette.placeholder}
                className="w-full bg-transparent border-none text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                <span>ESC</span>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-2">
                  <p className="text-sm">
                    {t.commandPalette.noResults} <span className="font-semibold text-slate-700 dark:text-slate-200">"{query}"</span>
                  </p>
                  <p className="text-xs">Prueba buscando "FastAPI", "Terminal", "CV", "Tema" o "Contacto"</p>
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-slate-900 dark:text-white'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold truncate flex items-center gap-2">
                            <span>{item.title}</span>
                          </h4>
                          {item.description && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hidden sm:inline-block">
                          {getCategoryBadge(item.category)}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-500 translate-x-0.5' : 'text-slate-300 dark:text-slate-700'}`} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{t.commandPalette.footerHint}</span>
              <span className="hidden sm:inline-block text-amber-600 dark:text-amber-400 font-semibold">~/maahcodev</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
