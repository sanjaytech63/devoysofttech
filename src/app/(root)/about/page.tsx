"use client";

import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import { AboutHeroSection } from "./components/AboutHeroSection";

const StatsSection = dynamic(() =>
  import("@/components/shared/StatsSection").then((mod) => ({
    default: mod.StatsSection,
  })),
);

const ValuesSection = dynamic(() =>
  import("./components/ValuesSection").then((mod) => ({
    default: mod.ValuesSection,
  })),
);

const DifferentiatorsSection = dynamic(() =>
  import("./components/DifferentiatorsSection").then((mod) => ({
    default: mod.DifferentiatorsSection,
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
      <ValuesSection />
      <DifferentiatorsSection />
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
