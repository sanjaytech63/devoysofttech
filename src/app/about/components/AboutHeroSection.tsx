"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useScroll } from "@/hooks/useScroll";
import clsx from "clsx";

export const AboutHeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScroll(ref);

  return (
    <Section id="about" className="bg-background">
      <Container>
        <div
          ref={ref}
          className={clsx(
            "grid gap-10 lg:grid-cols-2 items-center",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            "transition-all duration-700",
          )}
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3D1E] to-[#22C55E] p-6 h-[380px] overflow-hidden">
            <div className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
              7+ Years
            </div>

            <div className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
              200+ Projects
            </div>

            <div className="flex h-full items-center justify-center">
              <div className="text-center text-white">
                <p className="text-6xl font-black opacity-20">2017</p>
                <p className="text-xs opacity-80">Est. Jaipur, India</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-section leading-tight">
              We Make Life <span className="heading-section-accent">Better</span>{" "}
              Through Technology
            </h2>

            <p className="text-paragraph mt-4 max-w-md font-bold">
              Devoy Softech is a product team for hire that makes life better.
            </p>
            <p className="text-paragraph mt-4 max-w-md">
              Devoy Softech is a creative IT company founded in 2017. We help
              businesses establish and expand their brand in a digital-first
              world — converting leads into loyal clients.
            </p>
            <p className="text-paragraph mt-4 max-w-md">
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
