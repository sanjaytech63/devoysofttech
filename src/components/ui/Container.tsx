"use client";

import { type ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-4 ", className)}>
      {children}
    </div>
  );
};
