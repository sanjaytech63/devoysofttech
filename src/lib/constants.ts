import { FAQItemType, PortfolioItem, Service, Testimonial } from "@/types";
import {
  ShieldCheck,
  Globe,
  Users,
  Rocket,
  AlignEndHorizontal,
  CircleGauge,
  Ratio,
  Atom,
  Database,
  Container,
  FileCode,
  Server,
  Cloud,
  Trophy,
  Sparkles,
  Layers,
  Cpu,
  PieChart,
  ShieldAlert,
  ShoppingBag,
  BarChart,
  Megaphone,
  Smartphone,
  LayoutDashboard,
  Search,
  Palette,
} from "lucide-react";

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Tailored web apps with performance-first architecture.",
    icon: "code",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description: "Cross-platform native apps with pixel-perfect UI.",
    icon: "smartphone",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "High conversion design systems and interaction flows.",
    icon: "layout",
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Rapid storefronts with secure payment and analytics.",
    icon: "shopping-cart",
  },
  {
    id: 5,
    title: "SEO & Marketing",
    description: "Growth-focused campaigns and analytics optimization.",
    icon: "trending-up",
  },
  {
    id: 6,
    title: "Dedicated Teams",
    description: "Experienced squads for long-term product roadmaps.",
    icon: "users",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tanya Reed",
    role: "Founder",
    company: "Headway Labs",
    quote:
      "They translated our vision into a modern, performant SaaS platform.",
    rating: 5,
    avatar: "/images/Vector-1.svg",
  },
  {
    id: 2,
    name: "Marco Silva",
    role: "CTO",
    company: "ScaleUp",
    quote: "Engineering practices and product strategy were top tier.",
    rating: 5,
    avatar: "/images/Vector-2.svg",
  },
  {
    id: 3,
    name: "Priya Kapoor",
    role: "Product Manager",
    company: "FlowHQ",
    quote:
      "A smooth process from discovery to launch with outstanding quality.",
    rating: 5,
    avatar: "/images/Group.svg",
  },
];

export const siteStats = [
  { label: "Projects", value: 200 },
  { label: "Happy Clients", value: 150 },
  { label: "Years in Business", value: 7 },
  { label: "Avg Rating", value: 4.9 },
];

export const values = [
  {
    title: "Client-First Always",
    description:
      "Your success is our metric. We celebrate your wins, own our mistakes, and always act in your best interest.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Over Speed",
    description:
      "We move fast, but never cut corners. Every deliverable goes through our process before it reaches you.",
    icon: Globe,
  },
  {
    title: "Privacy & Trust",
    description:
      "Every project is covered by NDA. Your ideas, data, and business information are protected.",
    icon: Users,
  },
  {
    title: "Constant Innovation",
    description:
      "We stay current — always learning new tools and design trends.",
    icon: CircleGauge,
  },
  {
    title: "Long-term Relationships",
    description: "Most of our clients have been with us for 3+ years.",
    icon: AlignEndHorizontal,
  },
  {
    title: "Radical Transparency",
    description: "No hidden fees. Clear timelines and honest communication.",
    icon: Rocket,
  },
];

export const differentiators = [
  {
    title: "Fast Delivery",
    description: "Most projects ship in 2-6 week, not month.",
    icon: Trophy,
  },
  {
    title: "Honest Pricing",
    description:
      "No surprises. Fixed quotes, milestone billing, no hidden charges.",
    icon: Sparkles,
  },
  {
    title: "Full Stack",
    description: "Design → Dev → SEO → Launch. One team, one source of truth.",
    icon: Layers,
  },
  {
    title: "Direct Comms",
    description: "You talk directly to your team — no account managers.",
    icon: Cpu,
  },
  {
    title: "Agile Process",
    description: "Weekly demos, fast iterations, open feedback loops.",
    icon: PieChart,
  },
  {
    title: "NDA Guaranteed",
    description: "Every client gets a signed NDA before the first meeting.",
    icon: ShieldAlert,
  },
  {
    title: "Quality Tested ",
    description:
      "Every product undergoes testing to ensure quality performance, and reliability",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored systems designed to meet your exact project requirements.",
    icon: Ratio,
  },
];

export const TECH_STACK = [
  { name: "React", icon: Atom },
  { name: "MongoDB", icon: Database },
  { name: "Docker", icon: Container },
  { name: "TypeScript", icon: FileCode },
  { name: "MySQL", icon: Server },
  { name: "Next.js", icon: Globe },
  { name: "AWS", icon: Cloud },
  { name: "Redis", icon: Cpu },
];

export const FAQS: FAQItemType[] = [
  {
    id: "1",
    question: "How can I reset my password?",
    answer:
      "Go to login → click 'Forgot password' → follow email instructions.",
  },
  {
    id: "2",
    question: "How do I update billing information?",
    answer: "Navigate to account settings → billing → update details securely.",
  },
  {
    id: "3",
    question: "How can I contact support?",
    answer: "Use live chat or email support for quick assistance.",
  },
  {
    id: "4",
    question: "How do I delete my account?",
    answer: "Contact support or request deletion from account settings.",
  },
];

export const CONTACT_FAQS: FAQItemType[] = [
  {
    id: "1",
    question: "How quickly do you respond to new inquiries?",
    answer:
      "Go to login → click 'Forgot password' → follow email instructions.",
  },
  {
    id: "2",
    question: "Do you sign NDAs before discussing project details?",
    answer: "Navigate to account settings → billing → update details securely.",
  },
  {
    id: "3",
    question: "Do you work with international clients?",
    answer: "Use live chat or email support for quick assistance.",
  },
  {
    id: "4",
    question: "What's your payment structure?",
    answer: "Contact support or request deletion from account settings.",
  },
];

export const STEPS = [
  { id: 1, title: "Service" },
  { id: 2, title: "Budget" },
  { id: 3, title: "Details" },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "freshmart",
    title: "FreshMart – Grocery Platform",
    description:
      "Premium online grocery store with subscription boxes and real-time inventory.",
    year: 2024,
    rating: 4.9,
    categories: ["ecommerce", "web"],
    tags: ["E-commerce", "Shopify"],
    image: "/images/projects/freshmart.jpg",
    icon: ShoppingBag,
  },
  {
    id: "velocita",
    title: "Velocita – Automotive Rebrand",
    description:
      "Visual identity, 3D renders, and promotional video site for car accessories.",
    year: 2023,
    rating: 4.9,
    categories: ["design"],
    tags: ["Branding", "3D Design"],
    image: "/images/projects/velocita.jpg",
    icon: Palette,
  },
  {
    id: "jaipurstays",
    title: "JaipurStays – SEO Campaign",
    description:
      "Page 5 to #1 ranking for competitive hotel keywords — 280% growth.",
    year: 2023,
    rating: 4.9,
    categories: ["seo"],
    tags: ["SEO", "Content"],
    image: "/images/projects/seo.jpg",
    icon: Search,
  },
  {
    id: "fintrack",
    title: "FinTrack – SaaS Dashboard",
    description:
      "Advanced analytics dashboard with real-time financial insights and reporting.",
    year: 2024,
    rating: 4.8,
    categories: ["ecommerce"],
    tags: ["Analytics", "Dashboard"],
    image: "/images/projects/fintrack.jpg",
    icon: LayoutDashboard,
  },
  {
    id: "fitapp",
    title: "FitApp – Mobile Fitness App",
    description:
      "Cross-platform fitness tracking app with workout plans and AI coaching.",
    year: 2024,
    rating: 4.7,
    categories: ["mobile"],
    tags: ["React Native", "Health"],
    image: "/images/projects/fitapp.jpg",
    icon: Smartphone,
  },
  {
    id: "growthpro",
    title: "GrowthPro – Marketing Platform",
    description:
      "Performance marketing suite with campaign automation and insights.",
    year: 2023,
    rating: 4.8,
    categories: ["web" ],
    tags: ["Ads", "Automation"],
    image: "/images/projects/growthpro.jpg",
    icon: Megaphone,
  },
  {
    id: "globalhub",
    title: "GlobalHub – Corporate Website",
    description:
      "High-performance corporate website with SEO-first architecture.",
    year: 2024,
    rating: 4.9,
    categories: ["web", "seo"],
    tags: ["Next.js", "SEO"],
    image: "/images/projects/globalhub.jpg",
    icon: Globe,
  },
  {
    id: "insightx",
    title: "InsightX – Data Visualization Tool",
    description:
      "Interactive data visualization platform for business intelligence teams.",
    year: 2024,
    rating: 4.8,
    categories: ["web"],
    tags: ["Charts", "Data"],
    image: "/images/projects/insightx.jpg",
    icon: BarChart,
  },
];
