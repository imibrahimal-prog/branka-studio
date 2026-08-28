"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";

export function VisionTrustStrip() {
  const t = useTranslations("visionTrust");

  return (
    <section className="relative border-y border-white/10 bg-[#160d09] py-8 text-white">
      <div className="luxury-container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-20 shrink-0 md:h-12 md:w-24">
            <Image
              src="/images/vision-2030-white.png"
              alt="Saudi Vision 2030"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <span className="hidden h-8 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-2 rounded-full border border-luxury-gold/25 bg-luxury-gold/10 px-3.5 py-1 text-xs font-semibold text-luxury-gold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{t("tag")}</span>
          </div>
        </div>

        <p className="max-w-2xl text-center text-sm font-medium leading-7 text-white/80 md:text-start md:text-base rtl:md:text-right">
          {t("text")}
        </p>
      </div>
    </section>
  );
}
