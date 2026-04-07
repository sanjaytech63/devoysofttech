import { AboutHeroSection } from "@/app/about/components/AboutHeroSection";
import { ValuesSection } from "@/app/about/components/ValuesSection";
import { DifferentiatorsSection } from "@/app/about/components/DifferentiatorsSection";
import { TeamSection } from "@/app/about/components/TeamSection";
import { CTASection } from "@/components/shared/CTASection";
import HeroSection from "./components/HeroSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { MilestonesSection } from "./components/MilestonesSection";

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
      <CTASection />
    </main>
  );
}
