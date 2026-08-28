import { setRequestLocale, getTranslations } from "next-intl/server";
import { ContactPageContent } from "./ContactPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contactTitle"),
    description: t("description"),
    alternates: {
      canonical: `https://braanka.com/${locale}/contact`,
      languages: {
        ar: "https://braanka.com/ar/contact",
        en: "https://braanka.com/en/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageContent />;
}
