"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ServiceModalProvider } from "@/components/providers/ServiceModalProvider";
import { InitialLoader } from "@/components/ui/InitialLoader";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const ServiceRequestModal = dynamic(
  () =>
    import("@/components/ui/ServiceRequestModal").then(
      (mod) => mod.ServiceRequestModal,
    ),
  { ssr: false },
);

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false },
);

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ServiceModalProvider>
        <InitialLoader />
        <CustomCursor />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ServiceRequestModal />
      </ServiceModalProvider>
    </SmoothScrollProvider>
  );
}
