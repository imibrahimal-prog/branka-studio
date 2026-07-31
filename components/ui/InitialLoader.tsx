"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type PatternSideProps = {
  side: "left" | "right";
  reduceMotion: boolean | null;
};

function PatternSide({ side, reduceMotion }: PatternSideProps) {
  const isLeft = side === "left";

  return (
    <motion.div
      aria-hidden="true"
      initial={reduceMotion ? undefined : { opacity: 0 }}
      animate={
        reduceMotion
          ? { opacity: 0.36 }
          : {
              opacity: [0.24, 0.5, 0.24],
              x: isLeft ? [0, 14, 0] : [0, -14, 0],
              scale: [0.985, 1.02, 0.985],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 7,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }
      }
      className={`pointer-events-none absolute top-1/2 h-[108vh] w-[58vw] min-w-[260px] max-w-[560px] -translate-y-1/2 sm:w-[42vw] lg:w-[34vw] ${
        isLeft
          ? "-left-[34vw] sm:-left-[19vw] lg:-left-[10vw]"
          : "-right-[34vw] sm:-right-[19vw] lg:-right-[10vw]"
      }`}
    >
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="(max-width: 640px) 58vw, (max-width: 1024px) 42vw, 34vw"
        className={`object-contain ${isLeft ? "" : "-scale-x-100"}`}
      />
    </motion.div>
  );
}

export function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 500 : 2400,
    );

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#2b2122]"
          aria-label="Branka — Ibrahim Almusabi"
          aria-live="polite"
          role="status"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,243,228,0.045),transparent_54%)]"
          />

          <PatternSide side="left" reduceMotion={reduceMotion} />
          <PatternSide side="right" reduceMotion={reduceMotion} />

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <Image
              src="/images/branka-loading-logo.png"
              alt="برانكا — إبراهيم المصعبي"
              width={1278}
              height={1536}
              priority
              unoptimized
              sizes="(max-width: 640px) 82vw, 470px"
              className="h-auto w-[82vw] max-w-[470px] select-none object-contain"
            />

            <span className="relative mt-4 h-[2px] w-44 overflow-hidden rounded-full bg-[#ffdf9a]/20 sm:mt-5 sm:w-56">
              <motion.span
                initial={{ x: "-120%" }}
                animate={{ x: reduceMotion ? "0%" : ["-120%", "350%"] }}
                transition={{
                  duration: reduceMotion ? 0.25 : 1.35,
                  ease: "easeInOut",
                  repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                }}
                className="absolute inset-y-0 start-0 w-[38%] rounded-full bg-[#ffdf9a] shadow-[0_0_16px_rgba(255,223,154,0.7)]"
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
