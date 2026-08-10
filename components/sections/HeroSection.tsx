"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const roleKeys = ["identity", "graphics", "marketing", "web"] as const;
const floatingKeys = ["graphic", "branding", "performance"] as const;
const metricKeys = ["metric1", "metric2", "metric3"] as const;

function useTypewriter(items: string[]) {
  const [itemIndex, setItemIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setText(items[0] ?? "");
      return;
    }

    const current = items[itemIndex] ?? "";
    const completed = text === current;
    const cleared = text.length === 0;
    const delay = completed ? 1350 : deleting ? 45 : 78;

    const timer = window.setTimeout(() => {
      if (completed && !deleting) {
        setDeleting(true);
        return;
      }

      if (deleting && cleared) {
        setDeleting(false);
        setItemIndex((value) => (value + 1) % items.length);
        return;
      }

      setText(
        deleting
          ? current.slice(0, Math.max(0, text.length - 1))
          : current.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, itemIndex, items, reduceMotion, text]);

  return text;
}

function TypewriterText({ items }: { items: string[] }) {
  const text = useTypewriter(items);
  return <>{text}</>;
}

export function HeroSection() {
  const t = useTranslations("hero");
  const roles = useMemo(() => roleKeys.map((key) => t(`roles.${key}`)), [t]);
  const pauseAmbientMotion = true;

  return (
    <section className="branka-hero relative overflow-x-clip overflow-y-hidden pt-[72px] text-luxury-white md:pt-[84px]">
      <div className="hero-split-bg absolute inset-0" aria-hidden="true" />
      <div className="hero-dark-grid absolute inset-y-0 left-0 w-[56%]" />
      <motion.div
        animate={
          pauseAmbientMotion
            ? undefined
            : {
                x: [0, 55, -25, 0],
                y: [0, -35, 30, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -start-32 top-20 h-[32rem] w-[32rem] rounded-full bg-[#704a35]/25 blur-[120px]"
        aria-hidden="true"
      />
      <motion.div
        animate={
          pauseAmbientMotion
            ? undefined
            : {
                x: [0, -45, 35, 0],
                y: [0, 45, -20, 0],
                scale: [1, 0.94, 1.1, 1],
              }
        }
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -end-28 bottom-4 h-[34rem] w-[34rem] rounded-full bg-luxury-gold/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[46%] overflow-hidden opacity-[0.055]">
        <div className="hero-word-track flex w-max whitespace-nowrap font-display text-[clamp(5rem,13vw,12rem)] font-black uppercase tracking-[-0.06em]">
          <span>GRAPHIC DESIGN · BRANDING · MOTION ·&nbsp;</span>
          <span aria-hidden="true">
            GRAPHIC DESIGN · BRANDING · MOTION ·&nbsp;
          </span>
        </div>
      </div>

      <div className="luxury-container relative z-10 grid min-h-[760px] items-center gap-16 py-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-20 xl:py-20">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-luxury-gold" />
              <span className="text-sm font-semibold text-white/70">
                {t("eyebrow")}
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title min-w-0 max-w-[760px] text-balance text-luxury-white"
          >
            <span className="hero-title-line text-luxury-white">
              {t("title")}
            </span>
            <span className="hero-title-line mt-2 text-luxury-gold">
              {t("titleAccent")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex min-h-9 items-center gap-2 text-sm font-semibold text-white/60 md:text-base"
            aria-live="polite"
          >
            <span>{t("typewriterLabel")}</span>
            <span className="text-luxury-gold">
              <TypewriterText items={roles} />
            </span>
            <span className="h-5 w-px animate-pulse bg-luxury-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg md:leading-9"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/#projects"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#5c3928] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(39,21,14,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-luxury-gold hover:text-luxury-black"
            >
              {t("ctaPrimary")}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/15 bg-white/[0.055] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold hover:text-luxury-gold"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px] xl:mx-0 xl:justify-self-end"
        >
          <div
            className="absolute inset-[11%] rounded-full bg-luxury-gold/20 blur-[75px]"
            aria-hidden="true"
          />
          <div className="relative aspect-square">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="hero-orbit absolute inset-0 rounded-full border border-dashed border-luxury-gold/38"
              aria-hidden="true"
            >
              <span className="hero-orbit-dot hero-orbit-dot-outer" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="hero-orbit absolute inset-4 rounded-full border border-white/10"
              aria-hidden="true"
            >
              <span className="hero-orbit-dot hero-orbit-dot-inner" />
            </motion.div>
            <div className="absolute inset-9 overflow-hidden rounded-full border-[7px] border-[#2e1d15] bg-luxury-black shadow-[0_35px_100px_rgba(0,0,0,0.45)] ring-1 ring-luxury-gold/35">
              <Image
                src="/images/ibrahim-almusabi.webp"
                alt={t("portraitAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 78vw, 38vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120b08]/50 via-transparent to-white/5" />
            </div>
          </div>

          {floatingKeys.map((key, index) => (
            <motion.span
              key={key}
              animate={
                pauseAmbientMotion
                  ? undefined
                  : { y: [0, index % 2 === 0 ? -8 : 8, 0] }
              }
              transition={{
                duration: 4 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={
                index === 0
                  ? "absolute -start-2 top-[19%] rounded-full border border-white/12 bg-[#160e0a]/85 px-4 py-2.5 text-xs font-semibold text-white/75 shadow-xl backdrop-blur md:-start-8"
                  : index === 1
                    ? "absolute -end-2 top-[36%] rounded-full border border-luxury-gold/25 bg-[#5c3928] px-4 py-2.5 text-xs font-semibold text-white shadow-xl md:-end-8"
                    : "absolute bottom-[12%] start-[2%] rounded-full border border-white/12 bg-[#160e0a]/85 px-4 py-2.5 text-xs font-semibold text-white/75 shadow-xl backdrop-blur"
              }
            >
              {t(`floating.${key}`)}
            </motion.span>
          ))}

          <motion.div
            animate={pauseAmbientMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 end-3 max-w-[285px] rounded-[1.35rem] border border-white/10 bg-[#170f0b]/92 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.36)] backdrop-blur-md"
          >
            <p className="font-display text-lg font-semibold text-white">
              {t("founder")}
            </p>
            <p className="mt-1 text-[11px] font-medium leading-5 text-white/50">
              {t("founderRole")}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="luxury-container relative z-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="grid overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 backdrop-blur-xl sm:grid-cols-3"
        >
          {metricKeys.map((key, index) => (
            <div
              key={key}
              className="flex items-center justify-center gap-4 border-white/10 px-6 py-6 text-center sm:border-s sm:first:border-s-0"
            >
              <span className="font-display text-3xl font-bold text-luxury-gold md:text-4xl">
                {t(`metrics.${key}.value`)}
              </span>
              <span className="max-w-32 text-start text-xs leading-5 text-white/50">
                {t(`metrics.${key}.label`)}
              </span>
              <span className="sr-only">{index + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-2 start-1/2 z-20 hidden -translate-x-1/2 text-white/35 transition-colors hover:text-luxury-gold xl:block rtl:translate-x-1/2"
        aria-label={t("scroll")}
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </Link>
    </section>
  );
}
