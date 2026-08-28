"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Play, X, ArrowUpRight, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  allWorkProjects,
  workCategoriesList,
  type WorkCategoryKey,
  type ProjectItem,
} from "@/lib/data/projectsData";

export function WorkPageContent({ initialCategory = "all" }: { initialCategory?: string }) {
  const t = useTranslations("work");
  const locale = useLocale();
  const isAr = locale === "ar";

  const validCategory = workCategoriesList.some((c) => c.key === initialCategory)
    ? (initialCategory as WorkCategoryKey)
    : "all";

  const [activeCategory, setActiveCategory] = useState<WorkCategoryKey>(validCategory);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [, startTransition] = useTransition();

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && workCategoriesList.some((c) => c.key === cat)) {
        setActiveCategory(cat as WorkCategoryKey);
      } else {
        setActiveCategory("all");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update category and synchronize URL query parameter without full page reload
  const handleCategoryChange = (key: WorkCategoryKey) => {
    startTransition(() => {
      setActiveCategory(key);
      const currentUrl = new URL(window.location.href);
      if (key === "all") {
        currentUrl.searchParams.delete("category");
      } else {
        currentUrl.searchParams.set("category", key);
      }
      window.history.pushState({}, "", currentUrl.toString());
    });
  };

  const filteredProjects =
    activeCategory === "all"
      ? allWorkProjects
      : allWorkProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-background)]">
      {/* 1. Internal Hero Banner: Dark brown background with subtle gold gradient & Branka geometric ambient elements */}
      <section className="relative overflow-hidden bg-[#110a07] pt-[110px] pb-16 text-white md:pt-[135px] md:pb-24 border-b border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(199,164,106,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute -start-24 -top-24 h-80 w-80 rounded-full bg-[#704a35]/25 blur-[110px]" />
        <div className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-[#c7a46a]/15 blur-[110px]" />

        {/* Branka Geometric Luxury Watermark */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23d4b88a' stroke-width='1.2'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        {/* Saudi Vision 2030 Logo (Matching Hero and Contact headers) */}
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

        <div className="luxury-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              {t("banner.title")}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-8 text-white/75 md:text-xl md:leading-9">
              {t("banner.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Projects Section */}
      <section className="py-14 md:py-20">
        <div className="luxury-container">
          {/* Section Header */}
          <div className="mb-8 md:mb-10 text-center md:text-start">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
              {t("section.title")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {t("section.description")}
            </p>
          </div>

          {/* 3. 9-Category Pills Bar */}
          <div className="mb-10">
            {/* Horizontal scroll container on mobile, wraps cleanly on desktop */}
            <div
              className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar sm:flex-wrap md:gap-3"
              role="tablist"
              aria-label={t("section.title")}
            >
              {workCategoriesList.map((category) => {
                const isActive = activeCategory === category.key;
                const label = isAr ? category.labelAr : category.labelEn;

                return (
                  <button
                    key={category.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category.key)}
                    className={cn(
                      "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:px-6 md:py-3 cursor-pointer",
                      isActive
                        ? "border-[#241712] bg-[#241712] text-[#fcfaf7] shadow-[0_4px_16px_rgba(36,23,18,0.25)] dark:border-[#c7a46a] dark:bg-[#c7a46a] dark:text-[#110a07] dark:shadow-[0_4px_20px_rgba(199,164,106,0.3)]"
                        : "border-[#e3d8c8] bg-[#f8f5ee] text-[#331e13] hover:border-[#c7a46a] hover:bg-[#efe8dd] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-luxury-gold/40 dark:hover:bg-white/[0.08] dark:hover:text-white",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Projects Grid with Smooth Fade Transitions */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => {
                  const title = isAr ? project.titleAr : project.titleEn;
                  const categoryLabel = isAr ? project.categoryLabelAr : project.categoryLabelEn;
                  const description = isAr ? project.descriptionAr : project.descriptionEn;
                  const isVideo = Boolean(project.video);

                  return (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                      className="group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-luxury-gold/50 hover:shadow-[0_18px_45px_rgba(199,164,106,0.14)]"
                    >
                      {/* Media Wrapper */}
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden bg-black/30"
                      >
                        <Image
                          src={project.image}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                          priority={index < 4}
                          loading={index < 4 ? "eager" : "lazy"}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-60" />

                        {/* Tag Pill */}
                        {project.tag && (
                          <span className="absolute end-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-luxury-gold backdrop-blur-md">
                            {project.tag}
                          </span>
                        )}

                        {/* Hover Overlay with Action Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-5 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                            {isVideo ? <Play className="h-3.5 w-3.5 fill-current text-luxury-gold" /> : <Eye className="h-3.5 w-3.5 text-luxury-gold" />}
                            <span>{isVideo ? t("playVideo") : t("openImage")}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Information */}
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                            {categoryLabel}
                          </p>
                          <h3 className="mt-1.5 font-display text-lg font-bold text-[var(--color-foreground)] md:text-xl line-clamp-1">
                            {title}
                          </h3>
                          {description && (
                            <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)] line-clamp-2">
                              {description}
                            </p>
                          )}
                        </div>

                        {/* Footer Link / Trigger */}
                        <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-luxury-gold transition-colors hover:text-[#b08848]"
                          >
                            <span>{isVideo ? t("playVideo") : t("viewProject")}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
                          </button>

                          <span className="text-[11px] font-medium text-[var(--color-muted)]">
                            Branka
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              /* Empty State Message */
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="my-12 flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold">
                  <FolderOpen className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--color-foreground)]">
                  {isAr ? workCategoriesList.find((c) => c.key === activeCategory)?.labelAr : workCategoriesList.find((c) => c.key === activeCategory)?.labelEn}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] max-w-md">
                  {t("empty")}
                </p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 px-6 py-2.5 text-xs font-bold text-luxury-gold transition-all hover:bg-luxury-gold hover:text-black"
                >
                  <span>{isAr ? "عرض جميع الأعمال" : "View All Works"}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Project Lightbox / Media Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#170e0a] text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <span className="text-xs font-semibold text-luxury-gold">
                    {isAr ? selectedProject.categoryLabelAr : selectedProject.categoryLabelEn}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white md:text-xl">
                    {isAr ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Media Body */}
              <div className="relative max-h-[68vh] overflow-y-auto bg-black">
                {selectedProject.video ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    poster={selectedProject.poster}
                    className="h-full max-h-[65vh] w-full object-contain"
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative min-h-[400px] max-h-[65vh] w-full flex items-center justify-center bg-[#140c08]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProject.image}
                      alt={isAr ? selectedProject.titleAr : selectedProject.titleEn}
                      className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                    />
                  </div>
                )}
              </div>

              {/* Modal Description & Case Study Footer */}
              <div className="border-t border-white/10 bg-[#1c120c] p-5 space-y-3">
                {(isAr ? selectedProject.descriptionAr : selectedProject.descriptionEn) && (
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    {isAr ? selectedProject.descriptionAr : selectedProject.descriptionEn}
                  </p>
                )}

                {/* Case Study Details if available */}
                {(selectedProject.challengeAr || selectedProject.solutionAr) && (
                  <div className="grid gap-3 pt-2 sm:grid-cols-2 border-t border-white/5 text-xs">
                    {selectedProject.challengeAr && (
                      <div className="rounded-lg bg-black/30 p-3 border border-white/5">
                        <span className="font-semibold text-luxury-gold block mb-1">
                          {isAr ? "التحدي:" : "Challenge:"}
                        </span>
                        <p className="text-white/70 leading-relaxed">
                          {isAr ? selectedProject.challengeAr : selectedProject.challengeEn}
                        </p>
                      </div>
                    )}
                    {selectedProject.solutionAr && (
                      <div className="rounded-lg bg-black/30 p-3 border border-white/5">
                        <span className="font-semibold text-luxury-gold block mb-1">
                          {isAr ? "الحل والتنفيذ:" : "Solution:"}
                        </span>
                        <p className="text-white/70 leading-relaxed">
                          {isAr ? selectedProject.solutionAr : selectedProject.solutionEn}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Related Service Link */}
                {selectedProject.serviceSlug && (
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-white/50">
                      {isAr ? "الخدمة المقدمة في هذا المشروع:" : "Service provided:"}
                    </span>
                    <a
                      href={`/${locale}/services/${selectedProject.serviceSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-luxury-gold hover:underline"
                    >
                      <span>{isAr ? "استعرض تفاصيل الخدمة" : "View Service Details"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
