import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Layout,
  Globe,
  Languages,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Sparkles,
  Calculator,
  Sliders,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionGlow } from './Atmosphere';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const [showEstimator, setShowEstimator] = useState(false);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);
  const [selectedTimeline, setSelectedTimeline] = useState<'urgent' | 'standard' | 'flexible'>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<{ [key: string]: boolean }>({
    bilingual: true,
    darkLight: true,
    api: false,
    forms: true,
    a11y: true,
  });

  const icons = [Layout, Globe, Languages, CheckCircle2, Terminal];

  const toggleFeature = (key: string) => {
    setSelectedFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getEstimatedWeeks = () => {
    let weeks = 2;
    if (selectedServiceIdx === 0) weeks = 1.5;
    if (selectedServiceIdx === 1) weeks = 2.5;
    if (selectedServiceIdx === 2) weeks = 2.0;
    if (selectedServiceIdx === 3) weeks = 1.5;
    if (selectedServiceIdx === 4) weeks = 3.0;

    if (selectedFeatures.api) weeks += 1.5;
    if (selectedFeatures.bilingual) weeks += 0.5;
    if (selectedTimeline === 'urgent') weeks = Math.max(1, weeks * 0.7);

    return Math.round(weeks * 10) / 10;
  };

  const handleInquireWithConfig = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <SectionGlow variant="cyan" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.services.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 2-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Scope & Interactive Estimator Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/20">
                  {t.services.scopeCard.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.services.scopeCard.description}
              </p>

              <button
                id="btn-toggle-estimator"
                onClick={() => setShowEstimator(!showEstimator)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500" />
                  {showEstimator ? t.services.scopeCard.btnHideEstimator : t.services.scopeCard.btnInteractiveEstimator}
                </span>
                <Sliders className="w-3.5 h-3.5" />
              </button>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>{t.services.scopeCard.deliveryLabel}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Git / CI / Tests</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.services.scopeCard.stackLabel}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">FastAPI + Tailwind</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.services.scopeCard.a11yStandardLabel}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">WCAG 2.1 AA</span>
                </div>
              </div>
            </div>

            {/* Interactive Scope Estimator Drawer */}
            <AnimatePresence>
              {showEstimator && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-lg space-y-4 overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {t.services.estimator.title}
                    </span>
                  </div>

                  {/* Feature toggles */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 block uppercase">
                      {t.services.estimator.featuresLabel}
                    </span>
                    <div className="space-y-1.5 text-xs">
                      {[
                        { key: 'bilingual', label: t.services.estimator.featBilingual },
                        { key: 'darkLight', label: t.services.estimator.featDarkLight },
                        { key: 'api', label: t.services.estimator.featApi },
                        { key: 'forms', label: t.services.estimator.featForms },
                        { key: 'a11y', label: t.services.estimator.featA11y },
                      ].map(feat => (
                        <button
                          key={feat.key}
                          onClick={() => toggleFeature(feat.key)}
                          className={`w-full p-2 rounded-lg border text-left flex items-center justify-between transition-colors ${
                            selectedFeatures[feat.key]
                              ? 'bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-200 font-semibold'
                              : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <span>{feat.label}</span>
                          {selectedFeatures[feat.key] && <Check className="w-3.5 h-3.5 text-amber-500" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary calculation */}
                  <div className="p-3 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs space-y-1.5 border border-slate-800">
                    <div className="flex justify-between text-slate-400">
                      <span>{t.services.estimator.estimatedTime}:</span>
                      <span className="text-amber-400 font-bold">~{getEstimatedWeeks()} semanas</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Incluye diseño responsive, optimización SEO y tests unitarios.
                    </div>
                  </div>

                  <button
                    onClick={handleInquireWithConfig}
                    className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    {t.services.estimator.readyCta}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: 5 Services List */}
          <div className="lg:col-span-8 space-y-4">
            {t.services.items.map((service, idx) => {
              const Icon = icons[idx] || Layout;
              const isSelected = selectedServiceIdx === idx;
              const isWebsiteService = service.iconName === 'Globe';
              const ItemWrapper = isWebsiteService ? motion.a : motion.div;
              const itemInteractionProps = isWebsiteService
                ? { href: '/websites/' }
                : { onClick: () => setSelectedServiceIdx(idx) };
              return (
                <ItemWrapper
                  key={service.number}
                  id={`service-item-${idx}`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  {...itemInteractionProps}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer block ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-amber-500/40 dark:border-amber-500/40 shadow-md'
                      : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 pt-1">
                      {service.number}
                    </span>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            {service.title}
                          </h3>
                        </div>

                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {service.scopeBadge}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Deliverables tags */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {service.deliverables.map((deliv, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ItemWrapper>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
