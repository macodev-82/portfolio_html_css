import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Shared modal accessibility behavior: Escape-to-close, Tab focus trapping
 * within the container, and focus restoration to the element that had focus
 * before the modal opened.
 */
export function useModalA11y<T extends HTMLElement>(
  isOpen: boolean,
  onClose: () => void,
  containerRef: RefObject<T | null>
) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && containerRef.current) {
        const nodeList = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        const focusable: HTMLElement[] = [];
        nodeList.forEach((el) => {
          if (el.offsetParent !== null) focusable.push(el);
        });

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose, containerRef]);
}
