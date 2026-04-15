"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

const team = [
  {
    name: "Sanjay Choudhary",
    role: "Founder & CEO",
    bio: "20+ years bringing tech products from idea to scale.",
    image: "/images/about/img1.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Chief Technology Officer",
    bio: "Architect of distributed systems and performance delivery.",
    image: "/images/about/img2.jpg",
  },
  {
    name: "Neha Jain",
    role: "Head of Design",
    bio: "Designs experiences that drive engagement and retention.",
    image: "/images/about/img3.jpg",
  },
  {
    name: "Ankit Singh",
    role: "Delivery Lead",
    bio: "Ensures delivery reliability with strong engineering discipline.",
    image: "/images/about/img4.jpg",
  },
 
];

export const TeamSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section id="team" className="bg-(--surface)">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="heading-section">
            The People Behind{" "}
            <span className="text-emerald-600">Every Build</span>
          </h2>
          <p className="text-paragraph mt-3">
            A multidisciplinary team powering your product journey.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow p-2"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow p-2"
          >
            <ArrowRight />
          </button>

          <div className="overflow-hidden mx-10" ref={emblaRef}>
            <div className="flex gap-4 p-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="min-w-[85%] sm:min-w-[49%] lg:min-w-[24%]"
                >
                  <Card className="p-0!  overflow-hidden hover:translate-y-0 ">
                    <div className="h-72 w-full overflow-hidden">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        fill={true}
                        containerClassName="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-700">
                        {member.role}
                      </p>
                      <p className="mt-2 text-sm text-(--muted) dark:text-slate-300">
                        {member.bio}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
