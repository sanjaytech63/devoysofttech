"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useScroll } from "@/hooks/useScroll";
import { testimonials } from "@/lib/constants";
import { Star } from "lucide-react";
import clsx from "clsx";

export const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScroll(ref);

  return (
    <Section id="testimonials" className="bg-(--surface)">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black md:text-5xl text-foreground">
            What Clients <span className="text-(--accent)">Say</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={clsx(
            "grid gap-6 md:grid-cols-2",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
            "transition-all duration-700",
          )}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={clsx(
                "rounded-2xl bg-white p-6 transition hover:shadow-md ",
                index === 2 && "md:col-span-2",
              )}
            >
              <div className="mb-3 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.quote}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    Freelancer • Top Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
