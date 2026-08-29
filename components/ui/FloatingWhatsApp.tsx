import { MessageCircle, Phone } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/966552409575";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 left-4 z-[70] grid h-11 w-11 place-items-center rounded-full border border-[#f0cf91]/50 bg-[#176b45] text-white shadow-[0_12px_35px_rgba(18,72,48,0.34)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#f0cf91] hover:bg-[#218a54] hover:shadow-[0_16px_42px_rgba(33,138,84,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0cf91] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b2022] sm:bottom-6 sm:left-6 sm:h-12 sm:w-12"
      aria-label="تواصل مباشر عبر واتساب | Chat directly on WhatsApp"
      title="WhatsApp"
    >
      <MessageCircle
        className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-4deg]"
        strokeWidth={1.7}
        aria-hidden="true"
      />
      <Phone
        className="absolute h-3.5 w-3.5"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </a>
  );
}
