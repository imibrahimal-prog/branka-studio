"use client";

import { useTranslations } from "next-intl";
import {
  Code2,
  Eye,
  ShieldCheck,
  Award,
  Flame,
  Zap,
  Sparkles,
} from "lucide-react";

export function ResultsSection() {
  const t = useTranslations("results");

  const stats = [
    {
      count: t("clientsCount"), // +498
      label: t("clientsLabel"), // عميلاً
      sub: t("clientsSub"), // يثقون بخدماتنا
      color: "from-[#e8c98f] via-[#d4b88a] to-[#c7a46a]",
      glow: "rgba(212, 184, 138, 0.3)",
    },
    {
      count: t("yearsCount"), // 8
      label: t("yearsLabel"), // سنوات
      sub: t("yearsSub"), // من الخبرة والنجاح
      color: "from-[#f5dfb8] via-[#e8c98f] to-[#b88c52]",
      glow: "rgba(232, 201, 143, 0.3)",
    },
    {
      count: t("projectsCount"), // +97
      label: t("projectsLabel"), // مشروعاً
      sub: t("projectsSub"), // تم تسليمه بنجاح
      color: "from-[#d4b88a] via-[#c7a46a] to-[#8f522e]",
      glow: "rgba(199, 164, 106, 0.3)",
    },
  ];

  const values = [
    {
      key: "innovation",
      icon: Code2,
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      iconBg: "bg-luxury-gold/15 text-[#e8c98f] border-luxury-gold/30",
    },
    {
      key: "transparency",
      icon: Eye,
      title: t("values.transparency.title"),
      description: t("values.transparency.description"),
      iconBg: "bg-[#8f522e]/20 text-[#f5dfb8] border-[#8f522e]/40",
    },
    {
      key: "commitment",
      icon: ShieldCheck,
      title: t("values.commitment.title"),
      description: t("values.commitment.description"),
      iconBg: "bg-luxury-gold/15 text-[#e8c98f] border-luxury-gold/30",
    },
    {
      key: "professionalism",
      icon: Award,
      title: t("values.professionalism.title"),
      description: t("values.professionalism.description"),
      iconBg: "bg-[#a67c3b]/20 text-[#ffd79a] border-[#a67c3b]/40",
    },
    {
      key: "passion",
      icon: Flame,
      title: t("values.passion.title"),
      description: t("values.passion.description"),
      iconBg: "bg-[#8f522e]/20 text-[#e8c98f] border-[#8f522e]/40",
    },
    {
      key: "speed",
      icon: Zap,
      title: t("values.speed.title"),
      description: t("values.speed.description"),
      iconBg: "bg-luxury-gold/15 text-[#f5dfb8] border-luxury-gold/30",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeValues = [...values, ...values, ...values];

  return (
    <section
      id="results"
      className="content-visibility-auto relative overflow-hidden bg-[#241712] py-14 text-white md:py-20"
    >
      {/* 1. Brand Ambient Matrix Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(199, 164, 106, 0.25) 0%, transparent 60%), linear-gradient(to right, rgba(212, 184, 138, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 184, 138, 0.1) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 50px 50px, 50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Core Glow in Brand Colors */}
      <div
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 h-[22rem] w-[46rem] rounded-full bg-gradient-to-t from-[#c7a46a]/18 via-[#8f522e]/12 to-transparent blur-[130px]"
        aria-hidden="true"
      />

      <div className="luxury-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-luxury-gold/30 bg-[#25150e]/90 px-3.5 py-1 text-xs font-bold text-[#d4b88a] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-luxury-gold" />
            <span>{t("eyebrow")}</span>
          </div>

          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-balance text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
            {t("description")}
          </p>
        </div>

        {/* Compact & Sleek 3 Metrics Box */}
        <div className="mx-auto mt-8 max-w-xl sm:max-w-2xl">
          <div className="grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-luxury-gold/25 bg-[#1a0f0a]/85 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse sm:p-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center py-3 px-2 sm:py-3.5 sm:px-3 text-center transition-all duration-300 hover:bg-white/[0.04] rounded-xl"
              >
                {/* Glowing Number (Refined Compact Size) */}
                <div
                  className={`font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-3xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-[0_0_15px_${stat.glow}] transition-transform duration-300 group-hover:scale-105`}
                >
                  {stat.count}
                </div>

                {/* Primary Metric Label */}
                <div className="mt-1 text-xs font-bold text-white sm:text-sm">
                  {stat.label}
                </div>

                {/* Subtext */}
                <div className="mt-0.5 text-[10px] text-white/50 sm:text-[11px]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Header */}
        <div className="mt-14 text-center md:mt-18">
          <div className="inline-block relative">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              {t("valuesTitle")}
            </h3>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#8f522e]" />
          </div>
          <p className="mt-1.5 text-[11px] text-white/50 sm:text-xs">
            {t("valuesSubtitle")}
          </p>
        </div>
      </div>

      {/* Infinite Marquee of Values with Rotating Icons */}
      <div className="relative mt-6 w-full overflow-hidden py-2">
        {/* Gradient edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 bg-gradient-to-r from-[#0e0705] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 bg-gradient-to-l from-[#0e0705] to-transparent" />

        {/* Marquee Track */}
        <div className="values-marquee flex w-max items-center gap-3.5 hover:[animation-play-state:paused]">
          {marqueeValues.map((val, index) => {
            const Icon = val.icon;
            return (
              <div
                key={`${val.key}-${index}`}
                className="group flex min-w-[230px] sm:min-w-[260px] items-center justify-between gap-3.5 rounded-xl border border-white/10 bg-[#1c110b]/85 px-4 py-3 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold/50 hover:bg-[#281810] hover:shadow-[0_8px_25px_rgba(199,164,106,0.2)]"
              >
                {/* Text Info */}
                <div className="flex flex-col text-start rtl:text-right">
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#d4b88a]">
                    {val.title}
                  </span>
                  <span className="mt-0.5 text-[11px] text-white/55">
                    {val.description}
                  </span>
                </div>

                {/* Rotating Icon Badge */}
                <div
                  className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${val.iconBg} shadow-[0_0_12px_rgba(199,164,106,0.15)] transition-all duration-500 group-hover:scale-110`}
                >
                  {/* Rotating Inner Icon */}
                  <Icon
                    className="h-4 w-4 animate-[spin_8s_linear_infinite] transition-transform duration-500 group-hover:animate-[spin_3s_linear_infinite]"
                  />
                  {/* Outer subtle dot */}
                  <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-luxury-gold opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
