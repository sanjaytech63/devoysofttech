import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
