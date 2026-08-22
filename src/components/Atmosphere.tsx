import React, { useEffect, useRef } from 'react';

type GlowVariant =
  | 'hero'
  | 'cyan'
  | 'amber'
  | 'amber-soft'
  | 'lab'
  | 'cool'
  | 'toolkit'
  | 'cta'
  | 'quiet'
  | 'footer';

interface BlobConfig {
  className: string;
  drift: 'atmos-layer-a' | 'atmos-layer-b' | '';
}

const VARIANT_BLOBS: Record<GlowVariant, BlobConfig[]> = {
  hero: [
    { className: 'top-[-10%] right-[8%] w-[26rem] h-[26rem] bg-sky-500/10', drift: 'atmos-layer-b' },
  ],
  cyan: [
    { className: 'top-0 left-1/4 w-[24rem] h-[24rem] bg-sky-500/8', drift: 'atmos-layer-a' },
    { className: 'bottom-0 right-1/4 w-72 h-72 bg-slate-500/8', drift: '' },
  ],
  amber: [
    { className: 'top-1/3 left-[6%] w-[28rem] h-[28rem] bg-amber-500/10', drift: 'atmos-layer-a' },
    { className: 'bottom-0 right-[10%] w-72 h-72 bg-sky-500/6', drift: 'atmos-layer-b' },
  ],
  'amber-soft': [
    { className: 'top-0 right-1/3 w-80 h-80 bg-amber-500/6', drift: 'atmos-layer-a' },
  ],
  lab: [
    { className: 'top-[-15%] left-1/3 w-[26rem] h-[26rem] bg-sky-500/9', drift: 'atmos-layer-a' },
    { className: 'bottom-[-10%] right-[8%] w-72 h-72 bg-emerald-500/9', drift: 'atmos-layer-b' },
  ],
  cool: [
    { className: 'top-0 right-[15%] w-80 h-80 bg-sky-500/7', drift: 'atmos-layer-b' },
  ],
  toolkit: [
    { className: 'top-[-10%] left-[10%] w-96 h-96 bg-sky-500/8', drift: 'atmos-layer-a' },
    { className: 'bottom-0 right-[12%] w-72 h-72 bg-emerald-500/8', drift: 'atmos-layer-b' },
  ],
  cta: [
    { className: 'top-[-20%] left-[-5%] w-[26rem] h-[26rem] bg-amber-500/12', drift: 'atmos-layer-a' },
    { className: 'bottom-[-20%] right-[-5%] w-[24rem] h-[24rem] bg-sky-500/10', drift: 'atmos-layer-b' },
  ],
  quiet: [
    { className: 'top-0 right-1/4 w-72 h-72 bg-sky-500/6', drift: 'atmos-layer-a' },
  ],
  footer: [
    { className: 'bottom-[-30%] left-1/2 -translate-x-1/2 w-[36rem] h-64 bg-slate-300/15 dark:bg-slate-950/40', drift: '' },
  ],
};

interface SectionGlowProps {
  variant: GlowVariant;
  grid?: boolean;
}

/**
 * Decorative-only ambient lighting for a single section. Renders as the
 * first child of a `relative overflow-hidden` section wrapper and never
 * participates in layout (absolute, inset-0, pointer-events-none).
 */
export const SectionGlow: React.FC<SectionGlowProps> = ({ variant, grid = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const blobs = VARIANT_BLOBS[variant];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="atmos-reveal absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {grid && <div className="absolute inset-0 atmos-grid-fade" />}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className} ${blob.drift}`}
        />
      ))}
    </div>
  );
};

/**
 * Mounted once at the app root. Provides the base layered depth (fine
 * grid, slow-drifting aurora, fine noise) that shows through semi-
 * transparent section bands and the gaps between opaque sections.
 */
export const GlobalAtmosphere: React.FC = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 atmos-grid-fade opacity-60" />
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full blur-3xl bg-sky-500/5 dark:bg-sky-500/[0.06] atmos-layer-a" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[42rem] h-[42rem] rounded-full blur-3xl bg-amber-500/5 dark:bg-amber-500/[0.05] atmos-layer-b" />
      <div className="absolute inset-0 atmos-noise" />
    </div>
  );
};

/**
 * Very subtle cursor-following ambient glow. Desktop / fine-pointer only.
 * Uses direct style mutation via rAF — never triggers a React re-render.
 */
export const PointerSpotlight: React.FC = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          spotRef.current?.style.setProperty('--spot-x', `${targetX}px`);
          spotRef.current?.style.setProperty('--spot-y', `${targetY}px`);
          frame = 0;
        });
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="atmos-spotlight fixed inset-0 -z-10 hidden md:block pointer-events-none"
    />
  );
};
