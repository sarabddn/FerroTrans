import { useEffect, useState, type ReactNode } from 'react';
import { PHONE_TEL } from '../data/site';

/** true su telefono/tablet (schermo touch), false su computer. */
export function useIsTouch() {
  const [touch, setTouch] = useState(true);
  useEffect(() => {
    setTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);
  return touch;
}

/**
 * Su telefono il numero è un link "tel:" (si chiama con un tocco).
 * Su computer è solo testo: così non compare il popup
 * "Open Pick an application?" del browser.
 */
export default function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const touch = useIsTouch();
  if (touch) {
    return (
      <a href={`tel:${PHONE_TEL}`} className={className}>
        {children}
      </a>
    );
  }
  return <span className={`${className ?? ''} select-all cursor-text`}>{children}</span>;
}
