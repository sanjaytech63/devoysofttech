"use client";

import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import { AboutHeroSection } from "./components/AboutHeroSection";
import { differentiators, values } from "@/lib/constants";

const StatsSection = dynamic(() =>
  import("@/components/shared/StatsSection").then((mod) => ({
    default: mod.StatsSection,
  })),
);

const FeatureGridSection = dynamic(() =>
  import("@/components/shared/FeatureGridSection").then((mod) => ({
    default: mod.FeatureGridSection,
  })),
);

const MilestonesSection = dynamic(() =>
  import("./components/MilestonesSection").then((mod) => ({
    default: mod.MilestonesSection,
  })),
);

const TeamSection = dynamic(() =>
  import("./components/TeamSection").then((mod) => ({
    default: mod.TeamSection,
  })),
);

const CTASection = dynamic(() =>
  import("@/components/shared/CTASection").then((mod) => ({
    default: mod.CTASection,
  })),
);

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <HeroSection />
      <AboutHeroSection />
      <StatsSection />
      <FeatureGridSection
        title="What We Stand For"
        items={values}
        variant="default"
        columns={3}
      />
      <FeatureGridSection
        title="What Makes Us"
        items={differentiators}
        accent="Different"
        variant="soft"
        columns={4}
      />
      <MilestonesSection />
      <TeamSection />
      <CTASection
        title={<>Your Project Could Be Next</>}
        description="Let's build something extraordinary together. Share your idea — we respond within 24 hours."
        primaryBtnText="Start a Project"
        secondaryBtnText="Explore the services  →"
      />
    </main>
  );
}
