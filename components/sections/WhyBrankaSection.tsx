"use client";

import { useTranslations } from "next-intl";
import {
  Compass,
  Layers,
  Target,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

const pillarKeys = [
  "strategy",
  "integration",
  "decisions",
  "execution",
  "workflow",
] as const;

const pillarIcons = {
  strategy: Compass,
  integration: Layers,
  decisions: Target,
  execution: ShieldCheck,
  workflow: Workflow,
};

export function WhyBrankaSection() {
  const t = useTranslations("whyBranka");

  return (
    <section id="why-us" className="relative overflow-hidden py-24 md:py-32 bg-[#fffbf0] dark:bg-[#241712] transition-colors">
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 -end-40 h-[30rem] w-[30rem] rounded-full bg-[#c7a46a]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -start-40 h-[30rem] w-[30rem] rounded-full bg-[#8c6b38]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 relative">
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 md:mb-20 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-1.5 text-xs font-semibold text-luxury-gold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("eyebrow")}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#241712] dark:text-[#fbf8f2] tracking-tight leading-tight">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#614d3f] dark:text-[#c4b3a4] md:justify-self-end">
            {t("description")}
          </p>
        </div>

        {/* Enhanced Luxury Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillarKeys.map((key, index) => {
            const Icon = pillarIcons[key];
            const isWide = index === 0;

            return (
              <div
                key={key}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-2 border-[#241712] dark:border-[#422c20] bg-gradient-to-b from-[#faf6f0] to-[#f4ebe0] dark:from-[#1e130e] dark:to-[#140b08] p-7 sm:p-8 md:p-9 shadow-[0_12px_36px_rgba(36,23,18,0.08)] transition-all duration-350 hover:border-luxury-gold hover:shadow-[0_20px_50px_rgba(199,164,106,0.22)] hover:-translate-y-1 ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Subtle Hover Gradient Sheen */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-350 group-hover:opacity-100 bg-gradient-to-tr from-luxury-gold/12 via-transparent to-white/10"
                  aria-hidden="true"
                />

                {/* Card Top Row: Glowing Icon Badge & Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#241712] dark:bg-[#352016] text-luxury-gold border border-luxury-gold/35 shadow-[0_4px_18px_rgba(36,23,18,0.12)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-[#180e08]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="inline-flex items-center rounded-full bg-luxury-gold/15 dark:bg-luxury-gold/10 px-3.5 py-1 text-xs sm:text-sm font-semibold tracking-wider text-[#8c6530] dark:text-luxury-gold border border-luxury-gold/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-[23px] font-semibold text-[#241712] dark:text-[#fbf8f2] tracking-tight leading-snug group-hover:text-luxury-gold transition-colors duration-250">
                      {t(`pillars.${key}.title`)}
                    </h3>

                    <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#5e493c] dark:text-[#d0c0b2]">
                      {t(`pillars.${key}.description`)}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Line */}
                  <div className="mt-6 pt-4 border-t border-[#241712]/10 dark:border-white/10 flex items-center justify-between">
                    <span className="h-1 w-8 rounded-full bg-[#241712]/20 dark:bg-white/20 group-hover:w-14 group-hover:bg-luxury-gold transition-all duration-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold/40 group-hover:bg-luxury-gold transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
