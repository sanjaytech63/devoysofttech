"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FAQItem } from "./FAQItem";
import { FAQS } from "@/lib/constants";

export const FAQSection = () => {
  return (
    <Section id="faq">
      <Container>
        {/* HEADING */}
        <div className="max-w-5xl mx-auto  mb-12">
          <h2 className="heading-section">
            Common <span className="heading-section-accent">Question</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-5xl mx-auto space-y-4">
          {FAQS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
