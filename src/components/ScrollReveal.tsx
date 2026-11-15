import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  yOffset?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
  yOffset = 24,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
    if (typeof IntersectionObserver === 'undefined') return true;
    return false;
  });
  const [hasSettled, setHasSettled] = useState<boolean>(isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setHasSettled(true), 750 + delay);
      return () => clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, threshold, rootMargin, delay]);

  return (
    <div
      ref={ref}
      style={
        hasSettled
          ? undefined
          : {
              transitionProperty: 'opacity, transform',
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: `${delay}ms`,
              transform: isVisible
                ? 'translate3d(0, 0, 0)'
                : `translate3d(0, ${yOffset}px, 0)`,
              willChange: 'opacity, transform',
            }
      }
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`.trim()}
    >
      {children}
    </div>
  );
};
