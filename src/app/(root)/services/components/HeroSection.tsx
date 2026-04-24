"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section id="about-hero" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div>
          <h1 className="heading-section leading-tight">
            <span className="text-foreground">Full Stack</span>{" "}
            <span className="heading-section-accent">Digital </span>
            <br />
            <span className="heading-section-accent">Services</span>{" "}
            <span className="text-foreground">Under One Roof</span>
          </h1>

          <p className="text-paragraph mt-4 md:mt-6 leading-relaxed max-w-2xl ">
            From idea to launch — web, mobile, design, marketing, and everything
            in between.
          </p>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home-hero-bg.png"
          alt="home-hero-bg"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/images/home-hero-bg.png"
          sizes="100vw"
          className="object-cover object-center"
        />

        <Image
          src="/images/home-hero-img.png"
          alt="Team working on digital products"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/images/home-hero-img.png"
          sizes="100vw"
          className="object-cover object-center-bottom mix-blend-multiply"
        />
      </div>
    </Section>
  );
}
