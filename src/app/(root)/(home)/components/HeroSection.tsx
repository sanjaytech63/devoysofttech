"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

export const HeroSection = () => {
  return (
    <Section id="home" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div className={`max-w-3xl space-y-6 transition-all duration-700`}>
          <h1 className="heading-main md:text-6xl">
            We <span className="text-gradient-green">Build</span>
            <br />
            <span className="text-gradient-green">Digital</span>
            <br />
            Products That <br /> Grow Businesses
          </h1>

          <p className="text-paragraph">
            Custom Web & Mobile Solutions That Convert Leads Into Clients —
            Designed With Precision, Built With Passion, Since 2017.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="group flex hover:shadow-2xl items-center gap-2 btn-gradient">
              See Our Work
              <OptimizedImage
                src="/images/arrow.svg"
                alt="arrow-icon"
                fill={false}
                containerClassName="w-7 h-7 transition-transform duration-300 group-hover:rotate-36"
                priority
              />
            </Button>

            <Button className="bg-white text-slate-900! border border-slate-200 hover:text-(--accent)!  hover:border-(--accent) hover:bg-white">
              Get A Free Quote
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-700">
            <div>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                7+
              </p>
              <p className="text-xs dark:text-slate-300">Years Active</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                200+
              </p>
              <p className="text-xs dark:text-slate-300">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                4.9<span className="text-[25px]">★</span>
              </p>
              <p className="text-xs dark:text-slate-300">Avg Rating</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/home-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <Image
          src="/images/home-hero-img.png"
          alt="Team working on digital products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center-bottom mix-blend-multiply"
        />
      </div>
    </Section>
  );
};
