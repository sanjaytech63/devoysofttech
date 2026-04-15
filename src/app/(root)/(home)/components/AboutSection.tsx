"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MessageSquare, FileText, Code2, Headphones } from "lucide-react";
import clsx from "clsx";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

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
  return (
    <Section id="about" className="bg-background">
      <Container>
        <div className={clsx("grid gap-10 lg:grid-cols-2 items-center")}>
          <OptimizedImage
            src="/images/about-hero-img.png"
            alt="growth"
            fill={true}
            containerClassName="w-full h-full"
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-(--surface) text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-paragraph text-sm!">{item.desc}</p>
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
