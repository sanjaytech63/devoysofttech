"use client";

import { siteStats } from "@/lib/constants";
import { AnimatedStat } from "./AnimatedStat";
import { Container } from "../ui/Container";

export const StatsSection = () => {
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
          {siteStats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              label={stat.label}
              value={stat.value as number}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
