'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [observationReady, setObservationReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (
      !element ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        setObservationReady(true);

        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -32px 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${className}`}
      data-reveal-ready={observationReady}
      data-revealed={revealed}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
