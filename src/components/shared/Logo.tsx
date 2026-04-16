import Link from "next/link";
import { OptimizedImage } from "./OptimizedImage";

export const Logo = () => (
  <Link href="/" aria-label="logo">
    <OptimizedImage
      src={"/images/logo.png"}
      alt="Logo"
      fill={false}
      containerClassName="w-[140px] h-auto relative overflow-hidden"
      priority
      blurDataURL="/images/logo.png"
    />
  </Link>
);
