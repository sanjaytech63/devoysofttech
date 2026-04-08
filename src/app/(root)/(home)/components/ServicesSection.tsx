"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useScroll } from "@/hooks/useScroll";
import { services } from "@/lib/constants";
import {
  Code2,
  Smartphone,
  LayoutDashboard,
  ShoppingCart,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  code: Code2,
  smartphone: Smartphone,
  layout: LayoutDashboard,
  "shopping-cart": ShoppingCart,
  "trending-up": TrendingUp,
  users: Users,
};

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScroll(ref);

  return (
    <Section id="services" className="bg-(--surface)">
      <Container>
        <div>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-black md:text-4xl text-foreground">
              Services We <span className="text-(--accent)">Provide</span>
            </h2>

            <Button className="group hidden  md:flex items-center gap-2 btn-gradient text-sm">
              View All Service
              <OptimizedImage
                src="/images/arrow.svg"
                alt="arrow-icon"
                fill={false}
                containerClassName="w-7 h-7 transition-transform duration-300 group-hover:rotate-36"
                priority
              />
            </Button>
          </div>

          <div
            ref={ref}
            className={clsx(
              "grid gap-12 sm:grid-cols-2 lg:grid-cols-3",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
              "transition-all duration-700 ",
            )}
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <div
                  key={service.id}
                  className="
                  rounded-2xl 
                  bg-white 
                  p-6 
                  transition 
                  hover:shadow-2xl
                  group 
                "
                >
                  <div
                    className="
                    mb-4 flex h-10 w-10 items-center justify-center 
                    rounded-lg 
                    bg-(--surface) text-(--accent)
                    transition-all duration-300
                    group-hover:bg-(--accent) 
                    group-hover:text-white
                  "
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700" aria-label={`Learn more about ${service.title}`}>
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
