"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-md ">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* LEFT: LOGO */}
        <Link href="/" aria-label="DevoySoftTech logo">
          <OptimizedImage
            src="/images/logo.png"
            alt="Logo"
            fill={false}
            containerClassName="w-[140px] h-auto relative"
            priority
          />
        </Link>

        {/* CENTER: DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className="relative">
                <span
                  className={clsx(
                    "text-sm font-medium transition",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)] hover:text-[var(--accent)]",
                  )}
                >
                  {link.label}
                </span>

                {/* underline */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent)] transition-all duration-300",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          {/* DESKTOP CTA */}
          <Button className="btn-gradient !hidden md:!inline-flex text-sm">
            Get a Quote
          </Button>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg md:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-md shadow-sm duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      {/* MOBILE DRAWER */}
      <div
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-[280px] bg-indigo-500 p-5 shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-950",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium transition",
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

        {/* CTA */}
        <div className="mt-6">
          <Button className="btn-gradient w-full">Get a Quote</Button>
        </div>
      </div>
    </header>
  );
};
