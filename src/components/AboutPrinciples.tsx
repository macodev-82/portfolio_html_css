import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Shield, Cpu, RefreshCw, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const AboutPrinciples: React.FC = () => {
  const { t } = useLanguage();
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principleIcons = [Eye, Cpu, RefreshCw, Shield];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative isolate overflow-hidden"
    >
      <SectionGlow variant="amber-soft" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Biography & Background */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
                {t.about.sectionNumber}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2">
                {t.about.creatorBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.about.title}
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>{t.about.bioP1}</p>
              <p>{t.about.bioP2}</p>
            </div>

            {/* Credential summary tags */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Backend Python Focus</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Linux & Git Daily Workflow</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Bilingual ES / EN Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Principles Card */}
          <div className="lg:col-span-6">
            <div
              id="about-principles-card"
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    {t.about.terminalHeader}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 font-mono text-xs">
                <div className="text-slate-400 uppercase tracking-wider font-bold text-[11px] pb-1 border-b border-slate-100 dark:border-slate-800 flex justify-between">
                  <span>{t.about.workingPrinciplesLabel}</span>
                  <span className="text-amber-600 dark:text-amber-400">{t.about.coreBeliefsLabel}</span>
                </div>

                <div className="space-y-3">
                  {t.about.principles.map((pr, idx) => {
                    const Icon = principleIcons[idx] || CheckCircle2;
                    const isSelected = activePrinciple === idx;
                    return (
                      <div
                        key={pr.key}
                        onClick={() => setActivePrinciple(idx)}
                        className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 dark:bg-amber-400/5 border-amber-500/40 text-slate-900 dark:text-slate-100 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-500' : 'text-slate-400'}`} />
                            <span className="text-amber-600 dark:text-amber-400 font-bold">{pr.key}</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{pr.value}</span>
                          </div>
                        </div>

                        {isSelected && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 pt-2 border-t border-amber-500/20 text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
                          >
                            {pr.description}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
