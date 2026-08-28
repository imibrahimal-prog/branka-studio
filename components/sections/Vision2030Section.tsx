"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Vision2030Section() {
  const t = useTranslations("vision2030");

  const features = [
    { key: "digital", text: t("features.digital"), icon: Zap },
    { key: "quality", text: t("features.quality"), icon: ShieldCheck },
    { key: "economy", text: t("features.economy"), icon: CheckCircle2 },
  ];

  return (
    <section id="vision" className="relative overflow-hidden bg-[#180e0a] py-24 text-white md:py-32">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,164,106,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="luxury-container relative z-10">
        <SpotlightCard
          spotlightColor="rgba(199, 164, 106, 0.18)"
          borderColor="rgba(199, 164, 106, 0.45)"
          className="border-white/12 bg-gradient-to-b from-[#2b2022]/90 via-[#231510]/95 to-[#150c08] p-8 md:p-14 lg:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Content Side */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-1.5 text-xs font-semibold text-luxury-gold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("eyebrow")}</span>
              </div>

              <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                {t("description")}
              </p>

              {/* Feature Points */}
              <div className="mt-8 space-y-4">
                {features.map(({ key, text, icon: Icon }) => (
                  <div key={key} className="flex items-center gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/80 md:text-base">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pure White Vision 2030 Emblem Side */}
            <div className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md md:p-12">
              <div className="relative h-44 w-72 max-w-full md:h-52 md:w-80">
                <Image
                  src="/images/vision-2030-white.png"
                  alt="رؤية المملكة 2030 — Saudi Vision 2030"
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-gold/80">
                {t("tagline")}
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
