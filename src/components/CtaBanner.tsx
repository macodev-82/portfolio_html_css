import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const CtaBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="banner" className="py-16 sm:py-20 relative isolate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative isolate rounded-3xl bg-gradient-to-r from-white via-[#FAF8F2] to-[#EEF2F6] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white p-8 sm:p-12 lg:p-16 border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden">

          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <SectionGlow variant="cta" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block">
                {t.banner.sectionNumber}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {t.banner.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                {t.banner.subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                id="banner-btn-start"
                href="#contact"
                className="btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>{t.banner.btnStart}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                id="banner-btn-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 font-semibold text-sm transition-all active:scale-[0.98]"
              >
                <span>{t.banner.btnProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
