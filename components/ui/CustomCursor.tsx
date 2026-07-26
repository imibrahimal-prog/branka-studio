"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 480, damping: 34 });
  const smoothY = useSpring(cursorY, { stiffness: 480, damping: 34 });
  const [interactive, setInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();
    media.addEventListener("change", syncEnabled);

    function move(event: PointerEvent) {
      cursorX.set(event.clientX - 19);
      cursorY.set(event.clientY - 19);
      dotX.set(event.clientX - 3);
      dotY.set(event.clientY - 3);
    }

    function checkTarget(event: PointerEvent) {
      const target = event.target as HTMLElement | null;
      setInteractive(
        Boolean(
          target?.closest(
            "a, button, input, textarea, select, summary, video, [data-cursor]",
          ),
        ),
      );
    }

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", checkTarget);
    return () => {
      media.removeEventListener("change", syncEnabled);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", checkTarget);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: interactive ? 1.55 : 1,
          borderColor: interactive
            ? "rgba(199,164,106,0.95)"
            : "rgba(199,164,106,0.58)",
        }}
        className="pointer-events-none fixed start-0 top-0 z-[90] h-[38px] w-[38px] rounded-full border"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ scale: interactive ? 0.5 : 1 }}
        className="pointer-events-none fixed start-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-luxury-gold"
        aria-hidden="true"
      />
    </>
  );
}
