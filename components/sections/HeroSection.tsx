"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { BrankaCyberLuxuryHeroBackground } from "@/components/ui/BrankaCyberLuxuryHeroBackground";
import { CyberTripleChevrons } from "@/components/ui/CyberTripleChevrons";
import {
  Code2,
  Globe,
  Smartphone,
  Monitor,
  Store,
  Sparkles,
  Megaphone,
  Share2,
  PenTool,
  Play,
} from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  const row1Badges = [
    { key: "code", icon: Code2, slug: "web-development" },
    { key: "web", icon: Globe, slug: "web-development" },
    { key: "apps", icon: Smartphone, slug: "web-development" },
    { key: "systems", icon: Monitor, slug: "web-development" },
    { key: "ecommerce", icon: Store, slug: "web-development" },
    { key: "google", icon: Sparkles, slug: "google-services" },
  ] as const;

  const row2Badges = [
    { key: "marketing", icon: Megaphone, slug: "digital-marketing" },
    { key: "social", icon: Share2, slug: "social-media" },
    { key: "design", icon: PenTool, slug: "advertising-design" },
    { key: "video", icon: Play, slug: "motion-graphics" },
  ] as const;

  return (
    <section className="branka-hero relative min-h-screen md:min-h-[100dvh] overflow-hidden bg-[#241712] pt-[76px] md:pt-[88px] text-luxury-white flex flex-col justify-between">
      {/* Cyber Luxury Background with Grid & Ambient Lights */}
      <BrankaCyberLuxuryHeroBackground />

      {/* Saudi Vision 2030 Logo (Anchored to the physical left of Hero section) */}
      <div className="vision-2030-logo-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/vision-2030-white.svg"
          alt="رؤية السعودية 2030"
          width={90}
          height={60}
          fetchPriority="high"
          className="vision-2030-logo"
        />
      </div>

      {/* Left Area Triple Chevrons (Pointing Downwards-Left in the Left Circle Zone) */}
      <CyberTripleChevrons
        direction="down-left"
        className="absolute start-4 sm:start-10 md:start-16 lg:start-24 top-[66%] sm:top-[68%] -translate-y-1/2 z-10 hidden sm:block"
      />

      {/* Right Area Triple Chevrons (Pointing Downwards-Right in the Right Circle Zone) */}
      <CyberTripleChevrons
        direction="down-right"
        className="absolute end-4 sm:end-10 md:end-16 lg:end-24 top-[66%] sm:top-[68%] -translate-y-1/2 z-10 hidden sm:block"
      />

      {/* Main Container */}
      <div className="hero-content luxury-container relative z-10 flex flex-1 flex-col justify-center items-center pt-2 sm:pt-4 pb-8 md:pb-12">
        {/* Center Main Content */}
        <div className="mx-auto my-auto max-w-4xl text-center py-2 md:py-4">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-[#25150e]/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#d4b88a] shadow-md backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-luxury-gold" />
            <span>{t("eyebrow")}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto font-display font-semibold text-white tracking-normal text-[clamp(34px,9vw,42px)] md:text-[clamp(50px,5vw,68px)] leading-[1.4] md:leading-[1.3] max-w-full md:max-w-[900px] text-balance"
          >
            <span className="block drop-shadow-sm">
              {t("title")}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 sm:mt-6 max-w-[720px] text-balance font-normal text-[clamp(16px,1.5vw,19px)] leading-[1.9] text-[#ede4d8]"
          >
            {t("description")}
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5 md:mt-8"
          >
            {/* Primary Button */}
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#b08848] px-7 py-3 text-sm font-medium text-[#140b08] shadow-[0_10px_30px_rgba(199,164,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(199,164,106,0.5)] cursor-pointer"
            >
              <span>{t("ctaPrimary")}</span>
              <span className="text-sm font-medium rtl:rotate-180">→</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/work"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold hover:bg-white/[0.1] hover:text-luxury-gold cursor-pointer"
            >
              <span>{t("ctaSecondary")}</span>
            </Link>
          </motion.div>

          {/* Services Badges in 2 Balanced Rows */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col items-center justify-center gap-2.5 sm:gap-3"
          >
            {/* Row 1: برمجة, مواقع, تطبيقات, انظمة, متاجر الكترونية, خدمات جوجل */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {row1Badges.map(({ key, icon: Icon, slug }) => (
                <Link
                  key={key}
                  href={`/services/${slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c110c]/85 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold/50 hover:bg-[#2c1a13] hover:text-white cursor-pointer"
                >
                  <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-luxury-gold transition-transform group-hover:scale-110" />
                  <span>{t(`badges.${key}`)}</span>
                </Link>
              ))}
            </div>

            {/* Row 2: تسويق, تواصل إجتماعي, تصميم, فيديو */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {row2Badges.map(({ key, icon: Icon, slug }) => (
                <Link
                  key={key}
                  href={`/services/${slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1c110c]/85 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold/50 hover:bg-[#2c1a13] hover:text-white cursor-pointer"
                >
                  <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-luxury-gold transition-transform group-hover:scale-110" />
                  <span>{t(`badges.${key}`)}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
