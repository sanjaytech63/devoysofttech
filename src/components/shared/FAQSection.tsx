"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FAQItem } from "./FAQItem";

interface FAQSectionProps {
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
  title?: string;
  highlight?: string;
  className?: string;
}

export const FAQSection = ({
  faqs,
  title = "Common",
  highlight = "Questions",
  className = "",
}: FAQSectionProps) => {
  return (
    <Section id="faq" className={className}>
      <Container>
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="heading-section">
            {title} <span className="heading-section-accent">{highlight}</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
