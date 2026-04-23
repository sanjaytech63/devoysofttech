import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/Button";
import {
  Code,
  ShoppingCart,
  Smartphone,
  Palette,
  TrendingUp,
  Users,
} from "lucide-react";

const SERVICES = [
  { label: "Website", icon: Code },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Mobile App", icon: Smartphone },
  { label: "Design", icon: Palette },
  { label: "SEO / Ads", icon: TrendingUp },
  { label: "Hire Developer", icon: Users },
];

export default function StepService({ form, next }: any) {
  const selected = form.watch("service");

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">What can we build for you?</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SERVICES.map((item) => {
          const Icon = item.icon;
          const isActive = selected === item.label;
          return (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              onClick={() => form.setValue("service", item.label)}
              className={`flex flex-col cursor-pointer items-center justify-center gap-2 p-4 rounded-xl border transition-all
              
              ${
                isActive
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "bg-green-50 hover:bg-green-100 border-green-100"
              }
              `}
            >
              <Icon
                size={26}
                className={`${isActive ? "text-white" : "text-green-600"}`}
              />

              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={next}
          className="group hidden! md:flex! items-center btn-gradient"
        >
          Next Budget
          <OptimizedImage
            src="/images/arrow.svg"
            alt="arrow-icon"
            fill={false}
            containerClassName="w-6! h-6! transition-transform duration-300 group-hover:rotate-30"
            priority
            blurDataURL="/images/arrow.svg"
          />
        </Button>
      </div>
    </>
  );
}
