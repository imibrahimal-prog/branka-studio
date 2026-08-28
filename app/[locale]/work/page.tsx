import { setRequestLocale, getTranslations } from "next-intl/server";
import { WorkPageContent } from "./WorkPageContent";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("workTitle"),
    description: t("workDescription"),
    alternates: {
      canonical: `https://braanka.com/${locale}/work`,
      languages: {
        ar: "https://braanka.com/ar/work",
        en: "https://braanka.com/en/work",
      },
    },
  };
}

export default async function WorkPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  setRequestLocale(locale);

  const initialCategory = typeof resolvedSearchParams?.category === "string"
    ? resolvedSearchParams.category
    : "all";

  return <WorkPageContent initialCategory={initialCategory} />;
}
