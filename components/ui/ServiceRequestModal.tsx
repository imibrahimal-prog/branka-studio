"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  PhoneCall,
  Mail,
  MapPin,
  X,
  User,
  AtSign,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useServiceModal } from "@/components/providers/ServiceModalProvider";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  contact: string;
  service: string;
  message: string;
};

export function ServiceRequestModal() {
  const t = useTranslations("contact");
  const { isOpen, closeModal, selectedService } = useServiceModal();
  const [submitted, setSubmitted] = useState(false);

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@braanka.com";
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966552409575";
  const phoneDisplay = "+966 55 240 9575";

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
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: selectedService || "identity",
      message: "",
    },
  });

  useEffect(() => {
    if (selectedService) {
      setValue("service", selectedService);
    }
  }, [selectedService, setValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  function buildMessage(data: FormValues) {
    const serviceKey = data.service as
      | "identity"
      | "commerce"
      | "content"
      | "performance"
      | "motion"
      | "other";
    const serviceName = t.has(`form.services.${serviceKey}`)
      ? t(`form.services.${serviceKey}`)
      : data.service;
    return [
      t("form.whatsappIntro"),
      "",
      `*${t("form.summary.name")}:* ${data.name}`,
      `*${t("form.summary.contact")}:* ${data.contact}`,
      `*${t("form.summary.service")}:* ${serviceName}`,
      "",
      `*${t("form.summary.message")}:*`,
      data.message,
    ].join("\n");
  }

  function onSubmit(data: FormValues) {
    const body = buildMessage(data);
    setSubmitted(true);
    const separator = whatsappUrl.includes("?") ? "&" : "?";
    window.open(
      `${whatsappUrl}${separator}text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setTimeout(() => {
      setSubmitted(false);
      reset();
      closeModal();
    }, 2500);
  }

  function sendEmail(data: FormValues) {
    const body = buildMessage(data);
    setSubmitted(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      t("form.emailSubject", { name: data.name }),
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setSubmitted(false);
      reset();
      closeModal();
    }, 2500);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 my-auto w-full max-w-5xl overflow-hidden rounded-[2.2rem] border border-luxury-gold/30 bg-[#160e0a] text-white shadow-[0_25px_90px_rgba(0,0,0,0.85)]"
            role="dialog"
            aria-modal="true"
          >
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute -top-40 -start-40 h-96 w-96 rounded-full bg-luxury-gold/15 blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-40 -end-40 h-96 w-96 rounded-full bg-[#d4b88a]/10 blur-[120px]"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label={t("form.close")}
              className="absolute top-5 end-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:scale-105 hover:border-luxury-gold hover:bg-luxury-gold/20 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative p-5 sm:p-7 md:p-10 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-8 items-stretch">
                {/* Left Side: 3 Info Cards (Stacked) */}
                <div className="flex flex-col justify-between gap-4">
                  {/* Card 1: Call Us */}
                  <a
                    href="tel:+966552409575"
                    className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold/50 hover:bg-white/[0.08]"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-luxury-gold">
                        {t("cards.phoneTitle")}
                      </span>
                      <span
                        dir="ltr"
                        className="mt-1 text-sm md:text-base font-bold text-white tracking-wide"
                      >
                        {phoneDisplay}
                      </span>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/30 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 text-luxury-gold shadow-[0_0_15px_rgba(199,164,106,0.2)] transition-transform group-hover:scale-110">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                  </a>

                  {/* Card 2: Email Us */}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold/50 hover:bg-white/[0.08]"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-luxury-gold">
                        {t("cards.emailTitle")}
                      </span>
                      <span className="mt-1 text-sm md:text-base font-bold text-white break-all">
                        {contactEmail}
                      </span>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/30 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 text-luxury-gold shadow-[0_0_15px_rgba(199,164,106,0.2)] transition-transform group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </div>
                  </a>

                  {/* Card 3: Location */}
                  <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-luxury-gold">
                        {t("cards.locationTitle")}
                      </span>
                      <span className="mt-1 text-sm md:text-base font-bold text-white/90">
                        {t("cards.locationValue")}
                      </span>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-luxury-gold/30 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 text-luxury-gold shadow-[0_0_15px_rgba(199,164,106,0.2)]">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Brand Trust Note */}
                  <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-luxury-gold/20 bg-gradient-to-r from-luxury-gold/10 to-transparent p-4 text-xs text-white/75">
                    <Sparkles className="h-5 w-5 shrink-0 text-luxury-gold" />
                    <span>
                      {t("promises.reply")} • {t("promises.scope")}
                    </span>
                  </div>
                </div>

                {/* Right Side: Main Form Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-3.5 py-1 text-xs font-semibold text-luxury-gold mb-2.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{t("form.modalTitle")}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {t("form.heading")}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/60">
                      {t("form.subheading")}
                    </p>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/20 text-luxury-gold mb-4 border border-luxury-gold/40">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-white">
                        {t("form.status.opening")}
                      </h4>
                      <p className="mt-2 text-sm text-white/70 max-w-sm">
                        {t("form.description")}
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                      noValidate
                    >
                      {/* Name & Contact Grid */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        {/* Name Input */}
                        <div>
                          <div
                            className={cn(
                              "relative flex items-center rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 transition-all duration-300 focus-within:border-luxury-gold focus-within:bg-white/[0.08] focus-within:ring-2 focus-within:ring-luxury-gold/30",
                              errors.name && "border-red-500/80",
                            )}
                          >
                            <input
                              id="modal-name"
                              type="text"
                              autoComplete="name"
                              placeholder={t("form.namePlaceholder")}
                              {...register("name")}
                              className="w-full border-0 bg-transparent text-sm text-white placeholder-white/40 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ring-0"
                            />
                            <User className="h-4 w-4 shrink-0 text-white/40 ms-2" />
                          </div>
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-400">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Contact Input */}
                        <div>
                          <div
                            className={cn(
                              "relative flex items-center rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 transition-all duration-300 focus-within:border-luxury-gold focus-within:bg-white/[0.08] focus-within:ring-2 focus-within:ring-luxury-gold/30",
                              errors.contact && "border-red-500/80",
                            )}
                          >
                            <input
                              id="modal-contact"
                              type="text"
                              autoComplete="tel"
                              placeholder={t("form.contactPlaceholder")}
                              {...register("contact")}
                              className="w-full border-0 bg-transparent text-sm text-white placeholder-white/40 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ring-0"
                            />
                            <AtSign className="h-4 w-4 shrink-0 text-white/40 ms-2" />
                          </div>
                          {errors.contact && (
                            <p className="mt-1 text-xs text-red-400">
                              {errors.contact.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <div
                          className={cn(
                            "relative flex items-center rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 transition-all duration-300 focus-within:border-luxury-gold focus-within:bg-white/[0.08] focus-within:ring-2 focus-within:ring-luxury-gold/30",
                            errors.service && "border-red-500/80",
                          )}
                        >
                          <select
                            id="modal-service"
                            {...register("service")}
                            className="w-full border-0 bg-transparent text-sm text-white outline-none cursor-pointer focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ring-0 [&>option]:bg-[#1e130e] [&>option]:text-white"
                          >
                            <option value="identity">
                              {t("form.services.identity")}
                            </option>
                            <option value="commerce">
                              {t("form.services.commerce")}
                            </option>
                            <option value="content">
                              {t("form.services.content")}
                            </option>
                            <option value="performance">
                              {t("form.services.performance")}
                            </option>
                            <option value="motion">
                              {t("form.services.motion")}
                            </option>
                            <option value="other">
                              {t("form.services.other")}
                            </option>
                          </select>
                          <Briefcase className="h-4 w-4 shrink-0 text-white/40 ms-2 pointer-events-none" />
                        </div>
                        {errors.service && (
                          <p className="mt-1 text-xs text-red-400">
                            {errors.service.message}
                          </p>
                        )}
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <div
                          className={cn(
                            "relative rounded-2xl border border-white/15 bg-white/[0.05] p-4 transition-all duration-300 focus-within:border-luxury-gold focus-within:bg-white/[0.08] focus-within:ring-2 focus-within:ring-luxury-gold/30",
                            errors.message && "border-red-500/80",
                          )}
                        >
                          <textarea
                            id="modal-message"
                            rows={3}
                            placeholder={t("form.messagePlaceholder")}
                            {...register("message")}
                            className="w-full resize-none border-0 bg-transparent text-sm text-white placeholder-white/40 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ring-0"
                          />
                        </div>
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-400">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={handleSubmit(sendEmail)}
                          className="text-xs font-semibold text-white/60 hover:text-luxury-gold transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                        >
                          {t("form.submitEmail")}
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#d4b88a] via-[#c7a46a] to-[#a8884f] px-8 py-3.5 text-sm font-bold text-[#160c07] shadow-[0_8px_30px_rgba(199,164,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,164,106,0.5)] active:translate-y-0 disabled:opacity-50"
                        >
                          <span>{t("form.submitNow")}</span>
                          <span className="text-sm font-bold rtl:rotate-180">
                            →
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
