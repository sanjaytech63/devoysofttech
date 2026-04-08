"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useScroll } from "@/hooks/useScroll";
import clsx from "clsx";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

export const AboutHeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScroll(ref);

  return (
    <Section id="about" className="bg-background">
      <Container>
        <div
          ref={ref}
          className={clsx(
            "grid gap-8 md:gap-10 lg:grid-cols-2 items-center",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            "transition-all duration-700",
          )}
        >
          <OptimizedImage
            src="/images/about-hero-img.png"
            alt="growth"
            fill={true}
            containerClassName="w-full h-full"
          />

          <div>
            <h2 className="heading-section leading-tight">
              We Make Life{" "}
              <span className="heading-section-accent">Better</span> Through
              Technology
            </h2>

            <p className="text-paragraph mt-4 font-bold">
              Devoy Softech is a product team for hire that makes life better.
            </p>
            <p className="text-paragraph mt-4">
              Devoy Softech is a creative IT company founded in 2017. We help
              businesses establish and expand their brand in a digital-first
              world — converting leads into loyal clients.
            </p>
            <p className="text-paragraph mt-4">
              Every project we take on becomes a personal mission. We do not
              just write code — we solve problems, remove friction, and create
              experiences that convert potential leads into loyal clients.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
