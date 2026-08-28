"use client";

import { useTranslations } from "next-intl";
import {
  Building2,
  CarFront,
  Gem,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Utensils,
  Laptop,
} from "lucide-react";

const sectorKeys = [
  "retail",
  "realEstate",
  "beauty",
  "automotive",
  "health",
  "technology",
  "hospitality",
  "public",
] as const;

const icons = [
  ShoppingBag,
  Building2,
  Gem,
  CarFront,
  HeartPulse,
  Laptop,
  Utensils,
  Sparkles,
];

export function SectorsSection() {
  const t = useTranslations("sectors");
  const marqueeItems = [...sectorKeys, ...sectorKeys, ...sectorKeys];

  return (
    <section id="sectors" className="overflow-hidden bg-[#150d09] py-16 text-white md:py-20">
      <div className="luxury-container text-center">
        <p className="luxury-eyebrow mb-3">{t("eyebrow")}</p>
        <h2 className="font-display text-2xl font-bold md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/55">
          {t("description")}
        </p>
      </div>

      {/* Infinite Seamless Marquee of Client Sectors */}
      <div className="mt-10 border-y border-white/10 bg-white/[0.02] py-5">
        <div className="sector-marquee flex w-max items-center gap-4">
          {marqueeItems.map((key, index) => {
            const Icon = icons[index % icons.length];
            return (
              <span
                key={`${key}-${index}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition-all hover:border-luxury-gold/50 hover:bg-white/[0.08]"
              >
                <Icon className="h-4 w-4 text-luxury-gold" />
                <span>{t(`items.${key}`)}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
