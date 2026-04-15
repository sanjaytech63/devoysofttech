"use client";

import { FAQSection } from "@/components/shared/FAQSection";
import { FeatureSection } from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import { TechStackSection } from "./components/TechStackSection";

export default function ServicePage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <HeroSection />
      <FeatureSection />
      <TechStackSection />
      <FAQSection />
    </main>
  );
}
