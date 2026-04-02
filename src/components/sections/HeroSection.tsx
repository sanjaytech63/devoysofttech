"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useScroll } from "@/hooks/useScroll";
import { siteStats } from "@/lib/constants";

const AnimatedStats = dynamic(
  () => import("../sections/StatsSection").then((mod) => mod.StatsSection),
  { ssr: false },
);

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useScroll(heroRef);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-[var(--background)] via-[var(--surface)] to-[var(--accent-light)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(34,197,94,0.3),transparent_45%),radial-gradient(circle_at_90%_70%,rgba(16,185,129,0.18),transparent_40%)]"></div>
      <Container className="relative z-10 py-24 md:py-32">
        <div
          className={`mx-auto max-w-5xl space-y-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)]/30 px-4 py-1 text-sm font-semibold text-[var(--primary)]">
            <Award size={16} /> 7+ Years building modern SaaS platforms
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--foreground)] md:text-6xl">
            We{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-lime-500 to-cyan-400 bg-clip-text text-transparent">
              Build Digital Products
            </span>{" "}
            That Grow Businesses
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            Custom web & mobile solutions that convert leads into
            clients—designed with precision, built with passion since 2017.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" className="flex items-center gap-2">
              <span>See Our Work</span>
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary">Get A Free Quote</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            {siteStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)]/90 p-4 text-center shadow-sm backdrop-blur-md"
              >
                <p className="text-2xl font-black text-[var(--primary)]">
                  {item.value}
                </p>
                <p className="text-sm uppercase tracking-wide text-[var(--text-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 right-0 hidden w-1/2 md:block">
        <Image
          src="/images/Rectangle-40426.svg"
          alt="decorative grid"
          width={800}
          height={600}
          className="opacity-80"
          priority={true}
        />
      </div>

      <AnimatedStats />
    </section>
  );
};
