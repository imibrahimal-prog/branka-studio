"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type PatternSideProps = {
  side: "left" | "right";
  reduceMotion: boolean | null;
};

function PatternShine({ side, reduceMotion }: PatternSideProps) {
  if (reduceMotion) return null;

  const isLeft = side === "left";

  return (
    <motion.span
      aria-hidden="true"
      initial={{ backgroundPosition: "220% 50%", opacity: 0.3 }}
      animate={{
        backgroundPosition: ["220% 50%", "-120% 50%"],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 1.55,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.18,
        delay: isLeft ? 0 : 0.2,
      }}
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        backgroundImage:
          "linear-gradient(105deg, transparent 0%, transparent 36%, rgba(255,223,154,0.14) 43%, rgba(255,244,211,0.98) 50%, rgba(255,223,154,0.3) 57%, transparent 65%, transparent 100%)",
        backgroundSize: "260% 100%",
        WebkitMaskImage: "url(/images/branka-loader-pattern.png)",
        maskImage: "url(/images/branka-loader-pattern.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        mixBlendMode: "screen",
        filter: "drop-shadow(0 0 14px rgba(255,223,154,0.88))",
        transform: isLeft ? undefined : "scaleX(-1)",
      }}
    />
  );
}

function PatternSide({ side, reduceMotion }: PatternSideProps) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 h-[62dvh] min-h-[500px] w-auto max-w-none -translate-y-1/2 aspect-[960/1637] sm:h-[74dvh] lg:h-[88dvh] lg:max-h-[940px] ${
        isLeft
          ? "-left-[34vw] sm:-left-[16vw] lg:-left-[7vw]"
          : "-right-[34vw] sm:-right-[16vw] lg:-right-[7vw]"
      }`}
    >
      <motion.div
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
        className="relative h-full w-full origin-center"
      >
        <Image
          src="/images/branka-loader-pattern.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 62vh, (max-width: 1024px) 74vh, 88vh"
          className={`object-contain ${isLeft ? "" : "-scale-x-100"}`}
        />
        <PatternShine side={side} reduceMotion={reduceMotion} />
      </motion.div>
    </div>
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
          className="fixed inset-0 z-[100] flex h-[100dvh] items-center justify-center overflow-hidden bg-[#2b2022]"
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
            className="relative z-10 flex -translate-y-[1.5dvh] flex-col items-center"
          >
            <div className="relative w-[58vw] max-w-[460px] sm:w-[48vw]">
              <Image
                src="/images/branka-loading-logo.png"
                alt="برانكا — إبراهيم المصعبي"
                width={1278}
                height={1536}
                priority
                unoptimized
                sizes="(max-width: 640px) 58vw, 460px"
                className="h-auto w-full select-none object-contain"
              />
              <span
                aria-hidden="true"
                className="branka-loader-logo-shine absolute inset-0"
              />
            </div>

            <span className="relative -mt-[5.5dvh] h-[2px] w-32 overflow-hidden rounded-full bg-[#ffdf9a]/20 sm:-mt-10 sm:w-44 lg:w-52">
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
