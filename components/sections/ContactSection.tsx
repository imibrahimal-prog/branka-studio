"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  contact: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "opening" | "copied" | "copyError";

export function ContactSection() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "im.ibrahim.al@gmail.com";
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/i_dd_m";
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/i_dd_m";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/ibrahim-ds";
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966502757844";

  const contactFormSchema = z.object({
    name: z
      .string()
      .min(2, t("form.errors.nameMin"))
      .max(100, t("form.errors.nameMax")),
    contact: z
      .string()
      .min(5, t("form.errors.contactMin"))
      .max(160, t("form.errors.contactMax")),
    service: z.string().min(1, t("form.errors.serviceRequired")),
    message: z
      .string()
      .min(10, t("form.errors.messageMin"))
      .max(2000, t("form.errors.messageMax")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    const body = [
      `${t("form.summary.name")}: ${data.name}`,
      `${t("form.summary.contact")}: ${data.contact}`,
      `${t("form.summary.service")}: ${data.service}`,
      "",
      data.message,
    ].join("\n");

    if (contactEmail) {
      setStatus("opening");
      const subject = encodeURIComponent(
        t("form.emailSubject", { name: data.name }),
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
      reset();
      window.setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      await navigator.clipboard.writeText(body);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("copyError");
    }
  }

  const socialLinks = [
    instagramUrl
      ? { href: instagramUrl, label: t("channels.instagram"), icon: Instagram }
      : null,
    xUrl ? { href: xUrl, label: t("channels.x"), icon: Twitter } : null,
    linkedinUrl
      ? { href: linkedinUrl, label: t("channels.linkedin"), icon: Linkedin }
      : null,
    whatsappUrl
      ? {
          href: whatsappUrl,
          label: t("channels.whatsapp"),
          icon: MessageCircle,
        }
      : null,
    contactEmail
      ? {
          href: `mailto:${contactEmail}`,
          label: t("channels.email"),
          icon: Mail,
        }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof Mail;
  }[];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -end-44 -top-44 h-[30rem] w-[30rem] rounded-full bg-luxury-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="luxury-container relative">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="luxury-heading text-balance">{t("title")}</h2>
            <p className="mt-6 max-w-lg leading-8 text-[var(--color-muted)]">
              {t("description")}
            </p>

            <div className="mt-10 space-y-4">
              {["reply", "scope", "language"].map((key) => (
                <div key={key} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-luxury-gold/50 text-luxury-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-[var(--color-muted)]">
                    {t(`promises.${key}`)}
                  </span>
                </div>
              ))}
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 border border-[var(--color-border)] px-4 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:border-luxury-gold hover:text-luxury-gold"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-2xl shadow-black/5 md:p-9 dark:shadow-black/20"
            noValidate
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-widest"
                >
                  {t("form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t("form.namePlaceholder")}
                  className={cn(
                    "luxury-input",
                    errors.name && "border-red-500",
                  )}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="mb-2 block text-xs uppercase tracking-widest"
                >
                  {t("form.contact")}
                </label>
                <input
                  id="contact"
                  type="text"
                  autoComplete="email"
                  placeholder={t("form.contactPlaceholder")}
                  className={cn(
                    "luxury-input",
                    errors.contact && "border-red-500",
                  )}
                  {...register("contact")}
                />
                {errors.contact && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-7">
              <label
                htmlFor="service"
                className="mb-2 block text-xs uppercase tracking-widest"
              >
                {t("form.service")}
              </label>
              <select
                id="service"
                className={cn(
                  "luxury-input",
                  errors.service && "border-red-500",
                )}
                {...register("service")}
              >
                <option value="">{t("form.servicePlaceholder")}</option>
                <option value={t("form.services.identity")}>
                  {t("form.services.identity")}
                </option>
                <option value={t("form.services.content")}>
                  {t("form.services.content")}
                </option>
                <option value={t("form.services.performance")}>
                  {t("form.services.performance")}
                </option>
                <option value={t("form.services.commerce")}>
                  {t("form.services.commerce")}
                </option>
                <option value={t("form.services.other")}>
                  {t("form.services.other")}
                </option>
              </select>
              {errors.service && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="mt-7">
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-widest"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t("form.messagePlaceholder")}
                className={cn(
                  "luxury-input resize-none",
                  errors.message && "border-red-500",
                )}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {contactEmail ? t("form.submit") : t("form.copy")}
                {contactEmail ? (
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>

              {status !== "idle" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className={cn(
                    "text-sm",
                    status === "copyError"
                      ? "text-red-500"
                      : "text-luxury-gold",
                  )}
                >
                  {t(`form.status.${status}`)}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
