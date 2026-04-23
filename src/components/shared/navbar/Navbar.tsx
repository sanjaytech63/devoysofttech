"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/Button";

import { NavLinks } from "../NavLinks";
import { MobileDrawer } from "./MobileDrawer";
import { Logo } from "../Logo";
import { OptimizedImage } from "../OptimizedImage";
import { NavLink } from "@/types";

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact-us" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 bg-background backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks
              onClick={() => setOpen(false)}
              links={links}
              pathname={pathname}
            />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="group hidden! md:flex! items-center btn-gradient">
              Get a Quote
              <OptimizedImage
                src="/images/arrow.svg"
                alt="arrow-icon"
                fill={false}
                containerClassName="w-6! h-6! transition-transform duration-300 group-hover:rotate-30"
                priority
                blurDataURL="/images/arrow.svg"
              />
            </Button>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="text-(--accent)" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} setOpen={setOpen}>
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="md:hidden"
            aria-label="Close menu"
          >
            <X className="text-(--accent)" />
          </button>
        </div>

        <div className="flex-1 mt-6 flex flex-col gap-2">
          <NavLinks
            links={links}
            pathname={pathname}
            onClick={() => setOpen(false)}
          />
        </div>

        <Button className="w-full btn-gradient">
          Get a Quote{" "}
          <OptimizedImage
            src="/images/arrow.svg"
            alt="arrow-icon"
            fill={false}
            containerClassName="w-7! h-7! transition-transform duration-300 group-hover:rotate-30"
            priority
            blurDataURL="/images/arrow.svg"
          />
        </Button>
      </MobileDrawer>
    </>
  );
};
