import React, { useRef, useState } from 'react';
import { Project, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useModalA11y } from '../hooks/useModalA11y';
import {
  X,
  CheckCircle2,
  ExternalLink,
  Code2,
  ShieldCheck,
  Layers,
  Activity,
  Terminal,
  Play,
  Film,
  Search,
  Star,
  Folder,
  FileCode,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'security' | 'metrics' | 'demo'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive sandbox state for FamilyMovie demo
  const [selectedMovie, setSelectedMovie] = useState<string>('Inception (2010)');
  const [streamingLog, setStreamingLog] = useState<string>('Streaming token signed · 1080p direct play · 0 buffered drops');

  // Interactive sandbox state for Master Python demo
  const [selectedExercise, setSelectedExercise] = useState<number>(1);
  const [exerciseCode, setExerciseCode] = useState<string>('evens = [x for x in range(20) if x % 2 == 0]');
  const [validationPassed, setValidationPassed] = useState<boolean>(true);

  // Interactive sandbox state for NodeDrive demo
  const [currentFolder, setCurrentFolder] = useState<string>('/fastapi-app/backend');
  const [filesInView, setFilesInView] = useState<string[]>([
    '__init__.py', 'main.py', 'routes.py', 'models.py', 'test_endpoints.py'
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  useModalA11y(!!project, onClose, containerRef);

  if (!project) return null;

  const handleCopySnippet = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const handleTestCode = () => {
    setValidationPassed(true);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 }
    });
  };

  return (
    <AnimatePresence>
      <div
        id="case-study-modal-backdrop"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          id="case-study-modal-container"
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                {project.number}
              </span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.status[language]}
              </span>
            </div>

            <button
              id="btn-close-case-study"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.projects.modalClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 overflow-x-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {t.projects.tabs.overview}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {t.projects.tabs.architecture}
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-3 py-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'security'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {t.projects.tabs.security}
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'metrics'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {t.projects.tabs.metrics}
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-2 border-b-2 font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-amber-500" />
              {t.projects.tabs.demo}
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 dark:text-slate-300 text-sm">

            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold mb-1">
                    {project.tagline[language]}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-900 dark:text-white font-medium leading-relaxed">
                    {project.summary[language]}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase font-mono mb-2 flex items-center gap-1.5 text-rose-500">
                      <Activity className="w-4 h-4" />
                      {t.projects.sectionChallenge}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.challenge[language]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase font-mono mb-2 flex items-center gap-1.5 text-emerald-500">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.projects.sectionSolution}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.solution[language]}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-3">
                    {t.projects.sectionDeliverables}
                  </h4>
                  <ul className="space-y-2">
                    {project.keyDeliverables[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-2">
                    {t.projects.sectionTechnologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: ARCHITECTURE & CODE */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold mb-2">
                    {t.projects.sectionArchitecture}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.architectureNotes[language]}
                  </p>
                </div>

                {project.codeSnippet && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-amber-400" />
                        <span className="text-slate-300 text-xs font-semibold">
                          {project.codeSnippet.title}
                        </span>
                      </div>
                      <button
                        onClick={handleCopySnippet}
                        className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-amber-300/90 font-mono">
                      <code>{project.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* TAB: SECURITY */}
            {activeTab === 'security' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Principio de Menor Privilegio & Modo Solo Lectura</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Todas las llamadas entrantes son sanitizadas contra inyecciones y validadas mediante esquemas estrictos de Pydantic. Las credenciales maestras nunca son enviadas al navegador del usuario.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">Sanitización</span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs mt-1 block">Path Traversal Safe</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">Tokens</span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs mt-1 block">Scoped Read-Only</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">Caché</span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs mt-1 block">In-Memory TTL</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: METRICS */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <h4 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white">
                  {t.projects.sectionResults}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {m.label[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: INTERACTIVE DEMO */}
            {activeTab === 'demo' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">
                    Simulador en vivo del módulo
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    MODO INTERACTIVO
                  </span>
                </div>

                {project.id === 'familymovie' && (
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                      <span>EMBY CATALOG STREAM CHECKER</span>
                      <span>FastAPI v0.115</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {['Inception (2010)', 'Interstellar (2014)', 'Blade Runner 2049'].map((title) => (
                        <button
                          key={title}
                          onClick={() => {
                            setSelectedMovie(title);
                            setStreamingLog(`Fetch metadata for ${title} -> HTTP 200 OK (38ms)`);
                          }}
                          className={`p-2 rounded border text-left flex items-center justify-between ${
                            selectedMovie === title ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700'
                          }`}
                        >
                          <span>{title}</span>
                          <Play className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                    <div className="p-2.5 rounded bg-slate-950 text-emerald-400 text-[11px] font-mono border border-slate-800">
                      {streamingLog}
                    </div>
                  </div>
                )}

                {project.id === 'master-python' && (
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                      <span>EJERCICIO #01: LIST COMPREHENSIONS</span>
                      <span>PYDANTIC VALIDATOR</span>
                    </div>
                    <div className="text-xs text-slate-300">
                      Tarea: Generar los números pares entre 0 y 20 usando comprensión de listas.
                    </div>
                    <input
                      type="text"
                      value={exerciseCode}
                      onChange={(e) => setExerciseCode(e.target.value)}
                      className="w-full p-2.5 rounded bg-slate-950 border border-slate-700 text-amber-300 font-mono text-xs focus:border-amber-500 focus:outline-hidden"
                    />
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={handleTestCode}
                        className="px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                      >
                        Validar Solución con Pytest
                      </button>
                      {validationPassed && (
                        <span className="text-emerald-400 text-xs flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> 100% Passed · Output: [0, 2, 4, ..., 18]
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {project.id === 'nodedrive' && (
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                      <span>SEAFILE READ-ONLY DIRECTORY BROWSER</span>
                      <span>PATH: {currentFolder}</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      {filesInView.map((f) => (
                        <div key={f} className="p-2 rounded bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <FileCode className="w-3.5 h-3.5 text-amber-400" />
                            {f}
                          </span>
                          <span className="text-[10px] text-slate-400">Read-Only</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Marcos Alvarez · Maahcodev
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition-colors"
            >
              {t.projects.modalClose}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
