"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { OptimizedImage } from "../OptimizedImage";
import { FooterSection } from "./FooterSection";
import { FooterConfig } from "@/types";

export const SITE_CONFIG: FooterConfig = {
  name: "Devoy",
  description:
    "Creative IT services company helping businesses grow digitally from Jaipur, Rajasthan since 2017.",
  contact: {
    email: "info@devoysofttech.com",
    phone: "+91 96023 20214",
    location: "Jaipur, Rajasthan",
  },
  services: ["Web Development", "Mobile Apps", "E-Commerce", "SEO"],
  company: ["About Us", "Portfolio", "Contact"],
  social: [
    { label: "LinkedIn", href: "#", image: "/images/Vector-2.svg" },
    { label: "Instagram", href: "#", image: "/images/Group.svg" },
    { label: "Twitter", href: "#", image: "/images/Vector-1.svg" },
    { label: "Facebook", href: "#", image: "/images/Vector.svg" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-[#111827] border-t border-gray-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />

            <p className="text-paragraph mt-4 text-white leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {SITE_CONFIG.social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm  bg-white/10 hover:bg-white/20 transition"
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.label}
                    fill={false}
                    containerClassName="w-3! h-auto"
                    priority
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          <FooterSection title="Services" items={SITE_CONFIG.services} />
          <FooterSection title="Company" items={SITE_CONFIG.company} />

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-(--highlight)">
              Contact
            </h4>
            <div className="mt-4 space-y-2 text-sm text-emerald-100">
              <Link
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-(--highlight)! block text-paragraph"
              >
                {SITE_CONFIG.contact.email}
              </Link>
              <Link
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="hover:text-(--highlight)! block text-paragraph"
              >
                {SITE_CONFIG.contact.phone}
              </Link>
              <p className="text-paragraph hover:text-(--highlight)!">
                {SITE_CONFIG.contact.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
