"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BrankaCyberLuxuryHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse Parallax Springs (Buttery smooth physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-plane 3D Parallax Transforms
  const gridX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const gridY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const coreGlowX = useTransform(smoothX, [-1, 1], [22, -22]);
  const coreGlowY = useTransform(smoothY, [-1, 1], [15, -15]);

  const topGlowX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const topGlowY = useTransform(smoothY, [-1, 1], [-12, 12]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isHoverSupported = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!isHoverSupported) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 2);
        mouseY.set(y * 2);
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#241712]"
      aria-hidden="true"
    >
      {/* 1. Base Master Multi-Stop Brand Gradient (Warm Espresso & Mocha to Brand Dark Brown #241712) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 32%, #38241c 0%, #2c1b14 45%, #241712 100%)",
        }}
      />

      {/* 2. Technical Blueprint Perspective Grid Matrix (Golden Amber Brand Matrix) */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 opacity-30"
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="brand-cyber-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(212, 184, 138, 0.22)"
                strokeWidth="0.8"
              />
              <circle cx="60" cy="0" r="1.5" fill="rgba(232, 201, 143, 0.6)" />
              <circle cx="0" cy="60" r="1" fill="rgba(199, 164, 106, 0.45)" />
            </pattern>
            {/* Soft Radial Fade for Grid */}
            <radialGradient id="brand-grid-mask-grad" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="50%" stopColor="white" stopOpacity="0.85" />
              <stop offset="85%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="brand-grid-mask">
              <rect width="100%" height="100%" fill="url(#brand-grid-mask-grad)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#brand-cyber-grid)"
            mask="url(#brand-grid-mask)"
          />
        </svg>
      </motion.div>

      {/* 3. Center-Bottom Radiant Molten Gold & Caramel Amber Spotlight Core */}
      <motion.div
        style={{ x: coreGlowX, y: coreGlowY }}
        animate={{
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.42, 0.55, 0.42],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[20%] h-[34rem] w-[54rem] rounded-full bg-gradient-to-t from-[#c7a46a]/35 via-[#8f522e]/25 to-transparent blur-[120px]"
      />

      {/* 4. Warm Gold & Amber Luxury Accent Crown Glow (Top Center) */}
      <motion.div
        style={{ x: topGlowX, y: topGlowY }}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          opacity: [0.24, 0.34, 0.24],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 h-[28rem] w-[48rem] rounded-full bg-gradient-to-b from-[#e8c98f]/30 via-[#a67c3b]/15 to-transparent blur-[130px]"
      />

      {/* 5. Floating Micro-Star / Tech Node Constellation Points in Gold & Warm Amber (النقاط) */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "18%", left: "22%", size: "w-1.5 h-1.5", color: "bg-[#d4b88a]", delay: 0 },
          { top: "28%", right: "24%", size: "w-2 h-2", color: "bg-[#e8c98f]", delay: 1.5 },
          { top: "68%", left: "18%", size: "w-1.5 h-1.5", color: "bg-[#f5dfb8]", delay: 2.2 },
          { top: "72%", right: "20%", size: "w-2 h-2", color: "bg-[#c7a46a]", delay: 0.8 },
          { top: "42%", left: "12%", size: "w-1 h-1", color: "bg-[#ffd79a]", delay: 3 },
          { top: "36%", right: "14%", size: "w-1 h-1", color: "bg-[#d4b88a]", delay: 2.7 },
        ].map((star, i) => (
          <motion.div
            key={i}
            style={{ top: star.top, left: star.left, right: star.right }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.35, 0.95, 0.35],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${star.size} ${star.color} shadow-[0_0_10px_rgba(212,184,138,0.8)]`}
          />
        ))}
      </div>

      {/* 6. Central Text Legibility Contrast Mask (Dark velvet mocha shield behind typography) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 54% at 50% 46%, rgba(14, 7, 5, 0.55) 0%, rgba(14, 7, 5, 0.15) 60%, transparent 100%)",
        }}
      />

      {/* 7. Perimeter Depth Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(10,5,3,0.85)]" />

      {/* 8. Bottom Seamless Section Transition into brand palette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0e0705] to-transparent" />
    </div>
  );
}
