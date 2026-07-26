"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Check,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquareText,
  Twitter,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  contact: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "opening";

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

  function buildMessage(data: ContactFormValues) {
    return [
      t("form.whatsappIntro"),
      "",
      `${t("form.summary.name")}: ${data.name}`,
      `${t("form.summary.contact")}: ${data.contact}`,
      `${t("form.summary.service")}: ${data.service}`,
      "",
      `${t("form.summary.message")}:`,
      data.message,
    ].join("\n");
  }

  function onSubmit(data: ContactFormValues) {
    const body = buildMessage(data);
    setStatus("opening");
    const separator = whatsappUrl.includes("?") ? "&" : "?";
    window.open(
      `${whatsappUrl}${separator}text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
    reset();
    window.setTimeout(() => setStatus("idle"), 5000);
  }

  function sendEmail(data: ContactFormValues) {
    const body = buildMessage(data);
    setStatus("opening");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      t("form.emailSubject", { name: data.name }),
    )}&body=${encodeURIComponent(body)}`;
    reset();
    window.setTimeout(() => setStatus("idle"), 5000);
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
      className="relative overflow-hidden bg-[var(--color-background)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -end-44 -top-44 h-[30rem] w-[30rem] rounded-full bg-luxury-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="luxury-container relative">
        <div className="mb-5 grid gap-4 md:grid-cols-2">
          <a
            href={`mailto:${contactEmail}`}
            className="group flex min-h-[120px] items-center justify-between gap-5 rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_55px_rgba(17,18,16,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold/45 md:p-7"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/25 bg-luxury-gold/10 text-luxury-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {t("direct.emailLabel")}
                </span>
                <span className="mt-2 block break-all font-display text-lg font-semibold md:text-xl">
                  {contactEmail}
                </span>
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-luxury-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[120px] items-center justify-between gap-5 rounded-[1.8rem] border border-[#5c3928] bg-[#5c3928] p-6 text-white shadow-[0_20px_60px_rgba(77,45,31,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#704a35] md:p-7"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#7af0a6]">
                <MessageCircle className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  {t("direct.whatsappLabel")}
                </span>
                <span className="mt-2 block font-display text-lg font-semibold md:text-xl">
                  {t("direct.whatsappAction")}
                </span>
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-luxury-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="grid overflow-hidden rounded-[2.4rem] border border-[var(--color-border)] bg-luxury-black shadow-[0_35px_110px_rgba(17,18,16,0.17)] lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden p-7 text-luxury-white md:p-12 lg:p-14"
          >
            <div
              className="pointer-events-none absolute -start-24 -top-24 h-64 w-64 rounded-full border border-luxury-gold/15"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -start-10 -top-10 h-36 w-36 rounded-full bg-luxury-gold/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="luxury-eyebrow mb-4">{t("eyebrow")}</p>
              <h2 className="luxury-heading text-balance text-luxury-white">
                {t("title")}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/65">
                {t("description")}
              </p>

              <div className="mt-10 space-y-4">
                {(["reply", "scope", "language"] as const).map((key) => (
                  <div key={key} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-luxury-gold/50 text-luxury-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-white/65">
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
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-3 text-xs font-semibold text-white/75 transition-colors hover:border-luxury-gold hover:text-luxury-gold"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[var(--color-surface)] p-6 text-[var(--color-foreground)] md:p-10 lg:p-12"
            noValidate
          >
            <div className="mb-8">
              <p className="font-display text-2xl font-semibold md:text-3xl">
                {t("form.title")}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {t("form.description")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className={cn(
                    "luxury-field",
                    errors.name && "border-red-500",
                  )}
                >
                  <span className="luxury-field-icon">
                    <UserRound className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="luxury-field-label">{t("form.name")}</span>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t("form.namePlaceholder")}
                      className="luxury-field-control"
                      {...register("name")}
                    />
                  </span>
                </label>
                {errors.name && (
                  <p className="mt-2 px-2 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className={cn(
                    "luxury-field",
                    errors.contact && "border-red-500",
                  )}
                >
                  <span className="luxury-field-icon">
                    <AtSign className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="luxury-field-label">
                      {t("form.contact")}
                    </span>
                    <input
                      id="contact"
                      type="text"
                      autoComplete="email"
                      placeholder={t("form.contactPlaceholder")}
                      className="luxury-field-control"
                      {...register("contact")}
                    />
                  </span>
                </label>
                {errors.contact && (
                  <p className="mt-2 px-2 text-xs text-red-500">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="service"
                className={cn(
                  "luxury-field",
                  errors.service && "border-red-500",
                )}
              >
                <span className="luxury-field-icon">
                  <BriefcaseBusiness className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="luxury-field-label">
                    {t("form.service")}
                  </span>
                  <select
                    id="service"
                    className="luxury-field-control"
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
                    <option value={t("form.services.motion")}>
                      {t("form.services.motion")}
                    </option>
                    <option value={t("form.services.other")}>
                      {t("form.services.other")}
                    </option>
                  </select>
                </span>
              </label>
              {errors.service && (
                <p className="mt-2 px-2 text-xs text-red-500">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className={cn(
                  "luxury-field items-start",
                  errors.message && "border-red-500",
                )}
              >
                <span className="luxury-field-icon mt-1">
                  <MessageSquareText className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="luxury-field-label">
                    {t("form.message")}
                  </span>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t("form.messagePlaceholder")}
                    className="luxury-field-control resize-none"
                    {...register("message")}
                  />
                </span>
              </label>
              {errors.message && (
                <p className="mt-2 px-2 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                dir="ltr"
                disabled={isSubmitting}
                className="luxury-button-whatsapp w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t("form.submit")}</span>
              </button>

              <button
                type="button"
                dir="ltr"
                disabled={isSubmitting}
                onClick={() => void handleSubmit(sendEmail)()}
                className="inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[1.15rem] border border-[var(--color-border)] bg-[var(--color-background)] px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold hover:text-luxury-gold disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Mail className="h-5 w-5 text-luxury-gold" />
                <span>{t("form.submitEmail")}</span>
              </button>

              {status === "opening" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="text-center text-sm font-medium text-emerald-600 sm:col-span-2"
                >
                  {t("form.status.opening")}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
