import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNotifications } from '../context/NotificationContext';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Check,
  Copy,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { SectionGlow } from './Atmosphere';

// Real Formspree endpoint already used in production for this portfolio.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvzozok';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToast, sendCustomPush } = useNotifications();

  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maahcodev@gmail.com');
    setCopiedEmail(true);
    addToast({
      title: t.contact.form.copiedSuccess,
      message: 'maahcodev@gmail.com',
      type: 'success',
    });
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      addToast({
        title: 'Campos requeridos',
        message: 'Por favor completa tu nombre, correo y mensaje.',
        type: 'warning',
      });
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(formRef.current),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setIsSuccess(true);

        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });

        sendCustomPush(
          t.contact.form.successTitle,
          `${name} — ${projectType || t.contact.title}`,
          'message'
        );

        addToast({
          title: t.contact.form.successTitle,
          message: t.contact.form.successDesc,
          type: 'success',
        });

        setName('');
        setEmail('');
        setProjectType('');
        setBudget('');
        setMessage('');
      } else {
        addToast({
          title: t.contact.form.errorTitle,
          message: t.contact.form.errorDesc,
          type: 'warning',
        });
      }
    } catch {
      addToast({
        title: t.contact.form.errorTitle,
        message: t.contact.form.errorDesc,
        type: 'warning',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative isolate overflow-hidden"
    >
      <SectionGlow variant="quiet" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-2">
            {t.contact.sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct channels & Security */}
          <div className="lg:col-span-5 space-y-6">

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.contact.openBadge}</span>
            </div>

            {/* Channels Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold pb-2 border-b border-slate-100 dark:border-slate-800">
                {t.contact.channelsTitle}
              </h3>

              {/* Email channel with copy action */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono">
                      maahcodev@gmail.com
                    </span>
                  </div>
                </div>

                <button
                  id="btn-contact-copy-email"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                  title={t.contact.form.copyEmailBtn}
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub */}
              <a
                id="contact-channel-github"
                href="https://github.com/macodev-82"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {t.contact.githubLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono">
                      macodev-82
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-amber-500">→</span>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-channel-linkedin"
                href="https://www.linkedin.com/in/marcos-alvarez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {t.contact.linkedinLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono">
                      Marcos Alvarez
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-amber-500">→</span>
              </a>
            </div>

            {/* Security notice banner */}
            <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
              <span>{t.contact.securityNotice}</span>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.form.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} aria-busy={isSubmitting} className="space-y-4 sm:space-y-5">

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
                        {t.contact.form.nameLabel} <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="nombre"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-amber-500 focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
                        {t.contact.form.emailLabel} <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-amber-500 focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-project-type" className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
                        {t.contact.form.projectTypeLabel}
                      </label>
                      <select
                        id="contact-project-type"
                        name="tipo_proyecto"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-amber-500 focus:outline-hidden transition-colors"
                      >
                        <option value="">{t.contact.form.projectTypePlaceholder}</option>
                        {t.contact.form.projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-budget" className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
                        {t.contact.form.budgetLabel}
                      </label>
                      <select
                        id="contact-budget"
                        name="presupuesto"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-amber-500 focus:outline-hidden transition-colors"
                      >
                        <option value="">{t.contact.form.budgetPlaceholder}</option>
                        {t.contact.form.budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
                      {t.contact.form.messageLabel} <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="mensaje"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-amber-500 focus:outline-hidden transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-70 text-slate-950 font-bold text-sm transition-all shadow-sm hover:shadow-md hover:shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.contact.form.sending}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.form.btnSend}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p role="status" aria-live="polite" className="sr-only">
                    {isSubmitting ? t.contact.form.sending : ''}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
