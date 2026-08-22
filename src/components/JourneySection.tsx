import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const JourneySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative isolate overflow-hidden"
    >
      <SectionGlow variant="cool" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.journey.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.journey.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.journey.subtitle}
          </p>
        </div>

        {/* 2x2 Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.journey.items.map((item, idx) => (
            <motion.div
              key={item.number}
              id={`journey-card-${idx}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    {t.journey.phaseLabel} {item.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1} / 04
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Key aspects */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-2">
                {item.keyAspects.map((aspect) => (
                  <span
                    key={aspect}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                  >
                    {aspect}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
