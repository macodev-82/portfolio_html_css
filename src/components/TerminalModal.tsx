import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  CornerDownLeft,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/translations';
import { useModalA11y } from '../hooks/useModalA11y';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onOpenApiDocs?: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenApiDocs,
}) => {
  const { t, language } = useLanguage();
  const { addToast } = useNotifications();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useModalA11y(isOpen, onClose, containerRef);

  const availableCommands = [
    'help',
    'whoami',
    'skills',
    'projects',
    'cat about.py',
    'cat stack.json',
    'pytest',
    'cv',
    'api',
    'date',
    'clear',
    'exit'
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      if (history.length === 0) {
        // Initial greeting
        setHistory([
          {
            id: 'init-0',
            command: 'system.boot()',
            timestamp: new Date().toLocaleTimeString(),
            output: (
              <div className="space-y-2 text-slate-300 font-mono text-xs">
                <div className="text-amber-400 font-bold">
                  {`
  __  __                  _                    _
 |  \\/  | __ _  __ _     | |__   ___ ___   __| | _____   __
 | |\\/| |/ _\` |/ _\` |____| '_ \\ / __/ _ \\ / _\` |/ _ \\ \\ / /
 | |  | | (_| | (_| |____| | | | (_| (_) | (_| |  __/\\ V /
 |_|  |_|\\__,_|\\__,_|    |_| |_|\\___\\___/ \\__,_|\\___| \\_/
                  `}
                </div>
                <div className="text-slate-400">
                  Maahcodev Portfolio Terminal — Portfolio UI, contenido real y público
                </div>
                <div className="text-emerald-400">
                  ● Disponible para proyectos seleccionados
                </div>
                <div className="text-slate-400 pt-1">
                  Escribe <span className="text-amber-400 font-bold">help</span> para listar comandos.
                </div>
              </div>
            )
          }
        ]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim();
    if (!cleanCmd) return;

    setCommandList((prev) => [...prev, cleanCmd]);
    setHistoryIndex(-1);

    const parts = cleanCmd.toLowerCase().split(' ');
    const mainCmd = parts[0];

    let outputNode: React.ReactNode = null;

    switch (cleanCmd.toLowerCase()) {
      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <div className="text-amber-400 font-bold">Comandos disponibles en el shell:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-slate-300">
              <div><span className="text-emerald-400 font-bold">whoami</span> - Perfil y resumen profesional</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Matriz de tecnologías y herramientas</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Listado de proyectos reales</div>
              <div><span className="text-emerald-400 font-bold">pytest</span> - Ver verificación técnica real</div>
              <div><span className="text-emerald-400 font-bold">cat about.py</span> - Perfil en formato código</div>
              <div><span className="text-emerald-400 font-bold">cat stack.json</span> - Stack técnico en JSON</div>
              <div><span className="text-emerald-400 font-bold">cv</span> - Abrir CV (PDF/ATS)</div>
              <div><span className="text-emerald-400 font-bold">api</span> - Abrir API Playground (demo)</div>
              <div><span className="text-emerald-400 font-bold">date</span> - Fecha y hora actual</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Limpiar pantalla</div>
              <div><span className="text-emerald-400 font-bold">exit</span> - Cerrar terminal</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs font-mono text-amber-400 font-bold">maahcodev</div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-amber-400 font-bold">Tecnologías & Competencias:</div>
            <div className="space-y-1 text-slate-300">
              <div><span className="text-sky-400">[Backend]:</span> Python, FastAPI, HTTPX, pytest</div>
              <div><span className="text-emerald-400">[Frontend]:</span> HTML, CSS, JavaScript, Jinja2, Tailwind CSS</div>
              <div><span className="text-purple-400">[Workflow]:</span> Git, GitHub, Linux, Ubuntu, uv</div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-amber-400 font-bold">Proyectos destacados:</div>
            {PROJECTS_DATA.map((p, i) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-emerald-400 font-bold">{i + 1}. {p.title} ({p.status.es})</div>
                <div className="text-slate-400 text-[11px]">{p.summary.es}</div>
                <div className="text-amber-400 text-[10px] pt-0.5">Stack: {p.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat about.py':
        outputNode = (
          <pre className="text-xs font-mono text-emerald-400 bg-slate-950 p-3 rounded border border-slate-800 overflow-x-auto">
{`# about_maahcodev.py
from dataclasses import dataclass
from typing import List

@dataclass
class Developer:
    name: str = "Marcos Alvarez"
    handle: str = "maahcodev"
    stack: List[str] = ("Python", "FastAPI", "Linux", "Tailwind")
    focus: str = "Clarity before complexity. Scalable, validated APIs."

    def get_status(self) -> str:
        return "Available for select freelance & backend contracts."

if __name__ == "__main__":
    dev = Developer()
    print(dev.get_status())`}
          </pre>
        );
        break;

      case 'cat stack.json':
        outputNode = (
          <pre className="text-xs font-mono text-sky-400 bg-slate-950 p-3 rounded border border-slate-800 overflow-x-auto">
{`{
  "developer": "Marcos Alvarez",
  "brand": "Maahcodev",
  "backend": {
    "language": "Python",
    "web_framework": "FastAPI",
    "async_client": "HTTPX",
    "testing": "pytest"
  },
  "workflow": {
    "os": "Linux (Ubuntu)",
    "vcs": "Git / GitHub"
  }
}`}
          </pre>
        );
        break;

      case 'pytest':
      case 'pytest -v':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <div className="text-amber-400 font-bold">Verificación técnica real:</div>
            <div className="pt-1 space-y-1 text-slate-300">
              <div><span className="text-emerald-400 font-bold">149</span> pruebas automatizadas — FamilyMovie (Ruff, compileall, validación de sintaxis JS)</div>
              <div><span className="text-emerald-400 font-bold">39</span> ejercicios validados — Cheat Sheet — Master Python 2026</div>
            </div>
            <div className="text-slate-500 pt-1">No se publican cifras de rendimiento o cobertura sin evidencia verificable.</div>
          </div>
        );
        break;

      case 'cv':
      case 'resume':
        if (onOpenResume) {
          onClose();
          onOpenResume();
          return;
        }
        outputNode = <div className="text-emerald-400 text-xs font-mono">Abriendo Curriculum Vitae...</div>;
        break;

      case 'api':
      case 'docs':
      case 'swagger':
        if (onOpenApiDocs) {
          onClose();
          onOpenApiDocs();
          return;
        }
        outputNode = <div className="text-emerald-400 text-xs font-mono">Abriendo Swagger UI Explorer...</div>;
        break;

      case 'date':
        outputNode = <div className="text-xs font-mono text-slate-300">{new Date().toString()}</div>;
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            zsh: command not found: {cleanCmd}. Escribe <span className="text-amber-400 font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> para ver los comandos válidos.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cleanCmd,
        output: outputNode,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandList.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(commandList[nextIdx]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.toLowerCase().trim();
      if (current) {
        const match = availableCommands.find((c) => c.startsWith(current));
        if (match) {
          setInputVal(match);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Terminal Window Box */}
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.terminalModal.title}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className={`relative w-full ${
              isFullScreen ? 'max-w-7xl h-[94vh]' : 'max-w-4xl h-[640px]'
            } bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 font-mono`}
          >
            {/* Terminal Titlebar */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
                  title="Cerrar terminal"
                  aria-label="Cerrar terminal"
                />
                <button
                  onClick={() => setHistory([])}
                  className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"
                  title="Limpiar pantalla"
                  aria-label="Limpiar pantalla"
                />
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"
                  title="Maximizar / Restaurar"
                  aria-label="Maximizar o restaurar terminal"
                />
                <span className="text-xs text-slate-400 ml-3 hidden sm:inline-block">
                  maahcodev — portfolio terminal
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                  Python 3.12
                </span>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Canvas Area */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-950 text-slate-100 cursor-text"
            >
              {history.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">maahcodev:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                    <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
                  </div>
                  <div className="pl-0">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Input Line */}
              <div className="flex items-center gap-2 text-xs pt-1">
                <span className="text-emerald-400 font-bold shrink-0">maahcodev:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent border-none text-white focus:outline-hidden font-mono text-xs"
                />
                <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block shrink-0" />
              </div>

              <div ref={terminalEndRef} />
            </div>

            {/* Footer Toolbar */}
            <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Accesos rápidos:</span>
                {['whoami', 'projects', 'pytest', 'skills', 'cv', 'help'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
              <span className="hidden md:inline text-slate-500">Tab para autocompletar</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
