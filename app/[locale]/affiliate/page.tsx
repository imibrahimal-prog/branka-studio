import { setRequestLocale, getTranslations } from "next-intl/server";
import { AffiliatePageContent } from "./AffiliatePageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("affiliateTitle"),
    description: t("affiliateDescription"),
    alternates: {
      canonical: `https://braanka.com/${locale}/affiliate`,
      languages: {
        ar: "https://braanka.com/ar/affiliate",
        en: "https://braanka.com/en/affiliate",
      },
    },
  };
}

export default async function AffiliatePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AffiliatePageContent />;
}
