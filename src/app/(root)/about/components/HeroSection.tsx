"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section id="about-hero" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-section leading-tight">
            <span className="text-foreground">Built In Jaipur.</span>
            <br />
            <span className="heading-section-accent">Trusted Worldwide.</span>
          </h1>

          <p className="text-paragraph mt-4 md:mt-6 leading-relaxed max-w-2xl ">
            Since 2017, we’ve been on a mission to help businesses grow
            digitally — with honest work, transparent processes, and technology
            that delivers.
          </p>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home-hero-img.png"
          alt="Team working on digital products"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/images/bluer-image.png"
          sizes="100vw"
          className="object-cover object-center-bottom mix-blend-multiply"
        />
      </div>
    </Section>
  );
}
