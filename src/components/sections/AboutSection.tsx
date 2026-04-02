"use client";

import Image from "next/image";
import { CheckCircle, Code2, Cpu, MessageSquare } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { useRef } from "react";
import { useScroll } from "@/hooks/useScroll";

const features = [
  {
    title: "Discovery & Strategy",
    icon: <MessageSquare size={20} className="text-emerald-500" />,
    description:
      "Research-led planning and MVP roadmaps for product market fit.",
  },
  {
    title: "Design System",
    icon: <Code2 size={20} className="text-emerald-500" />,
    description:
      "Atomic design tokens, accessible components, and evolving brand UI.",
  },
  {
    title: "Engineering Excellence",
    icon: <Cpu size={20} className="text-emerald-500" />,
    description:
      "Performance-first architecture with testing and continuous integration.",
  },
  {
    title: "Ongoing Support",
    icon: <CheckCircle size={20} className="text-emerald-500" />,
    description:
      "Dedicated maintenance, release management and growth iterations.",
  },
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScroll(ref);

  return (
    <Section
      id="about"
      className="bg-[var(--surface)] dark:bg-[var(--surface-2)] "
    >
      <Container>
        <div
          className={`grid grid-cols-1 gap-10 lg:grid-cols-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}
          ref={ref}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--background)] via-[var(--surface)] to-[var(--accent-light)] p-6 shadow-md">
            <Badge className="mb-4">Est. 2017</Badge>
            <div className="relative h-[320px] w-full rounded-2xl border border-dashed border-[var(--primary)] bg-gradient-to-br from-[var(--accent-light)] to-transparent">
              <Image
                src="/images/mi_moon.svg"
                alt="About visual"
                fill
                className="rounded-2xl object-cover"
                priority={false}
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.25),transparent_40%)]" />
          </div>

          <div>
            <Heading
              title="We Grow Your Business Digitally"
              subtitle="DevoySoftTech is a creative IT company founded in 2017. We help businesses establish and expand their brand in a digital-first world."
            />
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-900/30">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
