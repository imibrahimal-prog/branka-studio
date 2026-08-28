import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Code2, Palette, TrendingUp } from "lucide-react";

interface ShowcaseRow {
  key: "tech" | "design" | "marketing";
  slug: string;
  formServiceKey: "commerce" | "identity" | "other";
  icon: React.ElementType;
  image: string;
  altAr: string;
  altEn: string;
  reverse: boolean;
}

const showcaseRows: ShowcaseRow[] = [
  {
    key: "tech",
    slug: "web-development",
    formServiceKey: "commerce",
    icon: Code2,
    image: "/images/services/apps-3d.jpg",
    altAr: "خدمات برمجية وتطوير رقمي متكامل — برانكا",
    altEn: "Integrated Web & Software Solutions — Branka",
    reverse: false,
  },
  {
    key: "design",
    slug: "visual-identity",
    formServiceKey: "identity",
    icon: Palette,
    image: "/images/services/advertising-3d.jpg",
    altAr: "خدمات تصميم وهوية بصرية متكاملة — برانكا",
    altEn: "Brand Identity & Design Solutions — Branka",
    reverse: true,
  },
  {
    key: "marketing",
    slug: "digital-marketing",
    formServiceKey: "other",
    icon: TrendingUp,
    image: "/images/services/marketing-3d.jpg",
    altAr: "خدمات تسويقية وإدارة تواصل متكاملة — برانكا",
    altEn: "Integrated Marketing & Growth Solutions — Branka",
    reverse: false,
  },
];

export function ServiceShowcaseSection() {
  const t = useTranslations("serviceShowcase");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#fdfbf7] dark:bg-[#241712] transition-colors">
      {/* Background Decorative Ambient Gradients */}
      <div
        className="pointer-events-none absolute top-1/4 -start-48 h-96 w-96 rounded-full bg-[#c7a46a]/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -end-48 h-96 w-96 rounded-full bg-[#8c6b38]/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-1.5 text-xs font-semibold text-luxury-gold">
            <Sparkles className="h-3.5 w-3.5 text-luxury-gold" />
            <span>{t("eyebrow")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241712] dark:text-[#fbf8f2] tracking-tight leading-tight">
            {t("title")}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#614d3f] dark:text-[#c4b3a4]">
            {t("description")}
          </p>
        </div>

        {/* Alternating Showcase Rows */}
        <div className="space-y-20 md:space-y-28">
          {showcaseRows.map((row) => {
            const Icon = row.icon;
            const badge = t(`rows.${row.key}.badge`);
            const title = t(`rows.${row.key}.title`);
            const description = t(`rows.${row.key}.description`);
            const features = t.raw(`rows.${row.key}.features`) as string[];

            return (
              <div
                key={row.key}
                className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${
                  row.reverse
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }`}
              >
                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-start">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#241712]/15 dark:border-white/15 bg-[#faf6f0] dark:bg-[#1a110c] px-3.5 py-1.5 text-xs font-bold text-[#8c6530] dark:text-luxury-gold mb-4 shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-luxury-gold" />
                    <span>{badge}</span>
                  </div>

                  {/* Row Title */}
                  <h3 className="font-display text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#241712] dark:text-[#fbf8f2] leading-snug tracking-tight">
                    {title}
                  </h3>

                  {/* Row Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5e493c] dark:text-[#d0c0b2]">
                    {description}
                  </p>

                  {/* 2-Column Features Checkmarks */}
                  <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                    {features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#faf6f0] dark:bg-[#1a110c]/80 border border-[#241712]/10 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a07a3c] dark:text-luxury-gold" />
                        <span className="text-xs sm:text-sm font-semibold text-[#241712] dark:text-[#fbf8f2]">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link
                      href={`/services/${row.slug}`}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#241712] dark:bg-luxury-gold px-7 py-3.5 text-sm font-bold text-white dark:text-[#180e08] shadow-[0_8px_25px_rgba(36,23,18,0.25)] hover:bg-[#3d271f] dark:hover:bg-[#dfba7d] hover:shadow-[0_12px_32px_rgba(199,164,106,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold cursor-pointer"
                    >
                      <span>{t("cta")}</span>
                      {isRtl ? (
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </Link>
                  </div>
                </div>

                {/* Image Showcase Column */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="service-visual">
                    <Image
                      src={row.image}
                      alt={isRtl ? row.altAr : row.altEn}
                      fill
                      sizes="(max-width: 768px) 340px, 470px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
