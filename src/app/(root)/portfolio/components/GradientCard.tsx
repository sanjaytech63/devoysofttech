import { OptimizedImage } from "@/components/shared/OptimizedImage";

export const GradientCard = () => {
  return (
    <div className="relative w-70 h-90 sm:w-85 sm:h-105 md:w-95 md:h-120 lg:w-108 lg:h-135.25">
      <OptimizedImage
        src={"/images/bluer-image.png"}
        alt="Case Study Hero"
        fill
        containerClassName="object-contain rounded-2xl"
      />
    </div>
  );
};
