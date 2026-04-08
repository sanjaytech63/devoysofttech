import clsx from "clsx";
import { ReactNode } from "react";

type MobileDrawerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
};

export const MobileDrawer = ({
  open,
  setOpen,
  children,
}: MobileDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition",
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-full bg-white dark:bg-slate-950 flex flex-col p-4 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {children}
      </div>
    </>
  );
};
