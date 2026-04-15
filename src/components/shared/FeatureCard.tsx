import { Card } from "@/components/ui/Card";
import { FeatureGridItem } from "@/types";

export const FeatureCard = ({ item }: { item: FeatureGridItem }) => {
  const Icon = item.icon;

  return (
    <Card className="group rounded-2xl border border-(--border-light) bg-white/70 backdrop-blur-md p-5 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-(--primary-soft) text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-white">
        <Icon size={20} />
      </div>

      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>

      <p className="mt-2 text-sm text-(--muted) leading-relaxed">
        {item.description}
      </p>
    </Card>
  );
};
