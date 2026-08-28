"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function LuxuryGradientHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse Parallax Springs (Buttery smooth physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 45, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Dynamic parallax shifts for multi-depth layers
  const layer1X = useTransform(smoothX, [-1, 1], [-30, 30]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-20, 20]);

  const layer2X = useTransform(smoothX, [-1, 1], [35, -35]);
  const layer2Y = useTransform(smoothY, [-1, 1], [25, -25]);

  const layer3X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const layer3Y = useTransform(smoothY, [-1, 1], [24, -24]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isHoverSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverSupported) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0d0705]"
      aria-hidden="true"
    >
      {/* 1. Base Multi-stop Luxury Master Gradient (Warm Obsidian to Dark Espresso & Mocha) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #090403 0%, #130a06 28%, #1c0f0a 50%, #150a06 72%, #0a0504 100%)",
        }}
      />

      {/* 2. Seamless Flow Gradients (Right to Left & Diagonal Depth) */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 85% 25%, rgba(120, 68, 39, 0.28) 0%, rgba(78, 42, 23, 0.12) 40%, transparent 70%), radial-gradient(circle at 15% 80%, rgba(94, 52, 30, 0.22) 0%, rgba(38, 20, 12, 0.1) 45%, transparent 75%)",
        }}
      />

      {/* 3. Deep Caramel & Rich Mocha Floating Aura (Top-Right Bloom) */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        animate={{
          scale: [1, 1.09, 0.96, 1],
          opacity: [0.32, 0.42, 0.3],
          x: [0, 18, -14, 0],
          y: [0, -12, 16, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -top-20 h-[36rem] w-[50rem] rounded-full bg-gradient-to-br from-[#8f522e]/40 via-[#6b3d22]/25 to-transparent blur-[130px]"
      />

      {/* 4. Soft Subtle Luxury Gold Ambient Radiance (Top Center Halo) */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          opacity: [0.16, 0.24, 0.15],
          y: [0, 14, -10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 -top-16 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#d8ba8b]/24 via-[#b8935c]/12 to-transparent blur-[140px]"
      />

      {/* 5. Warm Espresso & Cognac Depth Glow (Bottom-Left / Center-Left Flow) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        animate={{
          scale: [0.96, 1.1, 0.95],
          opacity: [0.24, 0.35, 0.22],
          x: [0, -16, 12, 0],
          y: [0, 16, -14, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 bottom-8 h-[34rem] w-[44rem] rounded-full bg-gradient-to-tr from-[#5a321d]/35 via-[#784326]/20 to-transparent blur-[150px]"
      />

      {/* 6. Subtle Diffused Linear Light Stream (Soft 45-degree angle flow) */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          rotate: [-18, -12, -18],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/4 h-[50rem] w-[28rem] rounded-full bg-gradient-to-b from-[#c7a46a]/15 via-[#8f522e]/10 to-transparent blur-[160px]"
      />

      {/* 7. Delicate Velvet Micro-Texture Overlay (Eliminates gradient banding & adds photographic richness) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 8. Text Legibility & Contrast Preservation Mask (Soft dark vignette behind headline & CTAs) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 58% at 50% 48%, rgba(13, 7, 5, 0.55) 0%, rgba(13, 7, 5, 0.15) 60%, transparent 100%)",
        }}
      />

      {/* 9. Cinematic Perimeter Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(8,4,3,0.75)]" />

      {/* 10. Bottom Smooth Transition Fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0705] to-transparent" />
    </div>
  );
}
