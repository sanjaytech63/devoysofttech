import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <AboutHeroSection />
      <StatsSection />
      <ValuesSection />
      <DifferentiatorsSection />
      <MilestonesSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
