import {
  Code,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  ChartNoAxesCombined,
  Users,
} from "lucide-react";

import {
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaWordpress,
  FaReact,
  FaAndroid,
  FaApple,
  FaMagento,
} from "react-icons/fa";

import { SiFlutter, SiShopify, SiWoocommerce } from "react-icons/si";

import { FaCartShopping } from "react-icons/fa6";
import { FeatureItem } from "@/types";

export const FEATURES: FeatureItem[] = [
  {
    id: "web",
    label: "Web Dev",
    icon: Code,
    title: ["Website Development", "That Converts"],
    description:
      "Fast, scalable, SEO-ready websites tailored to your business goals.",
    image: "/images/services/img1.png",
    tags: ["PHP / Laravel", "React / Next.js", "Node.js", "WordPress"],
    cta: "Start Web Project",
    items: [
      {
        title: "PHP Development",
        description: "Robust backend solutions with core PHP.",
        icon: FaPhp,
      },
      {
        title: "Laravel Development",
        description: "Modern web apps using Laravel framework.",
        icon: FaLaravel,
      },
      {
        title: "Node.js Development",
        description: "High-performance backend with Node.js.",
        icon: FaNodeJs,
      },
      {
        title: "Angular Development",
        description: "Dynamic and scalable frontend apps.",
        icon: FaReact,
      },
      {
        title: "Ruby on Rails",
        description: "Fast development with clean architecture.",
        icon: FaReact,
      },
      {
        title: "WordPress Development",
        description: "Custom themes and plugins.",
        icon: FaWordpress,
      },
      {
        title: "React Development",
        description: "Modern UI with React ecosystem.",
        icon: FaReact,
      },
      {
        title: "Shopify Development",
        description: "Ecommerce solutions with Shopify.",
        icon: SiShopify,
      },
    ],
  },

  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    title: ["Mobile Apps", "That Users Love"],
    description: "We craft high-performance mobile apps with beautiful UI.",
    image: "/images/services/img5.png",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    cta: "Build App",
    items: [
      {
        title: "iOS App Development",
        description: "Native apps for iPhone & iPad.",
        icon: FaApple,
      },
      {
        title: "Android Development",
        description: "Optimized apps for Android devices.",
        icon: FaAndroid,
      },
      {
        title: "Flutter Development",
        description: "Cross-platform apps with Flutter.",
        icon: SiFlutter,
      },
      {
        title: "Hybrid Apps",
        description: "Apps using React Native.",
        icon: FaReact,
      },
    ],
  },

  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    title: ["E-commerce", "That Actually Sells"],
    description: "Conversion-focused online stores built for growth.",
    image: "/images/services/img3.png",
    tags: ["Shopify", "Woo", "Payment", "Analytics"],
    cta: "Launch Store",
    items: [
      {
        title: "Shopify Development",
        description: "Custom Shopify stores.",
        icon: SiShopify,
      },
      {
        title: "WooCommerce",
        description: "Flexible WordPress ecommerce.",
        icon: SiWoocommerce,
      },
      {
        title: "Magento",
        description: "Enterprise-level ecommerce.",
        icon: FaMagento,
      },
      {
        title: "OpenCart",
        description: "Lightweight ecommerce solution.",
        icon: FaCartShopping,
      },
    ],
  },

  {
    id: "design",
    label: "Design",
    icon: LayoutDashboard,
    title: ["Design That Makes", "Brands Unforgettable"],
    description: "We craft stunning visuals and brand identities.",
    image: "/images/services/img4.png",
    tags: ["UI/UX", "Branding", "Figma", "Design System"],
    cta: "Start Design",
    items: [
      {
        title: "UI/UX Design",
        description: "User-focused modern interfaces.",
        icon: LayoutDashboard,
      },
      {
        title: "Brand Identity",
        description: "Logos, colors, and brand systems.",
        icon: LayoutDashboard,
      },
      {
        title: "Wireframing",
        description: "Blueprints for digital products.",
        icon: LayoutDashboard,
      },
      {
        title: "Design Systems",
        description: "Scalable design consistency.",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    id: "seo",
    label: "SEO",
    icon: ChartNoAxesCombined,
    title: ["SEO That Drives", "Organic Growth"],
    description: "Improve visibility and rank higher on search engines.",
    image: "/images/services/img4.png",
    tags: ["Technical SEO", "On-page", "Analytics", "Performance"],
    cta: "Boost SEO",
    items: [
      {
        title: "Technical SEO",
        description: "Improve site structure & speed.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "On-page SEO",
        description: "Content & keyword optimization.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Analytics",
        description: "Track performance & insights.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Performance Optimization",
        description: "Speed & Core Web Vitals.",
        icon: ChartNoAxesCombined,
      },
    ],
  },

  {
    id: "hire-devs",
    label: "Hire Devs",
    icon: Users,
    title: ["Hire Developers", "That Deliver"],
    description: "Dedicated developers ready to scale your team.",
    image: "/images/services/img5.png",
    tags: ["React", "Node", "Full Stack", "Dedicated Team"],
    cta: "Hire Now",
    items: [
      {
        title: "Frontend Developers",
        description: "React, Next.js experts.",
        icon: Users,
      },
      {
        title: "Backend Developers",
        description: "Node.js, Laravel specialists.",
        icon: Users,
      },
      {
        title: "Full Stack Developers",
        description: "End-to-end development.",
        icon: Users,
      },
      {
        title: "Dedicated Teams",
        description: "Scale your team instantly.",
        icon: Users,
      },
    ],
  },
];
