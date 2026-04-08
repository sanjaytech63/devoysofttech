"use client";

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
    <section className="bg-[#f8fafc] dark:bg-[#020617] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TITLE ================= */}
        <div className="mb-8 md:mb-16 max-w-3xl text-center md:text-left">
          <h2 className="heading-main leading-[1.1]">
            7 Years
            <br />
            Of{" "}
            <span className="heading-section-accent">
              Milestones
            </span>
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid gap-8 md:gap-16 lg:grid-cols-2 items-start">
          {/* ================= TIMELINE ================= */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-[4px] btn-gradient" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Dot */}
                  <div className="relative z-10 flex items-center justify-center w-[36px] h-[36px] rounded-full bg-green-500 shadow-md">
                    <div className="w-[14px] h-[14px] rounded-full bg-green-800" />
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-4">
                    <p className="text-sm font-semibold text-emerald-600">
                      {item.year}
                    </p>

                    <h3 className="text-base md:text-lg font-semibold text-foreground mt-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= IMAGE CARD ================= */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/about-minlstone.png"
                alt="growth"
                width={480}
                height={600}
                className="relative z-10 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
