"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useScroll } from "@/hooks/useScroll";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const visible = useScroll(ref);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#E6F4EA] via-[#DFF5E6] to-[#CFF3DC]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute right-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-white/40 blur-3xl" />

      <Container className="relative z-10 py-24 md:py-32">
        <div
          className={`max-w-3xl space-y-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-black leading-tight text-[var(--foreground)] md:text-6xl">
            We <span className="text-gradient-green">Build</span>
            <br />
            <span className="text-gradient-green">Digital</span>
            <br />
            Products That <br /> Grow  Businesses
          </h1>

          <p className="text-base text-slate-600 md:text-lg">
            Custom Web & Mobile Solutions That Convert Leads Into Clients —
            Designed With Precision, Built With Passion, Since 2017.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="flex items-center gap-2 btn-gradient">
              See Our Work <ArrowRight size={16} />
            </Button>

            <Button className="bg-white !text-slate-900 border border-slate-200 hover:bg-slate-100">
              Get A Free Quote
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-700">
            <div>
              <p className="text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">
                7+
              </p>
              <p className="text-xs">Years Active</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">
                200+
              </p>
              <p className="text-xs">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">
                4.9★
              </p>
              <p className="text-xs">Avg Rating</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 right-0 hidden w-1/2 md:block opacity-40">
        <Image
          src="/images/Rectangle-40426.svg"
          alt="grid"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};
