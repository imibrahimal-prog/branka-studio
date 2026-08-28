import Image from "next/image";
import { cn } from "@/lib/utils";

type FooterBrandLogoProps = {
  className?: string;
};

export function FooterBrandLogo({ className }: FooterBrandLogoProps) {
  return (
    <span
      className={cn(
        "relative block w-[190px] md:w-[210px] max-w-full",
        className,
      )}
    >
      <Image
        src="/images/branka-vertical-logo.png"
        alt="برانكا للإعلان والتسويق — Branka Advertising & Marketing"
        width={4000}
        height={4800}
        priority
        unoptimized
        sizes="(max-width: 768px) 190px, 210px"
        className="h-auto w-full object-contain"
      />
    </span>
  );
}
