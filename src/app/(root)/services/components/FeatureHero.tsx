import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/types";

type FeatureHeroProps = {
  data: FeatureItem;
};
export const FeatureHero = ({ data }: FeatureHeroProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">
      <div>
        <h1 className="heading-section leading-tight">
          {data.title[0]} <br />
          <span className="text-(--accent)">{data.title[1]}</span>
        </h1>

        <p className="text-paragraph mt-4 md:mt-6 leading-relaxed max-w-2xl ">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {data.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <Button className="group flex hover:shadow-2xl items-center mt-8 gap-2 btn-gradient">
          {data.cta}
          <OptimizedImage
            src="/images/arrow.svg"
            alt="arrow-icon"
            fill={false}
            containerClassName="w-7! h-7! transition-transform duration-300 group-hover:rotate-30"
            priority
          />
        </Button>
      </div>

      <div className="flex justify-end items-center w-full">
        <div className="relative w-full h-110">
          <OptimizedImage
            src={data.image}
            alt={data.label}
            fill
            containerClassName="object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
