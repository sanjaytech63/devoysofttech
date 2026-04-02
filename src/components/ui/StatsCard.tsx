import { type ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
}

export const StatsCard = ({ title, value, icon, className }: StatsCardProps) => (
  <div className={`rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900 ${className ?? ""}`}>
    {icon ? <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">{icon}</div> : null}
    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{value}</p>
    <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-300">{title}</p>
  </div>
);
