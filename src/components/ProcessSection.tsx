import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, LayoutGrid, Code2, CheckCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Compass, LayoutGrid, Code2, CheckCheck];

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <SectionGlow variant="cool" grid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.process.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, idx) => {
            const Icon = icons[idx] || Code2;
            return (
              <motion.div
                key={step.number}
                id={`process-step-${idx}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1 uppercase font-semibold">
                    {t.process.deliverableLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {step.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
