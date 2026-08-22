import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  X,
  Play,
  Copy,
  Check,
  Download,
  Server,
  ChevronRight,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/translations';
import { useModalA11y } from '../hooks/useModalA11y';

interface ApiDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type HttpMethod = 'GET';

interface ApiEndpoint {
  id: string;
  path: string;
  method: HttpMethod;
  summary: { es: string; en: string };
  description: { es: string; en: string };
  tag: string;
  parameters?: {
    name: string;
    in: 'query' | 'path';
    required: boolean;
    description: { es: string; en: string };
    defaultVal: string;
  }[];
}

// Demo API base URL. This is a local-dev convention (matches how a FastAPI
// app is served with `uvicorn main:app` locally) — it is not a claim that a
// live production API exists at this address.
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

const PROJECT_IDS = PROJECTS_DATA.map((p) => p.id);

export const ApiDocsModal: React.FC<ApiDocsModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const { addToast } = useNotifications();

  const [activeTab, setActiveTab] = useState<'interactive' | 'spec'>('interactive');
  const [selectedEndpointId, setSelectedEndpointId] = useState<string>('get-projects');

  const [paramValues, setParamValues] = useState<Record<string, string>>({
    category: 'all',
    project_id: PROJECT_IDS[0] ?? 'familymovie',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<{
    status: number;
    statusText: string;
    body: any;
  } | null>(null);

  const [activeCodeLang, setActiveCodeLang] = useState<'curl' | 'python' | 'js'>('curl');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useModalA11y(isOpen, onClose, containerRef);

  const endpoints: ApiEndpoint[] = [
    {
      id: 'get-projects',
      path: '/projects',
      method: 'GET',
      tag: 'Projects & Case Studies',
      summary: {
        es: 'Obtener catálogo de proyectos reales del portfolio',
        en: 'Retrieve the portfolio’s real project catalog'
      },
      description: {
        es: 'Devuelve la lista real de proyectos con su estado, categoría y stack de tecnologías.',
        en: 'Returns the real list of projects with their status, category, and technology stack.'
      },
      parameters: [
        {
          name: 'category',
          in: 'query',
          required: false,
          description: {
            es: 'Filtrar por categoría (all, fullstack, learning)',
            en: 'Filter by category (all, fullstack, learning)'
          },
          defaultVal: 'all'
        },
      ],
    },
    {
      id: 'get-project-by-id',
      path: '/projects/{project_id}',
      method: 'GET',
      tag: 'Projects & Case Studies',
      summary: {
        es: 'Consultar el caso de estudio de un proyecto',
        en: 'Look up a single project’s case study'
      },
      description: {
        es: 'Devuelve la descripción, arquitectura y funciones verificadas del proyecto solicitado.',
        en: 'Returns the description, architecture, and verified features for the requested project.'
      },
      parameters: [
        {
          name: 'project_id',
          in: 'path',
          required: true,
          description: {
            es: `Identificador del proyecto (${PROJECT_IDS.join(', ')})`,
            en: `Project identifier (${PROJECT_IDS.join(', ')})`
          },
          defaultVal: PROJECT_IDS[0] ?? 'familymovie'
        }
      ],
    },
  ];

  const currentEndpoint = endpoints.find((e) => e.id === selectedEndpointId) || endpoints[0];

  const computeResponseBody = (endpoint: ApiEndpoint) => {
    if (endpoint.id === 'get-project-by-id') {
      const project = PROJECTS_DATA.find((p) => p.id === paramValues.project_id) ?? PROJECTS_DATA[0];
      return {
        id: project.id,
        title: project.title,
        status: project.status[language],
        category: project.category,
        summary: project.summary[language],
        architecture_notes: project.architectureNotes[language],
        verified_features: project.keyDeliverables[language],
        technologies: project.technologies,
      };
    }

    const items = PROJECTS_DATA.filter(
      (p) => paramValues.category === 'all' || p.category === paramValues.category
    ).map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      status: p.status[language],
      technologies: p.technologies,
    }));

    return { status: 'ok', count: items.length, items };
  };

  const toggleEndpoint = (id: string) => {
    setSelectedEndpointId(id);
    setResponseOutput(null);
  };

  const handleExecute = () => {
    setIsLoading(true);
    setResponseOutput(null);

    window.setTimeout(() => {
      setResponseOutput({
        status: 200,
        statusText: 'OK',
        body: computeResponseBody(currentEndpoint),
      });
      setIsLoading(false);
    }, 350);
  };

  const getCurrentUrl = () => {
    if (currentEndpoint.id === 'get-project-by-id') {
      return `${API_BASE_URL}/projects/${paramValues.project_id}`;
    }
    if (paramValues.category !== 'all') {
      return `${API_BASE_URL}/projects?category=${paramValues.category}`;
    }
    return `${API_BASE_URL}/projects`;
  };

  const generateCurl = () => {
    return `curl -X GET "${getCurrentUrl()}" \\\n  -H "Accept: application/json"`;
  };

  const generatePython = () => {
    return `import httpx
import asyncio

async def fetch_api():
    async with httpx.AsyncClient(timeout=10.0) as client:
        response = await client.get("${getCurrentUrl()}")
        print(f"Status: {response.status_code}")
        print(response.json())

if __name__ == "__main__":
    asyncio.run(fetch_api())`;
  };

  const generateJs = () => {
    return `// Fetch example
async function callApi() {
  const res = await fetch("${getCurrentUrl()}");
  const data = await res.json();
  console.log(data);
}

callApi();`;
  };

  const getCodeSnippet = () => {
    switch (activeCodeLang) {
      case 'python':
        return generatePython();
      case 'js':
        return generateJs();
      default:
        return generateCurl();
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopiedSnippet(true);
    addToast({
      title: t.apiDocs.copiedSuccess,
      message: '',
      type: 'success',
    });
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleDownloadSpec = () => {
    const spec = {
      openapi: '3.1.0',
      info: {
        title: 'Maahcodev Portfolio API Playground',
        version: '1.0.0',
        description: 'Demo interface over real portfolio project data. Not a production service.',
      },
      servers: [{ url: API_BASE_URL, description: 'Local demo environment' }],
      paths: endpoints.reduce((acc: any, ep) => {
        acc[ep.path] = {
          get: {
            summary: ep.summary.es,
            tags: [ep.tag],
            responses: {
              '200': { description: 'OK' }
            }
          }
        };
        return acc;
      }, {})
    };
    const blob = new Blob([JSON.stringify(spec, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'maahcodev-api-playground-spec.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.apiDocs.title}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {t.apiDocs.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/30">
                      DEMO
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t.apiDocs.serverUrl}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handleDownloadSpec}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 text-xs font-mono font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.apiDocs.downloadSpec}</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label={t.apiDocs.btnClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="px-5 py-2.5 bg-slate-100/70 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setActiveTab('interactive')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'interactive'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-xs border border-slate-200 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t.apiDocs.tabEndpoints}
                </button>
                <button
                  onClick={() => setActiveTab('spec')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'spec'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-xs border border-slate-200 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t.apiDocs.tabRawSpec}
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {activeTab === 'interactive' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Endpoints
                    </h4>

                    <div className="space-y-2">
                      {endpoints.map((ep) => {
                        const isSelected = selectedEndpointId === ep.id;
                        return (
                          <div
                            key={ep.id}
                            onClick={() => toggleEndpoint(ep.id)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500/40 shadow-xs'
                                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                                  {ep.method}
                                </span>
                                <code className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100 truncate">
                                  {ep.path}
                                </code>
                              </div>
                              <ChevronRight
                                className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-amber-500' : ''}`}
                              />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-1">
                              {ep.summary[language]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-sky-500 text-white">
                            {currentEndpoint.method}
                          </span>
                          <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                            {currentEndpoint.path}
                          </span>
                        </div>

                        <button
                          id="btn-execute-api-call"
                          onClick={handleExecute}
                          disabled={isLoading}
                          className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all shadow-sm active:scale-98 disabled:opacity-50"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isLoading ? t.apiDocs.loadingRequest : t.apiDocs.btnExecute}</span>
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {currentEndpoint.description[language]}
                      </p>

                      {currentEndpoint.parameters && currentEndpoint.parameters.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <div className="space-y-2">
                            {currentEndpoint.parameters.map((p) => (
                              <div
                                key={p.name}
                                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                              >
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                                      {p.name}
                                    </span>
                                    <span className="text-[10px] font-mono text-slate-400">
                                      ({p.in})
                                    </span>
                                  </div>
                                  <span className="text-[11px] text-slate-500">{p.description[language]}</span>
                                </div>

                                {p.name === 'category' ? (
                                  <select
                                    value={paramValues.category}
                                    onChange={(e) =>
                                      setParamValues((prev) => ({ ...prev, category: e.target.value }))
                                    }
                                    className="px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white"
                                  >
                                    <option value="all">all</option>
                                    <option value="fullstack">fullstack</option>
                                    <option value="learning">learning</option>
                                  </select>
                                ) : p.name === 'project_id' ? (
                                  <select
                                    value={paramValues.project_id}
                                    onChange={(e) =>
                                      setParamValues((prev) => ({ ...prev, project_id: e.target.value }))
                                    }
                                    className="px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white"
                                  >
                                    {PROJECT_IDS.map((id) => (
                                      <option key={id} value={id}>{id}</option>
                                    ))}
                                  </select>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-900">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-950/80">
                        <div className="flex items-center gap-2">
                          {(['curl', 'python', 'js'] as const).map((lang) => (
                            <button
                              key={lang}
                              onClick={() => setActiveCodeLang(lang)}
                              className={`px-2.5 py-1 rounded text-xs font-mono uppercase transition-colors ${
                                activeCodeLang === lang
                                  ? 'bg-amber-500 text-slate-950 font-bold'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {lang === 'js' ? 'Fetch JS' : lang}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={handleCopyCode}
                          className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        >
                          {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{t.apiDocs.copySnippet}</span>
                        </button>
                      </div>
                      <pre className="p-3.5 text-xs font-mono text-slate-200 overflow-x-auto">
                        <code>{getCodeSnippet()}</code>
                      </pre>
                    </div>

                    {responseOutput && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-emerald-500/30 overflow-hidden bg-slate-900 shadow-xl space-y-0"
                      >
                        <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-950/40 border-b border-emerald-500/20 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-emerald-400 font-bold">
                              {responseOutput.status} {responseOutput.statusText}
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 max-h-64 overflow-y-auto">
                          <pre className="text-xs font-mono text-emerald-300/90 leading-relaxed">
                            <code>{JSON.stringify(responseOutput.body, null, 2)}</code>
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'spec' && (
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-4">
                  <pre className="text-xs font-mono text-emerald-400 overflow-x-auto max-h-[500px]">
                    <code>{JSON.stringify({
                      openapi: '3.1.0',
                      info: {
                        title: 'Maahcodev Portfolio API Playground',
                        version: '1.0.0',
                        description: 'Demo interface over real portfolio project data. Not a production service.'
                      },
                      servers: [{ url: API_BASE_URL, description: 'Local demo environment' }],
                      paths: endpoints.reduce((acc: any, ep) => {
                        acc[ep.path] = {
                          get: {
                            summary: ep.summary.es,
                            tags: [ep.tag],
                            responses: {
                              '200': { description: 'OK' }
                            }
                          }
                        };
                        return acc;
                      }, {})
                    }, null, 2)}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{t.apiDocs.environment}</span>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                {t.apiDocs.btnClose}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
