"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  "/projects/graphics/infographics/infographic-20.jpg",
  "/projects/graphics/infographics/infographic-21.jpg",
  "/projects/graphics/infographics/infographic-22.jpg",
] as const;

export function VisualStorySection() {
  const t = useTranslations("visualStory");
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % slides.length),
      4600,
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function move(direction: 1 | -1) {
    setActive((value) => (value + direction + slides.length) % slides.length);
  }

  return (
    <section className="bg-[var(--color-background)] py-24 md:py-32">
      <div className="luxury-container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1a0f0a] p-6 text-white shadow-[0_35px_110px_rgba(42,24,16,0.2)] md:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -end-20 -top-20 h-80 w-80 rounded-full bg-[#714934]/30 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-luxury-gold/12 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
              <h2 className="luxury-heading max-w-xl text-balance text-white">
                {t("title")}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
                {t("description")}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-all hover:border-luxury-gold hover:text-luxury-gold"
                  aria-label={t("previous")}
                >
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-all hover:border-luxury-gold hover:text-luxury-gold"
                  aria-label={t("next")}
                >
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </button>
                <span className="ms-2 text-xs font-semibold tracking-[0.18em] text-white/40">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/25 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={slides[active]}
                    href={slides[active]}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[active]}
                      alt={t("imageAlt", { number: active + 1 })}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </motion.a>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-white/10">
                  <motion.div
                    key={`progress-${active}`}
                    initial={{ width: "0%" }}
                    animate={{ width: reduceMotion ? "100%" : "100%" }}
                    transition={{
                      duration: reduceMotion ? 0 : 4.6,
                      ease: "linear",
                    }}
                    className="h-full bg-luxury-gold"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={t("goTo", { number: index + 1 })}
                    aria-current={active === index ? "true" : undefined}
                    className={cn(
                      "relative aspect-video overflow-hidden rounded-xl border transition-all",
                      active === index
                        ? "border-luxury-gold opacity-100"
                        : "border-white/10 opacity-45 hover:opacity-80",
                    )}
                  >
                    <Image
                      src={slide}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
