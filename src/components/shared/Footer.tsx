"use client";

import Link from "next/link";
import { OptimizedImage } from "./OptimizedImage";

export const SITE_CONFIG = {
  name: "Devoy",
  tagline: "DESIGN | DEVELOP | DEPLOY",
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
    { label: "LinkedIn", image: "/images/Vector-2.svg" },
    { label: "Instagram", image: "/images/Group.svg" },
    { label: "Twitter", image: "/images/Vector-1.svg" },
    { label: "Facebook", image: "/images/Vector.svg" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-[#111827] border-t border-gray-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Link href="/" aria-label="DevoySoftTech logo">
                <OptimizedImage
                  src="/images/logo.png"
                  alt="Logo"
                  fill={false}
                  containerClassName="w-[164px] h-auto"
                  priority
                />
              </Link>
            </div>

            <p className="mt-4 text-sm text-emerald-100 leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-5 flex gap-3">
              {SITE_CONFIG.social.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"
                  >
                    <Link href={item.label} aria-label={item.label}>
                      <OptimizedImage
                        src={item.image}
                        alt={item.label}
                        fill={false}
                        containerClassName="w-3 h-auto"
                        priority
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--highlight)]">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100">
              {SITE_CONFIG.services.map((item) => (
                <li key={item} className="hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--highlight)]">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100">
              {SITE_CONFIG.company.map((item) => (
                <li key={item} className="hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--highlight)]">
              Contact
            </h4>
            <div className="mt-4 space-y-2 text-sm text-emerald-100">
              <p>{SITE_CONFIG.contact.email}</p>
              <p>{SITE_CONFIG.contact.phone}</p>
              <p>{SITE_CONFIG.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
