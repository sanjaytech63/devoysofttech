"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export const ContactHeroSection = () => {
  return (
    <Section id="home" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div
          className={`max-w-3xl space-y-4 md:space-y-6 transition-all duration-700`}
        >
          <h1 className="heading-section leading-tight text-center md:text-left">
            Start Your <span className="text-gradient-green">Project</span>
            <br className="hidden sm:block" />
            <span className="text-gradient-green">Today</span>
            <br />
          </h1>

          <p className="text-paragraph text-center md:text-left">
            Tell us what you need — we will send a tailored proposal within 24
            hours. No obligation, no fluff.
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
};
