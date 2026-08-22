import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Server, Monitor, Terminal, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const ToolkitSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryIcons: { [key: string]: any } = {
    server: Server,
    interface: Monitor,
    system: Terminal,
  };

  return (
    <section
      id="toolkit"
      className="relative isolate overflow-hidden py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <SectionGlow variant="toolkit" grid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.toolkit.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.toolkit.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.toolkit.subtitle}
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.toolkit.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Server;
            return (
              <motion.div
                key={cat.id}
                id={`toolkit-category-${cat.id}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {cat.number}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                    {cat.subtitle}
                  </p>

                  {/* Tools List */}
                  <div className="space-y-2.5">
                    {cat.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs font-mono"
                      >
                        <span className="font-bold text-slate-900 dark:text-slate-100">
                          {tool.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[170px] text-right font-sans">
                          {tool.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{t.toolkit.verifiedLabel}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t.toolkit.activeLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
