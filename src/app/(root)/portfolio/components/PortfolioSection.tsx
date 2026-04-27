"use client";

import { portfolioData } from "@/lib/constants";
import { Category } from "@/types";
import { useState, useMemo } from "react";
import { FilterTabs } from "../FilterTabs";
import { PortfolioCard } from "./PortfolioCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (active === "all") return portfolioData;
    return portfolioData?.filter((item) => item?.categories?.includes(active));
  }, [active]);

  return (
    <Section id="portfolio-section" className="bg-white">
      <Container>
        <FilterTabs active={active} onChange={setActive} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered?.map((item) => (
            <PortfolioCard key={item?.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
