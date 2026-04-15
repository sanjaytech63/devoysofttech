import {
  Code,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  ChartNoAxesCombined,
  Users,
} from "lucide-react";

import { FeatureItem } from "@/types";

export const FEATURES: FeatureItem[] = [
  {
    id: "web",
    label: "Web Dev",
    icon: Code,
    title: ["Website Development", "That Converts"],
    description:
      "fast, scalable, SEO- ready website tailored to your business goals. Every line of code written with performance and conversion in mind.",
    image: "/images/services/img1.png",
    tags: ["PHP / Laravel", "react / next.js", "Node.js", "Wordpress"],
    cta: "Start Web Project",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    title: ["Mobile Apps", "That Users Love"],
    description:
      "From wireframes to App Store — we craft cross-platform and native mobile apps with beautiful UI, silky performance, and 4+ star ratings.",
    image: "/images/services/img5.png",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    cta: "Build App",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    title: ["E-commerce", "That Actually Sells"],
    description:
      "Beautifully designed, conversion-optimized online stores built on the platforms that work best for your business.",
    image: "/images/services/img3.png",
    tags: ["Shopify", "Woo", "Payment", "Analytics"],
    cta: "Launch Store",
  },
  {
    id: "design",
    label: "Design",
    icon: LayoutDashboard,
    title: ["Design That Makes", "Brands Unforgettable"],
    description:
      "From logo to full brand identity — we craft visual systems that are distinctive, memorable, and built to last.",
    image: "/images/services/img4.png",
    tags: ["UI/UX", "Branding", "Figma", "Design System"],
    cta: "Start Design",
  },
  {
    id: "seo",
    label: "SEO",
    icon: ChartNoAxesCombined,
    title: ["SEO That Drives", "Organic Growth"],
    description:
      "From logo to full brand identity — we craft visual systems that are distinctive, memorable, and built to last.",
    image: "/images/services/img4.png",
    tags: ["Technical SEO", "On-page", "Analytics", "Performance"],
    cta: "Boost SEO",
  },
  {
    id: "hire-devs",
    label: "Hire Devs",
    icon: Users,
    title: ["Hire Developers", "That Deliver"],
    description:
      "fast, scalable, SEO- ready website tailored to your business goals. Every line of code written with performance and conversion in mind.",
    image: "/images/services/img5.png",
    tags: ["React", "Node", "Full Stack", "Dedicated Team"],
    cta: "Hire Now",
  },
];
