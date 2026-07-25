"use client";

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
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur-xl"
    >
      <div className="luxury-container flex h-[72px] items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex flex-col gap-0.5"
          aria-label={t("homeLabel")}
        >
          <span className="font-display text-xl font-semibold tracking-[0.15em] text-[var(--color-foreground)] transition-colors group-hover:text-luxury-gold md:text-2xl">
            BRANKA
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-gold">
            {t("studio")}
          </span>
        </Link>

        <Navigation />

        <div className="flex items-center gap-3 md:gap-4">
          <LocaleSwitcher className="hidden sm:flex" />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
