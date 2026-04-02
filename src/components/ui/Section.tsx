import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${className ?? ""}`}> {children} </section>
);
