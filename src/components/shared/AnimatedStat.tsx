"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  label: string;
  value: number;
  duration?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const AnimatedStat = ({
  label,
  value,
  duration = 1200,
}: AnimatedStatProps) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const isDecimal = value % 1 !== 0;

  const formatValue = (val: number) => {
    if (isDecimal) return val.toFixed(1);
    return Math.floor(val);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = easeOutCubic(progress);

          setCurrent(eased * value);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="stats-label text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        {formatValue(current)}
        {label === "Avg Rating" ? " ★" : "+"}
      </p>

      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/70">
        {label}
      </p>
    </div>
  );
};
