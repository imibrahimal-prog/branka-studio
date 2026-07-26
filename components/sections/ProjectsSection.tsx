"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  Eye,
  Images,
  Megaphone,
  Monitor,
  Palette,
  PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

type GraphicsProject = {
  image: string;
  category: GraphicsWorkCategory;
  order: number;
};

const graphicsProjects: GraphicsProject[] = [
  {
    image: "/projects/graphics/identities/identity-5.jpg",
    category: "identities",
    order: 1,
  },
  {
    image: "/projects/graphics/identities/identity-6.jpg",
    category: "identities",
    order: 2,
  },
  {
    image: "/projects/graphics/social/social-9.jpg",
    category: "social",
    order: 1,
  },
  {
    image: "/projects/graphics/packaging/packaging-24.jpg",
    category: "packaging",
    order: 1,
  },
  {
    image: "/projects/graphics/infographics/infographic-20.jpg",
    category: "infographics",
    order: 1,
  },
  {
    image: "/projects/graphics/logos/logo-collection-01.jpg",
    category: "logos",
    order: 1,
  },
  {
    image: "/projects/graphics/identities/identity-7.jpg",
    category: "identities",
    order: 3,
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    image: `/projects/graphics/social/social-${index + 10}.jpg`,
    category: "social" as const,
    order: index + 2,
  })),
  ...Array.from({ length: 2 }, (_, index) => ({
    image: `/projects/graphics/infographics/infographic-${index + 21}.jpg`,
    category: "infographics" as const,
    order: index + 2,
  })),
  ...[26, 27, 28, 29, 30, 31].map((page, index) => ({
    image: `/projects/graphics/packaging/packaging-${page}.jpg`,
    category: "packaging" as const,
    order: index + 2,
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
  { id: "results", image: "/projects/marketing/overview/team-results.jpg" },
  { id: "method", image: "/projects/marketing/overview/campaign-method.jpg" },
] as const;

const webProjects = [
  { id: "restia", image: "/projects/web/restia-store.webp" },
  { id: "perfume", image: "/projects/web/luxury-perfume-store.webp" },
  { id: "manoom", image: "/projects/web/manoom-store.webp" },
] as const;

const motionProjects = [
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
    id: "alhilal",
    video: "/projects/motion/alhilal.mp4",
    poster: "/projects/motion/alhilal-poster.webp",
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

const metricKeys = ["metric1", "metric2", "metric3"] as const;

const sectionNav = [
  {
    id: "graphics-work",
    key: "graphics",
    count: graphicsProjects.length,
    icon: Palette,
  },
  {
    id: "marketing-work",
    key: "marketing",
    count: marketingCases.length,
    icon: Megaphone,
  },
  {
    id: "web-work",
    key: "web",
    count: webProjects.length,
    icon: Monitor,
  },
  {
    id: "motion-work",
    key: "motion",
    count: motionProjects.length,
    icon: PlayCircle,
  },
] as const;

export function ProjectsSection() {
  const t = useTranslations("projects");
  const [graphicsFilter, setGraphicsFilter] =
    useState<GraphicsCategoryKey>("all");
  const [showAllGraphics, setShowAllGraphics] = useState(false);
  const [showAllMotion, setShowAllMotion] = useState(false);

  const filteredGraphics =
    graphicsFilter === "all"
      ? graphicsProjects
      : graphicsProjects.filter(
          (project) => project.category === graphicsFilter,
        );
  const visibleGraphics = showAllGraphics
    ? filteredGraphics
    : filteredGraphics.slice(0, 6);
  const visibleMotion = showAllMotion
    ? motionProjects
    : motionProjects.slice(0, 3);

  function changeGraphicsFilter(filter: GraphicsCategoryKey) {
    setGraphicsFilter(filter);
    setShowAllGraphics(false);
  }

  return (
    <section id="projects" className="bg-[#2a1912] py-24 text-white md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading max-w-3xl text-balance text-white">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-white/55 lg:justify-self-end">
            {t("description")}
          </p>
        </div>

        <nav
          className="mt-12 grid gap-2 rounded-[2rem] border border-white/10 bg-black/25 p-3 shadow-[0_28px_80px_rgba(17,18,16,0.22)] backdrop-blur sm:grid-cols-2 xl:grid-cols-4"
          aria-label={t("tabsLabel")}
        >
          {sectionNav.map(({ id, key, count, icon: Icon }, index) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 text-luxury-white transition-all duration-300 hover:border-luxury-gold/45 hover:bg-white/[0.08]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-luxury-gold/25 bg-luxury-gold/10 text-luxury-gold transition-colors group-hover:bg-luxury-gold group-hover:text-luxury-black">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold md:text-xl">
                    {t(`tabs.${key}`)}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-2.5 py-1.5 text-xs text-white/45">
                <span>{count}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-10">
          <GraphicsPortfolio
            activeFilter={graphicsFilter}
            onFilterChange={changeGraphicsFilter}
            projects={visibleGraphics}
            totalCount={filteredGraphics.length}
            expanded={showAllGraphics}
            onToggle={() => setShowAllGraphics((value) => !value)}
          />
          <MarketingPortfolio />
          <WebPortfolio />
          <MotionPortfolio
            projects={visibleMotion}
            expanded={showAllMotion}
            onToggle={() => setShowAllMotion((value) => !value)}
          />
        </div>
      </div>
    </section>
  );
}

function PortfolioHeader({
  index,
  icon: Icon,
  eyebrow,
  title,
  description,
  count,
}: {
  index: string;
  icon: typeof Palette;
  eyebrow: string;
  title: string;
  description: string;
  count: string;
}) {
  return (
    <div className="grid gap-7 border-b border-[var(--color-border)] pb-8 lg:grid-cols-[1fr_1.35fr] lg:items-end">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/25 bg-luxury-black text-luxury-gold shadow-lg">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-luxury-gold">
            {index} · {eyebrow}
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="lg:justify-self-end">
        <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)]">
          {description}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-luxury-gold">
          {count}
        </p>
      </div>
    </div>
  );
}

function GraphicsPortfolio({
  activeFilter,
  onFilterChange,
  projects,
  totalCount,
  expanded,
  onToggle,
}: {
  activeFilter: GraphicsCategoryKey;
  onFilterChange: (filter: GraphicsCategoryKey) => void;
  projects: GraphicsProject[];
  totalCount: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="graphics-work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="scroll-mt-28 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-foreground)] md:p-10 lg:p-12"
    >
      <PortfolioHeader
        index="01"
        icon={Images}
        eyebrow={t("tabs.graphics")}
        title={t("graphics.title")}
        description={t("graphics.description", {
          count: graphicsProjects.length,
        })}
        count={t("graphics.visibleCount", { count: totalCount })}
      />

      <div
        className="mt-7 flex flex-wrap gap-2"
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
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                isActive
                  ? "border-luxury-black bg-luxury-black text-luxury-white dark:border-luxury-white dark:bg-luxury-white dark:text-luxury-black"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-luxury-gold hover:text-[var(--color-foreground)]",
              )}
            >
              {t(`graphics.filters.${key}`)}
            </button>
          );
        })}
      </div>

      <motion.div
        key={`${activeFilter}-${expanded}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => {
          const category = t(`graphics.filters.${project.category}`).toString();
          const title = t("graphics.cardTitle", {
            category,
            number: String(project.order).padStart(2, "0"),
          });
          return (
            <article
              key={project.image}
              className={cn(
                "group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
                index === 0 && activeFilter === "all" && "xl:col-span-2",
              )}
            >
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative block overflow-hidden bg-[#171715]",
                  index === 0 && activeFilter === "all"
                    ? "aspect-[16/8.8]"
                    : "aspect-[16/10]",
                )}
                aria-label={t("viewProject", { title })}
              >
                <Image
                  src={project.image}
                  alt={t("graphics.imageAlt", { title })}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-luxury-black/0 opacity-0 transition-all duration-300 group-hover:bg-luxury-black/60 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
                    <Eye className="h-4 w-4" />
                    {t("open")}
                  </span>
                </span>
              </a>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                    {category}
                  </p>
                  <h4 className="mt-1 font-display text-xl font-semibold">
                    {title}
                  </h4>
                </div>
                <span className="text-sm text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          );
        })}
      </motion.div>

      {totalCount > 6 && (
        <ViewMoreButton
          expanded={expanded}
          count={totalCount}
          onClick={onToggle}
        />
      )}
    </motion.section>
  );
}

function MarketingPortfolio() {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="marketing-work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="scroll-mt-28 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-foreground)] md:p-10 lg:p-12"
    >
      <PortfolioHeader
        index="02"
        icon={Megaphone}
        eyebrow={t("tabs.marketing")}
        title={t("marketing.attributionTitle")}
        description={t("marketing.attribution")}
        count={t("marketing.totalSlides", { count: 30 })}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {metricKeys.map((key) => (
          <div
            key={key}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
          >
            <p className="font-display text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
              {t(`marketing.overall.${key}.value`)}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {t(`marketing.overall.${key}.label`)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
        {t("marketing.resultsNote")}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {marketingOverview.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-video overflow-hidden bg-[#1c191e]"
            >
              <Image
                src={item.image}
                alt={t(`marketing.overviewCards.${item.id}.alt`)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </a>
            <h4 className="p-5 font-display text-xl font-semibold">
              {t(`marketing.overviewCards.${item.id}.title`)}
            </h4>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <p className="luxury-eyebrow mb-3">{t("marketing.casesEyebrow")}</p>
        <h4 className="font-display text-3xl font-semibold md:text-4xl">
          {t("marketing.casesTitle")}
        </h4>
      </div>

      <div className="mt-6 space-y-4">
        {marketingCases.map((campaign, index) => (
          <MarketingCaseStudy
            key={campaign.id}
            campaign={campaign}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </motion.section>
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
      className="group/case overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden md:p-7 [&::-webkit-details-marker]:hidden">
        <div className="flex min-w-0 items-center gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-background)] text-luxury-gold sm:flex">
            <BarChart3 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-luxury-gold">
              {t(`marketing.cases.${campaign.id}.sector`)}
            </p>
            <h5 className="mt-1 font-display text-xl font-semibold md:text-2xl">
              {t(`marketing.cases.${campaign.id}.title`)}
            </h5>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              {t("marketing.slides", { count: campaign.images.length })}
            </p>
          </div>
        </div>
        <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-luxury-gold">
          <span className="hidden sm:inline">{t("marketing.openCase")}</span>
          <ChevronDown className="h-5 w-5 transition-transform group-open/case:rotate-180" />
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
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
            >
              <p className="font-display text-xl font-bold">
                {t(`marketing.cases.${campaign.id}.${key}.value`)}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
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
              aria-label={t("marketing.openSlide", {
                number: index + 1,
                title: t(`marketing.cases.${campaign.id}.title`),
              })}
            >
              <span className="relative block aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#1c191e]">
                <Image
                  src={image}
                  alt={t("marketing.slideAlt", {
                    number: index + 1,
                    title: t(`marketing.cases.${campaign.id}.title`),
                  })}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 hover:scale-[1.015]"
                />
              </span>
              <span className="mt-2 block text-xs text-[var(--color-muted)]">
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

function WebPortfolio() {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="web-work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="scroll-mt-28 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-foreground)] md:p-10 lg:p-12"
    >
      <PortfolioHeader
        index="03"
        icon={Monitor}
        eyebrow={t("tabs.web")}
        title={t("web.title")}
        description={t("web.description")}
        count={t("web.count", { count: webProjects.length })}
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {webProjects.map((project, index) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[4/5] overflow-hidden bg-[#e9e5df]"
              aria-label={t("viewProject", {
                title: t(`web.projects.${project.id}.title`),
              })}
            >
              <Image
                src={project.image}
                alt={t(`web.projects.${project.id}.alt`)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </a>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                  {t("web.category")}
                </p>
                <span className="text-xs text-[var(--color-muted)]">
                  0{index + 1}
                </span>
              </div>
              <h4 className="mt-2 font-display text-2xl font-semibold">
                {t(`web.projects.${project.id}.title`)}
              </h4>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {t(`web.projects.${project.id}.description`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function MotionPortfolio({
  projects,
  expanded,
  onToggle,
}: {
  projects: readonly (typeof motionProjects)[number][];
  expanded: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="motion-work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="scroll-mt-28 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-foreground)] md:p-10 lg:p-12"
    >
      <PortfolioHeader
        index="04"
        icon={PlayCircle}
        eyebrow={t("tabs.motion")}
        title={t("motion.title")}
        description={t("motion.description")}
        count={t("motion.count", { count: motionProjects.length })}
      />
      <p className="mt-6 border-s-2 border-luxury-gold/50 ps-4 text-xs leading-6 text-[var(--color-muted)]">
        {t("motion.disclaimer")}
      </p>

      <motion.div
        key={expanded ? "all-motion" : "featured-motion"}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <video
              controls
              playsInline
              preload="none"
              poster={project.poster}
              className="aspect-video w-full bg-black object-cover"
              aria-label={t(`motion.projects.${project.id}.title`)}
            >
              <source src={project.video} type="video/mp4" />
              {t("motion.unsupported")}
            </video>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                  {t("motion.category")}
                </p>
                <span className="text-xs text-[var(--color-muted)]">
                  0{index + 1}
                </span>
              </div>
              <h4 className="mt-2 font-display text-xl font-semibold">
                {t(`motion.projects.${project.id}.title`)}
              </h4>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {t(`motion.projects.${project.id}.description`)}
              </p>
            </div>
          </article>
        ))}
      </motion.div>

      <ViewMoreButton
        expanded={expanded}
        count={motionProjects.length}
        onClick={onToggle}
      />
    </motion.section>
  );
}

function ViewMoreButton({
  expanded,
  count,
  onClick,
}: {
  expanded: boolean;
  count: number;
  onClick: () => void;
}) {
  const t = useTranslations("projects");
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-luxury-gold hover:text-luxury-gold"
      >
        {expanded ? t("showLess") : t("viewAll", { count })}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            expanded && "rotate-180",
          )}
        />
      </button>
    </div>
  );
}
