"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "./OptimizedImage";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Stats", href: "/stats" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-[var(--background)]/95 backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-2 sm:px-6 lg:px-8">
        {/* LOGO */}
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

        {/* CENTER MENU */}
        <div className="hidden justify-center md:flex">
          <div className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx("relative")}
                >
                  <span
                    className={clsx(
                      "relative text-sm font-medium transition",
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)] hover:text-[var(--accent)]",
                    )}
                  >
                    {link.label}
                  </span>

                  {/* UNDERLINE ANIMATION */}
                  <span
                    className={clsx(
                      "absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[var(--accent)] transition-all duration-300",
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <Button className="btn-gradient hidden md:inline-flex text-sm">
            Get a Quote
          </Button>

          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 md:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      {/* MOBILE DRAWER */}
      <div
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-[260px] bg-white p-5 shadow-xl transition-transform duration-300 dark:bg-slate-950",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* MOBILE LINKS WITH ACTIVE */}
        <div className="flex flex-col gap-3">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-6">
          <Button className="btn-gradient w-full">Get a Quote</Button>
        </div>
      </div>
    </header>
  );
};
