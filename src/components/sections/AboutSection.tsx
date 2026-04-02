"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useRef } from "react";
import { useScroll } from "@/hooks/useScroll";
import { MessageSquare, FileText, Code2, Headphones } from "lucide-react";
import clsx from "clsx";

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
    <Section id="about" className="bg-[var(--background)]">
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
            <h2 className="text-3xl font-black md:text-5xl leading-tight text-[var(--foreground)]">
              We <span className="text-[var(--accent)]">Grow</span> Your
              Business Digitally
            </h2>

            <p className="mt-4 text-sm text-slate-600 max-w-md">
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
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
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
