"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Megaphone,
  Palette,
  PanelsTopLeft,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceKeys = ["identity", "content", "performance", "commerce"] as const;
const icons = {
  identity: Palette,
  content: PanelsTopLeft,
  performance: Megaphone,
  commerce: ShoppingBag,
};
const cardStyles = {
  identity: "bg-luxury-black text-luxury-white lg:col-span-7 lg:min-h-[370px]",
  content:
    "bg-[var(--color-surface)] text-[var(--color-foreground)] hover:bg-[#5c3928] hover:text-white lg:col-span-5 lg:min-h-[370px]",
  performance:
    "bg-[var(--color-surface)] text-[var(--color-foreground)] hover:bg-[#5c3928] hover:text-white lg:col-span-5 lg:min-h-[340px]",
  commerce:
    "bg-[linear-gradient(135deg,rgba(173,131,80,0.17),var(--color-surface))] text-[var(--color-foreground)] hover:bg-[#5c3928] hover:text-white lg:col-span-7 lg:min-h-[340px]",
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="luxury-container">
        <div className="mb-16 grid gap-6 md:mb-20 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading">{t("title")}</h2>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--color-muted)] md:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {serviceKeys.map((key, index) => {
            const Icon = icons[key];
            const isDark = key === "identity";
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className={cn(
                  "group relative flex min-h-[320px] flex-col overflow-hidden rounded-[2rem] border p-7 shadow-[0_25px_80px_rgba(17,18,16,0.07)] transition-all duration-500 hover:-translate-y-1 md:p-10",
                  isDark
                    ? "border-white/10"
                    : "border-[var(--color-border)] hover:border-luxury-gold/40",
                  cardStyles[key],
                )}
              >
                <div
                  className="pointer-events-none absolute -end-16 -top-16 h-52 w-52 rounded-full border border-luxury-gold/15"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -end-7 -top-7 h-28 w-28 rounded-full bg-luxury-gold/10 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className={cn(
                      "text-xs font-semibold tracking-[0.22em]",
                      isDark ? "text-white/45" : "text-[var(--color-muted)]",
                    )}
                  >
                    SERVICE / 0{index + 1}
                  </span>
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl border text-luxury-gold transition-all duration-300 group-hover:rotate-3 group-hover:bg-luxury-gold group-hover:text-luxury-black",
                      isDark
                        ? "border-white/15 bg-white/5"
                        : "border-luxury-gold/30 bg-luxury-gold/5",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="relative mt-auto pt-14">
                  <h3 className="font-display text-3xl font-semibold md:text-4xl">
                    {t(`items.${key}.title`)}
                  </h3>
                  <div className="mt-5 flex items-end justify-between gap-6">
                    <p
                      className={cn(
                        "max-w-xl text-sm leading-7 transition-colors group-hover:text-white/65 md:text-base",
                        isDark ? "text-white/60" : "text-[var(--color-muted)]",
                      )}
                    >
                      {t(`items.${key}.description`)}
                    </p>
                    <span
                      className={cn(
                        "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:flex rtl:group-hover:-translate-x-1",
                        isDark
                          ? "border-white/15 text-white"
                          : "border-[var(--color-border)] text-luxury-gold",
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
