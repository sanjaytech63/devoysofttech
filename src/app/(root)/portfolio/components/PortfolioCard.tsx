import { PortfolioItem } from "@/types";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Badge } from "@/components/ui/Badge";
import { Star } from "lucide-react";

export const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const Icon = item.icon;
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">
      <div className="relative h-55 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-600 to-green-400 transition-opacity duration-500 group-hover:opacity-0" />
        <OptimizedImage
          src={"/images/bluer-image.png"}
          alt={item.title}
          fill
          containerClassName="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl 
               bg-white/10 backdrop-blur-md border border-white/20
               shadow-lg hover:bg-white/20
               opacity-0 translate-y-2 scale-95
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
               transition-all duration-300 ease-out"
          >
            <Icon size={18} className="text-white" />
          </button>
        </div>

        <Badge className="absolute left-4 top-44 btn-gradient text-white  opacity-0 group-hover:opacity-100 transition">
          View Study
        </Badge>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex gap-2 flex-wrap">
          {item.tags.map((tag) => (
            <>
              <Badge className="">{tag}</Badge>
            </>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          {item.description}
        </p>
        <div className="flex justify-between text-sm text-neutral-400">
          <span>{item.year}</span>
          <div className="mb-3 flex gap-1 text-yellow-400 transition-all duration-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}{" "}
            {item.rating}
          </div>
        </div>
      </div>
    </div>
  );
};
