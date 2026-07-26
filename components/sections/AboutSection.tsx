"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const stats = ["stat1", "stat2", "stat3"] as const;
const focusKeys = ["clarity", "craft", "results"] as const;

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="luxury-container">
        <div className="grid gap-12 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-7 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading text-balance">{t("title")}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-lg leading-9 text-[var(--color-foreground)]">
              {t("descriptionPrimary")}
            </p>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              {t("descriptionSecondary")}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {focusKeys.map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm"
                >
                  <Check className="h-4 w-4 shrink-0 text-luxury-gold" />
                  <span>{t(`focus.${key}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-9 text-center md:py-12"
            >
              <p className="font-display text-4xl font-medium text-luxury-gold md:text-5xl">
                {t(`${stat}Value`)}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {t(`${stat}Label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
