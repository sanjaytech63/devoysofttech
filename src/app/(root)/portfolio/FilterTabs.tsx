import { cn } from "@/lib/utils";
import { Category } from "@/types";
import {
  Code,
  Layers,
  LucideIcon,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const tabs: { label: string; value: Category; icon: LucideIcon }[] = [
  { label: "All Projects", value: "all", icon: Layers },
  { label: "Web", value: "web", icon: Code },
  { label: "Mobile", value: "mobile", icon: Smartphone },
  { label: "E-Commerce", value: "ecommerce", icon: ShoppingCart },
  { label: "Design", value: "design", icon: Palette },
  { label: "SEO", value: "seo", icon: Search },
];

export const FilterTabs = ({
  active,
  onChange,
}: {
  active: Category;
  onChange: (val: Category) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {tabs?.map((item) => {
        const Icon = item?.icon;
        return (
          <button
            key={item?.value}
            onClick={() => onChange(item?.value)}
            className={cn(
              "flex items-center cursor-pointer gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200",
              active === item?.value
                ? "btn-gradient text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200",
            )}
          >
            <Icon
              size={18}
              className={cn(
                active === item?.value ? "text-white" : "text-(--accent)",
              )}
            />
            {item?.label}
          </button>
        );
      })}
    </div>
  );
};
