import React, { createContext, useContext, useEffect, useState } from 'react';
import { NotificationItem, NotificationPreferences, ToastMessage } from '../types';
import { INITIAL_NOTIFICATIONS } from '../data/translations';

// This context represents LOCAL portfolio UI activity only (theme changes,
// language changes, copy actions, project views, contact submissions). It
// does not implement or request real browser push notifications, since
// there is no push backend behind this portfolio.

interface NotificationContextType {
  notifications: NotificationItem[];
  unreadCount: number;
  preferences: NotificationPreferences;
  isDrawerOpen: boolean;
  toasts: ToastMessage[];
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  updatePreferences: (prefs: Partial<NotificationPreferences>) => void;
  sendCustomPush: (title: string, message: string, type?: NotificationItem['type']) => void;
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('maahcodev_notifications');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return INITIAL_NOTIFICATIONS;
        }
      }
    }
    return INITIAL_NOTIFICATIONS;
  });

  const [preferences, setPreferences] = useState<NotificationPreferences>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('maahcodev_notif_prefs');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return {
      browserPushGranted: false,
      projectUpdates: true,
      availabilityAlerts: true,
      technicalArticles: true,
    };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem('maahcodev_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('maahcodev_notif_prefs', JSON.stringify(preferences));
  }, [preferences]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(item => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(item => ({ ...item, read: true })));
  };

  const updatePreferences = (prefs: Partial<NotificationPreferences>) => {
    setPreferences(prev => ({ ...prev, ...prefs }));
    addToast({
      title: 'Preferencias actualizadas',
      message: 'Tus ajustes se han guardado en este navegador.',
      type: 'success',
    });
  };

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = 'toast-' + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const sendCustomPush = (title: string, message: string, type: NotificationItem['type'] = 'message') => {
    const newNotif: NotificationItem = {
      id: 'notif-' + Date.now(),
      title,
      message,
      timestamp: 'Ahora mismo',
      read: false,
      type,
    };

    setNotifications(prev => [newNotif, ...prev]);

    addToast({
      title,
      message,
      type: 'info',
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        preferences,
        isDrawerOpen,
        toasts,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        markAsRead,
        markAllAsRead,
        updatePreferences,
        sendCustomPush,
        addToast,
        removeToast,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
