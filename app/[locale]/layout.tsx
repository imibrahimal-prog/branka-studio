import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "../globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const isRtl = locale === "ar";
  const siteUrl = "https://www.braanka.com";
  const brandName = isRtl
    ? "برانكا للإعلان والتسويق"
    : "Branka Advertising & Marketing";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s — ${brandName}`,
    },
    description: t("description"),
    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: `${t("title")} | ${brandName}`,
      description: t("description"),
      type: "website",
      url: `${siteUrl}/${locale}`,
      locale: isRtl ? "ar_SA" : "en_US",
      siteName: brandName,
      images: [
        {
          url: "/images/branka-vertical-logo-bg.png",
          width: 1200,
          height: 1440,
          alt: brandName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | ${brandName}`,
      description: t("description"),
      images: ["/images/branka-vertical-logo-bg.png"],
    },
    icons: {
      icon: "/icons/branka-favicon-v15.png",
      shortcut: "/icons/branka-favicon-v15.png",
      apple: "/icons/branka-favicon-v15.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === "ar";

  const brandName = isRtl
    ? "برانكا للإعلان والتسويق"
    : "Branka Advertising & Marketing";

  // Structured Data (Organization / ProfessionalService & WebSite)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://www.braanka.com/#organization",
    name: brandName,
    alternateName: isRtl ? "برانكا" : "Branka",
    url: `https://www.braanka.com/${locale}`,
    logo: "https://www.braanka.com/images/branka-vertical-logo.png",
    image: "https://www.braanka.com/images/branka-vertical-logo-bg.png",
    email: "info@braanka.com",
    telephone: "+966552409575",
    description: isRtl
      ? "برانكا للإعلان والتسويق: وكالة متخصصة في الرياض والمملكة العربية السعودية لتقديم خدمات الهوية البصرية، التسويق الرقمي، إدارة الحملات الإعلانية، وتطوير المواقع والمتاجر الإلكترونية."
      : "Branka Advertising & Marketing: Leading creative and digital marketing agency in Riyadh and Saudi Arabia specializing in visual identity, performance marketing, paid ads management, and web development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    ],
    sameAs: [
      "https://www.instagram.com/branka_ksa",
      "https://x.com/branka_ksa",
      "https://www.linkedin.com/company/braankacom",
      "https://www.tiktok.com/@braankacom",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isRtl ? "خدمات برانكا للإعلان والتسويق" : "Branka Advertising & Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "تصميم الهوية البصرية والبراندينج" : "Visual Identity & Branding",
            url: `https://www.braanka.com/${locale}/services/visual-identity`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "التصميم الإعلاني والجرافيكي" : "Advertising & Graphic Design",
            url: `https://www.braanka.com/${locale}/services/advertising-design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "التسويق الرقمي المتكامل" : "Integrated Digital Marketing",
            url: `https://www.braanka.com/${locale}/services/digital-marketing`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "إدارة حسابات التواصل الاجتماعي" : "Social Media Management",
            url: `https://www.braanka.com/${locale}/services/social-media`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "إدارة الحملات الإعلانية الممولة" : "Paid Ads & Media Buying",
            url: `https://www.braanka.com/${locale}/services/ad-campaigns`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "تصميم وتطوير المواقع والمتاجر" : "Web & E-Commerce Development",
            url: `https://www.braanka.com/${locale}/services/web-development`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "الفيديو والموشن جرافيك الإعلاني" : "Motion Graphics & Video Production",
            url: `https://www.braanka.com/${locale}/services/motion-graphics`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isRtl ? "خدمات Google وتهيئة محركات البحث" : "Google Services & SEO",
            url: `https://www.braanka.com/${locale}/services/google-services`,
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.braanka.com/#website",
    name: brandName,
    url: "https://www.braanka.com",
    inLanguage: ["ar", "en"],
    publisher: {
      "@id": "https://www.braanka.com/#organization",
    },
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${ibmPlexArabic.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <AppShell>{children}</AppShell>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
