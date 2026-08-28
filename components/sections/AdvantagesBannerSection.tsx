"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Zap, Award, Headphones } from "lucide-react";

export function AdvantagesBannerSection() {
  const t = useTranslations("advantagesBanner");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const cards = [
    {
      key: "speed",
      icon: Zap,
      number: isRtl ? "٠١" : "01",
    },
    {
      key: "quality",
      icon: Award,
      number: isRtl ? "٠٢" : "02",
    },
    {
      key: "support",
      icon: Headphones,
      number: isRtl ? "٠٣" : "03",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-white">
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero-luxury-office-bg.jpg"
          alt="Branka Workspace"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark Luxury Brand Color Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20, 11, 7, 0.94) 0%, rgba(32, 18, 12, 0.90) 50%, rgba(20, 11, 7, 0.96) 100%)",
          }}
        />
        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[50rem] rounded-full bg-[#c7a46a]/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <h2 className="font-alexandria text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#fbf8f2] tracking-normal leading-tight">
            {t("title")}
          </h2>
          {/* Decorative Glowing Underline */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold shadow-[0_0_8px_#c7a46a]" />
            <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
          </div>
        </div>

        {/* 3 Floating Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {cards.map((card) => {
            const Icon = card.icon;
            const cardTitle = t(`cards.${card.key}.title`);
            const cardDesc = t(`cards.${card.key}.description`);

            return (
              <div
                key={card.key}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/15 hover:border-luxury-gold/70 bg-[#241712]/75 backdrop-blur-xl p-6 sm:p-7 md:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(199,164,106,0.25)] text-start"
              >
                {/* Subtle Hover Gradient Sheen */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-350 group-hover:opacity-100 bg-gradient-to-tr from-luxury-gold/15 via-transparent to-white/5"
                  aria-hidden="true"
                />

                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Glowing Icon Badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-luxury-gold/30 bg-luxury-gold/15 text-luxury-gold shadow-[0_0_20px_rgba(199,164,106,0.20)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-luxury-gold" />
                  </div>

                  {/* High-Contrast Arabic/English Number */}
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-luxury-gold/60 group-hover:text-luxury-gold transition-colors duration-300">
                    {card.number}
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#fbf8f2] tracking-tight leading-snug group-hover:text-luxury-gold transition-colors duration-300">
                    {cardTitle}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#dcd1c7]">
                    {cardDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
