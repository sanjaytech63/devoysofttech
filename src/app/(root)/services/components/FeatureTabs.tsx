"use client";

import { FEATURES } from "./data";
import { cn } from "@/lib/utils";

type FeatureTabsProps = {
  active: string;
  setActive: (id: string) => void;
};

export const FeatureTabs = ({ active, setActive }: FeatureTabsProps) => {
  return (
    <div className="flex gap-3 p-2 rounded-xl border border-(--border)">
      {FEATURES.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              active === item.id ? "btn-gradient text-white" : "",
            )}
          >
            <Icon
              size={18}
              className={cn(
                active === item.id ? "text-white" : "text-(--accent)",
              )}
            />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
