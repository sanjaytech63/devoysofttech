"use client";

import { type ReactNode, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useScroll } from "@/hooks/useScroll";
import { services } from "@/lib/constants";
import {
  Code2,
  LayoutDashboard,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const iconMap: Record<string, ReactNode> = {
  code: <Code2 size={24} />,
  smartphone: <Code2 size={24} />,
  layout: <LayoutDashboard size={24} />,
  "shopping-cart": <ShoppingCart size={24} />,
  "trending-up": <TrendingUp size={24} />,
  users: <Users size={24} />,
};

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScroll(ref);

  return (
    <Section id="services">
      <Container>
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Heading
            title="Services We Provide"
            subtitle="Premium services engineered for B2B SaaS, marketplaces, and scale-ups."
          />
          <Button variant="ghost">View All Services</Button>
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}
        >
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl focus-within:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300 transition-transform duration-300 group-hover:-translate-y-1">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
