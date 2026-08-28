"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  MessageSquareText,
  Compass,
  Lightbulb,
  Sparkles,
  Layers,
} from "lucide-react";

export function MethodologySection() {
  const t = useTranslations("methodology");

  const steps = [
    {
      key: "step1",
      number: "01",
      icon: MessageSquareText,
      title: t("steps.step1.title"), // نفهم ونناقش
      subtitle: t("steps.step1.subtitle"),
      description: t("steps.step1.description"),
      badgeOffset: "lg:translate-y-6", // Low point on wave (raised up)
      glowColor: "rgba(212, 184, 138, 0.35)",
    },
    {
      key: "step2",
      number: "02",
      icon: Compass,
      title: t("steps.step2.title"), // نبحث ونخطط
      subtitle: t("steps.step2.subtitle"),
      description: t("steps.step2.description"),
      badgeOffset: "lg:-translate-y-5", // High point on wave
      glowColor: "rgba(232, 201, 143, 0.35)",
    },
    {
      key: "step3",
      number: "03",
      icon: Lightbulb,
      title: t("steps.step3.title"), // نفكر ونبتكر
      subtitle: t("steps.step3.subtitle"),
      description: t("steps.step3.description"),
      badgeOffset: "lg:translate-y-6", // Low point on wave (raised up)
      glowColor: "rgba(212, 184, 138, 0.35)",
    },
    {
      key: "step4",
      number: "04",
      icon: Sparkles,
      title: t("steps.step4.title"), // ننفذ ونبدع
      subtitle: t("steps.step4.subtitle"),
      description: t("steps.step4.description"),
      badgeOffset: "lg:-translate-y-5", // High point on wave
      glowColor: "rgba(232, 201, 143, 0.35)",
    },
  ];

  return (
    <section
      id="methodology"
      className="content-visibility-auto relative overflow-hidden bg-[#241712] py-20 text-white md:py-28"
    >
      {/* 1. Harmonized Luxury Background Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 45%, #352119 0%, #2b1a13 55%, #241712 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Central Warm Amber Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[22rem] w-[50rem] rounded-full bg-gradient-to-r from-[#8f522e]/15 via-[#c7a46a]/18 to-[#8f522e]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="luxury-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-luxury-gold/30 bg-[#24130c]/90 px-3.5 py-1 text-xs font-bold text-[#d4b88a] shadow-md backdrop-blur-md"
          >
            <Layers className="h-3 w-3 text-luxury-gold" />
            <span>{t("eyebrow")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-2.5 max-w-2xl text-balance text-xs leading-6 text-white/65 sm:text-sm sm:leading-7"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Steps Flow Architecture */}
        <div className="relative mt-14 md:mt-20">
          {/* ================= DESKTOP VIEW (>= lg) ================= */}
          <div className="hidden lg:block">
            {/* Top Stage: Elevated Animated Line strictly through Diamond Badges */}
            <div className="relative h-32 w-full">
              {/* Animated SVG Sine Wave (Elevated high up, strictly connecting diamonds) */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Gold Track Gradient */}
                    <linearGradient
                      id="methodology-elevated-track"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#d4b88a" stopOpacity="0.1" />
                      <stop offset="25%" stopColor="#e8c98f" stopOpacity="0.55" />
                      <stop offset="50%" stopColor="#c7a46a" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#e8c98f" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#d4b88a" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Flowing Comet Gradient */}
                    <linearGradient
                      id="methodology-elevated-comet"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ffe6b3" stopOpacity="0" />
                      <stop offset="70%" stopColor="#ffd79a" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* 1. Base Dashed Wave strictly across diamond centers (High Y=22, Low Y=72) */}
                  <path
                    d="M 980 72 C 940 72, 915 72, 875 72 C 785 72, 715 22, 625 22 C 535 22, 465 72, 375 72 C 285 72, 215 22, 125 22 C 85 22, 55 35, 20 45"
                    stroke="url(#methodology-elevated-track)"
                    strokeWidth="2.5"
                    strokeDasharray="8 8"
                    className="animate-[dashFlowRTL_25s_linear_infinite]"
                  />

                  {/* 2. Active Flowing Light Comet from Right to Left */}
                  <motion.path
                    d="M 980 72 C 940 72, 915 72, 875 72 C 785 72, 715 22, 625 22 C 535 22, 465 72, 375 72 C 285 72, 215 22, 125 22 C 85 22, 55 35, 20 45"
                    stroke="url(#methodology-elevated-comet)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0.2, pathOffset: 0 }}
                    animate={{ pathOffset: [0, 1] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
              </div>

              {/* 4 Diamond Badges sitting directly on the Wave */}
              <div className="grid grid-cols-4 h-full relative z-10">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.key}
                      className={`flex items-center justify-center transition-transform duration-500 ${step.badgeOffset}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        className="group relative flex items-center justify-center cursor-pointer"
                      >
                        {/* Ambient Glowing Halo */}
                        <div
                          className="pointer-events-none absolute -inset-3.5 rounded-full opacity-30 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-75"
                          style={{ background: step.glowColor }}
                        />

                        {/* Step Number Badge */}
                        <span className="absolute -top-2 -end-2 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-[#e8c98f]/60 bg-gradient-to-br from-[#c7a46a] to-[#8f522e] text-[9px] font-black text-[#140b08] shadow-[0_0_10px_rgba(212,184,138,0.5)]">
                          {step.number}
                        </span>

                        {/* Sculpted Diamond Card (Solid Background covers line completely) */}
                        <div className="relative flex h-16 w-16 rotate-45 items-center justify-center rounded-2xl border-2 border-luxury-gold/40 bg-[#1a0f0a] shadow-[0_10px_25px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 group-hover:rotate-0 group-hover:border-luxury-gold group-hover:shadow-[0_12px_35px_rgba(199,164,106,0.35)]">
                          {/* Upright Icon */}
                          <div className="transition-transform duration-500 group-hover:rotate-0 -rotate-45">
                            <Icon className="h-6 w-6 text-[#e8c98f] transition-all duration-300 group-hover:scale-110 group-hover:text-white drop-shadow-[0_0_8px_rgba(212,184,138,0.6)]" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Zone: Positioned completely BELOW the line (Zero Overlap Guaranteed) */}
            <div className="mt-8 grid grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.12 }}
                  className="flex flex-col items-center text-center px-3"
                >
                  <h3 className="font-display text-base font-extrabold text-white transition-colors duration-300 hover:text-[#d4b88a] sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-luxury-gold/85">
                    {step.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/60 max-w-[220px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= MOBILE / TABLET VIEW (< lg) ================= */}
          <div className="lg:hidden relative">
            {/* Vertical Flowing Golden Connecting Stream */}
            <div className="pointer-events-none absolute start-[35px] sm:start-[43px] top-4 bottom-4 w-0.5 z-0">
              <div className="h-full w-full border-s-2 border-dashed border-luxury-gold/30" />
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    className="flex items-start gap-4 sm:gap-5 group"
                  >
                    {/* Floating Badge */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <span className="absolute -top-1.5 -end-1.5 z-20 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-[#e8c98f]/60 bg-gradient-to-br from-[#c7a46a] to-[#8f522e] text-[8px] font-black text-[#140b08]">
                        {step.number}
                      </span>
                      <div className="flex h-14 w-14 rotate-45 items-center justify-center rounded-xl border-2 border-luxury-gold/40 bg-[#1a0f0a] shadow-md">
                        <div className="-rotate-45">
                          <Icon className="h-5 w-5 text-[#e8c98f]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-0.5 text-start rtl:text-right">
                      <h3 className="font-display text-sm sm:text-base font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="mt-0.5 text-xs font-medium text-luxury-gold">
                        {step.subtitle}
                      </span>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sleek Golden Luxury Divider Line Between Sections */}
        <div className="relative mt-20 md:mt-28">
          <div className="h-[1px] w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-[#d4b88a]/45 to-transparent" />
          {/* Subtle Radiant Center Flare */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-32 rounded-full bg-[#d4b88a]/20 blur-sm pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#f3dcab] shadow-[0_0_10px_#d4b88a]" />
        </div>
      </div>
    </section>
  );
}
