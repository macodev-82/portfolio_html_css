import React, { useRef, useState } from 'react';
import { useNotifications } from '../context/NotificationContext';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Bell,
  Send,
  Info,
  FolderGit2,
  Mail,
  Sparkles,
  CheckCheck,
  ToggleLeft,
  ToggleRight,
  Terminal,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NotificationItem } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

export const NotificationDrawer: React.FC = () => {
  const {
    notifications,
    unreadCount,
    isDrawerOpen,
    closeDrawer,
    markAsRead,
    markAllAsRead,
    preferences,
    updatePreferences,
    sendCustomPush,
    toasts,
    removeToast
  } = useNotifications();

  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [testTitle, setTestTitle] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const [showTestForm, setShowTestForm] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useModalA11y(isDrawerOpen, closeDrawer, drawerRef);

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    return true;
  });

  const handleSendTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testTitle.trim() || !testMessage.trim()) return;
    sendCustomPush(testTitle, testMessage, 'message');
    setTestTitle('');
    setTestMessage('');
    setShowTestForm(false);
  };

  const getCategoryIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'project':
        return <FolderGit2 className="w-4 h-4 text-amber-500" />;
      case 'message':
        return <Mail className="w-4 h-4 text-sky-500" />;
      case 'tech':
        return <Terminal className="w-4 h-4 text-emerald-500" />;
      case 'availability':
        return <Activity className="w-4 h-4 text-rose-500" />;
      default:
        return <Info className="w-4 h-4 text-amber-500" />;
    }
  };

  const getCategoryLabel = (type: NotificationItem['type']) => {
    switch (type) {
      case 'project':
        return t.notificationsModal.typeProject;
      case 'message':
        return t.notificationsModal.typeMessage;
      case 'tech':
        return t.notificationsModal.typeTech;
      case 'availability':
        return t.notificationsModal.typeAvailability;
      default:
        return type;
    }
  };

  return (
    <>
      {/* Toast notifications container (bottom-right fixed) */}
      <div
        id="toast-container"
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto p-4 rounded-xl shadow-xl border backdrop-blur-md flex items-start justify-between gap-3 ${
                toast.type === 'success'
                  ? 'bg-emerald-950/90 dark:bg-emerald-950/95 border-emerald-500/40 text-emerald-100'
                  : toast.type === 'warning'
                  ? 'bg-amber-950/90 dark:bg-amber-950/95 border-amber-500/40 text-amber-100'
                  : 'bg-slate-900/95 border-slate-700 text-slate-100'
              }`}
            >
              <div className="space-y-0.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
                  <h5 className="font-bold text-xs">{toast.title}</h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                aria-label={t.notificationsModal.closeNotificationLabel}
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                aria-label={t.notificationsModal.title}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
              >
                {/* Header */}
                <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {t.notificationsModal.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        {unreadCount} {unreadCount === 1 ? t.notificationsModal.unreadSingular : t.notificationsModal.unreadPlural}
                      </span>
                    </div>
                  </div>

                  <button
                    id="btn-close-notification-drawer"
                    onClick={closeDrawer}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    aria-label={t.notificationsModal.closeDrawerLabel}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Local activity notice — no real browser push backend exists */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                      {t.notificationsModal.localActivityNotice}
                    </span>
                  </div>
                </div>

                {/* Subscription Preferences Toggles */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-2.5 bg-slate-50/50 dark:bg-slate-900/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block">
                    {t.notificationsModal.topicsTitle}
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {t.notificationsModal.topic1Title}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {t.notificationsModal.topic1Desc}
                        </span>
                      </div>
                      <button
                        onClick={() => updatePreferences({ projectUpdates: !preferences.projectUpdates })}
                        className="text-amber-500 p-1"
                        aria-pressed={preferences.projectUpdates}
                        aria-label={t.notificationsModal.topic1Title}
                      >
                        {preferences.projectUpdates ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {t.notificationsModal.topic2Title}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {t.notificationsModal.topic2Desc}
                        </span>
                      </div>
                      <button
                        onClick={() => updatePreferences({ availabilityAlerts: !preferences.availabilityAlerts })}
                        className="text-amber-500 p-1"
                        aria-pressed={preferences.availabilityAlerts}
                        aria-label={t.notificationsModal.topic2Title}
                      >
                        {preferences.availabilityAlerts ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter and Actions Bar */}
                <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setFilter('all')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                        filter === 'all' ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {t.notificationsModal.filterAllLabel} ({notifications.length})
                    </button>
                    <button
                      onClick={() => setFilter('unread')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                        filter === 'unread' ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {t.notificationsModal.filterUnreadLabel} ({unreadCount})
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-medium text-xs"
                      >
                        <CheckCheck className="w-3.5 h-3.5" />
                        <span>{t.notificationsModal.markAllRead}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {filteredNotifications.length === 0 ? (
                    <div className="py-16 text-center text-slate-400 space-y-2">
                      <Bell className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
                      <p className="text-sm font-medium">{t.notificationsModal.noNotifications}</p>
                    </div>
                  ) : (
                    filteredNotifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markAsRead(n.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-1.5 ${
                          !n.read
                            ? 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500/30'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(n.type)}
                            <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                              {n.title}
                            </h4>
                          </div>
                          {!n.read && (
                            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                          )}
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          {n.message}
                        </p>

                        <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400">
                          <span>{n.timestamp}</span>
                          <span className="capitalize">{getCategoryLabel(n.type)}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Add a local notification (no real push involved) */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <button
                      id="btn-toggle-test-push-form"
                      onClick={() => setShowTestForm(!showTestForm)}
                      className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{showTestForm ? t.notificationsModal.hideFormLabel : t.notificationsModal.testPushBtn}</span>
                    </button>
                  </div>

                  <AnimatePresence>
                    {showTestForm && (
                      <motion.form
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        onSubmit={handleSendTest}
                        className="space-y-2 pt-2"
                      >
                        <input
                          type="text"
                          required
                          value={testTitle}
                          onChange={(e) => setTestTitle(e.target.value)}
                          placeholder={t.notificationsModal.testTitlePlaceholder}
                          className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                        />
                        <textarea
                          required
                          rows={2}
                          value={testMessage}
                          onChange={(e) => setTestMessage(e.target.value)}
                          placeholder={t.notificationsModal.testMessagePlaceholder}
                          className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white resize-none"
                        />
                        <button
                          type="submit"
                          className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{t.notificationsModal.addToSessionLabel}</span>
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
