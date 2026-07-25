"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const t = useTranslations("loading");
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30, letterSpacing: "0.5em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.25em",
          duration: 0.7,
          ease: "power3.out",
        },
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.55, ease: "power2.inOut" },
          "-=0.25",
        )
        .to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: "power2.in",
          delay: 0.15,
        })
        .to(
          lineRef.current,
          { scaleX: 0, transformOrigin: "right center", duration: 0.35 },
          "-=0.25",
        )
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black"
          aria-hidden="true"
        >
          <h1
            ref={textRef}
            className="font-display text-2xl font-light uppercase tracking-[0.25em] text-luxury-white md:text-4xl"
          >
            {t("studio")}
          </h1>
          <div
            ref={lineRef}
            className="mt-6 h-px w-32 bg-luxury-gold md:w-48"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
