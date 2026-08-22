import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  ArrowRight,
  Terminal,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Copy,
  Check,
  Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { SectionGlow } from './Atmosphere';

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenApiDocs?: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onOpenApiDocs,
  onOpenResume,
}) => {
  const { t } = useLanguage();
  const { addToast } = useNotifications();
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '> uvicorn main:app --reload',
    'INFO: Application startup complete.',
    'Stack: Python · FastAPI · HTTPX · pytest',
    t.hero.terminal.logTestsLine,
  ]);

  const layers = [
    {
      id: 0,
      title: t.hero.terminal.item1Title,
      sub: t.hero.terminal.item1Sub,
      status: t.hero.terminal.item1Status,
      statusColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      icon: Cpu,
      logs: [
        '> uvicorn main:app --reload',
        'INFO: Application startup complete.',
        'Stack: Python · FastAPI · HTTPX · pytest',
        t.hero.terminal.logTestsLine
      ]
    },
    {
      id: 1,
      title: t.hero.terminal.item2Title,
      sub: t.hero.terminal.item2Sub,
      status: t.hero.terminal.item2Status,
      statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30',
      icon: Layers,
      logs: [
        '> checking accessibility features...',
        t.hero.terminal.logA11yLine1,
        t.hero.terminal.logA11yLine2,
        'Stack: HTML · CSS · JavaScript · Tailwind CSS'
      ]
    },
    {
      id: 2,
      title: t.hero.terminal.item3Title,
      sub: t.hero.terminal.item3Sub,
      status: t.hero.terminal.item3Status,
      statusColor: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/30',
      icon: Code2,
      logs: [
        '> git status',
        'Workflow: Git · GitHub · Linux · Ubuntu · uv',
        t.hero.terminal.logExercisesLine
      ]
    }
  ];

  const handleLayerClick = (index: number) => {
    setActiveLayer(index);
    setSimulatedLogs(layers[index].logs);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maahcodev@gmail.com');
    setCopiedEmail(true);
    addToast({
      title: t.hero.terminal.emailCopiedTitle,
      message: t.hero.terminal.emailCopiedDesc,
      type: 'success',
    });
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const coreStack = [
    { name: 'Python', primary: true },
    { name: 'FastAPI', primary: true },
    { name: 'HTML', primary: false },
    { name: 'CSS', primary: false },
    { name: 'JavaScript', primary: false },
    { name: 'Git', primary: false },
    { name: 'Linux', primary: false },
  ];

  return (
    <section
      id="hero"
      className="relative isolate pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-sky-500/5 to-emerald-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
      <SectionGlow variant="hero" />

      {/* Sparse decorative technical marks — abstract, non-factual, pure decoration */}
      <div aria-hidden="true" className="hidden lg:flex absolute top-20 right-10 -z-10 font-mono text-[10px] atmos-mark select-none pointer-events-none items-center gap-1">
        <span>+</span>
        <span className="opacity-70">grid_ref::0x1a</span>
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute bottom-10 left-6 -z-10 font-mono text-[10px] atmos-mark select-none pointer-events-none">
        ~/maahcodev/portfolio
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio, Title & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Status and Creator Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.hero.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {t.hero.sub}
              </span>
            </div>

            {/* Display Title with Serif + Sans Pairing */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
                <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 mr-2 sm:mr-3">
                  {t.hero.titlePrimary}
                </span>
                <br className="hidden sm:inline" />
                <span className="font-sans font-extrabold text-slate-900 dark:text-white">
                  {t.hero.titleSecondary}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              {t.hero.description}
            </p>

            {/* CTA Buttons & Action triggers */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                id="hero-btn-view-projects"
                href="#projects"
                className="btn-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>{t.hero.btnViewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenApiDocs && (
                <button
                  id="hero-btn-open-swagger"
                  onClick={onOpenApiDocs}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-mono text-xs font-bold border border-slate-700 transition-all shadow-2xs active:scale-[0.98]"
                  title="Abrir Swagger API Explorer"
                >
                  <Server className="w-3.5 h-3.5 text-amber-400" />
                  <span>FastAPI /docs</span>
                </button>
              )}

              {onOpenTerminal && (
                <button
                  id="hero-btn-open-terminal"
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 font-mono text-xs font-bold border border-slate-300 dark:border-slate-700 transition-all shadow-2xs active:scale-[0.98]"
                  title="Abrir Terminal Linux Interactivo"
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Terminal Linux</span>
                </button>
              )}

              {onOpenResume && (
                <button
                  id="hero-btn-open-resume"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 font-mono text-xs font-bold border border-slate-300 dark:border-slate-700 transition-all shadow-2xs active:scale-[0.98]"
                  title="Ver Curriculum Vitae ATS / PDF"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>CV (ATS)</span>
                </button>
              )}
            </div>

            {/* Core Stack Tags & Social Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                  {t.hero.coreStackTitle}
                </span>

                {/* Social Channel Links */}
                <div className="flex items-center gap-2">
                  <a
                    id="hero-social-github"
                    href="https://github.com/macodev-82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="GitHub: macodev-82"
                    aria-label="Perfil de GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    id="hero-social-linkedin"
                    href="https://www.linkedin.com/in/marcos-alvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="LinkedIn: Marcos Alvarez"
                    aria-label="Perfil de LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <button
                    id="hero-social-copy-email"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Copiar email: maahcodev@gmail.com"
                    aria-label={t.hero.terminal.copyEmailAriaLabel}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {coreStack.map((item) => (
                  <span
                    key={item.name}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                      item.primary
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60'
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Studio & Architecture Composition */}
          <div className="lg:col-span-5">
            <div
              id="hero-interactive-terminal-card"
              className="relative rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 ml-2">
                    {t.hero.terminal.header}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  {t.hero.terminal.status}
                </span>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 space-y-4 font-mono text-xs">

                {/* Profile Prompt Line */}
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-amber-600 dark:text-amber-400 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    {t.hero.terminal.profilePrompt}
                  </span>
                </div>

                {/* Section Header */}
                <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-[11px] pt-1">
                  <span>{t.hero.terminal.systemLabel}</span>
                  <span>{t.hero.terminal.techArch}</span>
                </div>

                {/* Interactive Layers List */}
                <div className="space-y-2">
                  {layers.map((layer, idx) => {
                    const isSelected = activeLayer === idx;
                    const Icon = layer.icon;
                    return (
                      <button
                        key={layer.id}
                        id={`terminal-layer-btn-${idx}`}
                        onClick={() => handleLayerClick(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                          isSelected
                            ? 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500/40 shadow-xs'
                            : 'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-400 font-medium">0{idx + 1}</span>
                              <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                                {layer.title}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                              {layer.sub}
                            </span>
                          </div>
                        </div>

                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${layer.statusColor}`}>
                          {layer.status}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Live Simulated Output Box */}
                <div className="mt-3 p-3 rounded-lg bg-[#E6EDF4] dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-mono text-[11px] space-y-1 overflow-x-auto border border-slate-300/70 dark:border-slate-800">
                  <div className="text-[10px] text-slate-500 dark:text-slate-500 flex items-center justify-between pb-1 border-b border-slate-300/70 dark:border-slate-800">
                    <span>SIMULATED OUTPUT</span>
                    <span className="text-amber-600 dark:text-amber-400">● DEMO</span>
                  </div>
                  {simulatedLogs.map((log, i) => (
                    <p key={i} className={`leading-relaxed ${i === simulatedLogs.length - 1 ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
                      {log}
                    </p>
                  ))}
                </div>

                {/* Footer Principles Pills */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider">
                  <span className="hover:text-amber-500 transition-colors">{t.hero.terminal.clarity}</span>
                  <span>•</span>
                  <span className="hover:text-amber-500 transition-colors">{t.hero.terminal.iteration}</span>
                  <span>•</span>
                  <span className="hover:text-amber-500 transition-colors">{t.hero.terminal.purpose}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
