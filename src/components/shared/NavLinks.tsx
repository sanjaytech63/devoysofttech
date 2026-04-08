import Link from "next/link";
import clsx from "clsx";
import { NavLink } from "@/types/navigation";

type NavLinksProps = {
  links: NavLink[];
  pathname: string;
  onClick?: () => void;
};

export const NavLinks = ({ links, pathname, onClick }: NavLinksProps) => {
  return (
    <>
      {links?.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="relative group"
          >
            <span
              className={clsx(
                "nav-link transition",
                isActive
                  ? "text-(--accent)"
                  : "group-hover:text-(--accent)",
              )}
            >
              {link.label}
            </span>

            <span
              className={clsx(
                "absolute left-0 -bottom-1 h-0.5 w-full bg-(--accent) origin-left transition-transform duration-300",
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
              )}
            />
          </Link>
        );
      })}
    </>
  );
};
