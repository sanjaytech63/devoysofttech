"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "../ui/Section";

type CTASectionProps = {
  id?: string;
  title: React.ReactNode;
  description?: string;

  primaryBtnText?: string;
  secondaryBtnText?: string;

  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export const CTASection = ({
  id = "cta",
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) => {
  return (
    <Section id={id}>
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
          <h2 className="heading-section text-white!">{title}</h2>

          {description && (
            <p className="text-paragraph mx-auto mt-4 max-w-2xl">
              {description}
            </p>
          )}

          {(primaryBtnText || secondaryBtnText) && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {primaryBtnText && (
                <Button
                  onClick={onPrimaryClick}
                  className="
                    bg-white text-slate-900!
                    hover:bg-slate-100
                    px-6 py-2.5
                    rounded-lg font-medium
                    shadow-sm
                  "
                >
                  {primaryBtnText}
                </Button>
              )}

              {secondaryBtnText && (
                <Button
                  onClick={onSecondaryClick}
                  variant="outline"
                  className="
                    border border-white/60
                    text-white
                    hover:bg-white hover:text-slate-900
                    px-6 py-2.5
                    rounded-lg
                  "
                >
                  {secondaryBtnText}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
