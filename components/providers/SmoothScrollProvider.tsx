"use client";

import { useLenis } from "@/hooks/useLenis";
import { useEffect, useState } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const syncEnabled = () => setEnabled(media.matches);

    syncEnabled();
    media.addEventListener("change", syncEnabled);
    return () => media.removeEventListener("change", syncEnabled);
  }, []);

  useLenis(enabled);
  return <>{children}</>;
}
