import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  Activity,
  Play,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// Real, verifiable technical facts only — no simulated req/s, latency, or
// uptime figures. Visual structure follows the SOURCE design (header, run
// action, metric grid, insight footer) with honest content.
export const BenchmarkVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const { addToast } = useNotifications();

  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    addToast({
      title: t.benchmarks.title,
      message: t.benchmarks.metricTestsSource,
      type: 'success',
    });
  };

  return (
    <div id="benchmark-lab-widget" className="p-6 sm:p-8 rounded-2xl bg-[#EEF2F6] dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-300 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                {t.benchmarks.badge}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 dark:text-white">
              {t.benchmarks.title}
            </h3>
          </div>
        </div>

        <button
          id="btn-run-stress-benchmark"
          onClick={handleReveal}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-98 font-mono self-start sm:self-auto"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{t.benchmarks.runBenchmarkBtn}</span>
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl">
        {t.benchmarks.subtitle}
      </p>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-60'}`}>
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">{t.benchmarks.metricTestsLabel}</span>
          </div>
          <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">149</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{t.benchmarks.metricTestsSource}</div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">{t.benchmarks.metricExercisesLabel}</span>
          </div>
          <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">39</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{t.benchmarks.metricExercisesSource}</div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 space-y-2">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">{t.benchmarks.metricAccessLabel}</span>
          </div>
          <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">{t.benchmarks.metricAccessValue}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{t.benchmarks.metricAccessSource}</div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 space-y-2">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">{t.benchmarks.metricResponsiveLabel}</span>
          </div>
          <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white">{t.benchmarks.metricResponsiveValue}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{t.benchmarks.metricResponsiveSource}</div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
        <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.benchmarks.insightNote}
        </p>
      </div>
    </div>
  );
};
