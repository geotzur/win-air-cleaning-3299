'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export default function MagneticButton({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  /* only activate on devices that support hover (desktop) */
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)');
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canHover || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 60;
      if (dist < radius) {
        const strength = 1 - dist / radius;
        const maxPull = 8;
        const tx = dx * strength * (maxPull / radius);
        const ty = dy * strength * (maxPull / radius);
        ref.current.style.transform = `translate(${tx}px, ${ty}px)`;
      } else {
        ref.current.style.transform = 'translate(0px, 0px)';
      }
    },
    [canHover],
  );

  const handleLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)';
    }
  }, []);

  return (
    <Tag
      ref={ref}
      className={`liquid-fill-btn ${className}`}
      style={{ transition: 'transform 400ms cubic-bezier(0.25, 1, 0.5, 1)', willChange: 'transform' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
