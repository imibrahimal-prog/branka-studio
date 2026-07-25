"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("locale");

  const locales: Locale[] = ["en", "ar"];

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t("switch")}
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "px-2 py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
            locale === loc
              ? "text-luxury-gold"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
          )}
          aria-current={locale === loc ? "true" : undefined}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
