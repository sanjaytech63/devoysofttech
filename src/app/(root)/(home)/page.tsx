import dynamic from "next/dynamic";
import { HeroSection } from "./components/HeroSection";
import { ServicesTicker } from "./components/ServicesTicker";

const AboutSection = dynamic(() =>
  import("./components/AboutSection").then((mod) => ({
    default: mod.AboutSection,
  })),
);
const ServicesSection = dynamic(() =>
  import("./components/ServicesSection").then((mod) => ({
    default: mod.ServicesSection,
  })),
);
const StatsSection = dynamic(() =>
  import("@/components/shared/StatsSection").then((mod) => ({
    default: mod.StatsSection,
  })),
);
const TestimonialsSection = dynamic(() =>
  import("./components/TestimonialsSection").then((mod) => ({
    default: mod.TestimonialsSection,
  })),
);
const CTASection = dynamic(() =>
  import("@/components/shared/CTASection").then((mod) => ({
    default: mod.CTASection,
  })),
);

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
