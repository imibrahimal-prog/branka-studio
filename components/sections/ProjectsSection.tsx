"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  Eye,
  Images,
  Megaphone,
  Monitor,
  Palette,
  PlayCircle,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryKeys = ["graphics", "marketing", "web", "motion"] as const;
type CategoryKey = (typeof categoryKeys)[number];

const graphicsCategoryKeys = [
  "all",
  "logos",
  "identities",
  "social",
  "infographics",
  "packaging",
] as const;
type GraphicsCategoryKey = (typeof graphicsCategoryKeys)[number];
type GraphicsWorkCategory = Exclude<GraphicsCategoryKey, "all">;

const categoryIcons = {
  graphics: Palette,
  marketing: Megaphone,
  web: Monitor,
  motion: PlayCircle,
};

type GraphicsProject = {
  image: string;
  category: GraphicsWorkCategory;
  order: number;
};

const graphicsProjects: GraphicsProject[] = [
  {
    image: "/projects/graphics/logos/logo-collection-01.jpg",
    category: "logos",
    order: 1,
  },
  ...[5, 6, 7].map((page, index) => ({
    image: `/projects/graphics/identities/identity-${page}.jpg`,
    category: "identities" as const,
    order: index + 1,
  })),
  ...Array.from({ length: 10 }, (_, index) => ({
    image: `/projects/graphics/social/social-${index + 9}.jpg`,
    category: "social" as const,
    order: index + 1,
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    image: `/projects/graphics/infographics/infographic-${index + 20}.jpg`,
    category: "infographics" as const,
    order: index + 1,
  })),
  ...[24, 26, 27, 28, 29, 30, 31].map((page, index) => ({
    image: `/projects/graphics/packaging/packaging-${page}.jpg`,
    category: "packaging" as const,
    order: index + 1,
  })),
];

type MarketingCaseKey = "pharmacy" | "oud" | "auto" | "realEstate";

type MarketingCase = {
  id: MarketingCaseKey;
  images: string[];
};

const marketingCases: MarketingCase[] = [
  {
    id: "pharmacy",
    images: Array.from(
      { length: 9 },
      (_, index) => `/projects/marketing/pharmacy/pharmacy-${index + 7}.jpg`,
    ),
  },
  {
    id: "oud",
    images: Array.from(
      { length: 7 },
      (_, index) => `/projects/marketing/oud/oud-${index + 16}.jpg`,
    ),
  },
  {
    id: "auto",
    images: Array.from(
      { length: 8 },
      (_, index) => `/projects/marketing/auto/auto-${index + 23}.jpg`,
    ),
  },
  {
    id: "realEstate",
    images: Array.from(
      { length: 6 },
      (_, index) =>
        `/projects/marketing/real-estate/real-estate-${index + 31}.jpg`,
    ),
  },
];

const marketingOverview = [
  {
    id: "results",
    image: "/projects/marketing/overview/team-results.jpg",
  },
  {
    id: "method",
    image: "/projects/marketing/overview/campaign-method.jpg",
  },
] as const;

const webProjects = [
  {
    id: "restia",
    image: "/projects/web/restia-store.webp",
  },
  {
    id: "perfume",
    image: "/projects/web/luxury-perfume-store.webp",
  },
  {
    id: "manoom",
    image: "/projects/web/manoom-store.webp",
  },
] as const;

const motionProjects = [
  {
    id: "alhilal",
    video: "/projects/motion/alhilal.mp4",
    poster: "/projects/motion/alhilal-poster.webp",
  },
  {
    id: "brankaPro",
    video: "/projects/motion/branka-pro.mp4",
    poster: "/projects/motion/branka-pro-poster.webp",
  },
  {
    id: "arabicCalligraphy",
    video: "/projects/motion/arabic-calligraphy.mp4",
    poster: "/projects/motion/arabic-calligraphy-poster.webp",
  },
  {
    id: "pizzaMascot",
    video: "/projects/motion/pizza-mascot.mp4",
    poster: "/projects/motion/pizza-mascot-poster.webp",
  },
  {
    id: "turkishRestaurant",
    video: "/projects/motion/turkish-restaurant.mp4",
    poster: "/projects/motion/turkish-restaurant-poster.webp",
  },
  {
    id: "ministryHealth",
    video: "/projects/motion/ministry-health.mp4",
    poster: "/projects/motion/ministry-health-poster.webp",
  },
  {
    id: "riyadhHealth",
    video: "/projects/motion/riyadh-health-cluster.mp4",
    poster: "/projects/motion/riyadh-health-cluster-poster.webp",
  },
  {
    id: "stovall",
    video: "/projects/motion/stovall-group.mp4",
    poster: "/projects/motion/stovall-group-poster.webp",
  },
  {
    id: "vision2030",
    video: "/projects/motion/vision-2030.mp4",
    poster: "/projects/motion/vision-2030-poster.webp",
  },
] as const;

const categoryCounts: Record<CategoryKey, number> = {
  graphics: graphicsProjects.length,
  marketing: marketingCases.length,
  web: webProjects.length,
  motion: motionProjects.length,
};

const metricKeys = ["metric1", "metric2", "metric3"] as const;

export function ProjectsSection() {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("graphics");
  const [graphicsFilter, setGraphicsFilter] =
    useState<GraphicsCategoryKey>("all");

  const filteredGraphics =
    graphicsFilter === "all"
      ? graphicsProjects
      : graphicsProjects.filter(
          (project) => project.category === graphicsFilter,
        );

  return (
    <section
      id="projects"
      className="border-t border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="luxury-container">
        <div className="max-w-3xl">
          <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="luxury-heading text-balance">{t("title")}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
            {t("description")}
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-5"
          role="tablist"
          aria-label={t("tabsLabel")}
        >
          {categoryKeys.map((key) => {
            const Icon = categoryIcons[key];
            const isActive = activeCategory === key;
            const count = categoryCounts[key];

            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  "inline-flex items-center gap-2 border px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                  isActive
                    ? "border-luxury-gold bg-luxury-gold text-luxury-black"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-luxury-gold hover:text-luxury-gold",
                )}
              >
                <Icon className="h-4 w-4" />
                {t(`tabs.${key}`)}
                {count > 0 && (
                  <span
                    className={cn(
                      "text-[10px]",
                      isActive
                        ? "text-luxury-black/65"
                        : "text-[var(--color-muted)]",
                    )}
                  >
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {activeCategory === "graphics" && (
          <GraphicsPortfolio
            activeFilter={graphicsFilter}
            onFilterChange={setGraphicsFilter}
            projects={filteredGraphics}
          />
        )}

        {activeCategory === "marketing" && <MarketingPortfolio />}

        {activeCategory === "web" && <WebPortfolio />}

        {activeCategory === "motion" && <MotionPortfolio />}
      </div>
    </section>
  );
}

function GraphicsPortfolio({
  activeFilter,
  onFilterChange,
  projects,
}: {
  activeFilter: GraphicsCategoryKey;
  onFilterChange: (filter: GraphicsCategoryKey) => void;
  projects: GraphicsProject[];
}) {
  const t = useTranslations("projects");

  return (
    <motion.div
      key="graphics"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-10"
      role="tabpanel"
    >
      <div className="flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Images className="mt-0.5 h-5 w-5 shrink-0 text-luxury-gold" />
          <div>
            <h3 className="font-display text-xl font-medium">
              {t("graphics.title")}
            </h3>
            <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
              {t("graphics.description", { count: graphicsProjects.length })}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-luxury-gold">
          {t("graphics.visibleCount", { count: projects.length })}
        </span>
      </div>

      <div
        className="mt-6 flex flex-wrap gap-2"
        aria-label={t("graphics.filtersLabel")}
      >
        {graphicsCategoryKeys.map((key) => {
          const isActive = activeFilter === key;

          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(key)}
              className={cn(
                "border px-4 py-2 text-xs font-semibold transition-colors",
                isActive
                  ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                  : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-luxury-gold/70 hover:text-[var(--color-text)]",
              )}
            >
              {t(`graphics.filters.${key}`)}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 grid gap-x-7 gap-y-10 md:grid-cols-2"
      >
        {projects.map((project, index) => {
          const category = t(`graphics.filters.${project.category}`).toString();
          const title = t("graphics.cardTitle", {
            category,
            number: String(project.order).padStart(2, "0"),
          });

          return (
            <motion.article
              key={project.image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
              className="group"
            >
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden border border-[var(--color-border)] bg-[#141311]"
                aria-label={t("viewProject", { title })}
              >
                <Image
                  src={project.image}
                  alt={t("graphics.imageAlt", { title })}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-luxury-black/0 opacity-0 transition-all duration-300 group-hover:bg-luxury-black/65 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 border border-luxury-white/30 bg-luxury-black/50 px-4 py-3 text-xs uppercase tracking-[0.16em] text-luxury-white backdrop-blur-md">
                    <Eye className="h-4 w-4" />
                    {t("open")}
                  </span>
                </span>
              </a>

              <div className="mt-4 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-luxury-gold">
                    {category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {title}
                  </h3>
                </div>
                <span className="font-display text-sm text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

function WebPortfolio() {
  const t = useTranslations("projects");

  return (
    <motion.div
      key="web"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-10"
      role="tabpanel"
    >
      <div className="flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Monitor className="mt-0.5 h-5 w-5 shrink-0 text-luxury-gold" />
          <div>
            <h3 className="font-display text-xl font-medium">
              {t("web.title")}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
              {t("web.description")}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-luxury-gold">
          {t("web.count", { count: webProjects.length })}
        </span>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {webProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group"
          >
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[4/5] overflow-hidden border border-[var(--color-border)] bg-[#141311]"
              aria-label={t("viewProject", {
                title: t(`web.projects.${project.id}.title`),
              })}
            >
              <Image
                src={project.image}
                alt={t(`web.projects.${project.id}.alt`)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-luxury-black/0 opacity-0 transition-all duration-300 group-hover:bg-luxury-black/55 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 border border-luxury-white/30 bg-luxury-black/50 px-4 py-3 text-xs uppercase tracking-[0.16em] text-luxury-white backdrop-blur-md">
                  <Eye className="h-4 w-4" />
                  {t("open")}
                </span>
              </span>
            </a>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-luxury-gold">
                  {t("web.category")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium">
                  {t(`web.projects.${project.id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {t(`web.projects.${project.id}.description`)}
                </p>
              </div>
              <span className="font-display text-sm text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function MotionPortfolio() {
  const t = useTranslations("projects");

  return (
    <motion.div
      key="motion"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-10"
      role="tabpanel"
    >
      <div className="flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-luxury-gold" />
          <div>
            <h3 className="font-display text-xl font-medium">
              {t("motion.title")}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
              {t("motion.description")}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-luxury-gold">
          {t("motion.count", { count: motionProjects.length })}
        </span>
      </div>

      <p className="mt-4 border-s-2 border-luxury-gold/50 ps-4 text-xs leading-6 text-[var(--color-muted)]">
        {t("motion.disclaimer")}
      </p>

      <div className="mt-8 grid gap-x-7 gap-y-11 md:grid-cols-2">
        {motionProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="overflow-hidden border border-[var(--color-border)] bg-[#0d0d0d]">
              <video
                controls
                playsInline
                preload="none"
                poster={project.poster}
                className="aspect-video w-full object-cover"
                aria-label={t(`motion.projects.${project.id}.title`)}
              >
                <source src={project.video} type="video/mp4" />
                {t("motion.unsupported")}
              </video>
            </div>

            <div className="mt-4 flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-luxury-gold">
                  {t("motion.category")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium">
                  {t(`motion.projects.${project.id}.title`)}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                  {t(`motion.projects.${project.id}.description`)}
                </p>
              </div>
              <div className="shrink-0 text-end">
                <span className="block font-display text-sm text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  {t("motion.duration")}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function MarketingPortfolio() {
  const t = useTranslations("projects");

  return (
    <motion.div
      key="marketing"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-10"
      role="tabpanel"
    >
      <div className="border border-luxury-gold/35 bg-luxury-gold/[0.06] p-6 md:p-8">
        <div className="flex items-start gap-4">
          <Users className="mt-1 h-6 w-6 shrink-0 text-luxury-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-luxury-gold">
              {t("marketing.attributionEyebrow")}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium">
              {t("marketing.attributionTitle")}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
              {t("marketing.attribution")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {metricKeys.map((key) => (
          <div
            key={key}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <p className="font-display text-3xl font-semibold text-luxury-gold">
              {t(`marketing.overall.${key}.value`)}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {t(`marketing.overall.${key}.label`)}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
        {t("marketing.resultsNote")}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {marketingOverview.map((item) => (
          <article key={item.id} className="group">
            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-video overflow-hidden border border-[var(--color-border)] bg-[#1c191e]"
              aria-label={t("viewProject", {
                title: t(`marketing.overviewCards.${item.id}.title`),
              })}
            >
              <Image
                src={item.image}
                alt={t(`marketing.overviewCards.${item.id}.alt`)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </a>
            <h3 className="mt-4 font-display text-xl font-medium">
              {t(`marketing.overviewCards.${item.id}.title`)}
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-14 flex items-end justify-between gap-6">
        <div>
          <p className="luxury-eyebrow mb-3">{t("marketing.casesEyebrow")}</p>
          <h3 className="font-display text-3xl font-medium md:text-4xl">
            {t("marketing.casesTitle")}
          </h3>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] sm:block">
          {t("marketing.totalSlides", { count: 30 })}
        </span>
      </div>

      <div className="mt-7 space-y-4">
        {marketingCases.map((campaign, index) => (
          <MarketingCaseStudy
            key={campaign.id}
            campaign={campaign}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

function MarketingCaseStudy({
  campaign,
  defaultOpen,
}: {
  campaign: MarketingCase;
  defaultOpen: boolean;
}) {
  const t = useTranslations("projects");

  return (
    <details
      className="group/case border border-[var(--color-border)] bg-[var(--color-surface)]"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden md:p-7 [&::-webkit-details-marker]:hidden">
        <div className="flex min-w-0 items-center gap-4">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-luxury-gold/30 text-luxury-gold sm:flex">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-luxury-gold">
              {t(`marketing.cases.${campaign.id}.sector`)}
            </p>
            <h4 className="mt-1 font-display text-xl font-medium md:text-2xl">
              {t(`marketing.cases.${campaign.id}.title`)}
            </h4>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              {t("marketing.slides", { count: campaign.images.length })}
            </p>
          </div>
        </div>
        <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-luxury-gold">
          <span className="hidden sm:inline">{t("marketing.openCase")}</span>
          <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open/case:rotate-180" />
        </span>
      </summary>

      <div className="border-t border-[var(--color-border)] p-5 md:p-7">
        <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
          {t(`marketing.cases.${campaign.id}.description`)}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {metricKeys.map((key) => (
            <div
              key={key}
              className="border border-[var(--color-border)] bg-[var(--color-background)] p-4"
            >
              <p className="font-display text-xl font-semibold text-[var(--color-text)]">
                {t(`marketing.cases.${campaign.id}.${key}.value`)}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {t(`marketing.cases.${campaign.id}.${key}.label`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {campaign.images.map((image, index) => (
            <a
              key={image}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="group/image"
              aria-label={t("marketing.openSlide", {
                number: index + 1,
                title: t(`marketing.cases.${campaign.id}.title`),
              })}
            >
              <span className="relative block aspect-video overflow-hidden border border-[var(--color-border)] bg-[#1c191e]">
                <Image
                  src={image}
                  alt={t("marketing.slideAlt", {
                    number: index + 1,
                    title: t(`marketing.cases.${campaign.id}.title`),
                  })}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover/image:scale-[1.015]"
                />
              </span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {t("marketing.slideNumber", {
                  number: String(index + 1).padStart(2, "0"),
                })}
              </span>
            </a>
          ))}
        </div>
      </div>
    </details>
  );
}
