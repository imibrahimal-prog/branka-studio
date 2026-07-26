import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { VisualStorySection } from "@/components/sections/VisualStorySection";
import { LogoShowcaseSection } from "@/components/sections/LogoShowcaseSection";
import { SectorsSection } from "@/components/sections/SectorsSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <VisualStorySection />
      <LogoShowcaseSection />
      <SectorsSection />
      <ContactSection />
    </>
  );
}
