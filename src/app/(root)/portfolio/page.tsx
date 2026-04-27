import { StatsSection } from "@/components/shared/StatsSection";
import { HeroSection } from "./components/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import { CaseStudyHero } from "./components/CaseStudyHero";
import { PortfolioSection } from "./components/PortfolioSection";

const page = () => {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <CaseStudyHero />
      <CTASection
        title={"Your Project Could Be Next"}
        description="Let's build something extraordinary together. Share your idea — we respond within 24 hours."
        primaryBtnText="Start a Project"
        secondaryBtnText="Explore the services →"
      />
    </main>
  );
};

export default page;
