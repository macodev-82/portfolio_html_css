import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';
import {
  Sun,
  Moon,
  Globe,
  Bell,
  Menu,
  X,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Server,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenCommandPalette?: () => void;
  onOpenTerminal?: () => void;
  onOpenApiDocs?: () => void;
  onOpenResume?: () => void;
  onOpenBenchmarks?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenApiDocs,
  onOpenResume,
  onOpenBenchmarks,
}) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { unreadCount, toggleDrawer } = useNotifications();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'services', 'about', 'journey', 'toolkit', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'journey', label: t.nav.journey, href: '#journey' },
    { id: 'toolkit', label: t.nav.toolkit, href: '#toolkit' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              id="brand-logo-link"
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2 text-slate-900 dark:text-slate-100 font-mono text-base sm:text-lg font-bold tracking-tight focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md py-1 px-2 -ml-2 transition-colors"
            >
              <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform duration-200">~/</span>
              <span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">maahcodev</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" title={t.nav.availableBadge} />
            </a>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav"
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/50 backdrop-blur-sm"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full whitespace-nowrap shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs dark:shadow-[0_0_12px_rgba(245,158,11,0.15)] -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Controls & Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 lg:ml-3">
              {/* Group B: Developer Tools */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Command Palette Button */}
                {onOpenCommandPalette && (
                  <button
                    id="btn-header-command-palette"
                    onClick={onOpenCommandPalette}
                    className="h-9 flex items-center gap-1.5 px-2.5 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs group"
                    title="Abrir paleta de comandos (⌘K / Ctrl+K)"
                    aria-label="Abrir paleta de comandos"
                  >
                    <Terminal className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="hidden xl:inline text-[11px] font-sans">Buscar</span>
                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
                      ⌘K
                    </kbd>
                  </button>
                )}

                {/* Terminal Quick Button */}
                {onOpenTerminal && (
                  <button
                    id="btn-header-quick-terminal"
                    onClick={onOpenTerminal}
                    className="hidden md:flex h-9 items-center gap-1 px-2.5 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                    title="Abrir Shell Linux Maahcodev"
                    aria-label="Abrir Terminal Linux"
                  >
                    <span className="text-emerald-500 font-bold">&gt;_</span>
                    <span className="hidden xl:inline">Shell</span>
                  </button>
                )}

                {/* API Docs Quick Button */}
                {onOpenApiDocs && (
                  <button
                    id="btn-header-quick-api"
                    onClick={onOpenApiDocs}
                    className="hidden md:flex h-9 items-center gap-1 px-2.5 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                    title="Abrir FastAPI Swagger UI (/docs)"
                    aria-label="Abrir FastAPI Swagger UI"
                  >
                    <span className="text-amber-500 font-bold">/docs</span>
                  </button>
                )}

                {/* CV Quick Button */}
                {onOpenResume && (
                  <button
                    id="btn-header-quick-cv"
                    onClick={onOpenResume}
                    className="hidden sm:flex h-9 items-center gap-1 px-2.5 rounded-lg text-xs font-mono font-bold border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                    title="Ver Curriculum Vitae (PDF / ATS)"
                    aria-label="Ver Curriculum Vitae"
                  >
                    <span className="text-sky-500">CV</span>
                  </button>
                )}
              </div>

              {/* Group C: User Preferences */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Language Switcher */}
                <button
                  id="btn-language-toggle"
                  onClick={toggleLanguage}
                  className="h-9 flex items-center gap-1.5 px-2.5 rounded-lg text-xs font-mono font-semibold border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  title={t.nav.switchToEn}
                  aria-label={t.nav.switchToEn}
                >
                  <Globe className="w-3.5 h-3.5 text-amber-500" />
                  <span className="uppercase">{language}</span>
                </button>

                {/* Theme Switcher (Dark / Light) */}
                <button
                  id="btn-theme-toggle"
                  onClick={toggleTheme}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  title={t.nav.toggleTheme}
                  aria-label="Alternar tema claro u oscuro"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700" />
                  )}
                </button>

                {/* Push Notification Center Trigger */}
                <button
                  id="btn-notifications-drawer"
                  onClick={toggleDrawer}
                  className="relative h-9 w-9 inline-flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  title={t.nav.notifications}
                  aria-label={`Centro de notificaciones. ${unreadCount} no leídas`}
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-slate-950 animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Group D: Primary CTA */}
              <a
                id="btn-header-start-project"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden lg:inline-flex items-center gap-1.5 h-9 px-4 ml-1 sm:ml-2 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 text-xs font-semibold tracking-wide whitespace-nowrap transition-all shadow-xs hover:shadow-amber-500/20"
              >
                <span>{t.nav.startProject}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-30 lg:hidden bg-slate-50/98 dark:bg-slate-900/98 border-b border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl px-4 pt-4 pb-6"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-slate-400">#{link.id}</span>
                </a>
              ))}
            </div>

            {/* Quick Interactive Tools in Mobile Menu */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-200"
                >
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>Buscar (⌘K)</span>
                </button>
              )}

              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold"
                >
                  <span>&gt;_</span>
                  <span>Terminal Linux</span>
                </button>
              )}

              {onOpenApiDocs && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApiDocs();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-sky-600 dark:text-sky-400"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>FastAPI Docs</span>
                </button>
              )}

              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-amber-600 dark:text-amber-400"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>CV / Resume</span>
                </button>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                id="btn-mobile-start-project"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all"
              >
                <span>{t.nav.startProject}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  FastAPI · Python · Linux
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
