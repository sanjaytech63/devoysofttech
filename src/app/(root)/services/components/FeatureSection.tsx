"use client";

import { useState } from "react";
import { FEATURES } from "./data";
import { FeatureTabs } from "./FeatureTabs";
import { FeatureHero } from "./FeatureHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureGridSection } from "@/components/shared/FeatureGridSection";

export const FeatureSection = () => {
  const [active, setActive] = useState("web");
  const current = FEATURES.find((f) => f.id === active);
  if (!current) return null;
  return (
    <Section
      id="service-feature-sections "
      className="relative overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <FeatureTabs active={active} setActive={setActive} />
        </div>
        <FeatureHero data={current} />
        <FeatureGridSection
          title=""
          items={current.items}
          columns={4}
          variant="soft"
        />
      </Container>
    </Section>
  );
};
