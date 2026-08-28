"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ServiceItemData, servicesList } from "@/lib/data/servicesData";
import { PhoneCall } from "lucide-react";

interface Props {
  service: ServiceItemData;
  locale: string;
}

export function ServiceDetailPageContent({ service, locale }: Props) {
  const isRtl = locale === "ar";

  // Other services (excluding current)
  const otherServices = servicesList
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // Structured Data (JSON-LD)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isRtl ? "الرئيسية" : "Home",
        item: `https://www.braanka.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isRtl ? "الخدمات" : "Services",
        item: `https://www.braanka.com/${locale}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isRtl ? service.titleAr : service.titleEn,
        item: `https://www.braanka.com/${locale}/services/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isRtl ? service.titleAr : service.titleEn,
    serviceType: isRtl ? service.titleAr : service.titleEn,
    description: isRtl ? service.fullDescAr : service.fullDescEn,
    image: `https://www.braanka.com${service.image}`,
    provider: {
      "@type": "ProfessionalService",
      name: isRtl ? "برانكا للإعلان والتسويق" : "Branka Advertising & Marketing",
      url: "https://www.braanka.com",
      telephone: "+966502757844",
      email: "info@braanka.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };

  return (
    <article className="min-h-screen bg-[#fcf9f4] text-[#241712] pt-24 md:pt-32 pb-24 selection:bg-luxury-gold selection:text-black">
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 1. Hero Showcase Section (Warm Beige Luxury Identity Theme) */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 pb-16">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute top-0 start-1/2 -translate-x-1/2 h-[28rem] w-[50rem] rounded-full bg-[#c7a46a]/15 blur-[140px]" />

        <div className="luxury-container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Top Pill / Breadcrumb Button */}
          <div className="inline-flex items-center gap-2 rounded-full border border-luxury-gold/40 bg-[#f5ede2] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#8f522e] mb-6 shadow-sm">
            <Link
              href="/#services"
              className="flex items-center gap-1.5 hover:text-[#241712] transition-colors"
            >
              <span className="rtl:rotate-0 ltr:rotate-180">←</span>
              <span>{isRtl ? "كل الخدمات" : "All Services"}</span>
            </Link>
            <span className="text-[#8f522e]/40">|</span>
            <span>{isRtl ? "خدمة من الرياض" : "Service from Riyadh"}</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#241712] tracking-tight leading-[1.3] mb-6 text-balance">
            {isRtl ? service.titleAr : service.titleEn}
          </h1>

          {/* Description Paragraph */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#5c4638] font-normal leading-[1.8] mb-8 text-balance">
            {isRtl ? service.shortDescAr : service.shortDescEn}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:mb-16">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#b08848] px-8 py-3.5 text-sm font-bold text-[#140b08] shadow-[0_10px_30px_rgba(199,164,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(199,164,106,0.5)] cursor-pointer"
            >
              <span>{isRtl ? "اطلب الخدمة" : "Request Service"}</span>
              <span className="rtl:rotate-180">→</span>
            </Link>

            <a
              href="https://wa.me/966502757844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-[#241712]/15 bg-[#f5ede2] px-7 py-3.5 text-sm font-semibold text-[#241712] shadow-sm transition-all duration-300 hover:border-luxury-gold hover:bg-[#ebe0d1] hover:text-[#8f522e] cursor-pointer"
            >
              <PhoneCall className="h-4 w-4 text-[#8f522e]" />
              <span>{isRtl ? "محادثة واتساب مباشرة" : "Direct WhatsApp"}</span>
            </a>
          </div>

          {/* Featured Large 3D Visual Frame in Brand Beige & Gold */}
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] border-2 border-luxury-gold/50 bg-gradient-to-b from-[#f5ede2] via-[#ede3d4] to-[#e4d6c3] p-3 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(43,24,16,0.14)] group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2.25rem] bg-[#f5ede2] shadow-inner">
              <Image
                src={service.image}
                alt={isRtl ? service.titleAr : service.titleEn}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Other Services Section ("خدمات أخرى") in Beige Theme */}
      <section className="py-16 sm:py-24 bg-[#f5ede2]/60 border-t border-[#241712]/10">
        <div className="luxury-container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#241712]">
              {isRtl ? "خدمات أخرى" : "Other Services"}
            </h2>
            <Link
              href="/#services"
              className="text-xs sm:text-sm font-bold text-[#8f522e] hover:text-[#241712] hover:underline flex items-center gap-1 transition-colors"
            >
              <span>{isRtl ? "كل الخدمات" : "All Services"}</span>
              <span className="rtl:rotate-180">→</span>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#241712]/10 bg-white p-6 shadow-[0_8px_25px_rgba(43,24,16,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold hover:shadow-[0_18px_45px_rgba(199,164,106,0.25)]"
              >
                <div>
                  {/* Small preview thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f5ede2] mb-4 border border-[#241712]/10">
                    <Image
                      src={other.image}
                      alt={isRtl ? other.titleAr : other.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#241712] group-hover:text-[#8f522e] transition-colors mb-2">
                    {isRtl ? other.titleAr : other.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665143] line-clamp-3 leading-relaxed mb-4">
                    {isRtl ? other.shortDescAr : other.shortDescEn}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#241712]/10 flex items-center justify-between text-xs font-bold text-[#8f522e]">
                  <span>{isRtl ? "التفاصيل" : "View Details"}</span>
                  <span className="transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform">
                    {isRtl ? "←" : "→"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom Conversion CTA in Brand Luxury Theme */}
      <section className="luxury-container max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16">
        <div className="rounded-[2.5rem] border-2 border-luxury-gold/50 bg-gradient-to-r from-[#241712] via-[#1a0f0a] to-[#241712] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-96 rounded-full bg-luxury-gold/15 blur-[100px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              {isRtl
                ? `جاهز تبدأ مع ${service.titleAr}؟`
                : `Ready to start with ${service.titleEn}?`}
            </h2>
            <p className="text-sm sm:text-base text-[#ede4d8] leading-relaxed mb-8">
              {isRtl
                ? "احجز موعداً لمناقشة مشروعك ونبدأ في تنفيذ خطة نمو واضحة لعلامتك التجارية."
                : "Schedule a discussion with our team to start executing a tailored growth plan for your business."}
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#b08848] px-9 py-3.5 text-sm font-bold text-[#140b08] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
            >
              <span>{isRtl ? "اطلب خدمة" : "Request Service"}</span>
              <span className="rtl:rotate-180">→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
