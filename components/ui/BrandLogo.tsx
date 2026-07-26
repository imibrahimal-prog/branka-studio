import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function BrandLogo({
  className,
  compact = false,
  inverse = false,
}: BrandLogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-xl border bg-[#f9dca1] shadow-[0_8px_28px_rgba(0,0,0,0.16)]",
          compact ? "h-10 w-14" : "h-12 w-[4.15rem]",
          inverse ? "border-white/20" : "border-luxury-gold/35",
        )}
      >
        <Image
          src="/icons/branka-mark.png"
          alt=""
          fill
          priority
          sizes={compact ? "56px" : "67px"}
          className="object-contain p-1.5"
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span
          className={cn(
            "font-display text-xl font-bold tracking-[0.13em] md:text-2xl",
            inverse ? "text-luxury-white" : "text-[var(--color-foreground)]",
          )}
        >
          BRANKA
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">
          Ibrahim Almusabi
        </span>
      </span>
    </span>
  );
}
