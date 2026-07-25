"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/#about", key: "about" as const },
  { href: "/#services", key: "services" as const },
  { href: "/#projects", key: "projects" as const },
  { href: "/#contact", key: "contact" as const },
];

export function Navigation({ className }: { className?: string }) {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn("hidden items-center gap-8 lg:flex", className)}
        aria-label={t("label")}
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group relative text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-foreground)] transition-colors duration-300 hover:text-luxury-gold"
          >
            {t(item.key)}
            <span className="absolute -bottom-1 start-0 h-px w-0 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-black/95 backdrop-blur-md lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              aria-label={t("label")}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-light uppercase tracking-widest text-luxury-white transition-colors hover:text-luxury-gold"
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <LocaleSwitcher className="mt-4 rounded-full border border-white/15 bg-white/5 px-3 py-2" />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
