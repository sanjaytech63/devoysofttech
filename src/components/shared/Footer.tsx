"use client";

import { Globe2, GitBranch, Link2, Share2, Link } from "lucide-react";
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
    { label: "Website", icon: Globe2 },
    { label: "LinkedIn", icon: Link2 },
    { label: "GitHub", icon: GitBranch },
    { label: "Share", icon: Share2 },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* LOGO + DESC */}
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

            {/* SOCIAL */}
            <div className="mt-5 flex gap-3">
              {SITE_CONFIG.social.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"
                  >
                    <Icon size={16} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* SERVICES */}
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

          {/* COMPANY */}
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

          {/* CONTACT */}
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
