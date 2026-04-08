"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section id="different" className="bg-(--surface) py-16 md:py-24">
      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-main leading-tight tracking-tight">
              <span className="text-foreground">Built In Jaipur.</span>
              <br />
              <span className="heading-section-accent">Trusted Worldwide.</span>
            </h1>

            <p className="text-paragraph mt-4 md:mt-6 leading-relaxed max-w-2xl ">
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
