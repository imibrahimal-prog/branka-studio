"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CarFront,
  Gem,
  HeartPulse,
  Home,
  Megaphone,
  ShoppingBag,
  Sparkles,
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
const promiseKeys = ["clarity", "consistency", "delivery"] as const;
const icons = [
  ShoppingBag,
  Home,
  Gem,
  CarFront,
  HeartPulse,
  Sparkles,
  Building2,
  Megaphone,
];

export function SectorsSection() {
  const t = useTranslations("sectors");
  const marqueeItems = [...sectorKeys, ...sectorKeys];

  return (
    <section className="overflow-hidden bg-[#170e0a] py-24 text-white md:py-32">
      <div className="luxury-container">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading text-white">{t("title")}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="mt-14 border-y border-white/8 bg-white/[0.025] py-5">
        <div className="sector-marquee flex w-max items-center gap-4">
          {marqueeItems.map((key, index) => {
            const Icon = icons[index % icons.length];
            return (
              <span
                key={`${key}-${index}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white/65"
              >
                <Icon className="h-4 w-4 text-luxury-gold" />
                {t(`items.${key}`)}
              </span>
            );
          })}
        </div>
      </div>

      <div className="luxury-container">
        <div className="mt-16">
          <p className="luxury-eyebrow mb-4">{t("promiseEyebrow")}</p>
          <h3 className="font-display text-3xl font-semibold text-white md:text-5xl">
            {t("promiseTitle")}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/48">
            {t("promiseNote")}
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {promiseKeys.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold/40 hover:bg-[#5c3928]/30 md:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-luxury-gold/25 bg-luxury-gold/10 text-luxury-gold">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <h4 className="mt-8 font-display text-2xl font-semibold">
                {t(`promises.${key}.title`)}
              </h4>
              <p className="mt-3 text-sm leading-7 text-white/50">
                {t(`promises.${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
