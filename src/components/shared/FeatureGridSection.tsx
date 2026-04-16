"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/Button";
import { FeatureGridSectionProps } from "@/types";
import { OptimizedImage } from "./OptimizedImage";
import { cn } from "@/lib/utils";

const gridCols = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export const FeatureGridSection = ({
  title,
  accent,
  items,
  variant = "default",
  columns = 3,
}: FeatureGridSectionProps) => {
  return (
    <Section
      id="FeatureGridSection"
      className={variant === "default" ? "bg-(--surface)" : "bg-transparent"}
    >
      <Container className="px-0!">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <h2 className="heading-section leading-tight">
            {title}{" "}
            {accent && <span className="heading-section-accent">{accent}</span>}
          </h2>

          {variant === "default" && (
            <Button className="group flex hover:shadow-2xl items-center gap-2 btn-gradient">
              View All service
              <OptimizedImage
                src="/images/arrow.svg"
                alt="arrow-icon"
                fill={false}
                containerClassName="w-7! h-7! transition-transform duration-300 group-hover:rotate-30"
                priority
              />
            </Button>
          )}
        </div>

        {/* GRID */}
        <div
          className={cn("grid gap-5 sm:grid-cols-2", gridCols[columns || 3])}
        >
          {items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
