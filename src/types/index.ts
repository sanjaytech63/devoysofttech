import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  image: string;
};

export type FooterConfig = {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  services: string[];
  company: string[];
  social: SocialLink[];
};

export type FeatureItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: [string, string];
  description: string;
  image: string;
  tags: string[];
  cta: string;
  items: FeatureGridItem[];
};

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
};

export type FeatureGridSectionProps = {
  title: string;
  accent?: string;
  items: FeatureGridItem[];
  variant?: "soft" | "default";
  columns?: 2 | 3 | 4;
};

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export type FAQItemType = {
  id: string;
  question: string;
  answer: string;
};

export type ServiceType =
  | "Website"
  | "E-commerce"
  | "Mobile App"
  | "Design"
  | "SEO"
  | "Hire Developer";

export type BudgetType = "10k-30k" | "30k-1L" | "1L-5L" | "5L+";

export interface BriefFormValues {
  service?: ServiceType;
  budget?: BudgetType;

  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  timeline?: string;
  description: string;
}
