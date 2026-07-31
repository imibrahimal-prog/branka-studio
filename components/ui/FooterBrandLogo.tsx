import Image from "next/image";
import { cn } from "@/lib/utils";

type FooterBrandLogoProps = {
  className?: string;
};

export function FooterBrandLogo({ className }: FooterBrandLogoProps) {
  return (
    <span
      className={cn(
        "relative block h-[190px] w-[260px] max-w-full overflow-hidden rounded-[1.4rem] bg-[#2b2122]",
        className,
      )}
    >
      <Image
        src="/images/branka-loading-logo.png"
        alt="برانكا — إبراهيم المصعبي"
        width={1278}
        height={1536}
        unoptimized
        sizes="260px"
        className="absolute left-1/2 top-[-76px] h-auto w-[280px] max-w-none -translate-x-1/2 object-contain"
      />
    </span>
  );
}
