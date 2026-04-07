"use client";

import { Container } from "@/components/ui/Container";

const items = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "SEO & Marketing",
  "E-Commerce",
  "Laravel & React",
  "Flutter Apps",
  "Dedicated Developers",
  "Custom Software",
  "Cloud Solutions",
  "API Development",
  "Maintenance & Support",
  "Digital Transformation",
  "Agile Methodology",
];

export const ServicesTicker = () => {
  return (
    <section className="bg-white dark:bg-[#111827] overflow-hidden">
      <Container>
        <div className="relative py-4">
          <div className="flex w-max animate-marquee gap-8">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                <span className="hover:text-emerald-600 transition">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
