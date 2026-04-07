import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "../ui/Section";

export const CTASection = () => (
  <Section id="cta">
    <Container>
      <div
        className="
          rounded-2xl
          bg-linear-to-r from-[#0B3D1E] via-[#14532D] to-[#15803D]
          px-6 py-12 sm:px-12 sm:py-16
          text-center text-white
          shadow-[0_10px_40px_rgba(0,0,0,0.2)]
        "
      >
        <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
          Ready to Build something
          <br className="" />
          Extraordinary ?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100 sm:text-base">
          Tell Us About Your Project - We’ll Get Back Within 24 Hours.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            className="
              bg-white text-slate-900!
              hover:bg-slate-100
              px-6 py-2.5
              rounded-lg font-medium
              shadow-sm
            "
          >
            Start a Project
          </Button>

          <Button
            variant="outline"
            className="
              border border-white/60
              text-white
              hover:bg-white hover:text-slate-900
              px-6 py-2.5
              rounded-lg
            "
          >
            See Our Work →
          </Button>
        </div>
      </div>
    </Container>
  </Section>
);
