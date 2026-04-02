import {
  Globe2,
  GitBranch,
  Link2,
  Share2,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "DevoySoftTech",
  description:
    "Modern SaaS product experiences with performance-driven engineering and design.",
  contact: {
    email: "inbox@devoysofttech.com",
    phone: "+91 90521 02214",
    location: "Jaipur, Rajasthan",
  },
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    {
      label: "Website",
      href: "#",
      icon: Globe2,
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: Link2,
    },
    {
      label: "GitHub",
      href: "#",
      icon: GitBranch,
    },
    {
      label: "Share",
      href: "#",
      icon: Share2,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h4 className="text-lg font-black text-slate-900 dark:text-white">
            {SITE_CONFIG.name}
          </h4>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {SITE_CONFIG.description}
          </p>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
            Links
          </h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {SITE_CONFIG.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-emerald-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
            Contact
          </h5>
          <address className="mt-3 not-italic text-sm text-slate-600 dark:text-slate-300">
            {SITE_CONFIG.contact.email}
            <br />
            {SITE_CONFIG.contact.phone}
            <br />
            {SITE_CONFIG.contact.location}
          </address>

          {/* Social Icons */}
          <div className="mt-4 flex items-center gap-3 text-slate-600 dark:text-slate-300">
            {SITE_CONFIG.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="hover:text-emerald-500 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
