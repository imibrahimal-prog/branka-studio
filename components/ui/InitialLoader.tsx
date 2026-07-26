"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 250 : 1700,
    );
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.45 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120b08]"
          aria-label="Branka Studio"
          role="status"
        >
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex w-[240px] flex-col items-center gap-8"
          >
            <BrandLogo inverse />
            <span className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.span
                initial={{ x: "-105%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: reduceMotion ? 0.2 : 1.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-y-0 start-0 w-full bg-luxury-gold"
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
