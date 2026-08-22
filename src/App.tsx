import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { FeaturedProjects } from './components/FeaturedProjects';
import { BenchmarkVisualizer } from './components/BenchmarkVisualizer';
import { Services } from './components/Services';
import { AboutPrinciples } from './components/AboutPrinciples';
import { ProcessSection } from './components/ProcessSection';
import { JourneySection } from './components/JourneySection';
import { ToolkitSection } from './components/ToolkitSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NotificationDrawer } from './components/NotificationDrawer';
import { CommandPalette } from './components/CommandPalette';
import { ApiDocsModal } from './components/ApiDocsModal';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { GlobalAtmosphere, PointerSpotlight, SectionGlow } from './components/Atmosphere';
import { useLanguage } from './context/LanguageContext';
import { Terminal, Server, Award, Sparkles, Command } from 'lucide-react';
import { PROJECTS_DATA } from './data/translations';

export default function App() {
  const { t } = useLanguage();

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isApiDocsOpen, setIsApiDocsOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) ?? null;

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ⌘K or Ctrl+K -> Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // ⌘` or Ctrl+` or Alt+T -> Terminal
      if ((e.metaKey || e.ctrlKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-amber-500/30 selection:text-amber-900 dark:selection:text-amber-200 relative isolate">
      <GlobalAtmosphere />
      <PointerSpotlight />

      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg shadow-lg focus:outline-hidden"
      >
        Saltar al contenido principal / Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Header
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenApiDocs={() => setIsApiDocsOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-hidden">
        {/* Section 00: Hero */}
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenApiDocs={() => setIsApiDocsOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 01: Capabilities */}
        <Capabilities />

        {/* Section 02: Selected Work & Case Studies */}
        <FeaturedProjects
          onOpenApiDocs={() => setIsApiDocsOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenProject={(project) => setSelectedProjectId(project.id)}
        />

        {/* Section: Live Interactive ASGI Benchmark Lab */}
        <section id="benchmarks-lab" className="relative isolate overflow-hidden py-12 sm:py-16 bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200 dark:border-slate-800">
          <SectionGlow variant="lab" grid />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BenchmarkVisualizer />
          </div>
        </section>

        {/* Section 03: Focused Services & Scope Estimator */}
        <Services />

        {/* Section 04: About Maahcodev & Working Principles */}
        <AboutPrinciples />

        {/* Section 05: Work Process */}
        <ProcessSection />

        {/* Section 06: Journey in Brief */}
        <JourneySection />

        {/* Section 07: Skills & Tools */}
        <ToolkitSection />

        {/* Section 08: Start a Project Callout */}
        <CtaBanner />

        {/* Section 09: Contact & Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenApiDocs={() => setIsApiDocsOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Quick Dock for Desktop Power Users */}
      <div className="fixed bottom-5 right-5 z-40 hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-slate-950 text-xs font-mono transition-all group"
          title="Buscar (⌘K)"
        >
          <Command className="w-3.5 h-3.5" />
          <span>⌘K</span>
        </button>

        <button
          onClick={() => setIsTerminalOpen(true)}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-xs font-mono font-bold"
          title="Terminal Shell (>_)"
        >
          &gt;_
        </button>

        <button
          onClick={() => setIsApiDocsOpen(true)}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
          title="FastAPI Swagger UI (/docs)"
        >
          <Server className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
          title="Curriculum Vitae ATS"
        >
          <Award className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenApiDocs={() => setIsApiDocsOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenBenchmarks={() => {
          document.getElementById('benchmarks-lab')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectProject={(projectId) => setSelectedProjectId(projectId)}
      />

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}

      <ApiDocsModal
        isOpen={isApiDocsOpen}
        onClose={() => setIsApiDocsOpen(false)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenApiDocs={() => setIsApiDocsOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Push Notification Drawer & Toast Alerts */}
      <NotificationDrawer />
    </div>
  );
}
