"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Megaphone, Palette, PanelsTopLeft, ShoppingBag } from "lucide-react";

const serviceKeys = ["identity", "content", "performance", "commerce"] as const;
const icons = {
  identity: Palette,
  content: PanelsTopLeft,
  performance: Megaphone,
  commerce: ShoppingBag,
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-32"
    >
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

        <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
          {serviceKeys.map((key, index) => {
            const Icon = icons[key];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="group bg-[var(--color-background)] p-7 transition-colors duration-500 hover:bg-[var(--color-surface-raised)] md:p-10"
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-muted)]">
                    0{index + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center border border-luxury-gold/35 text-luxury-gold transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-luxury-black">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium md:text-3xl">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                  {t(`items.${key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
