"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TECH_STACK } from "@/lib/constants";

export const TechStackSection = () => {
  return (
    <Section id="TechStackSection" className="bg-(--surface)">
      <Container>
        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="heading-section">
            Technology <span className="heading-section-accent">Stack</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {TECH_STACK.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center rounded-xl bg-white  p-4 text-center transition-all duration-300 hover:shadow-2xl"
              >
                {/* ICON */}
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md  text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
                  <Icon size={20} />
                </div>

                {/* LABEL */}
                <p className="text-xs font-medium text-(--muted)">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
