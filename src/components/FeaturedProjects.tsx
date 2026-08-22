import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA } from '../data/translations';
import { Project } from '../types';
import {
  Lock,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Sparkles,
  Layers,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionGlow } from './Atmosphere';

interface FeaturedProjectsProps {
  onOpenApiDocs?: () => void;
  onOpenTerminal?: () => void;
  onOpenProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenApiDocs,
  onOpenTerminal,
  onOpenProject,
}) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'backend' | 'learning'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') return p.category === 'fullstack';
    if (activeFilter === 'backend') return p.category === 'backend' || p.category === 'fullstack';
    if (activeFilter === 'learning') return p.category === 'learning' || p.category === 'lab';
    return true;
  });

  const familyMovie = PROJECTS_DATA.find(p => p.id === 'familymovie')!;
  const otherProjects = PROJECTS_DATA.filter(p => p.id !== 'familymovie');

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative isolate overflow-hidden"
    >
      <SectionGlow variant="amber" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
              {t.projects.sectionNumber}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto">
            {[
              { id: 'all', label: t.projects.filterAll },
              { id: 'fullstack', label: t.projects.filterFullstack },
              { id: 'learning', label: t.projects.filterLearning },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-btn-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display */}
        <div className="space-y-8">

          {/* Main Featured Project: FamilyMovie (Large Hero Card) */}
          {(activeFilter === 'all' || activeFilter === 'fullstack') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="atmos-card rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                {/* Left Visual Architecture Mockup */}
                <div className="lg:col-span-6 bg-slate-950 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between text-slate-300 font-mono">

                  {/* Mockup Header */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="text-slate-400 font-bold">{familyMovie.mockup.headerTag}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-amber-400 font-bold">
                      {familyMovie.accessType.toUpperCase()}
                    </span>
                  </div>

                  {/* Mockup Body Content */}
                  <div className="my-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-bold tracking-wider">{familyMovie.mockup.title}</span>
                      <div className="flex gap-3 text-[11px] text-emerald-400">
                        {familyMovie.mockup.stats?.map(s => (
                          <span key={s.label}>{s.label}: {s.value}</span>
                        ))}
                      </div>
                    </div>

                    {/* Architecture diagram wireframe */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>PRIVATE ARCHITECTURE</span>
                        <span className="text-amber-400">READ-ONLY MODE</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
                        {['FastAPI Server', 'HTTPX Async', 'Memory Cache', 'Tailwind UI'].map((node, i) => (
                          <div key={node} className="p-2 rounded bg-slate-800/80 border border-slate-700 text-slate-200">
                            {node}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sample Elements list */}
                    <div className="space-y-1.5 text-xs">
                      {familyMovie.mockup.elements.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-slate-200">{item.title}</span>
                            <span className="text-slate-500 text-[11px] block">{item.subtitle}</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-mono">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mockup Footer */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span>FastAPI · HTTPX</span>
                    <span>pytest 100% PASS</span>
                    <span>Web UI</span>
                  </div>

                </div>

                {/* Right Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        {familyMovie.number}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                        {familyMovie.badge[language]}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {familyMovie.title}
                    </h3>

                    <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400 font-mono">
                      {familyMovie.tagline[language]}
                    </h4>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {familyMovie.summary[language]}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {familyMovie.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      id="btn-view-case-study-familymovie"
                      onClick={() => onOpenProject(familyMovie)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-950 text-xs font-bold transition-all shadow-xs"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{t.projects.btnViewCaseStudy}</span>
                    </button>

                    <span className="text-xs font-mono text-slate-400">
                      {familyMovie.status[language]}
                    </span>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* Secondary 2-Column Projects: Master Python & NodeDrive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects
              .filter(p => {
                if (activeFilter === 'all') return true;
                if (activeFilter === 'learning') return true;
                if (activeFilter === 'backend') return true;
                return true;
              })
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Visual Card Mockup */}
                  <div className="bg-slate-950 p-5 border-b border-slate-800 text-slate-300 font-mono">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="text-slate-400 font-bold">{project.mockup.headerTag}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-amber-400 font-bold uppercase">
                        {project.accessType}
                      </span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-xs font-bold text-slate-300 tracking-wider">
                        {project.mockup.title}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                        {project.mockup.elements.slice(0, 2).map((el, idx) => (
                          <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 truncate">
                            <span className="text-slate-200 block truncate">{el.title}</span>
                            <span className="text-[10px] text-amber-400">{el.tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                          {project.number}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {project.badge[language]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary[language]}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <button
                        id={`btn-view-case-study-${project.id}`}
                        onClick={() => onOpenProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-950 text-xs font-bold transition-all"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t.projects.btnViewCaseStudy}</span>
                      </button>

                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {project.status[language]}
                      </span>
                    </div>

                  </div>
                </motion.div>
              ))}
          </div>

          {/* Interactive Project Telemetry & API Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  ¿Quieres probar los endpoints y suites de prueba en vivo?
                </span>
                <span className="text-[11px] text-slate-500">
                  Explora la documentación interactiva OpenAPI 3.1.0 o ejecuta pytest en el shell web.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              {onOpenApiDocs && (
                <button
                  id="btn-projects-open-api"
                  onClick={onOpenApiDocs}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  <span className="text-amber-500">/docs</span> Swagger
                </button>
              )}

              {onOpenTerminal && (
                <button
                  id="btn-projects-open-terminal"
                  onClick={onOpenTerminal}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-mono font-bold hover:opacity-90 transition-opacity shadow-2xs"
                >
                  &gt;_ Terminal
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
