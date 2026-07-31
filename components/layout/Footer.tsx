"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { FooterBrandLogo } from "@/components/ui/FooterBrandLogo";

const footerLinks = [
  { href: "/#about", key: "about" as const },
  { href: "/#services", key: "services" as const },
  { href: "/#projects", key: "projects" as const },
  { href: "/#contact", key: "contact" as const },
];
const specialtyKeys = [
  "identity",
  "branding",
  "events",
  "environmental",
  "presentations",
  "marketing",
  "motion",
  "web",
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/i_dd_m";
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/i_dd_m";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/ibrahim-ds";
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@braanka.com";
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966502757844";
  const socialLinks = [
    instagramUrl
      ? {
          href: instagramUrl,
          label: t("links.instagram"),
          icon: Instagram,
        }
      : null,
    xUrl
      ? {
          href: xUrl,
          label: t("links.x"),
          icon: Twitter,
        }
      : null,
    linkedinUrl
      ? {
          href: linkedinUrl,
          label: t("links.linkedin"),
          icon: Linkedin,
        }
      : null,
    whatsappUrl
      ? {
          href: whatsappUrl,
          label: t("links.whatsapp"),
          icon: MessageCircle,
        }
      : null,
    contactEmail
      ? {
          href: `mailto:${contactEmail}`,
          label: t("links.email"),
          icon: Mail,
        }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof Instagram;
  }[];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="luxury-container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.75fr_0.75fr] lg:gap-10">
          <div className="space-y-5">
            <Link href="/" className="inline-flex">
              <FooterBrandLogo />
            </Link>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              {t("tagline")}
            </p>
            <div className="flex max-w-2xl flex-wrap gap-2.5">
              {(["design", "marketing", "results"] as const).map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-xs font-semibold text-[var(--color-muted)]"
                >
                  {t(`achievements.${key}`)}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="luxury-eyebrow">{t("navigation")}</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-luxury-gold"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="luxury-eyebrow">{t("specialtiesTitle")}</p>
            <ul className="space-y-2.5">
              {specialtyKeys.map((key) => (
                <li
                  key={key}
                  className="text-sm leading-6 text-[var(--color-muted)]"
                >
                  {t(`specialties.${key}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="luxury-eyebrow">{t("social")}</p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold hover:text-luxury-gold"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
            <LocaleSwitcher className="sm:hidden" />
          </div>
        </div>

        <div className="luxury-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-widest text-[var(--color-muted)] sm:flex-row">
          <p>
            &copy; {year} Branka. {t("rights")}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="branka-back-to-top"
            aria-label={t("backToTop")}
            title={t("backToTop")}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
