"use client";

import { useEffect, useState } from "react";
import { siteStats } from "@/lib/constants";
import { Container } from "../ui/Container";

const smoothCounter = (
  target: number,
  duration = 1000,
  setValue: (n: number) => void,
) => {
  let start = 0;
  const stepTime = Math.max(Math.floor(duration / target), 20);

  const timer = setInterval(() => {
    start += 1;
    setValue(start);
    if (start >= target) clearInterval(timer);
  }, stepTime);
};

export const StatsSection = () => {
  const [stats, setStats] = useState(
    siteStats.map((stat) => ({ ...stat, current: 0 })),
  );

  useEffect(() => {
    siteStats.forEach((stat, index) => {
      smoothCounter(stat.value as number, 1000, (value) => {
        setStats((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, current: value } : item,
          ),
        );
      });
    });
  }, []);

  return (
    <section
      id="stats"
      className="
       bg-linear-to-r
        from-[#0B3D1E] via-[#14532D] to-[#15803D]
        py-8 md:py-10
      "
    >
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="stats-label text-2xl sm:text-3xl md:text-4xl">
                {stat.current}
                <span className="ml-1 text-lg">+</span>
              </p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-(--accent)">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
