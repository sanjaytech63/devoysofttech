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
//   "Logo & Branding",
//   "WordPress",
];

export const ServicesTicker = () => {
  return (
    <section className="bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              <span className="hover:text-emerald-600 transition">{item}</span>
              {index !== items.length - 1 && (
                <span className="hidden sm:inline-block w-2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
