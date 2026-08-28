"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  UserRound,
  AtSign,
  BriefcaseBusiness,
  MessageSquareText,
  Sparkles,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  contact: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "opening";

export function ContactPageContent() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@braanka.com";
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/i_dd_m";
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/i_dd_m";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966502757844";
  const phoneDisplay = "+966 50 275 7844";

  const formSchema = z.object({
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
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: "identity",
      message: "",
    },
  });

  function buildMessage(data: FormValues) {
    const serviceKey = data.service as
      | "identity"
      | "commerce"
      | "content"
      | "motion"
      | "other";
    const serviceLabel = t.has(`form.services.${serviceKey}`)
      ? t(`form.services.${serviceKey}`)
      : data.service;
    return [
      t("form.whatsappIntro"),
      "",
      `*${t("form.summary.name")}:* ${data.name}`,
      `*${t("form.summary.contact")}:* ${data.contact}`,
      `*${t("form.summary.service")}:* ${serviceLabel}`,
      "",
      `*${t("form.summary.message")}:*`,
      data.message,
    ].join("\n");
  }

  function onSubmit(data: FormValues) {
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

  function sendEmail(data: FormValues) {
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
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* 1. Header Hero Banner with Saudi Vision 2030 Logo and Islamic Art */}
      <section className="relative overflow-hidden bg-[#1c110b] pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Ambient glow effects */}
        <div className="pointer-events-none absolute -start-24 -top-24 h-80 w-80 rounded-full bg-[#704a35]/25 blur-[110px]" />
        <div className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-[#c7a46a]/15 blur-[110px]" />

        {/* Islamic & Geometric Luxury Watermark */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23d4b88a' stroke-width='1.2'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        {/* Saudi Vision 2030 Logo */}
        <div className="vision-2030-logo-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/vision-2030-white.svg"
            alt="رؤية السعودية 2030"
            className="vision-2030-logo"
          />
        </div>

        <div className="luxury-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-[#25150e]/90 px-4 py-1.5 text-xs font-bold text-[#d4b88a] shadow-md backdrop-blur-md md:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-luxury-gold" />
              <span>{t("eyebrow")}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              {t("pageTitle")}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70 md:text-xl">
              {t("pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-14 md:py-20">
        <div className="luxury-container relative">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-stretch gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-8">
              {/* Left Column: 3 Contact Info Cards in Dark Brown with Beige/Cream Text */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col justify-between gap-4"
              >
                {/* Card 1: Call Us */}
                <a
                  href="tel:+966502757844"
                  className="group relative flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-[#241712] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold hover:shadow-[0_16px_45px_rgba(199,164,106,0.15)]"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                      {t("cards.phoneTitle")}
                    </span>
                    <span
                      dir="ltr"
                      className="mt-1 text-base md:text-lg font-bold text-[#fbf8f2] tracking-wide"
                    >
                      {phoneDisplay}
                    </span>
                  </div>
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/35 bg-luxury-gold/15 text-luxury-gold transition-transform group-hover:scale-110">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                </a>

                {/* Card 2: Email Us */}
                <a
                  href={`mailto:${contactEmail}`}
                  className="group relative flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-[#241712] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold hover:shadow-[0_16px_45px_rgba(199,164,106,0.15)]"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                      {t("cards.emailTitle")}
                    </span>
                    <span className="mt-1 text-base md:text-lg font-bold text-[#fbf8f2] break-all">
                      {contactEmail}
                    </span>
                  </div>
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/35 bg-luxury-gold/15 text-luxury-gold transition-transform group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </div>
                </a>

                {/* Card 3: Location */}
                <div className="relative flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-[#241712] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.15)]">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
                      {t("cards.locationTitle")}
                    </span>
                    <span className="mt-1 text-base md:text-lg font-bold text-[#fbf8f2]">
                      {t("cards.locationValue")}
                    </span>
                  </div>
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/35 bg-luxury-gold/15 text-luxury-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                {/* Social channels pill list */}
                {socialLinks.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
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
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#241712] px-3.5 py-2 text-xs font-medium text-[#fbf8f2] transition-all hover:border-luxury-gold hover:text-luxury-gold hover:bg-white/[0.08]"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right Column: Main Form Card in Dark Brown with Luxury Beige Data Fields */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="rounded-[2.2rem] border border-white/10 bg-[#241712] p-7 md:p-10 lg:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.25)] relative overflow-hidden text-white"
              >
                <div className="mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {t("form.heading")}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {t("form.subheading")}
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  {/* Name & Contact Row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <div
                        className={cn(
                          "flex min-h-[76px] w-full items-center gap-3.5 rounded-[1.35rem] border border-[#e4d7c7] bg-[#f8f4ec] px-4 py-3 shadow-sm transition-all duration-300 focus-within:-translate-y-0.5 focus-within:border-luxury-gold focus-within:bg-[#fbf9f4] focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                          errors.name && "border-red-500",
                        )}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dac4ad] bg-[#ebdcc8] text-[#241712]">
                          <UserRound className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-[#7a5c46]">
                            {t("form.name")}
                          </span>
                          <input
                            id="page-name"
                            type="text"
                            autoComplete="name"
                            placeholder={t("form.namePlaceholder")}
                            className="block w-full border-0 bg-transparent p-0 text-sm font-semibold leading-6 text-[#23150e] outline-none placeholder:text-[#9e826e] placeholder:opacity-75 focus:outline-none focus:ring-0"
                            {...register("name")}
                          />
                        </span>
                      </div>
                      {errors.name && (
                        <p className="mt-1 px-2 text-xs text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Contact (Email / Phone) */}
                    <div>
                      <div
                        className={cn(
                          "flex min-h-[76px] w-full items-center gap-3.5 rounded-[1.35rem] border border-[#e4d7c7] bg-[#f8f4ec] px-4 py-3 shadow-sm transition-all duration-300 focus-within:-translate-y-0.5 focus-within:border-luxury-gold focus-within:bg-[#fbf9f4] focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                          errors.contact && "border-red-500",
                        )}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dac4ad] bg-[#ebdcc8] text-[#241712]">
                          <AtSign className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-[#7a5c46]">
                            {t("form.contact")}
                          </span>
                          <input
                            id="page-contact"
                            type="text"
                            autoComplete="email"
                            placeholder={t("form.contactPlaceholder")}
                            className="block w-full border-0 bg-transparent p-0 text-sm font-semibold leading-6 text-[#23150e] outline-none placeholder:text-[#9e826e] placeholder:opacity-75 focus:outline-none focus:ring-0"
                            {...register("contact")}
                          />
                        </span>
                      </div>
                      {errors.contact && (
                        <p className="mt-1 px-2 text-xs text-red-400">
                          {errors.contact.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <div
                      className={cn(
                        "flex min-h-[76px] w-full items-center gap-3.5 rounded-[1.35rem] border border-[#e4d7c7] bg-[#f8f4ec] px-4 py-3 shadow-sm transition-all duration-300 focus-within:-translate-y-0.5 focus-within:border-luxury-gold focus-within:bg-[#fbf9f4] focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                        errors.service && "border-red-500",
                      )}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dac4ad] bg-[#ebdcc8] text-[#241712]">
                        <BriefcaseBusiness className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-[#7a5c46]">
                          {t("form.service")}
                        </span>
                        <select
                          id="page-service"
                          className="block w-full border-0 bg-transparent p-0 text-sm font-semibold leading-6 text-[#23150e] outline-none cursor-pointer focus:outline-none focus:ring-0"
                          {...register("service")}
                        >
                          <option value="identity" className="bg-[#f8f4ec] text-[#23150e]">
                            {t("form.services.identity")}
                          </option>
                          <option value="commerce" className="bg-[#f8f4ec] text-[#23150e]">
                            {t("form.services.commerce")}
                          </option>
                          <option value="content" className="bg-[#f8f4ec] text-[#23150e]">
                            {t("form.services.content")}
                          </option>
                          <option value="motion" className="bg-[#f8f4ec] text-[#23150e]">
                            {t("form.services.motion")}
                          </option>
                          <option value="other" className="bg-[#f8f4ec] text-[#23150e]">
                            {t("form.services.other")}
                          </option>
                        </select>
                      </span>
                    </div>
                    {errors.service && (
                      <p className="mt-1 px-2 text-xs text-red-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <div
                      className={cn(
                        "flex min-h-[120px] w-full items-start gap-3.5 rounded-[1.35rem] border border-[#e4d7c7] bg-[#f8f4ec] px-4 py-3.5 shadow-sm transition-all duration-300 focus-within:-translate-y-0.5 focus-within:border-luxury-gold focus-within:bg-[#fbf9f4] focus-within:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                        errors.message && "border-red-500",
                      )}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dac4ad] bg-[#ebdcc8] text-[#241712] mt-0.5">
                        <MessageSquareText className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-[#7a5c46]">
                          {t("form.message")}
                        </span>
                        <textarea
                          id="page-message"
                          rows={4}
                          placeholder={t("form.messagePlaceholder")}
                          className="block w-full border-0 bg-transparent p-0 text-sm font-semibold leading-6 text-[#23150e] outline-none resize-none placeholder:text-[#9e826e] placeholder:opacity-75 focus:outline-none focus:ring-0"
                          {...register("message")}
                        />
                      </span>
                    </div>
                    {errors.message && (
                      <p className="mt-1 px-2 text-xs text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => void handleSubmit(sendEmail)()}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-luxury-gold transition-colors py-2.5 px-4 rounded-xl hover:bg-white/10"
                    >
                      <Mail className="h-4 w-4 text-luxury-gold" />
                      <span>{t("form.submitEmail")}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#a8884f] px-9 py-3.5 text-sm font-bold text-[#1a0f0a] shadow-[0_8px_30px_rgba(199,164,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,164,106,0.5)] active:translate-y-0 disabled:opacity-50"
                    >
                      <span>{t("form.submitNow")}</span>
                      <span className="text-sm font-bold rtl:rotate-180">→</span>
                    </button>
                  </div>

                  {status === "opening" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="status"
                      className="text-center text-sm font-medium text-[#d4b88a] pt-2"
                    >
                      {t("form.status.opening")}
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
