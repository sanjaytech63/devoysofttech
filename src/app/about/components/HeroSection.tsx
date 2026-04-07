"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section id="different" className="bg-(--surface)">
      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-foreground">Built In Jaipur.</span>
              <br />
              <span className="text-(--accent)">Trusted Worldwide.</span>
            </h1>

            <p className="mt-6 text-sm md:text-base text-(--muted) leading-relaxed">
              Since 2017, we’ve been on a mission to help businesses grow
              digitally — with honest work, transparent processes, and
              technology that delivers.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
