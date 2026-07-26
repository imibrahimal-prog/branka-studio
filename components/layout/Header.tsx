"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header() {
  const t = useTranslations("header");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="branka-site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#120b08]/88 text-white backdrop-blur-xl"
    >
      <div className="luxury-container flex h-[72px] items-center justify-between md:h-[84px]">
        <Link href="/" className="group" aria-label={t("homeLabel")}>
          <BrandLogo
            compact
            inverse
            className="transition-opacity group-hover:opacity-80"
          />
        </Link>

        <Navigation inverse />

        <div className="flex items-center gap-3 md:gap-4">
          <LocaleSwitcher inverse className="hidden sm:flex" />
          <ThemeToggle className="border-white/10 bg-white/5 text-white" />
        </div>
      </div>
    </motion.header>
  );
}
