"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useRef } from "react";
import { useScroll } from "@/hooks/useScroll";
import { MessageSquare, FileText, Code2, Headphones } from "lucide-react";
import clsx from "clsx";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import Image from "next/image";

const features = [
  {
    title: "Discussion",
    icon: MessageSquare,
    desc: "We deeply understand your requirement pricing from day one.",
  },
  {
    title: "Documentation",
    icon: FileText,
    desc: "NDA-backed privacy, clear timelines, full project docs.",
  },
  {
    title: "Coding & Design",
    icon: Code2,
    desc: "Built by experts, rigorously tested before going live.",
  },
  {
    title: "Support",
    icon: Headphones,
    desc: "Ongoing maintenance to keep you ahead.",
  },
];

export const AboutSection = () => {
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
          <Image
            src="/images/about-hero-img.png"
            alt="growth"
            width={480}
            height={600}
            className="relative z-10 w-[360px] md:w-[420px] lg:w-[480px] h-auto object-cover"
            priority
          />

          <div>
            <h2 className="heading-section">
              We <span className="heading-section-accent">Grow</span> Your
              Business Digitally
            </h2>

            <p className="text-paragraph mt-4">
              Devoy Softtech is a creative IT company founded in 2017. We help
              businesses establish and expand their brand in a digital-first
              world — converting leads into loyal clients.
            </p>
            

            <div className="mt-6 space-y-3">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
