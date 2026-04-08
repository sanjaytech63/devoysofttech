"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const milestones = [
  {
    year: "2017",
    title: "Founded in Jaipur",
    detail:
      "Devoy Softtech launched with a small team, big ambitions, and a mission to bring quality tech to underserved businesses.",
  },
  {
    year: "2018-19",
    title: "First 20 Clients + Mobile Division",
    detail:
      "Expanded across India in e-commerce, education, and healthcare. Launched dedicated iOS and Android development.",
  },
  {
    year: "2021",
    title: "International Clients",
    detail:
      "Expanded to serve clients in USA, UK, UAE, and Australia via Freelancer.com and Upwork.",
  },
  {
    year: "2023",
    title: "150+ Projects Delivered",
    detail:
      "Crossed the 150 project milestone with a 4.9 average rating across all platforms.",
  },
  {
    year: "2025-26",
    title: "200+ Projects & Growing",
    detail:
      "Scaling the dedicated developer program and AI-powered product builds for the next chapter.",
  },
];

export const MilestonesSection = () => {
  return (
    <Section id="about" className="bg-background">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-16 max-w-3xl text-center md:text-left">
            <h2 className="heading-section">
              7 Years <br /> of{" "}
              <span className="heading-section-accent">Milestones</span>
            </h2>
          </div>

          <div className="grid gap-8 md:gap-16 lg:grid-cols-2 items-start">
            <div className="relative">
              <div className="absolute left-4.5 top-2 bottom-2 w-1 btn-gradient" />
              <div className="space-y-8 md:space-y-12">
                {milestones.map((item, i) => (
                  <div key={i} className="flex gap-5 relative">
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-(--accent) shadow-md">
                      <div className="w-3.5 h-3.5 rounded-full bg-(--primary)" />
                    </div>

                    <div className="pt-1 pb-4">
                      <p className="text-sm font-semibold text-(--accent)">
                        {item.year}
                      </p>

                      <h3 className="text-base md:text-lg font-semibold text-foreground mt-1">
                        {item.title}
                      </h3>

                      <p className="text-paragraph  mt-1 max-w-md leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-minlstone.png"
                  alt="growth"
                  width={800}
                  height={800}
                  priority
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
