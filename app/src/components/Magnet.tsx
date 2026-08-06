import React, { useEffect, useRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

/**
 * Efecto magnético: el contenido se inclina hacia el cursor.
 *
 * Reescrito por rendimiento. La versión original guardaba la posición en
 * estado de React y animaba con `transform .3s`, así que:
 *   - re-renderizaba el árbol en cada mousemove (y escuchaba en `window`,
 *     incluso con el cursor lejos), y
 *   - cada nueva posición arrancaba una transición de 300 ms, de modo que
 *     el botón perseguía al cursor siempre con retraso: se sentía pegajoso.
 *
 * Ahora la posición se escribe directamente en el nodo dentro de un
 * requestAnimationFrame, sin estado ni transición mientras el cursor está
 * cerca. La transición sólo se usa al soltar, para volver al centro.
 */
const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 60ms linear',
  inactiveTransition = 'transform 450ms cubic-bezier(.16,1,.3,1)',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    if (disabled) {
      inner.style.transform = 'translate3d(0,0,0)';
      return;
    }

    // Sin movimiento si el sistema lo pide.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let active = false;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = wrapper.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + box.height / 2;

        const withinX = Math.abs(e.clientX - cx) < box.width / 2 + padding;
        const withinY = Math.abs(e.clientY - cy) < box.height / 2 + padding;

        if (withinX && withinY) {
          if (!active) {
            active = true;
            inner.style.transition = activeTransition;
          }
          const x = (e.clientX - cx) / magnetStrength;
          const y = (e.clientY - cy) / magnetStrength;
          inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (active) {
          active = false;
          inner.style.transition = inactiveTransition;
          inner.style.transform = 'translate3d(0,0,0)';
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, [padding, disabled, magnetStrength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        ref={innerRef}
        className={innerClassName}
        style={{ willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
