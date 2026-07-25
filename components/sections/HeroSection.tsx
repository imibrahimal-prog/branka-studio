"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const trustKeys = [
  "designExperience",
  "marketingExperience",
  "market",
] as const;

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden pt-[72px] md:pt-20">
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -start-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-luxury-gold/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -end-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-luxury-gold/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="luxury-container relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-luxury-gold shadow-[0_0_18px_rgba(199,164,106,0.9)]" />
            <p className="luxury-eyebrow">{t("eyebrow")}</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="hero-title max-w-4xl text-balance"
          >
            {t("title")}
            <span className="mt-2 block text-luxury-gold">
              {t("titleAccent")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/#projects" className="luxury-button-primary">
              {t("ctaPrimary")}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <Link href="/#contact" className="luxury-button-secondary">
              {t("ctaSecondary")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3"
          >
            {trustKeys.map((key) => (
              <div
                key={key}
                className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
              >
                <span className="h-1 w-1 rounded-full bg-luxury-gold" />
                {t(`trust.${key}`)}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:justify-self-end"
        >
          <div
            className="absolute -inset-4 border border-luxury-gold/20"
            aria-hidden="true"
          />
          <div
            className="absolute -end-7 -top-7 h-20 w-20 border-e border-t border-luxury-gold/70"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-7 -start-7 h-20 w-20 border-b border-s border-luxury-gold/70"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-border)] bg-luxury-black">
            <Image
              src="/images/ibrahim-almusabi.webp"
              alt={t("portraitAlt")}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-luxury-white md:p-9">
              <p className="font-display text-3xl font-medium">
                {t("founder")}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-luxury-gold">
                {t("founderRole")}
              </p>
            </div>
          </div>

          <div className="absolute -start-3 top-8 bg-luxury-gold px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-luxury-black shadow-xl md:-start-8">
            {t("badge")}
          </div>
        </motion.div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-muted)] transition-colors hover:text-luxury-gold md:flex rtl:translate-x-1/2"
        aria-label={t("scroll")}
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </Link>
    </section>
  );
}
