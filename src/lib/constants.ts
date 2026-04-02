export interface Service { id: number; title: string; description: string; icon: string; }
export interface Testimonial { id: number; name: string; role: string; company: string; quote: string; rating: number; avatar: string; }

export const services: Service[] = [
  { id: 1, title: "Web Development", description: "Tailored web apps with performance-first architecture.", icon: "code" },
  { id: 2, title: "Mobile Applications", description: "Cross-platform native apps with pixel-perfect UI.", icon: "smartphone" },
  { id: 3, title: "UI/UX Design", description: "High conversion design systems and interaction flows.", icon: "layout" },
  { id: 4, title: "E-Commerce", description: "Rapid storefronts with secure payment and analytics.", icon: "shopping-cart" },
  { id: 5, title: "SEO & Marketing", description: "Growth-focused campaigns and analytics optimization.", icon: "trending-up" },
  { id: 6, title: "Dedicated Teams", description: "Experienced squads for long-term product roadmaps.", icon: "users" },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Tanya Reed", role: "Founder", company: "Headway Labs", quote: "They translated our vision into a modern, performant SaaS platform.", rating: 5, avatar: "/images/Vector-1.svg" },
  { id: 2, name: "Marco Silva", role: "CTO", company: "ScaleUp", quote: "Engineering practices and product strategy were top tier.", rating: 5, avatar: "/images/Vector-2.svg" },
  { id: 3, name: "Priya Kapoor", role: "Product Manager", company: "FlowHQ", quote: "A smooth process from discovery to launch with outstanding quality.", rating: 5, avatar: "/images/Group.svg" },
];

export const siteStats = [
  { label: "Projects", value: 200 },
  { label: "Happy Clients", value: 150 },
  { label: "Years in Business", value: 7 },
  { label: "Avg Rating", value: 4.9 },
];
