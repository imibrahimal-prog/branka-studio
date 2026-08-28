import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  slug: string;
  formServiceKey: "identity" | "content" | "commerce" | "performance" | "motion" | "other";
  titleAr: string;
  titleEn: string;
  image: string;
  altAr: string;
  altEn: string;
}

const services: ServiceItem[] = [
  {
    id: "identity",
    slug: "visual-identity",
    formServiceKey: "identity",
    titleAr: "الهوية البصرية",
    titleEn: "Brand Identity",
    image: "/images/services/identity.jpg",
    altAr: "تصميم الهوية البصرية — برانكا للإعلان والتسويق",
    altEn: "Brand Identity Design — Branka",
  },
  {
    id: "advertising",
    slug: "advertising-design",
    formServiceKey: "content",
    titleAr: "التصميم الإعلاني",
    titleEn: "Advertising Design",
    image: "/images/services/advertising.jpg",
    altAr: "التصميم الإعلاني والسوشيال ميديا — برانكا للإعلان والتسويق",
    altEn: "Advertising & Creative Design — Branka",
  },
  {
    id: "web",
    slug: "web-development",
    formServiceKey: "commerce",
    titleAr: "المواقع والمتاجر الإلكترونية",
    titleEn: "Websites & E-Commerce",
    image: "/images/services/web.jpg",
    altAr: "تصميم المواقع والمتاجر الإلكترونية — برانكا للإعلان والتسويق",
    altEn: "Websites & E-Commerce Store Design — Branka",
  },
  {
    id: "apps",
    slug: "web-development",
    formServiceKey: "commerce",
    titleAr: "التطبيقات والأنظمة",
    titleEn: "Apps & Systems",
    image: "/images/services/apps.svg",
    altAr: "تصميم واجهات التطبيقات والأنظمة — برانكا للإعلان والتسويق",
    altEn: "Mobile Apps & Digital Systems UI/UX — Branka",
  },
  {
    id: "motion",
    slug: "motion-graphics",
    formServiceKey: "motion",
    titleAr: "الفيديو والموشن",
    titleEn: "Video & Motion",
    image: "/images/services/motion.svg",
    altAr: "إنتاج الفيديو والموشن جرافيك — برانكا للإعلان والتسويق",
    altEn: "Video Production & Motion Graphics — Branka",
  },
  {
    id: "marketing",
    slug: "ad-campaigns",
    formServiceKey: "other",
    titleAr: "الحملات التسويقية",
    titleEn: "Marketing & Campaigns",
    image: "/images/services/marketing.svg",
    altAr: "إدارة الحملات الإعلانية والتسويق — برانكا للإعلان والتسويق",
    altEn: "Performance Marketing & Campaigns — Branka",
  },
  {
    id: "social",
    slug: "social-media",
    formServiceKey: "content",
    titleAr: "إدارة التواصل الاجتماعي",
    titleEn: "Social Media Management",
    image: "/images/services/social.svg",
    altAr: "إدارة حسابات التواصل الاجتماعي — برانكا للإعلان والتسويق",
    altEn: "Social Media Management & Content — Branka",
  },
  {
    id: "google",
    slug: "google-services",
    formServiceKey: "other",
    titleAr: "خدمات Google",
    titleEn: "Google Services",
    image: "/images/services/google.svg",
    altAr: "خدمات تحسين محركات البحث وإعلانات جوجل — برانكا للإعلان والتسويق",
    altEn: "Google Search, Maps & Ads — Branka",
  },
];

export function ServicesSection() {
  const t = useTranslations("services");

  // Split services: First 6 (2 rows of 3 on desktop), Last 2 (centered on desktop)
  const firstSixServices = services.slice(0, 6);
  const lastTwoServices = services.slice(6, 8);

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 -start-40 h-[30rem] w-[30rem] rounded-full bg-[#c7a46a]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -end-40 h-[30rem] w-[30rem] rounded-full bg-[#8c6b38]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="mb-14 md:mb-18 text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-1.5 text-xs font-semibold text-luxury-gold">
            <Sparkles className="h-3.5 w-3.5 text-luxury-gold" />
            <span>{t("eyebrow")}</span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-muted)]">
            {t("description")}
          </p>
        </div>

        {/* Structured Service Cards Grid */}
        <div className="space-y-6">
          {/* Top 6 Cards: 3 on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstSixServices.map((service) => {
              const title = t.has(`items.${service.id}.title`)
                ? t(`items.${service.id}.title`)
                : service.titleAr;
              const description = t.has(`items.${service.id}.description`)
                ? t(`items.${service.id}.description`)
                : "";

              return (
                <ServiceStructuredCard
                  key={service.id}
                  service={service}
                  title={title}
                  description={description}
                  requestLabel={t("requestCta")}
                />
              );
            })}
          </div>

          {/* Bottom 2 Cards: 2 on Desktop Centered, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-6">
            {lastTwoServices.map((service) => {
              const title = t.has(`items.${service.id}.title`)
                ? t(`items.${service.id}.title`)
                : service.titleAr;
              const description = t.has(`items.${service.id}.description`)
                ? t(`items.${service.id}.description`)
                : "";

              return (
                <div
                  key={service.id}
                  className="w-full lg:w-[calc((100%-24px)/3)]"
                >
                  <ServiceStructuredCard
                    service={service}
                    title={title}
                    description={description}
                    requestLabel={t("requestCta")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceStructuredCard({
  service,
  title,
  description,
  requestLabel,
}: {
  service: ServiceItem;
  title: string;
  description?: string;
  requestLabel: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`استعراض خدمة ${title}`}
      className="group flex flex-col w-full h-full text-start overflow-hidden rounded-[24px] border-2 border-[#241712] dark:border-[#422c20] bg-[#faf6f0] dark:bg-[#1a110c] shadow-[0_12px_35px_rgba(36,23,18,0.10)] transition-all duration-350 hover:border-luxury-gold hover:shadow-[0_20px_50px_rgba(199,164,106,0.22)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 cursor-pointer"
    >
      {/* 1. Top Section: Large, Full-Bleed 3D Illustration Area */}
      <div className="relative w-full h-60 sm:h-64 md:h-72 bg-[#faf6f0] dark:bg-[#1a110c] border-b-2 border-[#241712]/15 dark:border-white/10 overflow-hidden">
        <Image
          src={service.image}
          alt={service.altAr}
          fill
          unoptimized={service.image.endsWith(".svg")}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle Luxury Hover Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-350 group-hover:opacity-100 bg-gradient-to-t from-luxury-gold/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* 2. Bottom Section: Dedicated Typography & Information Panel */}
      <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 bg-[#faf6f0] dark:bg-[#1a110c]">
        <div>
          <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#241712] dark:text-[#fbf8f2] tracking-tight leading-snug group-hover:text-luxury-gold transition-colors duration-250">
            {title}
          </h3>
          {description && (
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#614d3f] dark:text-[#c4b3a4]">
              {description}
            </p>
          )}
        </div>

        {/* 3. Action Callout Footer */}
        <div className="mt-5 pt-3.5 border-t border-[#241712]/10 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-bold text-[#7a5828] dark:text-luxury-gold group-hover:text-luxury-gold transition-colors flex items-center gap-1.5">
            {requestLabel || "اطلب الخدمة"}
          </span>
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#241712]/5 dark:bg-white/5 text-[#241712] dark:text-[#fbf8f2] group-hover:bg-luxury-gold group-hover:text-[#180e08] transition-all duration-300 transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1">
            <ArrowLeft className="h-3.5 w-3.5 rtl:block ltr:rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  );
}
