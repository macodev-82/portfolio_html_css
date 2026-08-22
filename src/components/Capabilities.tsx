import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Server, Layout, GitBranch, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Server, Layout, GitBranch];

  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <SectionGlow variant="cyan" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.capabilities.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.capabilities.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.capabilities.subtitle}
          </p>
        </div>

        {/* 3 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.capabilities.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.number}
                id={`capability-card-${idx}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
