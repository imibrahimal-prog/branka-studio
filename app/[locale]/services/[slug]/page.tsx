import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { servicesList, getServiceBySlug } from "@/lib/data/servicesData";
import { ServiceDetailPageContent } from "@/components/sections/ServiceDetailPageContent";

interface ServicePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const service of servicesList) {
      params.push({ locale, slug: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const isRtl = locale === "ar";
  const siteUrl = "https://www.braanka.com";
  const pageUrl = `${siteUrl}/${locale}/services/${slug}`;
  const brandName = isRtl
    ? "برانكا للإعلان والتسويق"
    : "Branka Advertising & Marketing";

  const title = isRtl ? service.metaTitleAr : service.metaTitleEn;
  const description = isRtl ? service.metaDescAr : service.metaDescEn;
  const keywords = isRtl ? service.keywordsAr : service.keywordsEn;

  return {
    metadataBase: new URL(siteUrl),
    title: `${title} | ${brandName}`,
    description,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        ar: `${siteUrl}/ar/services/${slug}`,
        en: `${siteUrl}/en/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      locale: isRtl ? "ar_SA" : "en_US",
      siteName: brandName,
      images: [
        {
          url: "/images/branka-vertical-logo-bg.png",
          width: 1200,
          height: 1440,
          alt: isRtl ? service.titleAr : service.titleEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/branka-vertical-logo-bg.png"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  setRequestLocale(locale);

  return <ServiceDetailPageContent service={service} locale={locale} />;
}
