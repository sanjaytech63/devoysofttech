import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <span className={`inline-flex items-center z-10 rounded-full capitalize bg-emerald-100 px-3 py-1 text-xs font-medium text-(--accent) dark:bg-emerald-200 dark:text-emerald-900 ${className ?? ""}`}>{children}</span>
);
