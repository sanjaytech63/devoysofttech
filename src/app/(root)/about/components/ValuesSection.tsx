"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  ShieldCheck,
  Globe,
  Users,
  Rocket,
  AlignEndHorizontal,
  CircleGauge,
} from "lucide-react";

const values = [
  {
    title: "Customer Empathy",
    subtitle: "Every roadmap starts with user research and clear outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Quality First",
    subtitle:
      "Automated tests, clean architecture, and code reviews are standard.",
    icon: Globe,
  },
  {
    title: "Close Client Care",
    subtitle:
      "Weekly demos, transparent sprint updates, and long-term partnerships.",
    icon: Users,
  },
  {
    title: "Speed Without Compromise",
    subtitle:
      "Fast iteration and frequent feedback loops with scalability baked in.",
    icon: CircleGauge,
  },
  {
    title: "Flexible Engagement",
    subtitle:
      "Project-based, dedicated squad, or retainer models to match your needs.",
    icon: AlignEndHorizontal,
  },
  {
    title: "Outcome Guarantee",
    subtitle:
      "We measure success by revenue lift, retention, and product adoption.",
    icon: Rocket,
  },
];

export const ValuesSection = () => {
  return (
    <Section id="values" className="bg-background">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="heading-section leading-tight">
            <span className="text-foreground"> What We</span>
            <span className="heading-section-accent"> Stand For</span>
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values?.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="border-emerald-100 group">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-(--surface) text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-2 text-paragraph  leading-relaxed">
                  {value.subtitle}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
