'use client';

import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef } from 'react';

const LenisContext = createContext<{ current: Lenis | null } | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
    });

    lenisRef.current = instance;

    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current = null;
      instance.destroy();
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}