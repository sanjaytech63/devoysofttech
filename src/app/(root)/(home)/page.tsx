import { HeroSection } from "./components/HeroSection";
import { ServicesTicker } from "./components/ServicesTicker";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { CTASection } from "@/components/shared/CTASection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <HeroSection />
      <ServicesTicker />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
