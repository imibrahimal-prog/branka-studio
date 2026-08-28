"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const t = useTranslations("header");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="branka-site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#2b2122]/95 text-white backdrop-blur-xl"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 flex h-[72px] items-center justify-between md:h-[84px]">
        <Link
          href="/"
          className="group relative block h-12 w-[178px] shrink-0 overflow-hidden md:h-16 md:w-[265px]"
          aria-label={t("homeLabel")}
        >
          <Image
            src="/images/branka-header-logo.png"
            alt="Branka | Advertising and Marketing"
            width={1278}
            height={1536}
            priority
            unoptimized
            sizes="(max-width: 768px) 220px, 320px"
            className="absolute left-1/2 top-1/2 h-auto w-[220px] max-w-none -translate-x-1/2 -translate-y-[51%] transition-opacity group-hover:opacity-85 md:w-[320px]"
          />
        </Link>

        <Navigation inverse />

        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <LocaleSwitcher inverse className="hidden sm:flex" />
          <ThemeToggle className="border-white/10 bg-white/5 text-white" />
          <Link
            href="/contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4b88a] to-[#c7a46a] px-5 py-2.5 text-xs font-bold text-[#1a0f0a] shadow-[0_4px_20px_rgba(199,164,106,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(199,164,106,0.45)] sm:inline-flex"
          >
            <span>{t("requestService")}</span>
            <span className="text-xs rtl:rotate-180">→</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
