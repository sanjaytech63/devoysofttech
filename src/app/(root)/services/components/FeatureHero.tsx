import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/types";

type FeatureHeroProps = {
  data: FeatureItem;
};

export const FeatureHero = ({ data }: FeatureHeroProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-10 items-center mt-10">
      <div className="w-full lg:basis-[60%]">
        <h1 className="heading-section leading-tight text-center lg:text-left">
          {data.title[0]} <br />
          <span className="text-(--accent)">{data.title[1]}</span>
        </h1>

        <p className="text-paragraph mt-4 md:mt-6 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
          {data.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
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
      </div>

      <div className="w-full lg:basis-[40%] flex justify-center items-center">
        <div className="relative w-70 h-90 sm:w-85 sm:h-105 md:w-95 md:h-120 lg:w-108 lg:h-135.25">
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
