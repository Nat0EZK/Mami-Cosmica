import React, { useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

/**
 * Tarjeta con un foco de luz que sigue al cursor.
 *
 * La versión original guardaba posición y opacidad en estado de React, así
 * que cada mousemove provocaba un re-render completo del componente. Con
 * varias tarjetas en pantalla eso bastaba para que el hover se sintiera
 * lento.
 *
 * Aquí la posición se escribe como variables CSS sobre el propio nodo
 * dentro de un requestAnimationFrame: el navegador repinta sólo el
 * degradado y React no vuelve a renderizar.
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = useCallback(e => {
    const el = ref.current;
    if (!el) return;

    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${clientY - rect.top}px`);
    });
  }, []);

  const setOpacity = useCallback((value: string) => {
    ref.current?.style.setProperty('--spot-opacity', value);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity('0.6')}
      onMouseLeave={() => setOpacity('0')}
      onFocus={() => setOpacity('0.6')}
      onBlur={() => setOpacity('0')}
      // cn() aplica tailwind-merge: sin él, el `bg-neutral-900` por defecto
      // ganaba a los colores de marca pasados por className.
      className={cn(
        'relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8',
        className
      )}
      style={
        {
          '--spot-x': '50%',
          '--spot-y': '50%',
          '--spot-opacity': '0'
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: 'var(--spot-opacity)',
          background: `radial-gradient(circle at var(--spot-x) var(--spot-y), ${spotlightColor}, transparent 80%)`
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
