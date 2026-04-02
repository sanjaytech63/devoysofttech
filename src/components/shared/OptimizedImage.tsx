"use client";

import Image from "next/image";
import clsx from "clsx";

type OptimizedImageProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
};

export function OptimizedImage({
  src,
  alt,
  priority = false,
  className,
  containerClassName,
  fill = true,
}: OptimizedImageProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        fill && "aspect-video",
        containerClassName,
      )}
    >
      <Image
        src={src || "/images/bluer-image.png"}
        alt={alt || "Image"}
        fill={fill}
        width={!fill ? 100 : undefined}
        height={!fill ? 100 : undefined}
        priority={priority}
        quality={75}
        placeholder="blur"
        blurDataURL="/images/bluer-image.png"
        sizes={
          fill
            ? `(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               (max-width: 1280px) 33vw,
               25vw`
            : undefined
        }
        className={clsx(
          fill ? "object-cover" : "object-contain",
          "transition-transform duration-500 ease-out",
          fill && "hover:scale-110",
          className,
        )}
      />
    </div>
  );
}
