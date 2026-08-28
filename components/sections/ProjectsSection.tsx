"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { allWorkProjects } from "@/lib/data/projectsData";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const tWork = useTranslations("work");
  const locale = useLocale();
  const isAr = locale === "ar";

  const featuredProjects = allWorkProjects
    .filter((p) => p.featured)
    .slice(0, 6);

  return (
    <section id="projects" className="bg-[#241712] py-24 text-white md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-[#2b1b14] px-4 py-1 text-xs font-semibold text-luxury-gold shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("eyebrow")}</span>
            </div>
            <h2 className="luxury-heading max-w-3xl text-balance text-white">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg md:leading-9 lg:justify-self-end">
            {t("description")}
          </p>
        </div>

        {/* 6 Curated Featured Projects Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-luxury-gold/50 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <Link
                href={`/work?category=${item.category}`}
                className="block"
                aria-label={isAr ? item.titleAr : item.titleEn}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.4rem] bg-black/40">
                  <Image
                    src={item.image}
                    alt={isAr ? item.titleAr : item.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  {item.tag && (
                    <span className="absolute end-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-luxury-gold backdrop-blur-md">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="p-4 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                    {isAr ? item.categoryLabelAr : item.categoryLabelEn}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white md:text-xl line-clamp-1 group-hover:text-luxury-gold transition-colors">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  {(isAr ? item.descriptionAr : item.descriptionEn) && (
                    <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                      {isAr ? item.descriptionAr : item.descriptionEn}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 'مشاهدة جميع أعمالنا' View All Projects Action -> Navigates to /work */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#a8884f] px-9 py-4 text-sm md:text-base font-bold text-[#140b08] shadow-[0_10px_35px_rgba(199,164,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(199,164,106,0.5)] cursor-pointer"
          >
            <span>{tWork("viewAll")}</span>
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
