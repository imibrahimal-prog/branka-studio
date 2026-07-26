"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Eye, Shapes } from "lucide-react";

const statKeys = ["logos", "fields", "custom"] as const;

export function LogoShowcaseSection() {
  const t = useTranslations("logoShowcase");
  const image = "/projects/graphics/logos/logo-collection-01.jpg";

  return (
    <section className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="luxury-container">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading">{t("title")}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] lg:justify-self-end">
            {t("description")}
          </p>
        </div>

        <motion.a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="group relative block overflow-hidden rounded-[2.2rem] border border-[var(--color-border)] bg-[#eee] p-3 shadow-[0_28px_90px_rgba(17,18,16,0.1)] md:p-5"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#efefef]">
            <Image
              src={image}
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1440px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#1a0f0a]/0 opacity-0 transition-all duration-300 group-hover:bg-[#1a0f0a]/55 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
                <Eye className="h-4 w-4" />
                {t("open")}
              </span>
            </span>
          </div>
        </motion.a>

        <div className="mt-4 grid overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[#1a0f0a] text-white sm:grid-cols-3">
          {statKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="flex items-center justify-center gap-4 border-white/10 px-6 py-7 sm:border-s sm:first:border-s-0"
            >
              {index === 0 && (
                <Shapes className="hidden h-5 w-5 text-luxury-gold md:block" />
              )}
              <span className="font-display text-3xl font-bold text-luxury-gold">
                {t(`stats.${key}.value`)}
              </span>
              <span className="text-xs leading-5 text-white/48">
                {t(`stats.${key}.label`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
