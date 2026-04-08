"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  Trophy,
  Sparkles,
  Layers,
  Cpu,
  PieChart,
  ShieldAlert,
} from "lucide-react";

const differentiators = [
  {
    title: "Fast Delivery",
    desc: "Sprints as short as 1 week with immediate product value.",
    icon: Trophy,
  },
  {
    title: "Low Retainer",
    desc: "Transparent pricing with flexible engagement models.",
    icon: Sparkles,
  },
  {
    title: "Pixel-Perfect UI",
    desc: "Accessibility-first designs built for conversions.",
    icon: Layers,
  },
  {
    title: "Enterprise Architecture",
    desc: "Modern microservices, observability and autoscaling included.",
    icon: Cpu,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Dashboard telemetry and business KPI tracking.",
    icon: PieChart,
  },
  {
    title: "Security & Compliance",
    desc: "SOC2-ready processes and secure cloud deployments.",
    icon: ShieldAlert,
  },
];

export const DifferentiatorsSection = () => (
  <Section id="different" className="bg-(--surface)">
    <Container>
      <div className="mx-auto mb-12">
        <h2 className="heading-section">
          What Makes <span className="heading-section-accent">Us Different</span>
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-emerald-100 group">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-(--muted) dark:text-slate-300">{item.desc}</p>
            </Card>
          );
        })}
      </div>
    </Container>
  </Section>
);
