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

export function Navigation({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
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
        className={cn(
          "hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] p-1.5 lg:flex",
          inverse && "border-white/10 bg-white/[0.045]",
          className,
        )}
        aria-label={t("label")}
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300",
              inverse
                ? "text-white/55 hover:bg-white/10 hover:text-white"
                : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]",
            )}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className={cn(
          "flex h-9 w-9 items-center justify-center lg:hidden",
          inverse && "text-white",
        )}
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
            className={cn(
              "fixed inset-0 z-40 backdrop-blur-md lg:hidden",
              inverse ? "bg-[#120b08]/97" : "bg-[var(--color-surface)]/95",
            )}
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
                    className={cn(
                      "font-display text-3xl font-semibold transition-colors hover:text-luxury-gold",
                      inverse ? "text-white" : "text-[var(--color-foreground)]",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <LocaleSwitcher
                inverse={inverse}
                className="mt-4 rounded-full border border-white/15 bg-white/5 px-3 py-2"
              />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
