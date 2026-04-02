"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatsCard } from "@/components/ui/StatsCard";
import { siteStats } from "@/lib/constants";

const smoothCounter = (target: number, duration = 900, setValue: (n: number) => void) => {
  let start = 0;
  const stepTime = Math.max(Math.floor(duration / target), 20);
  const timer = setInterval(() => {
    start += 1;
    setValue(start);
    if (start >= target) clearInterval(timer);
  }, stepTime);
};

export const StatsSection = () => {
  const [stats, setStats] = useState(siteStats.map((stat) => ({ ...stat, current: 0 })));

  useEffect(() => {
    siteStats.forEach((stat, index) => {
      smoothCounter(stat.value as number, 900, (value) => {
        setStats((prev) => prev.map((item, i) => (i === index ? { ...item, current: value } : item)));
      });
    });
  }, []);

  return (
    <Section id="stats" className="bg-gradient-to-r from-[var(--surface)] to-[var(--accent-light)]">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl">Data-Driven Performance</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Metrics that matter and insights that drive product growth.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.label} title={stat.label} value={stat.current} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
