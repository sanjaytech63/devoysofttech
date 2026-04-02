"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { useScroll } from "@/hooks/useScroll";
import { testimonials } from "@/lib/constants";

export const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScroll(ref);

  return (
    <Section
      id="testimonials"
      className="bg-[var(--surface)] dark:bg-[var(--surface-2)]"
    >
      <Container>
        <div className="mb-8 text-center">
          <Heading
            title="What Clients Say"
            subtitle="Real reviews from clients who scaled with us."
          />
        </div>

        <div
          ref={ref}
          className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-3 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
