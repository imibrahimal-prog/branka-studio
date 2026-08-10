import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { InitialLoader } from "@/components/ui/InitialLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <InitialLoader />
      <CustomCursor />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </SmoothScrollProvider>
  );
}
