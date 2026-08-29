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
  { href: "/#services", key: "services" as const },
  { href: "/#why-us", key: "whyUs" as const },
  { href: "/work", key: "projects" as const },
  { href: "/#methodology", key: "methodology" as const },
  { href: "/#results", key: "results" as const },
  { href: "/contact", key: "contact" as const },
];
const specialtyKeys = [
  "identity",
  "branding",
  "events",
  "environmental",
  "presentations",
  "motion",
  "web",
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/i_dd_m";
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/i_dd_m";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@braanka.com";
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966552409575";
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
    <footer className="border-t border-white/10 bg-[#241719] text-[#f8f4ec]">
      <div className="luxury-container py-8 md:py-11">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.75fr_0.75fr] lg:gap-8 items-start">
          <div className="space-y-3">
            <Link
              href="/"
              className="!flex !w-full !justify-center lg:!justify-start"
            >
              <FooterBrandLogo className="!mx-auto lg:!mx-0" />
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              {t("navigation")}
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#e8ded3] transition-colors hover:text-luxury-gold font-medium"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              {t("specialtiesTitle")}
            </p>
            <ul className="space-y-2">
              {specialtyKeys.map((key) => (
                <li
                  key={key}
                  className="text-xs sm:text-sm leading-5 text-[#dcd0c2] font-medium"
                >
                  {t(`specialties.${key}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              {t("social")}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#342426] text-[#f8f4ec] transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/10"
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

        <div className="my-6 md:my-7 border-t border-white/10" />

        <div className="relative flex items-center justify-center text-xs sm:text-sm font-semibold tracking-wider text-[#f8f4ec]">
          <p className="text-center text-[#f8f4ec]">
            &copy; {year} Branka. {t("rights")}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="branka-back-to-top absolute end-0 text-[#f8f4ec] hover:text-luxury-gold hover:border-luxury-gold"
            aria-label={t("backToTop")}
            title={t("backToTop")}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
