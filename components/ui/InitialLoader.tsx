"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2b2122]"
          aria-label="Branka Studio"
          role="status"
        >
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(88vw,480px)]"
          >
            <Image
              src="/images/branka-loading-logo.png"
              alt="Branka — Ibrahim Almusabi"
              width={1278}
              height={1536}
              priority
              unoptimized
              sizes="(max-width: 640px) 88vw, 480px"
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
