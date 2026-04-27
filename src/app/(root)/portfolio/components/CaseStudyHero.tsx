"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GradientCard } from "./GradientCard";
import { MetricCard } from "./MetricCard";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

export const CaseStudyHero = () => {
  return (
    <Section id="case-study-hero" className="bg-(--surface)">
      <Container>
        <div className="grid lg:grid-cols-[40%_60%] gap-10 items-center">
          <GradientCard />
          <div className="space-y-6">
            <h1 className="heading-section text-xl! md:text-3xl!  leading-tight text-center md:text-left">
              How FreshMart Tripled Conversions With A Custom Shopify Rebuild
            </h1>

            <p className="text-paragraph text-center md:text-left">
              A Jaipur premium grocery brand came to us with a template that
              wasn’t converting. We redesigned from scratch — custom theme,
              optimized product pages, subscription system, and one-click
              checkout. Result: 3× conversion rate in 60 days.
            </p>

            <div className="flex flex-wrap gap-4">
              <MetricCard value="3X" label="Conversion Rate" />
              <MetricCard value="40%" label="Revenue Increase" />
              <MetricCard value="60d" label="Time to Results" />
            </div>

            <Button className="group flex hover:shadow-2xl items-center gap-2 btn-gradient">
              Get Similar Results
              <OptimizedImage
                src="/images/arrow.svg"
                alt="arrow-icon"
                fill={false}
                containerClassName="w-7! h-7! transition-transform duration-300 group-hover:rotate-30"
                priority
                blurDataURL="/images/arrow.svg"
              />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
