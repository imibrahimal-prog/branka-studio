import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBrankaSection } from "@/components/sections/WhyBrankaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServiceShowcaseSection } from "@/components/sections/ServiceShowcaseSection";
import { AdvantagesBannerSection } from "@/components/sections/AdvantagesBannerSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ResultsSection } from "@/components/sections/ResultsSection";

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (mod) => mod.ContactSection,
    ),
  { ssr: true },
);

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* 2. البنر الرئيسي Hero مع شعار رؤية 2030 */}
      <HeroSection />

      {/* 3. نبذة مختصرة عن برانكا (لماذا برانكا) */}
      <WhyBrankaSection />

      {/* 4. شبكة بطاقات وأيقونات الخدمات */}
      <ServicesSection />

      {/* 5. بنر مزايا العمل مع برانكا (سرعة، جودة، دعم) مباشرة تحت أيقونات الخدمات */}
      <AdvantagesBannerSection />

      {/* 6. الخدمات المتكاملة بالتفصيل مع الصور السداسية */}
      <ServiceShowcaseSection />

      {/* 7. رحلة العمل (المنهجية من 5 خطوات) */}
      <MethodologySection />

      {/* 8. النتائج والأرقام الموثقة وقيمنا */}
      <ResultsSection />

      {/* 9. التواصل */}
      <ContactSection />
    </>
  );
}
