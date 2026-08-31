import { setRequestLocale, getTranslations } from "next-intl/server";
import { AffiliatePageContent } from "./AffiliatePageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const isRtl = locale === "ar";
  const siteUrl = "https://www.braanka.com";
  const title = t("affiliateTitle");
  const description = t("affiliateDescription");

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/affiliate`,
      languages: {
        ar: `${siteUrl}/ar/affiliate`,
        en: `${siteUrl}/en/affiliate`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}/${locale}/affiliate`,
      locale: isRtl ? "ar_SA" : "en_US",
      siteName: isRtl ? "برانكا للإعلان والتسويق" : "Branka Advertising & Marketing",
      images: [
        {
          url: "/images/branka-vertical-logo-bg.png",
          width: 1200,
          height: 1440,
          alt: title,
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

export default async function AffiliatePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AffiliatePageContent />;
}
