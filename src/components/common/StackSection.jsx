// src/components/common/StackSection.jsx
import { useEffect, useRef } from "react";

export default function StackSection({ children, index, theme = "light", onActive, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(theme);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [theme, onActive]);

  return (
    <div
      ref={ref}
className={`snap-section sticky top-0 h-[100dvh] overflow-hidden ${className}`}
      style={{ zIndex: 10 + index }}
    >
      {children}
    </div>
  );
}